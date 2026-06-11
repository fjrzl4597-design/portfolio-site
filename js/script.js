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

// ===== 고정 섹션 인디케이터 (라벨 페이드 교체 + 원 부드럽게 이동) =====
(function () {
    var indicator = document.getElementById("navIndicator");
    if (!indicator) return;
    var labelEl = document.getElementById("niLabel");
    var dots = indicator.querySelectorAll(".ni-dot");

    var sectionIds = ["about", "skills", "story", "projects", "contact"];
    var sections = sectionIds.map(function (id) {
        return document.getElementById(id);
    });
    var labels = sections.map(function (s) {
        return s ? s.getAttribute("data-label") : "";
    });

    var current = -1;

    function setActive(index) {
        if (index === current) return; // 같은 섹션이면 아무것도 안 함
        current = index;

        // 원 이동 (CSS transition으로 부드럽게)
        dots.forEach(function (d, i) {
            d.classList.toggle("active", i === index);
        });

        // 라벨 페이드 교체
        if (labelEl.textContent !== labels[index]) {
            labelEl.style.opacity = "0";
            setTimeout(function () {
                labelEl.textContent = labels[index];
                labelEl.style.opacity = "1";
            }, 200);
        }
    }

    // 원 클릭 → 해당 섹션으로 스크롤
    dots.forEach(function (dot) {
        dot.addEventListener("click", function () {
            var i = parseInt(dot.getAttribute("data-go"), 10);
            if (sections[i]) sections[i].scrollIntoView({ behavior: "smooth" });
        });
    });

    // 스크롤 위치로 현재 섹션 판별 (화면 40% 지점 기준)
    function onScroll() {
        var mid = window.scrollY + window.innerHeight * 0.4;
        var idx = 0;
        sections.forEach(function (sec, i) {
            if (sec && sec.offsetTop <= mid) idx = i;
        });

        // hero(맨 위)에선 인디케이터 숨김, about부터 나타남
        if (window.scrollY < (sections[0] ? sections[0].offsetTop - window.innerHeight * 0.5 : 0)) {
            indicator.style.opacity = "0";
        } else {
            indicator.style.opacity = "1";
        }

        setActive(idx);
    }

    indicator.style.transition = "opacity .4s ease";
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
})();
