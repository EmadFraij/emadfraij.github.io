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
  intro: "دليل منتقى لأدوات الذكاء الاصطناعي التي أنصح بها المعلمين والباحثين وواضعي الاختبارات.",
  intro_en: "A curated directory of the AI tools I recommend to teachers, researchers and test developers.",
  updated: "2026-10-12",
  /* صورتك في أعلى الصفحة: ملف الصورة يكون بجانب index.html */
  photo: "photo.jpg",
  /* صورة قسم «من أنا» (اختيارية) */
  photo2: "photo-cartoon.jpg",
  about: "متخصص أول في التقييمات الدولية بوزارة التربية والتعليم الإماراتية، أعمل على دراسات PISA وTIMSS وPIRLS وTALIS وIELS. بدأت معلماً للعلوم، ثم مديراً للمشاريع في ACER، وأكثر من 25 عاماً في التعليم والتقييم. أصنع محتوى يساعد المعلمين على توظيف الذكاء الاصطناعي بوعي وفاعلية.",
  about_en: "Senior International Assessments Specialist at the UAE Ministry of Education, working on PISA, TIMSS, PIRLS, TALIS and IELS. A former science teacher and ACER project manager, with 25+ years in education and assessment. I create content that helps educators use AI thoughtfully and effectively.",
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
  { id: "detect", title: "كشف النص المولّد آلياً", en: "AI Text Detection" },
  { id: "directories", title: "أدلة أدوات الذكاء الاصطناعي", en: "AI Tool Directories" },
  { id: "learn", title: "تعلّم الذكاء الاصطناعي", en: "Learn AI" }
];

