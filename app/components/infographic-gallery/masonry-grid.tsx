import type { PromptItem } from "./mock-data";
import { PromptCard } from "./prompt-card";

type MasonryGridProps = {
  items: PromptItem[];
  onViewDetail: (item: PromptItem) => void;
  onGenerate: (item: PromptItem) => void;
  onCopy: (item: PromptItem) => void;
};

export function MasonryGrid({
  items,
  onViewDetail,
  onGenerate,
  onCopy
}: MasonryGridProps) {
  return (
    <div className="gallery-masonry-grid">
      {items.map((item) => (
        <div key={item.id} className="gallery-masonry-item">
          <PromptCard
            item={item}
            onViewDetail={onViewDetail}
            onGenerate={onGenerate}
            onCopy={onCopy}
          />
        </div>
      ))}
    </div>
  );
}
