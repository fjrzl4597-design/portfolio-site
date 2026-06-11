// ===== 프로젝트 데이터 =====
// 여기 내용만 고치면 상세 페이지가 바뀝니다. 디자인은 project.html / style.css에서.
// video: 유튜브 ID만 (youtube.com/watch?v=XXXX 의 XXXX 부분). 영상 없으면 "" 로 두세요.
// images: 결과물 이미지 경로 배열. images/work01-1.jpg 처럼.

const PROJECTS = {
    "01": {
        title: "Papago Plus Infographic",
        category: "MOBILITY / UI·UX",
        role: "기획 · 디자인 · 모션",
        tools: "Figma, After Effects, Illustrator",
        period: "2025.03 – 2025.04",
        video: "ScMzIvxBSi4", // 더미 영상 ID. 실제 ID로 교체
        summary: "앱의 핵심 기능을 한눈에 보여주는 광고용 인포그래픽.",

        // 네 기획서의 6단계
        background:
            "파파고 플러스의 신규 기능이 사용자에게 충분히 전달되지 않는 상황이었습니다. 기능은 많지만 무엇이 좋은지 직관적으로 와닿지 않는 점이 문제였습니다.",
        problem:
            "텍스트 설명 위주의 기존 안내는 끝까지 읽히지 않았습니다. 짧은 시간 안에 핵심 가치를 전달할 시각적 장치가 필요했습니다.",
        strategy:
            "기능을 나열하는 대신 '사용 상황'을 중심으로 재구성했습니다. 하나의 흐름으로 읽히도록 정보 위계를 잡고, 모션으로 시선을 유도했습니다.",
        process:
            "리서치 → 정보 구조 정리 → 와이어프레임 → 스타일 프레임 → 모션 타이밍 조정 순으로 진행했습니다. 색과 여백을 단계적으로 덜어내며 핵심만 남겼습니다.",
        result: "복잡한 기능이 15초 안에 이해되는 인포그래픽으로 정리되었습니다. 핵심 메시지가 먼저 읽히고, 부가 정보는 자연스럽게 뒤따르도록 구성했습니다.",
        reflection:
            "정보를 '더하는' 것보다 '덜어내는' 결정이 더 어렵고 중요하다는 걸 배웠습니다. 다음엔 모션 타이밍을 더 일찍 테스트하고 싶습니다.",

        images: [], // 예: ["images/work01-1.jpg", "images/work01-2.jpg"]
    },

    // ↓ 나머지는 더미. 위 01번 형식 그대로 채우면 됩니다.
    "02": {
        title: "Project Title 02",
        category: "Motion Graphic",
        role: "디자인",
        tools: "After Effects",
        period: "2025",
        video: "ScMzIvxBSi4",
        summary: "한 줄 요약이 들어가는 자리입니다.",
        background: "내용을 채워주세요.",
        problem: "내용을 채워주세요.",
        strategy: "내용을 채워주세요.",
        process: "내용을 채워주세요.",
        result: "내용을 채워주세요.",
        reflection: "내용을 채워주세요.",
        images: [],
    },
    "03": {
        title: "Project Title 03",
        category: "UI Design",
        role: "디자인",
        tools: "Figma",
        period: "2025",
        video: "ScMzIvxBSi4",
        summary: "한 줄 요약이 들어가는 자리입니다.",
        background: "내용을 채워주세요.",
        problem: "내용을 채워주세요.",
        strategy: "내용을 채워주세요.",
        process: "내용을 채워주세요.",
        result: "내용을 채워주세요.",
        reflection: "내용을 채워주세요.",
        images: [],
    },
    "04": {
        title: "Project Title 04",
        category: "Graphic Design",
        role: "디자인",
        tools: "Illustrator",
        period: "2025",
        video: "ScMzIvxBSi4",
        summary: "한 줄 요약이 들어가는 자리입니다.",
        background: "내용을 채워주세요.",
        problem: "내용을 채워주세요.",
        strategy: "내용을 채워주세요.",
        process: "내용을 채워주세요.",
        result: "내용을 채워주세요.",
        reflection: "내용을 채워주세요.",
        images: [],
    },
    "05": {
        title: "Project Title 05",
        category: "Motion Graphic",
        role: "디자인",
        tools: "After Effects",
        period: "2025",
        video: "ScMzIvxBSi4",
        summary: "한 줄 요약이 들어가는 자리입니다.",
        background: "내용을 채워주세요.",
        problem: "내용을 채워주세요.",
        strategy: "내용을 채워주세요.",
        process: "내용을 채워주세요.",
        result: "내용을 채워주세요.",
        reflection: "내용을 채워주세요.",
        images: [],
    },
    "06": {
        title: "Project Title 06",
        category: "UI Design",
        role: "디자인",
        tools: "Figma",
        period: "2025",
        video: "ScMzIvxBSi4",
        summary: "한 줄 요약이 들어가는 자리입니다.",
        background: "내용을 채워주세요.",
        problem: "내용을 채워주세요.",
        strategy: "내용을 채워주세요.",
        process: "내용을 채워주세요.",
        result: "내용을 채워주세요.",
        reflection: "내용을 채워주세요.",
        images: [],
    },
};
