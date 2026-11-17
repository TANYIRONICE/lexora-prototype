// Demo learning content. In the real MVP this comes from the admin dashboard / backend.
window.LEXORA_CONTENT = {
  sections: [
    {
      id: "kids", title: "Kids' English", emoji: "🧸", color: "#1F9D6B", audience: "child",
      desc: "Letters, sounds, words and stories for ages 5–12.",
      units: [{ title: "Unit 1 · Letters & first words", lessons: ["k1", "k2"] },
              { title: "Unit 2 · My family", lessons: [], soon: true }]
    },
    {
      id: "academy", title: "English Academy", emoji: "🎓", color: "#1F4E79", audience: "learner",
      desc: "Grammar, vocabulary, reading and listening for teens and adults.",
      units: [{ title: "Beginner A1 · Unit 1: Hello!", lessons: ["a1", "a2"] },
              { title: "Beginner A1 · Unit 2: Shopping", lessons: [], soon: true }]
    },
    {
      id: "spelling", title: "Spelling Studio", emoji: "✏️", color: "#C2410C", audience: "all",
      desc: "Spelling rules, word building, dictation and tests.",
      units: [{ title: "Word list 1 · Tricky words", lessons: ["s1", "s2"] },
              { title: "Word list 2 · Silent letters", lessons: [], soon: true }]
    }
  ],
  lessons: {
    k1: {
      title: "Letters A, B, C", emoji: "🔤", skill: "Phonics", words: ["apple", "ball", "cat"],
      activities: [
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
