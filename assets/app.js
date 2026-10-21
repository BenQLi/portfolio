/* Portfolio site - static, no external dependencies */

var LANG_KEY = "portfolio-lang";
var lang = "zh";

var I18N = {
  zh: {
    brandName: "业务数字化作品集",
    navProjects: "项目", navCapabilities: "能力", navStack: "技术栈", navPath: "履历", navContact: "联系",
    heroEyebrow: "20 年企业级系统经验 · 8 年开发 + 12 年业务分析",
    heroTitle: "供应链数字化 · 业务流程自动化 · 数据治理",
    heroLead: "我能自己识别业务流程里的断点，自己动手把它自动化掉，再用数据看板衡量效果——一个人跑完「识别 → 实现 → 度量」的闭环。市场上 RPA 工程师不懂业务，BA 不会自动化，两头都占的人极少。",
    statYears: "年系统经验", statPosts: "个岗位被系统取代", statAddr: "个地址标准化", statPlants: "家工厂推广",
    btnProjects: "查看项目", btnContact: "联系我",
    noticeText: "<strong>关于数据保密</strong>：本站仅展示方法论、技术栈与效果指标。涉及客户订单、地址、商铺与财务数据的项目，源代码与数据集保存在私有仓库，不在公开页面发布——需要时可在签署保密前提下提供演示。",
    capTitle: "核心能力", capSub: "三条能力线，合起来是一件事：把业务问题变成能跑的系统。",
    projTitle: "项目作品集", projSub: "点击卡片查看完整详情（问题 / 我的动作 / 结果 / 技术栈）。",
    stackTitle: "技术栈", pathTitle: "职业路径",
    contactTitle: "联系", contactSub: "以下信息请在本站发布前替换为你自己的联系方式。",
    footerText: "本页面为个人作品集，不含任何客户业务数据。",
    filterAll: "全部", filterEnt: "企业级系统", filterAuto: "流程自动化", filterData: "数据与可视化", filterCon: "方案咨询",
    lblProblem: "问题", lblActions: "我的动作", lblResults: "结果", lblStack: "技术栈",
    privateNote: "该项目为企业内部系统，源代码与客户数据不对外公开；以上为方法论与效果说明。如需深入讨论，可在保密前提下沟通。",
    viewDetail: "查看详情 →"
  },
  en: {
    brandName: "Business Digitalization Portfolio",
    navProjects: "Projects", navCapabilities: "Capabilities", navStack: "Stack", navPath: "Path", navContact: "Contact",
    heroEyebrow: "20 years in enterprise systems · 8 years dev + 12 years business analysis",
    heroTitle: "Supply chain digitalization · Business process automation · Data governance",
    heroLead: "I can spot the broken link in a business process, automate it myself, and measure the result with a dashboard — one person running the full loop of identify, build, measure. RPA engineers rarely understand the business; BAs rarely automate. Few sit on both sides.",
    statYears: "years in systems", statPosts: "manual positions removed", statAddr: "addresses standardized", statPlants: "plants rolled out",
    btnProjects: "View projects", btnContact: "Contact",
    noticeText: "<strong>On data confidentiality</strong>: this site shows method, stack and outcome metrics only. Source code and datasets for projects involving customer orders, addresses, merchants or financial data are kept in private repositories and are not published here. Walkthroughs can be provided under NDA.",
    capTitle: "Core capabilities", capSub: "Three capability lines that add up to one thing: turning a business problem into a running system.",
    projTitle: "Selected work", projSub: "Click a card for full detail (problem / what I did / outcome / stack).",
    stackTitle: "Stack", pathTitle: "Career path",
    contactTitle: "Contact", contactSub: "Replace the placeholders below with your own details before publishing.",
    footerText: "Personal portfolio site. Contains no customer business data.",
    filterAll: "All", filterEnt: "Enterprise systems", filterAuto: "Process automation", filterData: "Data & viz", filterCon: "Consulting",
    lblProblem: "Problem", lblActions: "What I did", lblResults: "Outcome", lblStack: "Stack",
    privateNote: "Internal enterprise system — source code and customer data are not public. The above describes method and outcome. Happy to discuss details under NDA.",
    viewDetail: "View detail →"
  }
};

