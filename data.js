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
  { id: "picks",     title: "اختياراتي الأولى",               en: "My Top Picks" },
  { id: "chat",      title: "مساعدات المحادثة",               en: "AI Assistants" },
  { id: "research",  title: "البحث الأكاديمي",                en: "Academic Research" },
  { id: "files",     title: "قراءة الملفات وتلخيصها",          en: "Chat with Documents" },
  { id: "teacher",   title: "مساعد المعلم والتخطيط",          en: "Teacher Assistants & Planning" },
  { id: "assess",    title: "التقويم وبناء الاختبارات",        en: "Assessment & Quizzes" },
  { id: "intl",      title: "التقييمات الدولية — مصادر رسمية", en: "International Assessments — Official Sources" },
  { id: "data",      title: "تحليل البيانات وتصويرها",        en: "Data Analysis & Visualisation" },
  { id: "translate", title: "الترجمة",                        en: "Translation" },
  { id: "writing",   title: "الكتابة والتدقيق",               en: "Writing & Proofreading" },
  { id: "slides",    title: "العروض والمرئيات",               en: "Presentations & Visuals" },
  { id: "mindmap",   title: "الخرائط الذهنية",                en: "Mind Maps" },
  { id: "images",    title: "توليد الصور",                    en: "Image Generation" },
  { id: "media",     title: "الصوت والفيديو",                 en: "Audio & Video" },
  { id: "detect",    title: "كشف النص المولّد آلياً",          en: "AI Text Detection" },
  { id: "learn",     title: "تعلّم الذكاء الاصطناعي",          en: "Learn AI" }
];

/* ---------- 3) الأدوات ----------
   لإضافة أداة: انسخ سطراً كاملاً والصقه، ثم غيّر قيمه.
   cat: معرّف القسم من القائمة أعلاه
   price: "free" مجاني | "freemium" مجاني جزئياً | "paid" مدفوع
   note: سطر التوصية بالعربية — note_en: بالإنجليزية (كلاهما اختياري) */
