import type { PromptCategory } from "./mock-data";
import { promptGalleryStats } from "./mock-data";
import { CategoryTabs } from "./category-tabs";
import { SearchBar } from "./search-bar";

type GalleryToolbarProps = {
  categories: PromptCategory[];
  activeCategory: PromptCategory;
  onCategoryChange: (category: PromptCategory) => void;
  query: string;
  onQueryChange: (value: string) => void;
};

export function GalleryToolbar({
  categories,
  activeCategory,
  onCategoryChange,
  query,
  onQueryChange
}: GalleryToolbarProps) {
  return (
    <div className="gallery-toolbar">
      <div className="gallery-stats">
        {promptGalleryStats.map((item) => (
          <div key={item.label} className="gallery-stat">
            <span className="gallery-stat-value">{item.value}</span>
            <span className="gallery-stat-label">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="gallery-toolbar-controls">
        <SearchBar value={query} onChange={onQueryChange} />
        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onChange={onCategoryChange}
        />
      </div>
    </div>
  );
}
