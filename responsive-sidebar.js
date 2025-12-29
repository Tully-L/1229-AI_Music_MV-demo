/**
 * 响应式固定左侧导航栏 JavaScript 控制器
 * 实现所有交互功能和响应式行为
 */

class ResponsiveSidebar {
    constructor() {
        this.isExpanded = false;
        this.isMobile = false;
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
            <div class="sidebar-content">
                <div class="sidebar-header" onclick="ResponsiveSidebarInstance.goToHome()">
                    <div class="logo-icon">🎵</div>
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
                    <div class="logo">
                        <span>🐾</span>
                        <span>onpiu</span>
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
     * 处理窗口大小变化
     */
    handleResize() {
        const width = window.innerWidth;
        const wasMobile = this.isMobile;
        
        this.isMobile = width < this.breakpoints.mobile;
        
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.sidebar-overlay');
        
        if (this.isMobile) {
            // 移动端模式
            if (!wasMobile) {
                // 从桌面切换到移动端
                sidebar.classList.add('collapsed');
                this.isExpanded = false;
            }
        } else {
            // 桌面/平板模式
            sidebar.classList.remove('collapsed', 'expanded');
            overlay.classList.remove('active');
            this.isExpanded = false;
            
            // 更新主内容边距
            this.updateMainContentMargin();
        }
        
        this.saveState();
    }

    /**
     * 切换导航栏展开/收起状态
     */
    toggle() {
        if (this.isMobile) {
            if (this.isExpanded) {
                this.collapse();
            } else {
                this.expand();
            }
        }
    }

    /**
     * 展开导航栏（移动端）
     */
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

    /**
     * 收起导航栏（移动端）
     */
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

    /**
     * 更新主内容区域边距
     */
    updateMainContentMargin() {
        const mainContent = document.querySelector('.main-content');
        if (!mainContent) return;
        
        if (this.isMobile) {
            mainContent.style.marginLeft = '0';
        } else {
            const width = window.innerWidth;
            if (width >= this.breakpoints.tablet) {
                mainContent.style.marginLeft = '260px';
            } else {
                mainContent.style.marginLeft = '220px';
            }
        }
    }

    /**
     * 确保导航栏始终固定
     */
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
        }
        