window.TOOLS = [
  // اختياراتي الأولى
  { cat: "picks", name: "Claude", url: "https://claude.ai", price: "freemium",
    note: "الأقوى في الكتابة العربية الطويلة والتحليل وبناء الأدوات التفاعلية.",
    note_en: "Best for long-form Arabic writing, analysis and building interactive tools." },
  { cat: "picks", name: "NotebookLM", url: "https://notebooklm.google.com", price: "free",
    note: "اسأل ملفاتك ومصادرك، وولّد ملخصات صوتية وخرائط ذهنية منها.",
    note_en: "Ask questions of your own sources and generate audio overviews and mind maps." },
  { cat: "picks", name: "Gemini", url: "https://gemini.google.com", price: "freemium",
    note: "متكامل مع خدمات Google، وممتاز في البحث العميق.",
    note_en: "Integrated with Google services and excellent at deep research." },
  { cat: "picks", name: "Consensus", url: "https://consensus.app", price: "freemium",
    note: "إجابات مبنية على أوراق علمية محكّمة مع المصادر.",
    note_en: "Answers grounded in peer-reviewed papers, with citations." },

  // مساعدات المحادثة
  { cat: "chat", name: "ChatGPT", url: "https://chatgpt.com", price: "freemium", note: "", note_en: "" },
  { cat: "chat", name: "Claude", url: "https://claude.ai", price: "freemium", note: "", note_en: "" },
  { cat: "chat", name: "Gemini", url: "https://gemini.google.com", price: "freemium", note: "", note_en: "" },
  { cat: "chat", name: "Microsoft Copilot", url: "https://copilot.microsoft.com", price: "freemium", note: "", note_en: "" },
  { cat: "chat", name: "Perplexity", url: "https://www.perplexity.ai", price: "freemium",
    note: "بحث على الويب مع ذكر المصادر.", note_en: "Web search with cited sources." },
  { cat: "chat", name: "DeepSeek", url: "https://chat.deepseek.com", price: "free", note: "", note_en: "" },

  // البحث الأكاديمي
  { cat: "research", name: "Google Scholar", url: "https://scholar.google.com", price: "free", note: "", note_en: "" },
  { cat: "research", name: "Semantic Scholar", url: "https://www.semanticscholar.org", price: "free", note: "", note_en: "" },
  { cat: "research", name: "Consensus", url: "https://consensus.app", price: "freemium", note: "", note_en: "" },
  { cat: "research", name: "Elicit", url: "https://elicit.com", price: "freemium",
    note: "استخراج النتائج من الأوراق في جداول.", note_en: "Extracts findings from papers into tables." },
  { cat: "research", name: "SciSpace", url: "https://scispace.com", price: "freemium", note: "", note_en: "" },
  { cat: "research", name: "ResearchRabbit", url: "https://www.researchrabbit.ai", price: "free",
    note: "خرائط الأوراق المرتبطة ببعضها.", note_en: "Maps of connected papers." },

  // قراءة الملفات
  { cat: "files", name: "NotebookLM", url: "https://notebooklm.google.com", price: "free", note: "", note_en: "" },
  { cat: "files", name: "ChatPDF", url: "https://www.chatpdf.com", price: "freemium", note: "", note_en: "" },
  { cat: "files", name: "Humata", url: "https://www.humata.ai", price: "freemium", note: "", note_en: "" },

  // مساعد المعلم
  { cat: "teacher", name: "MagicSchool", url: "https://www.magicschool.ai", price: "freemium",
    note: "عشرات الأدوات الجاهزة للخطط والأنشطة.", note_en: "Dozens of ready-made tools for plans and activities." },
  { cat: "teacher", name: "SchoolAI", url: "https://schoolai.com", price: "freemium", note: "", note_en: "" },
  { cat: "teacher", name: "Diffit", url: "https://web.diffit.me", price: "freemium",
    note: "تكييف النصوص لمستويات قرائية مختلفة.", note_en: "Adapts texts to different reading levels." },
  { cat: "teacher", name: "Eduaide", url: "https://www.eduaide.ai", price: "freemium", note: "", note_en: "" },

  // التقويم
  { cat: "assess", name: "Conker", url: "https://www.conker.ai", price: "freemium",
    note: "توليد اختبارات قصيرة من موضوع أو نص.", note_en: "Generates quizzes from a topic or text." },
  { cat: "assess", name: "Kahoot!", url: "https://kahoot.com", price: "freemium", note: "", note_en: "" },
  { cat: "assess", name: "Socrative", url: "https://www.socrative.com", price: "freemium", note: "", note_en: "" },
  { cat: "assess", name: "Google Forms", url: "https://forms.google.com", price: "free", note: "", note_en: "" },

  // التقييمات الدولية
  { cat: "intl", name: "TIMSS & PIRLS (IEA)", url: "https://timssandpirls.bc.edu", price: "free",
    note: "التقارير والأطر والأسئلة المنشورة.", note_en: "Reports, frameworks and released items." },
  { cat: "intl", name: "IEA", url: "https://www.iea.nl", price: "free",
    note: "الدراسات والبيانات وأدوات التحليل الرسمية.", note_en: "Studies, data and official analysis tools." },
  { cat: "intl", name: "OECD PISA", url: "https://www.oecd.org/en/about/programmes/pisa.html", price: "free", note: "", note_en: "" },
  { cat: "intl", name: "OECD TALIS", url: "https://www.oecd.org/en/about/programmes/talis.html", price: "free", note: "", note_en: "" },

  // البيانات
  { cat: "data", name: "Julius AI", url: "https://julius.ai", price: "freemium",
    note: "تحليل جداول البيانات بالمحادثة.", note_en: "Analyse spreadsheets by chatting." },
  { cat: "data", name: "Datawrapper", url: "https://www.datawrapper.de", price: "freemium",
    note: "رسوم بيانية نظيفة جاهزة للنشر.", note_en: "Clean, publication-ready charts." },
  { cat: "data", name: "Flourish", url: "https://flourish.studio", price: "freemium", note: "", note_en: "" },
  { cat: "data", name: "Data Viz Catalogue", url: "https://datavizcatalogue.com", price: "free",
    note: "لاختيار نوع الرسم المناسب.", note_en: "Helps you choose the right chart type." },

  // الترجمة
  { cat: "translate", name: "DeepL", url: "https://www.deepl.com", price: "freemium", note: "", note_en: "" },
  { cat: "translate", name: "Google Translate", url: "https://translate.google.com", price: "free", note: "", note_en: "" },
  { cat: "translate", name: "Reverso", url: "https://www.reverso.net", price: "freemium",
    note: "أمثلة سياقية للمصطلحات.", note_en: "Terms shown in real context." },

  // الكتابة
  { cat: "writing", name: "QuillBot", url: "https://quillbot.com", price: "freemium", note: "", note_en: "" },
  { cat: "writing", name: "Grammarly", url: "https://www.grammarly.com", price: "freemium",
    note: "للنصوص الإنجليزية.", note_en: "For English texts." },

  // العروض
  { cat: "slides", name: "Gamma", url: "https://gamma.app", price: "freemium", note: "", note_en: "" },
  { cat: "slides", name: "Canva", url: "https://www.canva.com", price: "freemium", note: "", note_en: "" },
  { cat: "slides", name: "Napkin", url: "https://www.napkin.ai", price: "freemium",
    note: "تحويل النص إلى أشكال توضيحية.", note_en: "Turns text into visuals." },

  // الخرائط الذهنية
  { cat: "mindmap", name: "Whimsical", url: "https://whimsical.com", price: "freemium", note: "", note_en: "" },
  { cat: "mindmap", name: "Miro", url: "https://miro.com", price: "freemium", note: "", note_en: "" },
  { cat: "mindmap", name: "Mapify", url: "https://mapify.so", price: "freemium", note: "", note_en: "" },

  // الصور
  { cat: "images", name: "Ideogram", url: "https://ideogram.ai", price: "freemium", note: "", note_en: "" },
  { cat: "images", name: "Leonardo", url: "https://leonardo.ai", price: "freemium", note: "", note_en: "" },
  { cat: "images", name: "Adobe Firefly", url: "https://firefly.adobe.com", price: "freemium", note: "", note_en: "" },
  { cat: "images", name: "ImageFX", url: "https://labs.google/fx/tools/image-fx", price: "free", note: "", note_en: "" },

  // الصوت والفيديو
  { cat: "media", name: "ElevenLabs", url: "https://elevenlabs.io", price: "freemium", note: "", note_en: "" },
  { cat: "media", name: "HeyGen", url: "https://www.heygen.com", price: "freemium", note: "", note_en: "" },
  { cat: "media", name: "CapCut", url: "https://www.capcut.com", price: "freemium", note: "", note_en: "" },
  { cat: "media", name: "TurboScribe", url: "https://turboscribe.ai", price: "freemium",
    note: "تفريغ الصوت إلى نص.", note_en: "Audio-to-text transcription." },

  // كشف النص المولد
  { cat: "detect", name: "GPTZero", url: "https://gptzero.me", price: "freemium",
    note: "نتائج هذه الأدوات احتمالية وليست دليلاً قاطعاً.",
    note_en: "Detector results are probabilistic, not conclusive proof." },
  { cat: "detect", name: "Copyleaks", url: "https://copyleaks.com", price: "freemium", note: "", note_en: "" },

  // التعلم
  { cat: "learn", name: "Anthropic Academy", url: "https://www.anthropic.com/learn", price: "free", note: "", note_en: "" },
  { cat: "learn", name: "Google AI Essentials", url: "https://grow.google/ai-essentials/", price: "paid", note: "", note_en: "" },
  { cat: "learn", name: "Elements of AI", url: "https://www.elementsofai.com", price: "free", note: "", note_en: "" },
  { cat: "learn", name: "There's An AI For That", url: "https://theresanaiforthat.com", price: "free",
    note: "دليل للبحث عن أي أداة.", note_en: "A directory for finding any AI tool." }
];
