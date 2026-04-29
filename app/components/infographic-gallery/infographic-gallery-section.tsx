"use client";

import { useMemo, useState } from "react";
import { promptCategories, promptItems, type PromptCategory, type PromptItem } from "./mock-data";
import { SectionHeader } from "./section-header";
import { GalleryToolbar } from "./gallery-toolbar";
import { MasonryGrid } from "./masonry-grid";
import { PromptDetailModal } from "./prompt-detail-modal";

export function InfographicGallerySection() {
  const [activeCategory, setActiveCategory] = useState<PromptCategory>("全部");
  const [query, setQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<PromptItem | null>(null);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return promptItems.filter((item) => {
      const matchesCategory = activeCategory === "全部" || item.category === activeCategory;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.description.toLowerCase().includes(normalizedQuery) ||
        item.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery));

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const handleCategoryChange = (category: PromptCategory) => {
    setActiveCategory(category);
  };

  const handleQueryChange = (value: string) => {
    setQuery(value);
  };

  const handleCopy = async (item: PromptItem) => {
    try {
      await navigator.clipboard.writeText(item.promptFull);
    } catch {
      // ignore clipboard failures in preview UI
    }
  };

  const handleGenerate = (item: PromptItem) => {
    setQuery(item.title);
    const section = document.getElementById("generator");
    section?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="infographic-gallery-section">
      <div className="infographic-gallery-shell">
        <SectionHeader />

        <GalleryToolbar
          categories={promptCategories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          query={query}
          onQueryChange={handleQueryChange}
        />

        <MasonryGrid
          items={filteredItems}
          onViewDetail={setSelectedItem}
          onGenerate={handleGenerate}
          onCopy={handleCopy}
        />
      </div>

      <PromptDetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onGenerate={handleGenerate}
        onCopy={handleCopy}
      />
    </section>
  );
}
