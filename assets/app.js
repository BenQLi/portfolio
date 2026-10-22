/* Portfolio site - static, no external dependencies */

var LANG_KEY = "portfolio-lang";
var lang = "zh";

var I18N = {
  zh: {
    brandName: "业务数字化作品集",
    navProjects: "项目", navCapabilities: "能力", navStack: "技术栈", navPath: "履历", navContact: "联系",
    heroEyebrow: "20 年企业级系统经验 · 8 年开发 + 12 年业务分析",
    heroTitle: "供应链数字化 · 数据体系与自动化 · 企业系统交付",
    heroLead: "我既懂开发怎么落地，也懂业务要什么：跟业务聊完流程，能直接跟开发对数据模型和接口，不需要中间翻译。这 20 年里 8 年在写代码、12 年在做业务分析与交付——所以我不只是提需求的人，我自己就能把重复劳动自动化掉，再用数据看板衡量效果。",
    statYears: "年企业级系统经验", statSplit: "年开发 + 业务分析", statIndustries: "个行业深度实践", statMNCs: "家跨国企业经历",
    btnProjects: "查看项目", btnContact: "联系我",
    noticeText: "<strong>关于数据保密</strong>：本站仅展示方法论、技术栈与效果指标。涉及客户订单、地址、商铺与财务数据的项目，源代码与数据集保存在私有仓库，不在公开页面发布——需要时可在签署保密前提下提供演示。",
    capTitle: "核心能力", capSub: "四条能力线，落在同一件事上：把业务问题变成能跑、能衡量、能持续运转的系统。",
    projTitle: "项目作品集", projSub: "点击卡片查看完整详情（问题 / 我的动作 / 结果 / 技术栈）。",
    stackTitle: "技术栈", pathTitle: "职业路径",
    contactTitle: "联系", contactSub: "在职看机会。如果你的团队需要一个既懂业务流程、又能直接跟开发对数据模型和接口的人，欢迎联系。",
    footerText: "本页面为个人作品集，不含任何客户业务数据。",
    filterAll: "全部", filterEnt: "企业级系统", filterData: "数据与分析", filterAuto: "流程自动化",
    lblProblem: "问题", lblActions: "我的动作", lblResults: "结果", lblStack: "技术栈",
    privateNote: "该项目为企业内部系统，源代码与客户数据不对外公开；以上为方法论与效果说明。如需深入讨论，可在保密前提下沟通。",
    viewDetail: "查看详情 →"
  },
  en: {
    brandName: "Business Digitalization Portfolio",
    navProjects: "Projects", navCapabilities: "Capabilities", navStack: "Stack", navPath: "Path", navContact: "Contact",
    heroEyebrow: "20 years in enterprise systems · 8 years development + 12 years business analysis",
    heroTitle: "Supply chain digitalization · Data & automation · Enterprise system delivery",
    heroLead: "I understand both how systems get built and what the business actually needs. After mapping a process with the business, I can sit down with developers and argue data models and interfaces directly — no translation layer in between. Eight of my twenty years were spent writing code, twelve in business analysis and delivery: I don't just raise requirements, I automate the repetitive work myself and measure the result.",
    statYears: "years in enterprise systems", statSplit: "years dev + business analysis", statIndustries: "industries in depth", statMNCs: "multinational employers",
    btnProjects: "View projects", btnContact: "Contact",
    noticeText: "<strong>On data confidentiality</strong>: this site shows method, stack and outcome metrics only. Source code and datasets for projects involving customer orders, addresses, merchants or financial data are kept in private repositories and are not published here. Walkthroughs can be provided under NDA.",
    capTitle: "Core capabilities", capSub: "Four capability lines that land on the same thing: turning a business problem into a running, measurable system.",
    projTitle: "Selected work", projSub: "Click a card for full detail (problem / what I did / outcome / stack).",
    stackTitle: "Stack", pathTitle: "Career path",
    contactTitle: "Contact", contactSub: "Currently employed and open to opportunities. If your team needs someone who can map the process with the business and then argue data models with the engineers — let's talk.",
    footerText: "Personal portfolio site. Contains no customer business data.",
    filterAll: "All", filterEnt: "Enterprise systems", filterData: "Data & analytics", filterAuto: "Process automation",
    lblProblem: "Problem", lblActions: "What I did", lblResults: "Outcome", lblStack: "Stack",
    privateNote: "Internal enterprise system — source code and customer data are not public. The above describes method and outcome. Happy to discuss details under NDA.",
    viewDetail: "View detail →"
  }
};

