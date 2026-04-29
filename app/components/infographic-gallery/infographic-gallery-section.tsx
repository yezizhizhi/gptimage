"use client";

import { useMemo, useState } from "react";
import { PromptDetailModal } from "@/src/components/PromptDetailModal";
import type { PromptTemplate } from "@/src/data/promptTemplates";
import { getPromptTemplates } from "@/src/lib/getPromptTemplates";
import { promptCategories, type PromptCategory } from "./mock-data";
import { SectionHeader } from "./section-header";
import { GalleryToolbar } from "./gallery-toolbar";
import { MasonryGrid } from "./masonry-grid";

export function InfographicGallerySection() {
  const [activeCategory, setActiveCategory] = useState<PromptCategory>("全部");
  const [query, setQuery] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<PromptTemplate | null>(null);
  const templates = useMemo(() => getPromptTemplates(), []);

  const filteredTemplates = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return templates.filter((template) => {
      const matchesCategory =
        activeCategory === "全部" || template.category === activeCategory;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        template.title.toLowerCase().includes(normalizedQuery) ||
        template.description.toLowerCase().includes(normalizedQuery) ||
        template.category.toLowerCase().includes(normalizedQuery) ||
        template.promptPreview.toLowerCase().includes(normalizedQuery) ||
        template.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery));

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query, templates]);

  const handleCategoryChange = (category: PromptCategory) => {
    setActiveCategory(category);
  };

  const handleQueryChange = (value: string) => {
    setQuery(value);
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

        {filteredTemplates.length > 0 ? (
          <MasonryGrid items={filteredTemplates} onViewDetail={setSelectedTemplate} />
        ) : (
          <div className="gallery-empty-state">
            <h3>没有找到相关 Prompt 模板</h3>
            <p>试试更短的关键词，或者切换到其他分类看看。</p>
            <button
              type="button"
              className="prompt-card-link gallery-empty-action"
              onClick={() => {
                setQuery("");
                setActiveCategory("全部");
              }}
            >
              清空搜索
            </button>
          </div>
        )}
      </div>

      <PromptDetailModal
        template={selectedTemplate}
        open={!!selectedTemplate}
        onClose={() => setSelectedTemplate(null)}
      />
    </section>
  );
}
