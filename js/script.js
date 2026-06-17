// 메뉴 클릭 시 부드러운 스크롤 (같은 페이지 앵커만)
document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
        var target = document.querySelector(a.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// ===== 프로젝트 카드 클릭 → 상세 페이지로 이동 =====
(function () {
    var cards = document.querySelectorAll(".ux-parent");
    cards.forEach(function (card) {
        // 카드 안 OPEN 링크의 href(project.html?id=0X)를 카드 전체 클릭에도 적용
        var link = card.querySelector(".ux-open");
        if (!link) return;
        var href = link.getAttribute("href");

        card.addEventListener("click", function () {
            window.location.href = href;
        });
        // 키보드 접근성: Enter/Space로도 이동
        card.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                window.location.href = href;
            }
        });
    });
})();

// ===== 섹션 인디케이터 (sticky, 스크롤 따라 원 동기화 + 클릭 이동) =====
(function () {
    var sectionIds = ["about", "skills", "story", "projects", "contact"];
    var sections = sectionIds.map(function (id) {
        return document.getElementById(id);
    });
    var allDotGroups = document.querySelectorAll(".sec-dots");

    // 모든 섹션의 원을 현재 인덱스에 맞춰 동기화
    function setActive(index) {
        allDotGroups.forEach(function (group) {
            group.querySelectorAll(".sec-dot").forEach(function (dot, i) {
                dot.classList.toggle("active", i === index);
            });
        });
    }

    // 원 클릭 → 해당 섹션으로 스크롤
    allDotGroups.forEach(function (group) {
        group.querySelectorAll(".sec-dot").forEach(function (dot) {
            dot.addEventListener("click", function () {
                var i = parseInt(dot.getAttribute("data-go"), 10);
                if (sections[i]) sections[i].scrollIntoView({ behavior: "smooth" });
            });
        });
    });

    // 스크롤 위치로 현재 섹션 판별
    function onScroll() {
        var mid = window.scrollY + window.innerHeight * 0.4;
        var idx = 0;
        sections.forEach(function (sec, i) {
            if (sec && sec.offsetTop <= mid) idx = i;
        });
        setActive(idx);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
})();

// ===== 프로젝트 Swiper 슬라이드 =====
(function () {
    function initSwiper() {
        if (typeof Swiper === "undefined") {
            setTimeout(initSwiper, 100);
            return;
        }
        var wrap = document.querySelector(".projects-swiper");
        var el = wrap ? wrap.querySelector(".swiper") : null;
        if (!el) return;
        new Swiper(el, {
            slidesPerView: 1,
            spaceBetween: 24,
            slidesPerGroup: 1,
            centeredSlides: false,
            loop: false,
            grabCursor: true,
            watchOverflow: true,
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: wrap.querySelector(".swiper-button-next"),
                prevEl: wrap.querySelector(".swiper-button-prev"),
            },
            pagination: {
                el: wrap.querySelector(".swiper-pagination"),
                clickable: true,
            },
            breakpoints: {
                700: { slidesPerView: 1.5, spaceBetween: 24 },
                900: { slidesPerView: 2, spaceBetween: 28 },
            },
        });
    }
    // Swiper 번들이 로드될 때까지 확실히 대기
    window.addEventListener("load", initSwiper);
    if (document.readyState === "complete") initSwiper();
})();
