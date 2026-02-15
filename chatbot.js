window.initChatbot = function () {
    const icon = document.getElementById('chatbot-icon');
    const windowBox = document.getElementById('chatbot-window');
    const closeBtn = document.getElementById('chat-close');
    const input = document.getElementById('chat-input');
    const messages = document.getElementById('chat-messages');
    const send = document.getElementById('chat-send');

    // Show chat window
    icon.addEventListener('click', () => {
        icon.style.display = 'none';
        windowBox.style.display = 'flex';
        input.focus();
    });

    // Close chat window
    closeBtn.addEventListener('click', () => {
        windowBox.style.display = 'none';
        icon.style.display = 'block';
    });

    function addMessage(text, isUser) {
        const div = document.createElement('div');
        div.classList.add('message', isUser ? 'user-message' : 'bot-message');
        div.innerHTML = text;
        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
    }

    // Your full documents array goes here (copy-paste your original)
    var documents = [
        {
    content: 'what is paksolve pakistan stem problem solving talent hunt free virtual program curious ambitious pakistani students math science education mit olympiads community challenging problems',
    response: '<strong>PakSolve (Pakistan STEM Problem Solving Talent Hunt)</strong> is a <strong>free virtual program</strong> for curious, ambitious Pakistani students interested in high-quality Math and Science education. You are taught by MIT students and Pakistanis who have represented Pakistan at International Math and Physics Olympiads. You also join a community of like-minded students solving fun, challenging problems together.'
  },

  {
    content: 'mission goal purpose why paksolve innovation pakistan behind world potential self learning innovators scientists olympiads',
    response: '<strong>PakSolve’s mission</strong> has two central goals: (1) Push a large number of Pakistani students toward rigorous Math and Physics and self-learning. (2) Build a smaller cohort of ultra-motivated students who can become future innovators and represent Pakistan at International Science Olympiads.'
  },

  {
    content: 'self learning take charge education mediocre system spark stem',
    response: 'Self-learning is a vital skill. If you do not take charge of your education and devote extra time to subjects you are passionate about, you will always be limited by the system. PakSolve exists to give motivated students the push and structure to grow beyond that.'
  },

  {
    content: 'expectations requirements work hard tough problem sets creative effort struggle hours summer commitment',
    response: '<strong>Expectations:</strong> You must be willing to work very hard. The problem sets are tough and require creative problem solving. This is not algorithmic school homework. You must put in serious hours over the summer to benefit.'
  },

  {
    content: 'grade eligibility who can join matric o level 8th 9th 10th 11th younger older proof remove',
    response: 'You MUST be in 8th–10th grade (Matric) or 9th–11th grade (O Levels) or younger to apply. We may accept exceptional younger students. Students in higher grades will not be accepted and may be removed after grade verification.'
  },

  {
    content: 'attendance miss lecture online important participation selection fellowship',
    response: 'Lectures are <strong>online</strong>. Attendance and participation are extremely important and are the main factors for selection into the PakSolve Fellowship. You should only miss in exceptional circumstances.'
  },

  {
    content: 'when start begin summer duration',
    response: 'PakSolve begins <strong>over the summer</strong>. Exact scheduling details are shared after registration.'
  },

  {
    content: 'fellowship what is paksolve fellowship one on one attention personalised syllabus high school represent pakistan olympiads',
    response: '<strong>The PakSolve Fellowship</strong> is a smaller, highly selective cohort. Fellowship members receive significantly more one-on-one attention, personalised study guidance, and long-term mentorship throughout high school. They may receive support toward representing Pakistan at International Math, Physics, or Informatics Olympiads.'
  },

  {
    content: 'fellowship selection how get selected criteria talent effort enthusiasm progress math good gifted',
    response: 'Selection into the Fellowship does NOT depend only on how good you are at Math. It is based on demonstrated effort, enthusiasm, growth, and progress during the program. Prior knowledge helps but does not guarantee entry.'
  },

  {
    content: 'fee cost money price payment free',
    response: 'PakSolve is a <strong>free</strong> program.'
  },

  {
    content: 'sign up register apply how join google form',
    response: 'To apply, go to the <strong>Sign Up</strong> page on our website and open the Google registration form. Fill it out completely and we will contact you with next steps.'
  },

  {
    content: 'contact email whatsapp reach out',
    response: 'After signing up, we contact you using the information you provide. You can also check the website footer for contact options.'
  }
            
        // ... rest of your original questions here
    ];

    var fallback = 'I’m not fully sure what you mean. You can ask about: <em>What is PakSolve?</em> <em>Mission</em> <em>Eligibility</em> <em>Fellowship</em> <em>Expectations</em> <em>Is it free?</em> <em>How to sign up?</em>';

    function getResponse(query) {
        var q = query.toLowerCase();
        var words = q.replace(/[^\w\s]/g, ' ').split(/\s+/);
        var best = { index: -1, score: 0 };

        for (var d = 0; d < documents.length; d++) {
            var docContent = documents[d].content;
            var score = 0;

            if (docContent.indexOf(q) !== -1) score += 5;

            for (var w = 0; w < words.length; w++) {
                if (docContent.indexOf(words[w]) !== -1) {
                    score += words[w].length > 4 ? 2 : 1;
                }
            }

            if (score > best.score) {
                best.score = score;
                best.index = d;
            }
        }

        if (best.index >= 0 && best.score > 0) return documents[best.index].response;
        return fallback;
    }

    send.addEventListener('click', () => {
        var text = input.value.trim();
        if (!text) return;
        input.value = '';
        addMessage(text, true);
        setTimeout(() => {
            var reply = getResponse(text);
            addMessage(reply, false);
        }, 400);
    });

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') send.click();
    });
};

document.addEventListener('DOMContentLoaded', initChatbot);

  
