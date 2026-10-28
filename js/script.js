/* =================================================================
   EliteForceVN Studio — Interactive Scripts
   Language Switcher (VI <-> EN), Team Showcase, 3D Tilt & Animations
   ================================================================= */

// ===== SONG NGỮ (VI MẶC ĐỊNH AUTO) =====
let currentLang = 'vi'; // Auto Tiếng Việt khi vào web

const i18n = {
    vi: {
        nav_home: "Trang Chủ",
        nav_techniques: "Dịch Vụ",
        nav_pricing: "Bảng Giá",
        nav_projects: "Dự Án",
        nav_info: "Info",
        hero_welcome: "CHÀO MỪNG",
        hero_to: "ĐẾN VỚI",
        hero_desc: "Chào mừng bạn đến với EliteForceVN — Nơi cung cấp các giải pháp công nghệ & dịch vụ gaming chuyên sâu. Chúng tôi hỗ trợ tối ưu máy tính, regedit aimlock, cheat FreeFire, thiết lập server Discord, khung hồ sơ và phát triển bot riêng theo yêu cầu với độ ổn định cao.",
        btn_join_discord: "Tham gia Discord",
        sec_techniques: "Dịch Vụ Gaming",
        badge_pricing: "BẢNG GIÁ NIÊM YẾT",
        sec_pricing: "Bảng Giá Dịch Vụ",
        sec_pricing_desc: "Bảng giá công khai & minh bạch — Cung cấp dịch vụ uy tín với mức giá tối ưu nhất cho anh em game thủ",
        price_order_btn: "Đặt Dịch Vụ",
        price_banner_title: "Cần Báo Giá Theo Yêu Cầu Riêng?",
        price_banner_desc: "Tham gia Discord EliteForceVN để được kỹ thuật viên hỗ trợ kiểm tra máy, test cấu hình và tư vấn gói tối ưu nhất.",
        sec_projects: "Projects & Cam Kết",
        sec_info: "Đội Ngũ Thành Viên (Info)",
        tab_all: "Tất Cả",
        tab_opt: "Tối Ưu PC",
        tab_reg: "Regedit",
        tab_cheat: "Cheat FF",
        tab_dc: "Setup Discord",
        tab_profile: "Khung Hồ Sơ",
        tab_bot: "Dev Bot",
        proj_title: "EliteForceVN",
        proj_desc: "Chúng tôi chuyên nghiên cứu và cung cấp các giải pháp tối ưu hệ thống gaming bài bản và đáng tin cậy. Toàn bộ dịch vụ được cấu hình riêng theo thông số phần cứng và yêu cầu cụ thể của từng khách hàng.",
        feat_1_title: "An Toàn 100%",
        feat_1_desc: "Bảo mật dữ liệu, anti-ban cập nhật liên tục",
        feat_2_title: "Tốc Độ & Ổn Định",
        feat_2_desc: "Cải thiện FPS và độ nhạy tức thì",
        feat_3_title: "Support 24/7",
        feat_3_desc: "Kỹ thuật viên hỗ trợ trực tiếp qua Discord",
        feat_4_title: "Custom Code",
        feat_4_desc: "Dev bot và hệ thống Discord theo yêu cầu",
        footer_powered: "Đồng hành cùng cộng đồng Discord",
        modal_creator_lbl: "Người làm:",
        modal_owner_lbl: "Chủ sở hữu:",
        modal_team_lbl: "Đội ngũ:",
        modal_cat_lbl: "Phân khúc:",
        modal_price_lbl: "MỨC GIÁ:",
        modal_features_title: "QUYỀN LỢI & CAM KẾT DỊCH VỤ",
        modal_contact_btn: "Liên Hệ Ngay",
        card_contact_btn: "Liên Hệ Ngay"
    },
    en: {
        nav_home: "Home",
        nav_techniques: "Techniques",
        nav_pricing: "Pricing",
        nav_projects: "Projects",
        nav_info: "Info",
        hero_welcome: "WELCOME",
        hero_to: "TO",
        hero_desc: "Welcome to EliteForceVN — where technology enthusiasts gather! Developed by the EliteForceVN team, we bring you custom optimization, regedit aimlock, freefire tools, Discord server architecture, profile decorations, and custom bots with high-level performance.",
        btn_join_discord: "Join Discord",
        sec_techniques: "Techniques",
        badge_pricing: "OFFICIAL PRICING",
        sec_pricing: "Service Pricing",
        sec_pricing_desc: "Transparent & competitive rates — Premier gaming solutions customized to your needs",
        price_order_btn: "Order Service",
        price_banner_title: "Need Custom Specification?",
        price_banner_desc: "Join EliteForceVN Discord to get instant PC benchmark check and direct technician consultation.",
        sec_projects: "Projects & Features",
        sec_info: "Team & Info",
        tab_all: "All",
        tab_opt: "PC Optimize",
        tab_reg: "Regedit",
        tab_cheat: "Cheat FF",
        tab_dc: "Discord Setup",
        tab_profile: "Profile Frames",
        tab_bot: "Dev Bot",
        proj_title: "EliteForceVN",
        proj_desc: "We research and deliver premier gaming system solutions. All services are fine-tuned individually for your specific PC hardware specs and community needs.",
        feat_1_title: "100% Safe & Secure",
        feat_1_desc: "Protected data, continuous anti-ban updates",
        feat_2_title: "Speed & Stability",
        feat_2_desc: "Immediate FPS gain and zero latency",
        feat_3_title: "24/7 Dedicated Support",
        feat_3_desc: "Direct technician assistance via Discord",
        feat_4_title: "Custom Code",
        feat_4_desc: "Tailored bots & complete server ecosystems",
        footer_powered: "Powered by Discord Community",
        modal_creator_lbl: "Creator:",
        modal_owner_lbl: "Owner:",
        modal_team_lbl: "Team:",
        modal_cat_lbl: "Category:",
        modal_price_lbl: "STARTING AT:",
        modal_features_title: "SERVICE BENEFITS & COMMITMENT",
        modal_contact_btn: "Contact Now",
        card_contact_btn: "Contact Now"
    }
};

