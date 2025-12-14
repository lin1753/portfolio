/**
 * 滚动动画效果 - 主标题缩放动画
 * 监听页面滚动，根据滚动位置调整主标题的缩放比例
 */

// 主标题缩放动画函数
function initTitleScaleAnimation() {
    const titleElement = document.querySelector('.artistic-title');
    const titleSection = document.querySelector('.page-title-section');
    
    if (!titleElement || !titleSection) {
        console.warn('未找到主标题元素，动画初始化失败');
        return;
    }
    
    // 获取标题区域的初始位置和高度
    const titleSectionRect = titleSection.getBoundingClientRect();
    const titleSectionTop = titleSectionRect.top + window.scrollY;
    const titleSectionHeight = titleSectionRect.height;
    
    // 动画参数配置
    const animationConfig = {
        maxScale: 1.0,      // 最大缩放比例（页面顶部）
        minScale: 0.7,      // 最小缩放比例
        maxScrollDistance: 300, // 最大滚动距离（像素）
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' // 缓动函数
    };
    
    // 更新标题缩放比例
    function updateTitleScale() {
        const scrollY = window.scrollY;
        const scrollProgress = Math.min(scrollY / animationConfig.maxScrollDistance, 1);
        
        // 使用缓动函数计算缩放比例
        const scale = animationConfig.maxScale - 
                     (animationConfig.maxScale - animationConfig.minScale) * scrollProgress;
        
        // 应用缩放变换
        titleElement.style.transform = `scale(${scale})`;
        titleElement.style.transition = 'transform 0.1s ease-out';
        
        // 根据滚动位置调整透明度（可选效果）
        const opacity = 1 - scrollProgress * 0.3;
        titleElement.style.opacity = opacity;
    }
    
    // 初始化时设置一次
    updateTitleScale();
    
    // 监听滚动事件
    window.addEventListener('scroll', updateTitleScale);
    
    // 监听窗口大小变化，重新计算位置
    window.addEventListener('resize', function() {
        const newRect = titleSection.getBoundingClientRect();
        titleSectionTop = newRect.top + window.scrollY;
        titleSectionHeight = newRect.height;
    });
}

// 页面加载完成后初始化动画
document.addEventListener('DOMContentLoaded', function() {
    initTitleScaleAnimation();
});

// 导出函数供其他脚本使用（如果需要）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initTitleScaleAnimation };
}