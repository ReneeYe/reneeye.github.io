/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Seed LiveInterpret 2.0: End-to-end Simultaneous Speech-to-speech Translation with Your Voice",
    authors: "ByteDance Seed Team",
    conferences: "Technical Report, 2025",
    image: "assets/images/research-page/seed-liveinterpret.png",
    briefIntro: "An end-to-end simultaneous speech-to-speech translation model that delivers high-fidelity, ultra-low-latency (~3s) interpretation with real-time voice cloning, reaching quality close to human interpreters.",
    pdfLink: "https://arxiv.org/pdf/2507.17527",
    bibFile: "assets/bibs/seed2025liveinterpret.bib",
    code: "",
    poster: "",
    video: "",
    slides: "",
    project: "https://seed.bytedance.com/en/seed_liveinterpret",
  },
  {
    title: "Solving Formal Math Problems by Decomposition and Iterative Reflection (Seed-Prover)",
    authors: "ByteDance Seed Team",
    conferences: "Technical Report, 2025",
    image: "assets/images/research-page/seed-prover.png",
    briefIntro: "Seed-Prover tackles automated theorem proving by decomposing formal math problems and refining proofs through iterative reflection.",
    pdfLink: "https://arxiv.org/pdf/2507.15225",
    bibFile: "assets/bibs/seed2025seedprover.bib",
    code: "",
    poster: "",
    video: "",
    slides: "",
    project: "",
  },
  {
    title: "FinTeam: A Multi-agent Collaborative Intelligence System for Comprehensive Financial Scenarios",
    authors: "Yingqian Wu, Qiushi Wang, Zefei Long, <b>Rong Ye</b>, Zhongtian Lu, Xianyin Zhang, Bingxuan Li, Wei Chen, Liwen Zhang, Zhongyu Wei",
    conferences: "NLPCC, 2025 (Outstanding Paper Award)",
    image: "assets/images/research-page/FinTeam.png",
    briefIntro: "FinTeam is a financial multi-agent collaborative system with four LLM agents (document analyzer, analyst, accountant, consultant) that work like an investment-research team across macro, industry, and company analysis.",
    pdfLink: "https://arxiv.org/pdf/2507.10448",
    bibFile: "assets/bibs/wu2025finteam.bib",
    code: "https://github.com/FudanDISC/DISC-FinLLM",
    poster: "",
    video: "",
    slides: "",
    project: "",
  },
  {
    title: "Multi-agent KTO: Enhancing Strategic Interactions of Large Language Model in Language Game",
    authors: "<b>Rong Ye</b>, Yongxin Zhang, Yikai Zhang, Haoyu Kuang, Zhongyu Wei, Peng Sun",
    conferences: "NeurIPS, 2025",
    image: "assets/images/research-page/werewolf_kto.png",
    briefIntro: "We propose Multi-agent KTO, a language agent that learns Werewolf (a social deduction game, also known as Mafia), through direct interaction rather than separated stages. MaKTO achieves human-comparable performance with 61% win rate, outperforming both GPT-4o and two-stage RL agents.",
    pdfLink: "https://arxiv.org/pdf/2501.14225.pdf",
    bibFile: "assets/bibs/ye2025makto.bib",
    code: "https://github.com/ReneeYe/MaKTO-Werewolf",
    poster: "",
    video: "",
    slides: "",
    project: "MaKTO.html"
  },
  {
    title: "Agentsense: Benchmarking social intelligence of language agents through interactive scenarios",
    authors: "Xinyi Mou, Jingcong Liang, Jiayu Lin, Xinnong Zhang, Xiawei Liu, Shiyue Yang, <b>Rong Ye</b>, Lei Chen, Haoyu Kuang, Xuanjing Huang, Zhongyu Wei",
    conferences: "NAACL, 2024",
    image: "assets/images/research-page/Agentsense.png",
    briefIntro: "Drawing on Dramaturgical Theory, <b>AgentSense</b> employs a bottom-up approach to create 1,225 diverse social scenarios constructed from extensive scripts. We evaluate LLM-driven agents through multi-turn interactions, emphasizing both goal completion and implicit reasoning.",
    pdfLink: "https://arxiv.org/pdf/2410.19346.pdf",
    bibFile: "assets/bibs/mou2024agentsense.bib",
    code: "https://github.com/ljcleo/agent_sense",
    poster: "",
    video: "",
    slides: "",
    project: ""
  },
  {
    title: "Debatrix: Multi-dimensional debate judge with iterative chronological analysis based on llm",
    authors: "Jingcong Liang, <b>Rong Ye</b>, Meng Han, Ruofei Lai, Xinyu Zhang, Xuanjing Huang, Zhongyu Wei",
    conferences: "EMNLP, 2024",
    image: "assets/images/research-page/Debatrix.png",
    briefIntro: "How can we construct an automated debate judge to evaluate an extensive, vibrant, multi-turn debate? We introduce Debatrix, which makes the analysis and assessment of multi-turn debates more aligned with majority preferences.",
    pdfLink: "https://arxiv.org/pdf/2403.08010.pdf",
    bibFile: "assets/bibs/liang2024debatrix.bib",
    code: "https://github.com/ljcleo/debatrix",
    poster: "",
    video: "https://ljcleo.github.io/debatrix/static/video/dart.webm",
    slides: "",
    project: "https://ljcleo.github.io/debatrix/"
  },
  {
    title: "Put your money where your mouth is: Evaluating strategic planning and execution of llm agents in an auction arena",
    authors: "Jiangjie Chen, Siyu Yuan, <b>Rong Ye</b>, Bodhisattwa Prasad Majumder, Kyle Richardson",
    conferences: "NeurIPS Workshop on Open-World Agents, 2024",
    image: "assets/images/research-page/AuctionArena.jpg",
    briefIntro: "Welcome to the battleground where AI test their mettle in an environment pulsating with strategy, risk, and competition - the Auction Arena!",
    pdfLink: "https://arxiv.org/pdf/2310.05746.pdf",
    bibFile: "assets/bibs/chen2024put.bib",
    code: "https://github.com/jiangjiechen/auction-arena",
    poster: "",
    video: "",
    slides: "",
    project: "https://auction-arena.github.io/"
  },
  {
    title: "Argue with me tersely: Towards sentence-level counter-argument generation",
    authors: "Jiayu Lin, <b>Rong Ye</b>, Meng Han, Qi Zhang, Ruofei Lai, Xinyu Zhang, Zhao Cao, Xuanjing Huang, Zhongyu Wei",
    conferences: "EMNLP, 2023",
    image: "assets/images/research-page/ArgTerse.png",
    briefIntro: "We present the <b>ArgTersely</b> benchmark for sentence-level counter-argument generation. We also propose Arg-LlaMA as a baseline model. For better evaluation, we trained a BERT-based evaluator Arg-Judge with human preference data.",
    pdfLink: "https://arxiv.org/pdf/2312.13608.pdf",
    bibFile: "assets/bibs/lin2023argue.bib",
    code: "https://github.com/amazingljy1206/ArgTersely",
    poster: "",
    video: "",
    slides: "",
    project: "",
  },
  {
    title: "Hi-ArG: Exploring the integration of hierarchical argumentation graphs in language pretraining",
    authors: "Jingcong Liang, <b>Rong Ye</b>, Meng Han, Qi Zhang, Ruofei Lai, Xinyu Zhang, Zhao Cao, Xuanjing Huang, Zhongyu Wei",
    conferences: "EMNLP, 2023",
    image: "assets/images/research-page/hiarg.png",
    briefIntro: "We propose the Hi-ArG to organize arguments. We introduce two approaches to exploit Hi-ArG, 1) text-graph multi-modal model GreaseArG and 2) pre-training model with graph information.",
    pdfLink: "https://arxiv.org/pdf/2312.00874.pdf",
    bibFile: "assets/bibs/liang2023hiarg.bib",
    code: "https://github.com/ljcleo/Hi-ArG",
    poster: "",
    video: "",
    slides: "",
    project: "",
  },
  {
    title: "Speech translation with large language models: An industrial practice",
    authors: "Zhichao Huang, <b>Rong Ye</b>, Tom Ko, Qianqian Dong, Shanbo Cheng, Mingxuan Wang, Hang Li",
    conferences: "Technical Report, 2023",
    image: "assets/images/research-page/llm-st.png",
    briefIntro: "We integrate LLM with a speech encoder and proposed LLM-ST. LLM-ST is a suceessful industrial landing project of end-to-end speech translation.",
    pdfLink: "https://arxiv.org/pdf/2312.13585",
    bibFile: "assets/bibs/huang2023speech.bib",
    code: "",
    poster: "",
    video: "",
    slides: "",
    project: "https://speechtranslation.github.io/llm-st/",
  },
  {
    title: "Recent Advances in Direct Speech-to-text Translation",
    authors: "Chen Xu*, <b>Rong Ye</b>*, Qianqian Dong*, Chengqi Zhao, Tom Ko, Mingxuan Wang, Tong Xiao, Jingbo Zhu",
    conferences: "IJCAI Survey Track, 2023",
    image: "assets/images/research-page/ConST.png", //todo: replace placeholder image
    briefIntro: "A comprehensive survey reviewing recent advances in end-to-end direct speech-to-text translation, covering modeling, data, and training techniques.",
    pdfLink: "https://arxiv.org/pdf/2306.11646.pdf",
    bibFile: "assets/bibs/xu2023recent.bib",
    code: "",
    poster: "",
    video: "",
    slides: "",
    project: "",
  },
  {
    title: "Dub: Discrete unit back-translation for speech translation",
    authors: "Dong Zhang, <b>Rong Ye</b>, Mingxuan Wang, Yaqian Zhou",
    conferences: "ACL, 2023",
    image: "assets/images/research-page/Dub.png", //todo: add image
    briefIntro: "We propose Discrete Unit Back-translation (DUB), a novel back-translation method that can successfully be applied on direct ST and improve the performance of speech translation.",
    pdfLink: "https://arxiv.org/pdf/2305.11411.pdf",
    bibFile: "assets/bibs/zhang2023dub.bib",
    code: "https://github.com/0nutation/DUB",
    poster: "assets/slides/DUB-poster.pdf",
    video: "", //todo
    slides: "assets/slides/DUB-slide.pdf",
    project: "",//
  },
  {
    title: "WACO: Word-aligned contrastive learning for speech translation",
    authors: "Siqi Ouyang, <b>Rong Ye</b>, Lei Li",
    conferences: "ACL, 2023",
    image: "assets/images/research-page/WACO.png",
    briefIntro: "We propose Word-Aligned COntrastive learning (WACO), a simple and effective method for extremely low-resource speech-to-text translation. WACO aligns word-level representations of speech and text.",
    pdfLink: "https://arxiv.org/pdf/2212.09359.pdf",
    bibFile: "assets/bibs/ouyang2023waco.bib",
    code: "https://github.com/owaski/WACO",
    poster: "",
    video: "",
    slides: "",
    project: "",
  },
  {
    title: "GigaST: A 10,000-hour Pseudo Speech Translation Corpus",
    authors: "<b>Rong Ye</b>*, Chengqi Zhao*, Tom Ko, Chutong Meng, Tao Wang, Mingxuan Wang, Jun Cao",
    conferences: "InterSpeech, 2023",
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
    title: "On the Impact of Noises in Crowd-Sourced Data for Speech Translation",
    authors: "Siqi Ouyang, <b>Rong Ye</b>, Lei Li",
    conferences: "ACL-IWSLT, 2022",
    image: "assets/images/research-page/WACO.png", //todo: replace placeholder image
    briefIntro: "We identify three quality issues (audio-text misalignment, inaccurate translation, unnecessary speaker names) in MuST-C, propose an automatic cleaning method, and analyze how these noises impact ST model development and evaluation.",
    pdfLink: "https://arxiv.org/pdf/2206.13756.pdf",
    bibFile: "assets/bibs/ouyang2022impact.bib",
    code: "https://github.com/owaski/MuST-C-clean",
    poster: "",
    video: "",
    slides: "",
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
