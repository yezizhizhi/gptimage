import Link from "next/link";

const quickTags = ["可视卡片", "知识图谱", "可视化总结"];

const examples = [
  "把笔记或教材整理成可视卡片",
  "把长文档生成知识图谱",
  "把 PDF / DOCX 转成可视化总结"
];

const faqs = [
  {
    question: "支持上传什么文件？",
    answer: "目前支持上传 PDF 和 DOCX 文件，也可以直接输入主题或描述需求。"
  },
  {
    question: "可以生成什么内容？",
    answer: "可以生成可视卡片、知识图谱和可视化总结。"
  },
  {
    question: "为什么不直接去 GPT 里生成？",
    answer:
      "这个页面专门针对知识可视化内容做了优化，更适合生成结构清晰、文字可读、结果更稳定的内容。"
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-14 pt-6 lg:px-8">
        <header className="flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-[-0.03em] text-white">
            VisualCard.ai
          </Link>

          <div className="flex items-center gap-3">
            <a href="#faq" className="hidden text-sm text-[var(--text-secondary)] sm:inline-flex">
              常见问题
            </a>
            <a href="#generate" className="rounded-full border border-white/12 px-4 py-2 text-sm">
              免费开始
            </a>
          </div>
        </header>

        <section className="relative flex flex-1 items-center py-14 sm:py-20">
          <div className="hero-glow" />

          <div className="grid w-full gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative z-10">
              <span className="eyebrow">由 GPT Image 2 驱动</span>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
                GPT Image 2
                <br />
                可视卡片生成器
              </h1>
              <h2 className="mt-6 max-w-3xl text-2xl font-medium leading-tight tracking-[-0.03em] text-[var(--text-primary)] sm:text-3xl">
                将任意内容一键生成可视卡片与知识图谱
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
                上传 PDF 或 DOCX，或直接描述你想生成的内容，即可快速生成精美的可视卡片、知识图谱与可视化总结。
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {quickTags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div id="generate" className="panel relative z-10">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--accent)]">
                立即生成
              </p>
              <div className="mt-6 flex flex-col gap-4">
                <label className="upload-button" htmlFor="landing-upload">
                  上传 PDF / DOCX
                </label>
                <input id="landing-upload" type="file" className="sr-only" accept=".pdf,.doc,.docx" />

                <textarea
                  className="prompt-input"
                  rows={5}
                  placeholder="例如：把这份生物章节整理成 3 张简洁清晰的可视卡片"
                />

                <button className="primary-button" type="button">
                  用 GPT Image 2 生成
                </button>
              </div>

              <p className="mt-5 text-sm leading-7 text-[var(--text-secondary)]">
                适合文字较多的内容，可生成结构清晰、排版美观的学习与知识可视化内容。
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-4 border-y border-white/8 py-6 text-sm text-[var(--text-secondary)] sm:grid-cols-3">
          <div className="info-chip">支持上传文件</div>
          <div className="info-chip">支持直接描述需求</div>
          <div className="info-chip">快速生成精美视觉内容</div>
        </section>

        <section className="py-14">
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
            你可以生成什么
          </h3>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {examples.map((example) => (
              <article key={example} className="card">
                <p className="text-lg leading-8 text-[var(--text-primary)]">{example}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="pb-8 pt-4">
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
            常见问题
          </h3>
          <div className="mt-8 space-y-4">
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

        <section className="mt-8 rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-6 py-10 text-center shadow-[0_28px_80px_rgba(0,0,0,0.32)] sm:px-8">
          <h3 className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
            开始生成你的可视卡片
          </h3>
          <a href="#generate" className="primary-button mx-auto mt-6 w-full max-w-xs">
            上传文件并生成
          </a>
        </section>

        <footer className="flex flex-col gap-5 py-10 text-sm text-[var(--text-secondary)] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-5">
            <Link href="/">隐私政策</Link>
            <Link href="/">服务条款</Link>
            <Link href="/">联系我们</Link>
          </div>
          <p>© 2026 VisualCard.ai</p>
        </footer>
      </div>
    </main>
  );
}
