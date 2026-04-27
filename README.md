# GPT Image Studio

一个面向 `gptimagestudio.com` 的独立 Next.js 落地页项目。

## 本地启动

```bash
npm install
npm run dev
```

## 部署到 Vercel

1. 将 `gptimagestudio/` 目录作为单独仓库上传到 GitHub。
2. 在 Vercel 中导入该仓库。
3. 保持 Framework Preset 为 `Next.js`。
4. 设置环境变量 `NEXT_PUBLIC_SITE_URL=https://gptimagestudio.com`。
5. 将自定义域名绑定到 `gptimagestudio.com`。

## 当前页面内容

- 单页中文落地页
- 关键词围绕 `GPT Image 2`
- 首屏包含上传入口、需求输入框和生成按钮
- 包含简单卖点、示例区、FAQ 和底部 CTA