var CAPS = [
  {
    zh: { t: "供应链与工厂数字化", d: "大宗农产品、饲料食品行业的收发、物流、结算全链路。", p: ["端到端流程梳理与再造 (BPR)", "需求调研 → 方案评审 → UAT → 上线", "多供应商协同与交付管控", "跨 4 地工厂的方案推广"] },
    en: { t: "Supply chain & plant digitalization", d: "Receiving, shipping, logistics and settlement for agri-commodity and feed & food operations.", p: ["End-to-end process mapping and BPR", "Elicitation → design review → UAT → go-live", "Multi-vendor coordination and delivery control", "Rollout across 4 plants"] }
  },
  {
    zh: { t: "业务流程自动化", d: "不只是提需求——自己把重复劳动做掉，并用数据验证效果。", p: ["影刀 RPA 浏览器自动化", "Python 脚本批处理与数据管道", "SQL 取数与数据整合", "批量巡检、报表自动生成"] },
    en: { t: "Business process automation", d: "Not just writing requirements — removing the repetitive work myself, then measuring it.", p: ["Yingdao RPA browser automation", "Python batch jobs and data pipelines", "SQL extraction and data integration", "Bulk auditing, automated reporting"] }
  },
  {
    zh: { t: "数据治理与分析", d: "主数据、指标口径、看板——让业务口径统一、决策有依据。", p: ["MDM 主数据治理", "指标体系搭建与口径定义", "Power BI / HTML 看板", "地理编码与地址标准化"] },
    en: { t: "Data governance & analytics", d: "Master data, metric definitions, dashboards — one version of the truth for decisions.", p: ["MDM master data governance", "Metric framework and definition ownership", "Power BI / HTML dashboards", "Geocoding and address standardization"] }
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
    tag: { zh: "企业级系统 · 新建工厂", en: "Enterprise · Greenfield plant" },
    title: { zh: "新工厂信息化从 0 到 1", en: "New Plant IT — From 0 to 1" },
    sum: { zh: "统筹多套系统与多家供应商，支撑新工厂按期投产。", en: "Stood up the IT landscape for a greenfield plant and supported commissioning on schedule." },
    metrics: [{ zh: "3 套系统", en: "3 systems" }, { zh: "3 家供应商", en: "3 vendors" }],
    problem: { zh: "新建工厂需要从零建立信息化能力，涉及供应链、智能一卡通、流量计等多套系统，供应商各自独立、接口与责任边界模糊。", en: "A new plant needed IT capability built from scratch across supply chain, smart-card and flowmeter systems, with independent vendors and unclear interface ownership." },
    actions: [
      { zh: "需求梳理与选型协同，明确各系统边界与接口责任", en: "Requirements and selection support; defined system boundaries and interface ownership" },
      { zh: "并行管理 3 家供应商的交付节奏与联调", en: "Managed delivery cadence and integration across 3 vendors in parallel" },
      { zh: "组织测试与验收，推动系统按期上线", en: "Drove testing, acceptance and on-schedule go-live" }
    ],
    results: [
      { zh: "3 套系统完成集成上线，支撑工厂投产", en: "3 systems integrated and live, supporting plant commissioning" },
      { zh: "供应商协同界面清晰，联调问题可控", en: "Clear vendor interface ownership; integration issues kept under control" }
    ],
    stack: ["Requirements", "Vendor management", "System integration", "UAT", "Go-live"]
  },
  {
    cat: "ent", priv: true,
    tag: { zh: "数据治理 · MDM", en: "Data governance · MDM" },
    title: { zh: "MDM 主数据治理", en: "MDM Master Data Program" },
    sum: { zh: "独立完成数据库整合的全部脚本编写与测试，并负责需求与接口文档。", en: "Wrote and tested all DB integration scripts independently; owned requirements and interface documentation." },
    metrics: [{ zh: "全部脚本 + 测试独立完成", en: "All scripts & tests, sole author" }, { zh: "需求 + 接口文档全责", en: "Owned reqs & interface docs" }],
    problem: { zh: "主数据分散在多个系统中，口径不一致，影响下游报表与业务协同。", en: "Master data scattered across systems with inconsistent definitions, degrading downstream reporting and cross-team operations." },
    actions: [
      { zh: "独立完成数据库数据整合的全部脚本编写与测试", en: "Authored and tested all database integration scripts independently" },
      { zh: "编写需求规格与接口协议等项目文档", en: "Authored requirements specifications and interface protocol documents" }
    ],
    results: [
      { zh: "主数据整合脚本上线，数据口径统一", en: "Integration scripts delivered; data definitions unified" },
      { zh: "技术能力保持在 hands-on 水平——这也是 20 年经验最容易被质疑的地方", en: "Proof of hands-on technical capability — the thing 20-year profiles get challenged on most" }
    ],
    stack: ["SQL", "MDM", "Data integration", "Interface specs", "Testing"]
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
      { zh: "建立地址标准库 + 高德 API 地理编码，修复坐标漂移", en: "Built an address reference library plus Amap geocoding to fix coordinate drift" },
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
    tag: { zh: "数据工具 · 本地优先", en: "Data tooling · Local-first" },
    title: { zh: "DuckDB 本地数据分析工作台", en: "DuckDB Local Analytics Workbench" },
    sum: { zh: "双击启动的本地 SQL 分析环境，数据不出本机，秒级查询几十万行。", en: "A double-click local SQL workbench — data never leaves the machine, sub-second queries over hundreds of thousands of rows." },
    metrics: [{ zh: "数据不出本地", en: "Data stays local" }, { zh: "秒级查询", en: "Sub-second queries" }],
    problem: { zh: "Excel 处理几十万行明细时卡顿，而业务数据又不允许上传到云端分析服务。", en: "Excel chokes on hundreds of thousands of detail rows, and the business data is not allowed on any cloud analytics service." },
    actions: [
      { zh: "用 DuckDB + Python 搭建本地分析服务，浏览器访问 localhost", en: "Built a DuckDB + Python local service accessed from the browser" },
      { zh: "一键启动脚本，非技术同事也能用", en: "One-click launcher so non-technical colleagues can use it" },
      { zh: "直接查询 CSV / Parquet，不建仓库、不做 ETL", en: "Query CSV/Parquet directly — no warehouse, no ETL" }
    ],
    results: [
      { zh: "大明细表查询从分钟级降到秒级", en: "Query time on large detail tables dropped from minutes to seconds" },
      { zh: "满足数据不出内网的合规要求", en: "Satisfies the keep-data-on-premise compliance rule" }
    ],
    stack: ["DuckDB", "Python", "SQL", "HTML/JS", "Batch scripting"]
  },
  {
    cat: "data", priv: false,
    tag: { zh: "BI · 自动刷新", en: "BI · Auto refresh" },
    title: { zh: "平台经营数据看板", en: "Platform Operations Dashboard" },
    sum: { zh: "把 Excel 报表变成一键刷新的 HTML 看板，打包即可分发给业务方。", en: "Turned Excel reporting into a one-click refreshable HTML dashboard, packaged for distribution to business users." },
    metrics: [{ zh: "一键刷新", en: "One-click refresh" }, { zh: "打包分发", en: "Packaged distribution" }],
    problem: { zh: "经营数据每次都要手工整理 Excel、手工发版，重复劳动且易出错，业务方拿到的数据常常不是最新。", en: "Every reporting cycle meant manual Excel work and manual distribution — repetitive, error-prone, and the business often looked at stale numbers." },
    actions: [
      { zh: "脚本读取源 Excel，自动生成 HTML 看板", en: "Scripts read source Excel and generate the HTML dashboard" },
      { zh: "提供「更新看板」与「打包分发」一键脚本", en: "Shipped one-click refresh and packaging scripts" },
      { zh: "看板与 Obsidian 笔记联动沉淀分析结论", en: "Linked the dashboard to Obsidian notes to accumulate findings" }
    ],
    results: [
      { zh: "报表更新从手工流程变成双击执行", en: "Reporting refresh went from manual chore to a double-click" },
      { zh: "业务方随时可拿到最新版本", en: "Business users always get the latest version" }
    ],
    stack: ["Python", "HTML/CSS", "Charting", "Excel automation", "Batch scripting"]
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
  },
  {
    cat: "data", priv: false,
    tag: { zh: "数据治理 · 地址", en: "Data governance · Address" },
    title: { zh: "配送地址清洗与地理编码", en: "Delivery Address Cleaning & Geocoding" },
    sum: { zh: "地址标准库 + 高德 API，把不规范的订单地址变成可用坐标。", en: "A reference address library plus Amap API turns messy order addresses into usable coordinates." },
    metrics: [{ zh: "1,820 个地址", en: "1,820 addresses" }, { zh: "未匹配清单可追溯", en: "Traceable unmatched list" }],
    problem: { zh: "订单地址由用户手写，格式混乱、别名多，直接地理编码命中率低，且会出现坐标漂移（例如错落到区政府）。", en: "Order addresses are hand-typed with inconsistent formats and many aliases. Direct geocoding had a low hit rate and produced drifting coordinates — one case snapped to the district government seat." },
    actions: [
      { zh: "建立地址标准库，先用本地库匹配，未命中再调高德 API", en: "Built a local reference library first, falling back to the Amap API only on misses" },
      { zh: "每次执行同时输出清洗库和未匹配地址清单（含订单号、地址、日期）", en: "Each run emits both the cleaned library and an unmatched list (order no., address, date)" },
      { zh: "对已知错误坐标建立黑名单与人工复核", en: "Blacklist and manual review for known bad coordinates" }
    ],
    results: [
      { zh: "1,820 个配送地址标准化", en: "1,820 delivery addresses standardized" },
      { zh: "未匹配项可追溯、可逐条处理，不静默丢弃", en: "Unmatched items are traceable and actionable, never silently dropped" }
    ],
    stack: ["Python", "Amap API", "JSON", "Reference data management", "Data quality"]
  },
  {
    cat: "con", priv: false,
    tag: { zh: "方案咨询 · 售前", en: "Consulting · Pre-sales" },
    title: { zh: "一刻钟便民圈数字化平台方案", en: "15-Minute Community Life Circle Platform" },
    sum: { zh: "面向客户的数字化平台方案建议书与落地方案，覆盖业务设计到实施路径。", en: "Client-facing solution proposal and implementation plan for a community life-circle digital platform." },
    metrics: [{ zh: "方案建议书 + 落地方案 v2", en: "Proposal + implementation plan v2" }, { zh: "方法论分析报告", en: "Methodology analysis report" }],
    problem: { zh: "客户需要一套区域生活服务数字化平台的完整方案：业务怎么设计、系统怎么落地、分几步走。", en: "The client needed a complete plan for a regional community-services platform: how the business model is designed, how systems land, and in what sequence." },
    actions: [
      { zh: "输出客户方案建议书（SPAR 方法论）", en: "Produced the client solution proposal (SPAR methodology)" },
      { zh: "输出五步法分析报告", en: "Produced a five-step analysis report" },
      { zh: "迭代至落地方案 v2，明确实施路径", en: "Iterated to implementation plan v2 with a concrete delivery path" }
    ],
    results: [
      { zh: "形成可交付的方案文档体系：建议书 → 分析报告 → 落地方案", en: "A deliverable document set: proposal → analysis → implementation plan" },
      { zh: "这是「售前 / 顾问」方向的直接能力证据", en: "Direct evidence of pre-sales / consulting capability" }
    ],
    stack: ["Solution design", "Business analysis", "Proposal writing", "Implementation planning", "Stakeholder communication"]
  }
];

