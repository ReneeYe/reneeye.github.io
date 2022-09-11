AOS.init();

// Selected Research and Works Section

const hackathonsection = document.querySelector(".selected-section");
const mentor = [
  {
    title: "ConST: A New Method for Speech Translation",
    subtitle: "NAACL 2022 Main Conference Paper",
    image: "assets/images/about-page/const_logo.png",
    desp: 'How can we learn unified representations for spoken utterances and their written text? In our newest study, we propose <b>ConST</b>, a cross-modal contrastive learning method for end-to-end speech-to-text translation. ',
    hyperlink: "https://arxiv.org/abs/2205.02444"
  },
  {
    title: "NVIDA GTC 2022 Talk",
    subtitle: "Conference Speaker",
    image: "assets/images/about-page/gtc_talk.png",
    desp: 'I presented recent works on speech translation at NVIDIA GTC2022 on March 24 (UTC+8). The title is "Speech Translation Systems: From Industrial Applications to Advanced Research".',
    hyperlink: "https://events.rainfocus.com/widget/nvidia/gtcspring2022/sessioncatalog/session/16395675294020012FZb"
  },
  {
    title: "GigaST: A 10,000-hour Pseudo Speech Translation Corpus",
    subtitle: "Large-scale dataset",
    image: "assets/images/research-page/GigaST.png",
    desp: "Maybe one of the largest English-to-Chinese and English-to-German speech translation dataset.",
    hyperlink: "https://arxiv.org/abs/2204.03939"
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, hyperlink}) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${hyperlink}" target="_blank" class="blog-slider__button">Learn More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
