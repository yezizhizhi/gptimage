import Link from "next/link";
import { InteractiveGenerator } from "./interactive-generator";

const navItems = ["功能", "模板库", "案例", "定价", "帮助中心"];
const features = [
  {
    title: "多源内容解析",
    copy: "支持 PDF / DOCX / 文本输入，自动提炼重点与结构。"
  },
  {
    title: "可视卡片生成",
    copy: "自动生成卡片内容，信息清晰，视觉精致。"
  },
  {
    title: "知识图谱构建",
    copy: "智能梳理知识关系，快速生成结构图谱。"
  },
  {
    title: "导出与分享",
    copy: "支持后续分享与展示，适合教学和传播。"
  }
];

const faqs = [
  {
    question: "支持上传什么文件？",
    answer: "目前支持上传 PDF 和 DOCX 文件，也可以直接输入主题或描述需求。"
  },
  {
    question: "可以生成什么内容？",
    answer: "可以生成可视卡片、知识图谱和可视化总结，也支持贴纸风格图片生成。"
  },
  {
    question: "为什么不直接去 GPT 里生成？",
    answer:
      "这个页面专门针对知识可视化内容做了优化，也内置了贴纸风格主题选择，更适合生成结构清晰、结果更稳定的内容。"
  }
];

export default function HomePage() {
  return (
    <main className="cyber-shell min-h-screen text-[var(--text-primary)]">
      <div className="tech-grid" />
      <div className="tech-orb tech-orb-left" />
      <div className="tech-orb tech-orb-right" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-14 pt-5 sm:px-6 lg:px-8">
        <header className="cyber-nav">
          <Link href="/" className="brand-mark">
            <span className="brand-icon">▽</span>
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

        <section className="hero-frame hero-matchup mt-4 rounded-[28px]">
          <div className="relative px-5 pb-8 pt-6 sm:px-6 lg:px-10 lg:pb-8 lg:pt-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_34%,rgba(244,219,190,0.4),transparent_18%),radial-gradient(circle_at_84%_28%,rgba(255,233,212,0.48),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.18),transparent_22%)]" />

            <div className="hero-center-copy hero-center-copy-match relative mx-auto text-center">
              <h1 className="hero-title hero-title-match hero-title-single mt-1">
                GPT Image 2 可视卡片生成器
              </h1>
              <h2 className="mt-2 hero-subtitle">
                将任意内容一键生成可视卡片与知识图谱
              </h2>
              <p className="hero-description mx-auto mt-2 max-w-3xl">
                支持 PDF / DOCX / 文本 / 主题描述中提炼重点，自动生成精美卡片与知识图谱，让知识更易理解、记忆与分享。
              </p>
            </div>

            <div className="relative mx-auto mt-6 max-w-[980px]">
              <InteractiveGenerator />
            </div>

            <div className="mt-8">
              <div className="feature-grid mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                {features.map((feature) => (
                  <article key={feature.title} className="feature-card">
                    <div className="feature-icon">◎</div>
                    <div>
                      <h4 className="text-base font-semibold text-[var(--text-primary)]">
                        {feature.title}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                        {feature.copy}
                      </p>
                    </div>
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