// ===== 6 SẢN PHẨM CHÍNH XÁC THEO YÊU CẦU =====
const productsData = {
    vi: [
        {
            id: 1, name: "Tối Ưu Máy Tính", category: "optimize", categoryLabel: "Tối Ưu PC",
            categoryTag: "WINDOWS & HARDWARE",
            description: "Tối ưu toàn diện Windows, cải thiện FPS rõ rệt, triệt tiêu giật lag và độ trễ CPU/GPU.",
            badge: "Bán Chạy Nhất", badgeType: "gold", accentColor: "#d4a843", creator: "EliteForceVN",
            image: "assets/product-optimize.png", gradient: "radial-gradient(circle at 50% 50%, #241c10, #0a0a0f)",
            tags: ["Boost FPS", "Zero Delay", "Clean OS"], price: "200k - 250k", period: "trọn gói",
            features: [
                "Dọn sạch rác hệ thống, xóa cache ẩn & tắt triệt để các service ngốn ngầm RAM/CPU",
                "Tinh chỉnh GPU, tối ưu hóa Windows & driver ép xung hiệu năng cao, máy mát mượt",
                "Tăng vọt FPS, triệt tiêu hoàn toàn giật khựng (stutter) và giảm input delay chuột",
                "Kỹ thuật viên kết nối & test cấu hình trực tiếp qua Ultraview / AnyDesk"
            ]
        },
        {
            id: 2, name: "Regedit Hỗ Trợ Kéo Tâm", category: "regedit", categoryLabel: "Regedit",
            categoryTag: "MOUSE & AIM ACCURACY",
            description: "Regedit tinh chỉnh thông số chuột, zero delay input, hỗ trợ ghìm và kéo tâm chuẩn xác.",
            badge: "Hot", badgeType: "amber", accentColor: "#f59e0b", creator: "EliteForceVN",
            image: "assets/product-regedit.png", gradient: "radial-gradient(circle at 50% 50%, #29180c, #0a0a0f)",
            tags: ["Aimlock", "Zero Delay", "Safe 100%"], price: "70k - 800k", period: "tùy phiên bản",
            features: [
                "Căn chỉnh thông số độ nhạy chuột (Mouse Curve) zero delay, phản hồi tức thì",
                "Hỗ trợ ghìm tâm đầm tay, ổn định đường đạn và kéo tâm đầu (headshot) cực chuẩn",
                "File Registry chuẩn sạch 100%, không can thiệp bộ nhớ game, chống ban tuyệt đối",
                "Cài đặt 1-click nhanh gọn, tương thích mọi hệ điều hành Windows và loại chuột"
            ]
        },
        {
            id: 3, name: "Cheat FreeFire", category: "cheat", categoryLabel: "Cheat FF",
            categoryTag: "TACTICAL MENU VIP",
            description: "Menu FreeFire cao cấp: Aimbot mượt mà, ESP vị trí đối thủ, cập nhật liên tục.",
            badge: "Siêu Tiết Kiệm", badgeType: "cyan", accentColor: "#06b6d4", creator: "EliteForceVN",
            image: "assets/product-cheat.png", gradient: "radial-gradient(circle at 50% 50%, #0a2026, #0a0a0f)",
            tags: ["Aimbot", "ESP Radar", "Bypass"], price: "20k", period: "/ 1 Ngày",
            features: [
                "Menu VIP mượt mà: Aimbot tự động bám mục tiêu, chỉnh góc FOV & độ mượt tự do",
                "ESP Radar cao cấp: Hiển thị tên người chơi, vị trí khoảng cách và thanh máu",
                "Hệ thống Bypass bảo mật cập nhật liên tục theo bản vá game, an toàn tối đa",
                "Cấp Key kích hoạt siêu tốc trong 1 phút kèm video hướng dẫn chi tiết từ A - Z"
            ]
        },
        {
            id: 4, name: "Setup Discord Server", category: "discord-setup", categoryLabel: "Setup Discord",
            categoryTag: "COMMUNITY ECOSYSTEM",
            description: "Thiết kế & phân quyền Discord toàn diện, hệ thống ticket, verify, giao diện VIP.",
            badge: "Chuyên Nghiệp", badgeType: "blue", accentColor: "#5865F2", creator: "EliteForceVN",
            image: "assets/product-setup-discord.png", gradient: "radial-gradient(circle at 50% 50%, #151838, #0a0a0f)",
            tags: ["Phân Quyền", "Bot Protect", "Ticket VIP"], price: "50k - 200k", period: "tùy quy mô",
            features: [
                "Thiết kế hệ thống phân quyền (Roles) chuẩn chỉ, tích hợp bot chống nuke & raid 100%",
                "Cài đặt full Bot tự động: Auto Verify, mở Ticket hỗ trợ, Welcome, Mini Game",
                "Giao diện chuẩn thẩm mỹ: Thiết kế trọn bộ Banner động, Icon phòng & Emoji VIP",
                "Bàn giao toàn quyền sở hữu (Ownership) kèm tài liệu hướng dẫn quản trị chi tiết"
            ]
        },
        {
            id: 5, name: "Khung Hồ Sơ Discord", category: "profile", categoryLabel: "Khung Hồ Sơ",
            categoryTag: "PROFILE AESTHETICS",
            description: "Bộ khung avatar animated lấp lánh, decoration trang cá nhân độc đáo và ấn tượng.",
            badge: "Thịnh Hành", badgeType: "pink", accentColor: "#ec4899", creator: "EliteForceVN",
            image: "assets/product-profile.png", gradient: "radial-gradient(circle at 50% 50%, #2b1123, #0a0a0f)",
            tags: ["Khung Động", "Neon Effect", "Profile VIP"], price: "66k - 200k", period: "tùy mẫu mã",
            features: [
                "Bộ khung viền Avatar Animated chuyển động hào quang lấp lánh cực ấn tượng",
                "Tặng kèm Theme hiệu ứng trang cá nhân đồng bộ màu sắc và phong cách riêng",
                "Không cần tài khoản Discord Nitro vẫn gắn và hiển thị lung linh trên mọi thiết bị",
                "Bàn giao trọn bộ file đồ họa gốc sắc nét kèm hỗ trợ gắn và căn chỉnh trực tiếp"
            ]
        },
        {
            id: 6, name: "Dev Bot Discord Riêng", category: "bot", categoryLabel: "Dev Bot",
            categoryTag: "CUSTOM PROGRAMMING",
            description: "Lập trình bot Discord theo yêu cầu: hệ thống nạp thẻ, quản lý tự động, mini game.",
            badge: "Độc Quyền", badgeType: "green", accentColor: "#10b981", creator: "EliteForceVN",
            image: "assets/product-bot.png", gradient: "radial-gradient(circle at 50% 50%, #0d2619, #0a0a0f)",
            tags: ["Custom Code", "Auto Nạp Thẻ", "Host 24/7"], price: "80k - 350k", period: "tùy tính năng",
            features: [
                "Lập trình toàn bộ tính năng bot độc quyền theo kịch bản và ý tưởng của bạn",
                "Tích hợp cổng Nạp Tiền tự động (Quét QR ngân hàng / Thẻ cào) duyệt 24/7",
                "Hệ thống minigame, tính điểm kinh tế, tự động tạo phòng voice và thông báo MXH",
                "Bàn giao Source Code, bảo hành lỗi kỹ thuật và hỗ trợ host bot chạy 24/7 ổn định"
            ]
        }
    ],
    en: [
        {
            id: 1, name: "PC System Optimizer", category: "optimize", categoryLabel: "Optimize",
            categoryTag: "WINDOWS & HARDWARE",
            description: "Comprehensive Windows optimization, peak FPS booster, zero latency for CPU/GPU.",
            badge: "Best Seller", badgeType: "gold", accentColor: "#d4a843", creator: "EliteForceVN",
            image: "assets/product-optimize.png", gradient: "radial-gradient(circle at 50% 50%, #241c10, #0a0a0f)",
            tags: ["Boost FPS", "Zero Delay", "Clean OS"], price: "200k - 250k", period: "package",
            features: [
                "Deep system cleanup, clear hidden cache & eliminate heavy background services",
                "GPU/CPU tuning & Windows optimization for cooler, silky smooth performance",
                "Massive FPS boost, elimination of micro-stuttering and minimal input delay",
                "Direct live setup & benchmark stress test via Ultraview / AnyDesk"
            ]
        },
        {
            id: 2, name: "Aimlock Regedit Pro", category: "regedit", categoryLabel: "Regedit",
            categoryTag: "MOUSE & AIM ACCURACY",
            description: "Mouse precision curves, zero input lag, enhanced drag-to-head tracking.",
            badge: "Hot", badgeType: "amber", accentColor: "#f59e0b", creator: "EliteForceVN",
            image: "assets/product-regedit.png", gradient: "radial-gradient(circle at 50% 50%, #29180c, #0a0a0f)",
            tags: ["Aimlock", "Zero Delay", "Safe 100%"], price: "70k - 800k", period: "by edition",
            features: [
                "Calibrated mouse sensitivity curves with zero delay and instant flick response",
                "Smooth recoil stabilization and precise drag-to-head tracking assistance",
                "100% clean Registry config, zero game memory tampering, completely safe",
                "1-click quick installation, fully compatible with all Windows versions and mice"
            ]
        },
        {
            id: 3, name: "FreeFire Tactical Cheat", category: "cheat", categoryLabel: "Cheat FF",
            categoryTag: "TACTICAL MENU VIP",
            description: "Advanced FreeFire suite: Smooth aimbot, distance ESP, continuous anti-ban updates.",
            badge: "Daily Pass", badgeType: "cyan", accentColor: "#06b6d4", creator: "EliteForceVN",
            image: "assets/product-cheat.png", gradient: "radial-gradient(circle at 50% 50%, #0a2026, #0a0a0f)",
            tags: ["Aimbot", "ESP Radar", "Bypass"], price: "20k", period: "/ 1 Day",
            features: [
                "Smooth VIP menu: Auto target aimbot with customizable FOV angle and smoothness",
                "High-end ESP Radar: Displays player names, accurate distances and real-time health",
                "Continuously updated security bypass aligned with latest patches for safety",
                "Instant license key delivery within 1 minute with step-by-step video guide"
            ]
        },
        {
            id: 4, name: "Discord Server Architecture", category: "discord-setup", categoryLabel: "Discord Setup",
            categoryTag: "COMMUNITY ECOSYSTEM",
            description: "Professional guild setup, automated tickets, verification gates, custom channels.",
            badge: "Pro Build", badgeType: "blue", accentColor: "#5865F2", creator: "EliteForceVN",
            image: "assets/product-setup-discord.png", gradient: "radial-gradient(circle at 50% 50%, #151838, #0a0a0f)",
            tags: ["Roles Hierarchy", "Bot Protect", "Ticket VIP"], price: "50k - 200k", period: "by server size",
            features: [
                "Professional role hierarchy & permission architecture with 100% anti-nuke/raid shield",
                "Full automated bot suite: Self-verify gates, support ticket desk, welcome & games",
                "Aesthetic guild layout: Custom animated banners, channel icons & VIP emojis",
                "Full server ownership handover with complete administrator operating guide"
            ]
        },
        {
            id: 5, name: "Discord Profile Frame Pack", category: "profile", categoryLabel: "Profiles",
            categoryTag: "PROFILE AESTHETICS",
            description: "Animated avatar frames, nitro profile badges, unique personalized decorations.",
            badge: "Trending", badgeType: "pink", accentColor: "#ec4899", creator: "EliteForceVN",
            image: "assets/product-profile.png", gradient: "radial-gradient(circle at 50% 50%, #2b1123, #0a0a0f)",
            tags: ["Animated Frame", "Neon Effect", "Profile VIP"], price: "66k - 200k", period: "by style",
            features: [
                "Eye-catching animated avatar frame decorations with glowing dynamic effects",
                "Cohesive personalized profile theme customized to your unique aesthetic",
                "Usable without an active Discord Nitro subscription across all platforms",
                "Delivered with high-resolution source graphics and guided setup assistance"
            ]
        },
        {
            id: 6, name: "Custom Discord Bot Dev", category: "bot", categoryLabel: "Dev Bot",
            categoryTag: "CUSTOM PROGRAMMING",
            description: "Bespoke bot programming: Auto payment integration, moderation, leveling & economy.",
            badge: "Custom Dev", badgeType: "green", accentColor: "#10b981", creator: "EliteForceVN",
            image: "assets/product-bot.png", gradient: "radial-gradient(circle at 50% 50%, #0d2619, #0a0a0f)",
            tags: ["Custom Code", "Auto Billing", "Host 24/7"], price: "80k - 350k", period: "by feature scope",
            features: [
                "Bespoke bot commands & features engineered strictly to your specification",
                "Automated payment gateway integration (QR Banking / Top-up cards) 24/7",
                "Interactive economy systems, leveling, automated voice channels & social alerts",
                "Full source code handover, lifetime bug warranty & 24/7 cloud hosting support"
            ]
        }
    ]
};

