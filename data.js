/* =========================================================
   ملف البيانات — هذا هو الملف الوحيد الذي تحتاج تعديله
   كل نص له نسختان: عربية، وإنجليزية (الحقل الذي ينتهي بـ _en)
   ========================================================= */

/* ---------- 1) معلوماتك وروابط حساباتك ----------
   لإظهار حساب جديد: ضع الرابط بين علامتي التنصيص.
   الحساب الفارغ "" لا يظهر في الموقع.               */
window.SITE = {
  name: "عماد فريج",
  name_en: "Emad Fraij",
  title: "متخصص أول في التقييمات الدولية · صانع محتوى في الذكاء الاصطناعي للتعليم",
  title_en: "Senior International Assessments Specialist · AI in Education Creator",
  intro: "دليل منتقى لأدوات الذكاء الاصطناعي التي أنصح بها المعلمين والباحثين وواضعي الاختبارات، مرتبة حسب الاستخدام.",
  intro_en: "A curated directory of the AI tools I recommend to teachers, researchers and test developers, organised by use.",
  updated: "2026-10-08",
  social: {
    linkedin:  "https://www.linkedin.com/in/emad-fraij-a66052291/",
    youtube:   "",
    tiktok:    "",
    instagram: ""
  }
};

/* ---------- 2) الأقسام ----------
   id: معرّف قصير بالإنجليزية بلا مسافات
   title: الاسم العربي — en: الاسم الإنجليزي              */
window.CATEGORIES = [
  { id: "picks", title: "اختياراتي الأولى", en: "My Top Picks" },
  { id: "chat", title: "مساعدات المحادثة", en: "AI Assistants" },
  { id: "multi", title: "منصات متعددة النماذج", en: "Multi-Model Platforms" },
  { id: "arena", title: "مقارنة النماذج وتقييمها", en: "Model Leaderboards & Arenas" },
  { id: "agents", title: "الوكلاء الأذكياء", en: "AI Agents" },
  { id: "research", title: "البحث الأكاديمي", en: "Academic Research" },
  { id: "files", title: "قراءة الملفات وتلخيصها", en: "Chat with Documents" },
  { id: "teacher", title: "مساعد المعلم والتخطيط", en: "Teacher Assistants & Planning" },
  { id: "assess", title: "التقويم وبناء الاختبارات", en: "Assessment & Quizzes" },
  { id: "intl", title: "التقييمات الدولية — مصادر رسمية", en: "International Assessments — Official Sources" },
  { id: "data", title: "تحليل البيانات وتصويرها", en: "Data Analysis & Visualisation" },
  { id: "translate", title: "الترجمة", en: "Translation" },
  { id: "writing", title: "الكتابة والتدقيق", en: "Writing & Proofreading" },
  { id: "slides", title: "العروض التقديمية", en: "Presentations" },
  { id: "infographic", title: "الإنفوجرافيك والتصميم المرئي", en: "Infographics & Visual Design" },
  { id: "mindmap", title: "الخرائط الذهنية", en: "Mind Maps" },
  { id: "images", title: "توليد الصور وتحريرها", en: "Image Generation & Editing" },
  { id: "video", title: "توليد الفيديو وتحريره", en: "Video Generation & Editing" },
  { id: "voice", title: "الصوت وتحويل النص إلى كلام", en: "Voice & Text-to-Speech" },
  { id: "transcribe", title: "التفريغ النصي والاجتماعات", en: "Transcription & Meetings" },
  { id: "music", title: "الموسيقى", en: "Music" },
  { id: "builders", title: "بناء المواقع والتطبيقات", en: "Website & App Builders" },
  { id: "automation", title: "الأتمتة وسير العمل", en: "Automation & Workflows" },
  { id: "prompts", title: "هندسة الأوامر", en: "Prompt Engineering" },
  { id: "dev", title: "منصات المطورين", en: "Developer Platforms" },
  { id: "local", title: "تشغيل النماذج محلياً", en: "Run AI Locally" },
  { id: "arabic", title: "أدوات ومصادر عربية", en: "Arabic Tools & Resources" },
  { id: "detect", title: "كشف النص المولّد آلياً", en: "AI Text Detection" },
  { id: "directories", title: "أدلة أدوات الذكاء الاصطناعي", en: "AI Tool Directories" },
  { id: "learn", title: "تعلّم الذكاء الاصطناعي", en: "Learn AI" }
];

/* ---------- 3) الأدوات ----------
   لإضافة أداة: انسخ سطراً كاملاً والصقه، ثم غيّر قيمه.
   cat: معرّف القسم من القائمة أعلاه
   price: "free" مجاني | "freemium" مجاني جزئياً | "paid" مدفوع | "" غير محدد
   note: سطر التوصية بالعربية — note_en: بالإنجليزية (كلاهما اختياري) */
