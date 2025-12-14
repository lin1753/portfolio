// 林宇鹏个人作品集 - JavaScript脚本文件

/**
 * 页面加载完成后初始化
 */
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initSmoothScrolling();
    initCardAnimations();
    initResponsiveMenu();
    console.log('林宇鹏个人作品集网站已加载完成');
});

/**
 * 初始化导航栏功能
 */
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        
        // 设置当前页面激活状态
        if (linkHref === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
        
        // 添加点击效果
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

/**
 * 初始化平滑滚动效果
 */
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // 考虑导航栏高度
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * 初始化卡片动画效果
 */
function initCardAnimations() {
    const cards = document.querySelectorAll('.card, .project-card, .skill-card');
    
    // 创建观察器来触发动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // 为每个卡片设置初始状态并开始观察
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

/**
 * 初始化响应式菜单（移动端）
 */
function initResponsiveMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const navContainer = document.querySelector('.nav-container');
    
    // 检查是否为移动设备
    if (window.innerWidth <= 768) {
        // 创建移动端菜单按钮
        const menuButton = document.createElement('button');
        menuButton.innerHTML = '☰';
        menuButton.className = 'mobile-menu-button';
        menuButton.style.cssText = `
            background: #00C2D1;
            color: white;
            border: none;
            padding: 10px;
            border-radius: 5px;
            font-size: 1.2rem;
            cursor: pointer;
        `;
        
        // 插入菜单按钮
        navContainer.insertBefore(menuButton, navMenu);
        
        // 初始隐藏菜单
        navMenu.style.display = 'none';
        
        // 切换菜单显示
        menuButton.addEventListener('click', function() {
            if (navMenu.style.display === 'none') {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.right = '0';
                navMenu.style.background = 'white';
                navMenu.style.padding = '1rem';
                navMenu.style.borderRadius = '8px';
                navMenu.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
            } else {
                navMenu.style.display = 'none';
            }
        });
        
        // 点击菜单外区域关闭菜单
        document.addEventListener('click', function(e) {
            if (!navContainer.contains(e.target) && navMenu.style.display === 'flex') {
                navMenu.style.display = 'none';
            }
        });
    }
}

/**
 * 页面滚动效果
 */
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.main-nav');
    const scrollY = window.scrollY;
    
    // 导航栏背景渐变效果
    if (scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.backdropFilter = 'blur(10px)';
    } else {
        nav.style.background = 'transparent';
        nav.style.backdropFilter = 'none';
    }
    
    // 主标题缩放效果
    const heroTitle = document.querySelector('.artistic-title');
    if (heroTitle && scrollY < 200) {
        const scale = 1 - (scrollY * 0.001);
        heroTitle.style.transform = `scale(${Math.max(scale, 0.8)})`;
    }
});

/**
 * 窗口大小改变时的响应式处理
 */
window.addEventListener('resize', function() {
    // 重新初始化响应式菜单
    const existingButton = document.querySelector('.mobile-menu-button');
    if (existingButton) {
        existingButton.remove();
    }
    
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.style.display = '';
        navMenu.style.flexDirection = '';
        navMenu.style.position = '';
        navMenu.style.top = '';
        navMenu.style.right = '';
        navMenu.style.background = '';
        navMenu.style.padding = '';
        navMenu.style.borderRadius = '';
        navMenu.style.boxShadow = '';
    }
    
    if (window.innerWidth <= 768) {
        initResponsiveMenu();
    }
});

/**
 * 图片懒加载功能
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

/**
 * 页面性能监控
 */
window.addEventListener('load', function() {
    // 记录页面加载时间
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log(`页面加载完成，耗时: ${loadTime}ms`);
    
    // 如果加载时间过长，给出优化建议
    if (loadTime > 3000) {
        console.warn('页面加载较慢，建议优化图片大小和资源加载');
    }
});

/**
 * 错误处理
 */
window.addEventListener('error', function(e) {
    console.error('页面发生错误:', e.error);
});

/**
 * 导出函数供其他脚本使用
 */
window.LinYupengPortfolio = {
    initNavigation,
    initSmoothScrolling,
    initCardAnimations,
    initResponsiveMenu,
    initLazyLoading
};