/* ---------- المجالات الكبرى: كل مجال يضم عدة أقسام ---------- */
window.DOMAINS = [
  { id: "talk",     title: "المحادثة والوكلاء",  en: "Chat & Agents",        cats: ["chat","multi","arena","agents"] },
  { id: "learn",    title: "البحث والتعلّم",      en: "Research & Learning",  cats: ["research","files","learn","directories","detect"] },
  { id: "edu",      title: "التعليم والتقييم",    en: "Teaching & Assessment", cats: ["teacher","assess","intl","data"] },
  { id: "create",   title: "صناعة المحتوى",       en: "Content Creation",     cats: ["writing","translate","slides","infographic","mindmap","images","video","voice","transcribe","music"] },
  { id: "build",    title: "البناء والأتمتة",     en: "Build & Automate",     cats: ["builders","automation","prompts","dev","local"] }
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
  { "cat": "chat", "name": "ChatGPT", "url": "https://chatgpt.com", "price": "freemium", "note": "المساعد الأشهر من OpenAI للكتابة والتحليل والبرمجة وتوليد الصور، ويدعم المحادثة الصوتية.", "note_en": "OpenAI's flagship assistant for writing, analysis, coding and image generation, with voice chat." },
  { "cat": "chat", "name": "Claude", "url": "https://claude.ai", "price": "freemium", "note": "مساعد Anthropic المتميز في الكتابة العربية الطويلة والتحليل العميق وبناء الأدوات التفاعلية.", "note_en": "Anthropic's assistant, strong at long-form writing, deep analysis and building interactive tools." },
  { "cat": "chat", "name": "Gemini", "url": "https://gemini.google.com", "price": "freemium", "note": "مساعد Google المتكامل مع Gmail وDrive، ويتميّز بالبحث العميق وتحليل الملفات الطويلة.", "note_en": "Google's assistant, integrated with Gmail and Drive, strong at deep research and long files." },
  { "cat": "chat", "name": "Microsoft Copilot", "url": "https://copilot.microsoft.com", "price": "freemium", "note": "مساعد Microsoft المدمج في Windows وOffice، مفيد للبحث وصياغة المستندات.", "note_en": "Microsoft's assistant built into Windows and Office, handy for search and drafting documents." },
  { "cat": "chat", "name": "Perplexity", "url": "https://www.perplexity.ai", "price": "freemium", "note": "بحث على الويب مع ذكر المصادر.", "note_en": "Web search with cited sources." },
  { "cat": "chat", "name": "DeepSeek", "url": "https://chat.deepseek.com", "price": "free", "note": "نموذج صيني مفتوح المصدر قوي في الرياضيات والبرمجة والتفكير المنطقي، ومجاني الاستخدام.", "note_en": "A strong open-source Chinese model for maths, coding and reasoning, free to use." },
  { "cat": "chat", "name": "HIX AI", "url": "https://hix.ai", "price": "", "note": "منصة تجمع عدة نماذج للمحادثة مع أدوات جاهزة للكتابة وإعادة الصياغة.", "note_en": "A platform bundling several chat models with ready-made writing and rewriting tools." },
  { "cat": "chat", "name": "Qwen", "url": "https://chat.qwen.ai", "price": "", "note": "مساعد Alibaba متعدد القدرات، يدعم العربية والصور والملفات بنماذج مفتوحة المصدر.", "note_en": "Alibaba's versatile assistant with open models, supporting Arabic, images and files." },
  { "cat": "chat", "name": "Z.ai (GLM)", "url": "https://chat.z.ai", "price": "", "note": "واجهة المحادثة لنماذج GLM الصينية، قوية في البرمجة ومهام الوكلاء.", "note_en": "The chat interface for China's GLM models, strong at coding and agentic tasks." },
  { "cat": "chat", "name": "Kimi", "url": "https://www.kimi.com", "price": "", "note": "مساعد Moonshot AI بسياق طويل جداً، ممتاز لقراءة الوثائق الكبيرة والبرمجة.", "note_en": "Moonshot AI's assistant with a very long context, great for large documents and coding." },
  { "cat": "chat", "name": "Grok", "url": "https://grok.com", "price": "", "note": "مساعد xAI المرتبط بمنصة X، مفيد لمتابعة الأخبار والنقاشات الآنية.", "note_en": "xAI's assistant linked to X, useful for following live news and discussions." },
  { "cat": "chat", "name": "LongCat", "url": "https://longcat.chat", "price": "", "note": "مساعد محادثة من Meituan بنماذج سريعة مفتوحة المصدر.", "note_en": "A chat assistant from Meituan running fast open-source models." },
  { "cat": "chat", "name": "iAsk", "url": "https://iask.ai", "price": "", "note": "محرك إجابات يبحث في الويب ويقدّم ردوداً مباشرة مختصرة.", "note_en": "An answer engine that searches the web and returns short, direct answers." },
  { "cat": "chat", "name": "Felo", "url": "https://felo.ai", "price": "", "note": "محرك بحث بالذكاء الاصطناعي يدعم العربية ويحوّل النتائج إلى عروض وخرائط ذهنية.", "note_en": "An AI search engine that supports Arabic and turns results into slides and mind maps." },
  { "cat": "chat", "name": "Phind", "url": "https://www.phind.com", "price": "", "note": "محرك بحث موجّه للمبرمجين يجيب عن الأسئلة التقنية مع المصادر.", "note_en": "A search engine for developers that answers technical questions with sources." },
  { "cat": "chat", "name": "You.com", "url": "https://you.com", "price": "", "note": "محرك بحث ومساعد محادثة يجمع نتائج الويب مع إجابات الذكاء الاصطناعي.", "note_en": "A search engine and chat assistant combining web results with AI answers." },
  { "cat": "chat", "name": "K2 Think (MBZUAI)", "url": "https://www.k2think.ai", "price": "", "note": "نموذج تفكير منطقي من جامعة محمد بن زايد للذكاء الاصطناعي في أبوظبي.", "note_en": "A reasoning model from Mohamed bin Zayed University of AI in Abu Dhabi." },
  { "cat": "chat", "name": "Xiaomi MiMo Studio", "url": "https://aistudio.xiaomimimo.com", "price": "", "note": "منصة Xiaomi لتجربة نماذج MiMo في المحادثة والتفكير المنطقي.", "note_en": "Xiaomi's platform for trying its MiMo models for chat and reasoning." },
  { "cat": "chat", "name": "Duck.ai", "url": "https://duck.ai", "price": "", "note": "محادثة مع عدة نماذج عبر DuckDuckGo مع حماية الخصوصية ودون تسجيل.", "note_en": "Chat with several models through DuckDuckGo, privacy-protected and without sign-up." },

  // منصات متعددة النماذج
  { "cat": "multi", "name": "Multi (GetMulti)", "url": "https://getmulti.ai", "price": "", "note": "يرسل سؤالك إلى عدة نماذج دفعة واحدة لتقارن إجاباتها جنباً إلى جنب.", "note_en": "Sends one prompt to several models at once so you can compare answers side by side." },
  { "cat": "multi", "name": "Merlin", "url": "https://www.getmerlin.in", "price": "", "note": "إضافة للمتصفح تتيح ChatGPT وClaude وغيرهما فوق أي صفحة، مع تلخيص الفيديو والمقالات.", "note_en": "A browser extension bringing ChatGPT, Claude and others to any page, with video and article summaries." },
  { "cat": "multi", "name": "OpenRouter", "url": "https://openrouter.ai", "price": "", "note": "بوابة موحّدة لمئات النماذج مع تصنيف لأكثرها استخداماً وأسعارها.", "note_en": "One gateway to hundreds of models, with rankings of usage and prices." },
  { "cat": "multi", "name": "Expertex AI", "url": "https://www.expertex.ai", "price": "", "note": "ساحة لتجربة نماذج متعددة ومقارنتها في واجهة واحدة.", "note_en": "A playground for trying and comparing multiple models in one interface." },
  { "cat": "multi", "name": "Poe", "url": "https://poe.com", "price": "", "note": "منصة Quora لاستخدام عشرات النماذج وبناء روبوتات محادثة مخصصة.", "note_en": "Quora's platform for using dozens of models and building custom chatbots." },
  { "cat": "multi", "name": "eye2.ai", "url": "https://eye2.ai", "price": "", "note": "يعرض إجابات عدة نماذج على السؤال نفسه ويبيّن مواضع اتفاقها واختلافها.", "note_en": "Shows several models' answers to the same question and where they agree or differ." },

  // مقارنة النماذج وتقييمها
  { "cat": "arena", "name": "Artificial Analysis", "url": "https://artificialanalysis.ai", "price": "", "note": "مقارنات مستقلة لجودة النماذج وسرعتها وأسعارها برسوم بيانية واضحة.", "note_en": "Independent benchmarks of model quality, speed and price with clear charts." },
  { "cat": "arena", "name": "LMArena", "url": "https://lmarena.ai", "price": "", "note": "ساحة يقيّم فيها المستخدمون النماذج بالتصويت الأعمى، ومنها الترتيب الأشهر للنماذج.", "note_en": "An arena where users rate models in blind votes, producing the best-known leaderboard." },
  { "cat": "arena", "name": "Arena", "url": "https://arena.ai", "price": "", "note": "ساحة لمقارنة نماذج توليد الصور والنصوص بالتصويت الأعمى.", "note_en": "An arena for comparing image and text models through blind voting." },
  { "cat": "arena", "name": "Design Arena", "url": "https://www.designarena.ai", "price": "", "note": "يقارن قدرة النماذج على تصميم الواجهات والمواقع بالتصويت.", "note_en": "Compares how well models design interfaces and websites, by vote." },
  { "cat": "arena", "name": "Yupp", "url": "https://yupp.ai", "price": "", "note": "جرّب نماذج متعددة مجاناً وقيّم إجاباتها لتساهم في ترتيبها.", "note_en": "Try many models for free and rate their answers to help rank them." },

  // الوكلاء الأذكياء
  { "cat": "agents", "name": "AshnaAI", "url": "https://app.ashna.ai", "price": "", "note": "مساعد ذكي ومنصة لبناء وكلاء دون برمجة.", "note_en": "An AI assistant and no-code platform for building agents." },
  { "cat": "agents", "name": "Manus", "url": "https://manus.im", "price": "", "note": "وكيل ذكي ينفّذ مهام متعددة الخطوات وحده، من البحث إلى بناء المواقع والتقارير.", "note_en": "An autonomous agent that runs multi-step tasks, from research to building sites and reports." },
  { "cat": "agents", "name": "MiniMax Agent", "url": "https://agent.minimax.io", "price": "", "note": "وكيل من MiniMax ينفّذ مهام البحث والبرمجة وإعداد المحتوى بخطوات تلقائية.", "note_en": "MiniMax's agent that handles research, coding and content tasks automatically." },
  { "cat": "agents", "name": "Genspark", "url": "https://www.genspark.ai", "price": "", "note": "مساحة عمل بوكلاء أذكياء تنتج عروضاً وجداول وتقارير بحثية من طلب واحد.", "note_en": "An agent workspace that produces slides, sheets and research reports from a single request." },
  { "cat": "agents", "name": "Flowith", "url": "https://flowith.io", "price": "", "note": "مساحة إبداعية على لوحة مفتوحة تربط المحادثات بقاعدة معرفتك.", "note_en": "An open-canvas creative workspace that connects chats to your knowledge base." },
  { "cat": "agents", "name": "Skywork", "url": "https://skywork.ai", "price": "", "note": "وكيل ينتج مستندات وعروضاً وجداول بحثية معمّقة من مصادر متعددة.", "note_en": "An agent that creates in-depth documents, slides and sheets from multiple sources." },
  { "cat": "agents", "name": "Lyzr", "url": "https://www.lyzr.ai", "price": "", "note": "منصة لبناء وكلاء ذكاء اصطناعي للمؤسسات بقوالب جاهزة.", "note_en": "A platform for building enterprise AI agents from ready templates." },
  { "cat": "agents", "name": "Runable", "url": "https://runable.com", "price": "", "note": "وكيل عام ينفّذ مهام مثل إعداد العروض والتقارير والمواقع.", "note_en": "A general agent that handles tasks like slides, reports and websites." },
  { "cat": "agents", "name": "Tasklet", "url": "https://tasklet.ai", "price": "", "note": "وكيل يؤتمت مهامك اليومية بربط تطبيقاتك ووصف المهمة بلغة طبيعية.", "note_en": "An agent that automates daily tasks by connecting your apps and describing the job in plain language." },

  // البحث الأكاديمي
  { "cat": "research", "name": "Google Scholar", "url": "https://scholar.google.com", "price": "free", "note": "محرك Google للبحث في الأوراق والكتب العلمية ومتابعة الاقتباسات.", "note_en": "Google's search engine for scholarly papers and books, with citation tracking." },
  { "cat": "research", "name": "Semantic Scholar", "url": "https://www.semanticscholar.org", "price": "free", "note": "محرك بحث أكاديمي مجاني يلخّص الأوراق ويقترح الأبحاث المرتبطة.", "note_en": "A free academic search engine that summarises papers and suggests related research." },
  { "cat": "research", "name": "Consensus", "url": "https://consensus.app", "price": "freemium", "note": "يجيب عن أسئلتك البحثية من أوراق علمية محكّمة، ويبيّن مدى اتفاق الدراسات.", "note_en": "Answers research questions from peer-reviewed papers and shows how far studies agree." },
  { "cat": "research", "name": "Elicit", "url": "https://elicit.com", "price": "freemium", "note": "استخراج النتائج من الأوراق في جداول.", "note_en": "Extracts findings from papers into tables." },
  { "cat": "research", "name": "SciSpace", "url": "https://scispace.com", "price": "freemium", "note": "مساعد بحثي يشرح الأوراق العلمية ويجيب عن أسئلتك حولها ويستخرج منها.", "note_en": "A research assistant that explains papers, answers questions about them and extracts data." },
  { "cat": "research", "name": "ResearchRabbit", "url": "https://www.researchrabbit.ai", "price": "free", "note": "خرائط الأوراق المرتبطة ببعضها.", "note_en": "Maps of connected papers." },
  { "cat": "research", "name": "Explainpaper", "url": "https://www.explainpaper.com", "price": "", "note": "ارفع ورقة علمية وظلّل أي فقرة صعبة ليشرحها لك بلغة مبسطة.", "note_en": "Upload a paper and highlight any hard passage to get a plain-language explanation." },
  { "cat": "research", "name": "Illuminate (Google)", "url": "https://illuminate.google.com", "price": "", "note": "يحوّل الأوراق العلمية والكتب إلى حوارات صوتية قصيرة تشبه البودكاست.", "note_en": "Turns papers and books into short podcast-style audio conversations." },
  { "cat": "research", "name": "RefSeek", "url": "https://www.refseek.com", "price": "", "note": "محرك بحث أكاديمي يركّز على المصادر العلمية والتعليمية دون إعلانات.", "note_en": "An academic search engine focused on scholarly and educational sources, ad-free." },
  { "cat": "research", "name": "Bohrium", "url": "https://www.bohrium.com", "price": "", "note": "منصة علمية للبحث في الأوراق وقراءتها بمساعدة الذكاء الاصطناعي.", "note_en": "A science platform for searching and reading papers with AI help." },

  // قراءة الملفات وتلخيصها
  { "cat": "files", "name": "NotebookLM", "url": "https://notebooklm.google.com", "price": "free", "note": "اسأل ملفاتك ومصادرك، وولّد منها ملخصات صوتية وخرائط ذهنية.", "note_en": "Ask your own sources and generate audio overviews and mind maps from them." },
  { "cat": "files", "name": "ChatPDF", "url": "https://www.chatpdf.com", "price": "freemium", "note": "ارفع أي ملف PDF واسأله بالمحادثة، مع الإشارة إلى الصفحات.", "note_en": "Upload any PDF and chat with it, with page references." },
  { "cat": "files", "name": "Humata", "url": "https://www.humata.ai", "price": "freemium", "note": "يحلّل ملفات PDF الطويلة ويجيب عن الأسئلة مع إبراز المقاطع المصدر.", "note_en": "Analyses long PDFs and answers questions while highlighting source passages." },
  { "cat": "files", "name": "NoteGPT", "url": "https://notegpt.io", "price": "", "note": "يلخّص فيديوهات YouTube وملفات PDF والمقالات، ويصنع منها ملاحظات وبطاقات.", "note_en": "Summarises YouTube videos, PDFs and articles into notes and flashcards." },
  { "cat": "files", "name": "AskYourPDF", "url": "https://askyourpdf.com", "price": "", "note": "محادثة مع ملفات PDF واستخراج المعلومات منها، مع إضافة للمتصفح.", "note_en": "Chat with PDFs and extract information, with a browser extension." },
  { "cat": "files", "name": "ChatDOC", "url": "https://chatdoc.com", "price": "", "note": "قراءة المستندات والجداول بالمحادثة مع إحالات دقيقة إلى مواضع الإجابة.", "note_en": "Read documents and tables by chat, with precise references to where answers come from." },
  { "cat": "files", "name": "EaseMate", "url": "https://www.easemate.ai", "price": "", "note": "أدوات متعددة لقراءة الملفات وتلخيصها وترجمتها واستخراج النص من الصور.", "note_en": "Multiple tools to read, summarise and translate files and extract text from images." },
  { "cat": "files", "name": "PDF.ai", "url": "https://pdf.ai", "price": "", "note": "محادثة مع مستندات PDF واستخراج الإجابات والملخصات منها.", "note_en": "Chat with PDF documents to pull out answers and summaries." },
  { "cat": "files", "name": "YouLearn", "url": "https://www.youlearn.ai", "price": "", "note": "يحوّل المحاضرات والفيديوهات والملفات إلى ملخصات واختبارات وبطاقات مراجعة.", "note_en": "Turns lectures, videos and files into summaries, quizzes and flashcards." },
  { "cat": "files", "name": "Recall", "url": "https://www.getrecall.ai", "price": "", "note": "يحفظ ما تقرؤه وتشاهده ويلخّصه في قاعدة معرفة شخصية مترابطة.", "note_en": "Saves and summarises what you read and watch into a connected personal knowledge base." },
  { "cat": "files", "name": "UPDF AI", "url": "https://ai.updf.com", "price": "", "note": "مساعد لقراءة ملفات PDF وتلخيصها وترجمتها والمحادثة معها.", "note_en": "An assistant to read, summarise, translate and chat with PDFs." },
  { "cat": "files", "name": "YouMind", "url": "https://youmind.com", "price": "", "note": "مساحة لجمع المصادر من الويب والملفات وكتابة المحتوى بمساعدة الذكاء الاصطناعي.", "note_en": "A space to collect sources from the web and files and write with AI help." },

  // مساعد المعلم والتخطيط
  { "cat": "teacher", "name": "MagicSchool", "url": "https://www.magicschool.ai", "price": "freemium", "note": "عشرات الأدوات الجاهزة للخطط والأنشطة.", "note_en": "Dozens of ready-made tools for plans and activities." },
  { "cat": "teacher", "name": "SchoolAI", "url": "https://schoolai.com", "price": "freemium", "note": "منصة صفية يصمّم فيها المعلم مساعدين ذكيين للطلبة ويتابع تفاعلهم.", "note_en": "A classroom platform where teachers build AI helpers for students and monitor their use." },
  { "cat": "teacher", "name": "Diffit", "url": "https://web.diffit.me", "price": "freemium", "note": "تكييف النصوص لمستويات قرائية مختلفة.", "note_en": "Adapts texts to different reading levels." },
  { "cat": "teacher", "name": "Eduaide", "url": "https://www.eduaide.ai", "price": "freemium", "note": "أكثر من 100 أداة لتصميم الأنشطة والدروس والتقييمات بسرعة.", "note_en": "Over 100 tools for designing activities, lessons and assessments quickly." },
  { "cat": "teacher", "name": "Coursebox", "url": "https://www.coursebox.ai", "price": "", "note": "ينشئ دورات تدريبية كاملة بالوحدات والاختبارات من موضوع أو ملف.", "note_en": "Builds complete courses with modules and quizzes from a topic or file." },
  { "cat": "teacher", "name": "Brisk Teaching", "url": "https://www.briskteaching.com", "price": "", "note": "إضافة Chrome للمعلم تصنع خططاً واختبارات وتغذية راجعة داخل Google Docs.", "note_en": "A Chrome extension that creates plans, quizzes and feedback inside Google Docs." },
  { "cat": "teacher", "name": "Learn Your Way (Google)", "url": "https://learnyourway.withgoogle.com", "price": "", "note": "تجربة من Google تعيد صياغة المحتوى الدراسي حسب اهتمامات الطالب ومستواه.", "note_en": "A Google experiment that reshapes study material to the learner's interests and level." },
  { "cat": "teacher", "name": "GPAI (STEM)", "url": "https://gpai.app", "price": "", "note": "مساعد لحل أسئلة العلوم والرياضيات خطوة بخطوة.", "note_en": "A step-by-step solver for science and maths questions." },
  { "cat": "teacher", "name": "Workbookly", "url": "https://workbookly.app", "price": "", "note": "يحوّل فيديوهات YouTube إلى كراسات تفاعلية بأسئلة وأنشطة.", "note_en": "Turns YouTube videos into interactive workbooks with questions and activities." },

  // التقويم وبناء الاختبارات
  { "cat": "assess", "name": "Conker", "url": "https://www.conker.ai", "price": "freemium", "note": "توليد اختبارات قصيرة من موضوع أو نص.", "note_en": "Generates quizzes from a topic or text." },
  { "cat": "assess", "name": "Kahoot!", "url": "https://kahoot.com", "price": "freemium", "note": "اختبارات تفاعلية بأسلوب الألعاب يشارك فيها الطلبة من أجهزتهم.", "note_en": "Game-style interactive quizzes that students join from their devices." },
  { "cat": "assess", "name": "Socrative", "url": "https://www.socrative.com", "price": "freemium", "note": "اختبارات سريعة وأسئلة خروج مع نتائج فورية للمعلم.", "note_en": "Quick quizzes and exit tickets with instant results for the teacher." },
  { "cat": "assess", "name": "Google Forms", "url": "https://forms.google.com", "price": "free", "note": "إنشاء اختبارات واستبانات وتصحيحها تلقائياً ضمن Google Workspace.", "note_en": "Create and auto-grade quizzes and surveys within Google Workspace." },
  { "cat": "assess", "name": "HelpTeaching", "url": "https://www.helpteaching.com", "price": "", "note": "بنك أسئلة وأوراق عمل جاهزة مع مولّد أسئلة بالذكاء الاصطناعي.", "note_en": "A bank of ready questions and worksheets with an AI question generator." },
  { "cat": "assess", "name": "Mentimeter", "url": "https://www.mentimeter.com", "price": "", "note": "عروض تفاعلية بتصويت واستطلاعات وسحب كلمات مباشرة مع الجمهور.", "note_en": "Interactive presentations with live polls, quizzes and word clouds." },
  { "cat": "assess", "name": "QuestionWell", "url": "https://www.questionwell.org", "price": "", "note": "يولّد أسئلة وأهداف تعلم من أي نص أو موضوع ويصدّرها لمنصات الاختبار.", "note_en": "Generates questions and learning objectives from any text and exports them to quiz platforms." },

  // التقييمات الدولية — مصادر رسمية
  { "cat": "intl", "name": "TIMSS & PIRLS (IEA)", "url": "https://timssandpirls.bc.edu", "price": "free", "note": "التقارير والأطر والأسئلة المنشورة.", "note_en": "Reports, frameworks and released items." },
  { "cat": "intl", "name": "IEA", "url": "https://www.iea.nl", "price": "free", "note": "الدراسات والبيانات وأدوات التحليل الرسمية.", "note_en": "Studies, data and official analysis tools." },
  { "cat": "intl", "name": "OECD PISA", "url": "https://www.oecd.org/en/about/programmes/pisa.html", "price": "free", "note": "الموقع الرسمي لدراسة PISA: النتائج والتقارير والأطر المرجعية.", "note_en": "The official PISA site: results, reports and assessment frameworks." },
  { "cat": "intl", "name": "OECD TALIS", "url": "https://www.oecd.org/en/about/programmes/talis.html", "price": "free", "note": "الموقع الرسمي لدراسة TALIS عن المعلمين ومديري المدارس وبيئات التعلم.", "note_en": "The official TALIS site on teachers, school leaders and learning environments." },
  { "cat": "intl", "name": "PISA Data Explorer", "url": "https://pisadataexplorer.oecd.org", "price": "", "note": "أداة رسمية لاستخراج جداول نتائج PISA ومقارنتها بين الدول والمجموعات.", "note_en": "The official tool for building and comparing PISA results tables across countries and groups." },
  { "cat": "intl", "name": "TIMSS 2023", "url": "https://timss2023.org", "price": "", "note": "الموقع الرسمي لنتائج TIMSS 2023 وتقاريرها وقاعدة بياناتها الدولية.", "note_en": "The official site for TIMSS 2023 results, reports and international database." },
  { "cat": "intl", "name": "PIRLS 2021", "url": "https://pirls2021.org", "price": "", "note": "الموقع الرسمي لنتائج PIRLS 2021 وتقاريرها وقاعدة بياناتها الدولية.", "note_en": "The official site for PIRLS 2021 results, reports and international database." },
  { "cat": "intl", "name": "TIMSS 2019", "url": "https://timss2019.org", "price": "", "note": "تقارير TIMSS 2019 الدولية والسياقات الصفية والمدرسية.", "note_en": "The TIMSS 2019 international reports and classroom and school contexts." },
  { "cat": "intl", "name": "OECD GPS Education", "url": "https://gpseducation.oecd.org", "price": "", "note": "ملفات تعليمية لكل دولة تجمع مؤشرات PISA وTALIS في صفحة واحدة.", "note_en": "Country education profiles combining PISA and TALIS indicators on one page." },
  { "cat": "intl", "name": "OECD Data Explorer", "url": "https://data-explorer.oecd.org", "price": "", "note": "مستكشف بيانات OECD الرسمي لاستخراج المؤشرات التعليمية وتنزيلها.", "note_en": "OECD's official data explorer for extracting and downloading education indicators." },
  { "cat": "intl", "name": "PISA 2025 Science Framework", "url": "https://pisa-framework.oecd.org", "price": "", "note": "الإطار المرجعي الرسمي لتقييم العلوم في PISA 2025.", "note_en": "The official PISA 2025 science assessment framework." },
  { "cat": "intl", "name": "NCES (IELS)", "url": "https://nces.ed.gov", "price": "", "note": "موقع المركز الوطني الأمريكي لإحصاءات التعليم، ومنه دراسة IELS للطفولة المبكرة.", "note_en": "The US National Center for Education Statistics, including the IELS early-learning study." },

  // تحليل البيانات وتصويرها
  { "cat": "data", "name": "Julius AI", "url": "https://julius.ai", "price": "freemium", "note": "تحليل جداول البيانات بالمحادثة.", "note_en": "Analyse spreadsheets by chatting." },
  { "cat": "data", "name": "Datawrapper", "url": "https://www.datawrapper.de", "price": "freemium", "note": "رسوم بيانية نظيفة جاهزة للنشر.", "note_en": "Clean, publication-ready charts." },
  { "cat": "data", "name": "Flourish", "url": "https://flourish.studio", "price": "freemium", "note": "رسوم بيانية وقصص بيانات تفاعلية قابلة للنشر دون برمجة.", "note_en": "Interactive charts and data stories you can publish without coding." },
  { "cat": "data", "name": "Data Viz Catalogue", "url": "https://datavizcatalogue.com", "price": "free", "note": "لاختيار نوع الرسم المناسب.", "note_en": "Helps you choose the right chart type." },
  { "cat": "data", "name": "Anomaly AI", "url": "https://www.findanomaly.ai", "price": "", "note": "ارفع بياناتك واسألها بلغة طبيعية لتحصل على تحليلات ورسوم.", "note_en": "Upload your data and ask questions in plain language to get analyses and charts." },
  { "cat": "data", "name": "Formula Bot", "url": "https://www.formulabot.com", "price": "", "note": "يحوّل وصفك إلى معادلات Excel وGoogle Sheets، ويحلّل الجداول.", "note_en": "Turns descriptions into Excel and Google Sheets formulas, and analyses tables." },
  { "cat": "data", "name": "hiData", "url": "https://hidata.ai", "price": "", "note": "معالجة البيانات وتحليلها بالمحادثة باللغة الطبيعية.", "note_en": "Process and analyse data by chatting in natural language." },
  { "cat": "data", "name": "Powerdrill", "url": "https://powerdrill.ai", "price": "", "note": "يحلّل ملفات البيانات ويولّد منها رسوماً وتقارير بالمحادثة.", "note_en": "Analyses data files and generates charts and reports through chat." },

  // الترجمة
  { "cat": "translate", "name": "DeepL", "url": "https://www.deepl.com", "price": "freemium", "note": "من أدق أدوات الترجمة الآلية، مع ترجمة ملفات Word وPDF كاملة.", "note_en": "One of the most accurate machine translators, with full Word and PDF translation." },
  { "cat": "translate", "name": "Google Translate", "url": "https://translate.google.com", "price": "free", "note": "ترجمة فورية لأكثر من 200 لغة للنصوص والمستندات والصور.", "note_en": "Instant translation for 200+ languages across text, documents and images." },
  { "cat": "translate", "name": "Reverso", "url": "https://www.reverso.net", "price": "freemium", "note": "أمثلة سياقية للمصطلحات.", "note_en": "Terms shown in real context." },
  { "cat": "translate", "name": "Online Doc Translator", "url": "https://www.onlinedoctranslator.com", "price": "", "note": "يترجم ملفات Word وPDF وExcel مع الحفاظ على تنسيقها.", "note_en": "Translates Word, PDF and Excel files while keeping their formatting." },
  { "cat": "translate", "name": "Yandex Translate", "url": "https://translate.yandex.com", "price": "", "note": "مترجم وقاموس مع ترجمة الصور والمواقع.", "note_en": "A translator and dictionary with image and website translation." },
  { "cat": "translate", "name": "Matecat", "url": "https://www.matecat.com", "price": "", "note": "أداة ترجمة احترافية بذاكرة ترجمة ومسارد، مناسبة لمشاريع الترجمة الكبيرة.", "note_en": "A professional CAT tool with translation memory and glossaries for large projects." },
  { "cat": "translate", "name": "OpenL", "url": "https://openl.io", "price": "", "note": "ترجمة بنماذج الذكاء الاصطناعي مع خيارات للأسلوب والتدقيق.", "note_en": "AI-model translation with options for style and proofreading." },
  { "cat": "translate", "name": "SYSTRAN", "url": "https://translate.systran.net", "price": "", "note": "ترجمة ملفات ونصوص احترافية بمحركات متخصصة حسب المجال.", "note_en": "Professional file and text translation with domain-specific engines." },
  { "cat": "translate", "name": "BlipCut Video Translator", "url": "https://www.blipcut.com", "price": "", "note": "يترجم الفيديوهات ويدبلجها بأصوات طبيعية مع ترجمة مكتوبة.", "note_en": "Translates and dubs videos with natural voices and subtitles." },

  // الكتابة والتدقيق
  { "cat": "writing", "name": "QuillBot", "url": "https://quillbot.com", "price": "freemium", "note": "إعادة صياغة النصوص وتدقيقها وتلخيصها، مع أدوات للاقتباس.", "note_en": "Paraphrases, proofreads and summarises text, with citation tools." },
  { "cat": "writing", "name": "Grammarly", "url": "https://www.grammarly.com", "price": "freemium", "note": "للنصوص الإنجليزية.", "note_en": "For English texts." },
  { "cat": "writing", "name": "Smodin", "url": "https://smodin.io", "price": "", "note": "أدوات كتابة وإعادة صياغة تدعم العربية، مع مدقق انتحال.", "note_en": "Writing and rewriting tools that support Arabic, with a plagiarism checker." },
  { "cat": "writing", "name": "Wordtune", "url": "https://www.wordtune.com", "price": "", "note": "يقترح صياغات بديلة لجملك ويلخّص المقالات الطويلة.", "note_en": "Suggests alternative phrasings and summarises long articles." },
  { "cat": "writing", "name": "GravityWrite", "url": "https://gravitywrite.com", "price": "", "note": "قوالب جاهزة لكتابة المقالات والمنشورات والمحتوى التسويقي.", "note_en": "Ready templates for writing articles, posts and marketing content." },
  { "cat": "writing", "name": "AI Doc Maker", "url": "https://aidocmaker.com", "price": "", "note": "ينشئ مستندات وملفات PDF كاملة من وصف مختصر.", "note_en": "Creates full documents and PDFs from a short description." },

  // العروض التقديمية
  { "cat": "slides", "name": "Gamma", "url": "https://gamma.app", "price": "freemium", "note": "ينشئ عروضاً تقديمية وصفحات ويب أنيقة من نص أو فكرة في دقائق.", "note_en": "Creates polished presentations and web pages from text or an idea in minutes." },
  { "cat": "slides", "name": "Canva", "url": "https://www.canva.com", "price": "freemium", "note": "منصة التصميم الأشهر للعروض والمنشورات والإنفوجرافيك، مع أدوات ذكاء اصطناعي.", "note_en": "The best-known design platform for slides, posts and infographics, with AI tools." },
  { "cat": "slides", "name": "Napkin", "url": "https://www.napkin.ai", "price": "freemium", "note": "تحويل النص إلى أشكال توضيحية.", "note_en": "Turns text into visuals." },
  { "cat": "slides", "name": "SlidesAI", "url": "https://www.slidesai.io", "price": "", "note": "يحوّل النص إلى شرائح داخل Google Slides مباشرة.", "note_en": "Turns text into slides directly inside Google Slides." },
  { "cat": "slides", "name": "Decktopus", "url": "https://www.decktopus.com", "price": "", "note": "ينشئ عروضاً تقديمية جاهزة بالتصميم والمحتوى من عنوان.", "note_en": "Builds ready-designed presentations from just a title." },
  { "cat": "slides", "name": "PopAi", "url": "https://www.popai.pro", "price": "", "note": "مساعد للعروض التقديمية وقراءة المستندات وكتابة المحتوى.", "note_en": "An assistant for presentations, reading documents and writing content." },
  { "cat": "slides", "name": "Chronicle", "url": "https://chroniclehq.com", "price": "", "note": "عروض تقديمية تفاعلية حديثة بتصميم سينمائي.", "note_en": "Modern interactive presentations with a cinematic design." },
  { "cat": "slides", "name": "Dokie", "url": "https://dokie.ai", "price": "", "note": "ينشئ عروضاً تقديمية احترافية من فكرة أو ملف.", "note_en": "Creates professional presentations from an idea or a file." },
  { "cat": "slides", "name": "AiPPT", "url": "https://www.aippt.com", "price": "", "note": "ينشئ عروض PowerPoint كاملة بنقرة واحدة من موضوع أو مستند.", "note_en": "Creates full PowerPoint decks in one click from a topic or document." },
  { "cat": "slides", "name": "PPT.AI", "url": "https://ppt.ai", "price": "", "note": "ينشئ شرائح بالذكاء الاصطناعي مع دعم لنماذج مثل Claude.", "note_en": "Generates slides with AI, with support for models such as Claude." },

  // الإنفوجرافيك والتصميم المرئي
  { "cat": "infographic", "name": "Piktochart", "url": "https://piktochart.com", "price": "", "note": "تصميم إنفوجرافيك وتقارير وملصقات بقوالب جاهزة.", "note_en": "Design infographics, reports and posters from ready templates." },
  { "cat": "infographic", "name": "Infographics.so", "url": "https://infographics.so", "price": "", "note": "يولّد إنفوجرافيك من وصف نصي.", "note_en": "Generates infographics from a text description." },
  { "cat": "infographic", "name": "Text to Infographic", "url": "https://text2infographic.com", "price": "", "note": "يحوّل النص إلى إنفوجرافيك منظم وجاهز للمشاركة.", "note_en": "Turns text into a structured, ready-to-share infographic." },
  { "cat": "infographic", "name": "Venngage", "url": "https://venngage.com", "price": "", "note": "قوالب إنفوجرافيك وتقارير ورسوم بيانية احترافية.", "note_en": "Professional templates for infographics, reports and charts." },
  { "cat": "infographic", "name": "Visme", "url": "https://www.visme.co", "price": "", "note": "تصميم عروض وإنفوجرافيك ومحتوى تفاعلي في منصة واحدة.", "note_en": "Design presentations, infographics and interactive content in one platform." },
  { "cat": "infographic", "name": "Infografix", "url": "https://infografix.app", "price": "", "note": "يولّد إنفوجرافيك بالذكاء الاصطناعي من نص أو موضوع.", "note_en": "Generates AI infographics from text or a topic." },

  // الخرائط الذهنية
  { "cat": "mindmap", "name": "Whimsical", "url": "https://whimsical.com", "price": "freemium", "note": "خرائط ذهنية ومخططات انسيابية وتصاميم أولية بسرعة وبساطة.", "note_en": "Fast, simple mind maps, flowcharts and wireframes." },
  { "cat": "mindmap", "name": "Miro", "url": "https://miro.com", "price": "freemium", "note": "لوحة بيضاء تعاونية للعصف الذهني والتخطيط وورش العمل.", "note_en": "A collaborative whiteboard for brainstorming, planning and workshops." },
  { "cat": "mindmap", "name": "Mapify", "url": "https://mapify.so", "price": "freemium", "note": "يحوّل المستندات والفيديوهات والمواقع إلى خرائط ذهنية.", "note_en": "Turns documents, videos and websites into mind maps." },
  { "cat": "mindmap", "name": "MyMap.ai", "url": "https://www.mymap.ai", "price": "", "note": "ينشئ خرائط ذهنية ومخططات من المحادثة.", "note_en": "Creates mind maps and diagrams from chat." },
  { "cat": "mindmap", "name": "MyLens", "url": "https://mylens.ai", "price": "", "note": "يحوّل أي معلومات إلى خطوط زمنية وخرائط ورسوم توضيحية.", "note_en": "Turns any information into timelines, maps and visual diagrams." },
  { "cat": "mindmap", "name": "Mind Map Wizard", "url": "https://mindmapwizard.com", "price": "", "note": "مولّد خرائط ذهنية سريع من موضوع أو نص.", "note_en": "A quick mind map generator from a topic or text." },
  { "cat": "mindmap", "name": "Edraw.AI", "url": "https://www.edraw.ai", "price": "", "note": "مخططات وخرائط ذهنية ورسوم انسيابية بمساعدة الذكاء الاصطناعي.", "note_en": "Diagrams, mind maps and flowcharts with AI help." },

  // توليد الصور وتحريرها
  { "cat": "images", "name": "Ideogram", "url": "https://ideogram.ai", "price": "freemium", "note": "يتميّز بكتابة النصوص داخل الصور بدقة، مناسب للملصقات والشعارات.", "note_en": "Excellent at rendering text inside images, good for posters and logos." },
  { "cat": "images", "name": "Leonardo", "url": "https://leonardo.ai", "price": "freemium", "note": "توليد صور وتصاميم بأنماط متعددة مع تحكم دقيق بالنتيجة.", "note_en": "Generate images and designs in many styles with fine control." },
  { "cat": "images", "name": "Adobe Firefly", "url": "https://firefly.adobe.com", "price": "freemium", "note": "توليد الصور وتحريرها من Adobe، آمن للاستخدام التجاري.", "note_en": "Adobe's image generation and editing, safe for commercial use." },
  { "cat": "images", "name": "ImageFX", "url": "https://labs.google/fx/tools/image-fx", "price": "free", "note": "مولّد الصور من Google بنموذج Imagen، مجاني وسهل.", "note_en": "Google's free and simple image generator powered by Imagen." },
  { "cat": "images", "name": "AutoDraw", "url": "https://www.autodraw.com", "price": "", "note": "تجربة من Google تحوّل رسوماتك اليدوية إلى أيقونات نظيفة.", "note_en": "A Google experiment that turns your doodles into clean icons." },
  { "cat": "images", "name": "Craiyon", "url": "https://www.craiyon.com", "price": "", "note": "مولّد صور مجاني بسيط دون تسجيل.", "note_en": "A simple, free image generator with no sign-up." },
  { "cat": "images", "name": "ImagineArt", "url": "https://www.imagine.art", "price": "", "note": "استوديو لتوليد الصور والفيديو بنماذج متعددة.", "note_en": "A studio for generating images and video with multiple models." },
  { "cat": "images", "name": "Lexica", "url": "https://lexica.art", "price": "", "note": "محرك بحث في صور مولّدة مع أوامرها، ومولّد صور خاص.", "note_en": "A search engine of AI images with their prompts, plus its own generator." },
  { "cat": "images", "name": "Clipdrop", "url": "https://clipdrop.co", "price": "", "note": "أدوات تحرير صور: إزالة الخلفية والعناصر وتكبير الدقة.", "note_en": "Image editing tools: background and object removal and upscaling." },
  { "cat": "images", "name": "Midjourney", "url": "https://www.midjourney.com", "price": "", "note": "من أقوى مولّدات الصور الفنية عالية الجودة.", "note_en": "One of the strongest generators of high-quality artistic images." },
  { "cat": "images", "name": "Lovart", "url": "https://www.lovart.ai", "price": "", "note": "وكيل تصميم ينفّذ الهويات والملصقات والمحتوى المرئي من وصف.", "note_en": "A design agent that creates brand identities, posters and visuals from a brief." },
  { "cat": "images", "name": "DeepAI", "url": "https://deepai.org", "price": "", "note": "أدوات متنوعة لتوليد الصور والنصوص والمحادثة.", "note_en": "A variety of tools for generating images, text and chat." },
  { "cat": "images", "name": "Phot.AI", "url": "https://www.phot.ai", "price": "", "note": "تحرير الصور وتصميم المحتوى المرئي بأدوات ذكية.", "note_en": "AI photo editing and visual content design." },
  { "cat": "images", "name": "Krea", "url": "https://www.krea.ai", "price": "", "note": "توليد الصور والفيديو في الوقت الحقيقي مع تحسين الدقة.", "note_en": "Real-time image and video generation with upscaling." },
  { "cat": "images", "name": "OpenArt", "url": "https://openart.ai", "price": "", "note": "توليد الصور وتحريرها وتدريب أنماط خاصة.", "note_en": "Generate and edit images and train your own styles." },
  { "cat": "images", "name": "insMind", "url": "https://www.insmind.com", "price": "", "note": "تحرير صور المنتجات وإزالة الخلفيات بالذكاء الاصطناعي.", "note_en": "AI product photo editing and background removal." },
  { "cat": "images", "name": "Mixboard (Google)", "url": "https://mixboard.google.com", "price": "", "note": "لوحة أفكار بصرية من Google لتوليد الصور وتجميعها.", "note_en": "A Google visual moodboard for generating and arranging images." },
  { "cat": "images", "name": "Stockimg.ai", "url": "https://stockimg.ai", "price": "", "note": "يولّد صوراً وأغلفة وشعارات وملصقات جاهزة للاستخدام.", "note_en": "Generates ready-to-use images, covers, logos and posters." },
  { "cat": "images", "name": "Figma Weave", "url": "https://weavy.ai", "price": "", "note": "منصة لربط نماذج الصور والفيديو في مسارات إبداعية.", "note_en": "A platform for chaining image and video models into creative workflows." },
  { "cat": "images", "name": "Reve", "url": "https://reve.com", "price": "", "note": "مولّد صور يلتزم بدقة بالوصف ويكتب النصوص داخل الصورة.", "note_en": "An image generator that follows prompts closely and renders text well." },
  { "cat": "images", "name": "Zawa", "url": "https://zawa.ai", "price": "", "note": "أدوات تصميم وتحرير صور بالذكاء الاصطناعي.", "note_en": "AI design and image editing tools." },

  // توليد الفيديو وتحريره
  { "cat": "video", "name": "HeyGen", "url": "https://www.heygen.com", "price": "freemium", "note": "ينشئ فيديوهات بشخصيات رقمية متحدثة ويدبلج الفيديو بلغات متعددة.", "note_en": "Creates videos with talking avatars and dubs videos into many languages." },
  { "cat": "video", "name": "CapCut", "url": "https://www.capcut.com", "price": "freemium", "note": "محرر فيديو مجاني بأدوات ذكية للترجمة النصية والقص والمؤثرات.", "note_en": "A free video editor with smart captions, cutting and effects." },
  { "cat": "video", "name": "Higgsfield", "url": "https://higgsfield.ai", "price": "", "note": "توليد فيديو سينمائي من نص أو صورة بحركات كاميرا جاهزة.", "note_en": "Generates cinematic video from text or images with preset camera moves." },
  { "cat": "video", "name": "Steve AI", "url": "https://www.steve.ai", "price": "", "note": "يحوّل النص إلى فيديو متحرك أو تعليمي.", "note_en": "Turns text into animated or explainer videos." },
  { "cat": "video", "name": "D-ID", "url": "https://www.d-id.com", "price": "", "note": "يحوّل الصور إلى وجوه متحدثة ويصنع فيديوهات بشخصيات رقمية.", "note_en": "Turns photos into talking faces and makes avatar videos." },
  { "cat": "video", "name": "Hedra", "url": "https://www.hedra.com", "price": "", "note": "فيديوهات بشخصيات تتحدث بتعابير طبيعية من صورة وصوت.", "note_en": "Talking-character videos with natural expressions from an image and audio." },
  { "cat": "video", "name": "Media.io", "url": "https://www.media.io", "price": "", "note": "أدوات فيديو وصوت متعددة: تحرير وتحويل وتحسين.", "note_en": "Multiple video and audio tools: editing, conversion and enhancement." },
  { "cat": "video", "name": "Mootion", "url": "https://www.mootion.com", "price": "", "note": "يحوّل الأفكار إلى قصص مصورة وفيديوهات متحركة.", "note_en": "Turns ideas into visual stories and animated videos." },
  { "cat": "video", "name": "Runway", "url": "https://runwayml.com", "price": "", "note": "أدوات احترافية لتوليد الفيديو وتحريره بالذكاء الاصطناعي.", "note_en": "Professional AI tools for generating and editing video." },
  { "cat": "video", "name": "Submagic", "url": "https://www.submagic.co", "price": "", "note": "يضيف ترجمة نصية متحركة وجذابة للفيديوهات القصيرة.", "note_en": "Adds dynamic, eye-catching captions to short videos." },
  { "cat": "video", "name": "Descript", "url": "https://www.descript.com", "price": "", "note": "حرّر الفيديو والصوت كما تحرر نصاً مكتوباً.", "note_en": "Edit video and audio as easily as editing a text document." },
  { "cat": "video", "name": "VEED", "url": "https://www.veed.io", "price": "", "note": "محرر فيديو عبر المتصفح مع ترجمة نصية وأدوات ذكية.", "note_en": "A browser-based video editor with captions and smart tools." },
  { "cat": "video", "name": "Hailuo AI", "url": "https://hailuoai.video", "price": "", "note": "توليد فيديو واقعي من نص أو صورة من MiniMax.", "note_en": "MiniMax's realistic video generation from text or images." },
  { "cat": "video", "name": "Kling AI", "url": "https://klingai.com", "price": "", "note": "من أقوى مولّدات الفيديو الواقعي من نص أو صورة.", "note_en": "One of the strongest realistic video generators from text or images." },
  { "cat": "video", "name": "X-Pilot", "url": "https://x-pilot.ai", "price": "", "note": "ينشئ فيديوهات تعليمية للدورات مع تصوير بصري للمعرفة.", "note_en": "Creates course videos with visual knowledge illustrations." },
  { "cat": "video", "name": "Pippit", "url": "https://www.pippit.ai", "price": "", "note": "ينشئ فيديوهات تسويقية وقصيرة من رابط أو صورة.", "note_en": "Creates marketing and short-form videos from a link or image." },
  { "cat": "video", "name": "Wan AI", "url": "https://wan.video", "price": "", "note": "نموذج مفتوح المصدر من Alibaba لتوليد الفيديو من نص أو صورة.", "note_en": "Alibaba's open-source model for text- and image-to-video generation." },
  { "cat": "video", "name": "MagicLight", "url": "https://magiclight.ai", "price": "", "note": "يحوّل القصص والنصوص إلى فيديوهات متحركة طويلة.", "note_en": "Turns stories and scripts into long animated videos." },
  { "cat": "video", "name": "Synthesia", "url": "https://www.synthesia.io", "price": "", "note": "فيديوهات تدريبية بشخصيات رقمية بأكثر من 140 لغة.", "note_en": "Training videos with digital avatars in 140+ languages." },
  { "cat": "video", "name": "Pictory", "url": "https://pictory.ai", "price": "", "note": "يحوّل المقالات والنصوص إلى فيديوهات قصيرة بلقطات جاهزة.", "note_en": "Turns articles and scripts into short videos with stock footage." },
  { "cat": "video", "name": "WayinVideo", "url": "https://wayin.ai", "price": "", "note": "يقتطع من الفيديوهات الطويلة مقاطع قصيرة جاهزة للنشر.", "note_en": "Clips long videos into ready-to-post shorts." },
  { "cat": "video", "name": "FlexClip", "url": "https://www.flexclip.com", "price": "", "note": "محرر فيديو سهل بقوالب جاهزة وأدوات ذكية.", "note_en": "An easy video editor with ready templates and smart tools." },
  { "cat": "video", "name": "Topview", "url": "https://www.topview.ai", "price": "", "note": "وكيل فيديو ينشئ إعلانات وفيديوهات من رابط أو فكرة.", "note_en": "A video agent that creates ads and videos from a link or idea." },

  // الصوت وتحويل النص إلى كلام
  { "cat": "voice", "name": "ElevenLabs", "url": "https://elevenlabs.io", "price": "freemium", "note": "أصوات طبيعية جداً لتحويل النص إلى كلام واستنساخ الصوت، وتدعم العربية.", "note_en": "Highly natural text-to-speech and voice cloning, with Arabic support." },
  { "cat": "voice", "name": "NaturalReader", "url": "https://www.naturalreaders.com", "price": "", "note": "يقرأ النصوص والملفات بصوت طبيعي، مفيد للقراءة والمراجعة.", "note_en": "Reads text and files aloud in natural voices, handy for reading and review." },
  { "cat": "voice", "name": "TTSMaker", "url": "https://ttsmaker.com", "price": "", "note": "تحويل النص إلى كلام مجاناً بأصوات ولغات متعددة.", "note_en": "Free text-to-speech in many voices and languages." },
  { "cat": "voice", "name": "PlayHT", "url": "https://play.ht", "price": "", "note": "أصوات واقعية لتحويل النص إلى كلام واستنساخ الصوت.", "note_en": "Realistic text-to-speech voices and voice cloning." },
  { "cat": "voice", "name": "Sesame", "url": "https://www.sesame.com", "price": "", "note": "تجربة محادثة صوتية طبيعية جداً مع مساعد ذكي.", "note_en": "A remarkably natural voice conversation with an AI assistant." },
  { "cat": "voice", "name": "Hume AI", "url": "https://www.hume.ai", "price": "", "note": "أصوات تفهم المشاعر وتعبّر عنها في المحادثة.", "note_en": "Voice AI that understands and expresses emotion in conversation." },
  { "cat": "voice", "name": "MiniMax Audio", "url": "https://www.minimax.io", "price": "", "note": "توليد كلام وموسيقى واستنساخ أصوات من MiniMax.", "note_en": "MiniMax's speech, music and voice cloning generation." },
  { "cat": "voice", "name": "Vapi", "url": "https://vapi.ai", "price": "", "note": "منصة لبناء وكلاء صوتيين يجرون المكالمات ويردّون عليها.", "note_en": "A platform for building voice agents that make and answer calls." },
  { "cat": "voice", "name": "Camb.AI", "url": "https://www.camb.ai", "price": "", "note": "تحويل النص إلى كلام ودبلجة بلغات متعددة منها العربية.", "note_en": "Text-to-speech and dubbing in many languages, including Arabic." },
  { "cat": "voice", "name": "Cartesia", "url": "https://cartesia.ai", "price": "", "note": "أصوات فائقة السرعة للوكلاء الصوتيين وتحويل النص إلى كلام.", "note_en": "Ultra-fast voices for voice agents and text-to-speech." },
  { "cat": "voice", "name": "OpenAI.fm", "url": "https://www.openai.fm", "price": "", "note": "جرّب أصوات OpenAI وتحكّم بنبرتها وأسلوبها.", "note_en": "Try OpenAI's voices and control their tone and style." },

  // التفريغ النصي والاجتماعات
  { "cat": "transcribe", "name": "TurboScribe", "url": "https://turboscribe.ai", "price": "freemium", "note": "تفريغ الصوت إلى نص.", "note_en": "Audio-to-text transcription." },
  { "cat": "transcribe", "name": "Wispr Flow", "url": "https://wisprflow.ai", "price": "", "note": "إملاء صوتي ذكي يكتب كلامك بدقة في أي تطبيق.", "note_en": "Smart voice dictation that types your speech accurately in any app." },
  { "cat": "transcribe", "name": "Tactiq", "url": "https://tactiq.io", "price": "", "note": "تفريغ اجتماعات Google Meet وZoom وTeams وتلخيصها فوراً.", "note_en": "Live transcription and summaries for Google Meet, Zoom and Teams." },
  { "cat": "transcribe", "name": "Dictation.io", "url": "https://dictation.io", "price": "", "note": "إملاء صوتي مجاني في المتصفح يدعم العربية.", "note_en": "Free in-browser voice dictation with Arabic support." },
  { "cat": "transcribe", "name": "YouTube Transcript", "url": "https://youtubetranscript.com", "price": "", "note": "يعرض النص الكامل لأي فيديو على YouTube.", "note_en": "Shows the full transcript of any YouTube video." },
  { "cat": "transcribe", "name": "ScreenApp", "url": "https://screenapp.io", "price": "", "note": "تسجيل الشاشة والاجتماعات وتفريغها وتلخيصها.", "note_en": "Records screens and meetings, then transcribes and summarises them." },
  { "cat": "transcribe", "name": "VideoTranscriber", "url": "https://videotranscriber.ai", "price": "", "note": "تفريغ نصي مجاني للفيديو والصوت.", "note_en": "Free transcription for video and audio." },
  { "cat": "transcribe", "name": "Fireflies.ai", "url": "https://fireflies.ai", "price": "", "note": "مساعد يحضر اجتماعاتك ويسجّلها ويفرّغها ويلخّصها.", "note_en": "An assistant that joins, records, transcribes and summarises your meetings." },
  { "cat": "transcribe", "name": "Otter.ai", "url": "https://otter.ai", "price": "", "note": "تفريغ نصي مباشر للاجتماعات والمحاضرات مع ملخصات.", "note_en": "Live transcription of meetings and lectures, with summaries." },
  { "cat": "transcribe", "name": "Read AI", "url": "https://www.read.ai", "price": "", "note": "ملخصات وتحليلات للاجتماعات والبريد والمحادثات.", "note_en": "Summaries and analytics for meetings, email and chats." },
  { "cat": "transcribe", "name": "YouTube Transcript Generator", "url": "https://youtube-transcript.io", "price": "", "note": "استخراج نصوص فيديوهات YouTube وتنزيلها.", "note_en": "Extract and download YouTube video transcripts." },
  { "cat": "transcribe", "name": "YouTube to Transcript", "url": "https://youtubetotranscript.com", "price": "", "note": "تحويل فيديوهات YouTube إلى نص للقراءة وتدوين الملاحظات.", "note_en": "Turns YouTube videos into text for reading and note-taking." },
  { "cat": "transcribe", "name": "Supernormal", "url": "https://www.supernormal.com", "price": "", "note": "ملاحظات اجتماعات تلقائية ومنظمة.", "note_en": "Automatic, well-organised meeting notes." },

  // الموسيقى
  { "cat": "music", "name": "Suno", "url": "https://suno.com", "price": "", "note": "ينشئ أغاني كاملة بالكلمات والموسيقى من وصف نصي.", "note_en": "Creates complete songs with lyrics and music from a text prompt." },

  // بناء المواقع والتطبيقات
  { "cat": "builders", "name": "v0 by Vercel", "url": "https://v0.app", "price": "", "note": "يبني تطبيقات وواجهات ويب كاملة من وصف نصي.", "note_en": "Builds full web apps and interfaces from a text description." },
  { "cat": "builders", "name": "Shogo", "url": "https://studio.shogo.ai", "price": "", "note": "أداة لبناء تطبيقات ونشرها بالوصف النصي.", "note_en": "A tool for building and publishing apps from text descriptions." },
  { "cat": "builders", "name": "Replit", "url": "https://replit.com", "price": "", "note": "بيئة برمجة في المتصفح مع وكيل يبني التطبيقات وينشرها.", "note_en": "An in-browser coding environment with an agent that builds and deploys apps." },
  { "cat": "builders", "name": "Lovable", "url": "https://lovable.dev", "price": "", "note": "ابنِ تطبيقات ويب كاملة بالمحادثة دون خبرة برمجية.", "note_en": "Build full web apps by chatting, no coding experience needed." },
  { "cat": "builders", "name": "Stitch (Google)", "url": "https://stitch.withgoogle.com", "price": "", "note": "يصمّم واجهات تطبيقات ومواقع من وصف أو صورة.", "note_en": "Designs app and website interfaces from a description or image." },
  { "cat": "builders", "name": "Macaly", "url": "https://macaly.com", "price": "", "note": "منصة لبناء مواقع الأعمال الصغيرة بالذكاء الاصطناعي.", "note_en": "An AI platform for building small-business websites." },
  { "cat": "builders", "name": "MGX (MetaGPT X)", "url": "https://mgx.dev", "price": "", "note": "فريق وكلاء يتعاون لبناء تطبيقات ومواقع كاملة.", "note_en": "A team of agents collaborating to build complete apps and sites." },
  { "cat": "builders", "name": "Rocket.new", "url": "https://rocket.new", "price": "", "note": "يبني تطبيقات ويب وجوال جاهزة للإنتاج من وصف.", "note_en": "Builds production-ready web and mobile apps from a description." },
  { "cat": "builders", "name": "Websim", "url": "https://websim.ai", "price": "", "note": "ابنِ مواقع وتجارب ويب تفاعلية بالوصف وشاركها.", "note_en": "Build and share interactive websites and web experiences by description." },
  { "cat": "builders", "name": "Wegic", "url": "https://wegic.ai", "price": "", "note": "ينشئ موقعاً كاملاً بالمحادثة مع مصمم ذكي.", "note_en": "Creates a complete website by chatting with an AI designer." },
  { "cat": "builders", "name": "Dora", "url": "https://www.dora.run", "price": "", "note": "تصميم مواقع ثلاثية الأبعاد ومتحركة دون برمجة.", "note_en": "Design 3D and animated websites without code." },
  { "cat": "builders", "name": "Bolt", "url": "https://bolt.new", "price": "", "note": "ابنِ مواقع وتطبيقات كاملة وانشرها من المتصفح.", "note_en": "Build and deploy full websites and apps from the browser." },
  { "cat": "builders", "name": "Framer", "url": "https://www.framer.com", "price": "", "note": "تصميم مواقع احترافية ونشرها مع أدوات ذكاء اصطناعي.", "note_en": "Design and publish professional websites, with AI tools." },
  { "cat": "builders", "name": "Anything", "url": "https://www.createanything.com", "price": "", "note": "ابنِ تطبيقات جوال وويب بالوصف دون برمجة.", "note_en": "Build mobile and web apps by description, without coding." },
  { "cat": "builders", "name": "Blink", "url": "https://blink.new", "price": "", "note": "يبني تطبيقات كاملة بقاعدة بيانات وتسجيل دخول خلال دقائق.", "note_en": "Builds complete apps with database and login in minutes." },
  { "cat": "builders", "name": "Rork", "url": "https://rork.com", "price": "", "note": "ينشئ تطبيقات جوال حقيقية من الوصف.", "note_en": "Creates real mobile apps from a description." },
  { "cat": "builders", "name": "Atoms", "url": "https://atoms.dev", "price": "", "note": "ابنِ مواقع وتطبيقات بالذكاء الاصطناعي دون برمجة.", "note_en": "Build websites and apps with AI, no code needed." },

  // الأتمتة وسير العمل
  { "cat": "automation", "name": "PUNKU.AI", "url": "https://punku.ai", "price": "", "note": "ابنِ أتمتة بالذكاء الاصطناعي خلال دقائق.", "note_en": "Build AI automations in minutes." },
  { "cat": "automation", "name": "Gumloop", "url": "https://www.gumloop.com", "price": "", "note": "أتمتة سير العمل بربط الذكاء الاصطناعي بتطبيقاتك دون برمجة.", "note_en": "Automate workflows by connecting AI to your apps, no code." },
  { "cat": "automation", "name": "Axiom.ai", "url": "https://axiom.ai", "price": "", "note": "أتمتة المهام المتكررة في المتصفح دون برمجة.", "note_en": "Automate repetitive browser tasks without code." },
  { "cat": "automation", "name": "Magic Loops", "url": "https://magicloops.dev", "price": "", "note": "صف ما تريد أتمتته فيُبنى لك تلقائياً.", "note_en": "Describe what you want automated and it gets built for you." },
  { "cat": "automation", "name": "Opal (Google)", "url": "https://opal.google", "price": "", "note": "تجربة من Google لبناء تطبيقات ذكاء اصطناعي صغيرة بسلاسل خطوات.", "note_en": "A Google experiment for building small AI apps from chained steps." },
  { "cat": "automation", "name": "Make", "url": "https://www.make.com", "price": "", "note": "منصة أتمتة مرئية تربط آلاف التطبيقات.", "note_en": "A visual automation platform connecting thousands of apps." },
  { "cat": "automation", "name": "n8n", "url": "https://n8n.io", "price": "", "note": "أتمتة مرنة ومفتوحة المصدر مع وكلاء ذكاء اصطناعي.", "note_en": "Flexible, open-source automation with AI agents." },
  { "cat": "automation", "name": "Sim", "url": "https://sim.ai", "price": "", "note": "منصة مفتوحة المصدر لبناء سير عمل الوكلاء بصرياً.", "note_en": "An open-source platform for visually building agent workflows." },
  { "cat": "automation", "name": "Blotato", "url": "https://www.blotato.com", "price": "", "note": "أتمتة إنشاء المحتوى ونشره على منصات التواصل.", "note_en": "Automates creating and publishing content to social platforms." },
  { "cat": "automation", "name": "Composio", "url": "https://composio.dev", "price": "", "note": "يربط الوكلاء الأذكياء بمئات التطبيقات والأدوات.", "note_en": "Connects AI agents to hundreds of apps and tools." },

  // هندسة الأوامر
  { "cat": "prompts", "name": "droPrompt", "url": "https://droprompt.com", "price": "", "note": "يحوّل أي فكرة إلى أمر مكتمل جاهز للنموذج.", "note_en": "Turns any idea into a complete, ready-to-use prompt." },
  { "cat": "prompts", "name": "Awesome ChatGPT Prompts", "url": "https://prompts.chat", "price": "", "note": "مكتبة مفتوحة ضخمة من الأوامر الجاهزة لكل الاستخدامات.", "note_en": "A huge open library of ready prompts for every use." },
  { "cat": "prompts", "name": "Generate Prompt", "url": "https://generateprompt.ai", "price": "", "note": "مولّد أوامر مجاني لـ ChatGPT وClaude وGemini.", "note_en": "A free prompt generator for ChatGPT, Claude and Gemini." },
  { "cat": "prompts", "name": "Prompt Cowboy", "url": "https://promptcowboy.ai", "price": "", "note": "يحسّن أوامرك ويعيد صياغتها لنتائج أفضل.", "note_en": "Improves and rewrites your prompts for better results." },
  { "cat": "prompts", "name": "Prompt Engineering Guide", "url": "https://www.promptingguide.ai", "price": "", "note": "دليل شامل ومجاني لتقنيات هندسة الأوامر.", "note_en": "A comprehensive free guide to prompt engineering techniques." },
  { "cat": "prompts", "name": "FlowGPT", "url": "https://flowgpt.com", "price": "", "note": "مجتمع لمشاركة الأوامر والروبوتات المخصصة.", "note_en": "A community for sharing prompts and custom bots." },
  { "cat": "prompts", "name": "God of Prompt", "url": "https://www.godofprompt.ai", "price": "", "note": "مكتبة أوامر مصنّفة للأعمال والتسويق والإنتاجية.", "note_en": "A categorised prompt library for business, marketing and productivity." },

  // منصات المطورين
  { "cat": "dev", "name": "Hugging Face", "url": "https://huggingface.co", "price": "", "note": "المنصة الأكبر للنماذج ومجموعات البيانات مفتوحة المصدر.", "note_en": "The largest hub for open-source models and datasets." },
  { "cat": "dev", "name": "21st.dev", "url": "https://21st.dev", "price": "", "note": "مكتبة مكونات واجهات React جاهزة لبناء المواقع.", "note_en": "A library of ready React UI components for building sites." },
  { "cat": "dev", "name": "Cloudflare AI Playground", "url": "https://playground.ai.cloudflare.com", "price": "", "note": "جرّب نماذج مفتوحة المصدر مجاناً على شبكة Cloudflare.", "note_en": "Try open-source models for free on Cloudflare's network." },
  { "cat": "dev", "name": "Claude Developer Platform", "url": "https://platform.claude.com", "price": "", "note": "منصة Anthropic للمطورين: مفاتيح API والتوثيق وتجربة النماذج.", "note_en": "Anthropic's developer platform: API keys, docs and model console." },
  { "cat": "dev", "name": "Google AI Studio", "url": "https://aistudio.google.com", "price": "", "note": "جرّب نماذج Gemini مجاناً وابنِ تطبيقات وأوامر منها.", "note_en": "Try Gemini models free and build prompts and apps with them." },
  { "cat": "dev", "name": "BLACKBOX AI", "url": "https://www.blackbox.ai", "price": "", "note": "مساعد برمجة ووكيل لكتابة الكود وإصلاحه.", "note_en": "A coding assistant and agent for writing and fixing code." },
  { "cat": "dev", "name": "OpenAI Platform", "url": "https://platform.openai.com", "price": "", "note": "منصة OpenAI للمطورين: الواجهات البرمجية وبناء الوكلاء.", "note_en": "OpenAI's developer platform: APIs and agent building." },
  { "cat": "dev", "name": "Cohere", "url": "https://cohere.com", "price": "", "note": "نماذج لغوية للمؤسسات متخصصة في البحث والاسترجاع.", "note_en": "Enterprise language models specialised in search and retrieval." },
  { "cat": "dev", "name": "Gemini API", "url": "https://ai.google.dev", "price": "", "note": "توثيق Gemini API ومفاتيحه للمطورين.", "note_en": "Gemini API documentation and keys for developers." },
  { "cat": "dev", "name": "Google Colab", "url": "https://colab.research.google.com", "price": "", "note": "دفاتر Python مجانية في المتصفح مع معالجات رسومية.", "note_en": "Free in-browser Python notebooks with GPUs." },
  { "cat": "dev", "name": "Vertex AI Studio", "url": "https://cloud.google.com/vertex-ai", "price": "", "note": "منصة Google Cloud لبناء تطبيقات الذكاء الاصطناعي ونشرها.", "note_en": "Google Cloud's platform for building and deploying AI apps." },
  { "cat": "dev", "name": "Claude Code", "url": "https://code.claude.com", "price": "", "note": "وكيل البرمجة من Anthropic يعمل في الطرفية وبيئات التطوير.", "note_en": "Anthropic's coding agent for the terminal and IDEs." },
  { "cat": "dev", "name": "Google Antigravity", "url": "https://antigravity.google", "price": "", "note": "بيئة تطوير من Google يبرمج فيها الوكلاء بإشرافك.", "note_en": "Google's development environment where agents code under your supervision." },
  { "cat": "dev", "name": "Kiro", "url": "https://kiro.dev", "price": "", "note": "بيئة تطوير بوكلاء تبدأ من المواصفات قبل كتابة الكود.", "note_en": "An agentic IDE that starts from specs before writing code." },
  { "cat": "dev", "name": "NVIDIA NIM", "url": "https://build.nvidia.com", "price": "", "note": "جرّب نماذج مفتوحة المصدر عبر واجهات NVIDIA البرمجية.", "note_en": "Try open-source models through NVIDIA's APIs." },

  // تشغيل النماذج محلياً
  { "cat": "local", "name": "Foundry Local", "url": "https://foundrylocal.ai", "price": "", "note": "شغّل نماذج الذكاء الاصطناعي على جهازك من Microsoft.", "note_en": "Run AI models on your own device, from Microsoft." },
  { "cat": "local", "name": "ComfyUI", "url": "https://www.comfy.org", "price": "", "note": "واجهة بالعُقد لتوليد الصور والفيديو محلياً بتحكم كامل.", "note_en": "A node-based interface for local image and video generation with full control." },
  { "cat": "local", "name": "Jan", "url": "https://jan.ai", "price": "", "note": "تطبيق مجاني لتشغيل النماذج على جهازك دون إنترنت.", "note_en": "A free app for running models on your computer offline." },
  { "cat": "local", "name": "Ollama", "url": "https://ollama.com", "price": "", "note": "أسهل طريقة لتنزيل النماذج مفتوحة المصدر وتشغيلها محلياً.", "note_en": "The easiest way to download and run open-source models locally." },
  { "cat": "local", "name": "Pinokio", "url": "https://pinokio.co", "price": "", "note": "متصفح يثبّت تطبيقات الذكاء الاصطناعي ويشغّلها محلياً بنقرة.", "note_en": "A browser that installs and runs AI apps locally in one click." },


  // كشف النص المولّد آلياً
  { "cat": "detect", "name": "GPTZero", "url": "https://gptzero.me", "price": "freemium", "note": "نتائج هذه الأدوات احتمالية وليست دليلاً قاطعاً.", "note_en": "Detector results are probabilistic, not conclusive proof." },
  { "cat": "detect", "name": "Copyleaks", "url": "https://copyleaks.com", "price": "freemium", "note": "كشف النصوص المولّدة آلياً والانتحال بلغات متعددة.", "note_en": "Detects AI-generated text and plagiarism in many languages." },
  { "cat": "detect", "name": "Originality.ai", "url": "https://originality.ai", "price": "", "note": "كشف المحتوى المولّد والانتحال للناشرين والكتّاب.", "note_en": "AI-content and plagiarism detection for publishers and writers." },

  // أدلة أدوات الذكاء الاصطناعي
  { "cat": "directories", "name": "Future Tools", "url": "https://www.futuretools.io", "price": "", "note": "دليل محدّث لأدوات الذكاء الاصطناعي مع أخبار أسبوعية.", "note_en": "An up-to-date AI tools directory with weekly news." },
  { "cat": "directories", "name": "Awesome Claude", "url": "https://awesomeclaude.ai", "price": "", "note": "دليل لمهارات Claude وأدواته ومواردها.", "note_en": "A directory of Claude skills, tools and resources." },
  { "cat": "directories", "name": "Agent Skills Directory", "url": "https://skills.sh", "price": "", "note": "دليل مهارات الوكلاء الجاهزة للتثبيت.", "note_en": "A directory of ready-to-install agent skills." },
  { "cat": "directories", "name": "AIxploria", "url": "https://www.aixploria.com", "price": "", "note": "قائمة ضخمة مصنّفة لأفضل أدوات الذكاء الاصطناعي.", "note_en": "A huge categorised list of the best AI tools." },
  { "cat": "directories", "name": "AI Tools Directory", "url": "https://aitoolsdirectory.com", "price": "", "note": "دليل مصنّف لأدوات الذكاء الاصطناعي.", "note_en": "A categorised directory of AI tools." },
  { "cat": "directories", "name": "aitools.fyi", "url": "https://aitools.fyi", "price": "", "note": "دليل لأدوات الذكاء الاصطناعي مع مراجعات مختصرة.", "note_en": "An AI tools directory with short reviews." },
  { "cat": "directories", "name": "All Things AI", "url": "https://allthingsai.com", "price": "", "note": "دليل أدوات ونشرة أسبوعية عن الذكاء الاصطناعي.", "note_en": "A tools directory and weekly AI newsletter." },
  { "cat": "directories", "name": "Futurepedia", "url": "https://www.futurepedia.io", "price": "", "note": "من أكبر أدلة أدوات الذكاء الاصطناعي مع دروس.", "note_en": "One of the largest AI tool directories, with tutorials." },
  { "cat": "directories", "name": "Insidr.ai", "url": "https://www.insidr.ai", "price": "", "note": "دليل أدوات ذكاء اصطناعي مصنّف حسب المهام.", "note_en": "An AI tools directory organised by task." },
  { "cat": "directories", "name": "funfun.tools", "url": "https://funfun.tools", "price": "", "note": "دليل لأفضل أدوات الذكاء الاصطناعي.", "note_en": "A directory of the best AI tools." },
  { "cat": "directories", "name": "TopAI.tools", "url": "https://topai.tools", "price": "", "note": "دليل أدوات الذكاء الاصطناعي حسب المهمة.", "note_en": "An AI tools directory by task." },
  { "cat": "directories", "name": "Toolify", "url": "https://www.toolify.ai", "price": "", "note": "دليل ضخم لأدوات الذكاء الاصطناعي مع إحصاءات الزيارات.", "note_en": "A huge AI tools directory with traffic stats." },

  // تعلّم الذكاء الاصطناعي
  { "cat": "learn", "name": "Anthropic Academy", "url": "https://www.anthropic.com/learn", "price": "free", "note": "دورات Anthropic المجانية لاستخدام Claude والبناء عليه.", "note_en": "Anthropic's free courses on using and building with Claude." },
  { "cat": "learn", "name": "Google AI Essentials", "url": "https://grow.google/ai-essentials/", "price": "paid", "note": "دورة Google التمهيدية لاستخدام الذكاء الاصطناعي في العمل.", "note_en": "Google's introductory course on using AI at work." },
  { "cat": "learn", "name": "Elements of AI", "url": "https://www.elementsofai.com", "price": "free", "note": "دورة مجانية مبسطة من جامعة هلسنكي لفهم أساسيات الذكاء الاصطناعي.", "note_en": "A free, accessible course from the University of Helsinki on AI basics." },
  { "cat": "learn", "name": "There's An AI For That", "url": "https://theresanaiforthat.com", "price": "free", "note": "دليل للبحث عن أي أداة.", "note_en": "A directory for finding any AI tool." },
  { "cat": "learn", "name": "DeepLearning.AI", "url": "https://www.deeplearning.ai", "price": "", "note": "دورات قصيرة ومتخصصة في الذكاء الاصطناعي من Andrew Ng.", "note_en": "Short, specialised AI courses from Andrew Ng." },
  { "cat": "learn", "name": "Founderz", "url": "https://learn.founderz.com", "price": "", "note": "مدرسة أعمال للذكاء الاصطناعي بدورات تطبيقية.", "note_en": "An AI business school with practical courses." },
  { "cat": "learn", "name": "Claude Academy", "url": "https://academy.claude.com", "price": "", "note": "موارد تعليمية لاستخدام Claude في العمل والبناء.", "note_en": "Learning resources for working and building with Claude." },
  { "cat": "learn", "name": "Anthropic Courses", "url": "https://anthropic.skilljar.com", "price": "", "note": "دورات Anthropic على منصة Skilljar، مع شهادات.", "note_en": "Anthropic's courses on Skilljar, with certificates." },
  { "cat": "learn", "name": "TestingCatalog", "url": "https://www.testingcatalog.com", "price": "", "note": "أخبار أولى عن ميزات الذكاء الاصطناعي الجديدة قبل إطلاقها.", "note_en": "Early news on new AI features before they launch." },
  { "cat": "learn", "name": "The Rundown AI", "url": "https://www.rundown.ai", "price": "", "note": "نشرة يومية مختصرة لأهم أخبار الذكاء الاصطناعي.", "note_en": "A short daily newsletter on the top AI news." },
  { "cat": "learn", "name": "UAE AI Office", "url": "https://ai.gov.ae", "price": "", "note": "مكتب الذكاء الاصطناعي في حكومة الإمارات: الاستراتيجيات والمبادرات.", "note_en": "The UAE Government's AI Office: strategies and initiatives." },
  { "cat": "learn", "name": "Claude 101", "url": "https://claude101.com", "price": "", "note": "أدلة مجانية لإتقان استخدام Claude.", "note_en": "Free guides to mastering Claude." },
  { "cat": "learn", "name": "OpenAI Academy", "url": "https://academy.openai.com", "price": "", "note": "دورات وورش مجانية من OpenAI لاستخدام الذكاء الاصطناعي.", "note_en": "Free courses and workshops from OpenAI on using AI." },
  { "cat": "learn", "name": "Kaggle Learn", "url": "https://www.kaggle.com/learn", "price": "", "note": "دورات مجانية قصيرة في البيانات وتعلّم الآلة.", "note_en": "Free short courses in data and machine learning." },
  { "cat": "learn", "name": "Learn Anything", "url": "https://learn-anything.xyz", "price": "", "note": "يبني لك مساراً تعليمياً لأي موضوع.", "note_en": "Builds you a learning path for any topic." },
  { "cat": "learn", "name": "Google Skills", "url": "https://www.skills.google", "price": "", "note": "دورات Google في الذكاء الاصطناعي التوليدي والسحابة.", "note_en": "Google courses in generative AI and cloud." },
];
