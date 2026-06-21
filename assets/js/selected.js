AOS.init();

// Selected Research and Works Section

const hackathonsection = document.querySelector(".selected-section");
const mentor = [
  {
    title: "Multi-agent KTO: A Werewolf-Playing AI",
    subtitle: "NeurIPS 2025",
    image: "assets/images/research-page/werewolf_kto.png",
    desp: "We trained a language agent that plays the social deduction game 🧛‍♀️ Werewolf as skillfully as humans — reaching a 61% win rate and outperforming GPT-4o and two-stage RL agents.",
    hyperlink: "MaKTO.html"
  },
  {
    title: "Seed LiveInterpret 2.0",
    subtitle: "Simultaneous Speech-to-Speech Translation · 2025",
    image: "assets/images/research-page/seed-liveinterpret.png",
    desp: "An end-to-end simultaneous interpretation system with ~3s latency and real-time voice cloning, reaching quality close to professional human interpreters.",
    hyperlink: "https://arxiv.org/abs/2507.17527"
  },
  {
    title: "Seed-Prover",
    subtitle: "Automated Theorem Proving · 2025",
    image: "assets/images/research-page/seed-prover.png",
    desp: "Solving formal math problems through problem decomposition and iterative reflection.",
    hyperlink: "https://arxiv.org/abs/2507.15225"
  },
  {
    title: "FinTeam",
    subtitle: "NLPCC 2025 · Outstanding Paper Award",
    image: "assets/images/research-page/FinTeam.png",
    desp: "A multi-agent collaborative system where LLM agents work like an investment-research team across macro, industry, and company analysis.",
    hyperlink: "https://arxiv.org/abs/2507.10448"
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
