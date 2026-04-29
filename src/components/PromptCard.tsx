"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { PromptTemplate } from "@/src/data/promptTemplates";

type PromptCardProps = {
  template: PromptTemplate;
  onViewDetails?: (template: PromptTemplate) => void;
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

export function PromptCard({ template, onViewDetails }: PromptCardProps) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const palette = useMemo(() => getPalette(template.category), [template.category]);

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
    <article className="prompt-card">
      <button
        type="button"
        className="prompt-card-preview"
        onClick={() => onViewDetails?.(template)}
        style={
          {
            "--preview-top": palette.top,
            "--preview-bottom": palette.bottom,
            "--preview-accent": palette.accent
          } as React.CSSProperties
        }
        >
        {!imageFailed ? (
          <Image
            src={template.previewImage}
            alt={template.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1120px) 50vw, 33vw"
            className="prompt-card-preview-image"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="prompt-card-preview-fallback">
            <span>{template.title}</span>
          </div>
        )}
        <div className={`prompt-card-preview-sheet${imageFailed ? "" : " prompt-card-preview-sheet-overlay"}`}>
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
      </button>

      <div className="prompt-card-body">
        <div className="prompt-card-meta">
          <span className="prompt-card-category">{template.category}</span>
          <div className="prompt-card-tags">
            {template.tags.slice(0, 2).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <h3 className="prompt-card-title">{template.title}</h3>
        <p className="prompt-card-description">{template.description}</p>
        <p className="prompt-card-preview-text">{template.promptPreview}</p>

        <div className="prompt-card-actions">
          <button type="button" className="prompt-card-link" onClick={() => onViewDetails?.(template)}>
            查看详情
          </button>
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
    </article>
  );
}
