"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { PromptTemplate } from "@/src/data/promptTemplates";

type PromptDetailModalProps = {
  template: PromptTemplate | null;
  open: boolean;
  onClose: () => void;
};

function getPalette(category: string) {
  const palettes: Record<string, { top: string; bottom: string; accent: string }> = {
    学科知识: { top: "#f7efe0", bottom: "#fffdf8", accent: "#d58d3c" },
    儿童启蒙: { top: "#fce8db", bottom: "#fffaf6", accent: "#ef8d46" },
    社媒卡片: { top: "#fbe5d8", bottom: "#fffaf6", accent: "#f06a24" },
    商业营销: { top: "#f8e5d0", bottom: "#fff9f3", accent: "#ef7a2f" },
    读书笔记: { top: "#f5eadb", bottom: "#fffaf3", accent: "#e1863f" },
    学习成长: { top: "#f6e6d5", bottom: "#fffaf4", accent: "#d78347" },
    品牌故事: { top: "#faead8", bottom: "#fffaf5", accent: "#ef7a2f" }
  };

  return palettes[category] ?? palettes["学科知识"];
}

function formatLabel(value: PromptTemplate["orientation"] | PromptTemplate["difficulty"]) {
  const map: Record<string, string> = {
    vertical: "Vertical",
    square: "Square",
    horizontal: "Horizontal",
    easy: "Easy",
    medium: "Medium",
    advanced: "Advanced"
  };

  return map[value] ?? value;
}

export function PromptDetailModal({ template, open, onClose }: PromptDetailModalProps) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const palette = useMemo(
    () => (template ? getPalette(template.category) : getPalette("学科知识")),
    [template]
  );

  if (!open || !template) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(template.fullPrompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

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
              "--preview-top": palette.top,
              "--preview-bottom": palette.bottom,
              "--preview-accent": palette.accent
            } as React.CSSProperties
          }
        >
          {!imageFailed ? (
            <img
              src={template.previewImage}
              alt={template.title}
              className="prompt-modal-preview-image"
              onError={() => setImageFailed(true)}
            />
          ) : null}
          <div className="prompt-card-preview-sheet prompt-card-preview-sheet-large">
            <span className="prompt-card-preview-chip">{template.category}</span>
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
            <span className="prompt-card-category">{template.category}</span>
            <div className="prompt-card-tags">
              {template.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <h3 className="prompt-modal-title">{template.title}</h3>
          <p className="prompt-modal-description">{template.description}</p>

          <div className="prompt-modal-block">
            <h4>使用场景</h4>
            <p>{template.useCases.join(" · ")}</p>
          </div>

          <div className="prompt-modal-grid">
            <div className="prompt-modal-block">
              <h4>风格</h4>
              <p>{template.style}</p>
            </div>
            <div className="prompt-modal-block">
              <h4>尺寸方向</h4>
              <p>{formatLabel(template.orientation)}</p>
            </div>
            <div className="prompt-modal-block">
              <h4>难度</h4>
              <p>{formatLabel(template.difficulty)}</p>
            </div>
          </div>

          <div className="prompt-modal-block">
            <h4>完整 Prompt</h4>
            <p>{template.fullPrompt}</p>
          </div>

          <div className="prompt-modal-actions">
            <button type="button" className="prompt-card-link" onClick={handleCopy}>
              {copied ? "Prompt 已复制" : "复制 Prompt"}
            </button>
            <button
              type="button"
              className="prompt-card-primary"
              onClick={() => router.push(`/create?template=${template.id}`)}
            >
              立即生成
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
