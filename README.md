# 在线工具箱 - 单位转换器

## 项目简介
一个包含单位转换、Base64编码/解码、UUID生成等实用工具的在线工具箱网站。

## 当前状态
- ✅ 单位转换器: 已完成并可本地运行
- ⚠️ 部署状态: 可通过自动化脚本部署到 GitHub Pages

## 快速开始 (本地)

### 方法 1: 直接打开 HTML 文件
1. 双击 `unit-converter.html` 文件
2. 或将其拖拽到浏览器窗口中
3. 开始使用单位转换功能

### 方法 2: 使用本地服务器 (推荐)
```bash
# 安装 Python (如果尚未安装)
python3 -m http.server 8000

# 然后在浏览器访问
open http://localhost:8000/unit-converter.html
```

### 方法 3: 使用 VS Code Live Server
1. 安装 VS Code 扩展 "Live Server"
2. 右键点击 `unit-converter.html`
3. 选择 "Open with Live Server"

## 部署到 GitHub Pages

### 方案一: 一键部署 (推荐)
运行部署脚本：
```bash
node deploy.js
```
脚本会自动：
1. 检查 Git 仓库状态
2. 尝试推送到 GitHub
3. 如果认证失败，提供清晎的解决方案

### 方案二: 手动部署 (如果自动推送失败)

如果自动推送被阻止 (需要 GitHub 认证)，请按以下步骤:

**方法 1: 使用 Personal Access Token (推荐)**
1. 访问: https://github.com/settings/tokens/new
2. 生成新令牌 (勾选 `repo` 权限)
3. 在终端运行:
```bash
git remote set-url origin https://token:p-a-t-token-string@github.com/jasperxie/unit-converter.git
node deploy.js
```

**方法 2: 使用 SSH**
1. 生成 SSH key: `ssh-keygen -t ed25519 -C "your-email@example.com"`
2. 将公钥添加到 GitHub: Settings -> SSH and GPG keys -> New SSH key
3. 运行:
```bash
git remote set-url origin git@github.com:jasperxie/unit-converter.git
node deploy.js
```

**方法 3: 手动上传**
1. 访问你的 GitHub 仓库: https://github.com/jasperxie/unit-converter
2. 点击 "Add file" -> "Upload files"
3. 上传: `unit-converter.html`, `deploy.js`, `README.md`
4. 提交变更

### 完成部署后的通用步骤
无论使用哪种方法推送成功后，都需要:

1. 访问仓库 Settings -> Pages
2. Source 选择: "Deploy from a branch"
3. Branch: "main" (或 "master")
4. Folder: "/ (root)"
5. 等待 1-2 分钟，网站将可访问

🌐 访问地址: `https:// Jasper.github.io/unit-converter/`

### 方案二: 手动部署步骤
如果你更倾向于手动操作，请按以下步骤:

1. **创建 GitHub 仓库**
   - 访问 https://github.com/new
   - 仓库名称: `unit-converter` (或任意名称)
   - 勾选 "Add a README file"

2. **推送代码**
```bash
git init
git add .
git commit -m "Initial commit: unit converter"
git remote add origin https://github.com/你的用户名/仓库名.git
git push -u origin main
```

3. **启用 GitHub Pages**
   - 访问仓库的 Settings -> Pages
   - Source 选择: "Deploy from a branch"
   - Branch: "main" (或 "master")
   - Folder: "/ (root)"
   - 保存后等待 1-2 分钟

4. **访问网站**
   - URL 将显示为: `https://你的用户名.github.io/仓库名/`

## 项目结构
```
unit-converter/
├── unit-converter.html  # 主要网页 (第一个已完成工具)
├── deploy.js            # 自动部署脚本
└── README.md            # 项目说明
```

## 开发计划
后续将添加的工具:
- Base64编码/解码
- UUID/随机字符串生成
- 网址参数解析
- 颜色转换器
- 字符计数/阅读时间
- 代码格式化/压缩
- 随机抽选/转盘
- ASCII艺术生成
- 字体预览对比
- 在线计时器/闹钟
- 视频链接解析/字幕提取

## 技术栈
- HTML5
- CSS3 (变量、网格布局、响应式设计)
- JavaScript (原生 DOM 操作)
- 无依赖，纯前端实现

## 许可证
MIT License