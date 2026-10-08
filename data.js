/* =========================================================
   ملف البيانات — هذا هو الملف الوحيد الذي تحتاج تعديله
   ========================================================= */

/* ---------- 1) معلوماتك وروابط حساباتك ----------
   لإظهار حساب جديد: ضع الرابط بين علامتي التنصيص.
   الحساب الفارغ "" لا يظهر في الموقع.               */
window.SITE = {
  name: "عماد فريج",
  title: "متخصص أول في التقييمات الدولية · صانع محتوى في الذكاء الاصطناعي للتعليم",
  intro: "دليل منتقى لأدوات الذكاء الاصطناعي التي أنصح بها المعلمين والباحثين وواضعي الاختبارات، مرتبة حسب الاستخدام.",
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
   title: اسم القسم كما يظهر                              */
window.CATEGORIES = [
  { id: "picks",     title: "اختياراتي الأولى" },
  { id: "chat",      title: "مساعدات المحادثة" },
  { id: "research",  title: "البحث الأكاديمي" },
  { id: "files",     title: "قراءة الملفات وتلخيصها" },
  { id: "teacher",   title: "مساعد المعلم والتخطيط" },
  { id: "assess",    title: "التقويم وبناء الاختبارات" },
  { id: "intl",      title: "التقييمات الدولية — مصادر رسمية" },
  { id: "data",      title: "تحليل البيانات وتصويرها" },
  { id: "translate", title: "الترجمة" },
  { id: "writing",   title: "الكتابة والتدقيق" },
  { id: "slides",    title: "العروض والمرئيات" },
  { id: "mindmap",   title: "الخرائط الذهنية" },
  { id: "images",    title: "توليد الصور" },
  { id: "media",     title: "الصوت والفيديو" },
  { id: "detect",    title: "كشف النص المولّد آلياً" },
  { id: "learn",     title: "تعلّم الذكاء الاصطناعي" }
];

/* ---------- 3) الأدوات ----------
   لإضافة أداة: انسخ سطراً كاملاً والصقه، ثم غيّر قيمه.
   cat: معرّف القسم من القائمة أعلاه
   price: "free" مجاني | "freemium" مجاني جزئياً | "paid" مدفوع
   note: سطر قصير لماذا تنصح بها (اختياري)               */
window.TOOLS = [
  // اختياراتي الأولى
  { cat: "picks", name: "Claude", url: "https://claude.ai", price: "freemium", note: "الأقوى في الكتابة العربية الطويلة والتحليل وبناء الأدوات التفاعلية." },
  { cat: "picks", name: "NotebookLM", url: "https://notebooklm.google.com", price: "free", note: "اسأل ملفاتك ومصادرك، وولّد ملخصات صوتية وخرائط ذهنية منها." },
  { cat: "picks", name: "Gemini", url: "https://gemini.google.com", price: "freemium", note: "متكامل مع خدمات Google، وممتاز في البحث العميق." },
  { cat: "picks", name: "Consensus", url: "https://consensus.app", price: "freemium", note: "إجابات مبنية على أوراق علمية محكّمة مع المصادر." },

  // مساعدات المحادثة
  { cat: "chat", name: "ChatGPT", url: "https://chatgpt.com", price: "freemium", note: "" },
  { cat: "chat", name: "Claude", url: "https://claude.ai", price: "freemium", note: "" },
  { cat: "chat", name: "Gemini", url: "https://gemini.google.com", price: "freemium", note: "" },
  { cat: "chat", name: "Microsoft Copilot", url: "https://copilot.microsoft.com", price: "freemium", note: "" },
  { cat: "chat", name: "Perplexity", url: "https://www.perplexity.ai", price: "freemium", note: "بحث على الويب مع ذكر المصادر." },
  { cat: "chat", name: "DeepSeek", url: "https://chat.deepseek.com", price: "free", note: "" },

  // البحث الأكاديمي
  { cat: "research", name: "Google Scholar", url: "https://scholar.google.com", price: "free", note: "" },
  { cat: "research", name: "Semantic Scholar", url: "https://www.semanticscholar.org", price: "free", note: "" },
  { cat: "research", name: "Consensus", url: "https://consensus.app", price: "freemium", note: "" },
  { cat: "research", name: "Elicit", url: "https://elicit.com", price: "freemium", note: "استخراج النتائج من الأوراق في جداول." },
  { cat: "research", name: "SciSpace", url: "https://scispace.com", price: "freemium", note: "" },
  { cat: "research", name: "ResearchRabbit", url: "https://www.researchrabbit.ai", price: "free", note: "خرائط الأوراق المرتبطة ببعضها." },

  // قراءة الملفات
  { cat: "files", name: "NotebookLM", url: "https://notebooklm.google.com", price: "free", note: "" },
  { cat: "files", name: "ChatPDF", url: "https://www.chatpdf.com", price: "freemium", note: "" },
  { cat: "files", name: "Humata", url: "https://www.humata.ai", price: "freemium", note: "" },

  // مساعد المعلم
  { cat: "teacher", name: "MagicSchool", url: "https://www.magicschool.ai", price: "freemium", note: "عشرات الأدوات الجاهزة للخطط والأنشطة." },
  { cat: "teacher", name: "SchoolAI", url: "https://schoolai.com", price: "freemium", note: "" },
  { cat: "teacher", name: "Diffit", url: "https://web.diffit.me", price: "freemium", note: "تكييف النصوص لمستويات قرائية مختلفة." },
  { cat: "teacher", name: "Eduaide", url: "https://www.eduaide.ai", price: "freemium", note: "" },

  // التقويم
  { cat: "assess", name: "Conker", url: "https://www.conker.ai", price: "freemium", note: "توليد اختبارات قصيرة من موضوع أو نص." },
  { cat: "assess", name: "Kahoot!", url: "https://kahoot.com", price: "freemium", note: "" },
  { cat: "assess", name: "Socrative", url: "https://www.socrative.com", price: "freemium", note: "" },
  { cat: "assess", name: "Google Forms", url: "https://forms.google.com", price: "free", note: "" },

  // التقييمات الدولية
  { cat: "intl", name: "TIMSS & PIRLS (IEA)", url: "https://timssandpirls.bc.edu", price: "free", note: "التقارير والأطر والأسئلة المنشورة." },
  { cat: "intl", name: "IEA", url: "https://www.iea.nl", price: "free", note: "الدراسات والبيانات وأدوات التحليل الرسمية." },
  { cat: "intl", name: "OECD PISA", url: "https://www.oecd.org/en/about/programmes/pisa.html", price: "free", note: "" },
  { cat: "intl", name: "OECD TALIS", url: "https://www.oecd.org/en/about/programmes/talis.html", price: "free", note: "" },

  // البيانات
  { cat: "data", name: "Julius AI", url: "https://julius.ai", price: "freemium", note: "تحليل جداول البيانات بالمحادثة." },
  { cat: "data", name: "Datawrapper", url: "https://www.datawrapper.de", price: "freemium", note: "رسوم بيانية نظيفة جاهزة للنشر." },
  { cat: "data", name: "Flourish", url: "https://flourish.studio", price: "freemium", note: "" },
  { cat: "data", name: "Data Viz Catalogue", url: "https://datavizcatalogue.com", price: "free", note: "لاختيار نوع الرسم المناسب." },

  // الترجمة
  { cat: "translate", name: "DeepL", url: "https://www.deepl.com", price: "freemium", note: "" },
  { cat: "translate", name: "Google Translate", url: "https://translate.google.com", price: "free", note: "" },
  { cat: "translate", name: "Reverso", url: "https://www.reverso.net", price: "freemium", note: "أمثلة سياقية للمصطلحات." },

  // الكتابة
  { cat: "writing", name: "QuillBot", url: "https://quillbot.com", price: "freemium", note: "" },
  { cat: "writing", name: "Grammarly", url: "https://www.grammarly.com", price: "freemium", note: "للنصوص الإنجليزية." },

  // العروض
  { cat: "slides", name: "Gamma", url: "https://gamma.app", price: "freemium", note: "" },
  { cat: "slides", name: "Canva", url: "https://www.canva.com", price: "freemium", note: "" },
  { cat: "slides", name: "Napkin", url: "https://www.napkin.ai", price: "freemium", note: "تحويل النص إلى أشكال توضيحية." },

  // الخرائط الذهنية
  { cat: "mindmap", name: "Whimsical", url: "https://whimsical.com", price: "freemium", note: "" },
  { cat: "mindmap", name: "Miro", url: "https://miro.com", price: "freemium", note: "" },
  { cat: "mindmap", name: "Mapify", url: "https://mapify.so", price: "freemium", note: "" },

  // الصور
  { cat: "images", name: "Ideogram", url: "https://ideogram.ai", price: "freemium", note: "" },
  { cat: "images", name: "Leonardo", url: "https://leonardo.ai", price: "freemium", note: "" },
  { cat: "images", name: "Adobe Firefly", url: "https://firefly.adobe.com", price: "freemium", note: "" },
  { cat: "images", name: "ImageFX", url: "https://labs.google/fx/tools/image-fx", price: "free", note: "" },

  // الصوت والفيديو
  { cat: "media", name: "ElevenLabs", url: "https://elevenlabs.io", price: "freemium", note: "" },
  { cat: "media", name: "HeyGen", url: "https://www.heygen.com", price: "freemium", note: "" },
  { cat: "media", name: "CapCut", url: "https://www.capcut.com", price: "freemium", note: "" },
  { cat: "media", name: "TurboScribe", url: "https://turboscribe.ai", price: "freemium", note: "تفريغ الصوت إلى نص." },

  // كشف النص المولد
  { cat: "detect", name: "GPTZero", url: "https://gptzero.me", price: "freemium", note: "نتائج هذه الأدوات احتمالية وليست دليلاً قاطعاً." },
  { cat: "detect", name: "Copyleaks", url: "https://copyleaks.com", price: "freemium", note: "" },

  // التعلم
  { cat: "learn", name: "Anthropic Academy", url: "https://www.anthropic.com/learn", price: "free", note: "" },
  { cat: "learn", name: "Google AI Essentials", url: "https://grow.google/ai-essentials/", price: "paid", note: "" },
  { cat: "learn", name: "Elements of AI", url: "https://www.elementsofai.com", price: "free", note: "" },
  { cat: "learn", name: "There's An AI For That", url: "https://theresanaiforthat.com", price: "free", note: "دليل للبحث عن أي أداة." }
];
