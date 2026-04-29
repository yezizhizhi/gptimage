export type PromptTemplate = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  previewImage: string;
  promptPreview: string;
  fullPrompt: string;
  useCases: string[];
  style: string;
  orientation: "vertical" | "square" | "horizontal";
  difficulty: "easy" | "medium" | "advanced";
  featured: boolean;
  popular: boolean;
  sourceUrl?: string;
  sourceAuthor?: string;
  createdAt: string;
  updatedAt: string;
};

export const promptTemplates: PromptTemplate[] = [
  {
    id: "science-concept-breakdown",
    slug: "science-concept-breakdown",
    title: "科学概念分层拆解图",
    description: "适合把抽象学科知识拆成定义、原理、示例和关键结论，便于课堂讲解与自学复盘。",
    category: "学科知识",
    tags: ["科学", "概念", "结构化"],
    previewImage: "/images/prompts/science-concept-breakdown.png",
    promptPreview:
      "Create a premium vertical infographic explaining a scientific concept with a clean academic layout, layered sections, warm editorial typography, small icons, concise definitions...",
    fullPrompt:
      "Create a premium vertical infographic explaining a scientific concept. Use a refined academic editorial style with clear section hierarchy, warm off-white background, orange accent details, concise labels, small educational icons, and balanced spacing. Include the following structure: concept definition, core mechanism, real-world example, common misunderstanding, and key takeaway. Make the layout easy to scan, visually elegant, and suitable for study notes, classroom slides, and knowledge sharing.",
    useCases: ["课堂讲义", "科普图解", "学习笔记"],
    style: "Warm editorial academic",
    orientation: "vertical",
    difficulty: "medium",
    featured: true,
    popular: true,
    createdAt: "2026-04-01",
    updatedAt: "2026-04-30"
  },
  {
    id: "history-timeline-card",
    slug: "history-timeline-card",
    title: "历史时间线知识卡",
    description: "适合梳理重大事件、节点和人物关系，把时间脉络讲清楚。",
    category: "学科知识",
    tags: ["历史", "时间线", "节点"],
    previewImage: "/images/prompts/history-timeline-card.png",
    promptPreview:
      "Design a vertical timeline infographic for a history topic with milestone markers, date anchors, portrait callouts, and short supporting captions in a calm editorial style...",
    fullPrompt:
      "Design a vertical timeline infographic for a history topic. Use milestone markers, date anchors, portrait callouts, short supporting captions, and a warm editorial palette. Keep the hierarchy clear and elegant. Include a title, 5 to 7 key events, one section for turning points, and one short summary of historical significance. Make the infographic suitable for educational publishing, social learning cards, and classroom explanation.",
    useCases: ["历史复习", "人物生平", "事件演变"],
    style: "Educational timeline editorial",
    orientation: "vertical",
    difficulty: "medium",
    featured: false,
    popular: true,
    createdAt: "2026-04-02",
    updatedAt: "2026-04-30"
  },
  {
    id: "kids-animal-learning",
    slug: "kids-animal-learning",
    title: "儿童动物认知启蒙卡",
    description: "适合低龄启蒙内容，把形象、习性和简单知识做成轻松易懂的可视卡片。",
    category: "儿童启蒙",
    tags: ["儿童", "动物", "启蒙"],
    previewImage: "/images/prompts/kids-animal-learning.png",
    promptPreview:
      "Create a cute square educational infographic for children featuring one animal, large friendly labels, simple facts, soft illustration shapes, and bright but gentle colors...",
    fullPrompt:
      "Create a cute square educational infographic for children featuring one animal. Use large friendly labels, soft illustration shapes, rounded blocks, simple facts, and bright but gentle colors. Include sections for name, habitat, favorite food, fun fact, and a tiny visual comparison element. The design should feel safe, playful, and highly legible for preschool and early primary learning materials.",
    useCases: ["儿童启蒙", "亲子学习", "教培素材"],
    style: "Soft playful educational",
    orientation: "square",
    difficulty: "easy",
    featured: true,
    popular: false,
    createdAt: "2026-04-03",
    updatedAt: "2026-04-30"
  },
  {
    id: "kids-habit-growth-chart",
    slug: "kids-habit-growth-chart",
    title: "儿童习惯养成图解",
    description: "适合把刷牙、阅读、整理等日常习惯做成可视化成长卡，便于儿童理解和执行。",
    category: "儿童启蒙",
    tags: ["习惯", "成长", "儿童"],
    previewImage: "/images/prompts/kids-habit-growth-chart.png",
    promptPreview:
      "Make a child-friendly infographic showing a daily habit routine with step icons, reward badges, progress markers, and cheerful educational illustration blocks...",
    fullPrompt:
      "Make a child-friendly infographic showing a daily habit routine. Include step icons, reward badges, progress markers, and cheerful educational illustration blocks. Use soft warm colors, rounded sections, large typography, and very simple labels. Organize the content into morning, afternoon, and evening routines, plus one reward box and one encouragement message. The final result should be ideal for kindergarten, parenting content, and printable habit trackers.",
    useCases: ["习惯养成", "成长打卡", "家庭教育"],
    style: "Playful routine infographic",
    orientation: "vertical",
    difficulty: "easy",
    featured: false,
    popular: false,
    createdAt: "2026-04-04",
    updatedAt: "2026-04-30"
  },
  {
    id: "social-post-summary-card",
    slug: "social-post-summary-card",
    title: "社媒观点摘要卡",
    description: "适合把长内容压缩成适合社交平台传播的轻量信息图卡片。",
    category: "社媒卡片",
    tags: ["社媒", "摘要", "传播"],
    previewImage: "/images/prompts/social-post-summary-card.png",
    promptPreview:
      "Create a compact social media infographic card with one strong headline, three concise insight blocks, icon cues, punchy labels, and a bold but clean CTA area...",
    fullPrompt:
      "Create a compact social media infographic card with one strong headline, three concise insight blocks, icon cues, punchy labels, and a bold but clean CTA area. Use warm editorial colors, sharp hierarchy, generous spacing, and a premium product aesthetic. Optimize the composition for fast scrolling, mobile readability, and shareability on social platforms such as Xiaohongshu, LinkedIn, and Instagram.",
    useCases: ["社媒传播", "观点整理", "内容二次分发"],
    style: "Compact social editorial",
    orientation: "square",
    difficulty: "easy",
    featured: true,
    popular: true,
    createdAt: "2026-04-05",
    updatedAt: "2026-04-30"
  },
  {
    id: "social-carousel-infographic",
    slug: "social-carousel-infographic",
    title: "社媒轮播信息图模板",
    description: "适合将一个主题拆成多页轮播结构，增强停留和分享效果。",
    category: "社媒卡片",
    tags: ["轮播", "卡片", "内容运营"],
    previewImage: "/images/prompts/social-carousel-infographic.png",
    promptPreview:
      "Design a horizontal social carousel infographic system with a title cover, modular slide sections, highlight statistics, visual separators, and clean editorial typography...",
    fullPrompt:
      "Design a horizontal social carousel infographic system with a title cover, modular slide sections, highlight statistics, visual separators, and clean editorial typography. Create a consistent visual language across panels while keeping each slide minimal and readable. Use warm neutral backgrounds, subtle orange accents, and concise insights. The output should feel ready for social media carousels and creator content systems.",
    useCases: ["轮播封面", "内容拆条", "社媒运营"],
    style: "Carousel content system",
    orientation: "horizontal",
    difficulty: "medium",
    featured: false,
    popular: true,
    createdAt: "2026-04-06",
    updatedAt: "2026-04-30"
  },
  {
    id: "marketing-growth-report",
    slug: "marketing-growth-report",
    title: "增长营销概览信息图",
    description: "适合展示增长数据、投放结果和策略亮点，适用于营销复盘和汇报。",
    category: "商业营销",
    tags: ["营销", "增长", "数据"],
    previewImage: "/images/prompts/marketing-growth-report.png",
    promptPreview:
      "Build a premium business infographic with KPI modules, trend highlights, channel comparison blocks, and concise strategic insights in a polished editorial layout...",
    fullPrompt:
      "Build a premium business infographic with KPI modules, trend highlights, channel comparison blocks, and concise strategic insights in a polished editorial layout. Include sections for key metrics, campaign performance, audience insights, opportunities, and next-step recommendations. Use warm off-white backgrounds, crisp labels, refined chart styling, and orange emphasis for important data points. Make it suitable for business reporting and client-facing presentations.",
    useCases: ["营销复盘", "投放汇报", "业务分析"],
    style: "Business editorial dashboard",
    orientation: "vertical",
    difficulty: "advanced",
    featured: true,
    popular: true,
    createdAt: "2026-04-07",
    updatedAt: "2026-04-30"
  },
  {
    id: "brand-campaign-overview",
    slug: "brand-campaign-overview",
    title: "品牌活动信息图海报",
    description: "适合活动宣传、亮点汇总和传播节点梳理，兼顾视觉吸引力与信息层级。",
    category: "商业营销",
    tags: ["品牌", "活动", "宣传"],
    previewImage: "/images/prompts/brand-campaign-overview.png",
    promptPreview:
      "Create a polished campaign overview infographic poster with large headline typography, event modules, benefit highlights, and premium editorial art direction...",
    fullPrompt:
      "Create a polished campaign overview infographic poster with large headline typography, event modules, benefit highlights, premium editorial art direction, and elegant spacing. Include date information, participation highlights, three value points, and one final call-to-action section. Keep the visual tone warm, modern, and suitable for brand marketing, offline event promotion, and digital campaign communication.",
    useCases: ["活动海报", "品牌推广", "营销物料"],
    style: "Editorial promo poster",
    orientation: "vertical",
    difficulty: "medium",
    featured: false,
    popular: false,
    createdAt: "2026-04-08",
    updatedAt: "2026-04-30"
  },
  {
    id: "book-notes-framework",
    slug: "book-notes-framework",
    title: "读书笔记框架图",
    description: "适合把一本书拆成核心观点、章节逻辑和个人启发，做成结构清晰的知识卡。",
    category: "读书笔记",
    tags: ["读书", "框架", "观点"],
    previewImage: "/images/prompts/book-notes-framework.png",
    promptPreview:
      "Create a structured reading-note infographic with book title, core thesis, chapter insights, memorable quotes, and a final personal takeaway section...",
    fullPrompt:
      "Create a structured reading-note infographic with book title, core thesis, chapter insights, memorable quotes, and a final personal takeaway section. Use a calm editorial composition with subtle dividers, card-like information blocks, and warm paper-inspired colors. The result should feel like a premium reading journal page that is easy to review, share, and archive.",
    useCases: ["读书分享", "知识沉淀", "学习输出"],
    style: "Reading journal editorial",
    orientation: "vertical",
    difficulty: "medium",
    featured: true,
    popular: false,
    createdAt: "2026-04-09",
    updatedAt: "2026-04-30"
  },
  {
    id: "book-comparison-map",
    slug: "book-comparison-map",
    title: "多本书观点对照图",
    description: "适合比较多本书之间的共同点、分歧点和适用场景。",
    category: "读书笔记",
    tags: ["对照", "观点", "阅读"],
    previewImage: "/images/prompts/book-comparison-map.png",
    promptPreview:
      "Design a comparison infographic for multiple books with split panels, key ideas, applicable readers, and takeaway summaries arranged in a clean knowledge layout...",
    fullPrompt:
      "Design a comparison infographic for multiple books with split panels, key ideas, applicable readers, and takeaway summaries arranged in a clean knowledge layout. Use a premium editorial structure, restrained warm palette, and clear visual contrast between columns. The design should help readers quickly understand similarities, differences, and reading recommendations.",
    useCases: ["多书比较", "主题阅读", "输出总结"],
    style: "Comparison knowledge editorial",
    orientation: "horizontal",
    difficulty: "advanced",
    featured: false,
    popular: false,
    createdAt: "2026-04-10",
    updatedAt: "2026-04-30"
  },
  {
    id: "learning-roadmap",
    slug: "learning-roadmap",
    title: "学习路径路线图",
    description: "适合把一个能力成长过程拆成阶段目标、关键节点与执行建议。",
    category: "学习成长",
    tags: ["成长", "学习", "路线图"],
    previewImage: "/images/prompts/learning-roadmap.png",
    promptPreview:
      "Create a learning roadmap infographic with stage milestones, skill checkpoints, progress markers, and concise action advice in a motivating editorial layout...",
    fullPrompt:
      "Create a learning roadmap infographic with stage milestones, skill checkpoints, progress markers, and concise action advice in a motivating editorial layout. Divide the roadmap into beginner, intermediate, and advanced stages. Add one section for common blockers and another for recommended practice habits. Use warm, uplifting colors and a premium educational product aesthetic.",
    useCases: ["学习规划", "技能成长", "个人发展"],
    style: "Roadmap growth editorial",
    orientation: "vertical",
    difficulty: "medium",
    featured: true,
    popular: true,
    createdAt: "2026-04-11",
    updatedAt: "2026-04-30"
  },
  {
    id: "brand-story-timeline",
    slug: "brand-story-timeline",
    title: "品牌故事时间线图",
    description: "适合讲述品牌诞生、理念演变和关键里程碑，适配官网与品牌介绍。",
    category: "品牌故事",
    tags: ["品牌", "故事", "时间线"],
    previewImage: "/images/prompts/brand-story-timeline.png",
    promptPreview:
      "Generate a refined brand-story infographic with origin story blocks, milestone timeline, founding values, and signature moments using elegant editorial typography...",
    fullPrompt:
      "Generate a refined brand-story infographic with origin story blocks, milestone timeline, founding values, and signature moments using elegant editorial typography. Keep the tone premium, warm, and narrative-driven. Use balanced spacing, a museum-like layout rhythm, and subtle orange highlights. The infographic should feel suitable for brand websites, decks, and public storytelling assets.",
    useCases: ["品牌介绍", "官网故事", "路演资料"],
    style: "Brand narrative editorial",
    orientation: "vertical",
    difficulty: "medium",
    featured: true,
    popular: false,
    createdAt: "2026-04-12",
    updatedAt: "2026-04-30"
  }
];
