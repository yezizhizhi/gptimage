import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "GPT Image 2 可视卡片生成器 | PDF 一键生成可视卡片与知识图谱",
  description:
    "使用 GPT Image 2，将 PDF、DOCX 和文字内容快速生成精美的可视卡片、知识图谱与可视化总结。",
  openGraph: {
    title: "GPT Image 2 可视卡片生成器",
    description:
      "上传 PDF 或 DOCX，或直接描述需求，快速生成精美的可视卡片、知识图谱与可视化总结。",
    url: siteUrl,
    siteName: "GPT Image Studio",
    locale: "zh_CN",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