var CAPS = [
  {
    zh: { t: "供应链与工厂数字化", d: "大宗农产品、饲料食品行业的收发、物流、结算全链路。", p: ["端到端流程梳理与再造 (BPR)", "需求调研 → 方案评审 → UAT → 上线", "多工厂推广与用户培训", "甲方视角管控供应商交付"] },
    en: { t: "Supply chain & plant digitalization", d: "Receiving, shipping, logistics and settlement for agri-commodity and feed & food operations.", p: ["End-to-end process mapping and BPR", "Elicitation → design review → UAT → go-live", "Multi-plant rollout and user training", "Vendor delivery managed from the client side"] }
  },
  {
    zh: { t: "企业系统实施与交付", d: "ERP、报表体系、MDM——从选型到上线，站在甲方立场把事落地。", p: ["信息化方案设计与选型", "跨国 / 跨部门项目协同", "多供应商并行与责任边界划分", "上线演练、培训与运维交接"] },
    en: { t: "Enterprise system delivery", d: "ERP, reporting platforms, MDM — from selection to go-live, driven from the client's side of the table.", p: ["Solution design and selection", "Cross-region and cross-team coordination", "Multiple vendors in parallel with clear boundaries", "Go-live rehearsal, training and handover"] }
  },
  {
    zh: { t: "数据体系与 BI", d: "统一口径、自动管道、看得懂的看板——让决策有依据。", p: ["指标体系搭建与口径定义", "Power BI 全业务报表体系", "ETL / 数据管道自动化", "经营分析与决策支撑"] },
    en: { t: "Data platforms & BI", d: "One definition of every metric, automated pipelines, dashboards people actually read.", p: ["Metric framework and definition ownership", "Power BI reporting across the business", "ETL and pipeline automation", "Operational analysis and decision support"] }
  },
  {
    zh: { t: "业务流程自动化", d: "不只是提需求——自己把重复劳动做掉，并用数据验证效果。", p: ["影刀 RPA 端到端流程自动化", "Python 批处理与数据管道", "SQL 取数、整合与存储过程", "批量巡检、报表自动生成与分发"] },
    en: { t: "Business process automation", d: "Not just writing requirements — removing the repetitive work myself, then measuring it.", p: ["Yingdao RPA end-to-end automation", "Python batch jobs and pipelines", "SQL extraction, integration, stored procedures", "Bulk auditing, automated reporting and distribution"] }
  }
];

