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
            margin-left: 120px; /* 向右偏移，避免被导航栏遮挡 */
        }
        /* ToolBox 弹窗特殊样式 */
        .modal.toolbox-modal {
            margin-left: 150px; /* ToolBox 弹窗额外向右偏移 */
        }
        /* 自定义滚动条样式 */
        .modal::-webkit-scrollbar {
            width: 8px;
        }
        .modal::-webkit-scrollbar-track {
            background-color: #2a2a2a;
            border-radius: 4px;
        }
        .modal::-webkit-scrollbar-thumb {
            background-color: #555;
            border-radius: 4px;
            border: 1px solid #333;
        }
        .modal::-webkit-scrollbar-thumb:hover {
            background-color: #666;
        }
        /* Firefox 滚动条样式 */
        .modal {
            scrollbar-width: thin;
            scrollbar-color: #555 #2a2a2a;
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
                margin-left: 20px; /* 移动端不需要额外偏移 */
            }
            .modal.toolbox-modal {
                margin-left: 20px; /* 移动端重置偏移 */
            }
            .sidebar {
                width: 150px;
            }
        }
        
        /* 平板适配 */
        @media (min-width: 769px) and (max-width: 1024px) {
            .modal.toolbox-modal {
                margin-left: 100px; /* 平板端适中偏移 */
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
                <div class="tutorial-card" style="background-image: url('public/img/palceholder (8).png');"></div>
                <div class="tutorial-card" style="background-image: url('public/img/palceholder (9).png');"></div>
                <div class="tutorial-card" style="background-image: url('public/img/palceholder (10).png');"></div>
                <div class="tutorial-card" style="background-image: url('public/img/palceholder (2).png');"></div>
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
                    <div class="card-img" style="background-image: url('public/img/palceholder (1).png');"></div>
                    <div class="card-info">
                        <div class="remix">255 REMIX</div>
                        <div class="title">The Fate of Ophelia</div>
                        <div class="artist">Taylor Swift</div>
                    </div>
                </div>
                <div class="chart-card">
                    <div class="card-img" style="background-image: url('public/img/palceholder (2).png');"></div>
                    <div class="card-info">
                        <div class="remix">255 REMIX</div>
                        <div class="title">The Fate of Ophelia</div>
                        <div class="artist">Taylor Swift</div>
                    </div>
                </div>
                <div class="chart-card">
                    <div class="card-img" style="background-image: url('public/img/palceholder (3).png');"></div>
                    <div class="card-info">
                        <div class="remix">125 REMIX</div>
                        <div class="title">The Fate of Ophelia</div>
                        <div class="artist">Taylor Swift</div>
                    </div>
                </div>
                <div class="chart-card">
                    <div class="card-img" style="background-image: url('public/img/palceholder (4).png');"></div>
                    <div class="card-info">
                        <div class="remix">95 REMIX</div>
                        <div class="title">The Fate of Ophelia</div>
                        <div class="artist">Taylor Swift</div>
                    </div>
                </div>
                <div class="chart-card">
                    <div class="card-img" style="background-image: url('public/img/palceholder (5).png');"></div>
                    <div class="card-info">
                        <div class="remix">79 REMIX</div>
                        <div class="title">The Fate of Ophelia</div>
                        <div class="artist">Taylor Swift</div>
                    </div>
                </div>
                <div class="chart-card">
                    <div class="card-img" style="background-image: url('public/img/palceholder (6).png');"></div>
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
                onClose = null,
                customClass = ''
            } = options;

            // 创建遮罩层
            const overlay = document.createElement('div');
            overlay.className = 'modal-overlay';

            // 创建弹窗
            const modal = document.createElement('div');
            modal.className = `modal ${customClass}`.trim();
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
        // Create 按钮
        const createBtn = document.querySelector('.sidebar-btn.primary');
        if (createBtn) {
            createBtn.addEventListener('click', () => {
                window.location.href = 'create.html';
            });
        }

        // Edit 按钮
        const editBtn = document.querySelector('.sidebar-btn:not(.primary)');
        if (editBtn) {
            editBtn.addEventListener('click', () => {
                CommonComponents.ToastManager.show('编辑功能即将推出！', 'info');
            });
        }

        // Agent 按钮 - 简单提示
        const agentBtn = document.querySelector('.toggle-btn');
        if (agentBtn && agentBtn.textContent.includes('Agent')) {
            agentBtn.addEventListener('click', () => {
                CommonComponents.ToastManager.show('Agent 功能即将推出！', 'info');
            });
        }

        // ToolBox 按钮 - 居中工具选择弹窗
        const toolboxBtns = document.querySelectorAll('.toggle-btn');
        toolboxBtns.forEach(btn => {
            if (btn.textContent.includes('ToolBox')) {
                btn.addEventListener('click', () => {
                    const toolboxOptions = `
                        <div style="display: flex; flex-direction: column; gap: 20px;">
                            <div style="text-align: center; color: #aaa; font-size: 14px; margin-bottom: 10px;">
                                ToolBox 包含的工具主要分为三类，具体列表如下：
                            </div>
                            
                            <!-- Creative Agents 类别 -->
                            <div class="tool-category">
                                <h3 style="color: #007bff; margin: 0 0 10px 0; font-size: 16px; border-bottom: 1px solid #333; padding-bottom: 5px;">
                                    1. Creative Agents（创意代理类）
                                </h3>
                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px;">
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
                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px;">
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
                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px;">
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
                                padding: 8px 12px;
                                background-color: #333;
                                border-radius: 4px;
                                cursor: pointer;
                                transition: all 0.3s;
                                font-size: 12px;
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
                                top: -5px;
                                right: -5px;
                                font-size: 10px;
                            }
                            .tool-item.new::after {
                                content: "✨";
                                position: absolute;
                                top: -5px;
                                right: -5px;
                                font-size: 10px;
                            }
                            .tool-item.free::after {
                                content: "💎";
                                position: absolute;
                                top: -5px;
                                right: -5px;
                                font-size: 10px;
                            }
                            .tool-category {
                                background-color: #1a1a1a;
                                padding: 15px;
                                border-radius: 6px;
                                border: 1px solid #333;
                            }
                        </style>
                    `;

                    const modal = CommonComponents.ModalManager.create({
                        title: 'ToolBox - 工具箱',
                        content: toolboxOptions,
                        width: '800px',
                        customClass: 'toolbox-modal',
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
                                CommonComponents.ToastManager.show(`正在启动热门工具：${toolName}`, 'success');
                            } else if (item.classList.contains('new')) {
                                CommonComponents.ToastManager.show(`正在启动新功能：${toolName}`, 'info');
                            } else if (item.classList.contains('free')) {
                                CommonComponents.ToastManager.show(`正在启动免费工具：${toolName}`, 'success');
                            } else {
                                CommonComponents.ToastManager.show(`正在启动工具：${toolName}`, 'info');
                            }
                            
                            // 这里可以添加具体的工具跳转逻辑
                            setTimeout(() => {
                                CommonComponents.ModalManager.close(modal);
                            }, 1000);
                        });
                    });
                });
            }
        });
    },

    // 顶部导航功能
    initTopNavButtons: () => {
        // Discord 按钮
        const discordBtn = document.querySelector('.join-btn');
        if (discordBtn) {
            discordBtn.addEventListener('click', () => {
                CommonComponents.ToastManager.show('正在跳转到 Discord...', 'info');
            });
        }

        // 金币显示
        const coinDisplay = document.querySelector('.coin');
        if (coinDisplay) {
            coinDisplay.addEventListener('click', () => {
                CommonComponents.ToastManager.show('金币功能即将推出！', 'info');
            });
        }
    },

    // 教程卡片功能
    initTutorialCards: () => {
        const tutorialCards = document.querySelectorAll('.tutorial-card');
        tutorialCards.forEach((card, index) => {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                CommonComponents.ToastManager.show(`正在播放教程 ${index + 1}...`, 'info');
            });
        });
    },

    // 排行榜交互功能
    initChartsInteractions: () => {
        // 排行榜标签切换
        const chartsTabs = document.querySelectorAll('.charts-tab');
        chartsTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                chartsTabs.forEach(t => t.classList.remove('active'));
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

        // 排行榜卡片点击
        const chartCards = document.querySelectorAll('.chart-card');
        chartCards.forEach(card => {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                const title = card.querySelector('.title').textContent;
                CommonComponents.ToastManager.show(`正在播放 ${title}...`, 'info');
            });
        });
    }
};