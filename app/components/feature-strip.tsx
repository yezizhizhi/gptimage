import { FileOutput, ImageIcon, Layers3, Network } from "lucide-react";

const items = [
  {
    title: "多源内容解析",
    lines: ["支持多种格式", "提炼核心要点"],
    Icon: Layers3
  },
  {
    title: "可视卡片生成",
    lines: ["自动生成精美卡片", "信息一目了然"],
    Icon: ImageIcon
  },
  {
    title: "知识图谱构建",
    lines: ["智能梳理知识关系", "形成结构化图谱"],
    Icon: Network
  },
  {
    title: "导出与分享",
    lines: ["多种格式导出", "轻松分享传播"],
    Icon: FileOutput
  }
] as const;

export function FeatureStrip() {
  return (
    <section className="feature-strip" aria-label="核心卖点">
      {items.map(({ title, lines, Icon }) => (
        <article key={title} className="feature-strip-item">
          <Icon className="feature-strip-icon" strokeWidth={1.75} />
          <div>
            <h3 className="feature-strip-title">{title}</h3>
            {lines.map((line) => (
              <p key={line} className="feature-strip-line">
                {line}
              </p>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