// ===== BẢNG GIÁ 6 DỊCH VỤ CHÍNH XÁC THEO YÊU CẦU =====
const pricingData = {
    vi: [
        {
            id: 1,
            name: "Tối Ưu Máy Tính",
            category: "Windows & Hardware",
            price: "200k - 250k",
            period: "trọn gói",
            badge: "Bán Chạy Nhất",
            badgeType: "gold",
            icon: "fas fa-rocket",
            accentColor: "#d4a843",
            features: [
                "Dọn sạch rác Windows & cache hệ thống ẩn",
                "Tối ưu CPU & GPU giảm delay tối đa",
                "Boost FPS mượt mà cho mọi tựa game hot",
                "Hỗ trợ tinh chỉnh trực tiếp qua Ultraview"
            ],
            btnText: "Đặt Dịch Vụ"
        },
        {
            id: 2,
            name: "Regedit Hỗ Trợ Kéo Tâm",
            category: "Mouse & Aim Precision",
            price: "70k - 800k",
            period: "tùy phiên bản",
            badge: "Hot",
            badgeType: "amber",
            icon: "fas fa-crosshairs",
            accentColor: "#f59e0b",
            features: [
                "Tinh chỉnh thông số chuột zero delay input",
                "Hỗ trợ ghìm tâm mượt mà, kéo đầu cực chuẩn",
                "Cấu hình Registry sạch, an toàn 100%",
                "Đầy đủ phân khúc từ Cơ Bản đến VIP"
            ],
            btnText: "Đặt Dịch Vụ"
        },
        {
            id: 3,
            name: "Cheat FreeFire",
            category: "Game Tactical Menu",
            price: "20k",
            period: "/ 1 Ngày",
            badge: "Siêu Tiết Kiệm",
            badgeType: "cyan",
            icon: "fas fa-gamepad",
            accentColor: "#06b6d4",
            features: [
                "Menu Aimbot chuẩn xác, tùy chỉnh góc FOV",
                "ESP hiển thị tên, máu & khoảng cách đối thủ",
                "Bypass bảo mật, anti-ban cập nhật liên tục",
                "Key bản quyền kích hoạt nhanh trong 1 phút"
            ],
            btnText: "Thuê Ngay"
        },
        {
            id: 4,
            name: "Setup Server Discord",
            category: "Community Architecture",
            price: "50k - 200k",
            period: "tùy quy mô",
            badge: "Chuyên Nghiệp",
            badgeType: "blue",
            icon: "fab fa-discord",
            accentColor: "#5865F2",
            features: [
                "Phân quyền Role & Channel quy củ, đẹp mắt",
                "Setup trọn bộ Bot bảo vệ, Ticket & Verify",
                "Thiết kế banner, avatar & icon room chuẩn VIP",
                "Tối ưu tự động hóa chào mừng & tương tác"
            ],
            btnText: "Đặt Dịch Vụ"
        },
        {
            id: 5,
            name: "Decor Khung Hiệu Ứng",
            category: "Discord Profile Aesthetics",
            price: "66k - 200k",
            period: "tùy mẫu mã",
            badge: "Thịnh Hành",
            badgeType: "pink",
            icon: "fas fa-wand-magic-sparkles",
            accentColor: "#ec4899",
            features: [
                "Khung avatar Discord animated lấp lánh độc đáo",
                "Hiệu ứng profile trang cá nhân cực kỳ nổi bật",
                "Bộ decoration tông màu đồng bộ theo gu riêng",
                "Bàn giao file và hướng dẫn gắn khung tức thì"
            ],
            btnText: "Đặt Dịch Vụ"
        },
        {
            id: 6,
            name: "Dev Bot Discord Riêng",
            category: "Custom Bot Programming",
            price: "80k - 350k",
            period: "tùy tính năng",
            badge: "Độc Quyền",
            badgeType: "green",
            icon: "fas fa-robot",
            accentColor: "#10b981",
            features: [
                "Lập trình tính năng bot độc quyền theo yêu cầu",
                "Hệ thống nạp thẻ tự động, quản trị tự động",
                "Tích hợp minigame, thông báo mạng xã hội",
                "Bảo hành code & hỗ trợ setup máy chủ 24/7"
            ],
            btnText: "Đặt Dịch Vụ"
        }
    ],
    en: [
        {
            id: 1,
            name: "PC System Optimizer",
            category: "Windows & Hardware",
            price: "200k - 250k",
            period: "package",
            badge: "Best Seller",
            badgeType: "gold",
            icon: "fas fa-rocket",
            accentColor: "#d4a843",
            features: [
                "Deep Windows cleanup & background services tune",
                "Zero-latency CPU/GPU input lag optimization",
                "Significant FPS boost across all competitive games",
                "Remote setup assistance via Ultraview"
            ],
            btnText: "Order Service"
        },
        {
            id: 2,
            name: "Aimlock Regedit Pro",
            category: "Mouse & Aim Precision",
            price: "70k - 800k",
            period: "by edition",
            badge: "Hot",
            badgeType: "amber",
            icon: "fas fa-crosshairs",
            accentColor: "#f59e0b",
            features: [
                "Fine-tuned mouse curves for zero input delay",
                "Smooth head-tracking recoil compensation",
                "100% safe registry configs with no bannable files",
                "Multiple editions from Starter to Ultra VIP"
            ],
            btnText: "Order Service"
        },
        {
            id: 3,
            name: "FreeFire Tactical Cheat",
            category: "Game Tactical Menu",
            price: "20k",
            period: "/ 1 Day",
            badge: "Daily Pass",
            badgeType: "cyan",
            icon: "fas fa-gamepad",
            accentColor: "#06b6d4",
            features: [
                "Smooth customizable FOV aimbot tracking",
                "ESP player radar, health bar & distance meter",
                "Real-time anti-ban bypass updates",
                "Instant license key delivery within 1 minute"
            ],
            btnText: "Rent Now"
        },
        {
            id: 4,
            name: "Discord Server Architecture",
            category: "Community Architecture",
            price: "50k - 200k",
            period: "by server size",
            badge: "Pro Build",
            badgeType: "blue",
            icon: "fab fa-discord",
            accentColor: "#5865F2",
            features: [
                "Complete roles hierarchy & neat channel structure",
                "Pre-configured security bots, tickets & verification",
                "Custom aesthetic banners, badges & room icons",
                "Automated welcome & interactive notifications"
            ],
            btnText: "Order Service"
        },
        {
            id: 5,
            name: "Profile Effect & Frames",
            category: "Discord Profile Aesthetics",
            price: "66k - 200k",
            period: "by style",
            badge: "Trending",
            badgeType: "pink",
            icon: "fas fa-wand-magic-sparkles",
            accentColor: "#ec4899",
            features: [
                "Animated glowing avatar frame decoration",
                "Striking profile background themes",
                "Color-coordinated aesthetic personal branding",
                "Instant delivery & step-by-step setup guide"
            ],
            btnText: "Order Service"
        },
        {
            id: 6,
            name: "Custom Discord Bot Dev",
            category: "Custom Bot Programming",
            price: "80k - 350k",
            period: "by feature scope",
            badge: "Custom Dev",
            badgeType: "green",
            icon: "fas fa-robot",
            accentColor: "#10b981",
            features: [
                "Bespoke bot commands tailored to your vision",
                "Automated top-up billing & server moderation",
                "Integrated minigames & social media webhooks",
                "Code warranty & 24/7 server hosting support"
            ],
            btnText: "Order Service"
        }
    ]
};

