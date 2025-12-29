/**
 * 响应式固定左侧导航栏 JavaScript 控制器
 * 实现所有交互功能和响应式行为
 */

class ResponsiveSidebar {
    constructor() {
        this.isExpanded = false;
        this.isMobile = false;
        this.isDesktopHidden = false; // 新增：桌面端隐藏状态
        this.breakpoints = {
            mobile: 768,
            tablet: 1200
        };

        this.init();
    }

    /**
     * 初始化导航栏
     */
    init() {
        this.createSidebarHTML();
        this.bindEvents();
        this.handleResize();
        this.restoreState();

        // 监听窗口大小变化
        window.addEventListener('resize', this.debounce(() => {
            this.handleResize();
        }, 250));

        // 监听页面滚动（确保导航栏固定）
        window.addEventListener('scroll', () => {
            this.ensureFixed();
        });
    }

    /**
     * 创建导航栏HTML结构
     */
    createSidebarHTML() {
        // 创建汉堡菜单按钮
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'sidebar-toggle';
        toggleBtn.innerHTML = '☰';
        toggleBtn.setAttribute('aria-label', '切换导航菜单');
        document.body.appendChild(toggleBtn);

        // 创建遮罩层
        const overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        document.body.appendChild(overlay);

        // 获取现有侧边栏或创建新的
        let sidebar = document.querySelector('.sidebar');
        if (!sidebar) {
            sidebar = document.createElement('div');
            sidebar.className = 'sidebar';
            document.body.appendChild(sidebar);
        }

        // 更新侧边栏内容结构
        sidebar.innerHTML = `
            <!-- 桌面端隐藏/显示切换按钮 -->
            <button class="sidebar-toggle-desktop" onclick="ResponsiveSidebarInstance.toggleDesktop()">
                <span id="toggle-icon">◀</span>
            </button>
            
            <div class="sidebar-content">
                <div class="sidebar-header" onclick="ResponsiveSidebarInstance.goToHome()">
                    <div class="logo-icon">🎼</div>
                    <span class="logo-text">freebeat</span>
                </div>
                
                <div class="sidebar-btn-group">
                    <button class="sidebar-btn primary" data-action="create">
                        <span>Create</span>
                    </button>
                    <button class="sidebar-btn" data-action="edit">
                        <span>Edit</span>
                    </button>
                </div>
                
                <div class="sidebar-section">
                    <button class="toggle-btn" data-action="agent">
                        <span>Agent</span>
                        <span class="badge">Hot</span>
                    </button>
                    <button class="toggle-btn" data-action="toolbox">
                        <span>ToolBox</span>
                    </button>
                </div>
                
                <div class="sidebar-section">
                    <h4>History</h4>
                    <div class="history-list">
                        <div class="new-task" data-action="new-task">
                            <span>➕</span>
                            <span>New task</span>
                        </div>
                        <div class="history-item">A dreamy cyberpunk...</div>
                        <div class="history-item">A dreamy cyberpunk...</div>
                        <div class="history-item">A dreamy cyberpunk...</div>
                    </div>
                </div>
                
                <div class="sidebar-bottom">
                    <a href="#" data-action="refer">Refer & Earn</a>
                    <a href="#" data-action="subscribe">Subscribe</a>
                    <a href="#" data-action="faq">FAQs</a>
                    <div class="language">
                        <span>Language</span>
                        <select id="language-select">
                            <option value="en">en</option>
                            <option value="zh">zh</option>
                        </select>
                    </div>
                    <div class="logo" data-action="account">
                        <span>🕹️</span>
                        <span>usgshhsysygs</span>
                    </div>
                </div>
            </div>
        `;

        // 确保主内容区域存在
        if (!document.querySelector('.main-content')) {
            const mainContent = document.createElement('div');
            mainContent.className = 'main-content';
            document.body.appendChild(mainContent);
        }
    }

