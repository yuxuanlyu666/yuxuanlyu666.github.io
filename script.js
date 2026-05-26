const header = document.querySelector("[data-header]");
const languageButtons = document.querySelectorAll("[data-language-button]");
const translatableElements = document.querySelectorAll("[data-i18n]");

const content = {
  en: {
    title: "Yuxuan Lyu | Physical Oceanography",
    description:
      "Yuxuan Lyu, PhD candidate at ACEAS and IMAS, studies ocean salinity, mixed layer budgets, CMIP6 evaluation, and water cycle change.",
    "nav.research": "Research",
    "nav.chapters": "Chapters",
    "nav.publications": "Publications",
    "nav.background": "Background",
    "nav.email": "Email",
    "hero.eyebrow": "Physical oceanography · Ocean salinity · Climate change",
    "hero.title": "PhD candidate",
    "hero.affiliation":
      "Australian Centre for Excellence in Antarctic Science (ACEAS)<br />Institute for Marine and Antarctic Studies (IMAS), University of Tasmania<br />Hobart, Tasmania, Australia",
    "hero.summary":
      "Ocean salinity is more than the ocean's rain gauge: it carries the imprint of freshwater forcing, circulation, mixing, and water mass history. My PhD follows that signal from observed mixed layer salinity budgets and CMIP6 historical evaluation to future SSS responses under global warming, then into the full depth ocean interior where forced salinity change emerges from natural variability.",
    "diagnostic.1.title": "Observed salinity mechanisms",
    "diagnostic.1.body":
      "Identify how surface freshwater forcing, advection, vertical exchange, and mixing shape observed salinity change.",
    "diagnostic.2.title": "CMIP6 model evaluation",
    "diagnostic.2.body":
      "Test whether historical simulations reproduce observed salinity structure, variability, and long term change.",
    "diagnostic.3.title": "Future surface and interior salinity",
    "diagnostic.3.body":
      "Connect future SSS change with global warming, then follow the signal below the surface.",
    "research.eyebrow": "Research focus",
    "research.heading": "Ocean salinity as a fingerprint of water cycle change",
    "research.body":
      "Salinity is often called the ocean's rain gauge, but the ocean does not passively record rainfall and evaporation. Currents, mixed layer depth, entrainment, subduction, and internal variability all reshape the freshwater signal. I use mixed layer salt budgets to diagnose observed salinity change, then test how well CMIP6 historical simulations reproduce the same structure, variability, and trends. From there, I ask how salinity responds under future climate scenarios, and where familiar patterns are amplified, weakened, or reorganized.",
    "process.1.label": "Observed mechanisms",
    "process.1.title": "Mixed layer salinity budget",
    "process.2.label": "Model evaluation",
    "process.2.title": "CMIP6 historical salinity fidelity",
    "process.3.label": "Future change",
    "process.3.title": "Scenario responses · pattern shifts",
    "chapters.eyebrow": "Research chapters",
    "chapters.heading": "PhD research chapters",
    "chapter1.kicker": "Chapter 1 · Published article",
    "chapter1.title": "Global water cycle pattern amplification: contributing factors and mechanisms",
    "chapter1.body1":
      "This article asks why salinity pattern amplification does not simply mirror the atmospheric freshwater flux. Mixed layer salinity budgets across ocean data products let me separate surface forcing from horizontal advection, vertical exchange, diffusion, and entrainment.",
    "chapter1.body2":
      "The result is a process based view of the water cycle. Horizontal processes redistribute salinity in evaporation dominated subtropical regions, while vertical processes transfer freshwater signals into deeper layers in precipitation dominated regions.",
    "chapter1.button": "Read the published article",
    "chapter1.tag1": "Mixed layer budget",
    "chapter1.tag2": "Freshwater transport",
    "chapter1.tag3": "Pattern amplification",
    "chapter1.tag4": "Ocean dynamics",
    "chapter2.kicker": "Chapter 2 · Submitted to Journal of Climate",
    "chapter2.title": "A comprehensive evaluation of ocean salinity in CMIP6 historical simulations",
    "chapter2.body1":
      "Here I evaluate how 18 CMIP6 historical simulations represent global ocean salinity over 1979-2014. I compare surface freshwater fluxes, sea surface salinity, upper 2000 m salinity structure, and water mass extrema with observational and reanalysis products, asking where models capture the observed mean state and where they miss multidecadal change.",
    "chapter2.body2":
      "The key contrast is between mean state skill and trend skill. CMIP6 models reproduce the broad climatological salinity pattern, but long term SSS and subsurface trends show weak spatial agreement with observations, large model to model spread, and strong cancellation in the multi model mean. Subsurface diagnostics reveal a fresh over salty bias, shallow subtropical salinity maxima, and basin dependent intermediate water errors, pointing to ocean transport, ventilation, and mixing as central limits on model fidelity.",
    "chapter2.tag1": "18 CMIP6 models",
    "chapter2.tag2": "E-P and SSS trends",
    "chapter2.tag3": "Smax/Smin extrema",
    "chapter2.tag4": "Taylor skill metrics",
    "chapter2.tag5": "Water mass biases",
    "chapter3.kicker": "Chapter 3 · Future sea surface salinity",
    "chapter3.title": "Future SSS responses to scenarios and global warming",
    "chapter3.body1":
      "This chapter looks at future sea surface salinity across CMIP6 scenario simulations and global warming levels. Rather than stopping at end of century maps, I build a relationship between SSS change and global mean warming, asking where the response scales with warming and where it depends on pathway, basin, or ocean circulation.",
    "chapter3.body2":
      "Here I look for places where future salinity departs from the simple expectation that salty regions get saltier and fresh regions get fresher. The analysis tests whether surface freshwater forcing, advection, mixed layer processes, and regional circulation create a new water cycle fingerprint under stronger warming.",
    "chapter3.tag1": "Future SSS",
    "chapter3.tag2": "SSP scenarios",
    "chapter3.tag3": "Warming response",
    "chapter3.tag4": "New SSS patterns",
    "chapter3.tag5": "Mechanism diagnosis",
    "chapter4.kicker": "Chapter 4 · Ocean interior salinity",
    "chapter4.title": "Full depth salinity emergence and interior ocean change",
    "chapter4.body1":
      "This final research chapter follows salinity into the full ocean depth. I use emergence diagnostics to identify where forced salinity signals rise above background variability. Interior salinity is treated as a record of water mass and circulation change, not simply the downward extension of surface freshening or salinification.",
    "chapter4.body2":
      "Using a heave and spice decomposition inspired by Bindoff and McDougall (1994), I separate changes associated with vertical displacement of density surfaces from water mass property changes. This links interior salinity emergence to AMOC weakening, ventilation changes, subduction, and basin scale redistribution, and asks what new patterns of future interior salinity change emerge.",
    "chapter4.tag1": "Full depth emergence",
    "chapter4.tag2": "BM94 heave/spice",
    "chapter4.tag3": "AMOC weakening",
    "chapter4.tag4": "Density surface change",
    "chapter4.tag5": "Interior water masses",
    "publications.eyebrow": "Publications and outputs",
    "publications.heading": "Selected work",
    "publications.pub1.body":
      "Y. Lyu, N. L. Bindoff, S. Mohapatra, S. Rathore, and H. E. Phillips. <em>Journal of Geophysical Research: Oceans</em>, 130(9), e2024JC022278.",
    "publications.pub2.body":
      "S. Mohapatra, A. Sen Gupta, N. L. Bindoff, and Y. Lyu. <em>Earth System Science Data Discussions</em>, in review.",
    "publications.pub3.body":
      "Y. Lyu, N. Bindoff, S. Mohapatra, S. Rathore, and H. Phillips. Submitted to <em>Journal of Climate</em>; conference version presented at the <em>EGU General Assembly</em>, Vienna, Austria.",
    "background.eyebrow": "Education",
    "background.heading": "Academic background",
    "background.phd.date": "2022 to 2026 expected",
    "background.phd.title": "PhD candidate, University of Tasmania",
    "background.phd.body":
      "Tracking human and natural changes in ocean salinity: evidence for Earth's accelerating water cycle.",
    "background.phd.supervisors": "Supervisors: Nathaniel Bindoff, Helen Phillips, and Sandeep Mohapatra.",
    "background.bsc1.title": "BSc, Marine and Antarctic Science, University of Tasmania",
    "background.bsc1.body": "Physical oceanography.",
    "background.bsc2.title": "BSc, Marine Science, Ocean University of China",
    "background.bsc2.body": "Joint Education Program.",
    "skills.eyebrow": "Methods",
    "skills.heading": "Scientific toolkit",
    "skills.item1": "Mixed layer salinity and freshwater budget diagnostics",
    "skills.item2": "CMIP6 historical, piControl, and ScenarioMIP analysis",
    "skills.item3": "EOF and complex EOF methods for climate variability",
    "skills.item4": "SSS pattern scaling with global warming",
    "skills.item5": "Interior ocean salinity and water mass diagnostics",
    "skills.item6": "Large gridded data workflows, visualization, MATLAB, Bash, and HPC",
  },
  zh: {
    title: "Yuxuan Lyu | 物理海洋学",
    description:
      "Yuxuan Lyu，ACEAS 与 IMAS 博士候选人，研究海洋盐度、混合层收支、CMIP6 模式评估与水循环变化。",
    "nav.research": "研究",
    "nav.chapters": "章节",
    "nav.publications": "发表成果",
    "nav.background": "背景",
    "nav.email": "邮件",
    "hero.eyebrow": "物理海洋学 · 海洋盐度 · 气候变化",
    "hero.title": "博士候选人",
    "hero.affiliation":
      "澳大利亚南极科学卓越中心（ACEAS）<br />塔斯马尼亚大学 海洋与南极研究所（IMAS）<br />澳大利亚塔斯马尼亚州霍巴特",
    "hero.summary":
      "海洋盐度不只是海洋里的“雨量计”：它同时记录淡水强迫、环流、混合和水团历史。我的博士研究沿着这条盐度信号展开：从观测中的混合层盐度收支和 CMIP6 historical 模式评估，到全球变暖下未来 SSS 的响应，再到海洋全深度内部被强迫的盐度变化如何从自然变率中显现。",
    "diagnostic.1.title": "观测盐度变化机制",
    "diagnostic.1.body": "诊断表层淡水强迫、平流、垂向交换和混合如何共同塑造观测到的盐度变化。",
    "diagnostic.2.title": "CMIP6 模式评估",
    "diagnostic.2.body": "评估 historical 模拟是否能再现观测盐度结构、变率和长期变化。",
    "diagnostic.3.title": "未来表层与内部盐度",
    "diagnostic.3.body": "将未来 SSS 变化与全球变暖联系起来，并进一步考察盐度变化如何储存在海表以下。",
    "research.eyebrow": "研究重点",
    "research.heading": "海洋盐度作为水循环变化的指纹",
    "research.body":
      "盐度常被描述为海洋中的“雨量计”，但这个说法并不完整。淡水信号会被洋流、混合层深度、夹卷、潜沉以及长期内部变率重新塑造。我的研究首先用混合层盐度收支分析识别观测盐度变化背后的机制；随后评估不同 CMIP6 模式对 historical 盐度结构、变率和趋势的再现能力；在此基础上，进一步研究不同未来气候情景下盐度如何响应，以及这些响应是否延续、放大或重组我们当前理解的盐度变化格局。",
    "process.1.label": "观测机制",
    "process.1.title": "混合层盐度收支",
    "process.2.label": "模式评估",
    "process.2.title": "CMIP6 historical 盐度可信度",
    "process.3.label": "未来变化",
    "process.3.title": "情景响应 · 格局重组",
    "chapters.eyebrow": "研究章节",
    "chapters.heading": "PhD主要研究章节",
    "chapter1.kicker": "第一章 · 已发表文章",
    "chapter1.title": "全球水循环格局放大：贡献因子与机制",
    "chapter1.body1":
      "本章研究为什么盐度格局放大并不总是等同于大气淡水通量的表层印记。通过多个海洋数据产品的混合层盐度收支诊断，本章将表层强迫与水平平流、垂向交换、扩散和夹卷等过程区分开来。",
    "chapter1.body2":
      "结果给出了一个机制优先的水循环图景：在蒸发主导的副热带区域，水平过程会重新分配盐度；而在降水主导的区域，垂向过程会把淡水信号转移到更深层。",
    "chapter1.button": "阅读已发表文章",
    "chapter1.tag1": "混合层收支",
    "chapter1.tag2": "淡水输运",
    "chapter1.tag3": "格局放大",
    "chapter1.tag4": "海洋动力过程",
    "chapter2.kicker": "第二章 · 已投稿 Journal of Climate",
    "chapter2.title": "CMIP6 historical 模拟中海洋盐度的综合评估",
    "chapter2.body1":
      "本章评估 18 个 CMIP6 historical 模拟在 1979-2014 年间对全球海洋盐度的再现能力。我将表层淡水通量、海表盐度（SSS）、0-2000 m 盐度结构以及水团盐度极值与观测和再分析产品比较，区分模型在哪些方面能抓住平均态，在哪些方面无法再现多年代际变化。",
    "chapter2.body2":
      "核心结果是平均态模拟能力与趋势模拟能力之间的明显反差。CMIP6 模式能够再现大尺度气候态盐度格局，但长期 SSS 和次表层趋势与观测的空间一致性弱，模式间离散度大，多模式平均中存在强烈抵消。次表层诊断显示上淡下咸偏差、过浅的副热带盐度最大值，以及盆地依赖的中层水偏差，说明海洋输运、通风和混合是限制模式可信度的关键过程。",
    "chapter2.tag1": "18 个 CMIP6 模式",
    "chapter2.tag2": "E-P 与 SSS 趋势",
    "chapter2.tag3": "Smax/Smin 极值",
    "chapter2.tag4": "Taylor 评估指标",
    "chapter2.tag5": "水团偏差",
    "chapter3.kicker": "第三章 · 未来海表盐度",
    "chapter3.title": "不同情景和全球变暖下的未来 SSS 响应",
    "chapter3.body1":
      "本章研究 CMIP6 未来情景模拟中海表盐度（SSS）在不同排放路径和全球变暖水平下的变化。它不只是比较世纪末分布图，而是建立 SSS 变化与全球平均变暖之间的关系，识别哪些区域近似随变暖增强，哪些区域受到情景、盆地或海洋环流调制。",
    "chapter3.body2":
      "核心目标是发现并解释未来盐度变化的新 pattern。我将传统的“咸者更咸、淡者更淡”框架与未来投影中的格局转移进行比较，检验表层淡水强迫、平流、混合层过程和区域环流是否会在更强变暖下重组海洋中的水循环指纹。",
    "chapter3.tag1": "未来 SSS",
    "chapter3.tag2": "SSP 情景",
    "chapter3.tag3": "变暖响应",
    "chapter3.tag4": "新 SSS pattern",
    "chapter3.tag5": "机制诊断",
    "chapter4.kicker": "第四章 · 海洋内部盐度",
    "chapter4.title": "全深度盐度 emergence 与海洋内部变化",
    "chapter4.body1":
      "本章把未来盐度分析扩展到海洋全深度，使用 emergence 诊断识别哪些深度和盆地区域的强迫盐度信号已经超过背景内部变率。这里的内部盐度被视为水团和环流变化的记录，而不是表层淡化或盐化的简单向下延伸。",
    "chapter4.body2":
      "通过受 Bindoff and McDougall (1994) 启发的 heave/spice 分解，我将与等密面垂向位移相关的变化和水团性质本身的变化区分开来。这个框架把内部盐度 emergence 与 AMOC 减弱、通风变化、潜沉和盆地尺度再分配联系起来，并讨论未来海洋内部盐度的新模式。",
    "chapter4.tag1": "全深度 emergence",
    "chapter4.tag2": "BM94 heave/spice",
    "chapter4.tag3": "AMOC 减弱",
    "chapter4.tag4": "等密面变化",
    "chapter4.tag5": "内部水团",
    "publications.eyebrow": "论文与成果",
    "publications.heading": "代表性工作",
    "publications.pub1.body":
      "Y. Lyu, N. L. Bindoff, S. Mohapatra, S. Rathore, and H. E. Phillips. <em>Journal of Geophysical Research: Oceans</em>, 130(9), e2024JC022278.",
    "publications.pub2.body":
      "S. Mohapatra, A. Sen Gupta, N. L. Bindoff, and Y. Lyu. <em>Earth System Science Data Discussions</em>, 审稿中。",
    "publications.pub3.body":
      "Y. Lyu, N. Bindoff, S. Mohapatra, S. Rathore, and H. Phillips. 已投稿 <em>Journal of Climate</em>；会议版本发表于奥地利维也纳 <em>EGU General Assembly</em>。",
    "background.eyebrow": "教育背景",
    "background.heading": "学术背景",
    "background.phd.date": "2022 至 2026 预计完成",
    "background.phd.title": "博士候选人，塔斯马尼亚大学",
    "background.phd.body": "追踪人类活动和自然变率引起的海洋盐度变化：地球水循环加速的证据。",
    "background.phd.supervisors": "导师：Nathaniel Bindoff、Helen Phillips 和 Sandeep Mohapatra。",
    "background.bsc1.title": "理学学士，塔斯马尼亚大学 Marine and Antarctic Science",
    "background.bsc1.body": "物理海洋学。",
    "background.bsc2.title": "理学学士，中国海洋大学 Marine Science",
    "background.bsc2.body": "联合培养项目。",
    "skills.eyebrow": "方法",
    "skills.heading": "科研工具箱",
    "skills.item1": "混合层盐度与淡水收支诊断",
    "skills.item2": "CMIP6 historical、piControl 与 ScenarioMIP 分析",
    "skills.item3": "EOF 与复 EOF 气候变率分析",
    "skills.item4": "SSS 随全球变暖的格局缩放",
    "skills.item5": "海洋内部盐度与水团诊断",
    "skills.item6": "大规模格点数据流程、可视化、MATLAB、Bash 与 HPC",
  },
};

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