var PROJECTS = [
  {
    cat: "ent", priv: true,
    tag: { zh: "企业级系统 · 供应链", en: "Enterprise · Supply chain" },
    title: { zh: "天津工厂智能一卡通收发项目", en: "TJ Plant Smart-Card Receiving & Shipping" },
    sum: { zh: "把客户、银行、司机、地磅、仓储、财务开票整条链路数字化，实现无人化收发。", en: "Digitized the full chain — customers, banks, drivers, weighbridge, warehousing, finance invoicing — into an unmanned closed loop." },
    metrics: [{ zh: "200–300 车/日", en: "200–300 vehicles/day" }, { zh: "取消 10 个岗位", en: "10 positions removed" }, { zh: "推广 4 家工厂", en: "Rolled out to 4 plants" }],
    problem: { zh: "收发流程横跨客户、银行、司机车辆、地磅、仓储与财务开票，单据线下流转、断点多，开票与过磅全靠人工值守，日均两三百车的吞吐下人工环节成为瓶颈。", en: "Receiving and shipping spanned customers, banks, drivers, weighbridge, warehousing and finance invoicing. Documents moved on paper, data broke between hand-offs, and both invoicing and weighing depended on staffed posts — a bottleneck at 200–300 vehicles a day." },
    actions: [
      { zh: "作为甲方项目负责人：需求调研、方案评审、UAT 与验收，以及供应商交付管理", en: "Client-side project owner: requirements elicitation, design review, UAT & acceptance, and vendor delivery management" },
      { zh: "客户在线提交提货申请，系统自动校验资金/信用并分配提货单，对接银行自动收款", en: "Online pick-up requests with automatic funds/credit validation, order allocation, and bank integration for automatic collection" },
      { zh: "司机微信自助签到排队、入场车牌自动识别、无人过磅、流量计发货数据自动回传", en: "Driver self-service check-in and queuing via WeChat, ANPR at the gate, unmanned weighing, automatic flowmeter data capture" },
      { zh: "出库数据自动同步供应链系统，电子发票自动生成，进销项税自动归集", en: "Outbound data synced to the supply chain system, e-invoices auto-generated, input/output VAT compiled automatically" }
    ],
    results: [
      { zh: "日均 200–300 车无人化收发，全链路闭环", en: "200–300 vehicles/day handled unattended, full chain closed" },
      { zh: "取消开票室 4 人 + 地磅房 6 人，共 10 个人工值守岗位", en: "Removed 4 dispatch-office and 6 weighbridge positions — 10 manual posts in total" },
      { zh: "方案推广至日照、舟山、扬中，合计 4 家工厂", en: "Rolled out to Rizhao, Zhoushan and Yangzhong — 4 plants in total" }
    ],
    stack: ["Requirements elicitation", "UAT", "Vendor management", "Supply chain system", "Smart card / ANPR", "Weighbridge", "Flowmeter", "Bank API", "E-invoice"]
  },
  {
    cat: "ent", priv: true,
    tag: { zh: "企业级系统 · 新建工厂", en: "Enterprise · Greenfield plants" },
    title: { zh: "新建油籽工厂供应链系统实施", en: "Supply Chain System for Newly Built Plants" },
    sum: { zh: "天津、日照、舟山三家新建油籽工厂：从流程梳理到系统上线演练，支撑工厂顺利投产。", en: "Three greenfield oilseed plants — Tianjin, Rizhao, Zhoushan: from process mapping to go-live rehearsal, supporting commissioning." },
    metrics: [{ zh: "3 地新建工厂", en: "3 greenfield plants" }, { zh: "按期投产", en: "Commissioned on schedule" }],
    problem: { zh: "多家新建工厂需要在投产前建立统一的供应链交付体系，涉及供应链系统、智能一卡通、流量计等多套系统；各厂业务流程不统一，贸易收发环节存在业务风险。", en: "Several new plants needed a unified supply chain delivery capability before commissioning, across supply chain, smart-card and flowmeter systems; processes differed by plant and trade receiving/shipping carried business risk." },
    actions: [
      { zh: "梳理端到端收发业务流程，识别并提示业务风险点", en: "Mapped end-to-end receiving and shipping processes and surfaced business risks" },
      { zh: "完成供应链系统实施、用户培训与上线演练", en: "Delivered system implementation, user training and go-live rehearsal" },
      { zh: "并行协同多家供应商，明确各系统边界与接口责任", en: "Coordinated multiple vendors in parallel with clear system boundaries and interface ownership" }
    ],
    results: [
      { zh: "多厂交付业务流程标准化", en: "Delivery processes standardized across plants" },
      { zh: "供应链管理系统落地，支撑新建工厂顺利投产", en: "Supply chain system live, supporting smooth plant commissioning" },
      { zh: "贸易收发业务风险被提前识别并规避", en: "Trade receiving/shipping risks identified and mitigated before go-live" }
    ],
    stack: ["Process mapping", "Risk identification", "System implementation", "User training", "Go-live rehearsal", "Vendor coordination"]
  },
  {
    cat: "ent", priv: true,
    tag: { zh: "数据治理 · MDM", en: "Data governance · MDM" },
    title: { zh: "全球 MDM 主数据管理项目", en: "Global MDM Master Data Program" },
    sum: { zh: "把分散在国内多个系统中的交易对手主数据治理后并入集团全球 MDM 平台。", en: "Cleansed and consolidated counterparty master data from multiple domestic systems into the group's global MDM platform." },
    metrics: [{ zh: "多系统主数据整合", en: "Multi-system consolidation" }, { zh: "脚本与测试独立完成", en: "Scripts & tests, sole author" }, { zh: "集团授信额度报表", en: "Group credit-limit reporting" }],
    problem: { zh: "集团国内各业务系统的交易对手（CounterParty）主数据分散、口径不一，无法进入全球主数据平台，风控所需的集团级授信额度也没有统一视图。", en: "Counterparty master data was scattered across domestic systems with inconsistent definitions, blocking integration into the global MDM platform and leaving group-level credit exposure without a single view." },
    actions: [
      { zh: "独立完成多源业务数据的清洗、整合与导入开发的全部脚本编写与测试（SQL 存储过程）", en: "Authored and tested all SQL stored procedures for multi-source data cleansing, consolidation and import" },
      { zh: "通过多轮数据治理统一分散的主数据口径", en: "Ran multiple rounds of data governance to unify definitions" },
      { zh: "设计集团授信额度监控报表，并对业务用户进行培训", en: "Designed group credit-limit monitoring reports and trained business users" }
    ],
    results: [
      { zh: "国内交易对手主数据统一并入集团全球 MDM 平台", en: "Domestic counterparty master data unified into the global MDM platform" },
      { zh: "产出集团级授信额度监控报表，支撑风险控制", en: "Group-level credit-limit monitoring delivered, supporting risk control" },
      { zh: "技术能力保持在 hands-on 水平——这是 20 年经验最容易被质疑的地方", en: "Proof of hands-on technical capability — the thing 20-year profiles get challenged on most" }
    ],
    stack: ["SQL Server", "Stored procedures", "MDM", "Data cleansing", "Credit risk reporting", "User training"]
  },
  {
    cat: "ent", priv: true,
    tag: { zh: "企业级系统 · ERP", en: "Enterprise · ERP" },
    title: { zh: "Dynamics AX ERP 实施与报表体系重构", en: "Dynamics AX ERP Implementation & Reporting Revamp" },
    sum: { zh: "跨国团队更换核心 ERP，我负责中国区报表体系：选型、需求分析、供应商落地，核心业务数据同步周期缩短至 10 分钟。", en: "Core ERP replacement in a multinational team; I owned the China-region reporting system — selection, requirements and vendor delivery — cutting the core business data sync cycle to 10 minutes." },
    metrics: [{ zh: "数据同步 10 分钟", en: "10-minute data sync" }, { zh: "中国区报表负责人", en: "China reporting lead" }, { zh: "跨国多团队协作", en: "Multinational teams" }],
    problem: { zh: "核心 ERP 需要整体替换，与之相连的多套遗留业务系统接口与报表体系要同步重构；中国区缺少统一报表平台，业务数据同步慢，财务、物流、零件业务各自取数。", en: "The core ERP was being replaced, which meant rebuilding interfaces and reporting for multiple legacy systems; China had no unified reporting platform, data synced slowly, and finance, logistics and parts each pulled their own numbers." },
    actions: [
      { zh: "作为中国区报表系统负责人：方案选型、需求分析、供应商协同落地", en: "China-region reporting lead: solution selection, requirements analysis, vendor-coordinated delivery" },
      { zh: "参与日本、新加坡、中国香港团队的 MS Dynamics AX ERP 核心改造项目", en: "Participated in the MS Dynamics AX ERP core revamp with teams in Japan, Singapore and Hong Kong" },
      { zh: "整合多套遗留业务系统，搭建 BI 报表体系；核心业务实施读写分离", en: "Integrated multiple legacy systems into a BI reporting platform; implemented read/write separation for core business" }
    ],
    results: [
      { zh: "核心业务数据同步周期缩短到 10 分钟", en: "Core business data sync cycle shortened to 10 minutes" },
      { zh: "建成 BI 报表体系，支撑事业部财务、物流、零件业务分析", en: "BI reporting platform supporting finance, logistics and parts analysis across the division" },
      { zh: "多套遗留系统整合完成，取数口径统一", en: "Legacy systems integrated; one consistent set of numbers" }
    ],
    stack: ["Dynamics AX", "BI reporting", "Solution selection", "Requirements analysis", "Read/write separation", "Cross-region delivery"]
  },
  {
    cat: "data", priv: false,
    tag: { zh: "数据体系 · BI + 自动化", en: "Data platform · BI + automation" },
    title: { zh: "区域电商 BI 数据体系与自动化管道", en: "E-commerce BI Platform & Automated Pipelines" },
    sum: { zh: "从零搭建企业 BI 数据体系：Power BI 统一指标口径，RPA 打通原始数据到报表推送的全自动链路。", en: "Built the enterprise BI stack from scratch: Power BI with unified metric definitions, plus an RPA pipeline that runs from raw download to report delivery." },
    metrics: [{ zh: "Power BI 全业务报表", en: "Full-business Power BI" }, { zh: "端到端自动化管道", en: "End-to-end automation" }, { zh: "统一指标口径", en: "Unified metric definitions" }],
    problem: { zh: "本地生活电商的经营数据分散在各平台后台，每次分析都要人工下载、清洗、整理 Excel 再发版，口径因人而异，业务方拿到的数字常常不是最新的。", en: "Operating data sat in separate platform back-ends; every analysis cycle meant manual download, cleaning, Excel assembly and distribution, with definitions varying by person and numbers already stale on arrival." },
    actions: [
      { zh: "在 Power BI 上搭建全业务报表体系，统一指标口径，支持经营、订单、配送多维分析", en: "Built a full-business reporting system on Power BI with unified metric definitions, covering operations, orders and delivery" },
      { zh: "用影刀 RPA 打通自动化数据管道：原始数据下载 → 清洗 → 触发 Power BI 刷新 → 邮件发送报表", en: "Automated the pipeline with Yingdao RPA: raw download → cleaning → trigger Power BI refresh → email distribution" },
      { zh: "搭建纯本地分析环境（DuckDB + Python），数据不出本机，替代卡顿的 Excel 明细处理", en: "Built a local-first analysis environment (DuckDB + Python) so data never leaves the machine, replacing Excel on large detail sets" },
      { zh: "HTML 看板一键刷新与打包分发，业务方随时拿到最新版本", en: "One-click HTML dashboard refresh and packaging so business users always get the latest version" },
      { zh: "落地 AI 工具应用：用 WorkBuddy / CodeBuddy 开发订单热力图等可视化应用，缩短业务洞察路径", en: "Put AI tooling to work: built order heat-map and other visualisation apps with WorkBuddy / CodeBuddy, shortening the path from data to business insight" }
    ],
    results: [
      { zh: "指标口径统一，经营、订单、配送可多维分析", en: "One definition of every metric; multi-dimensional analysis across operations, orders and delivery" },
      { zh: "报表更新从人工流程变为自动执行 + 邮件推送", en: "Reporting moved from manual chore to an automated run with email delivery" },
      { zh: "大明细查询从分钟级降到秒级，且满足数据不出内网的合规要求", en: "Large detail queries down from minutes to seconds, with data kept on-premise" }
    ],
    stack: ["Power BI", "Yingdao RPA", "SQL", "Python", "DuckDB", "HTML/JS", "Excel automation", "AI tooling (WorkBuddy / CodeBuddy)"]
  },
  {
    cat: "data", priv: false,
    img: "assets/screenshot-density-map.png",
    tag: { zh: "数据可视化 · Web + 小程序", en: "Data viz · Web + mini program" },
    title: { zh: "配送订单密度地图", en: "Delivery Order Density Map" },
    sum: { zh: "把配送订单的空间分布做成可交互地图 + 小程序，支持日期筛选、聚类、下钻到订单。", en: "An interactive map (web + WeChat mini program) of delivery order density, with date filters, clustering and drill-down to orders." },
    metrics: [{ zh: "1,820 个配送地址", en: "1,820 delivery addresses" }, { zh: "月 5,000+ 单", en: "5,000+ orders/month" }, { zh: "Web + 小程序 + Android", en: "Web + mini program + Android" }],
    problem: { zh: "配送调度看不出订单在空间上的聚集规律，排班靠经验；地址文本不规范导致坐标缺失或漂移（曾出现坐标回退到区政府的问题）。", en: "Dispatchers could not see where orders actually clustered and relied on gut feel for scheduling; messy address text caused missing or drifting coordinates (one case snapped back to the district government seat)." },
    actions: [
      { zh: "搭建 Web 地图：聚类展示、柱状图、日期筛选、地址下钻到订单明细", en: "Built the web map: clustering, bar charts, date filters, drill-down from address to order detail" },
      { zh: "同步开发微信小程序端与 Android 端", en: "Built companion WeChat mini program and Android builds" },
      { zh: "建立地址标准库 + 高德 API 地理编码，修复坐标漂移；未匹配项输出可追溯清单", en: "Built an address reference library plus Amap geocoding to fix drift; unmatched items emitted as a traceable list" },
      { zh: "数据全部内嵌、纯本地部署，满足保密要求", en: "Fully local deployment with embedded data to meet confidentiality requirements" }
    ],
    results: [
      { zh: "覆盖东胜区 1,820 个独立配送地址，月 5,000+ 单可视化", en: "Covers 1,820 distinct delivery addresses; 5,000+ orders/month visualized" },
      { zh: "调度从经验判断转为看数据", en: "Dispatching moved from gut feel to data" },
      { zh: "Web / 小程序 / Android 三端复用同一套地址库", en: "One shared address library reused across web, mini program and Android" }
    ],
    stack: ["JavaScript", "HTML/CSS", "Tencent Map SDK", "WeChat mini program", "Python", "Amap API", "JSON"]
  },
  {
    cat: "auto", priv: false,
    tag: { zh: "流程自动化 · 批量巡检", en: "Automation · Bulk audit" },
    title: { zh: "明厨亮灶视频流批量巡检", en: "Mingchu Video Stream Bulk Audit" },
    sum: { zh: "批量检测上千条视频流链接的可访问性，结果写回表格供新旧对比。", en: "Bulk-checked the reachability of 1,000+ video stream URLs and wrote results back into the sheet for before/after comparison." },
    metrics: [{ zh: "1,081 + 249 条链接", en: "1,081 + 249 URLs" }, { zh: "人工工时 → 分钟级", en: "Days of manual work → minutes" }],
    problem: { zh: "监管要求核对上千家商铺的明厨亮灶视频流是否可访问。人工逐个点开测试不现实，且每次复查都要重来一遍。", en: "Regulatory checks required verifying whether 1,000+ merchant video streams were reachable. Testing them one by one by hand was unrealistic, and every re-check repeated the whole effort." },
    actions: [
      { zh: "编写批量探测脚本，读取表格中的 URL 并并发检测可访问性", en: "Wrote a bulk probe that reads URLs from the sheet and checks reachability concurrently" },
      { zh: "结果写入新列而非覆盖旧列，保留上一轮结果用于对比", en: "Wrote results to a new column instead of overwriting, preserving the previous round for comparison" },
      { zh: "输出未通过清单，供业务方逐条跟进", en: "Emitted a failed-items list for the business to follow up" }
    ],
    results: [
      { zh: "一次扫描覆盖 1,081 + 249 条链接", en: "One pass covered 1,081 + 249 URLs" },
      { zh: "人工工时从数天降到分钟级", en: "Manual effort cut from days to minutes" },
      { zh: "新旧结果可对比，复查不再从零开始", en: "Before/after comparison means re-checks no longer start from zero" }
    ],
    stack: ["Python", "requests", "openpyxl / xlrd", "Concurrency", "Excel output"]
  },
  {
    cat: "auto", priv: false,
    tag: { zh: "流程自动化 · 报表", en: "Automation · Reporting" },
    title: { zh: "财税报送表自动生成", en: "Tax & Finance Filing Generator" },
    sum: { zh: "从 CSV 源数据自动生成报送表，跨季度复用同一条流水线。", en: "Generates filing statements from CSV source data; the same pipeline is reused quarter after quarter." },
    metrics: [{ zh: "按季度复用", en: "Reused each quarter" }, { zh: "CSV → 报送表", en: "CSV → filing output" }],
    problem: { zh: "季度报送需要按固定口径整理大量明细，人工处理耗时长且口径容易漂移。", en: "Quarterly filings require reformatting large volumes of detail to a fixed specification — slow by hand, and the spec drifts between rounds." },
    actions: [
      { zh: "从 CSV 抽取并转换，按报送口径生成输出", en: "Extracted and transformed CSV input into the required filing format" },
      { zh: "沉淀为可复用脚本，下一季度直接换数据重跑", en: "Turned it into a reusable script — swap the data and rerun next quarter" }
    ],
    results: [
      { zh: "报送表生成从人工整理变为脚本执行", en: "Filing prep moved from manual assembly to script execution" },
      { zh: "口径固化在脚本里，不再因人而异", en: "The spec is baked into the script, so output no longer varies by person" }
    ],
    stack: ["Python", "CSV processing", "Excel output", "Reusable pipeline"]
  }
];

