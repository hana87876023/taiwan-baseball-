// 台湾プロ野球 CPBL ランディングページ JavaScript

// チームデータ
const teams = [
    {
        name: "統一7-ELEVEn獅",
        english: "Uni-President 7-Eleven Lions",
        logo: "https://images.unsplash.com/photo-1609554496796-c345a5335ceb?w=300&q=80",
        wins: 72,
        losses: 48,
        ties: 0,
        color: "#FF6B00"
    },
    {
        name: "中信兄弟",
        english: "CTBC Brothers",
        logo: "https://images.unsplash.com/photo-1587385789097-0197a7fbd179?w=300&q=80",
        wins: 68,
        losses: 52,
        ties: 0,
        color: "#FFDB00"
    },
    {
        name: "楽天モンキーズ",
        english: "Rakuten Monkeys",
        logo: "https://images.unsplash.com/photo-1569163139394-de4798d8c3a9?w=300&q=80",
        wins: 65,
        losses: 55,
        ties: 0,
        color: "#800000"
    },
    {
        name: "富邦ガーディアンズ",
        english: "Fubon Guardians",
        logo: "https://images.unsplash.com/photo-1566479117151-c10615f43073?w=300&q=80",
        wins: 55,
        losses: 65,
        ties: 0,
        color: "#004C97"
    },
    {
        name: "味全ドラゴンズ",
        english: "Wei Chuan Dragons",
        logo: "https://images.unsplash.com/photo-1590502593747-42a996133562?w=300&q=80",
        wins: 50,
        losses: 70,
        ties: 0,
        color: "#EE1C25"
    },
    {
        name: "TSGホークス",
        english: "TSG Hawks",
        logo: "https://images.unsplash.com/photo-1602491052854-64c03921de87?w=300&q=80",
        wins: 45,
        losses: 75,
        ties: 0,
        color: "#FF7F00"
    }
];

// 球場データ
const stadiums = [
    {
        name: "台北ドーム",
        location: "台北",
        capacity: "40,000",
        status: "active",
        image: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=400&q=80"
    },
    {
        name: "桃園国際野球場",
        location: "桃園",
        capacity: "20,000",
        status: "active",
        image: "https://images.unsplash.com/photo-1590508751339-1a5e9b72a2a6?w=400&q=80"
    },
    {
        name: "台中洲際球場",
        location: "台中",
        capacity: "20,000",
        status: "inactive",
        image: "https://images.unsplash.com/photo-1570185552685-b12b2c62c0a6?w=400&q=80"
    },
    {
        name: "台南市立球場",
        location: "台南",
        capacity: "12,000",
        status: "active",
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=80"
    }
];

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    initTeamsGrid();
    initStadiumList();
    initPhotoGallery();
    initTabs();
    initMediaTabs();
    initTickerAnimation();
    replaceEmojisWithImages(); // 絵文字を画像に置換
});

// チームグリッドの初期化
function initTeamsGrid() {
    const teamsGrid = document.getElementById('teamsGrid');
    if (!teamsGrid) return;

    teams.forEach(team => {
        const teamCard = document.createElement('div');
        teamCard.className = 'team-card';
        teamCard.innerHTML = `
            <div class="team-logo" style="background-image: url('${team.logo}'); background-size: cover; background-position: center;">
                <div style="background: rgba(0,0,0,0.3); width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
                    <div style="text-align: center; color: white;">
                        <div style="font-size: 2rem; font-weight: bold;">${team.name}</div>
                        <div style="font-size: 1rem; margin-top: 0.5rem;">${team.english}</div>
                    </div>
                </div>
            </div>
            <div class="team-info">
                <h3>${team.name}</h3>
                <p style="color: #6b7280; font-size: 0.9rem;">${team.english}</p>
                <div class="team-stats">
                    <div class="stat">
                        <div class="stat-value">${team.wins}</div>
                        <div class="stat-label">勝</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">${team.losses}</div>
                        <div class="stat-label">敗</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">.${((team.wins / (team.wins + team.losses)) * 1000).toFixed(0)}</div>
                        <div class="stat-label">勝率</div>
                    </div>
                </div>
            </div>
        `;
        teamsGrid.appendChild(teamCard);
    });
}

// 球場リストの初期化
function initStadiumList() {
    const stadiumList = document.getElementById('stadiumList');
    if (!stadiumList) return;

    stadiums.forEach(stadium => {
        const stadiumItem = document.createElement('div');
        stadiumItem.className = 'stadium-item';
        stadiumItem.innerHTML = `
            <div>
                <div class="stadium-name">${stadium.name}</div>
                <div class="stadium-capacity">収容人数: ${stadium.capacity}</div>
            </div>
            <div class="stadium-status ${stadium.status}">
                ${stadium.status === 'active' ? '今週試合あり' : '試合なし'}
            </div>
        `;
        stadiumList.appendChild(stadiumItem);
    });
}

