import Link from "next/link";

const navItems = ["功能", "模板库", "案例", "定价", "帮助中心"];
const quickTags = ["可视卡片", "知识图谱", "可视化总结"];
const models = ["GPT Image 2", "Nano Banana", "Gemini 9"];
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
              <span className="cyber-eyebrow">从 PDF / DOCX / 文本到可视知识</span>
              <h1 className="hero-title hero-title-match mt-2">
                GPT Image 2
                <br />
                可视卡片生成器
              </h1>
              <h2 className="mt-1.5 text-[1.15rem] font-semibold leading-tight tracking-[-0.03em] text-[var(--cyan-soft)] sm:text-[1.36rem]">
                将任意内容一键生成可视卡片与知识图谱
              </h2>
              <p className="mx-auto mt-1.5 max-w-3xl text-[12px] leading-5 text-[var(--text-muted)] sm:text-[13px]">
                支持 PDF / DOCX / 文本 / 主题描述中提炼重点，自动生成精美卡片与知识图谱，
                让知识更易理解、记忆与分享。
              </p>
            </div>

            <div id="generate" className="generator-panel generator-panel-match mx-auto mt-4 max-w-[980px]">
              <div className="tab-row tab-row-match">
                <button className="panel-tab panel-tab-active" type="button">
                  上传文档
                </button>
                <button className="panel-tab" type="button">
                  输入主题描述
                </button>
              </div>

              <div className="panel-body mt-3 rounded-[22px] border border-[rgba(52,221,255,0.28)] bg-[rgba(7,15,26,0.88)] p-3 shadow-[0_0_0_1px_rgba(57,237,255,0.08),0_0_26px_rgba(44,208,255,0.1)]">
                <div className="hero-form-grid">
                  <label className="upload-zone upload-zone-compact" htmlFor="landing-upload">
                    <input
                      id="landing-upload"
                      type="file"
                      className="sr-only"
                      accept=".pdf,.doc,.docx"
                    />
                    <span className="upload-icon">⤴</span>
                    <span className="upload-title">拖拽文件到此处，或点击上传</span>
                    <span className="upload-copy">支持 PDF、DOCX、PPTX、TXT（最大 50MB）</span>
                  </label>

                  <textarea
                    className="prompt-input prompt-input-compact"
                    rows={4}
                    placeholder="请输入你想生成的主题内容或描述。例如：“量子计算的3张简洁明亮的可视卡片”"
                  />
                </div>

                <div className="mt-2.5">
                  <div className="controls-grid controls-grid-four">
                    <div>
                      <div className="control-caption">选择模型</div>
                      <div className="model-row model-row-tight">
                        {models.map((model, index) => (
                          <button
                            key={model}
                            className={`model-chip ${index === 0 ? "model-chip-active" : ""}`}
                            type="button"
                          >
                            {model}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="select-like">
                      <span className="select-label">卡片风格</span>
                      <span className="select-value">深色科技</span>
                    </div>
                    <div className="select-like">
                      <span className="select-label">输出语言</span>
                      <span className="select-value">简体中文</span>
                    </div>
                    <button className="generate-button" type="button">
                      生成可视卡片知识图谱
                    </button>
                  </div>
                </div>
              </div>
            </div>

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