var STACK_BLOCKS = [
  { zh: "数据与分析", en: "Data & analytics", items: ["SQL / SQL Server", "Power BI", "Power Query / Pivot", "Python", "DuckDB", "指标体系与口径定义"] },
  { zh: "业务分析", en: "Business analysis", items: ["需求调研 / elicitation", "流程再造 BPR", "方案设计与评审", "UAT 与验收", "需求规格与接口文档"] },
  { zh: "系统与集成", en: "Systems & integration", items: ["供应链系统", "Dynamics AX ERP", "工厂智能一卡通", "MDM 主数据", "多供应商协同"] },
  { zh: "自动化", en: "Automation", items: ["影刀 RPA", "Python 批处理", "Excel 自动化", "定时任务与一键脚本", "报表自动分发", "AI 辅助开发（WorkBuddy / CodeBuddy）"] },
  { zh: "可视化", en: "Visualization", items: ["HTML/CSS/JS", "腾讯地图 SDK", "微信小程序", "热力图 / 聚类", "看板设计"] },
  { zh: "工程基础", en: "Engineering base", items: ["Java / .NET", "Oracle / MySQL / PostgreSQL", "PowerDesigner 建模", "CMMI5 / ITSM"] }
];

var TIMELINE = [
  { period: "8 年", zh: { r: "软件开发 · 全栈与数据建模", d: "清华同方 → LG CNS：独立完成需求分析、架构设计、PowerDesigner 数据库建模、前后端开发到上线部署；参与 CMMI5 认证与开发团队管理。这是我现在能直接跟开发对数据模型和接口的原因。" }, en: { r: "Software development · full-stack & data modelling", d: "Tsinghua Tongfang → LG CNS: requirements, architecture, PowerDesigner data modelling, front/back-end development and deployment; CMMI5 certification and dev team leadership. The reason I can still argue data models with engineers." } },
  { period: "4 年", zh: { r: "企业应用与 ERP 系统分析 · 佳能中国", d: "负责中国区 ERP 与供应链应用的实施、需求调研、运维与性能优化；主导报表体系重构，协同日本、新加坡、中国香港多团队推进跨国项目。" }, en: { r: "Enterprise apps & ERP · Canon China", d: "Owned implementation, requirements, operations and performance for China-region ERP and supply chain applications; led the reporting revamp across teams in Japan, Singapore and Hong Kong." } },
  { period: "5 年", zh: { r: "供应链与工厂信息化 · 路易达孚中国 / 路易达孚上海", d: "负责中国区油籽厂、糖厂与大宗农产品贸易的业务流程管理、供应链 IT 咨询与项目交付；作为甲方负责人推进多厂系统建设与主数据治理，管理供应商与交付。" }, en: { r: "Supply chain & plant IT · Louis Dreyfus China / Shanghai", d: "Owned business process management, supply chain IT consulting and delivery for China oilseed plants, sugar plants and bulk agri trading; client-side owner for multi-plant systems and master data governance." } },
  { period: "至今", zh: { r: "区域电商平台 · 数据分析 · 鄂尔多斯暖城一家", d: "搭建企业 BI 数据体系，打通端到端自动化数据管道，用 AI 工具做订单热力图等可视化应用，为本地生活电商业务决策赋能。" }, en: { r: "Regional e-commerce · data analysis", d: "Built the enterprise BI system, wired up the end-to-end automated data pipeline, and delivered AI-powered visualisations such as order heat maps to support local-life e-commerce decisions." } }
];

