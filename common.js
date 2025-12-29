// 公共组件和样式
const CommonComponents = {
    // 公共CSS样式
    getCommonCSS: () => `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial', sans-serif;
            color: #fff;
        }
        body {
            background-color: #121212;
            min-height: 100vh;
        }

        /* 响应式导航栏样式将通过外部CSS文件加载 */
        .sidebar-header {
            font-size: 18px;
            font-weight: bold;
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
        }
        .sidebar-header:hover {
            color: #007bff;
        }
        .sidebar-btn-group {
            display: flex;
            gap: 5px;
        }
        .sidebar-btn {
            padding: 5px 10px;
            background-color: #333;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
        }
        .sidebar-btn.primary {
            background-color: #555;
        }
        .sidebar-section {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .sidebar-section .toggle-btn {
            background-color: #333;
            border: none;
            padding: 5px;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 12px;
        }
        .sidebar-section .toggle-btn .badge {
            background-color: #007bff;
            font-size: 10px;
            padding: 2px 5px;
            border-radius: 10px;
        }
        .sidebar-section h4 {
            font-size: 14px;
            color: #aaa;
            margin-bottom: 5px;
        }
        .sidebar-section .history-list {
            font-size: 12px;
            color: #ddd;
        }
        .sidebar-section .history-list .new-task {
            background-color: #333;
            padding: 5px;
            border-radius: 4px;
            margin-bottom: 5px;
            display: flex;
            align-items: center;
            gap: 5px;
        }
        .sidebar-section .history-item {
            padding: 5px;
            font-size: 12px;
            color: #bbb;
        }
        .sidebar-bottom {
            margin-top: auto;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .sidebar-bottom a {
            color: #aaa;
            font-size: 12px;
            text-decoration: none;
        }
        .sidebar-bottom .language {
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 12px;
            color: #aaa;
        }
        .sidebar-bottom .language select {
            background-color: #333;
            color: #fff;
            border: none;
            padding: 2px;
            border-radius: 2px;
        }
        .sidebar-bottom .logo {
            font-size: 12px;
            color: #888;
            display: flex;
            align-items: center;
            gap: 5px;
        }

        /* 主内容区 */
        .main-content {
            flex: 1;
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            background-color: #121212;
        }
        /* 顶部导航 */
        .top-nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .top-nav .dropdown {
            background-color: #333;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 5px;
        }
        .top-nav .actions {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        .top-nav .actions .coin {
            display: flex;
            align-items: center;
            gap: 5px;
            color: #0f0;
        }
        .top-nav .actions .join-btn {
            background-color: #007bff;
            color: #fff;
            border: none;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
        }

        /* 教程区 */
        .tutorials {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .tutorials h3 {
            font-size: 16px;
            color: #aaa;
        }
        .tutorial-cards {
            display: flex;
            gap: 10px;
            overflow-x: auto;
            padding-bottom: 10px;
        }
        .tutorial-card {
            width: 150px;
            height: 80px;
            background-color: #333;
            border-radius: 4px;
            background-size: cover;
            background-position: center;
            flex-shrink: 0;
        }

        /* 排行榜区 */
        .charts {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .charts-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .charts-header h3 {
            font-size: 18px;
        }
        .charts-tabs {
            display: flex;
            gap: 10px;
        }
        .charts-tab {
            font-size: 12px;
            color: #aaa;
            padding: 5px 10px;
            background-color: #333;
            border-radius: 20px;
            cursor: pointer;
        }
        .charts-tab.active {
            background-color: #555;
            color: #fff;
        }
        .charts-view {
            font-size: 12px;
            color: #aaa;
            cursor: pointer;
        }
        .chart-cards {
            display: flex;
            gap: 15px;
            overflow-x: auto;
            padding-bottom: 10px;
        }
        .chart-card {
            width: 120px;
            display: flex;
            flex-direction: column;
            gap: 5px;
            flex-shrink: 0;
        }
        .chart-card .card-img {
            height: 120px;
            background-color: #555;
            border-radius: 4px;
            background-size: cover;
            background-position: center;
        }
        .chart-card .card-info {
            font-size: 12px;
        }
        .chart-card .card-info .remix {
            color: #0f0;
            font-size: 10px;
        }
        .chart-card .card-info .title {
            font-weight: bold;
            margin: 2px 0;
        }
        .chart-card .card-info .artist {
            color: #aaa;
            font-size: 10px;
        }

        /* 弹窗系统样式 */
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }
        .modal-overlay.active {
            opacity: 1;
            visibility: visible;
        }
        .modal {
            background-color: #1E1E1E;
            border-radius: 8px;
            padding: 20px;
            max-width: 90%;
            max-height: 90%;
            overflow-y: auto;
            position: relative;
            border: 1px solid #333;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #333;
        }
        .modal-title {
            font-size: 18px;
            font-weight: bold;
        }
        .modal-close {
            background: none;
            border: none;
            color: #aaa;
            font-size: 20px;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
        }
        .modal-close:hover {
            background-color: #333;
            color: #fff;
        }
        .modal-content {
            margin-bottom: 20px;
        }
        .modal-actions {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
        }
        .modal-btn {
            padding: 8px 16px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
        }
        .modal-btn.primary {
            background-color: #007bff;
            color: #fff;
        }
        .modal-btn.primary:hover {
            background-color: #0056b3;
        }
        .modal-btn.secondary {
            background-color: #333;
            color: #fff;
        }
        .modal-btn.secondary:hover {
            background-color: #555;
        }

        /* 提示条样式 */
        .toast {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #333;
            color: #fff;
            padding: 12px 20px;
            border-radius: 4px;
            z-index: 1001;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }
        .toast.active {
            opacity: 1;
            visibility: visible;
        }
        .toast.success {
            background-color: #28a745;
        }
        .toast.error {
            background-color: #dc3545;
        }
        .toast.warning {
            background-color: #ffc107;
            color: #000;
        }

        /* 下拉菜单样式 */
        .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 0;
            background-color: #333;
            border-radius: 4px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            z-index: 100;
            min-width: 150px;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
        }
        .dropdown-menu.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        .dropdown-item {
            padding: 10px 15px;
            cursor: pointer;
            border-bottom: 1px solid #444;
        }
        .dropdown-item:last-child {
            border-bottom: none;
        }
        .dropdown-item:hover {
            background-color: #444;
        }

        /* 进度条样式 */
        .progress-bar {
            width: 100%;
            height: 8px;
            background-color: #333;
            border-radius: 4px;
            overflow: hidden;
            margin: 10px 0;
        }
        .progress-fill {
            height: 100%;
            background-color: #007bff;
            width: 0%;
            transition: width 0.3s ease;
        }

        /* 响应式适配 */
        @media (max-width: 768px) {
            .modal {
                width: 80%;
                margin: 20px;
            }
            .sidebar {
                width: 150px;
            }
        }
    `,

    // 左侧导航栏HTML
    getSidebarHTML: () => `
        <div class="sidebar">
            <div class="sidebar-header" onclick="CommonComponents.goToHome()">
                <i class="fas fa-music"></i>
                <span>freebeat</span>
            </div>
            <div class="sidebar-btn-group">
                <button class="sidebar-btn primary">Create</button>
                <button class="sidebar-btn">Edit</button>
            </div>
            <div class="sidebar-section">
                <div class="toggle-btn">
                    <span>Agent</span>
                    <span class="badge">Hot</span>
                </div>
                <div class="toggle-btn">
                    <span>ToolBox</span>
                </div>
            </div>
            <div class="sidebar-section">
                <h4>HISTORY</h4>
                <div class="history-list">
                    <div class="new-task">
                        <i class="fas fa-plus"></i> New task
                    </div>
                    <div class="history-item">A dreamy cyberpunk...</div>
                    <div class="history-item">A dreamy cyberpunk...</div>
                    <div class="history-item">A dreamy cyberpunk...</div>
                </div>
            </div>
            <div class="sidebar-bottom">
                <a href="#">Refer & Earn</a>
                <a href="#">Subscribe</a>
                <a href="#">FAQs</a>
                <div class="language">
                    <span>Language</span>
                    <select>
                        <option>en</option>
                        <option>zh</option>
                    </select>
                </div>
                <div class="logo">
                    <i class="fas fa-paw">usgshhsysygs</i> 
                </div>
            </div>
        </div>
    `,

    // 顶部导航HTML
    getTopNavHTML: () => `
        <div class="top-nav">
            <div class="dropdown">
                <i class="fas fa-video"></i>
                <span>Music Video</span>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="actions">
                <div class="coin">
                    <i class="fas fa-gem"></i>
                    <span>1000</span>
                </div>
                <button class="join-btn">Join our Discord</button>
            </div>
        </div>
    `,

    // 教程区HTML
    getTutorialsHTML: () => `
        <div class="tutorials">
            <h3>Agent Feature Tutorials</h3>
            <div class="tutorial-cards">
                <div class="tutorial-card" style="background-image: url('https://via.placeholder.com/150x80/666/fff?text=TUTORIAL+1');"></div>
                <div class="tutorial-card" style="background-image: url('https://via.placeholder.com/150x80/666/fff?text=TUTORIAL+2');"></div>
                <div class="tutorial-card" style="background-image: url('https://via.placeholder.com/150x80/666/fff?text=TUTORIAL+3');"></div>
                <div class="tutorial-card" style="background-image: url('https://via.placeholder.com/150x80/666/fff?text=TUTORIAL+4');"></div>
                <div class="tutorial-card" style="background-image: url('https://via.placeholder.com/150x80/666/fff?text=TUTORIAL+5');"></div>
                <div class="tutorial-card" style="background-image: url('https://via.placeholder.com/150x80/666/fff?text=TUTORIAL+6');"></div>
            </div>
        </div>
    `,

    // 排行榜区HTML
    getChartsHTML: () => `
        <div class="charts">
            <div class="charts-header">
                <div>
                    <h3>Top Charts</h3>
                    <div class="charts-tabs">
                        <div class="charts-tab active">Billboard 100</div>
                        <div class="charts-tab">This is Frequency</div>
                        <div class="charts-tab">New Music Friday</div>
                        <div class="charts-tab">New Music 2025</div>
                        <div class="charts-tab">Global Charts</div>
                    </div>
                </div>
                <div class="charts-view">View Charts ></div>
            </div>
            <div class="chart-cards">
                <div class="chart-card">
                    <div class="card-img" style="background-image: url('https://via.placeholder.com/120x120/777/fff?text=ART+1');"></div>
                    <div class="card-info">
                        <div class="remix">255 REMIX</div>
                        <div class="title">The Fate of Ophelia</div>
                        <div class="artist">Taylor Swift</div>
                    </div>
                </div>
                <div class="chart-card">
                    <div class="card-img" style="background-image: url('https://via.placeholder.com/120x120/777/fff?text=ART+2');"></div>
                    <div class="card-info">
                        <div class="remix">255 REMIX</div>
                        <div class="title">The Fate of Ophelia</div>
                        <div class="artist">Taylor Swift</div>
                    </div>
                </div>
                <div class="chart-card">
                    <div class="card-img" style="background-image: url('https://via.placeholder.com/120x120/777/fff?text=ART+3');"></div>
                    <div class="card-info">
                        <div class="remix">125 REMIX</div>
                        <div class="title">The Fate of Ophelia</div>
                        <div class="artist">Taylor Swift</div>
                    </div>
                </div>
                <div class="chart-card">
                    <div class="card-img" style="background-image: url('https://via.placeholder.com/120x120/777/fff?text=ART+4');"></div>
                    <div class="card-info">
                        <div class="remix">95 REMIX</div>
                        <div class="title">The Fate of Ophelia</div>
                        <div class="artist">Taylor Swift</div>
                    </div>
                </div>
                <div class="chart-card">
                    <div class="card-img" style="background-image: url('https://via.placeholder.com/120x120/777/fff?text=ART+5');"></div>
                    <div class="card-info">
                        <div class="remix">79 REMIX</div>
                        <div class="title">The Fate of Ophelia</div>
                        <div class="artist">Taylor Swift</div>
                    </div>
                </div>
                <div class="chart-card">
                    <div class="card-img" style="background-image: url('https://via.placeholder.com/120x120/777/fff?text=ART+6');"></div>
                    <div class="card-info">
                        <div class="remix">52 REMIX</div>
                        <div class="title">The Fate of Ophelia</div>
                        <div class="artist">Taylor Swift</div>
                    </div>
                </div>
            </div>
        </div>
    `,

    // 公共导航功能
    goToHome: () => {
        window.location.href = 'index.html';
    },

    // 弹窗管理系统
    ModalManager: {
        // 创建弹窗
        create: (options) => {
            const {
                title = '',
                content = '',
                width = '500px',
                height = 'auto',
                buttons = [],
                closable = true,
                onClose = null
            } = options;

            // 创建遮罩层
            const overlay = document.createElement('div');
            overlay.className = 'modal-overlay';
            
            // 创建弹窗
            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.style.width = width;
            if (height !== 'auto') {
                modal.style.height = height;
            }

            // 弹窗头部
            const header = document.createElement('div');
            header.className = 'modal-header';
            
            const titleEl = document.createElement('div');
            titleEl.className = 'modal-title';
            titleEl.textContent = title;
            
            const closeBtn = document.createElement('button');
            closeBtn.className = 'modal-close';
            closeBtn.innerHTML = '×';
            closeBtn.onclick = () => {
                CommonComponents.ModalManager.close(overlay);
                if (onClose) onClose();
            };

            header.appendChild(titleEl);
            if (closable) {
                header.appendChild(closeBtn);
            }

            // 弹窗内容
            const contentEl = document.createElement('div');
            contentEl.className = 'modal-content';
            if (typeof content === 'string') {
                contentEl.innerHTML = content;
            } else {
                contentEl.appendChild(content);
            }

            // 弹窗按钮
            const actionsEl = document.createElement('div');
            actionsEl.className = 'modal-actions';
            
            buttons.forEach(btn => {
                const button = document.createElement('button');
                button.className = `modal-btn ${btn.type || 'secondary'}`;
                button.textContent = btn.text;
                button.onclick = () => {
                    if (btn.onClick) {
                        const result = btn.onClick();
                        if (result !== false) {
                            CommonComponents.ModalManager.close(overlay);
                        }
                    } else {
                        CommonComponents.ModalManager.close(overlay);
                    }
                };
                actionsEl.appendChild(button);
            });

            // 组装弹窗
            modal.appendChild(header);
            modal.appendChild(contentEl);
            if (buttons.length > 0) {
                modal.appendChild(actionsEl);
            }

            overlay.appendChild(modal);
            document.body.appendChild(overlay);

            // 点击遮罩关闭
            if (closable) {
                overlay.onclick = (e) => {
                    if (e.target === overlay) {
                        CommonComponents.ModalManager.close(overlay);
                        if (onClose) onClose();
                    }
                };
            }

            // 显示弹窗
            setTimeout(() => {
                overlay.classList.add('active');
            }, 10);

            return overlay;
        },

        // 关闭弹窗
        close: (overlay) => {
            overlay.classList.remove('active');
            setTimeout(() => {
                if (overlay.parentNode) {
                    overlay.parentNode.removeChild(overlay);
                }
            }, 300);
        },

        // 确认弹窗
        confirm: (message, onConfirm, onCancel) => {
            return CommonComponents.ModalManager.create({
                title: '确认操作',
                content: `<p style="margin: 0; line-height: 1.5;">${message}</p>`,
                width: '400px',
                buttons: [
                    {
                        text: '取消',
                        type: 'secondary',
                        onClick: onCancel
                    },
                    {
                        text: '确认',
                        type: 'primary',
                        onClick: onConfirm
                    }
                ]
            });
        },

        // 提示弹窗
        alert: (message, onClose) => {
            return CommonComponents.ModalManager.create({
                title: '提示',
                content: `<p style="margin: 0; line-height: 1.5;">${message}</p>`,
                width: '400px',
                buttons: [
                    {
                        text: '关闭',
                        type: 'primary',
                        onClick: onClose
                    }
                ]
            });
        }
    },

    // 提示条管理系统
    ToastManager: {
        show: (message, type = 'info', duration = 3000) => {
            const toast = document.createElement('div');
            toast.className = `toast ${type}`;
            toast.textContent = message;
            
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.classList.add('active');
            }, 10);
            
            setTimeout(() => {
                toast.classList.remove('active');
                setTimeout(() => {
                    if (toast.parentNode) {
                        toast.parentNode.removeChild(toast);
                    }
                }, 300);
            }, duration);
        }
    },

    // 初始化公共功能
    initCommon: () => {
        // 添加响应式导航栏样式
        const responsiveStyle = document.createElement('link');
        responsiveStyle.rel = 'stylesheet';
        responsiveStyle.href = 'responsive-sidebar.css';
        document.head.appendChild(responsiveStyle);

        // 添加公共样式
        const style = document.createElement('style');
        style.textContent = CommonComponents.getCommonCSS();
        document.head.appendChild(style);

        // 添加Font Awesome图标库
        const fontAwesome = document.createElement('link');
        fontAwesome.rel = 'stylesheet';
        fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(fontAwesome);

        // 加载响应式导航栏脚本
        const responsiveScript = document.createElement('script');
        responsiveScript.src = 'responsive-sidebar.js';
        document.head.appendChild(responsiveScript);
    },

    // 初始化公共交互功能
    initCommonInteractions: () => {
        // 侧边栏按钮功能
        CommonComponents.initSidebarButtons();

        // 顶部导航功能
        CommonComponents.initTopNavButtons();

        // 教程卡片功能
        CommonComponents.initTutorialCards();

        // 排行榜功能
        CommonComponents.initChartsInteractions();
    },

    // 侧边栏按钮功能
    initSidebarButtons: () => {
        // Create 按钮 - 直接跳转，如有未保存修改则确认
        const createBtn = document.querySelector('.sidebar-btn.primary');
        if (createBtn) {
            createBtn.addEventListener('click', () => {
                // 检查是否有未保存的修改
                const hasUnsavedChanges = localStorage.getItem('hasUnsavedChanges') === 'true';
                if (hasUnsavedChanges) {
                    CommonComponents.ModalManager.confirm(
                        '是否放弃当前修改并跳转？',
                        () => {
                            localStorage.removeItem('hasUnsavedChanges');
                            window.location.href = 'create.html';
                        }
                    );
                } else {
                    window.location.href = 'create.html';
                }
            });
        }

        // Edit 按钮 - 直接跳转，如有未保存修改则确认
        const editBtn = document.querySelector('.sidebar-btn:not(.primary)');
        if (editBtn) {
            editBtn.addEventListener('click', () => {
                const hasUnsavedChanges = localStorage.getItem('hasUnsavedChanges') === 'true';
                if (hasUnsavedChanges) {
                    CommonComponents.ModalManager.confirm(
                        '是否放弃当前修改并跳转到编辑页面？',
                        () => {
                            localStorage.removeItem('hasUnsavedChanges');
                            CommonComponents.ToastManager.show('编辑功能即将推出！', 'info');
                        }
                    );
                } else {
                    CommonComponents.ToastManager.show('编辑功能即将推出！', 'info');
                }
            });
        }

        // Agent 按钮 - 居中功能选择弹窗
        const agentBtn = document.querySelector('.toggle-btn');
        if (agentBtn && agentBtn.textContent.includes('Agent')) {
            agentBtn.addEventListener('click', () => {
                const agentOptions = `
                    <div style="display: flex; flex-direction: column; gap: 15px;">
                        <div class="agent-option" style="padding: 15px; background-color: #333; border-radius: 4px; cursor: pointer; transition: background-color 0.3s;" onmouseover="this.style.backgroundColor='#444'" onmouseout="this.style.backgroundColor='#333'">
                            <h4 style="margin: 0 0 5px 0;">智能推荐</h4>
                            <p style="margin: 0; color: #aaa; font-size: 12px;">AI 分析您的创作偏好，推荐最适合的音乐和风格</p>
                        </div>
                        <div class="agent-option" style="padding: 15px; background-color: #333; border-radius: 4px; cursor: pointer; transition: background-color 0.3s;" onmouseover="this.style.backgroundColor='#444'" onmouseout="this.style.backgroundColor='#333'">
                            <h4 style="margin: 0 0 5px 0;">参数优化</h4>
                            <p style="margin: 0; color: #aaa; font-size: 12px;">自动调整创作参数，提升视频质量和观看体验</p>
                        </div>
                        <div class="agent-option" style="padding: 15px; background-color: #333; border-radius: 4px; cursor: pointer; transition: background-color 0.3s;" onmouseover="this.style.backgroundColor='#444'" onmouseout="this.style.backgroundColor='#333'">
                            <h4 style="margin: 0 0 5px 0;">创意灵感</h4>
                            <p style="margin: 0; color: #aaa; font-size: 12px;">基于热门趋势生成创作灵感和文案建议</p>
                        </div>
                    </div>
                `;

                const modal = CommonComponents.ModalManager.create({
                    title: 'AI Agent 功能',
                    content: agentOptions,
                    width: '600px',
                    buttons: [
                        {
                            text: '关闭',
                            type: 'secondary'
                        }
                    ]
                });

                // 为选项添加点击事件
                const options = modal.querySelectorAll('.agent-option');
                options.forEach((option, index) => {
                    option.addEventListener('click', () => {
                        const features = ['智能推荐', '参数优化', '创意灵感'];
                        CommonComponents.ToastManager.show(`已启用 ${features[index]} 功能`, 'success');
                        CommonComponents.ModalManager.close(modal);
                    });
                });
            });
        }

        // ToolBox 按钮 - 居中工具选择弹窗
        const toolboxBtns = document.querySelectorAll('.toggle-btn');
        toolboxBtns.forEach(btn => {
            if (btn.textContent.includes('ToolBox')) {
                btn.addEventListener('click', () => {
                    const toolboxOptions = `
                        <div style="display: flex; flex-direction: column; gap: 15px;">
                            <div class="tool-option" style="padding: 15px; background-color: #333; border-radius: 4px; cursor: pointer; transition: background-color 0.3s;" onmouseover="this.style.backgroundColor='#444'" onmouseout="this.style.backgroundColor='#333'">
                                <h4 style="margin: 0 0 5px 0;">格式转换</h4>
                                <p style="margin: 0; color: #aaa; font-size: 12px;">支持多种音频、视频格式转换</p>
                            </div>
                            <div class="tool-option" style="padding: 15px; background-color: #333; border-radius: 4px; cursor: pointer; transition: background-color 0.3s;" onmouseover="this.style.backgroundColor='#444'" onmouseout="this.style.backgroundColor='#333'">
                                <h4 style="margin: 0 0 5px 0;">音频裁剪</h4>
                                <p style="margin: 0; color: #aaa; font-size: 12px;">精确裁剪音频片段，支持淡入淡出</p>
                            </div>
                            <div class="tool-option" style="padding: 15px; background-color: #333; border-radius: 4px; cursor: pointer; transition: background-color 0.3s;" onmouseover="this.style.backgroundColor='#444'" onmouseout="this.style.backgroundColor='#333'">
                                <h4 style="margin: 0 0 5px 0;">批量处理</h4>
                                <p style="margin: 0; color: #aaa; font-size: 12px;">批量处理多个文件，提高工作效率</p>
                            </div>
                        </div>
                    `;

                    const modal = CommonComponents.ModalManager.create({
                        title: '工具箱',
                        content: toolboxOptions,
                        width: '600px',
                        buttons: [
                            {
                                text: '关闭',
                                type: 'secondary'
                            }
                        ]
                    });

                    // 为工具选项添加点击事件
                    const options = modal.querySelectorAll('.tool-option');
                    options.forEach((option, index) => {
                        option.addEventListener('click', () => {
                            const tools = ['格式转换', '音频裁剪', '批量处理'];
                            CommonComponents.ToastManager.show(`正在打开 ${tools[index]} 工具`, 'info');
                            CommonComponents.ModalManager.close(modal);
                        });
                    });
                });
            }
        });

        // New task 按钮
        const newTaskBtn = document.querySelector('.new-task');
        if (newTaskBtn) {
            newTaskBtn.addEventListener('click', () => {
                window.location.href = 'index.html';
            });
        }

        // 历史记录项目 - 页面内展开，无历史记录时弹窗提示
        const historyItems = document.querySelectorAll('.history-item');
        if (historyItems.length === 0) {
            // 如果没有历史记录，添加点击事件到历史标题
            const historyTitle = document.querySelector('.sidebar-section h4');
            if (historyTitle && historyTitle.textContent.includes('HISTORY')) {
                historyTitle.style.cursor = 'pointer';
                historyTitle.addEventListener('click', () => {
                    CommonComponents.ModalManager.alert('暂无历史创作记录');
                });
            }
        } else {
            historyItems.forEach(item => {
                item.addEventListener('click', () => {
                    CommonComponents.ToastManager.show(`正在加载历史项目：${item.textContent}`, 'info');
                });
            });
        }

        // 底部链接功能
        const referLink = document.querySelector('a[href="#"]:nth-of-type(1)');
        if (referLink && referLink.textContent.includes('Refer')) {
            referLink.addEventListener('click', (e) => {
                e.preventDefault();
                const referContent = `
                    <div style="text-align: center;">
                        <p style="margin-bottom: 15px;">分享您的推荐链接，邀请好友注册即可获得奖励！</p>
                        <div style="background-color: #333; padding: 10px; border-radius: 4px; margin-bottom: 15px; font-family: monospace;">
                            https://freebeat.com/ref/user123456
                        </div>
                        <button id="copy-ref-link" style="background-color: #007bff; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">复制链接</button>
                    </div>
                `;

                const modal = CommonComponents.ModalManager.create({
                    title: '推荐好友',
                    content: referContent,
                    width: '500px',
                    buttons: [
                        {
                            text: '关闭',
                            type: 'secondary'
                        }
                    ]
                });

                // 复制链接功能
                const copyBtn = modal.querySelector('#copy-ref-link');
                copyBtn.addEventListener('click', () => {
                    navigator.clipboard.writeText('https://freebeat.com/ref/user123456').then(() => {
                        CommonComponents.ToastManager.show('链接已复制到剪贴板', 'success');
                    });
                });
            });
        }

        const subscribeLink = document.querySelector('a[href="#"]:nth-of-type(2)');
        if (subscribeLink && subscribeLink.textContent.includes('Subscribe')) {
            subscribeLink.addEventListener('click', (e) => {
                e.preventDefault();
                const subscribeContent = `
                    <div style="display: flex; flex-direction: column; gap: 15px;">
                        <div style="text-align: center; margin-bottom: 10px;">
                            <p>选择您喜欢的订阅方式：</p>
                        </div>
                        <div class="subscribe-option" style="padding: 15px; background-color: #333; border-radius: 4px; cursor: pointer; text-align: center;" onmouseover="this.style.backgroundColor='#444'" onmouseout="this.style.backgroundColor='#333'">
                            <h4 style="margin: 0 0 5px 0;">邮箱订阅</h4>
                            <p style="margin: 0; color: #aaa; font-size: 12px;">接收最新功能更新和创作技巧</p>
                        </div>
                        <div class="subscribe-option" style="padding: 15px; background-color: #333; border-radius: 4px; cursor: pointer; text-align: center;" onmouseover="this.style.backgroundColor='#444'" onmouseout="this.style.backgroundColor='#333'">
                            <h4 style="margin: 0 0 5px 0;">微信公众号</h4>
                            <p style="margin: 0; color: #aaa; font-size: 12px;">关注公众号获取独家内容</p>
                        </div>
                    </div>
                `;

                const modal = CommonComponents.ModalManager.create({
                    title: '订阅服务',
                    content: subscribeContent,
                    width: '500px',
                    buttons: [
                        {
                            text: '关闭',
                            type: 'secondary'
                        }
                    ]
                });

                // 为订阅选项添加点击事件
                const options = modal.querySelectorAll('.subscribe-option');
                options.forEach((option, index) => {
                    option.addEventListener('click', () => {
                        const methods = ['邮箱订阅', '微信公众号'];
                        CommonComponents.ToastManager.show(`正在前往 ${methods[index]}`, 'info');
                        CommonComponents.ModalManager.close(modal);
                    });
                });
            });
        }

        const faqLink = document.querySelector('a[href="#"]:nth-of-type(3)');
        if (faqLink && faqLink.textContent.includes('FAQ')) {
            faqLink.addEventListener('click', (e) => {
                e.preventDefault();
                const faqContent = `
                    <div style="max-height: 400px; overflow-y: auto;">
                        <div style="margin-bottom: 15px;">
                            <input type="text" placeholder="搜索问题..." style="width: 100%; padding: 8px; background-color: #333; border: none; border-radius: 4px; color: #fff;">
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 10px;">
                            <div class="faq-item" style="padding: 10px; background-color: #333; border-radius: 4px;">
                                <h4 style="margin: 0 0 5px 0;">如何创建音乐视频？</h4>
                                <p style="margin: 0; color: #aaa; font-size: 12px;">选择风格 → 选择音乐 → 输入描述 → 点击创建</p>
                            </div>
                            <div class="faq-item" style="padding: 10px; background-color: #333; border-radius: 4px;">
                                <h4 style="margin: 0 0 5px 0;">支持哪些音频格式？</h4>
                                <p style="margin: 0; color: #aaa; font-size: 12px;">支持 MP3、WAV、FLAC、AAC 等常见格式</p>
                            </div>
                            <div class="faq-item" style="padding: 10px; background-color: #333; border-radius: 4px;">
                                <h4 style="margin: 0 0 5px 0;">如何移除水印？</h4>
                                <p style="margin: 0; color: #aaa; font-size: 12px;">升级到付费版本即可移除所有水印</p>
                            </div>
                        </div>
                    </div>
                `;

                CommonComponents.ModalManager.create({
                    title: '常见问题',
                    content: faqContent,
                    width: '800px',
                    buttons: [
                        {
                            text: '关闭',
                            type: 'secondary'
                        }
                    ]
                });
            });
        }

        // 语言选择 - 直接切换，无弹窗
        const languageSelect = document.querySelector('.language select');
        if (languageSelect) {
            languageSelect.addEventListener('change', (e) => {
                const language = e.target.value === 'zh' ? '中文' : 'English';
                CommonComponents.ToastManager.show(`语言已切换为 ${language}`, 'success');
                // 这里可以添加实际的语言切换逻辑
            });
        }
    },

    // 顶部导航功能
    initTopNavButtons: () => {
        // 下拉菜单 - 改为页面内展开式选择
        const dropdown = document.querySelector('.dropdown');
        if (dropdown) {
            dropdown.style.position = 'relative';
            
            dropdown.addEventListener('click', () => {
                // 检查是否已存在下拉菜单
                let existingMenu = dropdown.querySelector('.dropdown-menu');
                if (existingMenu) {
                    existingMenu.classList.toggle('active');
                    return;
                }

                // 创建下拉菜单
                const menu = document.createElement('div');
                menu.className = 'dropdown-menu';
                menu.innerHTML = `
                    <div class="dropdown-item">Music Video</div>
                    <div class="dropdown-item">Short Video</div>
                    <div class="dropdown-item">Podcast Video</div>
                    <div class="dropdown-item">Live Stream</div>
                `;

                dropdown.appendChild(menu);
                
                // 为菜单项添加点击事件
                const items = menu.querySelectorAll('.dropdown-item');
                items.forEach(item => {
                    item.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const selectedType = item.textContent;
                        dropdown.querySelector('span').textContent = selectedType;
                        menu.classList.remove('active');
                        CommonComponents.ToastManager.show(`已切换到 ${selectedType} 模式`, 'success');
                    });
                });

                setTimeout(() => {
                    menu.classList.add('active');
                }, 10);

                // 点击外部关闭菜单
                document.addEventListener('click', function closeMenu(e) {
                    if (!dropdown.contains(e.target)) {
                        menu.classList.remove('active');
                        document.removeEventListener('click', closeMenu);
                    }
                });
            });
        }

        // 金币显示 - 点击弹出金币明细弹窗
        const coinDisplay = document.querySelector('.coin');
        if (coinDisplay) {
            coinDisplay.style.cursor = 'pointer';
            coinDisplay.addEventListener('click', () => {
                const coinContent = `
                    <div style="display: flex; flex-direction: column; gap: 15px;">
                        <div style="display: flex; gap: 10px; border-bottom: 1px solid #333; padding-bottom: 10px;">
                            <button class="coin-tab active" data-tab="income" style="background: none; border: none; color: #007bff; padding: 5px 10px; cursor: pointer;">收入</button>
                            <button class="coin-tab" data-tab="expense" style="background: none; border: none; color: #aaa; padding: 5px 10px; cursor: pointer;">支出</button>
                            <button class="coin-tab" data-tab="tasks" style="background: none; border: none; color: #aaa; padding: 5px 10px; cursor: pointer;">任务获取</button>
                        </div>
                        <div id="coin-content">
                            <div class="coin-item" style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #444;">
                                <span>每日签到</span>
                                <span style="color: #28a745;">+50</span>
                            </div>
                            <div class="coin-item" style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #444;">
                                <span>推荐好友</span>
                                <span style="color: #28a745;">+200</span>
                            </div>
                            <div class="coin-item" style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #444;">
                                <span>完成创作</span>
                                <span style="color: #28a745;">+100</span>
                            </div>
                        </div>
                        <div style="text-align: center; padding-top: 10px; border-top: 1px solid #333;">
                            <strong>当前余额: 1000 金币</strong>
                        </div>
                    </div>
                `;

                const modal = CommonComponents.ModalManager.create({
                    title: '金币明细',
                    content: coinContent,
                    width: '500px',
                    buttons: [
                        {
                            text: '关闭',
                            type: 'secondary'
                        }
                    ]
                });

                // 标签页切换功能
                const tabs = modal.querySelectorAll('.coin-tab');
                const content = modal.querySelector('#coin-content');
                
                tabs.forEach(tab => {
                    tab.addEventListener('click', () => {
                        tabs.forEach(t => {
                            t.classList.remove('active');
                            t.style.color = '#aaa';
                        });
                        tab.classList.add('active');
                        tab.style.color = '#007bff';

                        const tabType = tab.getAttribute('data-tab');
                        let newContent = '';

                        switch(tabType) {
                            case 'income':
                                newContent = `
                                    <div class="coin-item" style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #444;">
                                        <span>每日签到</span>
                                        <span style="color: #28a745;">+50</span>
                                    </div>
                                    <div class="coin-item" style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #444;">
                                        <span>推荐好友</span>
                                        <span style="color: #28a745;">+200</span>
                                    </div>
                                    <div class="coin-item" style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #444;">
                                        <span>完成创作</span>
                                        <span style="color: #28a745;">+100</span>
                                    </div>
                                `;
                                break;
                            case 'expense':
                                newContent = `
                                    <div class="coin-item" style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #444;">
                                        <span>创建视频</span>
                                        <span style="color: #dc3545;">-30</span>
                                    </div>
                                    <div class="coin-item" style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #444;">
                                        <span>移除水印</span>
                                        <span style="color: #dc3545;">-50</span>
                                    </div>
                                `;
                                break;
                            case 'tasks':
                                newContent = `
                                    <div class="coin-item" style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #444;">
                                        <span>每日签到 (0/1)</span>
                                        <button style="background-color: #007bff; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer;">签到</button>
                                    </div>
                                    <div class="coin-item" style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #444;">
                                        <span>分享作品 (0/3)</span>
                                        <button style="background-color: #333; color: white; border: none; padding: 4px 8px; border-radius: 4px;">未完成</button>
                                    </div>
                                `;
                                break;
                        }
                        content.innerHTML = newContent;
                    });
                });
            });
        }

        // Discord 按钮 - 直接跳转，网络异常时提示
        const discordBtn = document.querySelector('.join-btn');
        if (discordBtn) {
            discordBtn.addEventListener('click', () => {
                try {
                    window.open('https://discord.gg/freebeat', '_blank');
                } catch (error) {
                    CommonComponents.ModalManager.create({
                        title: '跳转失败',
                        content: '<p style="margin: 0;">跳转失败，请检查网络连接</p>',
                        width: '400px',
                        buttons: [
                            {
                                text: '重试',
                                type: 'primary',
                                onClick: () => {
                                    window.open('https://discord.gg/freebeat', '_blank');
                                }
                            },
                            {
                                text: '关闭',
                                type: 'secondary'
                            }
                        ]
                    });
                }
            });
        }
    },

    // 教程卡片功能
    initTutorialCards: () => {
        const tutorialCards = document.querySelectorAll('.tutorial-card');
        tutorialCards.forEach((card, index) => {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                const tutorialContent = `
                    <div style="text-align: center;">
                        <div style="width: 100%; height: 300px; background-color: #333; border-radius: 4px; display: flex; align-items: center; justify-content: center; margin-bottom: 15px;">
                            <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
                                <div style="width: 60px; height: 60px; background-color: #007bff; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer;" id="play-btn">
                                    <span style="font-size: 24px;">▶</span>
                                </div>
                                <p style="margin: 0; color: #aaa;">点击播放教程 ${index + 1}</p>
                            </div>
                        </div>
                        <div style="display: flex; gap: 10px; justify-content: center;">
                            <button id="pause-btn" style="background-color: #333; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">暂停</button>
                            <button id="continue-btn" style="background-color: #333; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">继续</button>
                        </div>
                    </div>
                `;

                const modal = CommonComponents.ModalManager.create({
                    title: `教程 ${index + 1}：学习如何使用 Freebeat 创作音乐视频`,
                    content: tutorialContent,
                    width: '800px',
                    height: '500px',
                    buttons: [
                        {
                            text: '关闭',
                            type: 'secondary'
                        }
                    ],
                    onClose: () => {
                        // 保存教程进度到 localStorage
                        localStorage.setItem(`tutorial_${index}_progress`, 'watched');
                    }
                });

                // 播放控制功能
                let isPlaying = false;
                const playBtn = modal.querySelector('#play-btn');
                const pauseBtn = modal.querySelector('#pause-btn');
                const continueBtn = modal.querySelector('#continue-btn');

                playBtn.addEventListener('click', () => {
                    isPlaying = true;
                    playBtn.innerHTML = '<span style="font-size: 24px;">⏸</span>';
                    CommonComponents.ToastManager.show('教程播放中...', 'info');
                });

                pauseBtn.addEventListener('click', () => {
                    isPlaying = false;
                    playBtn.innerHTML = '<span style="font-size: 24px;">▶</span>';
                    CommonComponents.ToastManager.show('教程已暂停', 'info');
                });

                continueBtn.addEventListener('click', () => {
                    if (!isPlaying) {
                        isPlaying = true;
                        playBtn.innerHTML = '<span style="font-size: 24px;">⏸</span>';
                        CommonComponents.ToastManager.show('教程继续播放', 'info');
                    }
                });
            });
        });
    },

    // 排行榜交互功能
    initChartsInteractions: () => {
        // 排行榜标签切换 - 页面内无刷新切换
        const chartsTabs = document.querySelectorAll('.charts-tab');
        chartsTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // 移除所有活跃状态
                chartsTabs.forEach(t => t.classList.remove('active'));
                // 添加当前活跃状态
                tab.classList.add('active');
                CommonComponents.ToastManager.show(`已切换到 ${tab.textContent}`, 'info');
            });
        });

        // View Charts 链接
        const viewChartsLink = document.querySelector('.charts-view');
        if (viewChartsLink) {
            viewChartsLink.addEventListener('click', () => {
                CommonComponents.ToastManager.show('正在加载完整排行榜...', 'info');
            });
        }

        // 排行榜卡片点击 - 居中详情弹窗
        const chartCards = document.querySelectorAll('.chart-card');
        chartCards.forEach(card => {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                const title = card.querySelector('.title').textContent;
                const artist = card.querySelector('.artist').textContent;
                const remixCount = card.querySelector('.remix').textContent;

                const musicDetailContent = `
                    <div style="display: flex; flex-direction: column; gap: 20px;">
                        <div style="display: flex; gap: 20px;">
                            <div style="width: 120px; height: 120px; background-color: #555; border-radius: 4px; flex-shrink: 0;"></div>
                            <div style="flex: 1;">
                                <h3 style="margin: 0 0 10px 0;">${title}</h3>
                                <p style="margin: 0 0 5px 0; color: #aaa;">艺术家: ${artist}</p>
                                <p style="margin: 0 0 5px 0; color: #aaa;">时长: 3:45</p>
                                <p style="margin: 0 0 10px 0; color: #0f0; font-size: 12px;">${remixCount}</p>
                                <div style="display: flex; gap: 10px; align-items: center;">
                                    <button style="background-color: #007bff; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer;">▶ 试听</button>
                                    <span style="color: #aaa; font-size: 12px;">点击试听音乐</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                CommonComponents.ModalManager.create({
                    title: '音乐详情',
                    content: musicDetailContent,
                    width: '700px',
                    buttons: [
                        {
                            text: '加入收藏',
                            type: 'secondary',
                            onClick: () => {
                                CommonComponents.ToastManager.show('已加入收藏', 'success');
                                return false; // 不关闭弹窗
                            }
                        },
                        {
                            text: '选择使用',
                            type: 'primary',
                            onClick: () => {
                                // 保存选中的音乐
                                const selectedMusic = {
                                    title: title,
                                    artist: artist,
                                    duration: '3:45'
                                };
                                localStorage.setItem('selectedMusic', JSON.stringify(selectedMusic));
                                CommonComponents.ToastManager.show('已选择该音乐', 'success');
                                
                                // 跳转到创作页面
                                setTimeout(() => {
                                    window.location.href = 'create.html';
                                }, 1000);
                            }
                        },
                        {
                            text: '关闭',
                            type: 'secondary'
                        }
                    ]
                });
            });
        });
    }
};