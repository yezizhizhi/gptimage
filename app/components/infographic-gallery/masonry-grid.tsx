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
    <div className="gallery-grid">
      {items.map((item) => (
        <PromptCard
          key={item.id}
          item={item}
          onViewDetail={onViewDetail}
          onGenerate={onGenerate}
          onCopy={onCopy}
        />
      ))}
    </div>
  );
}
