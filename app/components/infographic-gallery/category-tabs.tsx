import type { PromptCategory } from "./mock-data";

type CategoryTabsProps = {
  categories: PromptCategory[];
  activeCategory: PromptCategory;
  onChange: (category: PromptCategory) => void;
};

export function CategoryTabs({
  categories,
  activeCategory,
  onChange
}: CategoryTabsProps) {
  return (
    <div className="gallery-category-tabs" aria-label="Prompt categories">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={`gallery-category-tab ${
            activeCategory === category ? "gallery-category-tab-active" : ""
          }`}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