function t(obj) { return obj && obj[lang] !== undefined ? obj[lang] : ""; }

function applyI18n() {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  var nodes = document.querySelectorAll("[data-i18n]");
  for (var i = 0; i < nodes.length; i++) {
    var key = nodes[i].getAttribute("data-i18n");
    if (I18N[lang][key] !== undefined) {
      if (key === "noticeText" || key === "footerText") {
        nodes[i].innerHTML = I18N[lang][key];
      } else {
        nodes[i].textContent = I18N[lang][key];
      }
    }
  }
  document.getElementById("langToggle").textContent = lang === "zh" ? "EN" : "中文";
  renderCapabilities();
  renderFilters();
  renderProjects(currentFilter);
  renderStack();
  renderTimeline();
}

function renderCapabilities() {
  var html = "";
  for (var i = 0; i < CAPS.length; i++) {
    var c = CAPS[i][lang];
    html += '<div class="cap-card"><h3>' + c.t + '</h3><p>' + c.d + '</p><ul class="cap-points">';
    for (var j = 0; j < c.p.length; j++) html += "<li>" + c.p[j] + "</li>";
    html += "</ul></div>";
  }
  document.getElementById("capGrid").innerHTML = html;
}

var FILTERS = [
  { k: "all", zh: "全部", en: "All" },
  { k: "ent", zh: "企业级系统", en: "Enterprise systems" },
  { k: "data", zh: "数据与分析", en: "Data & analytics" },
  { k: "auto", zh: "流程自动化", en: "Process automation" }
];

