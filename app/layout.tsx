import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "GPT Image 2 可视卡片生成器 | 一键生成可视卡片与知识图谱",
  description:
    "使用 GPT Image 2，将 PDF、DOCX、文本与主题描述一键生成可视卡片与知识图谱，支持在线预览与下载。",
  openGraph: {
    title: "GPT Image 2 可视卡片生成器",
    description:
      "将任意内容一键生成可视卡片与知识图谱，适合知识整理、教学传播与视觉化表达。",
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
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
