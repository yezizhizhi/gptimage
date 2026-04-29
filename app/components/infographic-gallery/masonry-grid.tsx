import type { PromptTemplate } from "@/src/data/promptTemplates";
import { PromptCard } from "@/src/components/PromptCard";

type MasonryGridProps = {
  items: PromptTemplate[];
  onViewDetail: (item: PromptTemplate) => void;
};

export function MasonryGrid({ items, onViewDetail }: MasonryGridProps) {
  return (
    <div className="gallery-grid">
      {items.map((item) => (
        <PromptCard key={item.id} template={item} onViewDetails={onViewDetail} />
      ))}
    </div>
  );
}