var currentFilter = "all";

function renderFilters() {
  var html = "";
  for (var i = 0; i < FILTERS.length; i++) {
    var f = FILTERS[i];
    html += '<button class="filter-btn' + (f.k === currentFilter ? " is-active" : "") + '" data-filter="' + f.k + '">' + f[lang] + "</button>";
  }
  var row = document.getElementById("filterRow");
  row.innerHTML = html;
  var btns = row.querySelectorAll(".filter-btn");
  for (var b = 0; b < btns.length; b++) {
    btns[b].addEventListener("click", function () {
      currentFilter = this.getAttribute("data-filter");
      renderFilters();
      renderProjects(currentFilter);
    });
  }
}

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function renderProjects(filter) {
  var html = "";
  for (var i = 0; i < PROJECTS.length; i++) {
    var p = PROJECTS[i];
    if (filter !== "all" && p.cat !== filter) continue;
    html += '<article class="pcard" data-idx="' + i + '">';
    html += '<span class="pcard-tag' + (p.priv ? " tag-private" : "") + '">' + esc(t(p.tag)) + (p.priv ? " · " + (lang === "zh" ? "内部项目" : "Internal") : "") + "</span>";
    if (p.img) html += '<img class="pcard-img" src="' + p.img + '" alt="' + esc(t(p.title)) + '" loading="lazy">';
    html += "<h3>" + esc(t(p.title)) + "</h3><p>" + esc(t(p.sum)) + "</p>";
    html += '<div class="pcard-metrics">';
    for (var m = 0; m < p.metrics.length; m++) html += '<span class="metric">' + esc(t(p.metrics[m])) + "</span>";
    html += "</div>";
    html += '<span class="pcard-more">' + I18N[lang].viewDetail + "</span>";
    html += "</article>";
  }
  var grid = document.getElementById("projectGrid");
  grid.innerHTML = html;
  var cards = grid.querySelectorAll(".pcard");
  for (var c = 0; c < cards.length; c++) {
    cards[c].addEventListener("click", function () {
      openModal(parseInt(this.getAttribute("data-idx"), 10));
    });
  }
}

