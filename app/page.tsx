import Link from "next/link";

const navItems = ["功能", "模板库", "案例", "定价", "帮助中心"];
const quickTags = ["可视卡片", "知识图谱", "可视化总结"];
const models = ["GPT Image 2", "Nano Banana", "Gemini 9"];
const features = [
  {
    title: "多源内容解析",
    copy: "支持 PDF / DOCX / 文本内容输入，自动提炼重点与结构。"
  },
  {
    title: "可视卡片生成",
    copy: "自动生成知识卡片，信息清晰，视觉精致，适合传播。"
  },
  {
    title: "知识图谱构建",
    copy: "智能生成知识图谱，展示概念关系与关键连接。"
  },
  {
    title: "导出与分享",
    copy: "支持导出图片与文档格式，便于分享与二次创作。"
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

        <section className="hero-frame mt-6 overflow-hidden rounded-[28px]">
          <div className="hero-corner hero-corner-left" />
          <div className="hero-corner hero-corner-right" />
          <div className="hero-top-line" />
          <div className="hero-tech-strokes hero-tech-strokes-left" />
          <div className="hero-tech-strokes hero-tech-strokes-right" />

          <div className="relative px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pb-10 lg:pt-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(47,230,255,0.13),transparent_18%),radial-gradient(circle_at_78%_22%,rgba(255,112,37,0.12),transparent_16%)]" />

            <div className="relative grid gap-5 md:grid-cols-[140px_minmax(0,1fr)_160px] md:items-start xl:grid-cols-[180px_minmax(0,1fr)_220px]">
              <aside className="hidden md:block">
                <div className="mini-preview-card">
                  <div className="mini-preview-lines" />
                  <div className="mini-phone-card">
                    <div className="mini-phone-glow" />
                    <div className="mini-phone-title">生成示例</div>
                    <div className="mini-phone-screen">
                      <div className="mini-screen-top" />
                      <div className="mini-screen-block" />
                      <div className="mini-screen-block mini-screen-block-wide" />
                      <div className="mini-screen-block" />
                    </div>
                  </div>
                </div>
              </aside>

              <div className="pt-1 text-center md:text-left">
                <span className="cyber-eyebrow">从 PDF / DOCX / 文本到可视知识</span>
                <h1 className="hero-title mt-4">
                  GPT Image 2
                  <br />
                  可视卡片生成器
                </h1>
                <h2 className="mt-3 max-w-3xl text-[1.55rem] font-semibold leading-tight tracking-[-0.03em] text-[var(--cyan-soft)] sm:text-[1.9rem]">
                  将任意内容一键生成可视卡片与知识图谱
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--text-muted)] sm:text-[15px] sm:leading-7">
                  从 PDF / DOCX / 文本 / 主题描述中提炼重点，自动生成精美卡片与知识图谱，让知识更易理解、记忆与分享。
                </p>

                <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
                  {quickTags.map((tag) => (
                    <span key={tag} className="cyber-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <aside className="hero-side hidden md:block">
                <div className="node-card">
                  <div className="node-card-label">知识关系图</div>
                  <div className="knowledge-map">
                    <span className="map-node map-node-center">核心概念</span>
                    <span className="map-node map-node-a">知识点</span>
                    <span className="map-node map-node-b">应用场景</span>
                    <span className="map-node map-node-c">关联概念</span>
                    <span className="map-node map-node-d">关键例子</span>
                    <span className="map-line map-line-a" />
                    <span className="map-line map-line-b" />
                    <span className="map-line map-line-c" />
                    <span className="map-line map-line-d" />
                  </div>
                </div>
              </aside>
            </div>

            <div id="generate" className="generator-panel mx-auto mt-6 max-w-5xl">
              <div className="tab-row">
                <button className="panel-tab panel-tab-active" type="button">
                  上传文档
                </button>
                <button className="panel-tab" type="button">
                  输入主题描述
                </button>
              </div>

              <div className="mt-5 rounded-[22px] border border-[rgba(52,221,255,0.28)] bg-[rgba(7,15,26,0.86)] p-4 shadow-[0_0_0_1px_rgba(57,237,255,0.08),0_0_40px_rgba(44,208,255,0.12)] sm:p-5">
                <label className="upload-zone" htmlFor="landing-upload">
                  <input
                    id="landing-upload"
                    type="file"
                    className="sr-only"
                    accept=".pdf,.doc,.docx"
                  />
                  <span className="upload-icon">⤴</span>
                  <span className="upload-title">拖拽文件到此处，或点击上传</span>
                  <span className="upload-copy">支持 PDF、DOCX，建议单文件 50MB 以内</span>
                </label>

                <div className="or-divider">或</div>

                <textarea
                  className="prompt-input"
                  rows={3}
                  placeholder="请输入你想生成的主题内容或描述。例如：量子力学的 3 张简洁明亮的可视卡片"
                />

                <div className="mt-4 space-y-3">
                  <div>
                    <div className="control-caption">选择模型</div>
                    <div className="model-row">
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

                  <div className="grid gap-3 lg:grid-cols-[1fr_1fr_auto]">
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

            <div className="mt-8">
              <div className="section-headline">
                <span className="section-dash" />
                <h3>从数据到洞察，AI 驱动可视化</h3>
                <span className="section-dash" />
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {features.map((feature) => (
                  <article key={feature.title} className="feature-card">
                    <div className="feature-icon">◎</div>
                    <h4 className="mt-6 text-xl font-semibold text-white">{feature.title}</h4>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{feature.copy}</p>
                  </article>
                ))}
              </div>

              <div className="mt-6 text-center">
                <a href="#generate" className="sample-link">
                  查看案例演示 →
                </a>
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