// ===== ĐỘI NGŨ THÀNH VIÊN THEO YÊU CẦU (CHỈ 3 NGƯỜI) =====
const teamMembersData = {
    vi: [
        {
            name: "Levis PC - Owner",
            roles: ["Tối Ưu", "Regedit"],
            avatar: "assets/avatar-levis.png",
            bg: "radial-gradient(circle at 50% 20%, rgba(212, 168, 67, 0.35), transparent 70%)",
            ringColor: "#d4a843",
            fb: "https://www.facebook.com/share/1Jwa848kPx/?mibextid=wwXIfr"
        },
        {
            name: "Deley Pc - Admin",
            roles: ["Dev", "Cheat", "Tối Ưu"],
            avatar: "assets/avatar-deley.png",
            bg: "radial-gradient(circle at 50% 20%, rgba(96, 165, 250, 0.35), transparent 70%)",
            ringColor: "#60a5fa",
            fb: "https://www.facebook.com/share/1E6eyDvwnv/?mibextid=wwXIfr"
        },
        {
            name: "Bảo Nam - Admin",
            roles: ["Decor Discord", "Nitro Boost"],
            avatar: "assets/avatar-baonam.png",
            bg: "radial-gradient(circle at 50% 20%, rgba(192, 132, 252, 0.35), transparent 70%)",
            ringColor: "#c084fc",
            fb: "https://www.facebook.com/share/1KcqVuARNL/?mibextid=wwXIfr"
        }
    ],
    en: [
        {
            name: "Levis PC - Owner",
            roles: ["PC Optimize", "Regedit"],
            avatar: "assets/avatar-levis.png",
            bg: "radial-gradient(circle at 50% 20%, rgba(212, 168, 67, 0.35), transparent 70%)",
            ringColor: "#d4a843",
            fb: "https://www.facebook.com/share/1Jwa848kPx/?mibextid=wwXIfr"
        },
        {
            name: "Deley Pc - Admin",
            roles: ["Dev", "Cheat", "PC Optimize"],
            avatar: "assets/avatar-deley.png",
            bg: "radial-gradient(circle at 50% 20%, rgba(96, 165, 250, 0.35), transparent 70%)",
            ringColor: "#60a5fa",
            fb: "https://www.facebook.com/share/1E6eyDvwnv/?mibextid=wwXIfr"
        },
        {
            name: "Bảo Nam - Admin",
            roles: ["Discord Decor", "Nitro Boost"],
            avatar: "assets/avatar-baonam.png",
            bg: "radial-gradient(circle at 50% 20%, rgba(192, 132, 252, 0.35), transparent 70%)",
            ringColor: "#c084fc",
            fb: "https://www.facebook.com/share/1KcqVuARNL/?mibextid=wwXIfr"
        }
    ]
};

