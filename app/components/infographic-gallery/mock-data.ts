export type PromptCategory =
  | "全部"
  | "商业"
  | "教育"
  | "流程"
  | "对比"
  | "时间线"
  | "社媒";

export type PromptItem = {
  id: string;
  title: string;
  category: Exclude<PromptCategory, "全部">;
  tags: string[];
  description: string;
  promptPreview: string;
  promptFull: string;
  height: "short" | "medium" | "tall";
  palette: {
    top: string;
    bottom: string;
    accent: string;
  };
};

export const promptCategories: PromptCategory[] = [
  "全部",
  "商业",
  "教育",
  "流程",
  "对比",
  "时间线",
  "社媒"
];

export const promptGalleryStats = [
  { label: "Prompts", value: "1000+" },
  { label: "Categories", value: "12" },
  { label: "Weekly Updated", value: "Yes" }
] as const;

export const promptItems: PromptItem[] = [
  {
    id: "growth-timeline",
    title: "年度增长趋势信息图",
    category: "商业",
    tags: ["增长", "数据", "战略"],
    description: "适合展示年度增长趋势、关键节点与策略亮点。",
    promptPreview:
      "Create a clean vertical infographic with a premium business editorial style, using timeline anchors, KPI highlights, and elegant data labels...",
    promptFull:
      "Create a clean vertical infographic with a premium business editorial style, using timeline anchors, KPI highlights, elegant data labels, subtle icons, and clearly separated sections. Use warm neutral tones with orange accents, emphasize growth milestones, and keep the hierarchy suitable for executive reporting and presentations.",
    height: "medium",
    palette: { top: "#f8e5d0", bottom: "#fff9f3", accent: "#ef7a2f" }
  },
  {
    id: "science-concepts",
    title: "科学概念拆解图解",
    category: "教育",
    tags: ["知识图解", "科普", "教学"],
    description: "适合做教育类知识图解与概念拆解，结构直观。",
    promptPreview:
      "Design an educational infographic that explains a scientific concept through layered sections, labeled callouts, mini diagrams, and concise teaching notes...",
    promptFull:
      "Design an educational infographic that explains a scientific concept through layered sections, labeled callouts, mini diagrams, and concise teaching notes. Use a warm editorial layout with balanced whitespace, simple iconography, and a calm palette. The final result should be highly legible, suitable for classroom use and public science communication.",
    height: "tall",
    palette: { top: "#f7efe0", bottom: "#fffdf8", accent: "#d58d3c" }
  },
  {
    id: "social-mini",
    title: "社媒轻量信息图模板",
    category: "社媒",
    tags: ["社媒", "传播", "轻量"],
    description: "适合社交媒体传播的轻量信息图模板，信息浓缩。",
    promptPreview:
      "Create a compact social-media infographic with one strong headline, three concise data modules, bold icon cues, and a high-contrast final CTA...",
    promptFull:
      "Create a compact social-media infographic with one strong headline, three concise data modules, bold icon cues, and a high-contrast final CTA. Keep the layout optimized for fast scanning on social platforms, with warm editorial colors, clear spacing, and a polished product-style aesthetic.",
    height: "short",
    palette: { top: "#fbe5d8", bottom: "#fffaf6", accent: "#f06a24" }
  },
  {
    id: "process-map",
    title: "产品流程图信息图",
    category: "流程",
    tags: ["流程", "产品", "工作流"],
    description: "适合梳理步骤、节点与流程关系，清晰表达执行路径。",
    promptPreview:
      "Generate a process-focused infographic with step numbers, directional flow markers, modular blocks, and short action-oriented descriptions...",
    promptFull:
      "Generate a process-focused infographic with step numbers, directional flow markers, modular blocks, and short action-oriented descriptions. Keep the composition clean, warm, and presentation-ready, using elegant separators and subtle card layering to explain sequential workflows clearly.",
    height: "medium",
    palette: { top: "#f6e6d5", bottom: "#fffaf4", accent: "#d78347" }
  },
  {
    id: "before-after",
    title: "方案对比信息图",
    category: "对比",
    tags: ["对比", "方案", "分析"],
    description: "适合比较不同方案、版本或策略，差异点一目了然。",
    promptPreview:
      "Build a comparison infographic with a split layout, mirrored sections, summary badges, and concise difference callouts for two or three options...",
    promptFull:
      "Build a comparison infographic with a split layout, mirrored sections, summary badges, and concise difference callouts for two or three options. Use a warm editorial tone, balanced typography, and clear contrast between columns so the audience can quickly understand tradeoffs and recommendations.",
    height: "medium",
    palette: { top: "#f9e9db", bottom: "#fffdf9", accent: "#c96c38" }
  },
  {
    id: "company-milestones",
    title: "品牌发展时间线",
    category: "时间线",
    tags: ["品牌", "历程", "节点"],
    description: "适合展示品牌成长历程、里程碑与阶段性成果。",
    promptPreview:
      "Create a vertical timeline infographic with milestone markers, year labels, supporting captions, and a polished brand-storytelling tone...",
    promptFull:
      "Create a vertical timeline infographic with milestone markers, year labels, supporting captions, and a polished brand-storytelling tone. Use layered editorial spacing, warm off-white backgrounds, and a refined orange accent to make the timeline feel premium and easy to scan.",
    height: "tall",
    palette: { top: "#f5eadb", bottom: "#fffaf3", accent: "#e1863f" }
  },
  {
    id: "market-overview",
    title: "行业概览信息图",
    category: "商业",
    tags: ["行业", "市场", "趋势"],
    description: "适合展示行业结构、机会点与趋势判断。",
    promptPreview:
      "Compose a market-overview infographic with segmented industry blocks, key metric chips, trend callouts, and insight annotations in a premium editorial style...",
    promptFull:
      "Compose a market-overview infographic with segmented industry blocks, key metric chips, trend callouts, and insight annotations in a premium editorial style. The layout should support business storytelling, concise summaries, and visual clarity for reports or investor materials.",
    height: "short",
    palette: { top: "#faead8", bottom: "#fffaf5", accent: "#ef7a2f" }
  },
  {
    id: "learning-path",
    title: "学习路径图解",
    category: "教育",
    tags: ["学习", "路径", "课程"],
    description: "适合课程结构、学习路径与模块化知识地图展示。",
    promptPreview:
      "Design a structured learning-path infographic with roadmap sections, level indicators, module summaries, and motivational milestone checkpoints...",
    promptFull:
      "Design a structured learning-path infographic with roadmap sections, level indicators, module summaries, and motivational milestone checkpoints. Keep the style clear, warm, and encouraging, with a refined educational product feel that is suitable for study materials and course landing pages.",
    height: "medium",
    palette: { top: "#f7ebdb", bottom: "#fffdf8", accent: "#db8644" }
  }
];
