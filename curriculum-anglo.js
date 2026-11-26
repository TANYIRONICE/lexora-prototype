(() => {
  const C = window.LEXORA_CONTENT;
  const make = window.LEXORA_MAKE_EXPLICIT_LESSON;
  const add = (id, title, emoji, skill, words, intro, qs, lang = "en", promptLang = "en") => {
    C.lessons[id] = make({ id, title, emoji, skill, words, intro, qs, lang, promptLang });
  };

  add("ae2", "Short-vowel words", "🔤", "Phonics", ["cat", "pen", "pig"],
    { card: ["Hear the short vowels", "Short vowels make quick sounds in cat, pen, pig, dog and sun. Say each word slowly, then listen for its middle vowel."] },
    [
      ["choice", "Which of these words has the short a sound?", ["cat", "pen", "pig"], 0],
      ["choice", "What short vowel sound do you hear in “pen”?", ["short e", "short i", "short a"], 0],
      ["choice", "Which word has a short i sound in the middle?", ["pig", "pen", "cat"], 0],
      ["choice", "Which sentence contains a short o word?", ["The dog can hop.", "The cat is red.", "The sun is bright."], 0],
      ["choice", "Which word has the short u sound in its middle?", ["sun", "pen", "dog"], 0],
      ["tf", "The vowel sound in “pig” is short i.", true, "The letter i makes its short sound in pig."],
      ["tf", "The middle vowel in “cat” is short e.", false, "Cat has the short a sound in its middle."],
      ["match", [["cat", "short a"], ["pen", "short e"], ["pig", "short i"], ["dog", "short o"]], "Which short vowel belongs with each word?"],
      ["build", "sun", "Can you build the short-u word for the bright thing in the sky?"],
      ["order", ["Ama", "pets", "the", "dog"], "Can you arrange these words into a short-vowel sentence about Ama?"]
    ]);

  add("ae2b", "Plurals: -s and -es", "📚", "Grammar", ["books", "boxes", "buses"],
    { story: ["Ama puts one book and then two books on her desk.", "Ngozi sees one box and writes boxes for more than one.", "Their class also counts buses, dishes and lunch boxes."] },
    [
      ["choice", "How do you write the plural of “book” in Ama’s sentence?", ["books", "bookes", "bookies"], 0],
      ["choice", "Which ending makes “box” plural in Ngozi’s list?", ["-es", "-s only", "-ies"], 0],
      ["choice", "What is the plural of “bus” in the school story?", ["buses", "buss", "busies"], 0],
      ["choice", "Which plural is spelled correctly for “dish”?", ["dishes", "dishs", "dishies"], 0],
      ["choice", "Which word names more than one lunch box?", ["lunch boxes", "lunch boxs", "lunch boxies"], 0],
      ["tf", "We usually add -s to make “book” plural.", true, "Books is the usual plural form of book."],
      ["tf", "The plural of “box” is spelled “boxs.”", false, "Add -es after x: the correct plural is boxes."],
      ["match", [["book", "books"], ["box", "boxes"], ["bus", "buses"], ["dish", "dishes"]], "Which plural form belongs with each singular classroom word?"],
      ["build", "boxes", "Can you build the plural word Ama writes for more than one box?"],
      ["order", ["Three", "boxes", "are", "on", "the", "desk"], "Can you arrange these plural words into the sentence from the story?"]
    ]);

  add("ae2c", "Reading: My school day", "🏫", "Reading", ["school", "teacher", "lesson"],
    { story: ["Ama walks to school in the morning and greets her teacher.", "She reads with her class and helps tidy the room after a lesson.", "After lessons, Ama walks home with Ngozi and tells her about the day."] },
    [
      ["choice", "Where does Ama go in the morning in this school-day story?", ["to school", "to the market", "to the river"], 0],
      ["choice", "Who does Ama greet when she arrives at school?", ["her teacher", "a shopkeeper", "a driver"], 0],
      ["choice", "What does Ama do with her class during the day?", ["reads", "catches fish", "repairs a bus"], 0],
      ["choice", "Which task does Ama help with after a lesson?", ["tidying the room", "selling tomatoes", "watering a road"], 0],
      ["choice", "Who walks home with Ama after lessons?", ["Ngozi", "Fon", "Bih"], 0],
      ["tf", "Ama reads with her class during the school day.", true, "The story says that Ama reads with her class."],
      ["tf", "Ama walks to the market with Ngozi after school.", false, "Ama walks home with Ngozi after her lessons."],
      ["match", [["teacher", "helps pupils learn"], ["lesson", "time spent learning"], ["class", "group of pupils"], ["school", "place for learning"]], "Which school-day meaning belongs with each word?"],
      ["dict", "teacher", "Can you write the person Ama greets at school?"],
      ["order", ["Ama", "greets", "her", "teacher", "at", "school"], "Can you put Ama’s school-day words in sentence order?"]
    ]);

  add("ae3", "Nouns and verbs", "📝", "Grammar", ["noun", "verb", "market"],
    { card: ["Nouns name; verbs act", "A noun names a person, place, animal or thing. A verb tells what someone or something does, such as read, walk or sell."] },
    [
      ["choice", "Which word is a noun in “Ama reads a book”?", ["book", "reads", "quickly"], 0],
      ["choice", "Which word is the action verb in “Ngozi sells mangoes”?", ["sells", "Ngozi", "mangoes"], 0],
      ["choice", "Which noun names a place in “Fon walks to school”?", ["school", "walks", "to"], 0],
      ["choice", "Which verb completes “The pupils ___ a story”?", ["read", "class", "book"], 0],
      ["choice", "Which word names a thing in “Bih carries a basket”?", ["basket", "carries", "gently"], 0],
      ["tf", "A verb can tell what a person does.", true, "Verbs include action words such as reads, walks and sells."],
      ["tf", "The word “market” is an action verb.", false, "Market names a place, so it is a noun."],
      ["match", [["Ama", "person noun"], ["school", "place noun"], ["basket", "thing noun"], ["walks", "action verb"]], "Which grammar label belongs with each word in these sentences?"],
      ["build", "market", "Can you build the noun that names the place where Ngozi sells mangoes?"],
      ["order", ["Bih", "carries", "a", "basket"], "Can you arrange these noun-and-verb words into a sentence?"]
    ]);

  add("ae3b", "Pronouns: he, she, it, they", "👥", "Grammar", ["he", "she", "it"],
    { story: ["Ama has a book, and she reads it with Bih.", "Fon has a ball, and he kicks it across the yard.", "Ama and Bih play together; they share the ball."] },
    [
      ["choice", "Which pronoun can replace “Ama” in a sentence?", ["she", "he", "they"], 0],
      ["choice", "Which pronoun can replace “Fon” in the story?", ["he", "she", "it"], 0],
      ["choice", "Which pronoun can replace “the book” when Ama reads it?", ["it", "they", "he"], 0],
      ["choice", "Which pronoun describes Ama and Bih together?", ["they", "she", "it"], 0],
      ["choice", "Which sentence uses “she” for Ngozi?", ["She reads a book.", "He reads a book.", "It reads a book."], 0],
      ["tf", "We can use “they” for Ama and Bih together.", true, "They refers to more than one person in this sentence."],
      ["tf", "We use “it” to replace the name of one person in this story.", false, "Use he or she for a person; it can replace a thing such as the book."],
      ["match", [["Ama", "she"], ["Fon", "he"], ["the ball", "it"], ["Ama and Bih", "they"]], "Which pronoun can stand for each person or thing in the story?"],
      ["build", "they", "Can you build the pronoun for Ama and Bih playing together?"],
      ["order", ["They", "share", "the", "ball"], "Can you arrange these pronouns and verbs into the story’s final sentence?"]
    ]);

  add("ae3c", "Opposites", "↔️", "Vocabulary", ["opposite", "near", "empty"],
    { video: [["↔️", "Words can have opposite meanings."], ["🪑", "A full basket is not an empty basket."], ["🏫", "A near school is not a far school."]] },
    [
      ["choice", "Which word is the opposite of “near” on a simple map?", ["far", "close", "beside"], 0],
      ["choice", "Which word is the opposite of “empty” for a basket?", ["full", "open", "large"], 0],
      ["choice", "Which word is the opposite of “early” when Ama arrives?", ["late", "soon", "first"], 0],
      ["choice", "Which word is the opposite of “soft” for a mango?", ["hard", "ripe", "sweet"], 0],
      ["choice", "Which word is the opposite of “quiet” in a busy classroom?", ["noisy", "calm", "still"], 0],
      ["tf", "“Far” can mean the opposite of “near.”", true, "Near and far describe opposite distances."],
      ["tf", "A full basket is the same as an empty basket.", false, "Full and empty have opposite meanings."],
      ["match", [["near", "far"], ["empty", "full"], ["early", "late"], ["soft", "hard"]], "Which opposite belongs with each describing word?"],
      ["missing", "quiet", 1, ["u", "a", "e"], "🤫", "Which letter completes “quiet,” the opposite of noisy?"],
      ["order", ["The", "basket", "is", "full"], "Can you arrange these words to describe the opposite of an empty basket?"]
    ]);

  add("ae4", "Past tense and reading", "📖", "Grammar", ["walked", "played", "visited"],
    { card: ["Actions that already happened", "Many action words add -ed to tell about the past. Ama walked, played and visited her aunt yesterday, then read a short story."] },
    [
      ["choice", "Which past-tense word completes “Ama ___ to school yesterday”?", ["walked", "walk", "walking"], 0],
      ["choice", "What is the past tense of “play” in “Bih ___ football”?", ["played", "plays", "playing"], 0],
      ["choice", "Which sentence tells about yesterday?", ["Ngozi visited her aunt.", "Ngozi visits her aunt.", "Ngozi will visit her aunt."], 0],
      ["choice", "Which word has -ed to show a finished action?", ["helped", "helps", "helping"], 0],
      ["choice", "What does the word “jumped” tell us about Fon’s action?", ["It happened in the past.", "It is happening now.", "It will happen tomorrow."], 0],
      ["tf", "Adding -ed to “walk” makes the regular past tense “walked.”", true, "Walked tells about a completed action."],
      ["tf", "“Played” tells what Ama will do tomorrow.", false, "Played is past tense; “will play” tells about tomorrow."],
      ["match", [["walk", "walked"], ["play", "played"], ["help", "helped"], ["visit", "visited"]], "Which regular past-tense form belongs with each action word?"],
      ["build", "walked", "Can you build the past-tense word for Ama’s trip yesterday?"],
      ["order", ["Yesterday,", "Ama", "played", "with", "Bih"], "Can you put these past-tense reading words into a sentence?"]
    ]);

  add("ae4b", "Prepositions of place", "📍", "Grammar", ["under", "beside", "between"],
    { story: ["Bih puts his book on the desk and a pencil beside it.", "A school bag rests under the desk, between two chairs.", "Ama points to a ball behind the door and a clock above the board."] },
    [
      ["choice", "Where is the pencil in the first sentence of the story?", ["beside the book", "under the bag", "behind the door"], 0],
      ["choice", "Which word tells where the bag rests?", ["under", "quickly", "yesterday"], 0],
      ["choice", "Which preposition describes the bag’s place between two chairs?", ["between", "above", "inside"], 0],
      ["choice", "Where does Ama see the ball?", ["behind the door", "on the desk", "under a chair"], 0],
      ["choice", "Which word describes the clock’s place compared with the board?", ["above", "between", "behind"], 0],
      ["tf", "“Beside” can describe the pencil’s place next to the book.", true, "The pencil is beside the book in the story."],
      ["tf", "The school bag is above the desk in the story.", false, "The bag rests under the desk, between two chairs."],
      ["match", [["beside", "next to"], ["under", "below"], ["behind", "at the back of"], ["above", "higher than"]], "Which place meaning belongs with each preposition in the classroom story?"],
      ["missing", "between", 2, ["t", "a", "e"], "🪑", "Which missing letter completes the place word for the bag’s position?"],
      ["order", ["The", "bag", "is", "under", "the", "desk"], "Can you arrange the preposition words to show where Bih’s bag is?"]
    ]);

  add("ae4c", "Comprehension: Market day", "🧺", "Reading", ["market", "mango", "basket"],
    { story: ["Ngozi visits the market with her aunt and carries a small basket.", "They choose ripe mangoes and ask the seller the price.", "Her aunt pays, thanks the seller, and they walk home together."] },
    [
      ["choice", "Who visits the market with Ngozi in the story?", ["her aunt", "her teacher", "her brother"], 0],
      ["choice", "What does Ngozi carry to the market?", ["a basket", "a book", "a football"], 0],
      ["choice", "Which fruit do they choose at the market?", ["mangoes", "oranges", "coconuts"], 0],
      ["choice", "What do they ask the seller before paying?", ["the price", "the time", "the weather"], 0],
      ["choice", "What do Ngozi and her aunt do after the purchase?", ["walk home", "board a plane", "enter a classroom"], 0],
      ["tf", "Ngozi and her aunt choose ripe mangoes.", true, "The story says they choose ripe mangoes."],
      ["tf", "Ngozi’s aunt forgets to thank the seller.", false, "Her aunt thanks the seller before they walk home."],
      ["match", [["basket", "holds the shopping"], ["seller", "offers goods for sale"], ["ripe", "ready to eat"], ["price", "amount to pay"]], "Which market-day meaning belongs with each word?"],
      ["dict", "basket", "Can you write the item Ngozi carries while choosing fruit?"],
      ["order", ["Ngozi", "buys", "ripe", "mangoes", "at", "the", "market"], "Can you arrange these market-day words into a sentence about Ngozi?"]
    ]);

  add("ae5", "Adjectives and punctuation", "✍️", "Grammar", ["adjective", "bright", "sentence"],
    { card: ["Describe things and punctuate clearly", "An adjective describes a person, place or thing, such as a bright flag or ripe mango. A capital letter begins a sentence, and punctuation helps it end clearly."] },
    [
      ["choice", "Which word describes the mango in “Ama ate a ripe mango”?", ["ripe", "ate", "mango"], 0],
      ["choice", "Which adjective best describes a clear morning sky?", ["bright", "walked", "under"], 0],
      ["choice", "Which punctuation mark is missing at the end of “Where is my book”?", ["?", ".", ","], 0],
      ["choice", "Which sentence begins with a capital letter?", ["Ngozi reads a story.", "ngozi reads a story.", "ngozi Reads a story."], 0],
      ["choice", "Which adjective means a bag weighs a lot?", ["heavy", "light", "colourful"], 0],
      ["tf", "An adjective can describe a noun.", true, "Words such as ripe and bright describe nouns."],
      ["tf", "A question should always end with a full stop instead of a question mark.", false, "A written question usually ends with a question mark."],
      ["match", [["ripe", "describes ready fruit"], ["bright", "describes strong light"], ["?", "ends a question"], [".", "ends a statement"]], "Which describing word or punctuation purpose belongs with each item?"],
      ["build", "bright", "Can you build the adjective that describes strong light?"],
      ["order", ["What", "a", "bright", "morning", "!"], "Can you arrange these words and punctuation into an excited sentence?"]
    ]);

  add("ae5b", "Comparatives and superlatives", "📏", "Grammar", ["taller", "tallest", "small"],
    { story: ["Ama compares three mango trees beside the school path.", "One tree is taller than another, but the oldest tree is the tallest.", "A small seedling grows nearby and is smaller than all three trees."] },
    [
      ["choice", "Which word compares two trees when one is higher?", ["taller", "tallest", "tall"], 0],
      ["choice", "Which form describes the highest tree among three?", ["tallest", "taller", "tall"], 0],
      ["choice", "Which word compares two seedlings by size?", ["smaller", "smallest", "small"], 0],
      ["choice", "Which sentence compares one mango tree with another?", ["This tree is taller than that tree.", "This mango tree has many green leaves.", "This tree has a broad green canopy."], 0],
      ["choice", "Which word completes “Of the three, this is the ___ tree”?", ["tallest", "taller", "tall"], 0],
      ["tf", "“Taller” compares the height of two trees.", true, "Taller is a comparative form used to compare two things."],
      ["tf", "“Tallest” compares exactly two trees.", false, "Tallest identifies the greatest height in a group of three or more."],
      ["match", [["tall", "base describing word"], ["taller", "compares two"], ["tallest", "greatest in a group"], ["small", "describes little size"]], "Which comparison meaning belongs with each adjective form?"],
      ["missing", "taller", 3, ["l", "e", "a"], "🌳", "Which letter completes the comparative form used for two trees?"],
      ["order", ["The", "old", "tree", "is", "the", "tallest"], "Can you arrange these comparison words to describe the oldest tree?"]
    ]);

  add("ae5c", "Writing a short letter", "✉️", "Writing", ["greeting", "message", "closing"],
    { video: [["👋", "Start with a greeting, such as Dear Ama."], ["📝", "Write a clear message with a kind detail."], ["✉️", "Finish with a closing and your name."]] },
    [
      ["choice", "Which greeting could begin a friendly letter to Ngozi?", ["Dear Ngozi,", "Goodbye, Ngozi.", "The end,"], 0],
      ["choice", "What should the middle of a short letter share?", ["a clear message", "only the writer’s name", "a list of unrelated dates"], 0],
      ["choice", "Which closing can end a friendly note?", ["Your friend,", "Once upon a time,", "Chapter one,"], 0],
      ["choice", "Where should Ama write her name in a short letter?", ["after the closing", "before the greeting", "inside the date"], 0],
      ["choice", "Which sentence expresses appreciation in a letter to Bih?", ["I enjoyed reading with you.", "I never want to see you again.", "Your answer is always wrong."], 0],
      ["tf", "A friendly letter can begin with a greeting.", true, "A greeting tells the reader who the message is for."],
      ["tf", "A letter should put its closing before its greeting.", false, "A greeting begins the letter and its closing comes near the end."],
      ["match", [["greeting", "opens a friendly letter"], ["message", "shares the main idea"], ["closing", "ends the note politely"], ["name", "shows who wrote it"]], "Which letter-writing purpose belongs with each part?"],
      ["build", "greeting", "Can you build the name of the part that says hello to the reader?"],
      ["order", ["Dear", "Ngozi,", "I", "hope", "you", "are", "well."], "Can you arrange these words as the greeting and opening of a letter?"]
    ]);

  add("ae6", "Tenses and reading practice", "⏳", "Grammar", ["present", "past", "future"],
    { card: ["When actions happen", "The present tells what happens now or often, the past tells what already happened, and the future tells what will happen. Notice the time words in each sentence."] },
    [
      ["choice", "Which sentence uses the present tense for Ama’s daily habit?", ["Ama walks to school each day.", "Ama walked yesterday.", "Ama will walk tomorrow."], 0],
      ["choice", "Which word signals a past action in Bih’s sentence?", ["yesterday", "tomorrow", "often"], 0],
      ["choice", "Which sentence tells about the future?", ["Ngozi will read later.", "Ngozi reads now.", "Ngozi read yesterday."], 0],
      ["choice", "Which verb completes “Last week, Fon ___ a story”?", ["read", "will read", "reads every day"], 0],
      ["choice", "Which time word often signals a future plan?", ["tomorrow", "yesterday", "last week"], 0],
      ["tf", "“Ama played yesterday” describes a past action.", true, "Played and yesterday tell that the action happened in the past."],
      ["tf", "“Will visit” usually tells about an action that already happened.", false, "Will visit describes a future action, not a past one."],
      ["match", [["reads each day", "present habit"], ["walked yesterday", "past action"], ["will visit tomorrow", "future action"], ["now", "time happening at present"]], "Which time meaning belongs with each verb phrase?"],
      ["dict", "tomorrow", "Can you write the time word that can point to a future plan?"],
      ["order", ["Bih", "will", "read", "a", "story", "tomorrow"], "Can you arrange these words into a future-tense reading sentence?"]
    ]);

  add("ae6b", "Conjunctions: joining sentences", "🔗", "Grammar", ["and", "but", "because"],
    { story: ["Ama packed a book and a pencil for school.", "Rain began, but Ngozi carried an umbrella.", "Bih stayed inside because the path was wet."] },
    [
      ["choice", "Which conjunction joins two things Ama packed?", ["and", "because", "but"], 0],
      ["choice", "Which word shows a contrast when rain begins but Ngozi goes out?", ["but", "and", "because"], 0],
      ["choice", "Which conjunction gives Bih’s reason for staying inside?", ["because", "and", "but"], 0],
      ["choice", "Which sentence joins two ideas with “and”?", ["Ama reads and Ngozi writes.", "Ama reads while Ngozi writes.", "Ama reads, but Ngozi writes."], 0],
      ["choice", "Which word completes “The path was wet, ___ Bih stayed inside”?", ["so", "and", "or"], 0],
      ["tf", "“Because” can introduce a reason.", true, "Bih stayed inside because the path was wet."],
      ["tf", "“But” always means two ideas are exactly alike.", false, "But often joins ideas that contrast with each other."],
      ["match", [["and", "adds another idea"], ["but", "shows a contrast"], ["because", "gives a reason"], ["so", "shows a result"]], "Which joining purpose belongs with each conjunction?"],
      ["missing", "because", 4, ["u", "a", "e"], "🔗", "Which letter completes the conjunction that gives a reason?"],
      ["order", ["Bih", "stayed", "inside", "because", "the", "path", "was", "wet"], "Can you arrange the conjunction sentence from the story?"]
    ]);

  add("ae6c", "FSLC practice: English", "📝", "Exam practice", ["reading", "grammar", "sentence"],
    { video: [["📖", "Read each sentence carefully."], ["🔎", "Look for clues before choosing an answer."], ["✍️", "Check spelling, grammar and punctuation."]] },
    [
      ["choice", "In “The pupils carried books,” which word is the verb?", ["carried", "pupils", "books"], 0],
      ["choice", "Which sentence has correct punctuation?", ["Where is the classroom?", "Where is the classroom.", "where is the classroom?"], 0],
      ["choice", "Which word is a pronoun in “They read together”?", ["They", "read", "together"], 0],
      ["choice", "Which past-tense form completes “Ama ___ the note yesterday”?", ["wrote", "writes", "will write"], 0],
      ["choice", "Which conjunction completes “Bih smiled ___ he was happy”?", ["because", "but", "or"], 0],
      ["tf", "Reading the whole sentence can help you understand a new word.", true, "Words around an unfamiliar word can give useful clues."],
      ["tf", "A sentence should begin with a lowercase letter in formal writing.", false, "A written sentence normally begins with a capital letter."],
      ["match", [["noun", "names a person, place or thing"], ["verb", "shows an action or state"], ["pronoun", "can replace a noun"], ["question mark", "ends a written question"]], "Which English exam clue belongs with each grammar term?"],
      ["build", "sentence", "Can you build the word for a group of words that shares a complete idea?"],
      ["order", ["Read", "the", "question", "before", "you", "answer"], "Can you arrange these exam-practice words into a useful instruction?"]
    ]);

  add("am2", "Numbers to 100", "🔢", "Number sense", ["tens", "ones", "place value"],
    { card: ["Tens and ones make numbers", "A two-digit number has tens and ones. In 47, the 4 stands for four tens and the 7 stands for seven ones."] },
    [
      ["choice", "How many tens are in 47 mangoes counted by Ama?", ["4 tens", "7 tens", "47 tens"], 0],
      ["choice", "Which number has 6 tens and 3 ones?", ["63", "36", "603"], 0],
      ["choice", "What is the value of the 8 in 82?", ["80", "8", "2"], 0],
      ["choice", "Which number comes just after 59 on the class chart?", ["60", "58", "69"], 0],
      ["tf", "In 35, the digit 3 stands for 30.", true, "The 3 is in the tens place, so its value is 30."],
      ["tf", "The number 64 has 6 ones and 4 tens.", false, "In 64, 6 means six tens and 4 means four ones."],
      ["match", [["27", "2 tens and 7 ones"], ["50", "5 tens and 0 ones"], ["81", "8 tens and 1 one"], ["39", "3 tens and 9 ones"]], "Which tens-and-ones description belongs with each number?"],
      ["num", "Ngozi has 5 bundles of ten pencils and 6 loose pencils. How many pencils does she have?", 56],
      ["num", "A class counts 34 red seeds and 20 yellow seeds. How many seeds are there altogether?", 54],
      ["num", "Bih has 72 beads and gives away 2 tens of them. How many beads remain?", 52],
      ["num", "The number card shows 8 tens and 4 ones. What number is on the card?", 84]
    ]);

  add("am2b", "Adding and subtracting to 100", "➕", "Arithmetic", ["addition", "subtraction", "sum"],
    { story: ["Ama gathers 28 mangoes in a basket and her cousin adds 14 more.", "They count by tens and ones to find the total.", "Later they share 12 mangoes, so the basket has fewer than before."] },
    [
      ["choice", "Which sum gives the mangoes in the basket after 28 and 14 are joined?", ["42", "32", "52"], 0],
      ["choice", "What is 63 minus 20 when Bih gives away two tens of beads?", ["43", "53", "83"], 0],
      ["choice", "Which number sentence shows 35 plus 9?", ["35 + 9 = 44", "35 + 9 = 34", "35 + 9 = 54"], 0],
      ["choice", "What is 80 minus 7 on the class number line?", ["73", "77", "87"], 0],
      ["tf", "Adding 10 to 46 gives 56.", true, "One more ten changes 46 to 56."],
      ["tf", "Subtracting 5 from 30 gives 35.", false, "30 minus 5 is 25; subtraction makes the amount smaller."],
      ["match", [["24 + 10", "34"], ["50 - 8", "42"], ["31 + 9", "40"], ["70 - 20", "50"]], "Which answer belongs with each addition or subtraction sentence?"],
      ["num", "Ama has 28 mangoes and buys 14 more at the market. How many mangoes does she have?", 42],
      ["num", "A school has 65 exercise books and gives 23 to pupils. How many books remain?", 42],
      ["num", "Ngozi saves 37 XAF on Monday and 25 XAF on Tuesday. How many XAF does she save?", 62, "XAF"],
      ["num", "Fon counts 90 bottle tops and gives 18 to his friend. How many bottle tops are left?", 72]
    ]);

  add("am2c", "Telling the time: o'clock and half past", "🕒", "Time", ["o'clock", "half past", "minute hand"],
    { video: [["🕒", "The long hand points to 12 at o’clock."], ["🕡", "At half past, the long hand points to 6."], ["🏫", "Use the short hand to read the hour."]] },
    [
      ["choice", "Where does the minute hand point at 4 o’clock?", ["12", "6", "4"], 0],
      ["choice", "What time is shown when the minute hand points to 6 and the hour hand is past 2?", ["half past 2", "2 o’clock", "half past 6"], 0],
      ["choice", "Which clock time is written as 7 o’clock?", ["7:00", "7:30", "6:30"], 0],
      ["choice", "If a lesson starts at 9 o’clock, which time is half an hour later?", ["half past 9", "half past 8", "10 o’clock"], 0],
      ["tf", "At half past 5, the minute hand points to 6.", true, "Thirty minutes past the hour places the minute hand on 6."],
      ["tf", "At 3 o’clock, the minute hand points to 3.", false, "At o’clock, the minute hand points to 12."],
      ["match", [["1:00", "one o’clock"], ["4:30", "half past four"], ["8:00", "eight o’clock"], ["10:30", "half past ten"]], "Which spoken clock time belongs with each time on the lesson chart?"],
      ["num", "A reading lesson starts at 2 o’clock and ends half an hour later. What number of the hour is on the clock then?", 2],
      ["num", "Ama begins homework at 5:00 and studies until 5:30. How many minutes does she study?", 30, "minutes"],
      ["num", "The school bell rings at 8 o’clock. How many minutes after 8:00 is half past 8?", 30, "minutes"],
      ["num", "A clock shows 6:30. What number does its minute hand point to?", 6]
    ]);

  add("am3", "Multiplication as groups", "✖️", "Multiplication", ["groups", "rows", "equal"],
    { card: ["Equal groups are multiplication", "Multiplication counts equal groups quickly. Three groups of four mangoes have 4 + 4 + 4, which is the same as 3 × 4."] },
    [
      ["choice", "Ama puts 4 mangoes in each of 3 baskets. Which multiplication sentence counts them?", ["3 × 4", "3 + 4", "4 − 3"], 0],
      ["choice", "Which repeated addition shows 2 rows of 5 pupils?", ["5 + 5", "2 + 5", "5 + 2 + 2"], 0],
      ["choice", "How many wheels are on 4 bicycles with 2 wheels each?", ["8", "6", "10"], 0],
      ["choice", "Which array shows 3 groups of 2 bottle tops?", ["3 rows of 2", "2 rows of 5", "1 row of 3"], 0],
      ["tf", "Four equal groups of 2 can be written as 4 × 2.", true, "Four groups with two in each group make 4 × 2."],
      ["tf", "Three groups of 5 make 3 + 5.", false, "Three groups of 5 are 5 + 5 + 5, or 3 × 5."],
      ["match", [["2 × 3", "two groups of three"], ["4 × 2", "four groups of two"], ["3 × 5", "three groups of five"], ["5 × 1", "five groups of one"]], "Which equal-group description belongs with each multiplication sentence?"],
      ["num", "Ngozi arranges 4 rows of 5 chairs for a class meeting. How many chairs are there?", 20, "chairs"],
      ["num", "A fruit seller fills 3 bags with 6 oranges in each bag. How many oranges are in the bags?", 18, "oranges"],
      ["num", "There are 2 wheels on each of 7 bicycles. How many bicycle wheels are there altogether?", 14, "wheels"],
      ["num", "Bih plants 5 rows with 4 bean seeds in each row. How many seeds does he plant?", 20, "seeds"]
    ]);

  add("am3b", "Money: coins and notes (XAF)", "💰", "Money", ["XAF", "coins", "notes"],
    { story: ["Ngozi visits a market stall with 2,000 XAF to buy plantain.", "The seller gives her 500 XAF in change after the purchase.", "She checks the notes and coins before putting them safely in her purse."] },
    [
      ["choice", "Which amount is greater when Ama compares two market prices?", ["1,000 XAF", "500 XAF", "100 XAF"], 0],
      ["choice", "Which two amounts make 1,000 XAF?", ["500 XAF and 500 XAF", "200 XAF and 200 XAF", "100 XAF and 500 XAF"], 0],
      ["choice", "A mango costs 300 XAF. Which amount is enough to pay for it?", ["500 XAF", "200 XAF", "100 XAF"], 0],
      ["choice", "Which note-and-coin total equals 750 XAF?", ["500 XAF + 200 XAF + 50 XAF", "500 XAF + 100 XAF", "200 XAF + 50 XAF"], 0],
      ["tf", "If a buyer pays 2,000 XAF for goods costing 1,500 XAF, the change is 500 XAF.", true, "2,000 minus 1,500 equals 500 XAF in change."],
      ["tf", "A 100 XAF coin is worth more than a 500 XAF amount.", false, "100 is less than 500, so the 500 XAF amount is greater."],
      ["match", [["100 XAF", "one hundred francs"], ["500 XAF", "five hundred francs"], ["1,000 XAF", "one thousand francs"], ["2,000 XAF", "two thousand francs"]], "Which spoken value belongs with each amount in XAF?"],
      ["num", "Ama buys plantain for 1,200 XAF and pays with 2,000 XAF. How much change does she receive?", 800, "XAF"],
      ["num", "Fon buys two mangoes for 250 XAF each. How many XAF does he pay altogether?", 500, "XAF"],
      ["num", "A notebook costs 750 XAF and a pencil costs 200 XAF. What is the total cost?", 950, "XAF"],
      ["num", "Ngozi has 1,500 XAF and spends 600 XAF on fruit. How many XAF remain?", 900, "XAF"]
    ]);

  add("am3c", "Length: metres and centimetres", "📏", "Measurement", ["metre", "centimetre", "length"],
    { video: [["📏", "A metre is longer than a centimetre."], ["📐", "One metre equals one hundred centimetres."], ["🏫", "Choose the unit that fits what you measure."]] },
    [
      ["choice", "Which unit is best for measuring the length of a classroom?", ["metres", "centimetres", "litres"], 0],
      ["choice", "Which unit suits the length of a pencil?", ["centimetres", "metres", "kilograms"], 0],
      ["choice", "How many centimetres make 1 metre?", ["100", "10", "1,000"], 0],
      ["choice", "Which object is most likely about 1 metre long?", ["a classroom desk", "a small seed", "a grain of rice"], 0],
      ["tf", "A metre is made of 100 centimetres.", true, "One metre equals one hundred centimetres."],
      ["tf", "A pencil is usually measured in metres rather than centimetres.", false, "Centimetres are a more useful unit for a short pencil."],
      ["match", [["100 cm", "1 metre"], ["short pencil", "centimetres"], ["classroom wall", "metres"], ["length", "how long something is"]], "Which length description belongs with each unit or measurement word?"],
      ["num", "A ribbon is 1 metre long. How many centimetres long is the ribbon?", 100, "cm"],
      ["num", "A 40 cm ruler is placed beside a 30 cm strip. What is their total length?", 70, "cm"],
      ["num", "A path is 5 metres long. How many centimetres is that?", 500, "cm"],
      ["num", "A desk is 120 cm long and a bench is 80 cm long. What is their combined length?", 200, "cm"]
    ]);

  add("am4", "Multiplication and division", "➗", "Arithmetic", ["multiply", "divide", "quotient"],
    { card: ["Multiplication and division work together", "Multiplication finds the total in equal groups. Division shares a total into equal groups, so 24 mangoes shared by 6 pupils gives 4 each."] },
    [
      ["choice", "Which multiplication sentence counts 7 bags with 4 oranges in each?", ["7 × 4", "7 + 4", "7 − 4"], 0],
      ["choice", "Which division shares 36 exercise books equally among 6 classes?", ["36 ÷ 6", "36 × 6", "36 + 6"], 0],
      ["choice", "What is the missing factor in 5 × ___ = 30?", ["6", "5", "8"], 0],
      ["choice", "Which fact checks that 42 ÷ 7 = 6?", ["6 × 7 = 42", "42 × 7 = 6", "42 + 7 = 6"], 0],
      ["tf", "If 8 × 5 = 40, then 40 ÷ 8 = 5.", true, "Division reverses multiplication: 8 groups of 5 make 40."],
      ["tf", "Sharing 24 mangoes among 4 pupils gives 8 mangoes each.", false, "24 divided by 4 gives 6 mangoes per pupil."],
      ["match", [["6 × 4", "24"], ["35 ÷ 5", "7"], ["9 × 3", "27"], ["54 ÷ 6", "9"]], "Which product or quotient belongs with each equal-groups calculation?"],
      ["num", "A Buea shop packs 8 boxes with 6 oranges in each box. How many oranges are packed?", 48, "oranges"],
      ["num", "A teacher shares 54 pencils equally among 9 groups. How many pencils go to each group?", 6, "pencils"],
      ["num", "A market seller places 7 mangoes in each basket and fills 9 baskets. How many mangoes are there?", 63, "mangoes"],
      ["num", "Thirty-two pupils form teams of 4 for a game. How many teams are made?", 8, "teams"]
    ]);

  add("am4b", "Mass and capacity: kg, g, litres", "⚖️", "Measurement", ["kilogram", "gram", "litre"],
    { story: ["At a market, Ama compares a 1 kg bag of rice with a 500 g bag of sugar.", "A bucket holds 10 litres, enough to fill five 2-litre bottles.", "The seller uses kilograms for heavier goods and grams for lighter items."] },
    [
      ["choice", "Which is heavier: 1 kg of rice or 500 g of sugar?", ["1 kg of rice", "500 g of sugar", "They weigh the same"], 0],
      ["choice", "A bucket holds 10 litres. How many 2-litre bottles can it fill?", ["5 bottles", "2 bottles", "10 bottles"], 0],
      ["choice", "Which unit would you use to weigh a goat at a farm?", ["kilograms", "millilitres", "centimetres"], 0],
      ["choice", "Which container is most likely to hold about 1 litre?", ["a water bottle", "a 250 ml cup", "a 10-litre bucket"], 0],
      ["tf", "One kilogram is equal to 1,000 grams.", true, "A kilogram contains one thousand grams."],
      ["tf", "A 500 g bag has more mass than a 1 kg bag.", false, "One kilogram is 1,000 g, which is heavier than 500 g."],
      ["match", [["mass of a goat", "kilograms"], ["small spice packet", "grams"], ["water in a jug", "litres"], ["one kilogram", "1,000 grams"]], "Which measurement description belongs with each market item or unit?"],
      ["num", "A market bag has 2 kg of rice and another has 3 kg. What is their total mass?", 5, "kg"],
      ["num", "A 10-litre bucket is poured into 2-litre bottles. How many full bottles can be filled?", 5, "bottles"],
      ["num", "A fruit parcel weighs 1,000 g. How many grams are in half of that mass?", 500, "g"],
      ["num", "Bih carries 4 litres of water in one can and 3 litres in another. How many litres does he carry?", 7, "litres"]
    ]);

  add("am4c", "Time and the calendar", "📅", "Time", ["calendar", "week", "month"],
    { video: [["📅", "A calendar shows days, weeks and months."], ["🗓️", "Seven days make one week."], ["🎉", "Use dates to plan school events."]] },
    [
      ["choice", "How many days are in one week on a school calendar?", ["7", "5", "10"], 0],
      ["choice", "Which calendar unit comes after a day?", ["week", "minute", "second"], 0],
      ["choice", "Which date comes one day after 19 May?", ["20 May", "18 May", "29 May"], 0],
      ["choice", "If a club meets every 7 days, how often does it meet?", ["once a week", "twice a day", "once a month"], 0],
      ["tf", "A week has seven days.", true, "The seven days make one week."],
      ["tf", "A calendar month always has exactly seven days.", false, "A month has more than seven days; a week has seven."],
      ["match", [["one day", "24 hours"], ["one week", "7 days"], ["calendar", "shows dates"], ["month", "contains several weeks"]], "Which time and calendar fact belongs with each word?"],
      ["num", "A school club meets on Monday and again 7 days later. How many days pass between meetings?", 7, "days"],
      ["num", "A class project begins on 3 June and ends on 10 June. How many days separate those dates?", 7, "days"],
      ["num", "A learner reads 15 minutes each day for 4 days. How many minutes does the learner read?", 60, "minutes"],
      ["num", "There are 5 school days in each of 2 weeks. How many school days are there?", 10, "days"]
    ]);

  add("am5", "Fractions and decimals", "🍰", "Fractions", ["fraction", "half", "decimal"],
    { card: ["Fractions show equal parts", "A fraction names equal parts of a whole. One half is 1/2 and can also be written as the decimal 0.5."] },
    [
      ["choice", "Ama shares a mango equally between 2 pupils. What fraction does each pupil get?", ["1/2", "1/3", "2/3"], 0],
      ["choice", "Which decimal is equal to one half of a whole?", ["0.5", "0.2", "1.5"], 0],
      ["choice", "A cake is cut into 4 equal pieces. What fraction is one piece?", ["1/4", "1/2", "3/4"], 0],
      ["choice", "Which fraction is larger when the whole is the same size?", ["3/4", "1/4", "1/8"], 0],
      ["tf", "Two equal halves make one whole.", true, "Two parts of size one half combine to make the whole."],
      ["tf", "The decimal 0.5 is greater than 1 whole.", false, "0.5 is one half, so it is less than 1 whole."],
      ["match", [["1/2", "one half"], ["1/4", "one quarter"], ["3/4", "three quarters"], ["0.5", "decimal for one half"]], "Which fraction or decimal description belongs with each number?"],
      ["num", "Ama eats 1 of 4 equal orange slices. What fraction of the orange remains?", 3, "quarters"],
      ["num", "A bottle is half full with 1 litre when full. How many litres are in the half-full bottle?", 0.5, "litres"],
      ["num", "Ngozi cuts a plantain into 8 equal pieces and shares 4. What number of pieces remain?", 4, "pieces"],
      ["num", "A measuring strip is 1 metre long. What is half of its length in metres?", 0.5, "metres"]
    ]);

  add("am5b", "Large numbers and rounding", "🔢", "Number sense", ["round", "nearest ten", "nearest hundred"],
    { story: ["Bih records the number of visitors at a school reading event.", "He rounds 347 to the nearest ten to make a quick estimate.", "For a larger estimate, he rounds the same number to the nearest hundred."] },
    [
      ["choice", "When 347 is rounded to the nearest ten, which number is closest?", ["350", "340", "300"], 0],
      ["choice", "What is 1,264 rounded to the nearest hundred?", ["1,300", "1,200", "1,260"], 0],
      ["choice", "Which digit helps decide how 682 rounds to the nearest ten?", ["2", "8", "6"], 0],
      ["choice", "What is 4,751 rounded to the nearest thousand?", ["5,000", "4,000", "4,800"], 0],
      ["tf", "When rounding 347 to the nearest ten, the 7 makes it round up to 350.", true, "The ones digit is 7, so 347 rounds up to 350."],
      ["tf", "Rounding 1,264 to the nearest hundred gives 1,200.", false, "The tens digit is 6, so the number rounds up to 1,300."],
      ["match", [["347 to nearest ten", "350"], ["1,264 to nearest hundred", "1,300"], ["4,751 to nearest thousand", "5,000"], ["682 to nearest ten", "680"]], "Which rounded estimate belongs with each number from the school event?"],
      ["num", "Ama counts 286 books and rounds to the nearest ten for a report. What is the rounded number?", 290],
      ["num", "A reading fair has 1,438 visitors. What is that number rounded to the nearest hundred?", 1400],
      ["num", "A library records 3,620 pages read. What is this amount rounded to the nearest thousand?", 4000],
      ["num", "Ngozi rounds 754 pencils to the nearest ten. What number does she report?", 750]
    ]);

  add("am5c", "Angles and triangles", "📐", "Geometry", ["angle", "triangle", "right angle"],
    { video: [["📐", "An angle is made when two lines meet."], ["⬜", "A square corner is a right angle of 90 degrees."], ["🔺", "A triangle has three sides and three angles."]] },
    [
      ["choice", "Which angle is the same size as a square corner?", ["90 degrees", "45 degrees", "180 degrees"], 0],
      ["choice", "Ama draws a square corner in her exercise book. How many degrees is that angle?", ["90", "45", "180"], 0],
      ["choice", "Which triangle has all three sides the same length?", ["equilateral", "right-angled", "open"], 0],
      ["choice", "Which tool can help measure an angle in a drawing?", ["protractor", "ruler only", "weighing scale"], 0],
      ["tf", "A triangle has three sides.", true, "The name triangle describes a shape with three sides."],
      ["tf", "A right angle is smaller than 45 degrees.", false, "A right angle is 90 degrees, which is greater than 45 degrees."],
      ["match", [["right angle", "90 degrees"], ["straight angle", "180 degrees"], ["triangle", "3 sides"], ["square", "4 equal sides"]], "Which geometry fact belongs with each angle or shape?"],
      ["num", "A right angle measures 90 degrees. What number of degrees is that?", 90, "degrees"],
      ["num", "A triangle has angles of 60 degrees and 70 degrees. How many degrees is its third angle?", 50, "degrees"],
      ["num", "Two right angles meet at a point. How many degrees do they make altogether?", 180, "degrees"],
      ["num", "A triangle has sides of 5 cm, 5 cm and 6 cm. What is its perimeter?", 16, "cm"]
    ]);

  add("am6", "Percentages, area and perimeter", "📊", "Geometry", ["percent", "area", "perimeter"],
    { card: ["Measure shapes and parts of a whole", "A percentage is a part out of one hundred. Area measures the space inside a shape, while perimeter measures the distance around its edge."] },
    [
      ["choice", "What is 50% of 20 mangoes in a basket?", ["10", "5", "15"], 0],
      ["choice", "Which calculation finds the area of a 4 cm by 3 cm rectangle?", ["4 × 3", "4 + 3", "4 + 3 + 4"], 0],
      ["choice", "Which measurement describes the distance around a garden?", ["perimeter", "area", "percentage"], 0],
      ["choice", "What is 25% as a fraction of one whole?", ["1/4", "1/2", "3/4"], 0],
      ["tf", "A rectangle’s area can be found by multiplying its length by its width.", true, "Length times width counts the square units inside a rectangle."],
      ["tf", "Perimeter measures the space inside a shape.", false, "Area measures inside space; perimeter measures the distance around."],
      ["match", [["area", "space inside a shape"], ["perimeter", "distance around a shape"], ["50%", "one half"], ["25%", "one quarter"]], "Which measurement or percentage meaning belongs with each word?"],
      ["num", "A garden is 8 metres long and 3 metres wide. What is its area?", 24, "square metres"],
      ["num", "A rectangular mat is 5 cm long and 4 cm wide. What is its perimeter?", 18, "cm"],
      ["num", "A class has 20 pupils and 50% bring a book. How many pupils bring one?", 10, "pupils"],
      ["num", "Ama has 40 seeds and plants 25% of them. How many seeds does she plant?", 10, "seeds"]
    ]);

  add("am6b", "Averages and bar graphs", "📊", "Data", ["average", "bar graph", "total"],
    { story: ["Ama records how many fruit pieces four classmates bring for snack.", "A bar graph shows plantain, mango, orange and banana counts.", "The class finds the total and shares it equally to calculate an average."] },
    [
      ["choice", "Which graph uses bars to compare counts of different fruits?", ["bar graph", "map", "calendar"], 0],
      ["choice", "What should the labels on a fruit bar graph tell the reader?", ["what each bar counts", "the colour of the paper", "who drew the frame"], 0],
      ["choice", "What is the average of 2, 4 and 6 fruit pieces?", ["4", "3", "6"], 0],
      ["choice", "Which bar shows the largest count when its height is greatest?", ["the tallest bar", "the shortest bar", "the label"], 0],
      ["tf", "A bar graph can compare amounts in different groups.", true, "The bars let readers compare category counts."],
      ["tf", "The average of 2, 4 and 6 is 6.", false, "Their total is 12; dividing by 3 gives an average of 4."],
      ["match", [["bar", "shows one category's amount"], ["label", "names a category"], ["average", "equal share of a total"], ["tallest bar", "largest displayed count"]], "Which data-graph meaning belongs with each term?"],
      ["num", "Ama records 4 mangoes, 6 bananas and 2 oranges. How many fruit pieces are recorded altogether?", 12, "pieces"],
      ["num", "Three pupils bring 2, 5 and 8 fruit pieces. What is their average number of pieces?", 5, "pieces"],
      ["num", "A bar graph shows 7 plantains and 4 mangoes. How many more plantains than mangoes are there?", 3, "pieces"],
      ["num", "Four pupils bring 3, 3, 5 and 5 fruit pieces. What is the average per pupil?", 4, "pieces"]
    ]);

  add("am6c", "FSLC practice: Mathematics", "🧮", "Exam practice", ["estimate", "measure", "problem"],
    { video: [["🔍", "Read what the problem is asking."], ["🧮", "Choose a useful operation and show your work."], ["✅", "Check that your answer and unit make sense."]] },
    [
      ["choice", "A rectangle is 6 cm long and 4 cm wide. Which expression finds its area?", ["6 × 4", "6 + 4", "6 − 4"], 0],
      ["choice", "Which fraction is equal to 0.5 in an exam question?", ["1/2", "1/4", "3/4"], 0],
      ["choice", "Which operation shares 48 oranges equally among 6 pupils?", ["48 ÷ 6", "48 × 6", "48 + 6"], 0],
      ["choice", "Which estimate is closest to 398 rounded to the nearest hundred?", ["400", "300", "390"], 0],
      ["tf", "A perimeter question asks for the distance around a shape.", true, "Perimeter is the distance around the boundary of a shape."],
      ["tf", "The average of 5, 5 and 5 is 15.", false, "The total is 15, but dividing by 3 gives an average of 5."],
      ["match", [["area", "inside space"], ["perimeter", "distance around"], ["fraction", "equal part of a whole"], ["average", "total shared equally"]], "Which exam definition belongs with each mathematics word?"],
      ["num", "A school garden is 7 metres long and 5 metres wide. What is its area?", 35, "square metres"],
      ["num", "Ama shares 36 mangoes equally among 4 groups. How many mangoes does each group receive?", 9, "mangoes"],
      ["num", "A learner scores 6, 8 and 10 points in three rounds. What is the average score?", 8, "points"],
      ["num", "A 2,000 XAF book is reduced by 500 XAF. What is the new price?", 1500, "XAF"]
    ]);

  add("as1b", "Living and non-living things", "🌱", "Science", ["living", "grow", "non-living"],
    { story: ["Ngozi plants a bean seed in soil and gives it water.", "A small green shoot grows, while a nearby stone stays the same.", "The plant is living; the stone is non-living."] },
    [
      ["choice", "Which thing in Ngozi’s story is living?", ["bean plant", "stone", "plastic cup"], 0],
      ["choice", "Which sign can show that a seed has begun to live?", ["it grows", "it turns into a rock", "it never changes"], 0],
      ["choice", "Which classroom item is non-living?", ["wooden ruler", "potted bean plant", "small insect"], 0],
      ["choice", "What does a growing plant need from its surroundings?", ["water", "a plastic toy", "a metal spoon"], 0],
      ["choice", "Which pair contains two living things?", ["pupil and bird", "desk and cup", "stone and book"], 0],
      ["tf", "A living plant can grow.", true, "Growth is one sign that a plant is living."],
      ["tf", "The stone in Ngozi’s story grows leaves after watering.", false, "The bean plant can grow leaves; a stone does not grow."],
      ["match", [["bean plant", "living thing"], ["stone", "non-living thing"], ["grow", "increase in size"], ["water", "needed by a growing plant"]], "Which living-or-non-living fact belongs with each item in Ngozi’s story?"],
      ["build", "living", "Can you build the word that describes Ngozi’s growing bean plant?"],
      ["order", ["Ngozi", "plants", "a", "bean", "seed", "in", "soil"], "Can you arrange the science-story words in the order Ngozi plants her seed?"]
    ]);

  add("as1c", "Weather", "🌦️", "Science", ["weather", "rain", "cloud"],
    { video: [["☀️", "Sunny weather brings bright sunlight."], ["🌧️", "Rain falls from clouds and can wet the ground."], ["🌬️", "Wind is moving air that we can feel."]] },
    [
      ["choice", "Which weather sign may make Ama carry an umbrella?", ["dark rain clouds", "a clear dry sky", "a classroom bell"], 0],
      ["choice", "What can a weather report tell a family?", ["whether rain may come", "the price of every book", "the number of pupils"], 0],
      ["choice", "Which word names moving air?", ["wind", "soil", "shadow"], 0],
      ["choice", "Which clothing could help Ngozi stay dry in rain?", ["raincoat", "sandals only", "sun hat only"], 0],
      ["choice", "Which weather has bright sunlight and few clouds?", ["sunny", "rainy", "stormy"], 0],
      ["tf", "Wind is moving air.", true, "We feel wind when air moves around us."],
      ["tf", "Rain usually makes the ground drier.", false, "Rain adds water and makes the ground wet."],
      ["match", [["sunny", "bright sunlight"], ["rainy", "water falls from clouds"], ["windy", "moving air"], ["cloud", "can bring rain"]], "Which weather description belongs with each word on the class chart?"],
      ["missing", "weather", 2, ["a", "e", "i"], "🌦️", "Which letter completes the word for rain, wind and sunshine conditions?"],
      ["order", ["Dark", "clouds", "can", "bring", "rain"], "Can you arrange these weather words into a sentence about clouds?"]
    ]);

  add("as2", "Plants and animals", "🌿", "Science", ["root", "leaf", "animal"],
    { card: ["Plants and animals are living things", "Roots take in water from the soil, and leaves receive light. Animals need water and food, while plants and animals both grow."] },
    [
      ["choice", "Which part of a plant takes in water from the soil?", ["root", "flower", "fruit"], 0],
      ["choice", "Which plant part usually receives sunlight?", ["leaf", "root", "seed"], 0],
      ["choice", "What do animals need to live and grow?", ["food and water", "soil and sunlight", "plastic and metal"], 0],
      ["choice", "Which item is an animal in a school garden?", ["butterfly", "stone", "cup"], 0],
      ["choice", "Which plant part can hold a seed?", ["fruit", "root", "rock"], 0],
      ["tf", "Roots can absorb water from soil.", true, "Roots take in water that the plant needs."],
      ["tf", "Animals can live without food or water.", false, "Animals need food and water to live and grow."],
      ["match", [["root", "takes in water"], ["leaf", "receives light"], ["animal", "needs food and water"], ["seed", "can grow into a plant"]], "Which plant or animal fact belongs with each word?"],
      ["build", "root", "Can you build the name of the plant part that takes in water?"],
      ["order", ["A", "seed", "can", "grow", "into", "a", "plant"], "Can you arrange these living-things words into a sentence about a seed?"]
    ]);

  add("as2b", "Domestic and wild animals", "🐾", "Science", ["domestic", "wild", "habitat"],
    { story: ["At home, Ama helps care for a domestic chicken and gives it water.", "On a nature walk, her class watches a wild bird in a tree from a safe distance.", "Animals live in places that meet their needs for food, water and shelter."] },
    [
      ["choice", "Which animal in the story is cared for at home?", ["chicken", "wild bird", "butterfly"], 0],
      ["choice", "Where does the class see the wild bird?", ["in a tree", "in a cooking pot", "inside a book"], 0],
      ["choice", "What should pupils do to observe a wild animal safely?", ["watch it from a safe distance", "move close to touch it", "feed it from their hands"], 0],
      ["choice", "Which animal is commonly kept by people at home?", ["goat", "lion", "crocodile"], 0],
      ["choice", "What is a habitat?", ["a place where an animal lives", "a kind of food", "a weather tool"], 0],
      ["tf", "A domestic chicken may depend on people for care.", true, "Ama helps give the domestic chicken water."],
      ["tf", "Pupils should catch a wild animal to learn about it.", false, "The class watches safely from a distance and leaves wild animals in their habitat."],
      ["match", [["domestic animal", "cared for by people"], ["wild animal", "lives without being kept at home"], ["habitat", "place where an animal lives"], ["shelter", "protection from surroundings"]], "Which animal-care meaning belongs with each science word?"],
      ["dict", "habitat", "Can you write the word for the place where an animal lives?"],
      ["order", ["The", "class", "watches", "the", "wild", "bird", "safely"], "Can you arrange the animal-observation words into a safe science sentence?"]
    ]);

  add("as2c", "Keeping clean: teeth and hands", "🪥", "Health science", ["hygiene", "toothbrush", "soap"],
    { video: [["🧼", "Wet your hands and use soap."], ["🤲", "Rub both hands before rinsing them."], ["🪥", "Brush teeth gently to help keep them clean."]] },
    [
      ["choice", "What should Ama use with water to wash her hands?", ["soap", "soil", "paint"], 0],
      ["choice", "When is a good time to wash hands?", ["before eating", "after putting on shoes only", "only once a month"], 0],
      ["choice", "Which tool helps clean teeth?", ["toothbrush", "ruler", "spoon"], 0],
      ["choice", "How should pupils brush their teeth?", ["gently and carefully", "with a stone", "only when it rains"], 0],
      ["choice", "Why should hands be rinsed after rubbing with soap?", ["to wash away soap and dirt", "to make them sticky", "to keep the soap on"], 0],
      ["tf", "Soap and water help clean hands.", true, "Washing with soap and water removes dirt from hands."],
      ["tf", "Sharing one toothbrush is a good way to clean every pupil’s teeth.", false, "Each person should use their own toothbrush for oral hygiene."],
      ["match", [["soap", "used to wash hands"], ["toothbrush", "cleans teeth"], ["rinse", "wash with clean water"], ["hygiene", "habits that help keep clean"]], "Which clean-habits meaning belongs with each item?"],
      ["missing", "soap", 1, ["o", "a", "u"], "🧼", "Which letter completes the hand-washing item used with water?"],
      ["order", ["Wet", "hands,", "use", "soap,", "rub,", "then", "rinse"], "Can you arrange these words into the hand-washing steps?"]
    ]);

  add("as3", "Senses and healthy food", "🍎", "Health science", ["senses", "taste", "balanced"],
    { card: ["Our senses and food choices", "Eyes see, ears hear, noses smell, tongues taste and skin feels. A varied meal with fruits and vegetables can help pupils choose healthy foods."] },
    [
      ["choice", "Which sense helps Ama notice the sweet taste of a mango?", ["taste", "hearing", "touch"], 0],
      ["choice", "Which body part helps pupils hear a school bell?", ["ears", "eyes", "tongue"], 0],
      ["choice", "Which food is a fruit that can be part of a healthy snack?", ["banana", "cassava", "beans"], 0],
      ["choice", "Which sense helps Bih notice a ndolé meal’s smell?", ["smell", "sight", "hearing"], 0],
      ["choice", "Which meal includes a staple food and vegetables?", ["plantain with leafy vegetables", "sweet biscuits and soft drinks", "fried dough and fruit juice"], 0],
      ["tf", "The tongue helps us taste food.", true, "Taste is one of the senses and the tongue helps us taste."],
      ["tf", "The eyes help us hear music.", false, "Ears help us hear; eyes help us see."],
      ["match", [["eyes", "see"], ["ears", "hear"], ["nose", "smell"], ["tongue", "taste"]], "Which sense belongs with each body part in this healthy-food lesson?"],
      ["build", "taste", "Can you build the sense Ama uses when she eats a mango?"],
      ["order", ["A", "balanced", "meal", "can", "include", "fruit"], "Can you arrange these healthy-food words into a sentence?"]
    ]);

  add("as3b", "Soil and rocks", "🪨", "Science", ["soil", "rock", "plant"],
    { story: ["Bih looks at dark soil in the school garden before planting a seed.", "His class finds small rocks mixed with the soil and leaves them beside the path.", "The plant grows in soil, while a rock keeps its shape."] },
    [
      ["choice", "Where does Bih plant the seed in the story?", ["in soil", "inside a rock", "in a paper bag"], 0],
      ["choice", "What does the class find mixed with the garden soil?", ["small rocks", "plastic fruit", "water bottles"], 0],
      ["choice", "Which material can support a plant’s roots?", ["soil", "glass only", "metal"], 0],
      ["choice", "Which item keeps its shape rather than growing?", ["rock", "seedling", "bean plant"], 0],
      ["choice", "What can pupils do with loose rocks on a path?", ["leave them safely beside it", "throw them at plants", "put them in drinking water"], 0],
      ["tf", "Plants can grow in soil.", true, "The seed in the story is planted in soil and grows."],
      ["tf", "A rock grows roots after it is placed beside a path.", false, "Rocks do not grow roots; plants grow roots in soil."],
      ["match", [["soil", "ground where plants can grow"], ["rock", "hard piece of earth material"], ["root", "part that grows into soil"], ["seed", "can develop into a plant"]], "Which garden meaning belongs with each soil-and-rock word?"],
      ["dict", "soil", "Can you write the ground material where Bih plants his seed?"],
      ["order", ["Bih", "plants", "a", "seed", "in", "the", "soil"], "Can you arrange the garden words into the planting sentence?"]
    ]);

  add("as3c", "Day, night and the Sun", "🌞", "Science", ["day", "night", "Sun"],
    { video: [["🌅", "The Sun appears in the daytime sky."], ["🌇", "Evening comes as the sky grows darker."], ["🌙", "At night, we can often see the Moon and stars."]] },
    [
      ["choice", "At what time of day does the Sun usually provide daylight?", ["daytime", "nighttime", "after midnight"], 0],
      ["choice", "Which object gives Earth light during the day?", ["the Sun", "the Moon", "a streetlight"], 0],
      ["choice", "Which object in the video is shown in the night sky?", ["the Moon", "the Sun", "a rainbow"], 0],
      ["choice", "Which activity is most likely to happen in daylight at school?", ["reading in class", "sleeping through the night", "watching stars from bed"], 0],
      ["choice", "What happens to the sky after daytime moves toward evening?", ["it gradually becomes darker", "it stays as bright as midday all night", "it becomes brighter until midnight"], 0],
      ["tf", "The Sun provides light during the day.", true, "Sunlight brightens the daytime sky."],
      ["tf", "The Moon is the Sun and gives daylight by itself.", false, "The Moon is different from the Sun; the Sun provides daylight."],
      ["match", [["day", "time with sunlight"], ["night", "time after evening"], ["Sun", "star that lights our daytime sky"], ["Moon", "object often seen at night"]], "Which day-or-night description belongs with each sky object or time?"],
      ["build", "night", "Can you build the word for the darker time after evening?"],
      ["order", ["Day", "changes", "to", "evening,", "then", "night"], "Can you arrange these words to show the order of the sky’s daily changes?"]
    ]);

  add("as4", "Water and its states", "💧", "Science", ["solid", "liquid", "water vapour"],
    { card: ["Water can change state", "Water is a liquid, ice is its solid state, and water vapour is a gas. Cooling can freeze water, while heating can make liquid water evaporate."] },
    [
      ["choice", "What is water called when it freezes into a solid?", ["ice", "steam", "rain cloud"], 0],
      ["choice", "Which state of water can flow and take a container’s shape?", ["liquid", "solid", "rock"], 0],
      ["choice", "What can happen to liquid water when it is heated?", ["it evaporates", "it becomes soil", "it turns into metal"], 0],
      ["choice", "Which example is water in its solid state?", ["ice cube", "river water", "water vapour"], 0],
      ["choice", "Which change happens when liquid water becomes ice?", ["freezing", "melting", "pouring"], 0],
      ["tf", "Ice is water in a solid state.", true, "Frozen water becomes solid ice."],
      ["tf", "A liquid keeps the same fixed shape in every container.", false, "A liquid flows and takes the shape of its container."],
      ["match", [["ice", "solid water"], ["rain", "liquid water falling from clouds"], ["water vapour", "gaseous water"], ["freezing", "liquid changing to solid"]], "Which water-state meaning belongs with each example or change?"],
      ["missing", "liquid", 2, ["q", "u", "a"], "💧", "Which letter completes the state of water that can flow?"],
      ["order", ["Liquid", "water", "freezes", "and", "becomes", "ice"], "Can you arrange these water-state words into a sentence about cooling?"]
    ]);

  add("as4b", "Animal life cycles", "🦋", "Science", ["life cycle", "egg", "adult"],
    { story: ["A butterfly begins life as an egg on a plant.", "A caterpillar hatches, eats leaves and changes inside a chrysalis.", "An adult butterfly emerges and can lay eggs to begin the cycle again."] },
    [
      ["choice", "What comes first in the butterfly life cycle in the story?", ["egg", "adult butterfly", "chrysalis"], 0],
      ["choice", "What hatches from the butterfly egg?", ["caterpillar", "frog", "chick"], 0],
      ["choice", "Where does the caterpillar change before becoming an adult?", ["chrysalis", "river", "nest"], 0],
      ["choice", "What can an adult butterfly do to begin another life cycle?", ["lay eggs", "change into a chrysalis", "hatch from an egg"], 0],
      ["choice", "Which phrase describes a life cycle?", ["stages in how a living thing grows", "changes in the weather each day", "steps for measuring a heavy object"], 0],
      ["tf", "A caterpillar hatches from a butterfly egg.", true, "The egg hatches and a caterpillar emerges."],
      ["tf", "A butterfly begins its life as an adult.", false, "The butterfly begins as an egg, then becomes a caterpillar."],
      ["match", [["egg", "first butterfly stage"], ["caterpillar", "young feeding stage"], ["chrysalis", "stage of change"], ["adult", "can lay eggs"]], "Which butterfly life-cycle stage belongs with each description?"],
      ["dict", "chrysalis", "Can you write the name of the stage where the caterpillar changes?"],
      ["order", ["egg", "hatches", "into", "a", "caterpillar"], "Can you arrange these life-cycle words to show what hatches from an egg?"]
    ]);

  add("as4c", "Simple electric circuits", "🔋", "Science & Technology", ["circuit", "battery", "bulb"],
    { video: [["🔋", "A battery can provide energy to a simple circuit."], ["💡", "A complete path can make a small bulb light."], ["🔌", "A gap breaks the path and the bulb goes out."]] },
    [
      ["choice", "What does a simple circuit need for electricity to flow around a path?", ["a complete path", "a switch left open", "a battery with no connections"], 0],
      ["choice", "Which part can provide energy in a classroom circuit model?", ["battery", "switch", "wire"], 0],
      ["choice", "What normally happens when a working bulb is connected in a complete circuit with a battery?", ["the bulb lights", "the bulb stays dark even with working parts", "the battery immediately runs out"], 0],
      ["choice", "What happens if a wire leaves a gap in the circuit?", ["the path is broken", "the bulb becomes brighter", "the battery stores more energy"], 0],
      ["choice", "Which item can open or close a circuit path?", ["switch", "battery", "wire"], 0],
      ["tf", "A complete circuit provides a closed path for electricity.", true, "Electricity can flow around a complete path."],
      ["tf", "A circuit with a gap is complete.", false, "A gap breaks the path, so the circuit is open."],
      ["match", [["battery", "can provide energy"], ["bulb", "can produce light"], ["wire", "connects circuit parts"], ["switch", "opens or closes the path"]], "Which circuit job belongs with each simple component?"],
      ["build", "circuit", "Can you build the word for a complete path that carries electricity?"],
      ["order", ["Connect", "the", "battery,", "wire,", "switch", "and", "bulb"], "Can you arrange these circuit parts in a safe model-building instruction?"]
    ]);

  add("as5", "Hygiene and preventing malaria", "🦟", "Health science", ["mosquito", "net", "stagnant"],
    { card: ["Reduce mosquito bites", "A mosquito net can help protect people while they sleep. Removing stagnant water can reduce places where mosquitoes may breed, alongside advice from health workers."] },
    [
      ["choice", "What can help protect Ama from mosquito bites while she sleeps?", ["a mosquito net", "a wet towel", "an open food basket"], 0],
      ["choice", "Which item should a family empty to reduce stagnant water?", ["a bucket with standing water", "a dry bucket under a roof", "a bottle sealed with a cap"], 0],
      ["choice", "What should Ngozi do if she feels unwell with a fever?", ["tell an adult and get health advice", "wait several days without telling anyone", "take medicine without an adult’s help"], 0],
      ["choice", "Which action helps keep a sleeping area protected from mosquitoes?", ["use a net correctly", "leave water standing in a tray", "remove the net"], 0],
      ["choice", "Who is trained to give health advice about preventing malaria?", ["a health worker", "a market seller", "a road-safety volunteer"], 0],
      ["tf", "A mosquito net can help prevent mosquito bites during sleep.", true, "The net acts as a barrier against mosquito bites."],
      ["tf", "Leaving stagnant water around a home helps prevent mosquitoes.", false, "Removing stagnant water can reduce places where mosquitoes may breed."],
      ["match", [["mosquito net", "barrier used while sleeping"], ["stagnant water", "water that does not flow"], ["health worker", "gives health advice"], ["malaria", "illness needing health care"]], "Which prevention meaning belongs with each health word?"],
      ["missing", "mosquito", 3, ["q", "u", "i"], "🦟", "Which letter completes the insect name in this malaria-prevention lesson?"],
      ["order", ["Use", "a", "net", "and", "remove", "standing", "water"], "Can you arrange these prevention words into two helpful actions?"]
    ]);

  add("as5b", "Digestion and breathing", "🫁", "Health science", ["digest", "lungs", "stomach"],
    { story: ["Ama chews plantain before swallowing a small bite.", "Food moves to the stomach, where digestion helps break it down.", "Her lungs help her breathe in air and breathe out again."] },
    [
      ["choice", "Which body part helps break down swallowed food during digestion?", ["stomach", "lungs", "heart"], 0],
      ["choice", "Which organs help Ama breathe?", ["lungs", "stomach", "kidneys"], 0],
      ["choice", "Which action begins digestion in the mouth?", ["chewing food", "breathing deeply", "moving the arms"], 0],
      ["choice", "What does breathing bring into the body?", ["air", "food", "water"], 0],
      ["choice", "Which action is part of digestion?", ["food is broken down", "the heart pumps blood", "the lungs take in air"], 0],
      ["tf", "The lungs help people breathe.", true, "Lungs are used for breathing."],
      ["tf", "The lungs digest plantain after it is swallowed.", false, "The stomach helps digest food; the lungs help with breathing."],
      ["match", [["teeth", "chew food"], ["stomach", "helps digest food"], ["lungs", "help with breathing"], ["air", "moves in and out when breathing"]], "Which digestion-or-breathing role belongs with each body part or substance?"],
      ["dict", "lungs", "Can you write the body organs that help Ama breathe?"],
      ["order", ["Chew", "food,", "swallow,", "then", "digest", "it"], "Can you arrange these digestion words in a sensible order?"]
    ]);

  add("as5c", "Caring for the environment", "🌍", "Science", ["environment", "reuse", "litter"],
    { video: [["🧹", "Put litter in a suitable bin."], ["♻️", "Reuse safe items when they still have a purpose."], ["🌱", "Keep shared paths and planting areas clean."]] },
    [
      ["choice", "Where should Bih put an empty snack wrapper?", ["in a suitable bin", "on the classroom floor", "in a stream"], 0],
      ["choice", "Which action can reduce waste at school?", ["reuse a clean container", "throw away every book", "leave food on a path"], 0],
      ["choice", "What does litter mean in this lesson?", ["waste left in the wrong place", "rubbish kept for recycling", "leaves gathered into compost"], 0],
      ["choice", "Which shared school area should the class help keep clean?", ["the path used by all pupils", "a neighbour’s private yard", "a market stall across town"], 0],
      ["choice", "What can a class do after a planting activity?", ["clear litter safely", "pour rubbish into a drain", "break every seedling"], 0],
      ["tf", "Putting rubbish in a bin helps keep shared places clean.", true, "A bin keeps waste from being left as litter."],
      ["tf", "Throwing litter into a stream is a good way to care for nature.", false, "Litter can make shared natural places dirty; use a suitable bin."],
      ["match", [["litter", "waste left in the wrong place"], ["reuse", "use an item again"], ["environment", "surroundings around living things"], ["bin", "place for collected waste"]], "Which environment-care meaning belongs with each word?"],
      ["build", "reuse", "Can you build the word for using a clean item again?"],
      ["order", ["Pick", "up", "litter", "and", "place", "it", "in", "a", "bin"], "Can you arrange these words into a responsible clean-up instruction?"]
    ]);

  add("as6", "Energy and simple machines", "⚙️", "Science & Technology", ["energy", "lever", "wheel"],
    { card: ["Energy helps things work", "People use energy to move and do tasks. Simple machines such as a lever or wheel can make some jobs easier by changing how a force is used."] },
    [
      ["choice", "Which simple machine helps a wheelbarrow roll?", ["wheel", "lever", "pulley"], 0],
      ["choice", "Which object is an example of a lever?", ["a seesaw", "a pulley", "an inclined plane"], 0],
      ["choice", "What can a simple machine help a person do?", ["move a load more easily", "make a task need no effort", "create energy from nothing"], 0],
      ["choice", "Which object uses a wheel to move along a path?", ["bicycle", "seesaw", "ramp"], 0],
      ["choice", "Which natural source provides both light and warmth during daytime?", ["the Sun", "the Moon", "the soil"], 0],
      ["tf", "A lever can help move or lift a load.", true, "A lever is a simple machine that can make some work easier."],
      ["tf", "A wheelbarrow moves without using a wheel.", false, "A wheelbarrow uses a wheel to roll and carry a load."],
      ["match", [["wheel", "helps an object roll"], ["lever", "turns around a support point"], ["energy", "helps things work"], ["force", "push or pull"]], "Which simple-machine meaning belongs with each science word?"],
      ["missing", "lever", 2, ["v", "a", "e"], "⚙️", "Which letter completes the machine word for a bar that can lift a load?"],
      ["order", ["A", "wheel", "helps", "the", "barrow", "roll"], "Can you arrange these simple-machine words into a sentence about a wheelbarrow?"]
    ]);

  add("as6b", "The solar system", "🪐", "Science", ["solar system", "planet", "orbit"],
    { story: ["The Sun is at the centre of our solar system.", "Earth is a planet that travels around the Sun.", "The Moon travels around Earth, while other planets follow their own paths."] },
    [
      ["choice", "Which star is at the centre of our solar system?", ["the Sun", "the Moon", "Earth"], 0],
      ["choice", "Which planet do people live on?", ["Earth", "Mars", "the Moon"], 0],
      ["choice", "What does Earth travel around in the story?", ["the Sun", "the Moon", "Mars"], 0],
      ["choice", "Which natural object travels around Earth?", ["the Moon", "the Sun", "Mars"], 0],
      ["choice", "What is an orbit in this lesson?", ["a path around another object", "a route between two towns", "a curved line on a map"], 0],
      ["tf", "Earth is a planet in the solar system.", true, "Earth is one of the planets that travel around the Sun."],
      ["tf", "The Sun travels around the Moon as the centre of our solar system.", false, "The Sun is at the centre of our solar system; Earth travels around it."],
      ["match", [["Sun", "star at the centre"], ["Earth", "planet"], ["Moon", "travels around Earth"], ["orbit", "path around an object"]], "Which solar-system description belongs with each object or word?"],
      ["build", "planet", "Can you build the name for Earth’s kind of object in space?"],
      ["order", ["Earth", "travels", "around", "the", "Sun"], "Can you arrange these solar-system words into a true sentence?"]
    ]);

  add("as6c", "FSLC practice: Science", "🔬", "Exam practice", ["observe", "evidence", "explain"],
    { video: [["👀", "Observe the object carefully."], ["🧪", "Use evidence from what you notice."], ["📝", "Explain your answer with a clear reason."]] },
    [
      ["choice", "Which body part helps Ama smell a flower in a science question?", ["nose", "ear", "knee"], 0],
      ["choice", "Which answer identifies the solid state of water?", ["ice", "liquid water", "water vapour"], 0],
      ["choice", "What can help prevent mosquito bites during sleep?", ["a mosquito net", "stagnant water", "an uncovered drink"], 0],
      ["choice", "Which statement describes a complete circuit?", ["it has a closed path", "it has a gap", "it has no connected parts"], 0],
      ["choice", "Which simple machine helps a bicycle move along a road?", ["wheel", "lever", "inclined plane"], 0],
      ["tf", "A careful observation can provide evidence for a science answer.", true, "Observations give information that can support an explanation."],
      ["tf", "Roots cannot take in water from soil.", false, "Roots absorb water from the soil."],
      ["match", [["observe", "look carefully"], ["evidence", "information that supports an idea"], ["circuit", "path for electricity"], ["habitat", "place where an animal lives"]], "Which science-practice meaning belongs with each term?"],
      ["dict", "evidence", "Can you write the word for information that supports a science explanation?"],
      ["order", ["Observe", "carefully,", "record", "evidence,", "then", "explain"], "Can you arrange these science-practice steps in a useful order?"]
    ]);

  add("aso1", "My school and my family", "🏫", "Social Studies", ["family", "school", "class"],
    { card: ["People and places in my life", "Families care for one another, and schools are places where pupils learn together. Ama helps at home and greets her teacher when she arrives for class."] },
    [
      ["choice", "Where does Ama learn with her classmates?", ["at school", "at the market", "at the clinic"], 0],
      ["choice", "Which group usually cares for a child at home?", ["family", "classmates", "shopkeepers"], 0],
      ["choice", "Which person helps pupils learn in class?", ["teacher", "nurse", "farmer"], 0],
      ["choice", "Where do pupils have lessons with a teacher?", ["in a classroom", "in a market", "at a clinic"], 0],
      ["choice", "What is one way a family can help at home?", ["share household chores", "leave every task undone", "ignore requests for help"], 0],
      ["tf", "A school is a place where pupils learn.", true, "Pupils go to school to learn with teachers and classmates."],
      ["tf", "A classroom is a kind of family member.", false, "A classroom is a place at school; a family is made of people."],
      ["match", [["teacher", "helps pupils learn"], ["classmate", "learns with you"], ["family", "people who care for one another"], ["classroom", "room for lessons"]], "Which school-or-family role belongs with each word?"],
      ["build", "family", "Can you build the word for people who care for one another at home?"],
      ["order", ["Ama", "greets", "her", "teacher", "at", "school"], "Can you arrange these school-day words into a sentence about Ama?"]
    ]);

  add("aso1b", "Rules at home and school", "📏", "Social Studies", ["rule", "respect", "responsibility"],
    { story: ["At home, Bih puts his books away after finishing his work.", "At school, Ama listens while another pupil is speaking.", "The family and class agree on simple rules to help everyone stay safe and learn."] },
    [
      ["choice", "Which action follows a helpful classroom rule?", ["listen when someone speaks", "shout over every speaker", "push into a line"], 0],
      ["choice", "What should Bih do with his books after work at home?", ["put them away", "leave them in the rain", "tear their pages"], 0],
      ["choice", "Why can a class agree on rules?", ["to help everyone learn safely", "to stop pupils learning", "to hide all classroom tools"], 0],
      ["choice", "Which action shows respect for a family member?", ["take turns speaking", "grab every shared item", "ignore a safety request"], 0],
      ["choice", "What is a responsibility?", ["a task someone should take care of", "a game people choose to play together", "a place where people meet after school"], 0],
      ["tf", "Taking turns can help people share a conversation.", true, "Taking turns lets each person speak and listen."],
      ["tf", "A safe classroom rule asks pupils to push others in line.", false, "A safe rule asks pupils to wait their turn and keep others safe."],
      ["match", [["rule", "agreed guide for behaviour"], ["respect", "treating people with care"], ["responsibility", "task to take care of"], ["take turns", "share an activity fairly"]], "Which home-or-school meaning belongs with each rule word?"],
      ["dict", "respect", "Can you write the word for treating classmates and family members with care?"],
      ["order", ["Listen,", "take", "turns,", "and", "keep", "one", "another", "safe"], "Can you arrange these classroom-rule words into a helpful instruction?"]
    ]);

  add("aso1c", "My needs: food, clothes, shelter", "🏠", "Social Studies", ["needs", "food", "shelter"],
    { video: [["🍲", "Food gives people nourishment."], ["👕", "Clothes help cover and protect the body."], ["🏠", "Shelter gives people a place to live safely."]] },
    [
      ["choice", "Which item is a basic need that people eat?", ["food", "clothes", "shelter"], 0],
      ["choice", "Which need gives a family a place to live?", ["shelter", "a pencil", "a football"], 0],
      ["choice", "Which item helps cover the body?", ["clothes", "a cooking pot", "a map"], 0],
      ["choice", "Which group lists three basic needs from this lesson?", ["food, clothes and shelter", "toys, songs and games", "books, roads and clouds"], 0],
      ["choice", "What can a safe home give people?", ["shelter", "a new river", "a weather report"], 0],
      ["tf", "Food, clothes and shelter are basic human needs.", true, "People need nourishment, clothing and a safe place to live."],
      ["tf", "A toy is the same kind of basic need as food.", false, "Food is a basic need; a toy is something people may enjoy but do not need to live."],
      ["match", [["food", "nourishes the body"], ["clothes", "cover the body"], ["shelter", "place to live"], ["need", "something important for living"]], "Which basic-need meaning belongs with each word?"],
      ["missing", "shelter", 2, ["e", "a", "i"], "🏠", "Which letter completes the word for a safe place where a family lives?"],
      ["order", ["A", "family", "needs", "food,", "clothes", "and", "shelter"], "Can you arrange these words to name the three needs from the lesson?"]
    ]);

  add("aso2", "Community helpers", "🤝", "Social Studies", ["community", "nurse", "farmer"],
    { card: ["People help their communities", "A community includes people who live and work near one another. A nurse cares for patients, a farmer grows food and a teacher helps pupils learn."] },
    [
      ["choice", "Who can care for a sick person at a clinic?", ["nurse", "farmer", "tailor"], 0],
      ["choice", "Who grows food crops for people to eat?", ["farmer", "teacher", "driver"], 0],
      ["choice", "Who helps pupils learn at school?", ["teacher", "shopper", "passenger"], 0],
      ["choice", "Who can drive people safely from one place to another?", ["driver", "nurse", "farmer"], 0],
      ["choice", "Which helper can repair a leaking water pipe?", ["plumber", "pupil", "farmer"], 0],
      ["tf", "Farmers can grow crops that provide food.", true, "Growing food crops is one way farmers help people."],
      ["tf", "A nurse’s main job is to teach every school lesson.", false, "A nurse cares for people who need health support; a teacher leads lessons."],
      ["match", [["nurse", "cares for patients"], ["farmer", "grows crops"], ["teacher", "helps pupils learn"], ["driver", "takes people on journeys"]], "Which community job belongs with each helper?"],
      ["build", "farmer", "Can you build the word for a person who grows crops?"],
      ["order", ["The", "nurse", "cares", "for", "people", "at", "the", "clinic"], "Can you arrange these community-helper words into a sentence?"]
    ]);

  add("aso2b", "Transport and communication", "🚌", "Social Studies", ["transport", "message", "journey"],
    { story: ["Ama rides in a bus from her neighbourhood to visit her aunt.", "Her cousin sends a message to say when he will arrive.", "The family uses transport to travel and communication to share information."] },
    [
      ["choice", "Which transport carries many people along a road?", ["bus", "letter", "radio message"], 0],
      ["choice", "What does communication help people do?", ["share information", "measure a mountain", "grow a mango tree"], 0],
      ["choice", "Which item can carry a written message to a friend?", ["letter", "bicycle", "road"], 0],
      ["choice", "Which choice is a way to travel over water?", ["boat", "notebook", "telephone call"], 0],
      ["choice", "What is a journey?", ["a trip between two or more places", "a conversation between two neighbours", "a lesson about local transport"], 0],
      ["tf", "A bus can be a form of road transport.", true, "A bus carries passengers along roads."],
      ["tf", "A written letter is a kind of vehicle.", false, "A letter shares information; a vehicle carries people or goods."],
      ["match", [["bus", "road transport"], ["boat", "water transport"], ["letter", "written communication"], ["telephone", "spoken communication"]], "Which transport-or-communication use belongs with each item?"],
      ["dict", "journey", "Can you write the word for a trip between places?"],
      ["order", ["Ama", "rides", "a", "bus", "to", "visit", "her", "aunt"], "Can you arrange these travel words into a sentence about Ama?"]
    ]);

  add("aso2c", "Festivals in Cameroon", "🎉", "Social Studies", ["festival", "community", "celebrate"],
    { video: [["🎶", "People may share music at community celebrations."], ["💃", "Dance and stories can bring neighbours together."], ["🍲", "Families can share food during a festival."]] },
    [
      ["choice", "Which pair of activities might people enjoy at a community festival?", ["music and stories", "a routine class test", "a bus timetable meeting"], 0],
      ["choice", "Who might celebrate together at a local festival?", ["community members", "one person shopping alone", "a school team taking an exam"], 0],
      ["choice", "Which activity can be part of a celebration?", ["dance", "littering", "breaking a footpath"], 0],
      ["choice", "What can families do when they meet for a festival?", ["share food", "hide every greeting", "stop speaking to neighbours"], 0],
      ["choice", "What does a festival give people a chance to do?", ["share music and traditions", "complete a school test", "repair a bus route"], 0],
      ["tf", "A community celebration can bring neighbours together.", true, "People may gather to share music, stories, dance or food."],
      ["tf", "Every Cameroonian community celebrates in exactly the same way.", false, "Communities may have different ways of celebrating and sharing traditions."],
      ["match", [["festival", "community celebration"], ["music", "sound people can share"], ["dance", "movement to rhythm"], ["tradition", "practice shared over time"]], "Which festival meaning belongs with each celebration word?"],
      ["build", "festival", "Can you build the word for a community celebration?"],
      ["order", ["Families", "share", "food", "and", "stories", "at", "a", "festival"], "Can you arrange these celebration words into a sentence?"]
    ]);

  add("aso3", "Directions and simple maps", "🗺️", "Geography", ["map", "north", "direction"],
    { card: ["Use maps to find places", "A simple map shows places and paths from above. A compass rose can show directions such as north, south, east and west."] },
    [
      ["choice", "Which information can a simple map show Ama?", ["the route from home to school", "the dates of a community festival", "the price of a market meal"], 0],
      ["choice", "Which direction is opposite north on a compass?", ["south", "east", "west"], 0],
      ["choice", "What does a map key explain?", ["the symbols on a map", "how to cook rice", "the sound of a bell"], 0],
      ["choice", "Which direction is to the right of north on a standard compass rose?", ["east", "west", "south"], 0],
      ["choice", "What can a line on a simple map represent?", ["a road or path", "a family meal", "a school song"], 0],
      ["tf", "A map can show where places are.", true, "Maps represent places and routes."],
      ["tf", "East is the opposite direction of north.", false, "South is opposite north; east is a different compass direction."],
      ["match", [["north", "compass direction"], ["map key", "explains symbols"], ["path", "route between places"], ["symbol", "small sign on a map"]], "Which map-reading meaning belongs with each geography word?"],
      ["missing", "north", 1, ["o", "a", "e"], "🧭", "Which letter completes the compass direction opposite south?"],
      ["order", ["Find", "the", "school", "on", "the", "map"], "Can you arrange these map-reading words into an instruction?"]
    ]);

  add("aso3b", "Our village and town", "🏘️", "Geography", ["village", "town", "neighbour"],
    { story: ["Bih lives in a village where neighbours greet each other on the path.", "His aunt visits a nearby town with a school, shops and a clinic.", "People use roads to travel between homes and shared places."] },
    [
      ["choice", "Where do Bih’s neighbours greet one another in the story?", ["on a village path", "at a market stall", "beside a school gate"], 0],
      ["choice", "Which place does Bih’s aunt visit?", ["a nearby town", "a nearby village", "a city far away"], 0],
      ["choice", "Which health service is named as a place in the town?", ["clinic", "school", "shop"], 0],
      ["choice", "Which route does the story say people use to travel between homes and shared places?", ["roads", "rivers", "fields"], 0],
      ["choice", "Who is a neighbour?", ["someone who lives nearby", "someone visiting for one day", "someone who works in a far-away town"], 0],
      ["tf", "A town can have shops and a clinic.", true, "The story names shops and a clinic in the nearby town."],
      ["tf", "A road never connects homes with shared places.", false, "People can use roads to travel between homes and shared places."],
      ["match", [["village", "community with homes and paths"], ["town", "place with shared services"], ["neighbour", "person living nearby"], ["road", "route for travel"]], "Which village-or-town meaning belongs with each word from Bih’s story?"],
      ["dict", "neighbour", "Can you write the word for a person who lives near you?"],
      ["order", ["The", "road", "connects", "homes", "and", "shared", "places"], "Can you arrange these village-and-town words into a sentence?"]
    ]);

  add("aso3c", "Road safety", "🚸", "Social Studies", ["crossing", "traffic", "safe"],
    { video: [["🚶", "Stop at a safe crossing before you cross."], ["👀", "Look carefully for traffic in both directions."], ["🚦", "Follow signals and adult guidance near roads."]] },
    [
      ["choice", "Where should Ama cross a busy road?", ["at a safe crossing", "between moving cars", "behind a parked bus without looking"], 0],
      ["choice", "What should a pedestrian do before crossing?", ["look for traffic", "run with closed eyes", "play in the road"], 0],
      ["choice", "Who should Ama ask to walk with her across a busy road?", ["a trusted adult", "a stranger driving past", "a child who has not checked traffic"], 0],
      ["choice", "What should pupils do when a crossing signal says wait?", ["stay and wait", "run across", "push another person"], 0],
      ["choice", "Where should children play instead of on a road?", ["a safe play area", "between moving vehicles", "in the middle of traffic"], 0],
      ["tf", "Looking for traffic before crossing can help keep pedestrians safe.", true, "Pupils should check for traffic before crossing."],
      ["tf", "It is safe to play games in the middle of a road.", false, "Roads are for traffic; choose a safe place to play."],
      ["match", [["crossing", "safer place to cross"], ["traffic", "vehicles using a road"], ["signal", "shows when to wait or move"], ["pedestrian", "person travelling on foot"]], "Which road-safety meaning belongs with each word?"],
      ["build", "crossing", "Can you build the word for a place where pedestrians cross a road?"],
      ["order", ["Stop,", "look", "for", "traffic,", "then", "cross", "safely"], "Can you arrange these road-safety steps in the right order?"]
    ]);

  add("aso4", "Cameroon: regions and capital", "🇨🇲", "Geography", ["region", "capital", "Yaoundé"],
    { card: ["Cameroon has ten regions", "Cameroon has ten regions, and Yaoundé is the capital. Douala is the largest city and port; it is not the capital."] },
    [
      ["choice", "Which city is the capital of Cameroon?", ["Yaoundé", "Douala", "Buea"], 0],
      ["choice", "How many regions does Cameroon have?", ["10", "8", "12"], 0],
      ["choice", "Which city is Cameroon’s largest city and port?", ["Douala", "Yaoundé", "Bamenda"], 0],
      ["choice", "Which name is one of Cameroon’s regions?", ["Littoral", "Atlantic", "Sahara"], 0],
      ["choice", "Which pair names two regions of Cameroon?", ["East and West", "Buea and Douala", "Littoral and Yaoundé"], 0],
      ["tf", "Yaoundé is the capital of Cameroon.", true, "Yaoundé is Cameroon’s capital city."],
      ["tf", "Douala is the capital of Cameroon.", false, "Yaoundé is the capital; Douala is the largest city and port."],
      ["match", [["Cameroon", "has 10 regions"], ["Yaoundé", "national capital"], ["Douala", "largest city and port"], ["North-West", "one of the regions"]], "Which Cameroon geography fact belongs with each place or country name?"],
      ["build", "Yaoundé", "Can you build the name of Cameroon’s capital city?"],
      ["order", ["Cameroon", "has", "ten", "regions,", "and", "Yaoundé", "is", "its", "capital"], "Can you arrange these geography words into two correct facts?"]
    ]);

  add("aso4b", "Mountains and rivers of Cameroon", "⛰️", "Geography", ["Mount Cameroon", "Buea", "Sanaga"],
    { story: ["Mount Cameroon rises near Buea and is the country’s highest mountain.", "It is about 4,000 metres high.", "The Sanaga is Cameroon’s longest river and flows across the country."] },
    [
      ["choice", "Which mountain is the highest in Cameroon?", ["Mount Cameroon", "Mount Kenya", "Mount Kilimanjaro"], 0],
      ["choice", "Near which town does Mount Cameroon rise?", ["Buea", "Maroua", "Garoua"], 0],
      ["choice", "Which river is the longest in Cameroon?", ["Sanaga", "Wouri", "Benue"], 0],
      ["choice", "About how high is Mount Cameroon?", ["4,000 metres", "400 metres", "40,000 metres"], 0],
      ["choice", "Which landform is Mount Cameroon?", ["mountain", "lake", "desert"], 0],
      ["tf", "Mount Cameroon is near Buea.", true, "Mount Cameroon rises near Buea."],
      ["tf", "The Sanaga is the shortest river in Cameroon.", false, "The Sanaga is Cameroon’s longest river."],
      ["match", [["Mount Cameroon", "highest mountain in Cameroon"], ["Buea", "town near the mountain"], ["Sanaga", "longest river in Cameroon"], ["4,000 metres", "approximate mountain height"]], "Which Cameroon landform fact belongs with each name or measurement?"],
      ["dict", "Sanaga", "Can you write the name of Cameroon’s longest river?"],
      ["order", ["Mount", "Cameroon", "rises", "near", "Buea"], "Can you arrange these place words into a true sentence about the mountain?"]
    ]);

  add("aso4c", "Farming and products of Cameroon", "🌾", "Social Studies", ["cocoa", "coffee", "cotton"],
    { video: [["🍫", "Cocoa is a crop grown for sale."], ["☕", "Coffee is another crop produced by farmers."], ["🌿", "Cotton is grown in northern Cameroon."]] },
    [
      ["choice", "Which crop can be used to make chocolate?", ["cocoa", "cotton", "palm oil"], 0],
      ["choice", "Which crop is grown in northern Cameroon among these examples?", ["cotton", "cocoa", "coffee"], 0],
      ["choice", "Which crop is used to prepare a coffee drink?", ["coffee", "banana", "cotton"], 0],
      ["choice", "Which farm product is one of Cameroon’s listed cash crops?", ["bananas", "woven baskets", "school uniforms"], 0],
      ["choice", "Which listed cash crop provides oil?", ["palm oil", "coffee", "cotton"], 0],
      ["tf", "Cocoa is a crop grown in Cameroon.", true, "Cocoa is among Cameroon’s cash crops."],
      ["tf", "Cotton is grown only in southern Cameroon.", false, "Cotton is one of the crops grown in northern Cameroon."],
      ["match", [["cocoa", "crop used to make chocolate"], ["coffee", "crop used for a drink"], ["bananas", "fruit crop"], ["cotton", "crop grown in northern Cameroon"]], "Which farming fact belongs with each Cameroon crop?"],
      ["build", "cocoa", "Can you build the crop name used in chocolate making?"],
      ["order", ["Farmers", "grow", "crops", "for", "food", "and", "sale"], "Can you arrange these farming words into a sentence about crops?"]
    ]);

  add("aso5", "National symbols, rights and duties", "⭐", "Citizenship", ["flag", "motto", "citizen"],
    { card: ["Symbols and shared responsibilities", "Cameroon’s flag has vertical green, red and yellow stripes with a yellow star in the red stripe. Its motto is Peace – Work – Fatherland; citizens also have rights and duties."] },
    [
      ["choice", "Where is the yellow star on Cameroon’s flag?", ["in the red stripe", "in the green stripe", "outside the flag"], 0],
      ["choice", "Which colours appear as vertical stripes on the flag?", ["green, red and yellow", "blue, white and black", "red, blue and orange"], 0],
      ["choice", "What is Cameroon’s motto?", ["Peace – Work – Fatherland", "Food – Water – Shelter", "Read – Write – Count"], 0],
      ["choice", "Which phrase is the title of Cameroon’s national anthem?", ["O Cameroon, Cradle of our Fathers", "O Cameroon, Land of our People", "Cameroon, Home of Our Ancestors"], 0],
      ["choice", "Which action shows a citizen carrying out a helpful duty?", ["respect shared places", "damage a public sign", "ignore everyone’s safety"], 0],
      ["tf", "Cameroon’s flag has a yellow star in its red stripe.", true, "The yellow star is in the central red stripe."],
      ["tf", "Cameroon’s motto is “O Cameroon, Cradle of our Fathers.”", false, "That is the anthem title; Cameroon’s motto is Peace – Work – Fatherland."],
      ["match", [["flag", "green, red and yellow vertical stripes"], ["star", "yellow and in the red stripe"], ["motto", "Peace – Work – Fatherland"], ["anthem", "O Cameroon, Cradle of our Fathers"]], "Which national-symbol fact belongs with each word?"],
      ["dict", "citizen", "Can you write the word for a member of a country?"],
      ["order", ["Respect", "shared", "places", "and", "help", "your", "community"], "Can you arrange these words into a sentence about a citizen’s duty?"]
    ]);

  add("aso5b", "Local councils and mayors", "🏛️", "Citizenship", ["council", "mayor", "local"],
    { story: ["People in a local area can share ideas about needs in their community.", "A local council discusses shared concerns and ways to respond.", "A mayor leads the council, while residents can explain what matters to them."] },
    [
      ["choice", "What does “local” mean in a discussion about a council?", ["connected to a nearby area", "connected to the whole country", "connected to another country"], 0],
      ["choice", "Which person leads a local council in this lesson?", ["mayor", "pupil", "farmer"], 0],
      ["choice", "What can residents share with a council?", ["ideas about local needs", "plans for a family holiday", "a list of private school marks"], 0],
      ["choice", "Which topic could people discuss at a local meeting?", ["a shared community concern", "a personal homework answer", "a family’s private conversation"], 0],
      ["choice", "What does a council help people do in this example?", ["discuss local issues", "plan a school spelling lesson", "organise a family meal"], 0],
      ["tf", "A local council can discuss needs in its area.", true, "The story describes the council discussing local concerns."],
      ["tf", "A mayor leads a school spelling lesson in this example.", false, "The mayor leads the local council; the teacher leads a school lesson."],
      ["match", [["local", "connected to one area"], ["council", "group discussing community matters"], ["mayor", "leader of the local council"], ["resident", "person living in an area"]], "Which local-government meaning belongs with each word in the story?"],
      ["build", "council", "Can you build the word for the group that discusses local needs?"],
      ["order", ["Residents", "share", "ideas", "about", "local", "needs"], "Can you arrange these council-story words into a sentence?"]
    ]);

  add("aso5c", "Cultures of Cameroon", "🎭", "Social Studies", ["culture", "language", "tradition"],
    { video: [["🗣️", "People share ideas through languages."], ["🍲", "Families may share foods such as ndolé."], ["🎶", "Communities keep traditions through stories and celebrations."]] },
    [
      ["choice", "Which two languages are official languages of Cameroon?", ["English and French", "English and Spanish", "French and Arabic"], 0],
      ["choice", "Which food is a Cameroonian example from this lesson?", ["ndolé", "sushi", "tacos"], 0],
      ["choice", "Which word means a system of words people use to communicate?", ["language", "culture", "tradition"], 0],
      ["choice", "Which activity can help share a tradition?", ["telling a story", "breaking a map", "hiding every word"], 0],
      ["choice", "What can a community celebration include?", ["music and shared food", "only empty roads", "no people or stories"], 0],
      ["tf", "English and French are Cameroon’s official languages.", true, "The two official languages are English and French."],
      ["tf", "Everyone in Cameroon has exactly the same cultural traditions.", false, "People and communities can have different cultures and traditions."],
      ["match", [["culture", "shared ways of life"], ["language", "words used to communicate"], ["tradition", "practice passed over time"], ["ndolé", "Cameroonian food"]], "Which culture-and-language meaning belongs with each word?"],
      ["missing", "culture", 1, ["u", "a", "i"], "🎭", "Which letter completes the word for shared ways of life?"],
      ["order", ["Cameroon", "has", "English", "and", "French", "as", "official", "languages"], "Can you arrange these culture-lesson words into a correct fact?"]
    ]);

  add("aso6", "Cameroon: history and government", "📜", "Civics", ["independence", "reunification", "history"],
    { card: ["Important dates in Cameroon’s history", "Cameroon became independent on 1 January 1960 and reunified on 1 October 1961. The country became a unitary state in 1972, and National Day is 20 May."] },
    [
      ["choice", "On what date did Cameroon become independent?", ["1 January 1960", "1 October 1961", "20 May 1972"], 0],
      ["choice", "When did reunification take place?", ["1 October 1961", "1 January 1960", "11 February 1960"], 0],
      ["choice", "In what year did Cameroon become a unitary state?", ["1972", "1960", "1961"], 0],
      ["choice", "When is Cameroon’s National Day?", ["20 May", "1 January", "1 October"], 0],
      ["choice", "Which word names the date when a country becomes independent?", ["independence", "calendar", "weather"], 0],
      ["tf", "Cameroon became independent on 1 January 1960.", true, "1 January 1960 is Cameroon’s independence date."],
      ["tf", "Cameroon’s National Day is 1 October.", false, "National Day is 20 May; reunification took place on 1 October 1961."],
      ["match", [["independence", "1 January 1960"], ["reunification", "1 October 1961"], ["unitary state", "1972"], ["National Day", "20 May"]], "Which Cameroon history date belongs with each event?"],
      ["dict", "reunification", "Can you write the history word for joining again?"],
      ["order", ["Cameroon", "became", "independent", "on", "1", "January", "1960"], "Can you arrange these history words into Cameroon’s independence fact?"]
    ]);

  add("aso6b", "The three arms of government", "⚖️", "Civics", ["executive", "legislature", "judiciary"],
    { story: ["A government has executive, legislative and judicial arms.", "The executive carries out laws and policies, while the legislature makes laws.", "The judiciary interprets laws; Cameroon’s Parliament has a National Assembly and a Senate."] },
    [
      ["choice", "Which arm of government makes laws?", ["legislature", "executive", "judiciary"], 0],
      ["choice", "Which arm carries out laws and policies?", ["executive", "judiciary", "legislature"], 0],
      ["choice", "Which arm interprets laws?", ["judiciary", "legislature", "executive"], 0],
      ["choice", "Which two bodies make up Cameroon’s Parliament?", ["National Assembly and Senate", "council and school", "court and clinic"], 0],
      ["choice", "How many arms of government are in this lesson?", ["three", "two", "five"], 0],
      ["tf", "The legislature makes laws.", true, "Making laws is the role of the legislature."],
      ["tf", "The judiciary is the arm that grows crops for the country.", false, "The judiciary interprets laws; growing crops is not its role."],
      ["match", [["executive", "carries out laws and policies"], ["legislature", "makes laws"], ["judiciary", "interprets laws"], ["Parliament", "National Assembly and Senate"]], "Which government role belongs with each arm or institution?"],
      ["build", "judiciary", "Can you build the name of the arm that interprets laws?"],
      ["order", ["The", "three", "arms", "are", "executive,", "legislature", "and", "judiciary"], "Can you arrange these civics words into a sentence naming the three arms?"]
    ]);

  add("aso6c", "Cameroon, Africa and the world", "🌍", "Geography", ["Central Africa", "African Union", "United Nations"],
    { video: [["🌍", "Cameroon is in Central Africa."], ["🤝", "Cameroon is a member of the African Union."], ["🕊️", "Cameroon is also a member of the United Nations."]] },
    [
      ["choice", "In which part of Africa is Cameroon located?", ["Central Africa", "Southern Europe", "South America"], 0],
      ["choice", "Which African organization includes Cameroon as a member?", ["African Union", "European Union", "Pacific Council"], 0],
      ["choice", "Which international organization includes Cameroon as a member?", ["United Nations", "Arctic Circle", "Central Market"], 0],
      ["choice", "Which continent includes Cameroon?", ["Africa", "Asia", "Europe"], 0],
      ["choice", "Which pair names organizations Cameroon belongs to?", ["African Union and United Nations", "Atlantic Ocean and Pacific Ocean", "African Union and European Union"], 0],
      ["tf", "Cameroon is in Central Africa.", true, "Cameroon is a country in Central Africa."],
      ["tf", "Cameroon is not a member of the African Union.", false, "Cameroon is a member of the African Union and the United Nations."],
      ["match", [["Cameroon", "country in Central Africa"], ["African Union", "organization of African countries"], ["United Nations", "international organization"], ["Africa", "continent where Cameroon is located"]], "Which Africa-and-world description belongs with each name?"],
      ["dict", "continent", "Can you write the word for a large land area such as Africa?"],
      ["order", ["Cameroon", "is", "in", "Central", "Africa"], "Can you arrange these geography words into a true sentence about Cameroon?"]
    ]);

  add("af1", "Bonjour", "👋", "French", ["bonjour", "salut", "au revoir"],
    { card: ["Dire bonjour", "On peut dire « bonjour » pour saluer quelqu'un. « Salut » est une salutation familière, et « au revoir » sert à prendre congé."] },
    [
      ["choice", "Which French word can Ama use to greet someone politely?", ["bonjour", "au revoir", "merci"], 0],
      ["choice", "Which French greeting is informal?", ["salut", "pardon", "bonne nuit"], 0],
      ["choice", "Which French phrase can end a conversation?", ["au revoir", "bonjour", "s'il vous plaît"], 0],
      ["choice", "Which French word means “hello” in a greeting?", ["bonjour", "demain", "chaise"], 0],
      ["choice", "What can Bih say when he meets his teacher in the morning?", ["Bonjour !", "Au revoir !", "Bonne nuit !"], 0],
      ["tf", "In French, “bonjour” is a greeting.", true, "Bonjour is used to greet someone."],
      ["tf", "The French phrase “au revoir” means “hello.”", false, "Au revoir means goodbye; bonjour is a greeting."],
      ["match", [["bonjour", "hello or good day"], ["salut", "informal hi"], ["au revoir", "goodbye"], ["merci", "thank you"]], "Which English meaning belongs with each French greeting or polite word?"],
      ["build", "bonjour", "Can you build the French greeting Ama can say in the morning?"],
      ["order", ["Bonjour,", "Ama,", "comment", "ça", "va", "?"], "Can you arrange these French words into a friendly greeting sentence?"]
    ], "fr", "en");

  add("af1b", "Les nombres de 1 à 10", "🔢", "French", ["un", "cinq", "dix"],
    { story: ["Ama compte les mangues en français : un, deux, trois.", "Elle ajoute quatre et cinq fruits dans son panier.", "À l'école, la classe compte jusqu'à dix ensemble."] },
    [
      ["choice", "Which French number means “one”?", ["un", "deux", "trois"], 0],
      ["choice", "Which French word means “five”?", ["cinq", "six", "huit"], 0],
      ["choice", "What is the French word for the number 10?", ["dix", "neuf", "sept"], 0],
      ["choice", "Which number comes after “trois” when counting in French?", ["quatre", "deux", "six"], 0],
      ["choice", "Which French number is between “six” and “huit”?", ["sept", "cinq", "dix"], 0],
      ["tf", "“Deux” is the French word for the number two.", true, "Deux means two in French."],
      ["tf", "“Cinq” means ten in French.", false, "Cinq means five; dix means ten."],
      ["match", [["un", "one"], ["trois", "three"], ["cinq", "five"], ["dix", "ten"]], "Which English number belongs with each French number word?"],
      ["dict", "huit", "Can you write the French number word for eight?"],
      ["order", ["J'ai", "trois", "mangues", "."], "Can you arrange these French words into a sentence about three mangoes?"]
    ], "fr", "en");

  add("af1c", "Les animaux", "🐾", "French", ["chat", "chien", "oiseau"],
    { video: [["🐱", "Le chat dort près de la porte."], ["🐕", "Le chien joue dans la cour."], ["🐦", "L'oiseau chante dans un arbre."]] },
    [
      ["choice", "Which French animal word means “cat”?", ["chat", "chien", "oiseau"], 0],
      ["choice", "Which French word means “dog”?", ["chien", "poisson", "chat"], 0],
      ["choice", "What does the French word “oiseau” mean?", ["bird", "fish", "goat"], 0],
      ["choice", "Which French animal can sing in the tree in this lesson?", ["oiseau", "chat", "chien"], 0],
      ["choice", "Which French word names an animal that can swim?", ["poisson", "chat", "chèvre"], 0],
      ["tf", "“Chat” is the French word for a cat.", true, "Chat means cat in French."],
      ["tf", "“Chien” means bird in French.", false, "Chien means dog; oiseau means bird."],
      ["match", [["chat", "cat"], ["chien", "dog"], ["oiseau", "bird"], ["poisson", "fish"]], "Which English animal name belongs with each French word?"],
      ["build", "oiseau", "Can you build the French word for the bird singing in the story?"],
      ["order", ["Le", "chat", "dort", "près", "de", "la", "porte", "."], "Can you arrange these French words into a sentence about the cat?"]
    ], "fr", "en");

  add("af2", "Couleurs et nombres", "🎨", "French", ["rouge", "jaune", "bleu"],
    { card: ["Les couleurs en français", "Le drapeau du Cameroun a des bandes vertes, rouges et jaunes. On peut nommer les couleurs en français : vert, rouge, jaune et bleu."] },
    [
      ["choice", "Which French colour word means “red”?", ["rouge", "jaune", "bleu"], 0],
      ["choice", "What does the French word “jaune” mean?", ["yellow", "green", "blue"], 0],
      ["choice", "Which French colour means “blue”?", ["bleu", "rouge", "vert"], 0],
      ["choice", "What colour is “vert” in English?", ["green", "red", "yellow"], 0],
      ["choice", "Which French number word means “three”?", ["trois", "cinq", "huit"], 0],
      ["tf", "“Rouge” means red in French.", true, "Rouge is the French colour word for red."],
      ["tf", "“Jaune” means blue in French.", false, "Jaune means yellow; bleu means blue."],
      ["match", [["rouge", "red"], ["jaune", "yellow"], ["bleu", "blue"], ["vert", "green"]], "Which English colour belongs with each French colour word?"],
      ["missing", "jaune", 1, ["a", "o", "u"], "🟨", "Which letter completes the French word for yellow?"],
      ["order", ["Le", "soleil", "est", "jaune", "."], "Can you arrange these French colour words into a sentence about the Sun?"]
    ], "fr", "en");

  add("af2b", "Les jours de la semaine", "📅", "French", ["lundi", "mardi", "mercredi"],
    { story: ["Ama écrit les jours de la semaine dans son cahier.", "Après lundi, elle écrit mardi, puis mercredi.", "La classe continue jusqu'à dimanche pour terminer la liste."] },
    [
      ["choice", "Which French day comes after lundi?", ["mardi", "jeudi", "dimanche"], 0],
      ["choice", "What is the French word for Wednesday?", ["mercredi", "samedi", "mardi"], 0],
      ["choice", "Which day comes before vendredi in French?", ["jeudi", "dimanche", "lundi"], 0],
      ["choice", "What does the French word “dimanche” mean?", ["Sunday", "Monday", "Friday"], 0],
      ["choice", "Which French day starts the school-week list in the story?", ["lundi", "samedi", "dimanche"], 0],
      ["tf", "“Mardi” means Tuesday in French.", true, "Mardi is Tuesday."],
      ["tf", "“Dimanche” means Monday in French.", false, "Dimanche means Sunday; lundi means Monday."],
      ["match", [["lundi", "Monday"], ["mardi", "Tuesday"], ["mercredi", "Wednesday"], ["vendredi", "Friday"]], "Which English weekday belongs with each French day?"],
      ["dict", "samedi", "Can you write the French word for Saturday?"],
      ["order", ["Lundi", "vient", "après", "dimanche", "."], "Can you arrange these French weekday words into a sentence?"]
    ], "fr", "en");

  add("af2c", "Les fruits et légumes", "🥭", "French", ["mangue", "banane", "tomate"],
    { video: [["🥭", "La mangue est un fruit."], ["🍌", "La banane est jaune quand elle est mûre."], ["🍅", "La tomate accompagne souvent les légumes."]] },
    [
      ["choice", "Which French word means “mango”?", ["mangue", "banane", "carotte"], 0],
      ["choice", "What does “banane” mean in English?", ["banana", "tomato", "onion"], 0],
      ["choice", "Which French word names a tomato?", ["tomate", "mangue", "pomme"], 0],
      ["choice", "What is the French word for carrot?", ["carotte", "banane", "poire"], 0],
      ["choice", "Which French word means “fruit”?", ["fruit", "légume", "marché"], 0],
      ["tf", "“Mangue” is the French word for mango.", true, "Mangue means mango in French."],
      ["tf", "“Banane” means tomato in French.", false, "Banane means banana; tomate means tomato."],
      ["match", [["mangue", "mango"], ["banane", "banana"], ["tomate", "tomato"], ["carotte", "carrot"]], "Which English fruit or vegetable belongs with each French word?"],
      ["build", "carotte", "Can you build the French word for carrot?"],
      ["order", ["La", "mangue", "est", "un", "fruit", "."], "Can you arrange these French food words into a sentence about mango?"]
    ], "fr", "en");

  add("af3", "Ma famille", "👨‍👩‍👧", "French", ["mère", "père", "sœur"],
    { card: ["Présenter sa famille", "En français, « ma mère » veut dire “my mother” et « mon père » veut dire “my father”. On peut présenter les membres de sa famille avec des phrases simples."] },
    [
      ["choice", "Which French word means “mother”?", ["mère", "père", "frère"], 0],
      ["choice", "What does “père” mean in English?", ["father", "sister", "cousin"], 0],
      ["choice", "Which French word means “sister”?", ["sœur", "frère", "mère"], 0],
      ["choice", "How do you say “my family” in French?", ["ma famille", "mon école", "ma maison"], 0],
      ["choice", "Which French word means “brother”?", ["frère", "sœur", "père"], 0],
      ["tf", "“Ma mère” means “my mother.”", true, "Mère means mother and ma means my before this feminine noun."],
      ["tf", "“Sœur” means father in French.", false, "Sœur means sister; père means father."],
      ["match", [["mère", "mother"], ["père", "father"], ["sœur", "sister"], ["frère", "brother"]], "Which English family member belongs with each French word?"],
      ["dict", "famille", "Can you write the French word for a family?"],
      ["order", ["Voici", "ma", "famille", "."], "Can you arrange these French words into a sentence introducing a family?"]
    ], "fr", "en");

  add("af3b", "Les vêtements", "👕", "French", ["chemise", "pantalon", "chaussures"],
    { story: ["Bih choisit une chemise propre pour aller à l'école.", "Il porte aussi un pantalon et des chaussures.", "Sa sœur prend un chapeau quand le soleil brille."] },
    [
      ["choice", "Which French clothing word means “shirt”?", ["chemise", "pantalon", "chapeau"], 0],
      ["choice", "What does “chaussures” mean in English?", ["shoes", "shirt", "hat"], 0],
      ["choice", "Which French word means “trousers”?", ["pantalon", "robe", "chemise"], 0],
      ["choice", "What is the French word for a hat?", ["chapeau", "chaussures", "jupe"], 0],
      ["choice", "Which French word means “dress”?", ["robe", "pantalon", "chemise"], 0],
      ["tf", "“Chemise” means shirt in French.", true, "Chemise is the French word for shirt."],
      ["tf", "“Chaussures” means hat in French.", false, "Chaussures means shoes; chapeau means hat."],
      ["match", [["chemise", "shirt"], ["pantalon", "trousers"], ["chaussures", "shoes"], ["chapeau", "hat"]], "Which English clothing item belongs with each French word?"],
      ["build", "chaussures", "Can you build the French word for the shoes Bih wears?"],
      ["order", ["Bih", "porte", "une", "chemise", "propre", "."], "Can you arrange these French clothing words into a sentence about Bih?"]
    ], "fr", "en");

  add("af3c", "La maison", "🏠", "French", ["maison", "porte", "fenêtre"],
    { video: [["🏠", "La maison a une porte."], ["🪟", "La fenêtre laisse entrer la lumière."], ["🛏️", "La chambre est une pièce de la maison."]] },
    [
      ["choice", "Which French word means “house”?", ["maison", "fenêtre", "chaise"], 0],
      ["choice", "What does the French word “porte” mean?", ["door", "window", "bed"], 0],
      ["choice", "Which word means “window” in French?", ["fenêtre", "maison", "table"], 0],
      ["choice", "What is “chambre” in English?", ["bedroom", "garden", "kitchen spoon"], 0],
      ["choice", "Which French word means “room”?", ["pièce", "route", "fruit"], 0],
      ["tf", "“Fenêtre” is the French word for window.", true, "Fenêtre means window."],
      ["tf", "“Porte” means roof in French.", false, "Porte means door; “toit” is the French word for roof."],
      ["match", [["maison", "house"], ["porte", "door"], ["fenêtre", "window"], ["chambre", "bedroom"]], "Which English room or house word belongs with each French word?"],
      ["missing", "fenêtre", 2, ["n", "a", "i"], "🪟", "Which letter completes the French word for a window?"],
      ["order", ["La", "fenêtre", "est", "dans", "la", "maison", "."], "Can you arrange these French home words into a sentence?"]
    ], "fr", "en");

  add("af4", "À l'école", "🏫", "French", ["livre", "crayon", "cahier"],
    { card: ["Les objets de la classe", "À l'école, un élève peut lire un livre et écrire avec un crayon. Un cahier garde les exercices, et le tableau aide la classe à suivre la leçon."] },
    [
      ["choice", "Which French classroom word means “book”?", ["livre", "crayon", "tableau"], 0],
      ["choice", "What does “crayon” mean in English?", ["pencil", "notebook", "chair"], 0],
      ["choice", "Which French word means “notebook”?", ["cahier", "livre", "porte"], 0],
      ["choice", "What is “tableau” in English in a classroom?", ["board", "desk", "pencil"], 0],
      ["choice", "Which French word names a classroom?", ["classe", "maison", "marché"], 0],
      ["tf", "“Livre” means book in French.", true, "Livre is the French word for book."],
      ["tf", "“Cahier” means pencil in French.", false, "Cahier means notebook; crayon means pencil."],
      ["match", [["livre", "book"], ["crayon", "pencil"], ["cahier", "notebook"], ["tableau", "board"]], "Which English classroom object belongs with each French word?"],
      ["build", "cahier", "Can you build the French word for the notebook used in class?"],
      ["order", ["J'ouvre", "mon", "livre", "en", "classe", "."], "Can you arrange these French classroom words into a sentence?"]
    ], "fr", "en");

  add("af4b", "Les verbes en -er", "🏃", "French", ["parler", "jouer", "chanter"],
    { story: ["Ama aime parler avec ses amies dans la cour.", "Bih joue au ballon pendant la récréation.", "Après le jeu, la classe chante une chanson ensemble."] },
    [
      ["choice", "Which French infinitive means “to speak”?", ["parler", "jouer", "chanter"], 0],
      ["choice", "What does “jouer” mean in English?", ["to play", "to eat", "to sleep"], 0],
      ["choice", "Which French -er verb means “to sing”?", ["chanter", "parler", "marcher"], 0],
      ["choice", "Which form completes “Nous ___ dans la cour”?", ["jouons", "joue", "jouez"], 0],
      ["choice", "Which form completes “Je ___ avec Ama”?", ["parle", "parlons", "parlez"], 0],
      ["tf", "“Chanter” is an infinitive ending in -er.", true, "Chanter ends with the French infinitive ending -er."],
      ["tf", "“Nous joue” is the correct present form for “we play.”", false, "The correct form is “nous jouons.”"],
      ["match", [["parler", "to speak"], ["jouer", "to play"], ["chanter", "to sing"], ["marcher", "to walk"]], "Which English action belongs with each French -er verb?"],
      ["dict", "jouons", "Can you write the present-tense form used with “nous” for jouer?"],
      ["order", ["Nous", "jouons", "dans", "la", "cour", "."], "Can you arrange these French -er verb words into a sentence?"]
    ], "fr", "en");

  add("af4c", "L'heure", "🕒", "French", ["heure", "midi", "minute"],
    { video: [["🕒", "Il est une heure."], ["☀️", "À midi, le soleil est haut dans le ciel."], ["⏱️", "Une heure contient soixante minutes."]] },
    [
      ["choice", "Which French word means “hour”?", ["heure", "minute", "jour"], 0],
      ["choice", "What does “midi” mean in English?", ["noon", "midnight", "morning"], 0],
      ["choice", "Which French word means “minute”?", ["minute", "semaine", "mois"], 0],
      ["choice", "How do you say “It is one o’clock” in French?", ["Il est une heure.", "Il est un livre.", "Il est une école."], 0],
      ["choice", "Which French phrase means “half past noon”?", ["midi et demi", "minuit et une", "un jour"], 0],
      ["tf", "“Midi” means noon in French.", true, "Midi is the French word for noon."],
      ["tf", "An hour has ten minutes.", false, "One hour has sixty minutes."],
      ["match", [["heure", "hour"], ["midi", "noon"], ["minuit", "midnight"], ["minute", "minute"]], "Which English time word belongs with each French expression?"],
      ["build", "heure", "Can you build the French word used when telling the time?"],
      ["order", ["Il", "est", "midi", "et", "demi", "."], "Can you arrange these French time words into a sentence?"]
    ], "fr", "en");

  add("af5", "Être et avoir", "🧩", "French", ["être", "avoir", "sommes"],
    { card: ["Les verbes être et avoir", "« Être » signifie “to be” et « avoir » signifie “to have”. Au présent, on dit « je suis » et « j'ai », puis « nous sommes » et « nous avons »."] },
    [
      ["choice", "Which French verb means “to be”?", ["être", "avoir", "aller"], 0],
      ["choice", "What does “avoir” mean in English?", ["to have", "to be", "to go"], 0],
      ["choice", "Which phrase means “I am” in French?", ["je suis", "j'ai", "tu as"], 0],
      ["choice", "How do you say “we have” in French?", ["nous avons", "nous sommes", "vous êtes"], 0],
      ["choice", "Which form completes “Nous ___ élèves”?", ["sommes", "avons", "suis"], 0],
      ["tf", "“Je suis” means “I am.”", true, "Suis is the present form of être used with je."],
      ["tf", "“Nous avons” means “we are.”", false, "Nous avons means “we have”; nous sommes means “we are.”"],
      ["match", [["je suis", "I am"], ["tu es", "you are"], ["il a", "he has"], ["nous avons", "we have"]], "Which English meaning belongs with each present-tense French phrase?"],
      ["build", "sommes", "Can you build the être form used with “nous”?"],
      ["order", ["Nous", "sommes", "à", "l'école", "."], "Can you arrange these French être words into a sentence?"]
    ], "fr", "en");

  add("af5b", "Au marché", "🧺", "French", ["marché", "combien", "vendeur"],
    { story: ["Ngozi va au marché avec sa tante pour acheter des mangues.", "Elle demande : « Combien coûte cette mangue ? »", "La vendeuse répond et Ngozi paie avant de rentrer à la maison."] },
    [
      ["choice", "Which French word means “market”?", ["marché", "école", "maison"], 0],
      ["choice", "What does “vendeur” mean in English?", ["seller", "buyer", "basket"], 0],
      ["choice", "Which French word asks “how much” or “how many”?", ["combien", "bonjour", "demain"], 0],
      ["choice", "How do you say “mango” in French?", ["mangue", "banane", "pomme"], 0],
      ["choice", "What does “acheter” mean in English?", ["to buy", "to read", "to sleep"], 0],
      ["tf", "Ngozi asks “Combien coûte cette mangue ?” at the market.", true, "She asks the seller how much the mango costs."],
      ["tf", "“Marché” means school in French.", false, "Marché means market; école means school."],
      ["match", [["marché", "market"], ["mangue", "mango"], ["vendeur", "seller"], ["combien", "how much or how many"]], "Which English market word belongs with each French expression?"],
      ["dict", "vendeur", "Can you write the French word for the person who sells goods?"],
      ["order", ["Combien", "coûte", "cette", "mangue", "?"], "Can you arrange these French market words into a price question?"]
    ], "fr", "en");

  add("af5c", "Le passé composé (introduction)", "⏳", "French", ["hier", "joué", "mangé"],
    { video: [["📅", "“Hier” means yesterday."], ["⚽", "“J'ai joué” tells about a completed action."], ["🥭", "“Elle a mangé” tells what she ate."]] },
    [
      ["choice", "Which French word means “yesterday”?", ["hier", "demain", "aujourd'hui"], 0],
      ["choice", "What does “j'ai joué” mean in English?", ["I played", "I play tomorrow", "I am a game"], 0],
      ["choice", "Which phrase means “she ate” in French?", ["elle a mangé", "elle joue", "elle mange demain"], 0],
      ["choice", "Which phrase describes a completed past action?", ["j'ai chanté", "je chante", "je vais chanter"], 0],
      ["choice", "Which word completes “Hier, Bih ___ au football”?", ["a joué", "joue", "va jouer"], 0],
      ["tf", "“J'ai mangé” can mean “I ate.”", true, "J'ai mangé uses avoir with the past participle mangé."],
      ["tf", "“Demain” means yesterday in French.", false, "Demain means tomorrow; hier means yesterday."],
      ["match", [["hier", "yesterday"], ["j'ai joué", "I played"], ["elle a mangé", "she ate"], ["passé composé", "French tense for a completed past action"]], "Which English meaning belongs with each French past-tense expression?"],
      ["build", "joué", "Can you build the past participle used in “j'ai joué”?"],
      ["order", ["Hier,", "j'ai", "joué", "au", "football", "."], "Can you arrange these French words into a completed past-action sentence?"]
    ], "fr", "en");

  add("af6", "Petite lecture", "📖", "French reading", ["ami", "école", "livre"],
    { story: ["Bih est un élève qui aime lire.", "Il ouvre un petit livre à l'école et lit une histoire à son amie.", "Son amie écoute, puis ils parlent ensemble de l'histoire."] },
    [
      ["choice", "Who is the pupil in the French reading passage?", ["Bih", "Ama", "Fon"], 0],
      ["choice", "What does Bih like to do?", ["read", "sleep in class", "sell a bicycle"], 0],
      ["choice", "Where does Bih open his book?", ["at school", "at the market", "in a bus"], 0],
      ["choice", "Who listens to the story?", ["his friend", "a shopkeeper", "a driver"], 0],
      ["choice", "What does Bih do after reading the story?", ["talks about it with his friend", "throws away the book", "leaves the school forever"], 0],
      ["tf", "Bih reads a small book at school.", true, "The passage says that he opens a small book at school."],
      ["tf", "Bih's friend is not interested in the story.", false, "His friend listens and then talks with him about the story."],
      ["match", [["élève", "pupil"], ["livre", "book"], ["amie", "female friend"], ["école", "school"]], "Which English reading word belongs with each French word?"],
      ["dict", "histoire", "Can you write the French word for the story Bih reads?"],
      ["order", ["Bih", "lit", "un", "livre", "à", "l'école", "."], "Can you arrange these French reading words into a sentence?"]
    ], "fr", "en");

  add("af6b", "Écrire un petit message", "✉️", "French writing", ["message", "bonjour", "merci"],
    { card: ["Un message court et poli", "Un petit message peut commencer par « Bonjour » et donner une information claire. On peut terminer par « Merci » ou « À bientôt » selon la situation."] },
    [
      ["choice", "Which French greeting can begin a short message?", ["Bonjour,", "À bientôt,", "Merci."], 0],
      ["choice", "What does “merci” mean in English?", ["thank you", "goodbye", "tomorrow"], 0],
      ["choice", "Which French phrase can mean “see you soon”?", ["À bientôt", "Bonjour", "S'il vous plaît"], 0],
      ["choice", "What should the main part of a short message share?", ["a clear idea", "only random letters", "a list of unrelated numbers"], 0],
      ["choice", "Which closing is polite after receiving help?", ["Merci,", "Hier,", "Où"], 0],
      ["tf", "A short message can begin with “Bonjour.”", true, "Bonjour is a friendly greeting for opening a message."],
      ["tf", "“À bientôt” means “thank you” in French.", false, "À bientôt means see you soon; merci means thank you."],
      ["match", [["bonjour", "hello"], ["merci", "thank you"], ["à bientôt", "see you soon"], ["message", "short written note"]], "Which English message-writing meaning belongs with each French word?"],
      ["build", "message", "Can you build the French word for a short written note?"],
      ["order", ["Bonjour,", "comment", "vas-tu", "?", "À", "bientôt", "!"], "Can you arrange these French words into a friendly short message?"]
    ], "fr", "en");

  add("af6c", "Les adjectifs au féminin", "🌸", "French grammar", ["petit", "petite", "heureuse"],
    { video: [["👦", "“Petit” describes a masculine noun."], ["👧", "“Petite” describes a feminine noun."], ["😊", "Some adjectives change form, such as heureux and heureuse."]] },
    [
      ["choice", "Which feminine form of “petit” describes a girl?", ["petite", "petit", "petits"], 0],
      ["choice", "What is the feminine form of “grand”?", ["grande", "grands", "grand"], 0],
      ["choice", "Which word agrees with “une fille”?", ["petite", "petit", "petits"], 0],
      ["choice", "Which feminine form means “happy”?", ["heureuse", "heureux", "heureuxes"], 0],
      ["choice", "Which phrase is correct French?", ["une grande maison", "un grande maison", "une grand maison"], 0],
      ["tf", "“Petite” is a feminine form of the adjective “petit.”", true, "Petite describes a feminine singular noun."],
      ["tf", "The adjective “heureux” changes to “heureuses” for the feminine singular.", false, "Heureux becomes heureuse in the feminine singular."],
      ["match", [["petit", "masculine form"], ["petite", "feminine form"], ["grand", "masculine adjective"], ["heureuse", "feminine form of heureux"]], "Which French gender description belongs with each adjective form?"],
      ["missing", "petite", 3, ["i", "e", "a"], "🌸", "Which letter completes the feminine form of “petit”?"],
      ["order", ["Une", "petite", "fille", "lit", "un", "livre", "."], "Can you arrange these French adjective words into a sentence?"]
    ], "fr", "en");

})();