// ===== DOM ELEMENTS =====
const loader = document.getElementById('loader');
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navCapsuleWrapper = document.querySelector('.nav-capsule-wrapper');
const productGrid = document.getElementById('product-grid');
const teamGrid = document.getElementById('team-grid');
const categoryTabs = document.getElementById('category-tabs');
const modal = document.getElementById('product-modal');
const modalClose = document.getElementById('modal-close');
const canvas = document.getElementById('particles-canvas');
const customCursor = document.getElementById('custom-cursor');
const typewriterEl = document.getElementById('typewriter-text');
const langSwitchBtn = document.getElementById('lang-switch');
const backToTopBtn = document.getElementById('back-to-top');

// ===== BRAND NEW "CYBER NEON WARP PORTAL" LOADING SEQUENCE =====
function initWarpLoader() {
    const loader = document.getElementById('loader');
    const percentEl = document.getElementById('loader-percent');
    const fillEl = document.getElementById('loader-bar-fill');
    const statusEl = document.getElementById('loader-status');

    if (!loader || !percentEl || !fillEl) return;

    const statusLogs = [
        "INITIALIZING QUANTUM PROTOCOL...",
        "CALIBRATING ZERO-DELAY MATRIX...",
        "SYNCING HARDWARE ACCELERATION...",
        "WARP READY — ACCESS GRANTED!"
    ];

    let currentPercent = 0;
    const targetPercent = 100;
    const startTime = performance.now();
    const duration = 1100; // 1.1s nhanh, lôi cuốn, không phải chờ đợi

    function updateLoader(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing tăng tốc mượt
        const eased = Math.pow(progress, 0.95);
        currentPercent = Math.min(Math.floor(eased * targetPercent), 100);

        percentEl.textContent = currentPercent;
        fillEl.style.width = `${currentPercent}%`;

        if (statusEl) {
            if (currentPercent < 30) statusEl.textContent = statusLogs[0];
            else if (currentPercent < 65) statusEl.textContent = statusLogs[1];
            else if (currentPercent < 95) statusEl.textContent = statusLogs[2];
            else statusEl.textContent = statusLogs[3];
        }

        if (progress < 1) {
            requestAnimationFrame(updateLoader);
        } else {
            // Reached 100% — Hyperspace Warp Jump into Homepage
            percentEl.textContent = "100";
            fillEl.style.width = "100%";
            if (statusEl) statusEl.textContent = statusLogs[3];

            setTimeout(() => {
                loader.classList.add('warp-exit');
                setTimeout(() => {
                    loader.classList.add('hidden');
                }, 400);
            }, 120);
        }
    }

    requestAnimationFrame(updateLoader);
}

// Bắt đầu chạy loading screen
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWarpLoader);
} else {
    initWarpLoader();
}

