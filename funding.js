const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 28, // 슬라이드 간 간격
  slidesPerView: 2, // 한 화면에 표시되는 슬라이드 수
  loop: true, // 무한 루프
  autoplay: {
    delay: 6000, // 자동 재생 간격 (ms)
    disableOnInteraction: false, // 사용자 조작 후 자동 재생 유지
  },
  pagination: {
    el: ".swiper-pagination", // 페이지네이션
    clickable: true, // 클릭 가능
  },
  navigation: {
    nextEl: ".swiper-button-next", // 다음 버튼
    prevEl: ".swiper-button-prev", // 이전 버튼
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`; // 남은 시간 표시
    },
  },
});

var swiperMiddle = new Swiper(".mySwiper_middle", {
  spaceBetween: 28, // 슬라이드 간 간격
  slidesPerView: 1, // 한 화면에 표시되는 슬라이드 수
  loop: true, // 무한 루프
  autoplay: {
    delay: 6000, // 자동 재생 간격 (ms)
    disableOnInteraction: false, // 사용자 조작 후 자동 재생 유지
  },
});