    /**
     * 绑定事件监听器
     */
    bindEvents() {
        const toggleBtn = document.querySelector('.sidebar-toggle');
        const overlay = document.querySelector('.sidebar-overlay');
        const sidebar = document.querySelector('.sidebar');

        // 汉堡菜单按钮点击
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggle();
        });

        // 遮罩层点击关闭
        overlay.addEventListener('click', () => {
            if (this.isMobile && this.isExpanded) {
                this.collapse();
            }
        });

        // 侧边栏内部按钮点击事件
        sidebar.addEventListener('click', (e) => {
            const action = e.target.closest('[data-action]')?.getAttribute('data-action');
            if (action) {
                this.handleAction(action, e);
            }
        });

        // 键盘导航支持
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isMobile && this.isExpanded) {
                this.collapse();
            }
        });

        // 语言选择
        const languageSelect = document.getElementById('language-select');
        if (languageSelect) {
            languageSelect.addEventListener('change', (e) => {
                this.changeLanguage(e.target.value);
            });
        }
    }

    /**
     * 处理按钮点击动作
     */
    handleAction(action, event) {
        event.preventDefault();

        switch (action) {
            case 'create':
                this.handleCreateAction();
                break;
            case 'edit':
                this.handleEditAction();
                break;
            case 'agent':
                this.handleAgentAction();
                break;
            case 'toolbox':
                this.handleToolboxAction();
                break;
            case 'new-task':
                this.handleNewTaskAction();
                break;
            case 'refer':
                this.handleReferAction();
                break;
            case 'subscribe':
                this.handleSubscribeAction();
                break;
            case 'faq':
                this.handleFaqAction();
                break;
            case 'account':
                this.handleAccountAction();
                break;
        }

        // 移动端点击后自动收起
        if (this.isMobile && this.isExpanded && action !== 'agent' && action !== 'toolbox') {
            setTimeout(() => {
                this.collapse();
            }, 300);
        }
    }

    /**
     * Agent 按钮处理
     */
    handleAgentAction() {
        // 降级处理
        this.showToast('AI Agent 功能加载中...', 'info');
    }

    /**
     * ToolBox 按钮处理
     */
    handleToolboxAction() {
        // 降级处理
        this.showToast('ToolBox 功能加载中...', 'info');
    }

    /**
     * 显示提示消息
     */
    showToast(message, type = 'info') {
        if (window.CommonComponents && window.CommonComponents.ToastManager) {
            window.CommonComponents.ToastManager.show(message, type);
        } else {
            console.log(`${type.toUpperCase()}: ${message}`);
        }
    }

    // 其他方法的简化实现
    handleCreateAction() { this.showToast('Create 功能即将推出！', 'info'); }
    handleEditAction() { this.showToast('Edit 功能即将推出！', 'info'); }
    handleNewTaskAction() { this.showToast('New Task 功能即将推出！', 'info'); }
    handleReferAction() { this.showToast('Refer 功能即将推出！', 'info'); }
    handleSubscribeAction() { this.showToast('Subscribe 功能即将推出！', 'info'); }
    handleFaqAction() { this.showToast('FAQ 功能即将推出！', 'info'); }
    handleAccountAction() { this.showToast('Account 功能即将推出！', 'info'); }

    goToHome() { window.location.href = 'index.html'; }
    changeLanguage(lang) { this.showToast(`语言已切换为 ${lang}`, 'success'); }

    // 响应式相关方法的完整实现
    handleResize() {
        const width = window.innerWidth;
        const wasMobile = this.isMobile;

        this.isMobile = width < this.breakpoints.mobile;

        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.sidebar-overlay');
        const mainContent = document.querySelector('.main-content');

        if (this.isMobile) {
            // 移动端模式
            if (!wasMobile) {
                // 从桌面切换到移动端
                sidebar.classList.remove('hidden');
                sidebar.classList.add('collapsed');
                mainContent.classList.remove('sidebar-hidden');
                this.isExpanded = false;
                this.isDesktopHidden = false;
            }
        } else {
            // 桌面/平板模式
            sidebar.classList.remove('collapsed', 'expanded');
            overlay.classList.remove('active');
            this.isExpanded = false;

            // 恢复桌面端隐藏状态
            if (this.isDesktopHidden) {
                sidebar.classList.add('hidden');
                mainContent.classList.add('sidebar-hidden');
                const toggleIcon = document.getElementById('toggle-icon');
                if (toggleIcon) toggleIcon.textContent = '▶';
            } else {
                sidebar.classList.remove('hidden');
                mainContent.classList.remove('sidebar-hidden');
                const toggleIcon = document.getElementById('toggle-icon');
                if (toggleIcon) toggleIcon.textContent = '◀';
            }

            // 更新主内容边距
            this.updateMainContentMargin();
        }

        this.saveState();
    }

    toggle() {
        if (this.isMobile) {
            if (this.isExpanded) {
                this.collapse();
            } else {
                this.expand();
            }
        }
    }

    toggleDesktop() {
        if (this.isMobile) return;

        const sidebar = document.querySelector('.sidebar');
        const mainContent = document.querySelector('.main-content');
        const toggleIcon = document.getElementById('toggle-icon');

        if (this.isDesktopHidden) {
            // 显示导航栏
            sidebar.classList.remove('hidden');
            mainContent.classList.remove('sidebar-hidden');
            if (toggleIcon) toggleIcon.textContent = '◀';
            this.isDesktopHidden = false;
        } else {
            // 隐藏导航栏
            sidebar.classList.add('hidden');
            mainContent.classList.add('sidebar-hidden');
            if (toggleIcon) toggleIcon.textContent = '▶';
            this.isDesktopHidden = true;
        }

        // 强制更新主内容边距
        this.updateMainContentMargin();

        this.saveState();
    }

    expand() {
        if (!this.isMobile) return;

        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.sidebar-overlay');

        sidebar.classList.remove('collapsed');
        sidebar.classList.add('expanded');
        overlay.classList.add('active');

        this.isExpanded = true;
        this.saveState();

        // 焦点管理
        setTimeout(() => {
            const firstButton = sidebar.querySelector('button, a');
            if (firstButton) {
                firstButton.focus();
            }
        }, 300);
    }

    collapse() {
        if (!this.isMobile) return;

        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.sidebar-overlay');

        sidebar.classList.remove('expanded');
        sidebar.classList.add('collapsed');
        overlay.classList.remove('active');

        this.isExpanded = false;
        this.saveState();
    }

    updateMainContentMargin() {
        const mainContent = document.querySelector('.main-content');
        if (!mainContent) return;

        if (this.isMobile) {
            mainContent.style.marginLeft = '0';
        } else {
            const width = window.innerWidth;
            let targetMargin;

            if (this.isDesktopHidden) {
                // 隐藏状态：只留40px给按钮
                targetMargin = '40px';
            } else {
                // 显示状态：根据屏幕宽度设置
                if (width >= this.breakpoints.tablet) {
                    targetMargin = '260px';
                } else {
                    targetMargin = '220px';
                }
            }

            mainContent.style.marginLeft = targetMargin;
        }
    }

    ensureFixed() {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            // 检查是否偏移，如有偏移则重新固定
            const rect = sidebar.getBoundingClientRect();
            if (rect.left !== 0 || rect.top !== 0) {
                sidebar.style.position = 'fixed';
                sidebar.style.top = '0';
                sidebar.style.left = '0';
            }
        }
    }

    saveState() {
        localStorage.setItem('sidebarState', JSON.stringify({
            isDesktopHidden: this.isDesktopHidden,
            isExpanded: this.isExpanded
        }));
    }

    restoreState() {
        try {
            const saved = localStorage.getItem('sidebarState');
            if (saved) {
                const state = JSON.parse(saved);
                this.isDesktopHidden = state.isDesktopHidden || false;
                this.isExpanded = state.isExpanded || false;
            }
        } catch (e) {
            console.warn('Failed to restore sidebar state:', e);
        }
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// 创建全局实例
let ResponsiveSidebarInstance;

// 初始化函数
function initResponsiveSidebar() {
    if (ResponsiveSidebarInstance) {
        ResponsiveSidebarInstance.destroy && ResponsiveSidebarInstance.destroy();
    }
    ResponsiveSidebarInstance = new ResponsiveSidebar();
    // 导出到全局
    window.ResponsiveSidebarInstance = ResponsiveSidebarInstance;
    return ResponsiveSidebarInstance;
}

// 自动初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initResponsiveSidebar);
} else {
    initResponsiveSidebar();
}

// 导出到全局
window.ResponsiveSidebar = ResponsiveSidebar;
window.initResponsiveSidebar = initResponsiveSidebar;