var STACK_BLOCKS = [
  { zh: "业务分析", en: "Business analysis", items: ["需求调研 / elicitation", "流程再造 BPR", "方案设计与评审", "UAT 与验收", "指标口径定义"] },
  { zh: "数据与治理", en: "Data & governance", items: ["SQL", "MDM 主数据", "Power BI", "Power Query / Pivot", "DuckDB", "数据质量"] },
  { zh: "自动化", en: "Automation", items: ["Python", "影刀 RPA", "Excel 自动化", "批量脚本", "定时任务"] },
  { zh: "系统与集成", en: "Systems & integration", items: ["供应链系统", "WMS / 物流", "接口文档", "多供应商协同", "ERP 生态"] },
  { zh: "可视化", en: "Visualization", items: ["HTML/CSS/JS", "腾讯地图 SDK", "微信小程序", "看板设计", "热力图 / 聚类"] }
];

var TIMELINE = [
  { period: "8 年", zh: { r: "软件开发", d: "写代码出身——这是后来能直接跟开发对数据模型和接口的原因。" }, en: { r: "Software development", d: "Started as a developer — the reason I can still read a data model and argue interfaces with engineers." } },
  { period: "12 年", zh: { r: "IT 业务分析师", d: "主导供应链系统优化、新工厂信息化 0→1；跨教育软件、电子销售、大宗农产品、饲料食品四大行业。" }, en: { r: "IT business analyst", d: "Led supply chain optimization and greenfield plant IT; worked across education software, electronics sales, agri-commodity trading, feed & food." } },
  { period: "近年", zh: { r: "区域电商平台业务与数据支持", d: "业务梳理、指标体系、看板建设；同时用 Python 与 RPA 把重复工作自动化掉。" }, en: { r: "Regional e-commerce: business & data", d: "Business mapping, metric frameworks, dashboards — plus automating the repetitive work with Python and RPA." } }
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
  { k: "auto", zh: "流程自动化", en: "Process automation" },
  { k: "data", zh: "数据与可视化", en: "Data & viz" },
  { k: "con", zh: "方案咨询", en: "Consulting" }
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
