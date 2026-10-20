# 个人作品集站点（GitHub Pages）

纯静态站点，无任何外部依赖（不加载 CDN、不引用外部字体），可直接托管到 GitHub Pages。

## 文件结构

```
2026-10-20_作品集网站/
├── index.html          页面骨架
├── assets/
│   ├── style.css       样式
│   └── app.js          双语文案 + 项目数据 + 渲染逻辑
├── .nojekyll           禁用 Jekyll（必须保留）
└── README.md
```

## 本地预览

双击 `index.html` 即可（相对路径引用，无需起服务）。

## 部署到 GitHub Pages

1. 新建仓库，例如 `portfolio`
2. 把本目录**所有文件**（含 `.nojekyll`）推到 `main` 分支
3. Settings → Pages → Source 选 `Deploy from a branch` → 分支 `main`、目录 `/ (root)`
4. 几分钟后访问 `https://<用户名>.github.io/portfolio/`

> **`.nojekyll` 不能漏**，否则 GitHub 会用 Jekyll 处理，可能吞掉以 `_` 开头的文件。

## 发布前必须替换的占位信息

| 位置 | 当前占位 | 改成 |
|---|---|---|
| `index.html` 底部 contact 区 | `your.email@example.com` | 你的邮箱 |
| 同上 | `+86 000 0000 0000` | 你的手机 |
| 同上 | `github.com/your-id` | 你的 GitHub 主页 |
| `index.html` `<title>` | 通用标题 | 建议改成「姓名 · 业务数字化作品集」 |

## 内容维护

所有文案与项目数据都在 `assets/app.js`：

- `I18N` — 界面文案（zh / en 两套）
- `PROJECTS` — 项目数组，每个含 `cat`（分类）、`priv`（是否内部项目）、中英双语的 `title / sum / metrics / problem / actions / results / stack`
- `CAPS` — 核心能力三张卡
- `STACK_BLOCKS` — 技术栈
- `TIMELINE` — 职业路径

改完刷新页面即可生效，无需构建。

## 语言切换

右上角按钮切换中/英，选择存在 `localStorage`，下次访问保持。默认中文。

## ⚠️ 数据保密约定

- 本页**只放方法论、技术栈与效果指标**，不含任何客户订单、地址、商铺或财务数据
- `priv: true` 的项目（TJ 一卡通、新工厂、MDM）在卡片和详情里都会标注「内部项目 / Internal」，并附保密说明
- 如果要开放源码仓库，请先在 `PROJECTS` 里确认没有真实业务数据残留

## 待补充

- 各项目截图（建议放在 `assets/img/`，卡片里加 `<img>`）
- 简历 PDF 链接（放在 hero 的 CTA 区）
- 「一刻钟便民圈」方案中的 SPAR 方法论说明（如可公开）
