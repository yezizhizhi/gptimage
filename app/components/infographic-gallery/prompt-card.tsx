import type { PromptItem } from "./mock-data";

type PromptCardProps = {
  item: PromptItem;
  onViewDetail: (item: PromptItem) => void;
  onGenerate: (item: PromptItem) => void;
  onCopy: (item: PromptItem) => void;
};

export function PromptCard({ item, onViewDetail, onGenerate, onCopy }: PromptCardProps) {
  return (
    <article className={`prompt-card prompt-card-${item.height}`}>
      <button
        type="button"
        className="prompt-card-preview"
        onClick={() => onViewDetail(item)}
        style={
          {
            "--preview-top": item.palette.top,
            "--preview-bottom": item.palette.bottom,
            "--preview-accent": item.palette.accent
          } as React.CSSProperties
        }
      >
        <div className="prompt-card-preview-sheet">
          <span className="prompt-card-preview-chip">{item.category}</span>
          <div className="prompt-card-preview-lines">
            <span />
            <span />
            <span />
          </div>
          <div className="prompt-card-preview-chart">
            <span />
            <span />
            <span />
          </div>
        </div>
      </button>

      <div className="prompt-card-body">
        <div className="prompt-card-meta">
          <span className="prompt-card-category">{item.category}</span>
          <div className="prompt-card-tags">
            {item.tags.slice(0, 2).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <h3 className="prompt-card-title">{item.title}</h3>
        <p className="prompt-card-description">{item.description}</p>
        <p className="prompt-card-preview-text">{item.promptPreview}</p>

        <div className="prompt-card-actions">
          <button type="button" className="prompt-card-link" onClick={() => onViewDetail(item)}>
            查看详情
          </button>
          <button type="button" className="prompt-card-link" onClick={() => onCopy(item)}>
            复制 Prompt
          </button>
          <button type="button" className="prompt-card-primary" onClick={() => onGenerate(item)}>
            立即生成
          </button>
        </div>
      </div>
    </article>
  );
}