// ===== LANGUAGE SWITCHER HANDLER (ẢNH 2) =====
function setLanguage(lang) {
    currentLang = lang;
    const dict = i18n[lang];

    // Update all static i18n text
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    // Update Switch UI
    if (langSwitchBtn) {
        if (lang === 'en') {
            langSwitchBtn.classList.add('lang-en-active');
            langSwitchBtn.querySelector('.en-tag').classList.add('active');
            langSwitchBtn.querySelector('.vi-tag').classList.remove('active');
        } else {
            langSwitchBtn.classList.remove('lang-en-active');
            langSwitchBtn.querySelector('.vi-tag').classList.add('active');
            langSwitchBtn.querySelector('.en-tag').classList.remove('active');
        }
    }

    // Re-render cards in target language
    const currentActiveTab = document.querySelector('.tab-btn.active');
    const category = currentActiveTab ? currentActiveTab.dataset.category : 'all';
    renderProducts(category);
    renderPricing();
    renderTeam();
}

// Toggle on click
if (langSwitchBtn) {
    langSwitchBtn.addEventListener('click', () => {
        const nextLang = currentLang === 'vi' ? 'en' : 'vi';
        setLanguage(nextLang);
    });
}

// ===== TYPEWRITER ANIMATION (CHỮ CHẠY RA XONG CHẠY VÀO) =====
function initTypewriter() {
    const el = document.getElementById('typewriter-text');
    if (!el) return;

    const phrases = [
        "ELITEFORCEVN",
        "ELITEFORCE.VN",
        "ELITEFORCEVN"
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    // Reset initially so it starts empty and types out
    el.textContent = "";

    function typeStep() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            // Chạy thụt vào (xóa từng chữ)
            charIndex--;
            el.textContent = currentPhrase.substring(0, charIndex);
        } else {
            // Chạy phóng ra (gõ từng chữ)
            charIndex++;
            el.textContent = currentPhrase.substring(0, charIndex);
        }

        let speed = isDeleting ? 50 : 110;

        if (!isDeleting && charIndex === currentPhrase.length) {
            // Khi đã chạy ra hết chữ: Dừng lại 2 giây cho người xem đọc
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Khi đã chạy lùi hết chữ vào trong: Dừng 0.4s rồi chạy ra chữ tiếp
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            speed = 400;
        }

        setTimeout(typeStep, speed);
    }

    // Bắt đầu chạy ngay
    setTimeout(typeStep, 300);
}

// Chạy animation ngay khi DOM sẵn sàng
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTypewriter);
} else {
    initTypewriter();
}

// ===== CUSTOM GAMING ROTATING CURSOR =====
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let cursorX = mouseX;
let cursorY = mouseY;
let isFirstMove = true;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (isFirstMove) {
        cursorX = mouseX;
        cursorY = mouseY;
        isFirstMove = false;
        if (customCursor) customCursor.style.opacity = '1';
    }
});

document.addEventListener('mouseenter', () => {
    if (customCursor) customCursor.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
    if (customCursor) customCursor.style.opacity = '0';
});

function updateCursor() {
    cursorX += (mouseX - cursorX) * 0.35;
    cursorY += (mouseY - cursorY) * 0.35;

    if (customCursor) {
        customCursor.style.left = cursorX + 'px';
        customCursor.style.top = cursorY + 'px';
    }

    const cursorGlow = document.getElementById('cursor-glow');
    if (cursorGlow) {
        cursorGlow.style.left = mouseX + 'px';
        cursorGlow.style.top = mouseY + 'px';
    }

    requestAnimationFrame(updateCursor);
}
updateCursor();

// Cursor Hover Reactions
document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, .product-card, .member-card, .tab-btn, .lang-switch-toggle')) {
        if (customCursor) customCursor.classList.add('cursor-hover');
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.closest('a, button, .product-card, .member-card, .tab-btn, .lang-switch-toggle')) {
        if (customCursor) customCursor.classList.remove('cursor-hover');
    }
});

document.addEventListener('mousedown', () => {
    if (customCursor) customCursor.classList.add('cursor-click');
});

document.addEventListener('mouseup', () => {
    if (customCursor) customCursor.classList.remove('cursor-click');
});

// ===== PARTICLES BACKGROUND =====
function initParticles() {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 1.8 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.35;
            this.speedY = (Math.random() - 0.5) * 0.35;
            this.opacity = Math.random() * 0.35 + 0.1;
            this.color = Math.random() > 0.65 ? '212, 168, 67' : '255, 255, 255';
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
            ctx.fill();
        }
    }

    const count = Math.min(50, Math.floor(window.innerWidth / 24));
    for (let i = 0; i < count; i++) particles.push(new Particle());

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 110) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(212, 168, 67, ${0.05 * (1 - dist / 110)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }
    animate();
}
initParticles();

// ===== NAVBAR SCROLL BEHAVIOR & ACTIVE LINK =====
window.addEventListener('scroll', () => {
    if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
    }
    updateActiveNavLink();

    // Back to top button visibility (Ảnh 3)
    if (backToTopBtn) {
        backToTopBtn.classList.toggle('visible', window.scrollY > 300);
    }
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.capsule-link');
    let currentId = '';

    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 220) {
            currentId = sec.id;
        }
    });

    links.forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === `#${currentId}`);
    });
}