window.TOOLS = [
  // اختياراتي الأولى
  { "cat": "picks", "name": "Claude", "url": "https://claude.ai", "price": "freemium", "note": "الأقوى في الكتابة العربية الطويلة والتحليل وبناء الأدوات التفاعلية.", "note_en": "Best for long-form Arabic writing, analysis and building interactive tools." },
  { "cat": "picks", "name": "NotebookLM", "url": "https://notebooklm.google.com", "price": "free", "note": "اسأل ملفاتك ومصادرك، وولّد ملخصات صوتية وخرائط ذهنية منها.", "note_en": "Ask questions of your own sources and generate audio overviews and mind maps." },
  { "cat": "picks", "name": "Gemini", "url": "https://gemini.google.com", "price": "freemium", "note": "متكامل مع خدمات Google، وممتاز في البحث العميق.", "note_en": "Integrated with Google services and excellent at deep research." },
  { "cat": "picks", "name": "Consensus", "url": "https://consensus.app", "price": "freemium", "note": "إجابات مبنية على أوراق علمية محكّمة مع المصادر.", "note_en": "Answers grounded in peer-reviewed papers, with citations." },

  // مساعدات المحادثة
  { "cat": "chat", "name": "ChatGPT", "url": "https://chatgpt.com", "price": "freemium", "note": "", "note_en": "" },
  { "cat": "chat", "name": "Claude", "url": "https://claude.ai", "price": "freemium", "note": "", "note_en": "" },
  { "cat": "chat", "name": "Gemini", "url": "https://gemini.google.com", "price": "freemium", "note": "", "note_en": "" },
  { "cat": "chat", "name": "Microsoft Copilot", "url": "https://copilot.microsoft.com", "price": "freemium", "note": "", "note_en": "" },
  { "cat": "chat", "name": "Perplexity", "url": "https://www.perplexity.ai", "price": "freemium", "note": "بحث على الويب مع ذكر المصادر.", "note_en": "Web search with cited sources." },
  { "cat": "chat", "name": "DeepSeek", "url": "https://chat.deepseek.com", "price": "free", "note": "", "note_en": "" },
  { "cat": "chat", "name": "HIX AI", "url": "https://hix.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "chat", "name": "Qwen", "url": "https://chat.qwen.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "chat", "name": "Z.ai (GLM)", "url": "https://chat.z.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "chat", "name": "Kimi", "url": "https://www.kimi.com", "price": "", "note": "", "note_en": "" },
  { "cat": "chat", "name": "Grok", "url": "https://grok.com", "price": "", "note": "", "note_en": "" },
  { "cat": "chat", "name": "LongCat", "url": "https://longcat.chat", "price": "", "note": "", "note_en": "" },
  { "cat": "chat", "name": "iAsk", "url": "https://iask.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "chat", "name": "Felo", "url": "https://felo.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "chat", "name": "Phind", "url": "https://www.phind.com", "price": "", "note": "", "note_en": "" },
  { "cat": "chat", "name": "You.com", "url": "https://you.com", "price": "", "note": "", "note_en": "" },
  { "cat": "chat", "name": "K2 Think (MBZUAI)", "url": "https://www.k2think.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "chat", "name": "Xiaomi MiMo Studio", "url": "https://aistudio.xiaomimimo.com", "price": "", "note": "", "note_en": "" },
  { "cat": "chat", "name": "Duck.ai", "url": "https://duck.ai", "price": "", "note": "", "note_en": "" },

  // منصات متعددة النماذج
  { "cat": "multi", "name": "Multi (GetMulti)", "url": "https://getmulti.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "multi", "name": "Merlin", "url": "https://www.getmerlin.in", "price": "", "note": "", "note_en": "" },
  { "cat": "multi", "name": "OpenRouter", "url": "https://openrouter.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "multi", "name": "Expertex AI", "url": "https://www.expertex.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "multi", "name": "Poe", "url": "https://poe.com", "price": "", "note": "", "note_en": "" },
  { "cat": "multi", "name": "eye2.ai", "url": "https://eye2.ai", "price": "", "note": "", "note_en": "" },

  // مقارنة النماذج وتقييمها
  { "cat": "arena", "name": "Artificial Analysis", "url": "https://artificialanalysis.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "arena", "name": "LMArena", "url": "https://lmarena.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "arena", "name": "Arena", "url": "https://arena.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "arena", "name": "Design Arena", "url": "https://www.designarena.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "arena", "name": "Yupp", "url": "https://yupp.ai", "price": "", "note": "", "note_en": "" },

  // الوكلاء الأذكياء
  { "cat": "agents", "name": "AshnaAI", "url": "https://app.ashna.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "agents", "name": "Manus", "url": "https://manus.im", "price": "", "note": "", "note_en": "" },
  { "cat": "agents", "name": "MiniMax Agent", "url": "https://agent.minimax.io", "price": "", "note": "", "note_en": "" },
  { "cat": "agents", "name": "Genspark", "url": "https://www.genspark.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "agents", "name": "Flowith", "url": "https://flowith.io", "price": "", "note": "", "note_en": "" },
  { "cat": "agents", "name": "Skywork", "url": "https://skywork.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "agents", "name": "Lyzr", "url": "https://www.lyzr.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "agents", "name": "Runable", "url": "https://runable.com", "price": "", "note": "", "note_en": "" },
  { "cat": "agents", "name": "Tasklet", "url": "https://tasklet.ai", "price": "", "note": "", "note_en": "" },

  // البحث الأكاديمي
  { "cat": "research", "name": "Google Scholar", "url": "https://scholar.google.com", "price": "free", "note": "", "note_en": "" },
  { "cat": "research", "name": "Semantic Scholar", "url": "https://www.semanticscholar.org", "price": "free", "note": "", "note_en": "" },
  { "cat": "research", "name": "Consensus", "url": "https://consensus.app", "price": "freemium", "note": "", "note_en": "" },
  { "cat": "research", "name": "Elicit", "url": "https://elicit.com", "price": "freemium", "note": "استخراج النتائج من الأوراق في جداول.", "note_en": "Extracts findings from papers into tables." },
  { "cat": "research", "name": "SciSpace", "url": "https://scispace.com", "price": "freemium", "note": "", "note_en": "" },
  { "cat": "research", "name": "ResearchRabbit", "url": "https://www.researchrabbit.ai", "price": "free", "note": "خرائط الأوراق المرتبطة ببعضها.", "note_en": "Maps of connected papers." },
  { "cat": "research", "name": "Explainpaper", "url": "https://www.explainpaper.com", "price": "", "note": "", "note_en": "" },
  { "cat": "research", "name": "Illuminate (Google)", "url": "https://illuminate.google.com", "price": "", "note": "", "note_en": "" },
  { "cat": "research", "name": "RefSeek", "url": "https://www.refseek.com", "price": "", "note": "", "note_en": "" },
  { "cat": "research", "name": "Bohrium", "url": "https://www.bohrium.com", "price": "", "note": "", "note_en": "" },

  // قراءة الملفات وتلخيصها
  { "cat": "files", "name": "NotebookLM", "url": "https://notebooklm.google.com", "price": "free", "note": "", "note_en": "" },
  { "cat": "files", "name": "ChatPDF", "url": "https://www.chatpdf.com", "price": "freemium", "note": "", "note_en": "" },
  { "cat": "files", "name": "Humata", "url": "https://www.humata.ai", "price": "freemium", "note": "", "note_en": "" },
  { "cat": "files", "name": "NoteGPT", "url": "https://notegpt.io", "price": "", "note": "", "note_en": "" },
  { "cat": "files", "name": "AskYourPDF", "url": "https://askyourpdf.com", "price": "", "note": "", "note_en": "" },
  { "cat": "files", "name": "ChatDOC", "url": "https://chatdoc.com", "price": "", "note": "", "note_en": "" },
  { "cat": "files", "name": "EaseMate", "url": "https://www.easemate.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "files", "name": "PDF.ai", "url": "https://pdf.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "files", "name": "YouLearn", "url": "https://www.youlearn.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "files", "name": "Recall", "url": "https://www.getrecall.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "files", "name": "UPDF AI", "url": "https://ai.updf.com", "price": "", "note": "", "note_en": "" },
  { "cat": "files", "name": "YouMind", "url": "https://youmind.com", "price": "", "note": "", "note_en": "" },

  // مساعد المعلم والتخطيط
  { "cat": "teacher", "name": "MagicSchool", "url": "https://www.magicschool.ai", "price": "freemium", "note": "عشرات الأدوات الجاهزة للخطط والأنشطة.", "note_en": "Dozens of ready-made tools for plans and activities." },
  { "cat": "teacher", "name": "SchoolAI", "url": "https://schoolai.com", "price": "freemium", "note": "", "note_en": "" },
  { "cat": "teacher", "name": "Diffit", "url": "https://web.diffit.me", "price": "freemium", "note": "تكييف النصوص لمستويات قرائية مختلفة.", "note_en": "Adapts texts to different reading levels." },
  { "cat": "teacher", "name": "Eduaide", "url": "https://www.eduaide.ai", "price": "freemium", "note": "", "note_en": "" },
  { "cat": "teacher", "name": "Coursebox", "url": "https://www.coursebox.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "teacher", "name": "Brisk Teaching", "url": "https://www.briskteaching.com", "price": "", "note": "", "note_en": "" },
  { "cat": "teacher", "name": "Learn Your Way (Google)", "url": "https://learnyourway.withgoogle.com", "price": "", "note": "", "note_en": "" },
  { "cat": "teacher", "name": "GPAI (STEM)", "url": "https://gpai.app", "price": "", "note": "", "note_en": "" },
  { "cat": "teacher", "name": "Workbookly", "url": "https://workbookly.app", "price": "", "note": "", "note_en": "" },

  // التقويم وبناء الاختبارات
  { "cat": "assess", "name": "Conker", "url": "https://www.conker.ai", "price": "freemium", "note": "توليد اختبارات قصيرة من موضوع أو نص.", "note_en": "Generates quizzes from a topic or text." },
  { "cat": "assess", "name": "Kahoot!", "url": "https://kahoot.com", "price": "freemium", "note": "", "note_en": "" },
  { "cat": "assess", "name": "Socrative", "url": "https://www.socrative.com", "price": "freemium", "note": "", "note_en": "" },
  { "cat": "assess", "name": "Google Forms", "url": "https://forms.google.com", "price": "free", "note": "", "note_en": "" },
  { "cat": "assess", "name": "HelpTeaching", "url": "https://www.helpteaching.com", "price": "", "note": "", "note_en": "" },
  { "cat": "assess", "name": "Mentimeter", "url": "https://www.mentimeter.com", "price": "", "note": "", "note_en": "" },
  { "cat": "assess", "name": "QuestionWell", "url": "https://www.questionwell.org", "price": "", "note": "", "note_en": "" },

  // التقييمات الدولية — مصادر رسمية
  { "cat": "intl", "name": "TIMSS & PIRLS (IEA)", "url": "https://timssandpirls.bc.edu", "price": "free", "note": "التقارير والأطر والأسئلة المنشورة.", "note_en": "Reports, frameworks and released items." },
  { "cat": "intl", "name": "IEA", "url": "https://www.iea.nl", "price": "free", "note": "الدراسات والبيانات وأدوات التحليل الرسمية.", "note_en": "Studies, data and official analysis tools." },
  { "cat": "intl", "name": "OECD PISA", "url": "https://www.oecd.org/en/about/programmes/pisa.html", "price": "free", "note": "", "note_en": "" },
  { "cat": "intl", "name": "OECD TALIS", "url": "https://www.oecd.org/en/about/programmes/talis.html", "price": "free", "note": "", "note_en": "" },
  { "cat": "intl", "name": "PISA Data Explorer", "url": "https://pisadataexplorer.oecd.org", "price": "", "note": "", "note_en": "" },
  { "cat": "intl", "name": "TIMSS 2023", "url": "https://timss2023.org", "price": "", "note": "", "note_en": "" },
  { "cat": "intl", "name": "PIRLS 2021", "url": "https://pirls2021.org", "price": "", "note": "", "note_en": "" },
  { "cat": "intl", "name": "TIMSS 2019", "url": "https://timss2019.org", "price": "", "note": "", "note_en": "" },
  { "cat": "intl", "name": "OECD GPS Education", "url": "https://gpseducation.oecd.org", "price": "", "note": "", "note_en": "" },
  { "cat": "intl", "name": "OECD Data Explorer", "url": "https://data-explorer.oecd.org", "price": "", "note": "", "note_en": "" },
  { "cat": "intl", "name": "PISA 2025 Science Framework", "url": "https://pisa-framework.oecd.org", "price": "", "note": "", "note_en": "" },
  { "cat": "intl", "name": "NCES (IELS)", "url": "https://nces.ed.gov", "price": "", "note": "", "note_en": "" },

  // تحليل البيانات وتصويرها
  { "cat": "data", "name": "Julius AI", "url": "https://julius.ai", "price": "freemium", "note": "تحليل جداول البيانات بالمحادثة.", "note_en": "Analyse spreadsheets by chatting." },
  { "cat": "data", "name": "Datawrapper", "url": "https://www.datawrapper.de", "price": "freemium", "note": "رسوم بيانية نظيفة جاهزة للنشر.", "note_en": "Clean, publication-ready charts." },
  { "cat": "data", "name": "Flourish", "url": "https://flourish.studio", "price": "freemium", "note": "", "note_en": "" },
  { "cat": "data", "name": "Data Viz Catalogue", "url": "https://datavizcatalogue.com", "price": "free", "note": "لاختيار نوع الرسم المناسب.", "note_en": "Helps you choose the right chart type." },
  { "cat": "data", "name": "Anomaly AI", "url": "https://www.findanomaly.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "data", "name": "Formula Bot", "url": "https://www.formulabot.com", "price": "", "note": "", "note_en": "" },
  { "cat": "data", "name": "hiData", "url": "https://hidata.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "data", "name": "Powerdrill", "url": "https://powerdrill.ai", "price": "", "note": "", "note_en": "" },

  // الترجمة
  { "cat": "translate", "name": "DeepL", "url": "https://www.deepl.com", "price": "freemium", "note": "", "note_en": "" },
  { "cat": "translate", "name": "Google Translate", "url": "https://translate.google.com", "price": "free", "note": "", "note_en": "" },
  { "cat": "translate", "name": "Reverso", "url": "https://www.reverso.net", "price": "freemium", "note": "أمثلة سياقية للمصطلحات.", "note_en": "Terms shown in real context." },
  { "cat": "translate", "name": "Online Doc Translator", "url": "https://www.onlinedoctranslator.com", "price": "", "note": "", "note_en": "" },
  { "cat": "translate", "name": "Yandex Translate", "url": "https://translate.yandex.com", "price": "", "note": "", "note_en": "" },
  { "cat": "translate", "name": "Matecat", "url": "https://www.matecat.com", "price": "", "note": "", "note_en": "" },
  { "cat": "translate", "name": "OpenL", "url": "https://openl.io", "price": "", "note": "", "note_en": "" },
  { "cat": "translate", "name": "SYSTRAN", "url": "https://translate.systran.net", "price": "", "note": "", "note_en": "" },
  { "cat": "translate", "name": "BlipCut Video Translator", "url": "https://www.blipcut.com", "price": "", "note": "", "note_en": "" },

  // الكتابة والتدقيق
  { "cat": "writing", "name": "QuillBot", "url": "https://quillbot.com", "price": "freemium", "note": "", "note_en": "" },
  { "cat": "writing", "name": "Grammarly", "url": "https://www.grammarly.com", "price": "freemium", "note": "للنصوص الإنجليزية.", "note_en": "For English texts." },
  { "cat": "writing", "name": "Smodin", "url": "https://smodin.io", "price": "", "note": "", "note_en": "" },
  { "cat": "writing", "name": "Wordtune", "url": "https://www.wordtune.com", "price": "", "note": "", "note_en": "" },
  { "cat": "writing", "name": "GravityWrite", "url": "https://gravitywrite.com", "price": "", "note": "", "note_en": "" },
  { "cat": "writing", "name": "AI Doc Maker", "url": "https://aidocmaker.com", "price": "", "note": "", "note_en": "" },

  // العروض التقديمية
  { "cat": "slides", "name": "Gamma", "url": "https://gamma.app", "price": "freemium", "note": "", "note_en": "" },
  { "cat": "slides", "name": "Canva", "url": "https://www.canva.com", "price": "freemium", "note": "", "note_en": "" },
  { "cat": "slides", "name": "Napkin", "url": "https://www.napkin.ai", "price": "freemium", "note": "تحويل النص إلى أشكال توضيحية.", "note_en": "Turns text into visuals." },
  { "cat": "slides", "name": "SlidesAI", "url": "https://www.slidesai.io", "price": "", "note": "", "note_en": "" },
  { "cat": "slides", "name": "Decktopus", "url": "https://www.decktopus.com", "price": "", "note": "", "note_en": "" },
  { "cat": "slides", "name": "PopAi", "url": "https://www.popai.pro", "price": "", "note": "", "note_en": "" },
  { "cat": "slides", "name": "Chronicle", "url": "https://chroniclehq.com", "price": "", "note": "", "note_en": "" },
  { "cat": "slides", "name": "Dokie", "url": "https://dokie.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "slides", "name": "AiPPT", "url": "https://www.aippt.com", "price": "", "note": "", "note_en": "" },
  { "cat": "slides", "name": "PPT.AI", "url": "https://ppt.ai", "price": "", "note": "", "note_en": "" },

  // الإنفوجرافيك والتصميم المرئي
  { "cat": "infographic", "name": "Piktochart", "url": "https://piktochart.com", "price": "", "note": "", "note_en": "" },
  { "cat": "infographic", "name": "Infographics.so", "url": "https://infographics.so", "price": "", "note": "", "note_en": "" },
  { "cat": "infographic", "name": "Text to Infographic", "url": "https://text2infographic.com", "price": "", "note": "", "note_en": "" },
  { "cat": "infographic", "name": "Venngage", "url": "https://venngage.com", "price": "", "note": "", "note_en": "" },
  { "cat": "infographic", "name": "Visme", "url": "https://www.visme.co", "price": "", "note": "", "note_en": "" },
  { "cat": "infographic", "name": "Infografix", "url": "https://infografix.app", "price": "", "note": "", "note_en": "" },

  // الخرائط الذهنية
  { "cat": "mindmap", "name": "Whimsical", "url": "https://whimsical.com", "price": "freemium", "note": "", "note_en": "" },
  { "cat": "mindmap", "name": "Miro", "url": "https://miro.com", "price": "freemium", "note": "", "note_en": "" },
  { "cat": "mindmap", "name": "Mapify", "url": "https://mapify.so", "price": "freemium", "note": "", "note_en": "" },
  { "cat": "mindmap", "name": "MyMap.ai", "url": "https://www.mymap.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "mindmap", "name": "MyLens", "url": "https://mylens.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "mindmap", "name": "Mind Map Wizard", "url": "https://mindmapwizard.com", "price": "", "note": "", "note_en": "" },
  { "cat": "mindmap", "name": "Edraw.AI", "url": "https://www.edraw.ai", "price": "", "note": "", "note_en": "" },

  // توليد الصور وتحريرها
  { "cat": "images", "name": "Ideogram", "url": "https://ideogram.ai", "price": "freemium", "note": "", "note_en": "" },
  { "cat": "images", "name": "Leonardo", "url": "https://leonardo.ai", "price": "freemium", "note": "", "note_en": "" },
  { "cat": "images", "name": "Adobe Firefly", "url": "https://firefly.adobe.com", "price": "freemium", "note": "", "note_en": "" },
  { "cat": "images", "name": "ImageFX", "url": "https://labs.google/fx/tools/image-fx", "price": "free", "note": "", "note_en": "" },
  { "cat": "images", "name": "AutoDraw", "url": "https://www.autodraw.com", "price": "", "note": "", "note_en": "" },
  { "cat": "images", "name": "Craiyon", "url": "https://www.craiyon.com", "price": "", "note": "", "note_en": "" },
  { "cat": "images", "name": "ImagineArt", "url": "https://www.imagine.art", "price": "", "note": "", "note_en": "" },
  { "cat": "images", "name": "Lexica", "url": "https://lexica.art", "price": "", "note": "", "note_en": "" },
  { "cat": "images", "name": "Clipdrop", "url": "https://clipdrop.co", "price": "", "note": "", "note_en": "" },
  { "cat": "images", "name": "Midjourney", "url": "https://www.midjourney.com", "price": "", "note": "", "note_en": "" },
  { "cat": "images", "name": "Lovart", "url": "https://www.lovart.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "images", "name": "DeepAI", "url": "https://deepai.org", "price": "", "note": "", "note_en": "" },
  { "cat": "images", "name": "Phot.AI", "url": "https://www.phot.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "images", "name": "Krea", "url": "https://www.krea.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "images", "name": "OpenArt", "url": "https://openart.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "images", "name": "insMind", "url": "https://www.insmind.com", "price": "", "note": "", "note_en": "" },
  { "cat": "images", "name": "Mixboard (Google)", "url": "https://mixboard.google.com", "price": "", "note": "", "note_en": "" },
  { "cat": "images", "name": "Stockimg.ai", "url": "https://stockimg.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "images", "name": "Figma Weave", "url": "https://weavy.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "images", "name": "Reve", "url": "https://reve.com", "price": "", "note": "", "note_en": "" },
  { "cat": "images", "name": "Zawa", "url": "https://zawa.ai", "price": "", "note": "", "note_en": "" },

  // توليد الفيديو وتحريره
  { "cat": "video", "name": "HeyGen", "url": "https://www.heygen.com", "price": "freemium", "note": "", "note_en": "" },
  { "cat": "video", "name": "CapCut", "url": "https://www.capcut.com", "price": "freemium", "note": "", "note_en": "" },
  { "cat": "video", "name": "Higgsfield", "url": "https://higgsfield.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "video", "name": "Steve AI", "url": "https://www.steve.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "video", "name": "D-ID", "url": "https://www.d-id.com", "price": "", "note": "", "note_en": "" },
  { "cat": "video", "name": "Hedra", "url": "https://www.hedra.com", "price": "", "note": "", "note_en": "" },
  { "cat": "video", "name": "Media.io", "url": "https://www.media.io", "price": "", "note": "", "note_en": "" },
  { "cat": "video", "name": "Mootion", "url": "https://www.mootion.com", "price": "", "note": "", "note_en": "" },
  { "cat": "video", "name": "Runway", "url": "https://runwayml.com", "price": "", "note": "", "note_en": "" },
  { "cat": "video", "name": "Submagic", "url": "https://www.submagic.co", "price": "", "note": "", "note_en": "" },
  { "cat": "video", "name": "Descript", "url": "https://www.descript.com", "price": "", "note": "", "note_en": "" },
  { "cat": "video", "name": "VEED", "url": "https://www.veed.io", "price": "", "note": "", "note_en": "" },
  { "cat": "video", "name": "Hailuo AI", "url": "https://hailuoai.video", "price": "", "note": "", "note_en": "" },
  { "cat": "video", "name": "Kling AI", "url": "https://klingai.com", "price": "", "note": "", "note_en": "" },
  { "cat": "video", "name": "X-Pilot", "url": "https://x-pilot.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "video", "name": "Pippit", "url": "https://www.pippit.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "video", "name": "Wan AI", "url": "https://wan.video", "price": "", "note": "", "note_en": "" },
  { "cat": "video", "name": "MagicLight", "url": "https://magiclight.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "video", "name": "Synthesia", "url": "https://www.synthesia.io", "price": "", "note": "", "note_en": "" },
  { "cat": "video", "name": "Pictory", "url": "https://pictory.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "video", "name": "WayinVideo", "url": "https://wayin.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "video", "name": "FlexClip", "url": "https://www.flexclip.com", "price": "", "note": "", "note_en": "" },
  { "cat": "video", "name": "Topview", "url": "https://www.topview.ai", "price": "", "note": "", "note_en": "" },

  // الصوت وتحويل النص إلى كلام
  { "cat": "voice", "name": "ElevenLabs", "url": "https://elevenlabs.io", "price": "freemium", "note": "", "note_en": "" },
  { "cat": "voice", "name": "NaturalReader", "url": "https://www.naturalreaders.com", "price": "", "note": "", "note_en": "" },
  { "cat": "voice", "name": "TTSMaker", "url": "https://ttsmaker.com", "price": "", "note": "", "note_en": "" },
  { "cat": "voice", "name": "PlayHT", "url": "https://play.ht", "price": "", "note": "", "note_en": "" },
  { "cat": "voice", "name": "Sesame", "url": "https://www.sesame.com", "price": "", "note": "", "note_en": "" },
  { "cat": "voice", "name": "Hume AI", "url": "https://www.hume.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "voice", "name": "MiniMax Audio", "url": "https://www.minimax.io", "price": "", "note": "", "note_en": "" },
  { "cat": "voice", "name": "Vapi", "url": "https://vapi.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "voice", "name": "Camb.AI", "url": "https://www.camb.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "voice", "name": "Cartesia", "url": "https://cartesia.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "voice", "name": "OpenAI.fm", "url": "https://www.openai.fm", "price": "", "note": "", "note_en": "" },

  // التفريغ النصي والاجتماعات
  { "cat": "transcribe", "name": "TurboScribe", "url": "https://turboscribe.ai", "price": "freemium", "note": "تفريغ الصوت إلى نص.", "note_en": "Audio-to-text transcription." },
  { "cat": "transcribe", "name": "Wispr Flow", "url": "https://wisprflow.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "transcribe", "name": "Tactiq", "url": "https://tactiq.io", "price": "", "note": "", "note_en": "" },
  { "cat": "transcribe", "name": "Dictation.io", "url": "https://dictation.io", "price": "", "note": "", "note_en": "" },
  { "cat": "transcribe", "name": "YouTube Transcript", "url": "https://youtubetranscript.com", "price": "", "note": "", "note_en": "" },
  { "cat": "transcribe", "name": "ScreenApp", "url": "https://screenapp.io", "price": "", "note": "", "note_en": "" },
  { "cat": "transcribe", "name": "VideoTranscriber", "url": "https://videotranscriber.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "transcribe", "name": "Fireflies.ai", "url": "https://fireflies.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "transcribe", "name": "Otter.ai", "url": "https://otter.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "transcribe", "name": "Read AI", "url": "https://www.read.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "transcribe", "name": "YouTube Transcript Generator", "url": "https://youtube-transcript.io", "price": "", "note": "", "note_en": "" },
  { "cat": "transcribe", "name": "YouTube to Transcript", "url": "https://youtubetotranscript.com", "price": "", "note": "", "note_en": "" },
  { "cat": "transcribe", "name": "Supernormal", "url": "https://www.supernormal.com", "price": "", "note": "", "note_en": "" },

  // الموسيقى
  { "cat": "music", "name": "Suno", "url": "https://suno.com", "price": "", "note": "", "note_en": "" },

  // بناء المواقع والتطبيقات
  { "cat": "builders", "name": "v0 by Vercel", "url": "https://v0.app", "price": "", "note": "", "note_en": "" },
  { "cat": "builders", "name": "Shogo", "url": "https://studio.shogo.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "builders", "name": "Replit", "url": "https://replit.com", "price": "", "note": "", "note_en": "" },
  { "cat": "builders", "name": "Lovable", "url": "https://lovable.dev", "price": "", "note": "", "note_en": "" },
  { "cat": "builders", "name": "Stitch (Google)", "url": "https://stitch.withgoogle.com", "price": "", "note": "", "note_en": "" },
  { "cat": "builders", "name": "Macaly", "url": "https://macaly.com", "price": "", "note": "", "note_en": "" },
  { "cat": "builders", "name": "MGX (MetaGPT X)", "url": "https://mgx.dev", "price": "", "note": "", "note_en": "" },
  { "cat": "builders", "name": "Rocket.new", "url": "https://rocket.new", "price": "", "note": "", "note_en": "" },
  { "cat": "builders", "name": "Websim", "url": "https://websim.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "builders", "name": "Wegic", "url": "https://wegic.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "builders", "name": "Dora", "url": "https://www.dora.run", "price": "", "note": "", "note_en": "" },
  { "cat": "builders", "name": "Bolt", "url": "https://bolt.new", "price": "", "note": "", "note_en": "" },
  { "cat": "builders", "name": "Framer", "url": "https://www.framer.com", "price": "", "note": "", "note_en": "" },
  { "cat": "builders", "name": "Anything", "url": "https://www.createanything.com", "price": "", "note": "", "note_en": "" },
  { "cat": "builders", "name": "Blink", "url": "https://blink.new", "price": "", "note": "", "note_en": "" },
  { "cat": "builders", "name": "Rork", "url": "https://rork.com", "price": "", "note": "", "note_en": "" },
  { "cat": "builders", "name": "Atoms", "url": "https://atoms.dev", "price": "", "note": "", "note_en": "" },

  // الأتمتة وسير العمل
  { "cat": "automation", "name": "PUNKU.AI", "url": "https://punku.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "automation", "name": "Gumloop", "url": "https://www.gumloop.com", "price": "", "note": "", "note_en": "" },
  { "cat": "automation", "name": "Axiom.ai", "url": "https://axiom.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "automation", "name": "Magic Loops", "url": "https://magicloops.dev", "price": "", "note": "", "note_en": "" },
  { "cat": "automation", "name": "Opal (Google)", "url": "https://opal.google", "price": "", "note": "", "note_en": "" },
  { "cat": "automation", "name": "Make", "url": "https://www.make.com", "price": "", "note": "", "note_en": "" },
  { "cat": "automation", "name": "n8n", "url": "https://n8n.io", "price": "", "note": "", "note_en": "" },
  { "cat": "automation", "name": "Sim", "url": "https://sim.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "automation", "name": "Blotato", "url": "https://www.blotato.com", "price": "", "note": "", "note_en": "" },
  { "cat": "automation", "name": "Composio", "url": "https://composio.dev", "price": "", "note": "", "note_en": "" },

  // هندسة الأوامر
  { "cat": "prompts", "name": "droPrompt", "url": "https://droprompt.com", "price": "", "note": "", "note_en": "" },
  { "cat": "prompts", "name": "Awesome ChatGPT Prompts", "url": "https://prompts.chat", "price": "", "note": "", "note_en": "" },
  { "cat": "prompts", "name": "Generate Prompt", "url": "https://generateprompt.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "prompts", "name": "Prompt Cowboy", "url": "https://promptcowboy.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "prompts", "name": "Prompt Engineering Guide", "url": "https://www.promptingguide.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "prompts", "name": "FlowGPT", "url": "https://flowgpt.com", "price": "", "note": "", "note_en": "" },
  { "cat": "prompts", "name": "God of Prompt", "url": "https://www.godofprompt.ai", "price": "", "note": "", "note_en": "" },

  // منصات المطورين
  { "cat": "dev", "name": "Hugging Face", "url": "https://huggingface.co", "price": "", "note": "", "note_en": "" },
  { "cat": "dev", "name": "21st.dev", "url": "https://21st.dev", "price": "", "note": "", "note_en": "" },
  { "cat": "dev", "name": "Cloudflare AI Playground", "url": "https://playground.ai.cloudflare.com", "price": "", "note": "", "note_en": "" },
  { "cat": "dev", "name": "Claude Developer Platform", "url": "https://platform.claude.com", "price": "", "note": "", "note_en": "" },
  { "cat": "dev", "name": "Google AI Studio", "url": "https://aistudio.google.com", "price": "", "note": "", "note_en": "" },
  { "cat": "dev", "name": "BLACKBOX AI", "url": "https://www.blackbox.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "dev", "name": "OpenAI Platform", "url": "https://platform.openai.com", "price": "", "note": "", "note_en": "" },
  { "cat": "dev", "name": "Cohere", "url": "https://cohere.com", "price": "", "note": "", "note_en": "" },
  { "cat": "dev", "name": "Gemini API", "url": "https://ai.google.dev", "price": "", "note": "", "note_en": "" },
  { "cat": "dev", "name": "Google Colab", "url": "https://colab.research.google.com", "price": "", "note": "", "note_en": "" },
  { "cat": "dev", "name": "Vertex AI Studio", "url": "https://cloud.google.com/vertex-ai", "price": "", "note": "", "note_en": "" },
  { "cat": "dev", "name": "Claude Code", "url": "https://code.claude.com", "price": "", "note": "", "note_en": "" },
  { "cat": "dev", "name": "Google Antigravity", "url": "https://antigravity.google", "price": "", "note": "", "note_en": "" },
  { "cat": "dev", "name": "Kiro", "url": "https://kiro.dev", "price": "", "note": "", "note_en": "" },
  { "cat": "dev", "name": "NVIDIA NIM", "url": "https://build.nvidia.com", "price": "", "note": "", "note_en": "" },

  // تشغيل النماذج محلياً
  { "cat": "local", "name": "Foundry Local", "url": "https://foundrylocal.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "local", "name": "ComfyUI", "url": "https://www.comfy.org", "price": "", "note": "", "note_en": "" },
  { "cat": "local", "name": "Jan", "url": "https://jan.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "local", "name": "Ollama", "url": "https://ollama.com", "price": "", "note": "", "note_en": "" },
  { "cat": "local", "name": "Pinokio", "url": "https://pinokio.co", "price": "", "note": "", "note_en": "" },

  // أدوات ومصادر عربية
  { "cat": "arabic", "name": "تعلّم Claude Code — أحمد نجدي", "url": "https://claude.nagdy.me", "price": "", "note": "", "note_en": "" },
  { "cat": "arabic", "name": "AItoolsBot", "url": "https://aitoolsbot.com", "price": "", "note": "", "note_en": "" },
  { "cat": "arabic", "name": "أوامر (Awamer)", "url": "https://awamer.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "arabic", "name": "لهجاتي (Lahajati)", "url": "https://lahajati.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "arabic", "name": "سَهَل AI", "url": "https://sahalai.com", "price": "", "note": "", "note_en": "" },
  { "cat": "arabic", "name": "شكّلي — التشكيل الآلي", "url": "https://tashkeel.alsharekh.org", "price": "", "note": "", "note_en": "" },

  // كشف النص المولّد آلياً
  { "cat": "detect", "name": "GPTZero", "url": "https://gptzero.me", "price": "freemium", "note": "نتائج هذه الأدوات احتمالية وليست دليلاً قاطعاً.", "note_en": "Detector results are probabilistic, not conclusive proof." },
  { "cat": "detect", "name": "Copyleaks", "url": "https://copyleaks.com", "price": "freemium", "note": "", "note_en": "" },
  { "cat": "detect", "name": "Originality.ai", "url": "https://originality.ai", "price": "", "note": "", "note_en": "" },

  // أدلة أدوات الذكاء الاصطناعي
  { "cat": "directories", "name": "Future Tools", "url": "https://www.futuretools.io", "price": "", "note": "", "note_en": "" },
  { "cat": "directories", "name": "Awesome Claude", "url": "https://awesomeclaude.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "directories", "name": "Agent Skills Directory", "url": "https://skills.sh", "price": "", "note": "", "note_en": "" },
  { "cat": "directories", "name": "AIxploria", "url": "https://www.aixploria.com", "price": "", "note": "", "note_en": "" },
  { "cat": "directories", "name": "AI Tools Directory", "url": "https://aitoolsdirectory.com", "price": "", "note": "", "note_en": "" },
  { "cat": "directories", "name": "aitools.fyi", "url": "https://aitools.fyi", "price": "", "note": "", "note_en": "" },
  { "cat": "directories", "name": "All Things AI", "url": "https://allthingsai.com", "price": "", "note": "", "note_en": "" },
  { "cat": "directories", "name": "Futurepedia", "url": "https://www.futurepedia.io", "price": "", "note": "", "note_en": "" },
  { "cat": "directories", "name": "Insidr.ai", "url": "https://www.insidr.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "directories", "name": "funfun.tools", "url": "https://funfun.tools", "price": "", "note": "", "note_en": "" },
  { "cat": "directories", "name": "TopAI.tools", "url": "https://topai.tools", "price": "", "note": "", "note_en": "" },
  { "cat": "directories", "name": "Toolify", "url": "https://www.toolify.ai", "price": "", "note": "", "note_en": "" },

  // تعلّم الذكاء الاصطناعي
  { "cat": "learn", "name": "Anthropic Academy", "url": "https://www.anthropic.com/learn", "price": "free", "note": "", "note_en": "" },
  { "cat": "learn", "name": "Google AI Essentials", "url": "https://grow.google/ai-essentials/", "price": "paid", "note": "", "note_en": "" },
  { "cat": "learn", "name": "Elements of AI", "url": "https://www.elementsofai.com", "price": "free", "note": "", "note_en": "" },
  { "cat": "learn", "name": "There's An AI For That", "url": "https://theresanaiforthat.com", "price": "free", "note": "دليل للبحث عن أي أداة.", "note_en": "A directory for finding any AI tool." },
  { "cat": "learn", "name": "DeepLearning.AI", "url": "https://www.deeplearning.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "learn", "name": "Founderz", "url": "https://learn.founderz.com", "price": "", "note": "", "note_en": "" },
  { "cat": "learn", "name": "Claude Academy", "url": "https://academy.claude.com", "price": "", "note": "", "note_en": "" },
  { "cat": "learn", "name": "Anthropic Courses", "url": "https://anthropic.skilljar.com", "price": "", "note": "", "note_en": "" },
  { "cat": "learn", "name": "TestingCatalog", "url": "https://www.testingcatalog.com", "price": "", "note": "", "note_en": "" },
  { "cat": "learn", "name": "The Rundown AI", "url": "https://www.rundown.ai", "price": "", "note": "", "note_en": "" },
  { "cat": "learn", "name": "UAE AI Office", "url": "https://ai.gov.ae", "price": "", "note": "", "note_en": "" },
  { "cat": "learn", "name": "Claude 101", "url": "https://claude101.com", "price": "", "note": "", "note_en": "" },
  { "cat": "learn", "name": "OpenAI Academy", "url": "https://academy.openai.com", "price": "", "note": "", "note_en": "" },
  { "cat": "learn", "name": "Kaggle Learn", "url": "https://www.kaggle.com/learn", "price": "", "note": "", "note_en": "" },
  { "cat": "learn", "name": "Learn Anything", "url": "https://learn-anything.xyz", "price": "", "note": "", "note_en": "" },
  { "cat": "learn", "name": "Google Skills", "url": "https://www.skills.google", "price": "", "note": "", "note_en": "" },
  { "cat": "learn", "name": "Agentic AI Academy (UAE)", "url": "https://www.agenticaiacademy.ae", "price": "", "note": "", "note_en": "" }
];
