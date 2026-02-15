// ── PakSolve Chatbot ──

const faqData = [
  {
    id: 'what_is',
    keywords: ['what is paksolve', 'about paksolve', 'tell me about paksolve', 'what does paksolve do'],
    patterns: [
      /what (is|are) (pak\s?solve|this (program|initiative))/,
      /tell me (more )?about (pak\s?solve|this)/,
      /pak\s?solv/,
      /what (kind|type) of program/,
      /explain (pak\s?solve|the program)/
    ],
    response: '<strong>PakSolve (Pakistan STEM Problem Solving Talent Hunt)</strong> is a <strong>free virtual program</strong> for curious, ambitious Pakistani students interested in high-quality Math and Science education. You are taught by MIT students and Pakistanis who have represented Pakistan at International Math and Physics Olympiads. You also join a community of like-minded students solving fun, challenging problems together.'
  },
  {
    id: 'teachers',
    keywords: ['who teaches', 'who are the teachers', 'who are the instructors', 'mit students', 'olympiad winners', 'who runs'],
    patterns: [
      /who (teaches?|instructs?|runs?|organis|organiz)/,
      /teacher|instructor|mentor|lecturer|faculty/,
      /\bmit\b/,
      /olympiad (winner|medal|participant|represent)/,
      /taught by/
    ],
    response: 'PakSolve is taught by <strong>MIT students</strong> and <strong>Pakistani students who have won medals at International Math and Physics Olympiads</strong>. These are people who have gone through rigorous problem-solving training themselves and want to pass that on to the next generation.'
  },
  {
    id: 'subjects',
    keywords: ['what subjects', 'which subjects', 'topics covered', 'curriculum', 'what will i learn', 'what do you teach'],
    patterns: [
      /what (subject|topic|course|content|material)/,
      /which (subject|topic|course)/,
      /\b(math|maths|mathematics|physics|science)\b/,
      /what (will i|do we|do you) (learn|study|cover|do)/,
      /curriculum|syllabus|content/
    ],
    response: 'PakSolve focuses on <strong>Math and Physics</strong>. The material goes well beyond school-level work — you will encounter challenging, creative problems that require real thinking, not just memorisation or formula application. The goal is to develop genuine problem-solving skills.'
  },
  {
    id: 'mission',
    keywords: ['mission', 'goal of paksolve', 'purpose of paksolve', 'why was paksolve made', 'why paksolve exists'],
    patterns: [
      /\b(mission|vision|purpose)\b/,
      /why (was |is )?pak\s?solve (made|created|started|built|here)/,
      /innovation (in )?pakistan/,
      /pakistan (behind|lacking|weak) in/,
      /future (innovator|scientist|olympiad)/
    ],
    response: '<strong>PakSolve\'s mission</strong> has two central goals: (1) Push a large number of Pakistani students toward rigorous Math and Physics and self-learning. (2) Build a smaller cohort of ultra-motivated students who can become future innovators and represent Pakistan at International Science Olympiads.'
  },
  {
    id: 'eligibility',
    keywords: ['who can join', 'am i eligible', 'can i join', 'eligibility', 'which grade', 'what grade'],
    patterns: [
      /eligib(i?li?ty|le)/,
      /which (grade|class|year)/,
      /what (grade|class)/,
      /\b(8|9|10|11)(th)?\s*(grade|class)\b/,
      /\bclass\s*(8|9|10|11)\b/,
      /\bgrade\s*(8|9|10|11)\b/,
      /\b(matric|o.?level)\b/,
      /can (i|we) (join|apply|register|sign up)/,
      /am i (eligible|allowed|able to join)/,
      /age (limit|requirement|restrict)/,
      /too (old|young)/,
      /older student|higher grade|younger student/,
      /\b(fsc|f\.sc|intermediate|inter)\b/,
      /\b(a.?level|as.?level|a2)\b/,
      /gap year/,
      /\b12th\b|\btwelfth\b/,
      /girls?|female|women|woman|sisters?/,
      /outside pakistan|abroad|international|overseas|foreign/,
      /\b7th\b|\bseventh\b|\b6th\b|\bsixth\b/
    ],
    response: 'Eligibility depends on your grade/system:<br><br>• <strong>Matric:</strong> 8th, 9th, or 10th grade ✅<br>• <strong>O Levels:</strong> 9th, 10th, or 11th grade (AS year) ✅<br>• <strong>FSc:</strong> 1st year only ✅<br>• <strong>A Levels:</strong> AS year only ✅<br>• <strong>Gap year / 12th grade / A2:</strong> Not eligible ❌<br>• <strong>Younger students:</strong> Welcome if they can keep up ✅<br>• <strong>Girls:</strong> Strongly encouraged to apply 💚<br>• <strong>Outside Pakistan:</strong> Pakistani students anywhere in the world can apply ✅'
  },
  {
    id: 'device',
    keywords: ['do i need a laptop', 'what device', 'need a computer', 'mobile phone', 'smartphone'],
    patterns: [
      /laptop|computer|pc|device|gadget/,
      /can i use (a )?(phone|mobile|tablet|ipad)/,
      /do i need (a )?(laptop|computer|device)/,
      /what (device|equipment) do i need/,
      /phone enough|mobile enough/,
      /\bphone\b.*\bwork\b|\bphone\b.*\bok\b|\bphone\b.*\bfine\b/,
      /use (my )?(phone|mobile)/
    ],
    response: 'You don\'t need a laptop — <strong>a mobile phone with internet is enough</strong> to participate in PakSolve.'
  },
  {
    id: 'language',
    keywords: ['what language', 'urdu or english', 'lectures in urdu', 'lectures in english', 'taught in'],
    patterns: [
      /what language/,
      /urdu or english|english or urdu/,
      /(lecture|class|taught|conducted) in (urdu|english)/,
      /\b(urdu|english)\b/
    ],
    response: 'Lectures are conducted in <strong>Urdu or English</strong> — both are used to make sure everyone can follow along comfortably.'
  },
  {
    id: 'location',
    keywords: ['which city', 'only for karachi', 'only for lahore', 'only for punjab', 'which province', 'where is it', 'karachi', 'lahore', 'islamabad', 'peshawar', 'quetta', 'rawalpindi'],
    patterns: [
      /which (city|province|area|region)/,
      /only for (karachi|lahore|islamabad|punjab|sindh|kpk|balochistan)/,
      /\b(karachi|lahore|islamabad|rawalpindi|peshawar|quetta)\b/,
      /is it (available|open) (everywhere|all over pakistan|nationwide)/,
      /any city|every city|all cities/
    ],
    response: 'PakSolve is <strong>open to all Pakistani students everywhere</strong> — it doesn\'t matter which city or province you are from. It is a fully virtual program.'
  },
  {
    id: 'free',
    keywords: ['is it free', 'any fee', 'how much does it cost', 'do i have to pay', 'is there a fee'],
    patterns: [
      /\bfree\b/,
      /\b(fee|fees|cost|price|payment|charge|paid|pay)\b/,
      /how much (does it|is it|do i)/,
      /do (i|we) (have to )?pay/,
      /is (it|this) (free|paid|costly)/,
      /koi fees?|koi payment|paisa/
    ],
    response: 'PakSolve is completely <strong>free</strong>. There is no fee, no payment, and no hidden cost to join.'
  },
  {
    id: 'signup',
    keywords: ['how to apply', 'how to join', 'how to register', 'how to sign up', 'sign up', 'registration', 'apply now'],
    patterns: [
      /how (do i|can i|to) (join|apply|register|sign.?up|enroll|enrol)/,
      /where (do i|can i|to) (join|apply|register|sign.?up)/,
      /sign.?up|registration|enroll|enrol/,
      /google (form|link)/,
      /kaise (join|apply|register)/,
      /join karna|apply karna/
    ],
    response: 'To apply, go to the <strong><a href="signup.html" style="color:#0f766e;">Sign Up</a></strong> page on our website and fill out the Google registration form completely. We will then contact you with the next steps.'
  },
  {
    id: 'fellowship',
    keywords: ['what is the fellowship', 'paksolve fellowship', 'fellowship program', 'tell me about the fellowship'],
    patterns: [
      /\bfellowship\b/,
      /one.?on.?one/,
      /personalised? (study|guidance|syllabus|mentorship)/,
      /smaller (cohort|group|batch)/,
      /long.?term mentorship/
    ],
    response: '<strong>The PakSolve Fellowship</strong> is a smaller, highly selective cohort within the program. Fellows receive significantly more one-on-one attention, personalised study guidance, and long-term mentorship throughout high school. They may also receive support toward representing Pakistan at International Math, Physics, or Informatics Olympiads.'
  },
  {
    id: 'fellowship_selection',
    keywords: ['how to get into fellowship', 'how is fellowship selected', 'fellowship criteria', 'how do i get selected for fellowship'],
    patterns: [
      /how (do i|to|can i) get (into|selected for|chosen for) (the )?fellowship/,
      /fellowship (selection|criteria|requirement|based on)/,
      /what (determines|decides) fellowship/,
      /selected for fellowship/,
      /get (into|in) the fellowship/
    ],
    response: 'Selection into the Fellowship does <strong>NOT</strong> depend only on how good you are at Math. It is based on <strong>demonstrated effort, enthusiasm, growth, and progress</strong> during the program. Prior knowledge helps but does not guarantee entry — attitude and hard work matter most.'
  },
  {
    id: 'olympiad_entry',
    keywords: ['does this guarantee olympiad', 'will i represent pakistan', 'olympiad selection', 'prior olympiad experience', 'do i need experience'],
    patterns: [
      /guarantee (olympiad|selection|entry)/,
      /will (i|this) (get me into|guarantee|secure) (olympiad|selection)/,
      /entry (to|into|for) (olympiad|imo|ipho|ioi)/,
      /prior (olympiad|experience)/,
      /do i need (experience|background|prior knowledge)/,
      /\b(imo|ipho|ioi)\b/,
      /represent pakistan/,
      /olympiad (ticket|entry|card|guarantee)/
    ],
    response: 'PakSolve <strong>trains you in problem solving, Math, and Physics</strong> — but it is not a direct entry card to olympiad selection. It builds the skills and foundation you need. Students who excel may receive support toward representing Pakistan, but selection depends on performance in the relevant olympiad trials.'
  },
  {
    id: 'university',
    keywords: ['help with university', 'university admissions', 'college applications', 'help with admissions', 'will this help for university'],
    patterns: [
      /university (admission|application|help)/,
      /college (admission|application|help)/,
      /help (with|for) (university|college|admissions)/,
      /will this help (me get into|with|for) university/,
      /\b(lums|nust|aga khan|fast|mit|harvard|cambridge|oxford)\b/,
      /boost (my )?(application|admissions|profile)/
    ],
    response: 'PakSolve itself is not a university prep program. However, if you go on to <strong>perform well in International Olympiads</strong> after developing your skills here, it can massively boost your university applications — olympiad achievements are highly valued by top universities worldwide.'
  },
  {
    id: 'attendance',
    keywords: ['attendance policy', 'can i miss a lecture', 'what if i miss class', 'how important is attendance'],
    patterns: [
      /\battend(ance)?\b/,
      /miss (a |the )?(class|lecture|session)/,
      /can (i|we) miss/,
      /skip (a |the )?(class|lecture|session)/,
      /how (important|strict) is attend/,
      /\babsent\b|\babsence\b/,
      /lecture (online|virtual|zoom|meet)/
    ],
    response: 'Lectures are <strong>online</strong>. Attendance and active participation are extremely important — they are the primary factors considered for selection into the PakSolve Fellowship. You should only miss a session under truly exceptional circumstances.'
  },
  {
    id: 'schedule',
    keywords: ['when does it start', 'when does paksolve begin', 'program dates', 'start date', 'schedule'],
    patterns: [
      /when (does (it|paksolve)|will (it|paksolve)) (start|begin|launch)/,
      /\bstart date\b|\bbegin date\b/,
      /kab shuru|kab start/,
      /\b(schedule|timetable|timing|duration)\b/,
      /how long (is|does) (the program|it last)/,
      /this summer|next summer|over the summer/
    ],
    response: 'PakSolve begins <strong>over the summer</strong>. Exact dates and scheduling details are shared with you after you register. Sign up early so you don\'t miss the announcement!'
  },
  {
    id: 'expectations',
    keywords: ['what is expected', 'how hard is it', 'is it difficult', 'what are the requirements', 'what do i need to do'],
    patterns: [
      /what (is|are) (expected|the expectations|the requirements)/,
      /how (hard|difficult|tough|challenging) is (it|the program)/,
      /is (it|the program) (hard|difficult|tough)/,
      /problem.?set/,
      /\b(requirement|commitment|dedicated|serious)\b/,
      /work (hard|a lot)/,
      /creative (problem.?solving|thinking)/
    ],
    response: '<strong>Expectations:</strong> You must be willing to work very hard. The problem sets are tough and require creative problem solving — this is not the algorithmic, textbook-style homework you get in school. You must commit serious hours over the summer to genuinely benefit.'
  },
  {
    id: 'contact',
    keywords: ['how to contact', 'contact details', 'get in touch', 'reach paksolve', 'email paksolve'],
    patterns: [
      /\bcontact\b/,
      /reach (out|us|paksolve)/,
      /get in touch/,
      /\b(email|whatsapp)\b/,
      /how (do i|can i|to) (contact|reach|message)/,
      /phone (number)?|helpline/
    ],
    response: 'You can find all contact details in the <strong>footer</strong> of every page on the website — including Email, WhatsApp, and social media links. After you register, we will also reach out to you directly.'
  },
  {
    id: 'self_learning',
    keywords: ['self learning', 'learn on my own', 'independent learning', 'why self learning matters'],
    patterns: [
      /self.?learn/,
      /take charge (of )?(your|my) education/,
      /learn (independently|on (your|my) own)/,
      /limited by (the )?system/,
      /beyond (the )?school/
    ],
    response: 'Self-learning is a vital skill. If you do not take charge of your education and devote extra time to subjects you are passionate about, you will always be limited by the system. PakSolve exists to give motivated students the push and structure to grow beyond that.'
  }
];

