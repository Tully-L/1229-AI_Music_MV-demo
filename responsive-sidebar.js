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
     * 处理窗口大小变化
     */
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
     * 桌面端切换导航栏显示/隐藏
     */
    toggleDesktop() {
        if (this.isMobile) return;
        
        const sidebar = document.querySelector('.sidebar');
        const mainContent = document.querySelector('.main-content');
        const toggleIcon = document.getElementById('toggle-icon');
        
        console.log('切换前状态:', this.isDesktopHidden);
        
        if (this.isDesktopHidden) {
            // 显示导航栏
            sidebar.classList.remove('hidden');
            mainContent.classList.remove('sidebar-hidden');
            if (toggleIcon) toggleIcon.textContent = '◀';
            this.isDesktopHidden = false;
            console.log('已显示导航栏');
        } else {
            // 隐藏导航栏
            sidebar.classList.add('hidden');
            mainContent.classList.add('sidebar-hidden');
            if (toggleIcon) toggleIcon.textContent = '▶';
            this.isDesktopHidden = true;
            console.log('已隐藏导航栏');
        }
        
        // 强制更新主内容边距
        this.updateMainContentMargin();
        
        this.saveState();
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
            console.log('更新主内容边距:', targetMargin);
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
                    window.location.href = 'edit.html';
                }
            );
        } else {
            window.location.href = 'edit.html';
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
        // 创建工具箱弹窗内容
        const toolboxContent = `
            <div style="display: flex; flex-direction: column; gap: 20px;">
                <div style="text-align: center; color: #aaa; font-size: 14px; margin-bottom: 10px;">
                    ToolBox 包含的工具主要分为三类，具体列表如下：
                </div>
                
                <!-- Creative Agents 类别 -->
                <div class="tool-category">
                    <h3 style="color: #007bff; margin: 0 0 10px 0; font-size: 16px; border-bottom: 1px solid #333; padding-bottom: 5px;">
                        1. Creative Agents（创意代理类）
                    </h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 8px;">
                        <div class="tool-item" data-tool="music-video-agent">Music Video Agent（测试版）</div>
                        <div class="tool-item hot" data-tool="music-to-video">Music to Music Video（热门）</div>
                        <div class="tool-item hot" data-tool="ideas-to-video">Ideas to Full-length Video（热门）</div>
                        <div class="tool-item new" data-tool="translate-dub">Translate & Dub（新增）</div>
                        <div class="tool-item new" data-tool="image-edit">Image Edit（新增）</div>
                    </div>
                </div>

                <!-- Music Apps 类别 -->
                <div class="tool-category">
                    <h3 style="color: #28a745; margin: 0 0 10px 0; font-size: 16px; border-bottom: 1px solid #333; padding-bottom: 5px;">
                        2. Music Apps（音乐类工具）
                    </h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 8px;">
                        <div class="tool-item hot" data-tool="music-to-dance">Music to Dance Video（热门）</div>
                        <div class="tool-item free" data-tool="music-to-lyrics">Music to Lyrics Video（免费）</div>
                        <div class="tool-item new" data-tool="music-generator">Music Generator（新增）</div>
                    </div>
                </div>

                <!-- Video Apps 类别 -->
                <div class="tool-category">
                    <h3 style="color: #ffc107; margin: 0 0 10px 0; font-size: 16px; border-bottom: 1px solid #333; padding-bottom: 5px;">
                        3. Video Apps（视频类工具）
                    </h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 8px;">
                        <div class="tool-item hot" data-tool="ai-video-generator">AI Video Generator（热门）</div>
                        <div class="tool-item" data-tool="ai-video-effect">AI Video Effect</div>
                        <div class="tool-item new" data-tool="reimagine-videos">Reimagine Videos（新增）</div>
                        <div class="tool-item new" data-tool="live-portrait">Live Portrait Video（新增）</div>
                        <div class="tool-item new" data-tool="asmr-video">ASMR Video（新增）</div>
                        <div class="tool-item new" data-tool="video-soundtrack">Video Soundtrack（新增）</div>
                        <div class="tool-item new" data-tool="video-extend">Video Extend（新增）</div>
                        <div class="tool-item new" data-tool="modify-videos">Modify Videos（新增）</div>
                        <div class="tool-item" data-tool="text-to-video">Text to Video</div>
                        <div class="tool-item" data-tool="image-to-video">Image to Video</div>
                        <div class="tool-item" data-tool="transition-video">Transition Video</div>
                        <div class="tool-item" data-tool="subject-reference">Subject Reference Video</div>
                    </div>
                </div>
            </div>
            
            <style>
                .tool-item {
                    padding: 6px 10px;
                    background-color: #333;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: all 0.3s;
                    font-size: 11px;
                    text-align: center;
                    position: relative;
                    border: 1px solid transparent;
                }
                .tool-item:hover {
                    background-color: #444;
                    border-color: #555;
                    transform: translateY(-1px);
                }
                .tool-item.hot::after {
                    content: "🔥";
                    position: absolute;
                    top: -3px;
                    right: -3px;
                    font-size: 8px;
                }
                .tool-item.new::after {
                    content: "✨";
                    position: absolute;
                    top: -3px;
                    right: -3px;
                    font-size: 8px;
                }
                .tool-item.free::after {
                    content: "💎";
                    position: absolute;
                    top: -3px;
                    right: -3px;
                    font-size: 8px;
                }
                .tool-category {
                    background-color: #1a1a1a;
                    padding: 12px;
                    border-radius: 6px;
                    border: 1px solid #333;
                }
            </style>
        `;

        // 使用 CommonComponents.ModalManager.create 创建弹窗
        if (window.CommonComponents && window.CommonComponents.ModalManager) {
            const modal = window.CommonComponents.ModalManager.create({
                title: 'ToolBox - 工具箱',
                content: toolboxContent,
                width: '800px',
                customClass: 'toolbox-modal', // 添加自定义类
                buttons: [
                    {
                        text: '关闭',
                        type: 'secondary'
                    }
                ]
            });

            // 为工具项添加点击事件
            const toolItems = modal.querySelectorAll('.tool-item');
            toolItems.forEach(item => {
                item.addEventListener('click', () => {
                    const toolName = item.textContent;
                    const toolId = item.getAttribute('data-tool');
                    
                    // 根据工具类型显示不同的提示
                    if (item.classList.contains('hot')) {
                        this.showToast(`正在启动热门工具：${toolName}`, 'success');
                    } else if (item.classList.contains('new')) {
                        this.showToast(`正在启动新功能：${toolName}`, 'info');
                    } else if (item.classList.contains('free')) {
                        this.showToast(`正在启动免费工具：${toolName}`, 'success');
                    } else {
                        this.showToast(`正在启动工具：${toolName}`, 'info');
                    }
                    
                    // 关闭弹窗
                    setTimeout(() => {
                        window.CommonComponents.ModalManager.close(modal);
                    }, 1000);
                });
            });
        } else {
            // 降级处理
            this.showToast('ToolBox 功能加载中...', 'info');
        }
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
     * 账号按钮处理 - 改为直接显示账号卡片而不是弹窗
     */
    handleAccountAction() {
        // 创建账号卡片HTML
        const accountCardHTML = `
            <div class="account-card">
                <!-- 账号头部 -->
                <div class="account-header">
                    <div style="display: flex; align-items: center;">
                        <div class="account-avatar">🎵</div>
                        <div class="account-info">
                            <div class="email">usgshhsysygs@gmail.com</div>
                            <div class="signin-method">Signed in with Google</div>
                        </div>
                    </div>
                    <button class="signout-btn" onclick="ResponsiveSidebarInstance.handleLogout()">Sign Out</button>
                </div>
                
                <!-- 奖励额度区域 -->
                <div class="bonus-section">
                    <div>
                        <div class="bonus-label">Bonus Credits</div>
                        <div class="bonus-value">Credit</div>
                    </div>
                    <div>
                        <div class="bonus-label">Expiry</div>
                        <div class="bonus-value">30 days</div>
                    </div>
                    <div>
                        <div class="bonus-label">Est. Usage</div>
                        <div class="bonus-value">17 used / 500 total</div>
                    </div>
                </div>
                
                <!-- 使用额度区域 -->
                <div class="usage-section">
                    <div class="usage-header">
                        <div>
                            <div class="usage-title">Estimated Usage</div>
                            <div class="usage-reset">resets on 01/01</div>
                        </div>
                        <div class="plan-tag">freebeat Free</div>
                    </div>
                    <div class="usage-detail">
                        <span>Credit</span>
                        <span>0 used / 50 covered in plan</span>
                    </div>
                    <div class="usage-bar">
                        <div class="usage-fill"></div>
                    </div>
                </div>
                
                <!-- 操作按钮 -->
                <div class="action-section">
                    <button class="upgrade-btn" onclick="ResponsiveSidebarInstance.showToast('升级功能即将推出！', 'info')">Upgrade Plan</button>
                    <a class="support-link" onclick="ResponsiveSidebarInstance.showToast('联系支持功能即将推出！', 'info')">Contact Billing Support</a>
                </div>
                
                <!-- 关闭按钮 -->
                <div style="text-align: center; margin-top: 20px;">
                    <button class="close-account-btn" onclick="ResponsiveSidebarInstance.closeAccountCard()">关闭</button>
                </div>
            </div>
        `;

        // 创建账号卡片容器
        const accountContainer = document.createElement('div');
        accountContainer.id = 'account-container';
        accountContainer.className = 'account-card-overlay';
        accountContainer.innerHTML = accountCardHTML;

        // 点击背景关闭
        accountContainer.addEventListener('click', (e) => {
            if (e.target === accountContainer) {
                this.closeAccountCard();
            }
        });

        // 添加键盘支持
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                this.closeAccountCard();
                document.removeEventListener('keydown', handleKeyDown);
            }
        };
        document.addEventListener('keydown', handleKeyDown);

        document.body.appendChild(accountContainer);

        // 移动端收起导航栏
        if (this.isMobile && this.isExpanded) {
            this.collapse();
        }
    }

    /**
     * 关闭账号卡片
     */
    closeAccountCard() {
        const accountContainer = document.getElementById('account-container');
        if (accountContainer) {
            accountContainer.remove();
        }
    }

    /**
     * 退出登录处理
     */
    handleLogout() {
        this.showConfirmDialog(
            '确定要退出登录吗？',
            () => {
                // 清除本地存储的用户数据
                localStorage.removeItem('userToken');
                localStorage.removeItem('userInfo');
                localStorage.removeItem('hasUnsavedChanges');
                
                this.showToast('已安全退出登录', 'success');
                
                // 延迟跳转到登录页面或首页
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
            }
        );
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
            isDesktopHidden: this.isDesktopHidden,
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
                    } else if (!this.isMobile && typeof state.isDesktopHidden !== 'undefined') {
                        this.isDesktopHidden = state.isDesktopHidden;
                        if (this.isDesktopHidden) {
                            const sidebar = document.querySelector('.sidebar');
                            const mainContent = document.querySelector('.main-content');
                            const toggleIcon = document.getElementById('toggle-icon');
                            
                            sidebar.classList.add('hidden');
                            mainContent.classList.add('sidebar-hidden');
                            if (toggleIcon) toggleIcon.textContent = '▶';
                            
                            // 更新边距
                            this.updateMainContentMargin();
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