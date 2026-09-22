# 心晴 · 情绪日记与自我关怀

记录情绪 · 理解自己 · 温柔成长

## 在线 Demo

**访问地址：[https://ww5667.github.io/not-emo/](https://ww5667.github.io/not-emo/)**

[![GitHub Pages 部署状态](https://github.com/ww5667/not-emo/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/ww5667/not-emo/actions/workflows/deploy-pages.yml)

> 截至 2026-09-22 最近一次检查，部署在 Configure Pages 步骤失败，尚未完成上线。需先启用 GitHub Pages，再重新运行部署；上方地址不是已上线的保证，最新结果请查看部署状态。

**源代码：[ww5667/not-emo](https://github.com/ww5667/not-emo)**

心晴是面向学业、职场和社交压力下年轻人的轻量自我关怀 Web 原型。以提供的六屏移动端设计为参考，采用浅蓝、奶白、珊瑚与薰衣草紫的视觉语言，手机底部导航与桌面侧边栏自适应，让记录情绪成为一件低门槛的小事。

## 产品功能

| 页面 | 可体验的功能 |
| --- | --- |
| 今天 | 六种情绪选择、今日记录、关怀入口 |
| 记录情绪 | 1–5 级强度、多选触发因素、500 字日记、本地持久保存 |
| 情绪洞察 | 近 7 天 / 30 天 / 全部记录，真实数据趋势、高频情绪、触发因素占比 |
| 自我关怀 | 3 分钟呼吸计时、5 分钟文字引导冥想、可播放与暂停的合成音景、担忧写作与感受反馈 |
| 共鸣故事 | 虚构示例故事、搜索、话题筛选、共鸣反馈、本地故事保存与匿名昵称 |
| 我的数据 | 全部记录回顾、JSON 导出、确认后清除本地数据 |

## 使用说明与边界

- 无需注册。日记、故事与反馈仅存储在当前浏览器的 localStorage，不上传服务器、不同设备之间不自动同步。清理浏览器存储会删除记录，请通过页面底部「我的数据与隐私」导出备份。
- 共鸣故事为**本地演示社区**，不是在线社交服务。示例故事为虚构内容，保存故事不会公开发布给其他用户。
- 洞察使用用户自己的记录，不填充虚构统计。趋势是情绪类别的粗略汇总，并非心理健康评分，也不做因果推断。7 天视图按天汇总，30 天及全部视图分为七个时间段汇总。
- 冥想为文字引导，音景通过 Web Audio API 合成，需要用户点击播放。站点使用 Google Fonts；字体不可用时自动回退到本地字体。
- 本产品用于日常自我关怀，不提供心理诊断或治疗。

## 本地运行

纯 HTML / CSS / JavaScript，无需安装依赖或构建。

~~~bash
git clone https://github.com/ww5667/not-emo.git
cd not-emo
python -m http.server 4173
~~~

访问 [http://localhost:4173](http://localhost:4173)。

## GitHub Pages 部署

main 分支推送后，由 [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml) 使用 GitHub 官方 Actions 自动部署。

### 首次启用与发布

1. 打开仓库的 [Settings → Pages](https://github.com/ww5667/not-emo/settings/pages)。
2. 在 **Build and deployment → Source** 中选择 **GitHub Actions**。
3. 打开 [部署工作流](https://github.com/ww5667/not-emo/actions/workflows/deploy-pages.yml)，选择 **Run workflow → main → Run workflow**；也可以在失败的运行中选择 **Re-run failed jobs**。
4. 等待部署成功，再访问 [心晴在线 Demo](https://ww5667.github.io/not-emo/)。

如果出现 404 或 Configure Pages 失败，请先确认已完成第 2 步，再重跑工作流。启用成功后，后续推送 main 分支会自动更新在线网站。

所有资源使用相对路径，支持 GitHub Pages 的 /not-emo/ 子目录。克隆后保留 origin 远程连接，后续使用 git pull 和 git push 同步。

## 文件

- index.html：应用外壳与导航
- styles.css：响应式布局与原型视觉
- script.js：路由、记录、统计、练习、故事与本地存储
- .github/workflows/deploy-pages.yml：官方 Pages 部署