function renderStack() {
  var html = "";
  for (var i = 0; i < STACK_BLOCKS.length; i++) {
    var b = STACK_BLOCKS[i];
    html += '<div class="stack-block"><h4>' + b[lang] + '</h4><div class="chips">';
    for (var j = 0; j < b.items.length; j++) html += '<span class="chip">' + esc(b.items[j]) + "</span>";
    html += "</div></div>";
  }
  document.getElementById("stackGrid").innerHTML = html;
}

function renderTimeline() {
  var html = "";
  for (var i = 0; i < TIMELINE.length; i++) {
    var x = TIMELINE[i];
    html += '<li><div class="tl-period">' + esc(x.period) + '</div><div class="tl-role">' + esc(x[lang].r) + '</div><p class="tl-desc">' + esc(x[lang].d) + "</p></li>";
  }
  document.getElementById("timeline").innerHTML = html;
}

var modal = document.getElementById("modal");
var modalBody = document.getElementById("modalBody");

function openModal(idx) {
  var p = PROJECTS[idx];
  var html = "";
  html += "<h2>" + esc(t(p.title)) + "</h2>";
  html += '<div class="modal-meta">' + esc(t(p.tag)) + (p.priv ? " · " + (lang === "zh" ? "内部项目" : "Internal") : "") + "</div>";
  if (p.img) html += '<img class="modal-img" src="' + p.img + '" alt="' + esc(t(p.title)) + '">';
  html += '<div class="mblock"><h4>' + I18N[lang].lblProblem + "</h4><p>" + esc(t(p.problem)) + "</p></div>";
  html += '<div class="mblock"><h4>' + I18N[lang].lblActions + "</h4><ul>";
  for (var a = 0; a < p.actions.length; a++) html += "<li>" + esc(t(p.actions[a])) + "</li>";
  html += "</ul></div>";
  html += '<div class="mblock"><h4>' + I18N[lang].lblResults + '</h4><div class="result-box"><ul>';
  for (var r = 0; r < p.results.length; r++) html += "<li>" + esc(t(p.results[r])) + "</li>";
  html += "</ul></div></div>";
  html += '<div class="mblock"><h4>' + I18N[lang].lblStack + '</h4><div class="chips">';
  for (var s = 0; s < p.stack.length; s++) html += '<span class="chip">' + esc(p.stack[s]) + "</span>";
  html += "</div></div>";
  if (p.priv) html += '<div class="private-note">' + I18N[lang].privateNote + "</div>";
  modalBody.innerHTML = html;
  modal.hidden = false;
  modalBody.scrollTop = 0;
}

function closeModal() { modal.hidden = true; }

var closers = modal.querySelectorAll("[data-close]");
for (var i = 0; i < closers.length; i++) closers[i].addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });

document.getElementById("langToggle").addEventListener("click", function () {
  lang = lang === "zh" ? "en" : "zh";
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  applyI18n();
});

try {
  var saved = localStorage.getItem(LANG_KEY);
  if (saved === "en" || saved === "zh") lang = saved;
} catch (e) {}

applyI18n();
