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
            display: flex;
            min-height: 100vh;
        }

        /* 左侧侧边栏 */
        .sidebar {
            width: 200px;
            background-color: #1E1E1E;
            padding: 20px 10px;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
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
                    <i class="fas fa-paw"></i> onpiu
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

    // 初始化公共功能
    initCommon: () => {
        // 添加公共样式
        const style = document.createElement('style');
        style.textContent = CommonComponents.getCommonCSS();
        document.head.appendChild(style);

        // 添加Font Awesome图标库
        const fontAwesome = document.createElement('link');
        fontAwesome.rel = 'stylesheet';
        fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(fontAwesome);
    }
};