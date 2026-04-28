import Link from "next/link";
import { InteractiveGenerator } from "./interactive-generator";

const navItems = ["功能", "模板库", "案例", "定价", "帮助中心"];
const features = [
  {
    title: "贴纸风格包装",
    copy: "后端自动把主题包装成统一贴纸 prompt，减少手动调词成本。"
  },
  {
    title: "GPT Image 2 生成",
    copy: "通过服务端调用 OpenAI gpt-image-2，默认输出 1024x1024。"
  },
  {
    title: "即时预览",
    copy: "点击 Generate 后直接返回图片，在页面内完成预览与检查。"
  },
  {
    title: "下载导出",
    copy: "生成完成后可直接下载 PNG，方便发社媒或继续二次设计。"
  }
];

const faqs = [
  {
    question: "支持上传什么文件？",
    answer: "当前最小版本聚焦贴纸生成，只需要输入贴纸主题，不需要上传文件。"
  },
  {
    question: "可以生成什么内容？",
    answer: "可以生成单张贴纸风格插画，适合社媒、表情包、打印和创意素材。"
  },
  {
    question: "为什么不直接去 GPT 里生成？",
    answer:
      "这个页面已经把贴纸风格 prompt、默认参数和返回展示都封装好了，直接输入主题就能稳定出图。"
  }
];

export default function HomePage() {
  return (
    <main className="cyber-shell min-h-screen text-[var(--text-primary)]">
      <div className="tech-grid" />
      <div className="tech-orb tech-orb-left" />
      <div className="tech-orb tech-orb-right" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-14 pt-4 sm:px-6 lg:px-8">
        <header className="cyber-nav">
          <Link href="/" className="brand-mark">
            <span className="brand-icon">△</span>
            <span>GPT Image 2</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-[var(--text-muted)] lg:flex">
            {navItems.map((item) => (
              <a key={item} href="#generate" className="nav-link">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#faq" className="hidden text-sm text-[var(--text-muted)] sm:inline-flex">
              登录
            </a>
            <a href="#generate" className="trial-button">
              免费体验
            </a>
          </div>
        </header>

        <section className="hero-frame hero-matchup mt-4 overflow-hidden rounded-[28px]">
          <div className="hero-corner hero-corner-left" />
          <div className="hero-corner hero-corner-right" />
          <div className="hero-top-line" />
          <div className="hero-tech-strokes hero-tech-strokes-left" />
          <div className="hero-tech-strokes hero-tech-strokes-right" />

          <div className="relative px-5 pb-6 pt-5 sm:px-6 lg:px-8 lg:pb-6 lg:pt-4">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(47,230,255,0.12),transparent_18%),radial-gradient(circle_at_72%_34%,rgba(255,112,37,0.1),transparent_14%)]" />

            <div className="hero-center-copy hero-center-copy-match relative mx-auto text-center">
              <h1 className="hero-title hero-title-match hero-title-single mt-1">
                GPT Image 2 Sticker Generator
              </h1>
              <h2 className="mt-2 hero-subtitle">
                输入一个主题，立即生成可爱贴纸风格图片
              </h2>
              <p className="hero-description mx-auto mt-2 max-w-3xl">
                基于 GPT Image 2 的最小可用贴纸生成工具。输入你想要的贴纸主题，系统会自动包装成统一的贴纸风格 prompt，并返回可下载的图片预览。
              </p>
            </div>

            <InteractiveGenerator />

            <div className="mt-4">
              <div className="feature-grid mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                {features.map((feature) => (
                  <article key={feature.title} className="feature-card">
                    <div className="feature-icon">◎</div>
                    <h4 className="mt-3 text-base font-semibold text-white">{feature.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{feature.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="pb-8 pt-8">
          <div className="section-headline section-headline-left">
            <span className="section-dash" />
            <h3>常见问题</h3>
          </div>
          <div className="mt-7 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="faq-item">
                <summary>
                  <span>{faq.question}</span>
                  <span className="faq-plus">+</span>
                </summary>
                <p className="faq-answer">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <footer className="footer-bar">
          <div className="flex flex-wrap gap-5">
            <Link href="/">隐私政策</Link>
            <Link href="/">服务条款</Link>
            <Link href="/">联系我们</Link>
          </div>
          <p>© 2026 GPTImageStudio.com</p>
        </footer>
      </div>
    </main>
  );
}