        // 移动端点击后自动收起
        if (this.isMobile && this.isExpanded && action !== 'agent' && action !== 'toolbox') {
            setTimeout(() => {
                this.collapse();
            }, 300);
        }
    }

    /**
     * Create 按钮处理
     */
    handleCreateAction() {
        const hasUnsavedChanges = localStorage.getItem('hasUnsavedChanges') === 'true';
        if (hasUnsavedChanges) {
            this.showConfirmDialog(
                '是否放弃当前修改并跳转？',
                () => {
                    localStorage.removeItem('hasUnsavedChanges');
                    window.location.href = 'create.html';
                }
            );
        } else {
            window.location.href = 'create.html';
        }
    }

    /**
     * Edit 按钮处理
     */
    handleEditAction() {
        const hasUnsavedChanges = localStorage.getItem('hasUnsavedChanges') === 'true';
        if (hasUnsavedChanges) {
            this.showConfirmDialog(
                '是否放弃当前修改并跳转到编辑页面？',
                () => {
                    localStorage.removeItem('hasUnsavedChanges');
                    this.showToast('编辑功能即将推出！', 'info');
                }
            );
        } else {
            this.showToast('编辑功能即将推出！', 'info');
        }
    }

    /**
     * Agent 按钮处理
     */
    handleAgentAction() {
        const agentOptions = `
            <div style="display: flex; flex-direction: column; gap: 15px;">
                <div class="agent-option" style="padding: 15px; background-color: #333; border-radius: 4px; cursor: pointer; transition: background-color 0.3s;" onmouseover="this.style.backgroundColor='#444'" onmouseout="this.style.backgroundColor='#333'">
                    <h4 style="margin: 0 0 5px 0; color: #fff;">智能推荐</h4>
                    <p style="margin: 0; color: #aaa; font-size: 12px;">AI 分析您的创作偏好，推荐最适合的音乐和风格</p>
                </div>
                <div class="agent-option" style="padding: 15px; background-color: #333; border-radius: 4px; cursor: pointer; transition: background-color 0.3s;" onmouseover="this.style.backgroundColor='#444'" onmouseout="this.style.backgroundColor='#333'">
                    <h4 style="margin: 0 0 5px 0; color: #fff;">参数优化</h4>
                    <p style="margin: 0; color: #aaa; font-size: 12px;">自动调整创作参数，提升视频质量和观看体验</p>
                </div>
                <div class="agent-option" style="padding: 15px; background-color: #333; border-radius: 4px; cursor: pointer; transition: background-color 0.3s;" onmouseover="this.style.backgroundColor='#444'" onmouseout="this.style.backgroundColor='#333'">
                    <h4 style="margin: 0 0 5px 0; color: #fff;">创意灵感</h4>
                    <p style="margin: 0; color: #aaa; font-size: 12px;">基于热门趋势生成创作灵感和文案建议</p>
                </div>
            </div>
        `;

        this.showModal('AI Agent 功能', agentOptions, '600px');
    }

    /**
     * ToolBox 按钮处理
     */
    handleToolboxAction() {
        this.showToast('工具箱功能即将推出！', 'info');
    }

    /**
     * New Task 按钮处理
     */
    handleNewTaskAction() {
        this.showToast('正在创建新任务...', 'info');
        setTimeout(() => {
            window.location.href = 'create.html';
        }, 1000);
    }

    /**
     * Refer 按钮处理
     */
    handleReferAction() {
        this.showToast('推荐功能即将推出！', 'info');
    }

    /**
     * Subscribe 按钮处理
     */
    handleSubscribeAction() {
        this.showToast('订阅功能即将推出！', 'info');
    }

    /**
     * FAQ 按钮处理
     */
    handleFaqAction() {
        this.showToast('常见问题页面即将推出！', 'info');
    }

    /**
     * 跳转到首页
     */
    goToHome() {
        window.location.href = 'index.html';
    }

    /**
     * 语言切换
     */
    changeLanguage(language) {
        localStorage.setItem('selectedLanguage', language);
        this.showToast(`语言已切换为 ${language === 'zh' ? '中文' : 'English'}`, 'success');
        // 这里可以添加实际的语言切换逻辑
    }

    /**
     * 保存状态到本地存储
     */
    saveState() {
        const state = {
            isExpanded: this.isExpanded,
            isMobile: this.isMobile,
            timestamp: Date.now()
        };
        localStorage.setItem('sidebarState', JSON.stringify(state));
    }

    /**
     * 从本地存储恢复状态
     */
    restoreState() {
        try {
            const saved = localStorage.getItem('sidebarState');
            if (saved) {
                const state = JSON.parse(saved);
                // 检查状态是否过期（1小时）
                if (Date.now() - state.timestamp < 3600000) {
                    if (state.isMobile && this.isMobile) {
                        if (state.isExpanded) {
                            this.expand();
                        } else {
                            this.collapse();
                        }
                    }
                }
            }
        } catch (e) {
            console.warn('Failed to restore sidebar state:', e);
        }
    }

    /**
     * 显示确认对话框
     */
    showConfirmDialog(message, onConfirm, onCancel) {
        if (window.CommonComponents && window.CommonComponents.ModalManager) {
            window.CommonComponents.ModalManager.confirm(message, onConfirm, onCancel);
        } else {
            if (confirm(message)) {
                onConfirm && onConfirm();
            } else {
                onCancel && onCancel();
            }
        }
    }

    /**
     * 显示模态框
     */
    showModal(title, content, width = '500px') {
        if (window.CommonComponents && window.CommonComponents.ModalManager) {
            window.CommonComponents.ModalManager.create({
                title: title,
                content: content,
                width: width,
                buttons: [
                    {
                        text: '关闭',
                        type: 'secondary'
                    }
                ]
            });
        } else {
            alert(title + '\n\n' + content.replace(/<[^>]*>/g, ''));
        }
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

    /**
     * 防抖函数
     */
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

    /**
     * 销毁实例
     */
    destroy() {
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('scroll', this.ensureFixed);
        
        const toggleBtn = document.querySelector('.sidebar-toggle');
        const overlay = document.querySelector('.sidebar-overlay');
        
        if (toggleBtn) toggleBtn.remove();
        if (overlay) overlay.remove();
    }
}

// 创建全局实例
let ResponsiveSidebarInstance;

// 初始化函数
function initResponsiveSidebar() {
    if (ResponsiveSidebarInstance) {
        ResponsiveSidebarInstance.destroy();
    }
    ResponsiveSidebarInstance = new ResponsiveSidebar();
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
window.ResponsiveSidebarInstance = ResponsiveSidebarInstance;
window.initResponsiveSidebar = initResponsiveSidebar;