import type { PromptItem } from "./mock-data";

type PromptDetailModalProps = {
  item: PromptItem | null;
  onClose: () => void;
  onGenerate: (item: PromptItem) => void;
  onCopy: (item: PromptItem) => void;
};

export function PromptDetailModal({
  item,
  onClose,
  onGenerate,
  onCopy
}: PromptDetailModalProps) {
  if (!item) return null;

  const similar = item.tags.join(" · ");

  return (
    <div className="prompt-modal-backdrop" role="dialog" aria-modal="true">
      <div className="prompt-modal">
        <button type="button" className="prompt-modal-close" onClick={onClose}>
          关闭
        </button>

        <div
          className="prompt-modal-preview"
          style={
            {
              "--preview-top": item.palette.top,
              "--preview-bottom": item.palette.bottom,
              "--preview-accent": item.palette.accent
            } as React.CSSProperties
          }
        >
          <div className="prompt-card-preview-sheet prompt-card-preview-sheet-large">
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
        </div>

        <div className="prompt-modal-content">
          <div className="prompt-modal-meta">
            <span className="prompt-card-category">{item.category}</span>
            <div className="prompt-card-tags">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <h3 className="prompt-modal-title">{item.title}</h3>
          <p className="prompt-modal-description">{item.description}</p>

          <div className="prompt-modal-block">
            <h4>完整 Prompt</h4>
            <p>{item.promptFull}</p>
          </div>

          <div className="prompt-modal-block">
            <h4>Similar Prompts</h4>
            <p>{similar}</p>
          </div>

          <div className="prompt-modal-actions">
            <button type="button" className="prompt-card-link" onClick={() => onCopy(item)}>
              Copy Prompt
            </button>
            <button type="button" className="prompt-card-primary" onClick={() => onGenerate(item)}>
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