// Back to top click
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Mobile Menu Toggle
if (navToggle && navCapsuleWrapper) {
    navToggle.addEventListener('click', () => {
        const isActive = navCapsuleWrapper.classList.toggle('active');
        navToggle.classList.toggle('active', isActive);
    });

    document.querySelectorAll('.capsule-link').forEach(link => {
        link.addEventListener('click', () => {
            navCapsuleWrapper.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// Side Ambient FX Toggle (Bật/Tắt hiệu ứng hạt & ánh sáng)
const sideThemeBtn = document.getElementById('theme-toggle-side');
if (sideThemeBtn) {
    let ambientActive = true;
    sideThemeBtn.addEventListener('click', () => {
        ambientActive = !ambientActive;
        const ambientEls = document.querySelectorAll('.ambient-spotlights, #particles-canvas');
        ambientEls.forEach(el => {
            if (el) el.style.display = ambientActive ? '' : 'none';
        });
        sideThemeBtn.innerHTML = ambientActive ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        sideThemeBtn.style.color = ambientActive ? '#d4a843' : '#6b7280';
    });
}

// ===== RENDER PRODUCT CARDS (UI GIỐNG BẢNG GIÁ + 360 XOAY LIÊN TỤC + 4 GÓC TRẮNG) =====
function renderProducts(category = 'all') {
    if (!productGrid) return;

    const list = productsData[currentLang] || productsData.vi;
    const filtered = category === 'all'
        ? list
        : list.filter(p => p.category === category);

    productGrid.innerHTML = '';
    const btnLabel = (i18n[currentLang] && i18n[currentLang].card_contact_btn) || 'Liên Hệ Ngay';

    filtered.forEach((prod, index) => {
        const accent = prod.accentColor || '#d4a843';
        const badgeType = prod.badgeType || 'gold';
        const categoryTag = prod.categoryTag || 'GAMING SERVICE';

        const card = document.createElement('div');
        card.className = `product-card product-accent-${badgeType}`;
        card.style.animationDelay = `${index * 0.08}s`;
        card.onclick = () => openModal(prod);

        const visualHtml = prod.image
            ? `<div class="product-image-wrapper">
                    <div class="product-visual-halo" style="background: radial-gradient(circle, ${accent}44 0%, transparent 70%);"></div>
                    <img src="${prod.image}" alt="${prod.name}" class="product-showcase-img">
               </div>`
            : `<div class="product-icon-wrapper" style="--accent: ${accent}">
                    <i class="${prod.icon}"></i>
               </div>`;

        card.innerHTML = `
            <!-- 4 White Outer Corners on Hover -->
            <div class="card-corner corner-tl"></div>
            <div class="card-corner corner-tr"></div>
            <div class="card-corner corner-bl"></div>
            <div class="card-corner corner-br"></div>

            <!-- Top Ambient Glow in Service Accent Color -->
            <div class="product-ambient-glow" style="background: radial-gradient(circle at 50% 0%, ${accent}33, transparent 70%);"></div>

            <div class="product-card-top-header">
                <div class="pricing-badge-tag badge-${badgeType}">
                    <span>${prod.badge}</span>
                </div>
                <span class="product-cat-tag">${categoryTag}</span>
            </div>

            <!-- Center Visual with Continuous 360 Rotation -->
            <div class="product-visual-container">
                ${visualHtml}
            </div>

            <!-- Typography & Info like Pricing -->
            <div class="product-card-details">
                <h3 class="product-card-title">${prod.name}</h3>
                <p class="product-card-desc">${prod.description}</p>

                <!-- Mini tags pills -->
                <div class="product-tags-row">
                    ${prod.tags.map(t => `<span class="product-mini-tag" style="border-color: ${accent}40; color: ${accent}; background: ${accent}12;">${t}</span>`).join('')}
                </div>

                <div class="product-divider"></div>

                <!-- Custom Glowing Price Typography like Pricing -->
                <div class="product-price-section">
                    <div class="product-price-digits">
                        <span class="product-curr-symbol">VNĐ</span>
                        <span class="product-bold-price" style="--accent: ${accent}">${prod.price}</span>
                    </div>
                    <span class="product-period-sub">${prod.period || ''}</span>
                </div>

                <!-- Sleek Action Button -->
                <div class="product-btn-wrap">
                    <button class="product-action-btn" style="--accent: ${accent}" onclick="event.stopPropagation(); window.open('https://discord.gg/fsdqzcp5T', '_blank')">
                        <i class="fab fa-discord"></i>
                        <span>${btnLabel}</span>
                        <i class="fas fa-arrow-right btn-arrow-icon"></i>
                    </button>
                </div>
            </div>
        `;

        // 3D Tilt interaction
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.025, 1.025, 1.025)`;
            card.classList.add('is-hovered');

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            card.classList.remove('is-hovered');
        });

        productGrid.appendChild(card);
    });
}
renderProducts();

// ===== RENDER PRICING CARDS (BẢNG GIÁ 6 DỊCH VỤ - 3D TILT & 4 WHITE CORNERS) =====
function renderPricing() {
    const pricingGrid = document.getElementById('pricing-grid');
    if (!pricingGrid) return;
    pricingGrid.innerHTML = '';

    const list = pricingData[currentLang] || pricingData.vi;

    list.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = `pricing-card accent-${item.badgeType}`;
        card.style.animationDelay = `${index * 0.08}s`;

        card.innerHTML = `
            <!-- 4 White Outer Corners on Hover -->
            <div class="card-corner corner-tl"></div>
            <div class="card-corner corner-tr"></div>
            <div class="card-corner corner-bl"></div>
            <div class="card-corner corner-br"></div>

            <!-- Ambient Glow -->
            <div class="pricing-ambient-glow" style="background: radial-gradient(circle at 50% 0%, ${item.accentColor}33, transparent 70%);"></div>

            <div class="pricing-card-top">
                <div class="pricing-badge-tag badge-${item.badgeType}">
                    <span>${item.badge}</span>
                </div>
                <div class="pricing-icon-halo" style="--accent: ${item.accentColor}">
                    <i class="${item.icon}"></i>
                </div>
                <div class="pricing-cat-label">${item.category}</div>
                <h3 class="pricing-card-title">${item.name}</h3>
            </div>

            <!-- Big Glowing Custom Typography for Price -->
            <div class="pricing-price-block">
                <div class="price-figures">
                    <span class="price-currency-tag">VNĐ</span>
                    <span class="price-bold-amount" style="--accent: ${item.accentColor}">${item.price}</span>
                </div>
                <div class="price-period-tag">${item.period}</div>
            </div>

            <div class="pricing-card-line"></div>

            <ul class="pricing-feature-list">
                ${item.features.map(f => `
                    <li>
                        <i class="fas fa-check-circle" style="color: ${item.accentColor}; text-shadow: 0 0 10px ${item.accentColor};"></i>
                        <span>${f}</span>
                    </li>
                `).join('')}
            </ul>

            <div class="pricing-card-btn-wrap">
                <a href="https://discord.gg/fsdqzcp5T" target="_blank" class="pricing-order-btn" style="--accent: ${item.accentColor}">
                    <i class="fab fa-discord"></i>
                    <span>${item.btnText}</span>
                    <i class="fas fa-arrow-right btn-arrow-icon"></i>
                </a>
            </div>
        `;

        // 3D Tilt interaction for Pricing Cards
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.025, 1.025, 1.025)`;
            card.classList.add('is-hovered');

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            card.classList.remove('is-hovered');
        });

        pricingGrid.appendChild(card);
    });
}
renderPricing();

// ===== RENDER TEAM MEMBERS (PHẦN INFO CỦA TASO STUDIO - ẢNH 3) =====
function renderTeam() {
    if (!teamGrid) return;
    teamGrid.innerHTML = '';

    const list = teamMembersData[currentLang] || teamMembersData.vi;

    list.forEach((member, index) => {
        const card = document.createElement('div');
        card.className = 'member-card';
        card.style.animationDelay = `${index * 0.09}s`;
        card.setAttribute('title', `Bấm để truy cập Facebook của ${member.name}`);
        card.onclick = () => window.open(member.fb, '_blank', 'noopener,noreferrer');

        card.innerHTML = `
            <!-- 4 White Outer Corners on Hover -->
            <div class="card-corner corner-tl"></div>
            <div class="card-corner corner-tr"></div>
            <div class="card-corner corner-bl"></div>
            <div class="card-corner corner-br"></div>

            <div class="member-card-bg" style="background: ${member.bg}"></div>
            <div class="member-card-overlay"></div>

            <div class="member-header">
                <h3 class="member-name">${member.name}</h3>
            </div>

            <div class="member-avatar-wrap">
                <div class="avatar-ring" style="background: linear-gradient(135deg, ${member.ringColor}, transparent, #ffffff)"></div>
                <img src="${member.avatar}" alt="${member.name}" class="member-avatar-img">
                <div class="member-sparkle sparkle-1" style="background: ${member.ringColor}; box-shadow: 0 0 8px ${member.ringColor};"></div>
                <div class="member-sparkle sparkle-2"></div>
            </div>

            <div class="member-roles">
                ${member.roles.map(r => `<span class="role-pill">${r}</span>`).join('')}
            </div>

            <div class="member-social-wrap">
                <a href="${member.fb}" target="_blank" rel="noopener noreferrer" class="member-fb-btn" onclick="event.stopPropagation()">
                    <i class="fab fa-facebook-f"></i>
                    <span>Facebook Profile</span>
                    <i class="fas fa-arrow-up-right-from-square"></i>
                </a>
            </div>
        `;

        // 3D Tilt interaction for team cards
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -11;
            const rotateY = ((x - centerX) / centerX) * 11;

            card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.03, 1.03, 1.03)`;
            card.classList.add('is-hovered');

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            card.classList.remove('is-hovered');
        });

        teamGrid.appendChild(card);
    });
}
renderTeam();

// ===== CATEGORY TABS CLICK =====
if (categoryTabs) {
    categoryTabs.addEventListener('click', (e) => {
        const btn = e.target.closest('.tab-btn');
        if (!btn) return;
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProducts(btn.dataset.category);
    });
}

// ===== PRODUCT DETAIL MODAL (LUXURY 2-COLUMN CYBER DIALOG) =====
function openModal(prod) {
    const accent = prod.accentColor || '#d4a843';
    const badgeType = prod.badgeType || 'gold';
    const catTag = prod.categoryTag || 'GAMING SERVICE';

    const titleEl = document.getElementById('modal-title');
    const descEl = document.getElementById('modal-desc');
    const catEl = document.getElementById('modal-cat-tag');
    const badgesEl = document.getElementById('modal-badges');
    const stageGlow = document.getElementById('modal-stage-glow');
    const visualEl = document.getElementById('modal-visual');
    const creatorEl = document.getElementById('modal-creator');
    const categoryEl = document.getElementById('modal-category');
    const priceEl = document.getElementById('modal-price');
    const featuresListEl = document.getElementById('modal-features-list');
    const featuresHeadingEl = document.getElementById('modal-features-title');

    if (titleEl) titleEl.textContent = prod.name;
    if (descEl) descEl.textContent = prod.description;
    if (catEl) catEl.textContent = catTag;

    if (featuresHeadingEl && i18n[currentLang] && i18n[currentLang].modal_features_title) {
        featuresHeadingEl.textContent = i18n[currentLang].modal_features_title;
    }

    if (badgesEl) {
        badgesEl.innerHTML = `<span class="pricing-badge-tag badge-${badgeType}">${prod.badge}</span>`;
    }

    if (stageGlow) {
        stageGlow.style.background = `radial-gradient(circle at 50% 50%, ${accent}55 0%, transparent 70%)`;
    }

    const modalVisualHtml = prod.image
        ? `<div class="modal-product-image-wrap">
                <img src="${prod.image}" alt="${prod.name}" class="modal-showcase-img" id="modal-rot-img">
           </div>`
        : `<div class="modal-product-icon" id="modal-rot-img" style="--accent: ${accent}">
                <i class="${prod.icon}"></i>
           </div>`;

    if (visualEl) visualEl.innerHTML = modalVisualHtml;
    if (creatorEl) creatorEl.textContent = prod.creator || 'EliteForceVN';
    if (categoryEl) categoryEl.textContent = prod.categoryLabel || 'Chính Hãng';
    
    if (priceEl) {
        priceEl.innerHTML = `<span class="modal-price-val" style="--accent: ${accent}">${prod.price}</span> <span class="modal-price-unit">${prod.period || ''}</span>`;
    }

    // Cập nhật danh sách quyền lợi & cam kết riêng biệt theo từng sản phẩm
    if (featuresListEl) {
        if (prod.features && Array.isArray(prod.features) && prod.features.length > 0) {
            featuresListEl.innerHTML = prod.features.map(f => `
                <li><i class="fas fa-check-circle"></i> <span>${f}</span></li>
            `).join('');
        } else {
            featuresListEl.innerHTML = `
                <li><i class="fas fa-check-circle"></i> <span>Hỗ trợ cài đặt & tinh chỉnh trực tiếp qua Ultraview</span></li>
                <li><i class="fas fa-check-circle"></i> <span>Bảo hành chu đáo, hướng dẫn chi tiết trọn đời</span></li>
                <li><i class="fas fa-check-circle"></i> <span>An toàn 100%, bảo mật thông tin & thiết bị</span></li>
                <li><i class="fas fa-check-circle"></i> <span>Kỹ thuật viên hỗ trợ 24/7 trực tiếp trên Discord</span></li>
            `;
        }
    }

    if (modal) modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
}

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Modal Rotate Toggle
const spinToggleBtn = document.getElementById('modal-spin-toggle');
if (spinToggleBtn) {
    spinToggleBtn.addEventListener('click', () => {
        const rotatingEl = document.getElementById('modal-rot-img');
        if (rotatingEl) {
            const isPaused = rotatingEl.style.animationPlayState === 'paused';
            rotatingEl.style.animationPlayState = isPaused ? 'running' : 'paused';
            spinToggleBtn.classList.toggle('active', isPaused);
        }
    });
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
    const els = document.querySelectorAll(
        '.taso-section-header, .about-content, .about-visual, .member-card, .feature-item'
    );
    els.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    els.forEach(el => observer.observe(el));
}
initScrollReveal();

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Initial Setup
setLanguage('vi');