// フォトギャラリーの初期化
function initPhotoGallery() {
    const photoGallery = document.getElementById('photoGallery');
    if (!photoGallery) return;

    const photos = [
        "https://images.unsplash.com/photo-1567654854594-609e3b14b23e?w=400&q=80",
        "https://images.unsplash.com/photo-1536122522160-72e3eb09863e?w=400&q=80",
        "https://images.unsplash.com/photo-1566479117151-c10615f43073?w=400&q=80",
        "https://images.unsplash.com/photo-1590502593747-42a996133562?w=400&q=80",
        "https://images.unsplash.com/photo-1569163139394-de4798d8c3a9?w=400&q=80",
        "https://images.unsplash.com/photo-1587385789097-0197a7fbd179?w=400&q=80",
        "https://images.unsplash.com/photo-1609554496796-c345a5335ceb?w=400&q=80",
        "https://images.unsplash.com/photo-1602491052854-64c03921de87?w=400&q=80"
    ];

    photos.forEach((photo, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `<img src="${photo}" alt="CPBL Gallery ${index + 1}" loading="lazy">`;
        photoGallery.appendChild(galleryItem);
    });
}

// タブの初期化
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            // すべてのタブボタンとパネルを非アクティブに
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));

            // クリックされたタブをアクティブに
            btn.classList.add('active');
            document.getElementById(`${targetTab}-tab`).classList.add('active');
        });
    });
}

// メディアタブの初期化
function initMediaTabs() {
    const mediaTabs = document.querySelectorAll('.media-tab-btn');
    const mediaPanels = document.querySelectorAll('.media-panel');

    mediaTabs.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetPanel = btn.getAttribute('data-media-tab');

            // すべてのタブとパネルを非アクティブに
            mediaTabs.forEach(t => t.classList.remove('active'));
            mediaPanels.forEach(p => p.classList.remove('active'));

            // クリックされたタブをアクティブに
            btn.classList.add('active');
            document.getElementById(`${targetPanel}-media`).classList.add('active');
        });
    });
}

// ティッカーアニメーションの初期化
function initTickerAnimation() {
    const tickerSlides = document.getElementById('tickerSlides');
    if (!tickerSlides) return;

    // スライドを複製して無限ループを作成
    const slides = tickerSlides.innerHTML;
    tickerSlides.innerHTML = slides + slides;
}

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 絵文字を画像に置換する関数
function replaceEmojisWithImages() {
    // 絵文字と画像URLのマッピング
    const emojiToImage = {
        // 統計アイコン
        '⚾': {
            url: 'https://images.unsplash.com/photo-1508344928928-7165b67de128?w=100&q=80',
            alt: '野球ボール'
        },
        '🏏': {
            url: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=100&q=80',
            alt: 'バット'
        },
        '🥎': {
            url: 'https://images.unsplash.com/photo-1589925258375-50ab8fb1e6f5?w=100&q=80',
            alt: 'ソフトボール'
        },
        '💪': {
            url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=100&q=80',
            alt: '強打者'
        },
        // メディアアイコン
        '📺': {
            url: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=100&q=80',
            alt: 'ライブ配信'
        },
        '🎬': {
            url: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=100&q=80',
            alt: 'ハイライト'
        },
        '📸': {
            url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=100&q=80',
            alt: 'カメラ'
        },
        // ソーシャルメディア
        '📘': {
            url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&q=80',
            alt: 'Facebook'
        },
        '🐦': {
            url: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=100&q=80',
            alt: 'Twitter'
        },
        // その他のアイコン
        '🎟️': {
            url: 'https://images.unsplash.com/photo-1548199569-3e1c646665cb?w=100&q=80',
            alt: 'チケット'
        },
        '📱': {
            url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&q=80',
            alt: 'スマートフォン'
        },
        '👥': {
            url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=100&q=80',
            alt: '視聴者'
        },
        '⏱️': {
            url: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=100&q=80',
            alt: '時間'
        },
        '👁️': {
            url: 'https://images.unsplash.com/photo-1549834125-82d3c48159a3?w=100&q=80',
            alt: '視聴回数'
        }
    };

    // ノードを走査して絵文字を置換
    function replaceInNode(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            let text = node.textContent;
            let hasEmoji = false;
            
            // 絵文字が含まれているかチェック
            for (const emoji in emojiToImage) {
                if (text.includes(emoji)) {
                    hasEmoji = true;
                    break;
                }
            }
            
            if (hasEmoji) {
                const span = document.createElement('span');
                let html = text;
                
                // 各絵文字を画像タグに置換
                for (const [emoji, data] of Object.entries(emojiToImage)) {
                    const imgTag = `<img src="${data.url}" alt="${data.alt}" class="emoji-replacement" style="width: 1.2em; height: 1.2em; vertical-align: middle; margin: 0 2px;">`;
                    html = html.replace(new RegExp(emoji, 'g'), imgTag);
                }
                
                span.innerHTML = html;
                node.parentNode.replaceChild(span, node);
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            // script, style, noframe タグは無視
            if (!['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(node.nodeName)) {
                // 子ノードを配列にコピー（ライブNodeListを避けるため）
                const children = Array.from(node.childNodes);
                children.forEach(child => replaceInNode(child));
            }
        }
    }

    // body全体を走査
    replaceInNode(document.body);
    
    // 特定のクラスに対して追加のスタイリング
    document.querySelectorAll('.stat-icon img, .cta-icon img').forEach(img => {
        img.style.width = '2.5rem';
        img.style.height = '2.5rem';
        img.style.objectFit = 'cover';
        img.style.borderRadius = '50%';
    });
    
    // ソーシャルアイコンのスタイリング
    document.querySelectorAll('.social-icon img, .social-link img').forEach(img => {
        img.style.width = '1.5rem';
        img.style.height = '1.5rem';
        img.style.borderRadius = '4px';
    });
}