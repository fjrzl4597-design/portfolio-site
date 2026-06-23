// ===== 상세 페이지 채우기 =====
(function () {
    // 1) URL에서 ?id=01 읽기 (없으면 01)
    var params = new URLSearchParams(window.location.search);
    var id = "03"; // 미리보기 고정
    // 2) 데이터 가져오기 (없는 번호면 01로 폴백)
    var data = typeof PROJECTS !== "undefined" && PROJECTS[id] ? PROJECTS[id] : PROJECTS["01"];
    if (!data) return;

    // 3) data-field 요소들 채우기
    function setField(name, value) {
        document.querySelectorAll('[data-field="' + name + '"]').forEach(function (el) {
            if (el.tagName === "IFRAME") {
                // 영상: ID 있으면 src 채우고, 없으면 영상 영역 숨김
                var wrap = document.querySelector("[data-video-wrap]");
                if (value) {
                    el.src = "https://www.youtube.com/embed/" + value + "?rel=0";
                } else if (wrap) {
                    wrap.style.display = "none";
                }
            } else {
                el.textContent = value || "—";
            }
        });
    }
    setField("num", "PROJECT " + id);
    setField("title", data.title);
    setField("summary", data.summary);
    setField("video", data.video);
    setField("role", data.role);
    setField("tools", data.tools);
    setField("period", data.period);
    setField("category", data.category);
    setField("background", data.background);
    setField("problem", data.problem);
    setField("strategy", data.strategy);
    setField("process", data.process);
    setField("result", data.result);
    setField("reflection", data.reflection);
    // 4) 탭 제목도 바꿔주기
    document.title = data.title + " — LEE JI YEON";
    // 5) 결과물 이미지 갤러리 (있을 때만)
    var gallery = document.querySelector("[data-gallery]");
    if (gallery && data.images && data.images.length) {
        gallery.hidden = false;
        data.images.forEach(function (src) {
            var img = document.createElement("img");
            img.src = src;
            img.alt = data.title + " 결과 이미지";
            img.loading = "lazy";
            gallery.appendChild(img);
        });
    }
})();
