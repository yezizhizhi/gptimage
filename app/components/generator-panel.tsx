const topics = ["科技与未来", "教育科普", "商业展示", "节日活动", "品牌海报"];
const languages = ["简体中文", "English", "日本語"];

export function GeneratorPanel() {
  return (
    <section className="generator-glass-panel" aria-label="生成器">
      <div className="generator-tabs">
        <button type="button" className="generator-tab">
          上传文档
        </button>
        <button type="button" className="generator-tab generator-tab-active">
          输入主题描述
        </button>
      </div>

      <div className="generator-body">
        <label className="generator-label sr-only" htmlFor="topic-input">
          输入主题描述
        </label>
        <div className="generator-textarea-wrap">
          <textarea
            id="topic-input"
            className="generator-textarea"
            rows={5}
            placeholder={"输入你想生成的主题内容或描述，例如：\n“量子计算的发展历程与关键技术”"}
          />
          <span className="generator-counter">0/200</span>
        </div>

        <div className="generator-controls">
          <div className="generator-select-group">
            <span className="generator-field-label">粘贴主题</span>
            <select className="generator-select" defaultValue={topics[0]}>
              {topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>

          <div className="generator-select-group">
            <span className="generator-field-label">输出语言</span>
            <select className="generator-select" defaultValue={languages[0]}>
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>

          <button type="button" className="generator-submit">
            生成可视卡片与知识图谱 ⚡
          </button>
        </div>
      </div>
    </section>
  );
}
