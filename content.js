// Demo learning content. In the real MVP this comes from the admin dashboard / backend.
window.LEXORA_CONTENT = {
  curriculum: {
    systems: [
      { id: "anglo", name: "Anglophone", classes: ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6"], exam: "FSLC" },
      { id: "franco", name: "Francophone", classes: ["SIL", "CP", "CE1", "CE2", "CM1", "CM2"], exam: "CEP" }
    ],
    subjects: {
      anglo: [
        { id: "eng", title: "English Language", emoji: "📚", color: "#1F4E79" },
        { id: "math", title: "Mathematics", emoji: "🔢", color: "#7C3AED" },
        { id: "sci", title: "Science & Technology", emoji: "🔬", color: "#16836B" },
        { id: "soc", title: "Social Studies", emoji: "🌍", color: "#C2410C" },
        { id: "fre", title: "French", emoji: "🇫🇷", color: "#2563EB" }
      ],
      franco: [
        { id: "fra", title: "Français", emoji: "📚", color: "#1F4E79" },
        { id: "math", title: "Mathématiques", emoji: "🔢", color: "#7C3AED" },
        { id: "sci", title: "Sciences et technologie", emoji: "🔬", color: "#16836B" },
        { id: "shs", title: "Sciences humaines et sociales", emoji: "🌍", color: "#C2410C" },
        { id: "ang", title: "Anglais (English)", emoji: "🇬🇧", color: "#2563EB" }
      ]
    },
    plan: {
      anglo: {
        eng: [["k1", "k2", "k3", "k4", "k5"], ["ae2", "ae2b", "ae2c"], ["ae3", "ae3b", "ae3c"], ["ae4", "ae4b", "ae4c"], ["ae5", "ae5b", "ae5c"], ["ae6", "ae6b", "ae6c"]],
        math: [["m1", "m2", "m4", "m5"], ["am2", "am2b", "am2c"], ["am3", "am3b", "am3c"], ["am4", "am4b", "am4c"], ["am5", "am5b", "am5c"], ["am6", "am6b", "am6c"]],
        sci: [["k6", "as1b", "as1c"], ["as2", "as2b", "as2c"], ["as3", "as3b", "as3c"], ["as4", "as4b", "as4c"], ["as5", "as5b", "as5c"], ["as6", "as6b", "as6c"]],
        soc: [["aso1", "aso1b", "aso1c"], ["aso2", "aso2b", "aso2c"], ["aso3", "aso3b", "aso3c"], ["aso4", "aso4b", "aso4c"], ["aso5", "aso5b", "aso5c"], ["aso6", "aso6b", "aso6c"]],
        fre: [["af1", "af1b", "af1c"], ["af2", "af2b", "af2c"], ["af3", "af3b", "af3c"], ["af4", "af4b", "af4c"], ["af5", "af5b", "af5c"], ["af6", "af6b", "af6c"]]
      },
      franco: {
        fra: [["ff1"], ["ff2"], ["ff3"], ["ff4"], ["ff5"], ["ff6"]],
        math: [["fm1"], ["fm2"], ["fm3"], ["fm4"], ["fm5"], ["fm6"]],
        sci: [["fsc1"], ["fsc2"], ["fsc3"], ["fsc4"], ["fsc5"], ["fsc6"]],
        shs: [["fh1"], ["fh2"], ["fh3"], ["fh4"], ["fh5"], ["fh6"]],
        ang: [["fa1"], ["fa2"], ["fa3"], ["fa4"], ["fa5"], ["fa6"]]
      }
    }
  },
  sections: [
    {
      id: "academy", title: "English Academy", emoji: "🎓", color: "#1F4E79", audience: "learner",
      desc: "Grammar, vocabulary, reading and listening for teens and adults.",
      units: [{ title: "Beginner A1 · Unit 1: Hello!", lessons: ["a1", "a2"] },
              { title: "Beginner A1 · Unit 2: Shopping", lessons: ["a3", "a4"] },
              { title: "Elementary A2 · Unit 3: The past", lessons: ["a5"] },
              { title: "Elementary A2 · Unit 4: Travel & directions", lessons: [], soon: true }]
    },
    {
      id: "spelling", title: "Spelling Studio", emoji: "✏️", color: "#C2410C", audience: "all",
      desc: "Spelling rules, word building, dictation and tests.",
      units: [{ title: "Word list 1 · Tricky words", lessons: ["s1", "s2"] },
              { title: "Word list 2 · Silent letters", lessons: ["s3", "s4"] },
              { title: "Word list 3 · Plurals (-s, -es, -ies)", lessons: [], soon: true }]
    },
    {
      id: "maths", title: "Maths", emoji: "🔢", color: "#7C3AED", audience: "all",
      desc: "Counting, numbers and everyday maths.",
      units: [
        { title: "Everyday maths · Fractions & percentages", audience: "learner", lessons: ["m3", "m6"] },
        { title: "Measuring & time", soon: true }
      ]
    }
  ],
  lessons: {
    k1: {
      title: "Letters A, B, C", emoji: "🔤", skill: "Phonics", words: ["apple", "ball", "cat"],
      activities: [
        { type: "video", title: "Meet A, B and C", scenes: [
          { bg: "#DBEAFE", art: "👋", anim: "float", caption: "Hello! Let's meet A, B and C." },
          { bg: "#FDE68A", art: "🍎", anim: "pop", caption: "A is for apple." },
          { bg: "#BFDBFE", art: "⚽", anim: "bounce", caption: "B is for ball." },
          { bg: "#FECACA", art: "🐱", anim: "slide", caption: "C is for cat." },
          { bg: "#D1FAE5", art: "🎉", anim: "float", caption: "Let's play with letters!" }
        ] },
        { type: "card", big: "Aa", emoji: "🍎", text: "A is for apple", say: "A. A is for apple." },
        { type: "card", big: "Bb", emoji: "⚽", text: "B is for ball", say: "B. B is for ball." },
        { type: "card", big: "Cc", emoji: "🐱", text: "C is for cat", say: "C. C is for cat." },
        { type: "choice", prompt: "Tap the picture that starts with B.", say: "Tap the picture that starts with B.",
          options: [{ e: "🍎", t: "apple" }, { e: "⚽", t: "ball" }, { e: "🐱", t: "cat" }], answer: 1, pictures: true },
        { type: "choice", prompt: "Listen. Which one did you hear?", say: "cat", listen: true,
          options: [{ e: "🍎", t: "apple" }, { e: "🐱", t: "cat" }, { e: "⚽", t: "ball" }], answer: 1, pictures: true },
        { type: "match", prompt: "Match the letter to the picture.", say: "Match the letter to the picture.",
          pairs: [["Aa", "🍎"], ["Bb", "⚽"], ["Cc", "🐱"]] },
        { type: "missing", prompt: "Which letter is missing?", say: "cat. Which letter is missing?", word: "cat", hide: 1, emoji: "🐱", choices: ["o", "a", "e"] },
        { type: "build", prompt: "Build the word.", say: "Build the word. ball.", word: "ball", emoji: "⚽" }
      ]
    },
    k2: {
      title: "Animals & a story", emoji: "🐶", skill: "Vocabulary", words: ["dog", "fish", "bird"],
      activities: [
        { type: "card", emoji: "🐶", text: "dog", say: "dog. This is a dog." },
        { type: "card", emoji: "🐟", text: "fish", say: "fish. This is a fish." },
        { type: "card", emoji: "🐦", text: "bird", say: "bird. This is a bird." },
        { type: "choice", prompt: "What is this?", bigEmoji: "🐟", say: "What is this?",
          options: [{ t: "dog" }, { t: "fish" }, { t: "bird" }], answer: 1 },
        { type: "choice", prompt: "Listen. Which one did you hear?", say: "bird", listen: true,
          options: [{ e: "🐶", t: "dog" }, { e: "🐟", t: "fish" }, { e: "🐦", t: "bird" }], answer: 2, pictures: true },
        { type: "story", title: "Sam the dog", pages: [
          { emoji: "🐶", text: "This is Sam. Sam is a little dog." },
          { emoji: "🌳🐦", text: "Sam sees a bird in the big tree." },
          { emoji: "🎶😊", text: "The bird sings. Sam is happy!" } ] },
        { type: "choice", prompt: "Who is Sam?", say: "Who is Sam?",
          options: [{ e: "🐦", t: "a bird" }, { e: "🐶", t: "a dog" }, { e: "🐟", t: "a fish" }], answer: 1, pictures: true },
        { type: "build", prompt: "Build the word.", say: "Build the word. dog.", word: "dog", emoji: "🐶" }
      ]
    },
    k3: {
      title: "Colours (video lesson)", emoji: "🎬", skill: "Vocabulary", words: ["red", "yellow", "blue", "green"],
      activities: [
        { type: "video", title: "Colours", scenes: [
          { bg: "#FEE2E2", art: "🍎", anim: "pop", caption: "This apple is red." },
          { bg: "#FEF3C7", art: "☀️", anim: "float", caption: "The sun is yellow." },
          { bg: "#DBEAFE", art: "🐳", anim: "slide", caption: "The sea is blue. A whale swims in the sea." },
          { bg: "#D1FAE5", art: "🐸", anim: "bounce", caption: "The frog is green." },
          { bg: "#EDE9FE", art: "🌈", anim: "float", caption: "Look at the rainbow!" },
          { bg: "#DCFCE7", art: "🐸", anim: "pop", caption: "What colour is the frog? Green!" }
        ] },
        { type: "choice", prompt: "Which one is yellow?", options: [{ e: "🟥", t: "red" }, { e: "🟨", t: "yellow" }, { e: "🟦", t: "blue" }, { e: "🟩", t: "green" }], answer: 1, pictures: true },
        { type: "choice", prompt: "Listen. Which colour did you hear?", say: "blue", listen: true, options: [{ e: "🟥", t: "red" }, { e: "🟨", t: "yellow" }, { e: "🟦", t: "blue" }, { e: "🟩", t: "green" }], answer: 2, pictures: true },
        { type: "match", prompt: "Match the colour word to the picture.", pairs: [["red", "🟥"], ["yellow", "🟨"], ["blue", "🟦"], ["green", "🟩"]] },
        { type: "build", prompt: "Build the word.", say: "red", word: "red", emoji: "🟥" }
      ]
    },
    k4: {
      title: "Letters D, E, F", emoji: "🔤", skill: "Phonics", words: ["dog", "egg", "fish"],
      activities: [
        { type: "video", title: "Meet D, E and F", scenes: [
          { bg: "#DBEAFE", art: "👋", anim: "float", caption: "Hello! Let's meet D, E and F." },
          { bg: "#FECACA", art: "🐶", anim: "bounce", caption: "D is for dog." },
          { bg: "#FEF3C7", art: "🥚", anim: "pop", caption: "E is for egg." },
          { bg: "#D1FAE5", art: "🐟", anim: "slide", caption: "F is for fish." },
          { bg: "#EDE9FE", art: "🎉", anim: "float", caption: "Let's say D, E and F!" }
        ] },
        { type: "card", big: "Dd", emoji: "🐶", text: "D is for dog.", say: "D. D is for dog." },
        { type: "card", big: "Ee", emoji: "🥚", text: "E is for egg.", say: "E. E is for egg." },
        { type: "card", big: "Ff", emoji: "🐟", text: "F is for fish.", say: "F. F is for fish." },
        { type: "choice", prompt: "Tap the picture that starts with E.", say: "Tap the picture that starts with E.",
          options: [{ e: "🐶", t: "dog" }, { e: "🥚", t: "egg" }, { e: "🐟", t: "fish" }], answer: 1, pictures: true },
        { type: "choice", prompt: "Listen. Which one did you hear?", say: "fish", listen: true,
          options: [{ e: "🐶", t: "dog" }, { e: "🥚", t: "egg" }, { e: "🐟", t: "fish" }], answer: 2, pictures: true },
        { type: "match", prompt: "Match the letter to the picture.", say: "Match the letter to the picture.",
          pairs: [["Dd", "🐶"], ["Ee", "🥚"], ["Ff", "🐟"]] },
        { type: "missing", prompt: "Which letter is missing?", say: "dog. Which letter is missing?", word: "dog", hide: 0, emoji: "🐶", choices: ["d", "b", "p"] },
        { type: "build", prompt: "Build the word.", say: "Build the word. fish.", word: "fish", emoji: "🐟" }
      ]
    },
    k5: {
      title: "My family", emoji: "👨‍👩‍👧", skill: "Vocabulary", words: ["mother", "father", "sister", "brother", "baby"],
      activities: [
        { type: "card", emoji: "👩", text: "mother", say: "Mother. This is my mother." },
        { type: "card", emoji: "👨", text: "father", say: "Father. This is my father." },
        { type: "card", emoji: "👧", text: "sister", say: "Sister. This is my sister." },
        { type: "card", emoji: "👦", text: "brother", say: "Brother. This is my brother." },
        { type: "card", emoji: "👶", text: "baby", say: "Baby. This is the baby." },
        { type: "story", title: "Ama's family", pages: [
          { emoji: "👧🏾🏠", text: "This is Ama. She lives in Douala with her family." },
          { emoji: "👩🏾👨🏾", text: "Her mother is called Ngozi. Her father is called Paul." },
          { emoji: "👧🏾👶🏾", text: "Ama has a sister and a baby brother." },
          { emoji: "🍲😊", text: "They eat together and smile." }
        ] },
        { type: "choice", prompt: "Who lives with Ama in Douala?", say: "Who lives with Ama in Douala?",
          options: [{ t: "Her family" }, { t: "Her teacher" }, { t: "Her friends" }], answer: 0 },
        { type: "choice", prompt: "Listen. Who is in Ama's family?", say: "Ama has a sister and a baby brother.", listen: true,
          options: [{ t: "A sister and a baby brother" }, { t: "Two dogs" }, { t: "A teacher" }], answer: 0 },
        { type: "build", prompt: "Build the word.", say: "Build the word. mother.", word: "mother", emoji: "👩" }
      ]
    },
    k6: {
      title: "My body (video lesson)", emoji: "🎬", skill: "Vocabulary", words: ["head", "eyes", "nose", "mouth", "hands"],
      activities: [
        { type: "video", title: "Touch your head!", scenes: [
          { bg: "#DBEAFE", art: "🙋", anim: "bounce", caption: "Touch your head!" },
          { bg: "#FCE7F3", art: "👀", anim: "pop", caption: "Point to your eyes!" },
          { bg: "#FEF3C7", art: "👃", anim: "float", caption: "Touch your nose!" },
          { bg: "#D1FAE5", art: "👄", anim: "pop", caption: "Point to your mouth!" },
          { bg: "#EDE9FE", art: "👏", anim: "slide", caption: "Wave your hands!" },
          { bg: "#FECACA", art: "😊", anim: "float", caption: "Head, eyes, nose, mouth and hands!" }
        ] },
        { type: "choice", prompt: "Which body part do you use to smell?", say: "Which body part do you use to smell?",
          options: [{ e: "👃", t: "nose" }, { e: "👀", t: "eyes" }, { e: "👄", t: "mouth" }], answer: 0, pictures: true },
        { type: "choice", prompt: "Touch your head. Which body part is it?", say: "Touch your head. Which body part is it?",
          options: [{ e: "🙆", t: "head" }, { e: "👏", t: "hands" }, { e: "👀", t: "eyes" }], answer: 0, pictures: true },
        { type: "choice", prompt: "Listen. Which word did you hear?", say: "hands", listen: true,
          options: [{ e: "🙆", t: "head" }, { e: "👀", t: "eyes" }, { e: "👏", t: "hands" }], answer: 2, pictures: true },
        { type: "match", prompt: "Match the body word to the picture.", say: "Match the body word to the picture.",
          pairs: [["head", "🙆"], ["eyes", "👀"], ["nose", "👃"], ["mouth", "👄"], ["hands", "👏"]] },
        { type: "build", prompt: "Build the word.", say: "Build the word. mouth.", word: "mouth", emoji: "👄" }
      ]
    },
    a1: {
      title: "The verb “to be”", emoji: "👋", skill: "Grammar", words: ["teacher", "student", "from"],
      activities: [
        { type: "card", title: "Grammar: to be", lines: ["I <b>am</b> a student.", "You <b>are</b> my friend.", "He / She / It <b>is</b> happy.", "We / They <b>are</b> from Cameroon."],
          say: "I am a student. You are my friend. She is happy. They are from Cameroon." },
        { type: "choice", prompt: "She ___ a teacher.", options: [{ t: "am" }, { t: "is" }, { t: "are" }], answer: 1, sentence: "She is a teacher." },
        { type: "choice", prompt: "They ___ from Cameroon.", options: [{ t: "is" }, { t: "am" }, { t: "are" }], answer: 2, sentence: "They are from Cameroon." },
        { type: "order", prompt: "Put the words in order.", words: ["I", "am", "a", "student"], say: "I am a student." },
        { type: "truefalse", prompt: "“We is happy.” is correct English.", answer: false, explain: "We use “are” with we: “We are happy.”" },
        { type: "choice", prompt: "Listen. Where is Ada from?", say: "Hello! My name is Ada. I am from Douala.", listen: true,
          options: [{ t: "Yaoundé" }, { t: "Douala" }, { t: "Buea" }], answer: 1 },
        { type: "dictation", prompt: "Listen and type what you hear.", say: "How are you?", answer: "How are you?" }
      ]
    },
    a2: {
      title: "Daily routines", emoji: "⏰", skill: "Grammar", words: ["breakfast", "lunch", "dinner"],
      activities: [
        { type: "card", title: "Present simple", lines: ["I <b>wake</b> up at 6.", "She <b>wakes</b> up at 7.", "Add <b>-s</b> for he, she and it."],
          say: "I wake up at six. She wakes up at seven." },
        { type: "choice", prompt: "He ___ breakfast at 7.", options: [{ t: "eat" }, { t: "eats" }], answer: 1, sentence: "He eats breakfast at 7." },
        { type: "match", prompt: "Match the meal to the time.", pairs: [["breakfast", "morning"], ["lunch", "midday"], ["dinner", "evening"]] },
        { type: "order", prompt: "Put the words in order.", words: ["She", "goes", "to", "school", "by", "bus"], say: "She goes to school by bus." },
        { type: "choice", prompt: "We ___ football on Saturdays.", options: [{ t: "play" }, { t: "plays" }], answer: 0, sentence: "We play football on Saturdays." },
        { type: "truefalse", prompt: "“He go to work by taxi.” is correct English.", answer: false, explain: "With he/she/it, add -s: “He goes to work by taxi.”" },
        { type: "dictation", prompt: "Listen and type what you hear.", say: "I drink tea every morning.", answer: "I drink tea every morning." }
      ]
    },
    a3: {
      title: "Numbers & prices", emoji: "💰", skill: "Vocabulary", words: ["hundred", "thousand", "francs", "price"],
      activities: [
        { type: "card", title: "Numbers and prices", lines: [
          "100 = one hundred francs.",
          "500 = five hundred francs.",
          "1,000 = one thousand francs.",
          "10,000 = ten thousand francs."
        ], say: "One hundred francs. Five hundred francs. One thousand francs. Ten thousand francs." },
        { type: "card", title: "Ask the price", lines: [
          "How much is it?",
          "It costs 500 francs.",
          "The bag costs 10,000 francs."
        ], say: "How much is it? It costs five hundred francs. The bag costs ten thousand francs." },
        { type: "choice", prompt: "How much does the bag cost?", options: [{ t: "500 francs" }, { t: "5,000 francs" }, { t: "10,000 francs" }], answer: 2 },
        { type: "choice", prompt: "Which number is one thousand?", options: [{ t: "100" }, { t: "500" }, { t: "1,000" }, { t: "10,000" }], answer: 2 },
        { type: "match", prompt: "Match the numeral to the words.", pairs: [["100", "one hundred"], ["500", "five hundred"], ["1,000", "one thousand"], ["10,000", "ten thousand"]] },
        { type: "choice", prompt: "Listen. How much does it cost?", say: "It costs five hundred francs.", listen: true,
          options: [{ t: "100 francs" }, { t: "500 francs" }, { t: "10,000 francs" }], answer: 1 },
        { type: "dictation", prompt: "Listen and type the price in words.", say: "five hundred francs", answer: "five hundred francs" },
        { type: "number", prompt: "Write one thousand as a numeral.", answer: 1000 }
      ]
    },
    a4: {
      title: "At the market", emoji: "🛒", skill: "Vocabulary", words: ["market", "tomato", "orange", "banana", "mango", "this", "these"],
      activities: [
        { type: "card", title: "Useful market phrases", lines: [
          "I'd like some oranges, please.",
          "Can I have two tomatoes?",
          "How much are the tomatoes?",
          "Use this for one thing and these for more than one."
        ], say: "I'd like some oranges, please. Can I have two tomatoes? How much are the tomatoes? Use this for one thing and these for more than one." },
        { type: "choice", prompt: "Two mangoes cost 500 francs each. How much are they?", options: [{ t: "500 francs" }, { t: "1,000 francs" }, { t: "1,500 francs" }], answer: 1 },
        { type: "choice", prompt: "Listen to the customer. What would she like?", say: "Good morning. I'd like some bananas, please.", listen: true,
          options: [{ t: "Some bananas" }, { t: "Some tomatoes" }, { t: "A mango" }], answer: 0 },
        { type: "choice", prompt: "___ tomatoes are fresh.", options: [{ t: "This" }, { t: "These" }], answer: 1, sentence: "These tomatoes are fresh." },
        { type: "order", prompt: "Put the words in order.", words: ["I'd", "like", "two", "mangoes", "please."], say: "I'd like two mangoes, please." },
        { type: "truefalse", prompt: "“These tomato is fresh.” is correct English.", answer: false, explain: "Use “these” with a plural noun: “These tomatoes are fresh.”" },
        { type: "choice", prompt: "How can I politely ask for one orange?", options: [{ t: "Can I have an orange, please?" }, { t: "Give orange now." }, { t: "I has orange." }], answer: 0 }
      ]
    },
    a5: {
      title: "Yesterday (past simple)", emoji: "📅", skill: "Grammar", words: ["played", "watched", "went", "had", "saw", "ate"],
      activities: [
        { type: "card", title: "The past simple", lines: [
          "Regular verbs: play → played; watch → watched.",
          "Some verbs change: go → went; have → had; see → saw; eat → ate."
        ], say: "Regular verbs: play becomes played; watch becomes watched. Some verbs change: go becomes went; have becomes had; see becomes saw; eat becomes ate." },
        { type: "choice", prompt: "Yesterday, Paul ___ football in Buea.", options: [{ t: "played" }, { t: "play" }, { t: "plays" }], answer: 0, sentence: "Yesterday, Paul played football in Buea." },
        { type: "choice", prompt: "Ngozi ___ to Yaoundé yesterday.", options: [{ t: "went" }, { t: "goes" }, { t: "go" }], answer: 0, sentence: "Ngozi went to Yaoundé yesterday." },
        { type: "order", prompt: "Put the words in order.", words: ["Yesterday,", "Ama", "ate", "a", "mango."], say: "Yesterday, Ama ate a mango." },
        { type: "truefalse", prompt: "“I goed to the market yesterday.” is correct English.", answer: false, explain: "“Goed” is wrong. The past simple of “go” is “went.”" },
        { type: "dictation", prompt: "Listen and type what you hear.", say: "We watched a film yesterday.", answer: "We watched a film yesterday." },
        { type: "choice", prompt: "Yesterday, Paul ___ lunch before school.", options: [{ t: "have" }, { t: "had" }, { t: "has" }], answer: 1, sentence: "Yesterday, Paul had lunch before school." },
        { type: "dictation", prompt: "Listen and spell the past tense of “see.”", say: "saw", answer: "saw", word: true }
      ]
    },
    s1: {
      title: "Tricky words", emoji: "🧩", skill: "Spelling", words: ["because", "friend", "beautiful", "Wednesday", "necessary"],
      activities: [
        { type: "card", title: "Spelling tip", lines: ["Say tricky words in parts:", "<b>be · cause</b>", "<b>Wed · nes · day</b>", "<b>ne · ces · sa · ry</b> (one c, two s)"],
          say: "Say tricky words in parts. be, cause. Wed, nes, day." },
        { type: "dictation", prompt: "Listen and spell the word.", say: "because. I stay home because it is raining. because.", answer: "because", word: true },
        { type: "missing", prompt: "Which letter is missing?", say: "friend", word: "friend", hide: 2, emoji: "🤝", choices: ["e", "i", "a"] },
        { type: "build", prompt: "Build the word you hear.", say: "Wednesday", word: "Wednesday", emoji: "📅" },
        { type: "choice", prompt: "Which spelling is correct?", say: "beautiful", options: [{ t: "beutiful" }, { t: "beautiful" }, { t: "beautifull" }], answer: 1, word: "beautiful" },
        { type: "missing", prompt: "Which letter is missing?", say: "necessary", word: "necessary", hide: 5, emoji: "✅", choices: ["c", "z", "s"] }
      ]
    },
    s2: {
      title: "Spelling test 1", emoji: "📝", skill: "Spelling", words: ["because", "friend", "beautiful", "Wednesday", "necessary"],
      activities: [
        { type: "dictation", prompt: "Spell the word you hear.", say: "friend. She is my best friend. friend.", answer: "friend", word: true },
        { type: "dictation", prompt: "Spell the word you hear.", say: "beautiful. What a beautiful day. beautiful.", answer: "beautiful", word: true },
        { type: "dictation", prompt: "Spell the word you hear.", say: "Wednesday. School starts on Wednesday. Wednesday.", answer: "Wednesday", word: true },
        { type: "dictation", prompt: "Spell the word you hear.", say: "necessary. Water is necessary for life. necessary.", answer: "necessary", word: true },
        { type: "dictation", prompt: "Spell the word you hear.", say: "because. I am late because of the rain. because.", answer: "because", word: true }
      ]
    },
    s3: {
      title: "Silent letters", emoji: "🤫", skill: "Spelling", words: ["knife", "write", "lamb", "hour", "island"],
      activities: [
        { type: "card", title: "Silent letters", lines: [
          "The k is silent in knife.",
          "The w is silent in write.",
          "The b is silent in lamb.",
          "The h is silent in hour.",
          "The s is silent in island."
        ], say: "Knife. The k is silent. Write. The w is silent. Lamb. The b is silent. Hour. The h is silent. Island. The s is silent." },
        { type: "dictation", prompt: "Listen and spell the word.", say: "knife", answer: "knife", word: true },
        { type: "missing", prompt: "Which letter is missing?", say: "knife", word: "knife", hide: 0, emoji: "🔪", choices: ["k", "n", "t"] },
        { type: "build", prompt: "Build the word you hear.", say: "write", word: "write", emoji: "✍️" },
        { type: "choice", prompt: "Which spelling is correct?", say: "knife", options: [{ t: "nife" }, { t: "knife" }, { t: "knif" }], answer: 1, word: "knife" },
        { type: "choice", prompt: "Which letter is silent in lamb?", options: [{ t: "b" }, { t: "m" }, { t: "l" }], answer: 0 },
        { type: "dictation", prompt: "Listen and spell the word.", say: "island", answer: "island", word: true },
        { type: "missing", prompt: "Which letter is missing?", say: "hour", word: "hour", hide: 0, emoji: "🕐", choices: ["h", "o", "u"] },
        { type: "choice", prompt: "Which spelling is correct?", say: "island", options: [{ t: "iland" }, { t: "island" }, { t: "islend" }], answer: 1, word: "island" }
      ]
    },
    s4: {
      title: "Spelling test 2", emoji: "📝", skill: "Spelling", words: ["knife", "write", "lamb", "hour", "island"],
      activities: [
        { type: "card", title: "Test instructions", lines: ["Listen carefully and spell each silent-letter word."], say: "Listen carefully and spell each silent-letter word." },
        { type: "dictation", prompt: "Spell the word you hear.", say: "knife. The knife is sharp. knife.", answer: "knife", word: true },
        { type: "dictation", prompt: "Spell the word you hear.", say: "write. Please write your name. write.", answer: "write", word: true },
        { type: "dictation", prompt: "Spell the word you hear.", say: "lamb. The lamb is white. lamb.", answer: "lamb", word: true },
        { type: "dictation", prompt: "Spell the word you hear.", say: "hour. The lesson lasts one hour. hour.", answer: "hour", word: true },
        { type: "dictation", prompt: "Spell the word you hear.", say: "island. An island has water around it. island.", answer: "island", word: true }
      ]
    },
    m1: {
      title: "Counting 1 to 10", emoji: "🔢", skill: "Numbers", words: ["one", "two", "three", "four", "five"],
      activities: [
        { type: "card", big: "3", emoji: "🍎🍎🍎", text: "three apples", say: "Three. Three apples." },
        { type: "choice", prompt: "How many stars?", bigEmoji: "⭐⭐⭐⭐", options: [{ t: "3" }, { t: "4" }, { t: "5" }], answer: 1 },
        { type: "choice", prompt: "Listen. Which number did you hear?", say: "seven", listen: true, options: [{ t: "6" }, { t: "7" }, { t: "9" }], answer: 1 },
        { type: "match", prompt: "Match the number to the word.", pairs: [["1", "one"], ["2", "two"], ["3", "three"], ["4", "four"]] },
        { type: "number", prompt: "Count the balls.", visual: "⚽⚽⚽⚽⚽", answer: 5 },
        { type: "build", prompt: "Build the word.", say: "five", word: "five", emoji: "5️⃣" }
      ]
    },
    m2: {
      title: "Adding up to 10", emoji: "➕", skill: "Numbers", words: ["plus", "equals"],
      activities: [
        { type: "video", title: "Adding apples", scenes: [
          { bg: "#FDE68A", art: "🍎🍎 ➕ 🍎", anim: "pop", caption: "Two apples plus one apple equals three apples." },
          { bg: "#DCFCE7", art: "🍐🍐 ➕ 🍐🍐", anim: "bounce", caption: "Two pears plus two pears equals four pears." },
          { bg: "#DBEAFE", art: "🍊🍊🍊 ➕ 🍊", anim: "float", caption: "Three oranges plus one orange equals four oranges." }
        ] },
        { type: "choice", prompt: "How many apples? 🍎🍎 + 🍎🍎 = ?", options: [{ t: "3" }, { t: "4" }, { t: "5" }], answer: 1 },
        { type: "number", prompt: "3 + 4 = ?", answer: 7 },
        { type: "number", prompt: "How many fish altogether?", visual: "🐟🐟🐟🐟🐟 + 🐟🐟🐟", answer: 8 },
        { type: "truefalse", prompt: "5 + 5 = 10", answer: true },
        { type: "choice", prompt: "Listen. Which answer did you hear?", say: "six plus two", listen: true, options: [{ t: "7" }, { t: "8" }, { t: "9" }], answer: 1 }
      ]
    },
    m3: {
      title: "Fractions & percentages", emoji: "➗", skill: "Fractions", words: ["half", "quarter", "percent"],
      activities: [
        { type: "card", title: "Fractions and percentages", lines: ["½ = one <b>half</b> = 50%", "¼ = one <b>quarter</b> = 25%", "¾ = three quarters = 75%"], say: "One half is fifty percent. One quarter is twenty-five percent. Three quarters is seventy-five percent." },
        { type: "choice", prompt: "What is ¼ of 20?", options: [{ t: "4" }, { t: "5" }, { t: "10" }], answer: 1 },
        { type: "number", prompt: "25% of 80 = ?", answer: 20 },
        { type: "truefalse", prompt: "0.5 is the same as 50%.", answer: true },
        { type: "choice", prompt: "A shirt costs 10,000 XAF. It is 20% off. What is the new price?", options: [{ t: "8,000 XAF" }, { t: "9,800 XAF" }, { t: "2,000 XAF" }], answer: 0 },
        { type: "number", prompt: "Half of 150 = ?", answer: 75 },
        { type: "dictation", prompt: "Listen and type what you hear.", say: "three quarters", answer: "three quarters" }
      ]
    },
    m4: {
      title: "Taking away (up to 10)", emoji: "➖", skill: "Numbers", words: ["minus", "left", "take away"],
      activities: [
        { type: "video", title: "Birds fly away", scenes: [
          { bg: "#DBEAFE", art: "🐦🐦🐦🐦🐦", anim: "float", caption: "Five birds sit on a branch." },
          { bg: "#FEF3C7", art: "🐦🐦🐦", anim: "slide", caption: "Two birds fly away." },
          { bg: "#D1FAE5", art: "🐦🐦🐦", anim: "bounce", caption: "Three birds are left." }
        ] },
        { type: "number", prompt: "5 - 2 = ?", answer: 3 },
        { type: "number", prompt: "8 - 3 = ?", answer: 5 },
        { type: "choice", prompt: "There are 9 oranges. 4 are eaten. How many are left?", options: [{ t: "4" }, { t: "5" }, { t: "6" }], answer: 1 },
        { type: "truefalse", prompt: "7 - 3 = 5", answer: false, explain: "7 minus 3 equals 4." },
        { type: "choice", prompt: "Listen. How many birds are left?", say: "There are seven birds. Two fly away. Five are left.", listen: true,
          options: [{ t: "4" }, { t: "5" }, { t: "6" }], answer: 1 }
      ]
    },
    m5: {
      title: "Shapes", emoji: "🔷", skill: "Shapes", words: ["circle", "square", "triangle", "rectangle"],
      activities: [
        { type: "card", title: "Circle and square", lines: ["A circle is round.", "A square has four equal sides."], say: "A circle is round. A square has four equal sides." },
        { type: "card", title: "Triangle and rectangle", lines: ["A triangle has three sides.", "A rectangle has four sides."], say: "A triangle has three sides. A rectangle has four sides." },
        { type: "choice", prompt: "Which shape has three sides?", options: [{ e: "🔵", t: "circle" }, { e: "🟥", t: "square" }, { e: "🔺", t: "triangle" }], answer: 2, pictures: true },
        { type: "choice", prompt: "Which shape has no corners?", options: [{ e: "🟥", t: "square" }, { e: "🔺", t: "triangle" }, { e: "🔵", t: "circle" }], answer: 2, pictures: true },
        { type: "match", prompt: "Match the shape to the picture.", pairs: [["circle", "🔵"], ["square", "🟥"], ["triangle", "🔺"], ["rectangle", "▭"]] },
        { type: "number", prompt: "How many sides does a triangle have?", answer: 3 },
        { type: "number", prompt: "How many sides does a rectangle have?", answer: 4 },
        { type: "build", prompt: "Build the word.", say: "triangle", word: "triangle", emoji: "🔺" }
      ]
    },
    m6: {
      title: "Money & change", emoji: "💵", skill: "Everyday maths", words: ["price", "total", "change", "cost"],
      activities: [
        { type: "card", title: "Money in Cameroon", lines: ["Prices in this lesson are in XAF (CFA francs).", "Add prices to find the total."], say: "Prices in this lesson are in XAF, CFA francs. Add prices to find the total." },
        { type: "choice", prompt: "A bag of rice costs 4,500 XAF. A bottle of oil costs 1,500 XAF. What is the total?", options: [{ t: "6,000 XAF" }, { t: "5,000 XAF" }, { t: "7,000 XAF" }], answer: 0 },
        { type: "number", prompt: "A book costs 2,000 XAF. How much do 3 books cost?", unit: "XAF", answer: 6000 },
        { type: "number", prompt: "You buy things for 6,750 XAF and pay 10,000 XAF. How much change do you get?", unit: "XAF", answer: 3250 },
        { type: "choice", prompt: "A taxi ride costs 1,500 XAF. What do 4 rides cost?", options: [{ t: "6,000 XAF" }, { t: "4,500 XAF" }, { t: "7,500 XAF" }], answer: 0 },
        { type: "number", prompt: "Fruit costs 2,500 XAF and bread costs 1,000 XAF. What is the total?", unit: "XAF", answer: 3500 },
        { type: "choice", prompt: "A shirt costs 8,000 XAF. It is 25% off. What is the sale price?", options: [{ t: "6,000 XAF" }, { t: "7,000 XAF" }, { t: "2,000 XAF" }], answer: 0 }
      ]
    }
  },
  placement: [
    { prompt: "I ___ a student.", options: ["is", "am", "are"], answer: 1 },
    { prompt: "She ___ to school every day.", options: ["go", "goes", "going"], answer: 1 },
    { prompt: "Yesterday we ___ football.", options: ["play", "plays", "played"], answer: 2 },
    { prompt: "If it rains, I ___ stay at home.", options: ["will", "would", "am"], answer: 0 },
    { prompt: "I have lived here ___ 2015.", options: ["for", "since", "from"], answer: 1 }
  ]
};

(() => {
  const C = window.LEXORA_CONTENT;
  const commonPairs = {
    en: [["sun", "a star"], ["rain", "water from clouds"], ["school", "a place to learn"]],
    fr: [["soleil", "une étoile"], ["pluie", "l’eau des nuages"], ["école", "un lieu pour apprendre"]]
  };
  const specs = [
    { id: "ae2", title: "Short-vowel words", emoji: "🔤", skill: "Phonics", lang: "en", promptLang: "en", words: ["cat", "pen", "pig"], fact: "The vowels a, e, i, o and u can make short sounds.", question: "Which word has the short a sound?", options: ["cat", "pen", "pig"], answer: 0, pairs: [["cat", "short a"], ["pen", "short e"], ["pig", "short i"]], exercise: { type: "build", word: "dog" }, video: [["🐱", "Cat begins with the short a sound."], ["✏️", "Pen has the short e sound."], ["🐷", "Pig has the short i sound."]] },
    { id: "ae3", title: "Nouns and verbs", emoji: "📝", skill: "Grammar", lang: "en", promptLang: "en", words: ["noun", "verb", "school"], fact: "A noun names a person, place, animal or thing.", question: "Which word is a verb?", options: ["run", "table", "school"], answer: 0, pairs: [["Ama", "person"], ["school", "place"], ["run", "action"]], exercise: { type: "build", word: "verb" }, truth: "A verb can show an action.", explain: "Run is an action word, so it is a verb." },
    { id: "ae4", title: "Past tense and reading", emoji: "📖", skill: "Reading", lang: "en", promptLang: "en", words: ["played", "watched", "yesterday"], fact: "Yesterday, Paul played football and watched the sunset.", question: "What did Paul do yesterday?", options: ["He played football.", "He plays football.", "He will play football."], answer: 0, pairs: [["play", "played"], ["watch", "watched"], ["walk", "walked"]], exercise: { type: "dictation", word: "watched" }, truth: "Many regular verbs add -ed in the past.", explain: "Played and watched are past forms of regular verbs.", story: ["Yesterday, Paul played football in Buea.", "After the game, he watched the sunset.", "He went home and had dinner with his family."] },
    { id: "ae5", title: "Adjectives and punctuation", emoji: "✍️", skill: "Writing", lang: "en", promptLang: "en", words: ["adjective", "beautiful", "sentence"], fact: "An adjective describes a person, place, animal or thing.", question: "Which word is an adjective?", options: ["bright", "run", "school"], answer: 0, pairs: [["bright", "sun"], ["kind", "friend"], ["green", "leaf"]], exercise: { type: "build", word: "bright" }, truth: "A sentence begins with a capital letter and ends with punctuation.", explain: "A capital letter starts a sentence; a full stop, question mark or exclamation mark can end it." },
    { id: "ae6", title: "Tenses and reading practice", emoji: "📚", skill: "Reading", lang: "en", promptLang: "en", words: ["usually", "yesterday", "tomorrow"], fact: "Ngozi usually reads, visited her aunt yesterday and will return tomorrow.", question: "When did Ngozi visit Yaoundé?", options: ["Yesterday.", "Every day.", "Tomorrow."], answer: 0, pairs: [["usually", "present habit"], ["visited", "past"], ["will visit", "future"]], exercise: { type: "dictation", word: "visited" }, truth: "“Tomorrow” can tell us about the future.", explain: "Tomorrow means a day after today, so it points to the future.", story: ["Ngozi usually reads after school.", "Yesterday, she visited her aunt in Yaoundé.", "Tomorrow, she will return to class."] },
    { id: "am2", title: "Numbers to 100: tens and ones", emoji: "🔢", skill: "Place value", lang: "en", promptLang: "en", words: ["tens", "ones", "forty"], fact: "In 47, the 4 means four tens and the 7 means seven ones.", question: "How many tens are in 47?", options: ["4", "7", "47"], answer: 0, pairs: [["20", "2 tens"], ["50", "5 tens"], ["86", "8 tens and 6 ones"]], exercise: { type: "number", prompt: "How many ones are in 63?", answer: 3 }, truth: "The number 35 has 3 tens and 5 ones.", explain: "The 3 is in the tens place and the 5 is in the ones place." },
    { id: "am3", title: "Multiplication as groups", emoji: "✖️", skill: "Multiplication", lang: "en", promptLang: "en", words: ["groups", "multiply", "product"], fact: "Three groups of five make 15: 3 × 5 = 15.", question: "What is 4 × 2?", options: ["6", "8", "10"], answer: 1, pairs: [["2 × 3", "6"], ["5 × 2", "10"], ["10 × 4", "40"]], exercise: { type: "number", prompt: "5 groups of 2 make how many?", answer: 10 }, truth: "Multiplication can show equal groups.", explain: "Adding the same number in equal groups is multiplication." },
    { id: "am4", title: "Multiplication and division", emoji: "➗", skill: "Multiplication", lang: "en", promptLang: "en", words: ["divide", "share", "equal"], fact: "Division shares a number into equal groups.", question: "24 oranges are shared equally among 4 baskets. How many are in each basket?", options: ["4", "6", "8"], answer: 1, pairs: [["18 ÷ 3", "6"], ["20 ÷ 5", "4"], ["4 × 7", "28"]], exercise: { type: "number", prompt: "36 ÷ 6 = ?", answer: 6 }, truth: "If 12 mangoes are shared among 3 children, each gets 4.", explain: "12 divided by 3 equals 4." },
    { id: "am5", title: "Fractions and decimals", emoji: "½", skill: "Fractions", lang: "en", promptLang: "en", words: ["half", "quarter", "decimal"], fact: "One half is 0.5, and one quarter is 0.25.", question: "Which decimal is the same as one half?", options: ["0.25", "0.5", "1.5"], answer: 1, pairs: [["½", "0.5"], ["¼", "0.25"], ["¾", "0.75"]], exercise: { type: "number", prompt: "What is ½ of 18?", answer: 9 }, truth: "0.25 is the same as one quarter.", explain: "One quarter written as a decimal is 0.25." },
    { id: "am6", title: "Percentages, area and perimeter", emoji: "📐", skill: "Measurement", lang: "en", promptLang: "en", words: ["percent", "area", "perimeter"], fact: "A rectangle 5 units long and 3 units wide has area 15 square units.", question: "What is the perimeter of a 5 by 3 rectangle?", options: ["8 units", "15 units", "16 units"], answer: 2, pairs: [["area", "inside a shape"], ["perimeter", "around a shape"], ["10%", "one tenth"]], exercise: { type: "number", prompt: "What is 10% of 200?", answer: 20 }, truth: "The perimeter of a 5 by 3 rectangle is 16 units.", explain: "Add all sides: 5 + 3 + 5 + 3 = 16." },
    { id: "as2", title: "Plants and animals", emoji: "🌱", skill: "Living things", lang: "en", promptLang: "en", words: ["plant", "animal", "grow"], fact: "Plants grow, and animals need food and water.", question: "What do plants need to grow?", options: ["Water and light", "Plastic and paint", "Only stones"], answer: 0, pairs: [["plant", "living thing"], ["animal", "living thing"], ["water", "helps living things live"]], exercise: { type: "build", word: "plant" }, truth: "Animals need food and water to live.", explain: "Food and water help animals stay alive and grow.", video: [["🌱", "A small plant grows toward the light."], ["🌧️", "Rain gives plants water."], ["🐐", "Animals need food and water too."]] },
    { id: "as3", title: "Our senses and healthy food", emoji: "🥭", skill: "Health", lang: "en", promptLang: "en", words: ["senses", "taste", "healthy"], fact: "Our senses help us notice the world around us.", question: "Which sense helps you hear a song?", options: ["Hearing", "Smell", "Taste"], answer: 0, pairs: [["eyes", "sight"], ["ears", "hearing"], ["nose", "smell"]], exercise: { type: "build", word: "healthy" }, truth: "Fruit and vegetables can be part of healthy meals.", explain: "Eating a variety of foods helps us get different nutrients." },
    { id: "as4", title: "Water and its states", emoji: "💧", skill: "Materials", lang: "en", promptLang: "en", words: ["solid", "liquid", "water"], fact: "Water can be a liquid, ice can be a solid, and water vapour is a gas.", question: "What is frozen water called?", options: ["Ice", "Steam", "Rain"], answer: 0, pairs: [["ice", "solid water"], ["liquid water", "flows"], ["water vapour", "gas"]], exercise: { type: "build", word: "water" }, truth: "Ice is water in a solid state.", explain: "When water freezes, it becomes solid ice." },
    { id: "as5", title: "Hygiene and preventing malaria", emoji: "🦟", skill: "Health", lang: "en", promptLang: "en", words: ["hygiene", "mosquito", "net"], fact: "A mosquito net and removing stagnant water help prevent mosquito bites.", question: "What can help protect you from mosquito bites at night?", options: ["A mosquito net", "Stagnant water", "An open food bowl"], answer: 0, pairs: [["mosquito net", "helps prevent bites"], ["stagnant water", "can be a mosquito breeding place"], ["handwashing", "good hygiene"]], exercise: { type: "build", word: "mosquito" }, truth: "Removing stagnant water can help prevent mosquitoes from breeding.", explain: "Mosquitoes can breed in stagnant water, so remove it where possible." },
    { id: "as6", title: "Energy and simple machines", emoji: "⚙️", skill: "Technology", lang: "en", promptLang: "en", words: ["energy", "lever", "wheel"], fact: "A lever and a wheel can make some jobs easier.", question: "Which simple machine helps a wheelbarrow move?", options: ["A wheel", "A cloud", "A leaf"], answer: 0, pairs: [["lever", "turns around a point"], ["wheel", "rolls"], ["energy", "makes things work"]], exercise: { type: "build", word: "wheel" }, truth: "A simple machine can help us do work.", explain: "Simple machines change how a force is used." },
    { id: "aso1", title: "My school and my family", emoji: "🏫", skill: "Community", lang: "en", promptLang: "en", words: ["family", "school", "class"], fact: "A family cares for one another, and a school is a place to learn.", question: "Where do pupils learn with a teacher?", options: ["At school", "At a market stall", "On a bus"], answer: 0, pairs: [["family", "people who care for one another"], ["school", "place to learn"], ["classroom", "room for a lesson"]], exercise: { type: "build", word: "school" }, truth: "A classroom is part of a school.", explain: "Pupils learn together in classrooms at school." },
    { id: "aso2", title: "Community helpers", emoji: "👩🏾‍⚕️", skill: "Community", lang: "en", promptLang: "en", words: ["nurse", "teacher", "farmer"], fact: "People in a community do different jobs to help others.", question: "Who helps care for people who are ill?", options: ["A nurse", "A farmer", "A driver"], answer: 0, pairs: [["teacher", "helps pupils learn"], ["nurse", "cares for patients"], ["farmer", "grows food"]], exercise: { type: "build", word: "nurse" }, truth: "A farmer can grow food for the community.", explain: "Farmers grow crops and raise animals for food." },
    { id: "aso3", title: "Directions and simple maps", emoji: "🗺️", skill: "Geography", lang: "en", promptLang: "en", words: ["map", "left", "right"], fact: "A simple map shows places and can help us find a route.", question: "On a map, what can a path help you find?", options: ["A route", "A recipe", "A song"], answer: 0, pairs: [["map", "shows places"], ["left", "direction"], ["right", "direction"]], exercise: { type: "build", word: "map" }, truth: "A map can help us find places.", explain: "Maps show places and routes.", video: [["🗺️", "A map shows places around us."], ["⬅️", "Follow the path to the left."], ["➡️", "Then follow the path to the right."]] },
    { id: "aso4", title: "Cameroon: regions and capital", emoji: "🇨🇲", skill: "Civics", lang: "en", promptLang: "en", words: ["regions", "capital", "Yaoundé"], fact: "Cameroon has 10 regions, and Yaoundé is the capital.", question: "What is the capital of Cameroon?", options: ["Yaoundé", "Douala", "Buea"], answer: 0, pairs: [["Cameroon", "10 regions"], ["capital", "Yaoundé"], ["regions", "10"]], exercise: { type: "build", word: "Yaoundé" }, truth: "Cameroon has ten regions.", explain: "The ten regions include Adamawa, Centre, East, Far North, Littoral, North, North-West, South, South-West and West." },
    { id: "aso5", title: "National symbols, rights and duties", emoji: "⭐", skill: "Civics", lang: "en", promptLang: "en", words: ["flag", "motto", "citizen"], fact: "Cameroon's flag has green, red and yellow stripes, with a yellow star in the red stripe.", question: "Where is the yellow star on Cameroon's flag?", options: ["In the red stripe", "In the green stripe", "Beside the flag"], answer: 0, pairs: [["motto", "Peace – Work – Fatherland"], ["anthem", "O Cameroon, Cradle of our Fathers"], ["flag", "green, red and yellow"]], exercise: { type: "build", word: "citizen" }, truth: "Citizens have rights and duties.", explain: "A national flag, motto and anthem are symbols of Cameroon." },
    { id: "aso6", title: "Cameroon: history and government", emoji: "📜", skill: "Civics", lang: "en", promptLang: "en", words: ["independence", "reunification", "National Day"], fact: "Cameroon became independent on 1 January 1960 and reunited on 1 October 1961.", question: "When is Cameroon's National Day?", options: ["20 May", "1 January", "1 October"], answer: 0, pairs: [["independence", "1 January 1960"], ["reunification", "1 October 1961"], ["National Day", "20 May"]], exercise: { type: "build", word: "history" }, truth: "Cameroon's National Day is 20 May, marking the unitary state established in 1972.", explain: "English and French are the official languages of Cameroon." },
    { id: "af1", title: "Bonjour: greetings", emoji: "👋", skill: "French", lang: "fr", promptLang: "en", words: ["bonjour", "salut", "merci"], fact: "Bonjour is a friendly greeting used during the day.", question: "What does “bonjour” mean?", options: ["Hello", "Goodbye", "Thank you"], answer: 0, pairs: [["bonjour", "hello"], ["au revoir", "goodbye"], ["merci", "thank you"]], exercise: { type: "dictation", word: "bonjour" }, truth: "“Merci” means “thank you” in French.", explain: "Merci is the French word for thank you." },
    { id: "af2", title: "French colours and numbers", emoji: "🎨", skill: "French", lang: "fr", promptLang: "en", words: ["rouge", "jaune", "bleu"], fact: "Rouge means red, jaune means yellow, and bleu means blue.", question: "Which French word means yellow?", options: ["rouge", "jaune", "bleu"], answer: 1, pairs: [["rouge", "red"], ["jaune", "yellow"], ["bleu", "blue"]], exercise: { type: "build", word: "jaune" }, truth: "“Un, deux, trois” means “one, two, three.”", explain: "French numbers one to three are un, deux and trois." },
    { id: "af3", title: "Ma famille", emoji: "👨‍👩‍👧", skill: "French", lang: "fr", promptLang: "en", words: ["mère", "père", "sœur"], fact: "Mère means mother, père means father, and sœur means sister.", question: "Which French word means mother?", options: ["mère", "père", "frère"], answer: 0, pairs: [["mère", "mother"], ["père", "father"], ["frère", "brother"]], exercise: { type: "build", word: "mère" }, truth: "“Mon frère” means “my brother.”", explain: "Frère means brother, and mon means my." },
    { id: "af4", title: "À l'école: classroom objects", emoji: "✏️", skill: "French", lang: "fr", promptLang: "en", words: ["livre", "crayon", "cahier"], fact: "Un livre is a book, and un crayon is a pencil.", question: "Which word means “book” in French?", options: ["un livre", "un crayon", "une règle"], answer: 0, pairs: [["un livre", "a book"], ["un crayon", "a pencil"], ["un cahier", "a notebook"]], exercise: { type: "dictation", word: "crayon" }, truth: "“Une règle” means “a ruler.”", explain: "Règle is the French word for ruler." },
    { id: "af5", title: "Être and avoir in the present", emoji: "💬", skill: "French", lang: "fr", promptLang: "en", words: ["être", "avoir", "suis"], fact: "Je suis means I am, and j'ai means I have.", question: "How do you say “I am” in French?", options: ["Je suis", "J'ai", "Tu es"], answer: 0, pairs: [["je suis", "I am"], ["j'ai", "I have"], ["tu es", "you are"]], exercise: { type: "build", word: "suis" }, truth: "“J'ai un livre” means “I have a book.”", explain: "Avoir means to have; j'ai means I have." },
    { id: "af6", title: "Petite lecture en français", emoji: "📖", skill: "Reading", lang: "fr", promptLang: "en", words: ["école", "amie", "livre"], fact: "Amina va à l'école le matin et lit avec son amie.", question: "Where does Amina go in the morning?", options: ["To school", "To the market", "To the beach"], answer: 0, pairs: [["école", "school"], ["amie", "friend"], ["livre", "book"]], exercise: { type: "dictation", word: "école" }, truth: "“Amina lit un livre” means “Amina reads a book.”", explain: "Lit comes from the French verb lire, to read.", story: ["Amina va à l'école le matin.", "Elle retrouve son amie et ouvre un livre.", "Après la classe, elles rentrent à la maison."] },
    { id: "ff1", title: "Les voyelles a, e, i, o, u", emoji: "🔤", skill: "Lecture", lang: "fr", promptLang: "fr", words: ["a", "e", "i", "o", "u"], fact: "En français, les voyelles sont a, e, i, o et u.", question: "Quelle lettre est une voyelle ?", options: ["a", "b", "t"], answer: 0, pairs: [["a", "voyelle"], ["e", "voyelle"], ["i", "voyelle"]], exercise: { type: "build", word: "ami" }, truth: "La lettre « e » est une voyelle.", explain: "Les voyelles sont a, e, i, o et u.", video: [["🔤", "Voici la voyelle a."], ["📖", "Voici e et i."], ["🎵", "Voici o et u."]] },
    { id: "ff2", title: "Les syllabes", emoji: "👏", skill: "Lecture", lang: "fr", promptLang: "fr", words: ["pa", "ma", "mi"], fact: "On peut lire « pa », « ma » et « mi » en une syllabe.", question: "Quelle syllabe commence par m ?", options: ["pa", "ma", "ta"], answer: 1, pairs: [["pa", "p + a"], ["ma", "m + a"], ["mi", "m + i"]], exercise: { type: "build", word: "papa" }, truth: "Le mot « papa » a deux syllabes : pa-pa.", explain: "On entend deux syllabes dans le mot papa." },
    { id: "ff3", title: "Le nom et l'article", emoji: "📘", skill: "Grammaire", lang: "fr", promptLang: "fr", words: ["nom", "article", "chat"], fact: "Un nom désigne une personne, un animal, un lieu ou une chose.", question: "Quel article accompagne le nom « école » ?", options: ["une", "un", "des"], answer: 0, pairs: [["un chat", "masculin"], ["une école", "féminin"], ["des livres", "pluriel"]], exercise: { type: "build", word: "chat" }, truth: "Dans « une école », le nom est « école ».", explain: "École est le nom ; une est son article." },
    { id: "ff4", title: "Le verbe au présent", emoji: "⚡", skill: "Grammaire", lang: "fr", promptLang: "fr", words: ["parler", "jouer", "chante"], fact: "Au présent, on dit : je parle, tu joues, il chante.", question: "Complète : « Tu ___ au ballon. »", options: ["joues", "joue", "jouons"], answer: 0, pairs: [["je parle", "première personne"], ["tu joues", "deuxième personne"], ["il chante", "troisième personne"]], exercise: { type: "build", word: "parle" }, truth: "On écrit « il chante » au présent.", explain: "Avec « il », le verbe chanter devient « chante » au présent." },
    { id: "ff5", title: "L'accord de l'adjectif", emoji: "🎨", skill: "Grammaire", lang: "fr", promptLang: "fr", words: ["adjectif", "rouge", "petite"], fact: "L'adjectif s'accorde avec le nom : un petit sac, une petite robe.", question: "Complète : « une robe ___ »", options: ["rouge", "rouges", "rougeons"], answer: 0, pairs: [["un petit sac", "masculin singulier"], ["une petite robe", "féminin singulier"], ["des robes rouges", "pluriel"]], exercise: { type: "build", word: "petite" }, truth: "On écrit « une petite fille ».", explain: "Petite s'accorde avec le nom féminin « fille »." },
    { id: "ff6", title: "Lecture et conjugaison", emoji: "📖", skill: "Lecture", lang: "fr", promptLang: "fr", words: ["histoire", "lit", "écrit"], fact: "Paul lit une histoire et sa sœur écrit une phrase.", question: "Que fait Paul après l'école ?", options: ["Il lit un livre.", "Il nage.", "Il cuisine."], answer: 0, pairs: [["je lis", "lire au présent"], ["tu écris", "écrire au présent"], ["elle joue", "jouer au présent"]], exercise: { type: "dictation", word: "lit" }, truth: "Dans « Paul lit », le verbe est au présent.", explain: "Le verbe lire devient « lit » avec il ou elle.", story: ["Paul rentre de l'école avec sa sœur.", "Il lit une histoire et elle écrit une phrase.", "Ensuite, ils jouent dans la cour."] },
    { id: "fm1", title: "Compter jusqu'à 10", emoji: "🔢", skill: "Nombres", lang: "fr", promptLang: "fr", words: ["un", "deux", "trois"], fact: "Après huit et neuf, on compte dix.", question: "Combien font deux pommes et une pomme ?", options: ["2", "3", "4"], answer: 1, pairs: [["1", "un"], ["2", "deux"], ["3", "trois"]], exercise: { type: "number", prompt: "Combien font 4 + 3 ?", answer: 7 }, truth: "Le nombre qui vient après 9 est 10.", explain: "On compte 8, 9, puis 10." },
    { id: "fm2", title: "Additionner jusqu'à 20", emoji: "➕", skill: "Addition", lang: "fr", promptLang: "fr", words: ["addition", "plus", "somme"], fact: "Pour additionner 8 et 5, on obtient 13.", question: "Combien font 7 + 6 ?", options: ["12", "13", "14"], answer: 1, pairs: [["4 + 3", "7"], ["8 + 5", "13"], ["9 + 6", "15"]], exercise: { type: "number", prompt: "Combien font 9 + 8 ?", answer: 17 }, truth: "10 + 5 = 15.", explain: "Dix plus cinq font quinze." },
    { id: "fm3", title: "Les nombres jusqu'à 100", emoji: "💯", skill: "Numération", lang: "fr", promptLang: "fr", words: ["dizaine", "unité", "quarante"], fact: "Dans 47, il y a 4 dizaines et 7 unités.", question: "Combien y a-t-il de dizaines dans 63 ?", options: ["3", "6", "63"], answer: 1, pairs: [["20", "2 dizaines"], ["50", "5 dizaines"], ["86", "8 dizaines et 6 unités"]], exercise: { type: "number", prompt: "Combien y a-t-il d'unités dans 35 ?", answer: 5 }, truth: "35 contient 3 dizaines et 5 unités.", explain: "Le chiffre 3 indique les dizaines et le chiffre 5 les unités." },
    { id: "fm4", title: "Les tables de multiplication", emoji: "✖️", skill: "Multiplication", lang: "fr", promptLang: "fr", words: ["fois", "produit", "table"], fact: "Trois fois cinq font quinze : 3 × 5 = 15.", question: "Combien font 4 × 3 ?", options: ["7", "12", "15"], answer: 1, pairs: [["2 × 4", "8"], ["5 × 3", "15"], ["10 × 2", "20"]], exercise: { type: "number", prompt: "Combien font 6 × 4 ?", answer: 24 }, truth: "5 × 2 = 10.", explain: "Cinq fois deux font dix." },
    { id: "fm5", title: "Les fractions", emoji: "½", skill: "Fractions", lang: "fr", promptLang: "fr", words: ["moitié", "quart", "fraction"], fact: "La moitié de 10 est 5 et le quart de 20 est 5.", question: "Quelle fraction représente une part sur deux ?", options: ["1/2", "1/3", "1/4"], answer: 0, pairs: [["1/2", "une moitié"], ["1/4", "un quart"], ["3/4", "trois quarts"]], exercise: { type: "number", prompt: "Quelle est la moitié de 18 ?", answer: 9 }, truth: "Un quart de 20 est égal à 5.", explain: "20 partagé en quatre parts égales donne 5 par part." },
    { id: "fm6", title: "Pourcentages et périmètres", emoji: "📐", skill: "Mesures", lang: "fr", promptLang: "fr", words: ["pourcentage", "aire", "périmètre"], fact: "Un rectangle de 5 sur 3 a un périmètre de 16 unités.", question: "Quel est le périmètre d'un rectangle de 5 sur 3 ?", options: ["8 unités", "15 unités", "16 unités"], answer: 2, pairs: [["aire", "surface à l'intérieur"], ["périmètre", "tour de la figure"], ["10 %", "un dixième"]], exercise: { type: "number", prompt: "Combien font 10 % de 200 ?", answer: 20 }, truth: "10 % de 200 font 20.", explain: "10 % représentent un dixième ; un dixième de 200 est 20." },
    { id: "fsc1", title: "Mon corps", emoji: "🧍", skill: "Sciences", lang: "fr", promptLang: "fr", words: ["tête", "yeux", "mains"], fact: "Les yeux servent à voir et les oreilles servent à entendre.", question: "Avec quelle partie du corps voit-on ?", options: ["Les yeux", "Les mains", "Les pieds"], answer: 0, pairs: [["yeux", "voir"], ["oreilles", "entendre"], ["nez", "sentir"]], exercise: { type: "build", word: "mains" }, truth: "Les mains nous aident à toucher et à tenir des objets.", explain: "Nous utilisons nos mains pour toucher et tenir." },
    { id: "fsc2", title: "Les animaux", emoji: "🐾", skill: "Sciences", lang: "fr", promptLang: "fr", words: ["animal", "oiseau", "poisson"], fact: "Les animaux ont besoin d'eau et de nourriture pour vivre.", question: "Quel animal vit dans l'eau ?", options: ["Le poisson", "La poule", "Le chat"], answer: 0, pairs: [["oiseau", "a des plumes"], ["poisson", "vit dans l'eau"], ["chèvre", "a quatre pattes"]], exercise: { type: "build", word: "poisson" }, truth: "Un oiseau a des plumes.", explain: "Les plumes couvrent le corps des oiseaux.", video: [["🐟", "Le poisson nage dans l'eau."], ["🐔", "La poule marche sur la terre."], ["🐦", "L'oiseau vole avec ses ailes."]] },
    { id: "fsc3", title: "Les plantes", emoji: "🌿", skill: "Sciences", lang: "fr", promptLang: "fr", words: ["plante", "racine", "feuille"], fact: "Une plante a besoin d'eau et de lumière pour grandir.", question: "Quelle partie de la plante absorbe l'eau du sol ?", options: ["La racine", "La fleur", "Le fruit"], answer: 0, pairs: [["racine", "dans le sol"], ["tige", "porte les feuilles"], ["feuille", "reçoit la lumière"]], exercise: { type: "build", word: "plante" }, truth: "La lumière aide une plante à grandir.", explain: "Les plantes ont besoin de lumière et d'eau.", video: [["🌱", "Une petite plante pousse."], ["💧", "La racine absorbe l'eau."], ["☀️", "La lumière aide la plante à grandir."]] },
    { id: "fsc4", title: "L'eau", emoji: "💧", skill: "Sciences", lang: "fr", promptLang: "fr", words: ["eau", "glace", "vapeur"], fact: "L'eau liquide peut devenir de la glace quand elle gèle.", question: "Comment appelle-t-on l'eau à l'état solide ?", options: ["La glace", "La vapeur", "La pluie"], answer: 0, pairs: [["glace", "solide"], ["eau", "liquide"], ["vapeur d'eau", "gaz"]], exercise: { type: "build", word: "glace" }, truth: "La glace est de l'eau solide.", explain: "Quand l'eau gèle, elle devient de la glace." },
    { id: "fsc5", title: "Hygiène et prévention du paludisme", emoji: "🦟", skill: "Santé", lang: "fr", promptLang: "fr", words: ["hygiène", "moustiquaire", "paludisme"], fact: "Une moustiquaire et l'élimination de l'eau stagnante aident à prévenir les piqûres de moustiques.", question: "Qu'est-ce qui aide à se protéger des piqûres pendant la nuit ?", options: ["Une moustiquaire", "De l'eau stagnante", "Une fenêtre ouverte"], answer: 0, pairs: [["moustiquaire", "protège des piqûres"], ["eau stagnante", "peut attirer les moustiques"], ["mains propres", "bonne hygiène"]], exercise: { type: "build", word: "santé" }, truth: "Éliminer l'eau stagnante peut aider à limiter les moustiques.", explain: "Les moustiques peuvent se développer dans l'eau stagnante." },
    { id: "fsc6", title: "L'énergie", emoji: "⚙️", skill: "Technologie", lang: "fr", promptLang: "fr", words: ["énergie", "levier", "roue"], fact: "Un levier ou une roue peut faciliter certains travaux.", question: "Quelle machine simple aide une brouette à avancer ?", options: ["Une roue", "Un nuage", "Une feuille"], answer: 0, pairs: [["levier", "tourne autour d'un point"], ["roue", "roule"], ["énergie", "fait fonctionner les choses"]], exercise: { type: "build", word: "roue" }, truth: "Une machine simple peut aider à faire un travail.", explain: "Une machine simple permet d'utiliser une force plus facilement." },
    { id: "fh1", title: "Ma famille et mon école", emoji: "🏫", skill: "Vie sociale", lang: "fr", promptLang: "fr", words: ["famille", "école", "classe"], fact: "La famille prend soin de ses membres et l'école est un lieu d'apprentissage.", question: "Où les élèves apprennent-ils avec un enseignant ?", options: ["À l'école", "Au marché", "Dans un taxi"], answer: 0, pairs: [["famille", "personnes qui prennent soin les unes des autres"], ["école", "lieu pour apprendre"], ["classe", "lieu d'une leçon"]], exercise: { type: "build", word: "école" }, truth: "La salle de classe fait partie de l'école.", explain: "Les élèves apprennent ensemble dans une salle de classe." },
    { id: "fh2", title: "Mon quartier", emoji: "🏘️", skill: "Géographie", lang: "fr", promptLang: "fr", words: ["quartier", "route", "voisin"], fact: "Un quartier est une partie d'une ville ou d'un village où vivent des voisins.", question: "Qui habite près de chez toi ?", options: ["Un voisin", "Un nuage", "Une rivière"], answer: 0, pairs: [["voisin", "personne qui habite près de nous"], ["route", "chemin pour se déplacer"], ["quartier", "partie d'une ville"]], exercise: { type: "build", word: "voisin" }, truth: "Une route permet de se déplacer dans un quartier.", explain: "Les routes relient les lieux d'un quartier." },
    { id: "fh3", title: "Les métiers", emoji: "🧑🏾‍🔧", skill: "Vie sociale", lang: "fr", promptLang: "fr", words: ["métier", "infirmier", "agriculteur"], fact: "Les personnes exercent différents métiers pour aider la communauté.", question: "Qui soigne les personnes malades ?", options: ["L'infirmier", "L'agriculteur", "Le chauffeur"], answer: 0, pairs: [["enseignant", "aide les élèves à apprendre"], ["infirmier", "soigne les patients"], ["agriculteur", "cultive la nourriture"]], exercise: { type: "build", word: "métier" }, truth: "L'agriculteur peut cultiver des aliments.", explain: "Les agriculteurs cultivent des plantes pour produire de la nourriture." },
    { id: "fh4", title: "Les régions du Cameroun", emoji: "🇨🇲", skill: "Géographie", lang: "fr", promptLang: "fr", words: ["régions", "capitale", "Yaoundé"], fact: "Le Cameroun compte 10 régions et Yaoundé est sa capitale.", question: "Quelle est la capitale du Cameroun ?", options: ["Yaoundé", "Douala", "Buea"], answer: 0, pairs: [["Cameroun", "10 régions"], ["capitale", "Yaoundé"], ["régions", "10"]], exercise: { type: "build", word: "Yaoundé" }, truth: "Le Cameroun compte dix régions.", explain: "Les régions sont l'Adamaoua, le Centre, l'Est, l'Extrême-Nord, le Littoral, le Nord, le Nord-Ouest, le Sud, le Sud-Ouest et l'Ouest." },
    { id: "fh5", title: "Les symboles nationaux", emoji: "⭐", skill: "Civisme", lang: "fr", promptLang: "fr", words: ["drapeau", "devise", "hymne"], fact: "Le drapeau du Cameroun a trois bandes verticales vert, rouge et jaune, avec une étoile jaune dans la bande rouge.", question: "Où se trouve l'étoile jaune du drapeau ?", options: ["Dans la bande rouge", "Dans la bande verte", "À côté du drapeau"], answer: 0, pairs: [["devise", "Paix – Travail – Patrie"], ["hymne", "Ô Cameroun, berceau de nos ancêtres"], ["drapeau", "vert, rouge et jaune"]], exercise: { type: "build", word: "drapeau" }, truth: "La devise du Cameroun est « Paix – Travail – Patrie ».", explain: "Une devise est un symbole national." },
    { id: "fh6", title: "L'histoire du Cameroun", emoji: "📜", skill: "Civisme", lang: "fr", promptLang: "fr", words: ["indépendance", "réunification", "fête nationale"], fact: "Le Cameroun est devenu indépendant le 1er janvier 1960 et a été réunifié le 1er octobre 1961.", question: "Quand célèbre-t-on la fête nationale du Cameroun ?", options: ["Le 20 mai", "Le 1er janvier", "Le 1er octobre"], answer: 0, pairs: [["indépendance", "1er janvier 1960"], ["réunification", "1er octobre 1961"], ["fête nationale", "20 mai"]], exercise: { type: "build", word: "histoire" }, truth: "Les langues officielles du Cameroun sont le français et l'anglais.", explain: "Le français et l'anglais sont les langues officielles du Cameroun." },
    { id: "fa1", title: "Hello: greetings", emoji: "👋", skill: "English", lang: "en", promptLang: "fr", words: ["hello", "goodbye", "please"], fact: "Hello is a friendly greeting.", question: "Que signifie « hello » ?", options: ["Bonjour", "Au revoir", "Merci"], answer: 0, pairs: [["hello", "bonjour"], ["goodbye", "au revoir"], ["please", "s'il vous plaît"]], exercise: { type: "dictation", word: "hello" }, truth: "“Thank you” means « merci ».", explain: "Thank you is the English phrase for merci." },
    { id: "fa2", title: "Colours", emoji: "🎨", skill: "English", lang: "en", promptLang: "fr", words: ["red", "yellow", "blue"], fact: "Red, yellow and blue are colour words.", question: "Quel mot anglais signifie « rouge » ?", options: ["red", "blue", "green"], answer: 0, pairs: [["red", "rouge"], ["yellow", "jaune"], ["blue", "bleu"]], exercise: { type: "build", word: "yellow" }, truth: "“Green” signifie « vert ».", explain: "Green est le mot anglais pour vert." },
    { id: "fa3", title: "Numbers 1 to 20", emoji: "🔢", skill: "English", lang: "en", promptLang: "fr", words: ["one", "two", "three"], fact: "One, two and three are the first numbers in English.", question: "Quel mot anglais signifie « cinq » ?", options: ["four", "five", "six"], answer: 1, pairs: [["one", "un"], ["two", "deux"], ["three", "trois"]], exercise: { type: "dictation", word: "seven" }, truth: "“Ten” means « dix ».", explain: "Ten is the English word for dix." },
    { id: "fa4", title: "My family", emoji: "👨‍👩‍👧", skill: "English", lang: "en", promptLang: "fr", words: ["mother", "father", "sister"], fact: "Mother, father and sister are family words.", question: "Quel mot anglais signifie « frère » ?", options: ["brother", "mother", "sister"], answer: 0, pairs: [["mother", "mère"], ["father", "père"], ["sister", "sœur"]], exercise: { type: "build", word: "brother" }, truth: "“Baby” means « bébé ».", explain: "Baby is the English word for bébé." },
    { id: "fa5", title: "At school", emoji: "🏫", skill: "English", lang: "en", promptLang: "fr", words: ["book", "pencil", "teacher"], fact: "A book, a pencil and a teacher are found at school.", question: "Quel mot anglais signifie « crayon » ?", options: ["book", "pencil", "desk"], answer: 1, pairs: [["book", "livre"], ["pencil", "crayon"], ["desk", "bureau"]], exercise: { type: "dictation", word: "teacher" }, truth: "“A book” means « un livre ».", explain: "Book is the English word for livre." },
    { id: "fa6", title: "The simple present", emoji: "⏰", skill: "English", lang: "en", promptLang: "fr", words: ["play", "eat", "go"], fact: "Use the simple present for habits: “I play every day.”", question: "Complète : « She ___ to school every day. »", options: ["go", "goes", "going"], answer: 1, pairs: [["I play", "je joue"], ["she eats", "elle mange"], ["they go", "ils vont"]], exercise: { type: "build", word: "plays" }, truth: "Avec he, she ou it, on ajoute souvent -s au présent simple.", explain: "On dit “she goes” et “he plays” au présent simple." }
  ];
  const makeLesson = (spec) => {
    const french = spec.lang === "fr";
    const prompt = (english, frenchText) => spec.promptLang === "fr" ? frenchText : english;
    const activities = [];
    if (spec.video) activities.push({
      type: "video", title: spec.title, scenes: spec.video.map(([art, caption], i) => ({
        bg: ["#DBEAFE", "#FEF3C7", "#D1FAE5"][i % 3], art, anim: ["float", "pop", "bounce"][i % 3], caption
      }))
    });
    else if (spec.story) activities.push({
      type: "story", title: spec.title, pages: spec.story.map((text, i) => ({ emoji: ["📖", "🏫", "😊"][i % 3], text }))
    });
    else activities.push({
      type: "card", title: french ? "Idée clé" : "Key idea", text: spec.words[0], lines: [spec.fact], say: spec.fact
    });
    activities.push({
      type: "choice", prompt: spec.question, options: spec.options.map((t) => ({ t })), answer: spec.answer
    });
    activities.push({ type: "match", prompt: prompt("Match each word with its meaning.", "Associe chaque mot à son sens."), pairs: spec.pairs || commonPairs[french ? "fr" : "en"] });
    const exercise = spec.exercise || { type: "build", word: spec.words[0] };
    if (exercise.type === "number") activities.push({ type: "number", prompt: exercise.prompt, answer: exercise.answer });
    else if (exercise.type === "dictation") activities.push({
      type: "dictation", prompt: prompt("Listen and spell the word.", "Écoute et écris le mot."), say: exercise.word, answer: exercise.word, word: true
    });
    else activities.push({
      type: "build", prompt: prompt("Build the word.", "Construis le mot."), say: exercise.word, word: exercise.word
    });
    const truth = spec.truth || spec.fact;
    activities.push({ type: "truefalse", prompt: truth, answer: spec.truthAnswer !== false, explain: spec.explain || spec.fact });
    return {
      title: spec.title, emoji: spec.emoji, skill: spec.skill, words: spec.words,
      lang: spec.lang, promptLang: spec.promptLang, activities
    };
  };
  specs.forEach((spec) => { C.lessons[spec.id] = makeLesson(spec); });
  const tuplePrompts = {
    en: {
      match: "Match each word with its meaning.",
      build: "Build the word.",
      dict: "Listen and spell the word.",
      missing: "Which letter is missing?",
      order: "Put the words in order."
    },
    fr: {
      match: "Associe chaque paire.",
      build: "Construis le mot.",
      dict: "Écoute et écris le mot.",
      missing: "Complète le mot.",
      order: "Mets les mots dans l'ordre."
    }
  };
  const makeExplicitLesson = (spec) => {
    const defaults = tuplePrompts[spec.promptLang === "fr" ? "fr" : "en"];
    let intro;
    if (spec.intro.card) {
      const [title, text] = spec.intro.card;
      intro = { type: "card", title, text, say: text };
    } else if (spec.intro.video) {
      intro = {
        type: "video",
        title: spec.title,
        scenes: spec.intro.video.map(([art, caption], i) => ({
          bg: ["#DBEAFE", "#FEF3C7", "#D1FAE5"][i % 3],
          art,
          anim: ["float", "pop", "bounce"][i % 3],
          caption
        }))
      };
    } else {
      intro = {
        type: "story",
        title: spec.title,
        pages: spec.intro.story.map((text, i) => ({
          emoji: ["📖", "🏫", "😊"][i % 3],
          text
        }))
      };
    }
    const activities = spec.qs.map((question) => {
      const [type, prompt, value, answerOrIndex, unit] = question;
      if (type === "choice") {
        return { type, prompt, options: value.map((text) => ({ t: String(text) })), answer: answerOrIndex };
      }
      if (type === "tf") return { type: "truefalse", prompt, answer: value, explain: answerOrIndex };
      if (type === "num") return { type: "number", prompt, answer: value, unit: answerOrIndex };
      if (type === "match") return { type, prompt: value || defaults.match, pairs: prompt };
      if (type === "build") return { type, prompt: value || defaults.build, word: prompt, say: prompt };
      if (type === "dict") return { type: "dictation", prompt: value || defaults.dict, say: prompt, answer: prompt, word: true };
      if (type === "missing") {
        const [word, hide, choices, emoji, customPrompt] = question.slice(1);
        return { type, prompt: customPrompt || defaults.missing, word, hide, choices, emoji, say: word };
      }
      if (type === "order") return { type, prompt: value || defaults.order, words: prompt };
      throw new Error(`Unknown curriculum question type: ${type}`);
    });
    return {
      title: spec.title,
      emoji: spec.emoji,
      skill: spec.skill,
      words: spec.words,
      lang: spec.lang,
      promptLang: spec.promptLang,
      activities: [intro, ...activities]
    };
  };
  window.LEXORA_MAKE_EXPLICIT_LESSON = makeExplicitLesson;

})();
