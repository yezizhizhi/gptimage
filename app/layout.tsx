import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "GPT Image 2 Sticker Generator | 在线生成可爱贴纸风格图片",
  description:
    "使用 GPT Image 2，输入主题后快速生成可爱贴纸风格图片，支持在线预览与下载。",
  openGraph: {
    title: "GPT Image 2 Sticker Generator",
    description:
      "输入你想生成的贴纸主题，快速获得可爱、干净、适合社媒和打印的贴纸图片。",
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
