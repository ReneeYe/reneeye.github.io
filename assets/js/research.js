/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "GigaST: A 10,000-hour Pseudo Speech Translation Corpus",
    authors: "<b>Rong Ye</b>*, Chengqi Zhao*, Tom Ko, Chutong Meng, Tao Wang, Mingxuan Wang, Jun Cao",
    conferences: "arxiv , 2022",
    image: "assets/images/research-page/GigaST.png",
    briefIntro: "We expand the GigaSpeech ASR dataset into a super-large speech translation dataset, including training and testing sets.",
    pdfLink: "https://arxiv.org/pdf/2204.03939.pdf",
    bibFile: "assets/bibs/ye2022gigast.bib", 
    code: "https://github.com/bytedance/neurst/tree/master/datasets/GigaST",
    poster: "",
    video: "",
    slides: "",
    project: "https://st-benchmark.github.io/resources/GigaST",
  },


  {
    title: "Cross-modal Contrastive Learning for Speech Translation",
    authors: "<b>Rong Ye</b>, Mingxuan Wang and Lei Li",
    conferences: "NAACL-HLT , 2022",
    image: "assets/images/research-page/ConST.png",
    briefIntro: "ConST is based on contrastive learning, which closes the representation gap of audio and text modalities.",
    pdfLink: "https://arxiv.org/pdf/2205.02444.pdf",
    bibFile: "assets/bibs/ye2022cross.bib", 
    code: "https://github.com/ReneeYe/ConST",
    poster: "",
    video: "",
    slides: "assets/slides/ConST-NAACL2022.pdf",
    project: "",
  },

  {
    title: "STEMM: Self-learning with Speech-text Manifold Mixup for Speech Translation",
    authors: "Qingkai Fang, <b>Rong Ye</b>, Lei Li, Yang Feng, Mingxuan Wang",
    conferences: "ACL , 2022",
    image: "assets/images/research-page/STEMM.png",
    briefIntro: 'STEMM utilizes "Mixup" idea to close the word-level representations gap between the text and speech modalities.',
    pdfLink: "https://arxiv.org/pdf/2203.10426.pdf",
    bibFile: "assets/bibs/fang2022stemm.bib", 
    code: "https://github.com/ictnlp/STEMM",
    poster: "",
    video: "",
    slides: "",
    project: "",
  },

  {
    title: "End-to-end Speech Translation via Cross-modal Progressive Training",
    authors: "<b>Rong Ye</b>, Mingxuan Wang, Lei Li",
    conferences: "InterSpeech , 2021",
    image: "assets/images/research-page/XSTNet.png",
    briefIntro: 'Simple framework! Awesome Performance! XSTNet provides you with a powerful baseline model for speech translation!',
    pdfLink: "https://arxiv.org/pdf/2104.10380.pdf",
    bibFile: "assets/bibs/ye2021end.bib", 
    code: "https://github.com/ReneeYe/XSTNet",
    poster: "",
    video: "",
    slides: "assets/slides/XSTNet-Slides.pdf",
    project: "assets/projects/XSTNet/index.html",
  },


  {
    title: "The Volctrans Neural Speech Translation System for IWSLT 2021",
    authors: "Chengqi Zhao, Zhicheng Liu, Jian Tong, Tao Wang, Mingxuan Wang, <b>Rong Ye</b>, Qianqian Dong, Jun Cao, Lei Li",
    conferences: "IWSLT , 2021",
    image: "assets/images/research-page/IWSLT21.png",
    briefIntro: "ByteDance Volctrans' practice at IWSLT contest 2021.",
    pdfLink: "https://arxiv.org/pdf/2105.07319.pdf",
    bibFile: "assets/bibs/zhao2021volctrans.bib", 
    code: "https://github.com/bytedance/neurst/tree/master/examples/iwslt21",
    poster: "",
    video: "",
    slides: "",
    project: "",
  },

  {
    title: "NeurST: Neural speech translation toolkit",
    authors: "Chengqi Zhao, Mingxuan Wang, Qianqian Dong, <b>Rong Ye</b>, Lei Li",
    conferences: "ACL demo, 2021",
    image: "assets/images/research-page/NeurST.png",
    briefIntro: "NeurST: to facilitate NLP researchers to get started on end-to-end speech translation (ST) and build neural machine translation (NMT) models.",
    pdfLink: "https://arxiv.org/pdf/2012.10018.pdf",
    bibFile: "assets/bibs/zhao2021neurst.bib", 
    code: "https://github.com/bytedance/neurst",
    poster: "",
    video: "",
    slides: "",
    project: "https://st-benchmark.github.io/",
  },

  {
    title: "Listen, understand and translate: Triple supervision decouples end-to-end speech-to-text translation",
    authors: "Qianqian Dong, <b>Rong Ye</b>, Mingxuan Wang, Hao Zhou, Shuang Xu, Bo Xu, Lei Li",
    conferences: "AAAI, 2021",
    image: "assets/images/research-page/LUT.png",
    briefIntro: "<b>L</b>isten, <b>U</b>nderstand, <b>T</b>ranslate! Let's make end-to-end speech translation possible!",
    pdfLink: "https://arxiv.org/pdf/2009.09704.pdf",
    bibFile: "assets/bibs/dong2021listen.bib", 
    code: "https://github.com/dqqcasia/st",
    poster: "assets/slides/LUT-poster.pdf",
    video: "",
    slides: "",
    project: "https://dqqcasia.github.io/projects/LUT",
  },

  {
    title: "Variational template machine for data-to-text generation",
    authors: "<b>Rong Ye</b>, Wenxian Shi, Hao Zhou, Zhongyu Wei, Lei Li",
    conferences: "ICLR, 2021",
    image: "assets/images/research-page/VTM.png",
    briefIntro: "Can you describe as diverse sentences as possible from a single table? VTM helps you!",
    pdfLink: "https://arxiv.org/pdf/2002.01127.pdf",
    bibFile: "assets/bibs/ye2020variational.bib", 
    code: "https://github.com/ReneeYe/VariationalTemplateMachine",
    poster: "",
    video: "",
    slides: "",
    project: "",
  },

];

AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      briefIntro,
      pdfLink,
      bibFile,
      code,
      poster,
      video,
      slides,
      project,
    }) =>
      {
        output += `
            <tr> 
              <td class="imgCol"><img src="${image}" class="rImg"></td>
              <td class = "researchTitleName">
                <a href="${pdfLink}" class="paperTitle"> ${title} </a> 
                <div class = "authors"> ${authors} </div> 
                <div class="rConferences"> ${conferences} </div>
                <br><div class="intro"> ${briefIntro}</div><br>
                <div>
                  <a class="btn btn-outline-success btn-page-header btn-sm" href="${pdfLink}" target="_blank" rel="noopener">
                  PDF
                  </a>
                  <a class="btn btn-outline-primary btn-page-header btn-sm" href="${bibFile}" target="_blank" rel="noopener">
                  Cite
                  </a>
                  `;

          if (code != "" && code != null && code != undefined){
            output += `
            <a class="btn btn-outline-warning btn-page-header btn-sm" href="${code}" target="_blank" rel="noopener">
            Code
            </a>`
          };

          if (poster != "" && poster != null && poster != undefined){
            output += `
            <a class="btn btn-outline-danger btn-page-header btn-sm" href="${poster}" target="_blank" rel="noopener">
            Poster
            </a>`
          };

          if (video != "" && video != null && video != undefined){
            output += `
            <a class="btn btn-outline-danger btn-page-header btn-sm" href="${video}" target="_blank" rel="noopener">
            Video
            </a>`
          };

          if (slides != "" && slides != null && slides != undefined){
            output += `
            <a class="btn btn-outline-danger btn-page-header btn-sm" href="${slides}" target="_blank" rel="noopener">
            Slides
            </a>`
          };

          if (project != "" && project != null && project != undefined){
            output += `
            <a class="btn btn-outline-secondary btn-page-header btn-sm" href="${project}" target="_blank" rel="noopener">
            Project
            </a>`
          };
          
          output += `
                </div>
              </td>
            </tr>`;
          }
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