// ── SMALL TALK ──

const smallTalk = [
  {
    patterns: [
      /^(hi|hello|hey|salam|salaam|assalam|howdy|hiya|yo|sup|whatsup|what'?s up)[\s!?.]*$/,
      /^hey there[\s!?.]*$/,
      /^hi there[\s!?.]*$/,
      /^hello there[\s!?.]*$/
    ],
    response: 'Hello! 👋 Welcome to PakSolve. I\'m here to answer any questions you have about the program. Try asking about eligibility, the Fellowship, fees, how to sign up, or anything else!'
  },
  {
    patterns: [/^(thanks?|thank you|thx|jazakallah|shukria|shukriya)[\s!.]*$/],
    response: 'You\'re welcome! 😊 Feel free to ask if you have any more questions about PakSolve.'
  },
  {
    patterns: [/^(bye|goodbye|later|cya|see ya|tc|take care|khuda hafiz|allah hafiz)[\s!.]*$/],
    response: 'Goodbye! Best of luck — hope to see you in PakSolve! 🌟'
  },
  {
    patterns: [/^(ok|okay|got it|understood|alright|sure|noted|i see)[\s!.]*$/],
    response: 'Got it! Let me know if you have any other questions about PakSolve. 😊'
  },
  {
    patterns: [/^(good|great|nice|cool|awesome|amazing|wow|excellent|brilliant|sounds good)[\s!.]*$/],
    response: 'Glad to hear that! 😊 Is there anything else you\'d like to know about PakSolve?'
  },
  {
    patterns: [/^(no|nope|nah|na)[\s!.]*$/],
    response: 'No problem! Feel free to come back if you have any questions. 😊'
  },
  {
    patterns: [/^(yes|yeah|yep|yup|haan|han)[\s!.]*$/],
    response: 'Great! What would you like to know? 😊'
  },
  {
    patterns: [/who are you|what are you|are you (a bot|an ai|a robot|human|real)/],
    response: 'I\'m the <strong>PakSolve Assistant</strong> — a chatbot here to answer your questions about the PakSolve program. For anything I can\'t help with, visit the <a href="faq.html" style="color:#0f766e;">FAQ page</a> or contact us directly!'
  },
  {
    patterns: [/how are you|how r u|you good|you okay/],
    response: 'I\'m doing great, thanks for asking! 😊 How can I help you with PakSolve today?'
  }
];

// ── NORMALISE ──

function normalise(text) {
  return text
    .toLowerCase()
    .replace(/[''`]/g, "'")
    .replace(/[^a-z0-9\s'.?!]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// ── TYPO / ALIAS MAP ──

const aliases = [
  [/\bpak\s?solv\w*/g,       'paksolve'],
  [/\beligibl\w*/g,          'eligibility'],
  [/\bfellowshi?p\w*/g,      'fellowship'],
  [/\bregist\w*/g,           'register'],
  [/\bschd?ule\w*/g,         'schedule'],
  [/\bphysic\w*/g,           'physics'],
  [/\bmaths?\b/g,            'math'],
  [/\bmatric(ulation)?\b/g,  'matric'],
  [/\bo\.?\s?level\w*/g,     'o level'],
  [/\bfsc\b|\bf\.sc\b|\binter\b|\bintermediate\b/g, 'fsc'],
  [/\ba\.?\s?levels?\b/g,    'a level'],
  [/\bas\s?level\b/g,        'as level'],
  [/\bkab\b/g,               'when'],
  [/\bkaise\b/g,             'how'],
  [/\bkya\b/g,               'what'],
  [/\bkoi\b/g,               'any'],
  [/\bhai\b/g,               'is'],
  [/\bnahi\b|\bnay\b/g,      'no'],
  [/\bhaan?\b/g,             'yes'],
  [/\bpaisa\w*/g,            'fee'],
  [/\bjoin karna\b/g,        'how to join'],
  [/\bapply karna\b/g,       'how to apply'],
  [/\bshuru\b/g,             'start'],
  [/\bgap year\b/g,          'gap year'],
  [/\babroad\b|\boverseas\b/, 'outside pakistan'],
];

function applyAliases(text) {
  let t = text;
  for (const [pattern, replacement] of aliases) {
    t = t.replace(pattern, replacement);
  }
  return t;
}

// ── SCORING ──

function scoreEntry(input, entry) {
  let score = 0;
  for (const kw of entry.keywords) {
    if (input.includes(kw)) {
      score += kw.split(' ').length * 2;
    }
  }
  for (const pattern of (entry.patterns || [])) {
    if (pattern.test(input)) {
      score += 3;
    }
  }
  return score;
}

// ── MAIN RESPONSE FUNCTION ──

function getBotResponse(rawInput) {
  const input = applyAliases(normalise(rawInput));

  // Reject empty or pure punctuation/symbols only
  if (!input || /^[^a-z0-9]+$/.test(input)) {
    return "I didn't quite catch that. Could you rephrase your question? 😊";
  }

  // Small talk check
  for (const item of smallTalk) {
    for (const pattern of item.patterns) {
      if (pattern.test(input)) {
        return item.response;
      }
    }
  }

  // Score all FAQ entries
  let bestMatch = null;
  let bestScore = 0;

  for (const entry of faqData) {
    const s = scoreEntry(input, entry);
    if (s > bestScore) {
      bestScore = s;
      bestMatch = entry;
    }
  }

  if (bestMatch && bestScore >= 3) {
    return bestMatch.response;
  }

  // Fallback
  return "I'm not sure about that. Here's what I can help with:" +
    "<ul style='margin:6px 0 0 0; padding-left:18px;'>" +
    "<li>Eligibility &amp; grades (Matric, O Level, FSc, A Level)</li>" +
    "<li>The Fellowship</li>" +
    "<li>Fees &amp; cost</li>" +
    "<li>How to sign up</li>" +
    "<li>Attendance &amp; schedule</li>" +
    "<li>What subjects are covered</li>" +
    "<li>Device &amp; language requirements</li>" +
    "</ul>" +
    "Or visit our <a href='faq.html' style='color:#0f766e;'>FAQ page</a>!";
}

// ── DOM HELPERS ──

function appendMessage(text, sender) {
  const messages = document.getElementById('chat-messages');
  const msg = document.createElement('div');
  msg.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
  msg.innerHTML = text;
  messages.appendChild(msg);
  requestAnimationFrame(() => {
    messages.scrollTop = messages.scrollHeight;
  });
}

function showTypingIndicator() {
  const messages = document.getElementById('chat-messages');
  const el = document.createElement('div');
  el.classList.add('message', 'bot-message');
  el.id = 'typing-indicator';
  el.innerHTML = '<em style="color:#888; font-size:0.85rem;">Typing…</em>';
  messages.appendChild(el);
  messages.scrollTop = messages.scrollHeight;
}

function removeTypingIndicator() {
  const el = document.getElementById('typing-indicator');
  if (el) el.remove();
}

// ── SEND HANDLER ──

function handleSend() {
  const inputEl = document.getElementById('chat-input');
  const text = inputEl.value.trim();
  if (!text) return;

  appendMessage(text, 'user');
  inputEl.value = '';
  inputEl.focus();

  showTypingIndicator();
  setTimeout(() => {
    removeTypingIndicator();
    const response = getBotResponse(text);
    appendMessage(response, 'bot');
    logToSheet(text, response);
  }, 400);
}

// ── GOOGLE SHEETS LOGGER ──

function logToSheet(question, response) {
  const SHEET_URL = 'PASTE_YOUR_WEB_APP_URL_HERE';
  if (SHEET_URL === 'PASTE_YOUR_WEB_APP_URL_HERE') return; // skip if not configured
  fetch(SHEET_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      question: question,
      response: response.replace(/<[^>]+>/g, '')
    })
  }).catch(() => {});
}

// ── INIT ──

function initChatbot() {
  const icon    = document.getElementById('chatbot-icon');
  const chatWin = document.getElementById('chatbot-window');
  const closeBtn= document.getElementById('chat-close');
  const sendBtn = document.getElementById('chat-send');
  const inputEl = document.getElementById('chat-input');

  icon.addEventListener('click', () => {
    chatWin.style.display = 'flex';
    icon.style.display = 'none';
    const messages = document.getElementById('chat-messages');
    if (messages.children.length === 0) {
      appendMessage(
        'Hi! 👋 I\'m the <strong>PakSolve Assistant</strong>. Ask me anything about the program — eligibility, the Fellowship, fees, schedule, and more!',
        'bot'
      );
    }
    inputEl.focus();
  });

  closeBtn.addEventListener('click', () => {
    chatWin.style.display = 'none';
    icon.style.display = 'block';
  });

  sendBtn.addEventListener('click', handleSend);

  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  });
}
