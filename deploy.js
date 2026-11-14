// GitHub Pages Auto-Deployment Script
// 运行方法: node deploy.js
// 此脚本会自动将 unit-converter.html 部署到 GitHub Pages

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 配置
const repoName = 'unit-converter'; // 仓库名
const fileToDeploy = 'unit-converter.html';
const commitMessage = 'Auto-deploy unit converter';

// 验证文件存在
if (!fs.existsSync(fileToDeploy)) {
  console.error(`❌ 错误: 找不到 ${fileToDeploy} 文件`);
  console.error(`   请确保运行此脚本的目录下有 ${fileToDeploy}`);
  process.exit(1);
}

console.log('🚀 开始部署到 GitHub Pages...\n');

// 第一步：初始化 git 仓库（如果还没有）
let gitInitialized = false;
try {
  execSync('git status', { stdio: 'ignore' });
  gitInitialized = true;
  console.log('✅ Git 仓库已初始化');
} catch (e) {
  console.log('📁 初始化 Git 仓库...');
  try {
    execSync('git init');
    gitInitialized = true;
    console.log('✅ Git 仓库初始化完成');
  } catch (initError) {
    console.error('❌ Git 初始化失败，请手动初始化');
    process.exit(1);
  }
}

// 第二步：添加文件
console.log('📦 添加部署文件...');
try {
  execSync('git add ' + fileToDeploy);
  console.log('✅ 文件添加成功');
} catch (addError) {
  console.error('❌ 添加文件失败:', addError.message);
  process.exit(1);
}

// 第三步：提交
console.log('💾 创建提交...');
try {
  execSync(`git commit -m "${commitMessage}"`);
  console.log('✅ 提交成功');
} catch (commitError) {
  // 如果没有变更，可能已经提交过，忽略错误
  const output = commitError.status ? String(commitError.status) : '';
  if (!output.includes('nothing to commit')) {
    console.error('❌ 提交失败:', commitError.message);
    process.exit(1);
  }
  console.log('ℹ️ 无新变更跳过提交');
}

// 第四步：设置远程（如果需要）
console.log('🔗 检查远程仓库...');
const remoteUrl = execSync('git config --get remote.origin.url', { stdio: 'pipe' }).toString().trim();

if (!remoteUrl) {
  console.log('⚠️  未设置远程仓库，询问用户...');
  // 这里会暂停，让用户输入或跳过
  console.log('   请手动添加远程仓库: git remote add origin <仓库URL>');
  console.log('   然后重新运行此脚本');
  process.exit(1);
} else {
  console.log(`✅ 远程仓库: ${remoteUrl}`);
}

// 第五步：推送
console.log('🚀 推送到 GitHub...');
try {
  execSync('git push -u origin main 2>&1 || git push -u origin master 2>&1');
  console.log('✅ 推送成功');
} catch (pushError) {
  console.error('❌ 推送失败:', pushError.message);
  console.log('\n💡 建议：');
  console.log('   1. 确保已创建 GitHub 仓库');
  console.log('   2. 访问: https://github.com/new 创建仓库');
  console.log('   3. 运行: git remote add origin https://github.com/你的用户名/' + repoName + '.git');
  console.log('   4. 再次运行此脚本');
  process.exit(1);
}

// 第六步: 启用 GitHub Pages (需要手动步骤)
// 生成说明
console.log('\n📋 GitHub Pages 设置说明:');
console.log('===============================');
console.log('1. 访问你的 GitHub 仓库');
console.log('2. 点击 Settings -> Pages');
console.log('3. 在 "Source" 中选择 "Deploy from a branch"');
console.log('4. 选择 "main" 分支 (或 "master") 和 "/ (root)"');
console.log('5. 等待几分钟，网站将可访问');
console.log('===============================');
console.log(`\n🌐 访问地址: https://你的用户名.github.io/${repoName}/`);

console.log('\n✅ 部署准备完成!');