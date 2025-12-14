# 林宇鹏个人作品集 - GitHub Pages部署指南

## 概述

本指南将帮助您使用GitHub Pages免费部署林宇鹏的个人作品集网站。GitHub Pages是GitHub提供的静态网站托管服务，完全免费且支持自定义域名。

**您的部署信息：**
- GitHub账号：`lin1753`
- 仓库名称：`portfolio`
- 网站地址：`https://lin1753.github.io/portfolio/`

## 部署优势

- **完全免费**：无需支付任何费用
- **全球CDN**：网站内容通过GitHub的全球CDN分发
- **自动部署**：代码推送后自动构建和部署
- **HTTPS加密**：自动启用SSL证书

## 部署步骤

### 第一步：创建GitHub仓库

1. **登录GitHub账户**
   - 访问 [GitHub.com](https://github.com)
   - 使用您的账户 `lin1753` 登录

2. **创建新仓库**
   - 点击右上角"+"号，选择"New repository"
   - 仓库名称：`portfolio`（已确定）
   - 描述：林宇鹏个人作品集网站
   - 选择"Public"（公开仓库）
   - 勾选"Add a README file"
   - 点击"Create repository"

### 第二步：上传网站文件

#### 方法一：使用GitHub网页界面上传（推荐）

1. 进入仓库页面：`https://github.com/lin1753/portfolio`
2. 点击"Add file" → "Upload files"
3. 将`d:\IdeaProjects\aboutme\`下的所有文件拖拽到上传区域
4. 确保包含以下文件：
   - `index.html`, `about.html`, `portfolio.html`
   - `style.css`, `script.js`
   - `miku.PNG`, `gpnu1.png`, `gpnu2.jpg`
   - `_config.yml`
   - `.github/workflows/deploy.yml`
   - `github-deployment-guide.md`
5. 填写提交信息："初始提交：林宇鹏个人作品集网站"
6. 点击"Commit changes"

#### 方法二：使用Git命令行

```bash
# 克隆仓库到本地
git clone https://github.com/lin1753/portfolio.git

# 进入项目目录
cd portfolio

# 删除默认的README文件（可选）
rm README.md

# 复制所有网站文件到仓库目录
# 将d:\IdeaProjects\aboutme\下的所有文件复制到当前目录

# 添加所有文件到Git
git add .

# 提交更改
git commit -m "初始提交：林宇鹏个人作品集网站"

# 推送到GitHub
git push origin main
```

### 第三步：启用GitHub Pages

1. **进入仓库设置**
   - 在仓库页面点击"Settings"标签
   - 左侧菜单选择"Pages"

2. **配置GitHub Pages**
   - 在"Source"部分选择"GitHub Actions"
   - 保存设置

3. **等待部署完成**
   - 系统会自动开始部署流程
   - 查看"Actions"标签页监控部署状态
   - 部署完成后会显示绿色的对勾✅

### 第四步：访问您的网站

部署完成后，您的网站将通过以下地址访问：

```
https://lin1753.github.io/portfolio/
```

**页面链接：**
- 首页：`https://lin1753.github.io/portfolio/`
- 关于我：`https://lin1753.github.io/portfolio/about.html`
- 项目作品：`https://lin1753.github.io/portfolio/portfolio.html`

## 文件结构说明

```
portfolio/
├── index.html          # 首页
├── about.html          # 关于我页面
├── portfolio.html      # 项目作品页面
├── style.css           # 样式文件
├── script.js           # JavaScript脚本
├── miku.PNG            # 背景图片
├── gpnu1.png           # 学校logo
├── gpnu2.jpg           # 个人照片
├── _config.yml         # Jekyll配置文件（已适配您的账号）
├── .github/workflows/  # GitHub Actions工作流
│   └── deploy.yml      # 部署配置
└── github-deployment-guide.md # 本指南
```

## 功能特性

### 🎨 设计特色
- **Hatsune Miku风格**：蓝绿色渐变主题
- **响应式设计**：支持手机、平板、电脑
- **艺术字体**：渐变文字效果
- **卡片式布局**：现代化UI设计

### ⚡ 技术特性
- **纯静态网站**：无需服务器，加载快速
- **SEO优化**：结构化数据，搜索引擎友好
- **渐进式增强**：优雅降级，兼容性好
- **性能优化**：图片懒加载，代码压缩

### 📱 移动端优化
- **触摸友好**：大按钮，适合手指操作
- **响应式导航**：移动端汉堡菜单
- **自适应布局**：自动调整内容排列

## 维护和更新

### 更新内容

1. **修改HTML文件**：编辑对应的页面文件
2. **更新样式**：修改`style.css`文件
3. **添加功能**：编辑`script.js`文件

### 部署更新

```bash
# 拉取最新代码
git pull origin main

# 修改文件后提交
git add .
git commit -m "更新描述"
git push origin main
```

GitHub Actions会自动部署更新，通常需要1-5分钟。

## 常见问题

### Q: 网站显示404错误？
A: 检查仓库名称是否正确，确保`index.html`文件在根目录。

### Q: 样式或图片不显示？
A: 检查文件路径是否正确，确保所有资源文件都已上传。

### Q: 部署失败怎么办？
A: 查看"Actions"标签页的错误日志，排查具体问题。

### Q: 如何添加新页面？
A: 创建新的HTML文件，在导航栏中添加链接即可。

## 技术支持

如果遇到任何问题，可以：

1. 查看GitHub Actions日志排查错误
2. 检查浏览器开发者工具的控制台输出
3. 确保所有文件路径引用正确
4. 验证HTML和CSS语法正确性

## 部署检查清单

- [ ] 创建GitHub仓库 `portfolio`
- [ ] 上传所有网站文件
- [ ] 启用GitHub Pages功能
- [ ] 验证部署成功
- [ ] 测试所有页面链接
- [ ] 检查移动端显示效果

---

**部署完成！** 您的个人作品集网站现在可以通过 `https://lin1753.github.io/portfolio/` 访问了。🎉