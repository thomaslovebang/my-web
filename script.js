// 面包实验室 - 战术数据存储库
const tacticalData = {
    "2.1 自动刷石机": {
        category: "Level 2: Factory",
        title: "基础资源工厂",
        steps: [{ img: "", text: "刷石机基础模块已部署。" }]
    },
    "2.2 甘蔗收割机": {
        category: "Level 2: Factory",
        title: "观察者式自动甘蔗机",
        steps: [{ 
            img: "", 
            text: `
                <div class="blueprint-card">
                    <div class="blueprint-info">
                        <p><strong>原理：</strong> 观察者监测高度 -> 活塞切割。<br>
                        <strong>面包批注：</strong> 烟花火箭的材料来源，这是通往飞行自由的第一步。</p>
                    </div>
                    <div class="download-zone">
                        <p class="status-tag">DIGITAL PROJECTION READY</p>
                        <a href="blueprints/ganzheji_2_2.litematic" 
                           download="甘蔗机2_2.litematic" 
                           class="download-btn">
                           💾 下载 .litematic 投影
                        </a>
                    </div>
                </div>
            `
        }]
    },
    // 后续可以继续添加 19 个基础插件和 11 个核武器级插件
};

// 简单的页面渲染逻辑（示例）
function loadTactical(id) {
    const data = tacticalData[id];
    if (data) {
        const container = document.getElementById('content-display');
        container.innerHTML = `<h3>${data.title}</h3>` + data.steps[0].text;
    }
}