const readStoredLanguage = () => {
  try {
    return localStorage.getItem("language");
  } catch {
    return null;
  }
};

const storeLanguage = (language) => {
  try {
    localStorage.setItem("language", language);
  } catch {
    return;
  }
};

const getInitialLanguage = () => {
  const stored = readStoredLanguage();
  if (stored === "zh" || stored === "en") return stored;
  return navigator.language?.toLowerCase().startsWith("zh") ? "zh" : "en";
};

const applyLanguage = (language) => {
  const activeLanguage = language === "zh" ? "zh" : "en";
  const activeContent = content[activeLanguage];
  const metaDescription = document.querySelector('meta[name="description"]');

  document.documentElement.lang = activeLanguage === "zh" ? "zh-Hans" : "en";
  document.body.dataset.language = activeLanguage;
  document.title = activeContent.title;
  if (metaDescription) {
    metaDescription.setAttribute("content", activeContent.description);
  }

  translatableElements.forEach((element) => {
    const key = element.dataset.i18n;
    const value = activeContent[key];
    if (value) {
      element.innerHTML = value;
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.languageButton === activeLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  storeLanguage(activeLanguage);
};

updateHeader();
applyLanguage(getInitialLanguage());

window.addEventListener("scroll", updateHeader, { passive: true });
languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.languageButton));
});
