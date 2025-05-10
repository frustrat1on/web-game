// 기본 링크 막기 (단, explore-btn은 예외)
$(document).on("click", 'a[href="#"]', function (e) {
    if (!$(this).hasClass("explore-btn")) {
        e.preventDefault();
    }
});

// Explore 버튼 스크롤 이동
$(document).on("click", '.explore-btn', function (e) {
    e.preventDefault();

    const target = $("#section1");
    if (target.length) {
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 800);
    }
});

// 스크롤 또는 리사이즈 시 동작
$(window).on("scroll resize", function () {
    let scrollPos = $(document).scrollTop();
    fix();
    fixHeader();
    fixList();

    // approach 영역에 있을 때만 텍스트 보이기
    function fix() {
        const $fixText = $(".fix .text");
        const $approach = $("section.approach");
        const approachTop = $approach.offset().top;
        const approachHeight = $approach.outerHeight();

        if (scrollPos >= approachTop && scrollPos <= approachTop + approachHeight - 300) {
            $fixText.addClass("on");
        } else {
            $fixText.removeClass("on");
        }
    }

    // 헤더 스타일 변경
    function fixHeader() {
        if (scrollPos > 80) {
            $("header").addClass('on');
        } else {
            $('header').removeClass('on');
        }
    }

    // 이미지에 따라 .on 클래스 붙이기
    function fixList() {
        const $list = $('section.approach .inner .list li a');
        $list.removeClass('on');

        const scrollPos = $(window).scrollTop();
        const offsets = [];

        $list.each(function () {
            offsets.push($(this).offset().top - 300); // 약간 여유 줌
        });

        if (scrollPos >= offsets[0] && scrollPos < offsets[1]) {
            $list.eq(0).addClass('on');
        } else if (scrollPos >= offsets[1] && scrollPos < offsets[2]) {
            $list.eq(1).addClass('on');
        } else if (scrollPos >= offsets[2]) {
            $list.eq(2).addClass('on');
        }
    }
});

// 페이지 로드 후 scrolla 플러그인, 메뉴 버튼 이벤트
$(function () {
    $('.animate').scrolla({
        mobile: true,
        once: false
    });

    $('header .gnbBtn').on('click', function () {
        $('header nav.gnb').removeClass('on');
    });

    $('.contents').on('click', function () {
        $('header nav.gnb').removeClass('on');
    });
});
