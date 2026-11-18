// Demo learning content. In the real MVP this comes from the admin dashboard / backend.
window.LEXORA_CONTENT = {
  sections: [
    {
      id: "kids", title: "Kids' English", emoji: "🧸", color: "#1F9D6B", audience: "child",
      desc: "Letters, sounds, words and stories for ages 5–12.",
      units: [{ title: "Unit 1 · Letters & first words", lessons: ["k1", "k2", "k3", "k4"] },
              { title: "Unit 2 · My family", lessons: ["k5", "k6"] },
              { title: "Unit 3 · Food & fruit", lessons: [], soon: true }]
    },
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
        { title: "Numbers to 10", audience: "child", lessons: ["m1", "m2", "m4"] },
        { title: "Everyday maths · Fractions & percentages", audience: "learner", lessons: ["m3", "m6"] },
        { title: "Shapes", audience: "child", lessons: ["m5"] },
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
        ] },
        { type: "card", title: "Ask the price", lines: [
          "How much is it?",
          "It costs 500 francs.",
          "The bag costs 10,000 francs."
        ] },
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
        ] },
        { type: "choice", prompt: "Tomatoes cost 1,000 francs. How much are they?", options: [{ t: "500 francs" }, { t: "1,000 francs" }, { t: "2,000 francs" }], answer: 1 },
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
        ] },
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
        ] },
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
        { type: "card", title: "Test instructions", lines: ["Listen carefully and spell each silent-letter word."] },
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
        { type: "card", title: "Circle and square", lines: ["A circle is round.", "A square has four equal sides."] },
        { type: "card", title: "Triangle and rectangle", lines: ["A triangle has three sides.", "A rectangle has four sides."] },
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
        { type: "card", title: "Money in Cameroon", lines: ["Prices in this lesson are in XAF (CFA francs).", "Add prices to find the total."] },
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
