(() => {
  const C = window.LEXORA_CONTENT;
  const make = window.LEXORA_MAKE_EXPLICIT_LESSON;
  const add = (id, title, emoji, skill, words, intro, qs, lang = "fr", promptLang = "fr") => {
    C.lessons[id] = make({ id, title, emoji, skill, words, intro, qs, lang, promptLang });
  };

  add("ff1", "Les voyelles a, e, i, o, u", "🔤", "Lecture", ["a", "e", "i", "o", "u"],
    { card: ["Les voyelles que nous apprenons", "Les lettres a, e, i, o et u sont des voyelles. On les entend dans des mots comme ami, école, image, orange et usine."] },
    [
      ["choice", "Quelle voyelle entend-on au début du mot « ami » ?", ["a", "i", "o"], 0],
      ["choice", "Quelle voyelle commence le mot « école » ?", ["e", "i", "o"], 0],
      ["choice", "Quelle lettre entend-on au début du mot « image » ?", ["i", "a", "u"], 0],
      ["choice", "Quel mot commence par la voyelle o ?", ["orange", "ami", "usine"], 0],
      ["choice", "Quelle voyelle commence le mot « usine » ?", ["u", "e", "a"], 0],
      ["tf", "Les lettres a, e, i, o et u sont des voyelles.", true, "Ce sont les cinq voyelles étudiées dans cette leçon."],
      ["tf", "La lettre b est une voyelle.", false, "La lettre b est une consonne."],
      ["match", [["a", "ami"], ["e", "école"], ["i", "image"], ["o", "orange"]], "Associe chaque voyelle au mot qui commence par elle."],
      ["build", "ami", "Peux-tu former le mot qui désigne une personne proche ?"],
      ["order", ["Ama", "a", "un", "ami", "."], "Mets les mots dans l'ordre pour écrire une phrase correcte."]
    ]);

  add("ff1b", "Les consonnes b, m, p", "🔠", "Lecture", ["b", "m", "p"],
    { story: ["Bih pose un ballon près de la porte.", "Maman apporte une mangue à Ama.", "Les lettres b, m et p sont des consonnes dans ces mots."] },
    [
      ["choice", "Quelle consonne entend-on au début de « ballon » ?", ["b", "a", "o"], 0],
      ["choice", "Quel mot commence par la consonne m ?", ["maman", "papa", "ami"], 0],
      ["choice", "Quelle lettre commence le mot « porte » ?", ["p", "b", "m"], 0],
      ["choice", "Dans quel mot la lettre b est-elle au début ?", ["banane", "mangue", "porte"], 0],
      ["choice", "Quel mot contient la consonne p au début ?", ["papa", "maman", "orange"], 0],
      ["tf", "La lettre m est une consonne.", true, "M fait partie des consonnes."],
      ["tf", "La lettre p est une voyelle.", false, "P est une consonne ; les voyelles étudiées sont a, e, i, o et u."],
      ["match", [["b", "ballon"], ["m", "maman"], ["p", "porte"], ["voyelle", "lettre comme a"]], "Relie chaque lettre ou catégorie à son exemple."],
      ["dict", "maman", "Écris le mot de la famille qui commence par m."],
      ["order", ["Bih", "porte", "un", "ballon", "."], "Remets les mots dans l'ordre pour former une phrase."]
    ]);

  add("ff1c", "Les mots de la classe", "🎒", "Vocabulaire", ["livre", "crayon", "tableau"],
    { video: [["📖", "Un livre contient des pages à lire."], ["✏️", "Un crayon sert à écrire ou à dessiner."], ["🏫", "Le tableau aide l'enseignant à montrer une leçon."]] },
    [
      ["choice", "Quel objet de la classe sert à écrire ?", ["un crayon", "une porte", "une fenêtre"], 0],
      ["choice", "Dans quoi peut-on lire une histoire ?", ["un livre", "une règle", "une chaise"], 0],
      ["choice", "Quel objet permet à l'enseignant d'écrire devant la classe ?", ["le tableau", "le sac", "la chaussure"], 0],
      ["choice", "Où un élève peut-il ranger ses cahiers ?", ["dans son sac", "sous la pluie", "dans une marmite"], 0],
      ["choice", "Quel objet sert à tracer une ligne droite ?", ["une règle", "un tableau", "un livre"], 0],
      ["tf", "Un crayon peut servir à écrire.", true, "On peut écrire ou dessiner avec un crayon."],
      ["tf", "Une chaise sert à lire les mots au tableau.", false, "Une chaise permet de s'asseoir ; le tableau porte les mots de la leçon."],
      ["match", [["livre", "objet que l'on lit"], ["crayon", "objet pour écrire"], ["règle", "objet pour tracer une ligne"], ["tableau", "surface pour présenter la leçon"]], "Associe chaque objet de classe à son usage principal."],
      ["build", "crayon", "Forme le nom de l'objet qui sert à écrire."],
      ["order", ["Le", "livre", "est", "dans", "le", "sac", "."], "Remets ces mots dans l'ordre pour écrire une phrase."]
    ]);

  add("ff2", "Les syllabes", "📖", "Lecture", ["syllabe", "ami", "mangue"],
    { card: ["Écouter et compter les syllabes", "Une syllabe est un morceau sonore d'un mot. On peut frapper dans les mains pour compter : a-mi a deux syllabes et man-gue en a deux."] },
    [
      ["choice", "Combien de syllabes entend-on dans « moto » ?", ["deux", "une", "quatre"], 0],
      ["choice", "Quel mot se partage en trois syllabes : pa-pi-llon ?", ["papillon", "livre", "sac"], 0],
      ["choice", "Combien de syllabes y a-t-il dans « école » (é-co-le) ?", ["trois", "deux", "une"], 0],
      ["choice", "Quel mot a une seule syllabe ?", ["chat", "ami", "banane"], 0],
      ["choice", "Combien de syllabes entend-on dans « ca-hi-er » ?", ["deux", "trois", "quatre"], 0],
      ["tf", "Le mot « ami » a deux syllabes : a-mi.", true, "On entend les deux morceaux a puis mi."],
      ["tf", "Le mot « chat » a trois syllabes.", false, "Chat se prononce en une seule syllabe."],
      ["match", [["ba-na-ne", "trois morceaux : ba / na / ne"], ["chat", "un seul morceau sonore"], ["a-mi", "deux morceaux : a / mi"], ["é-co-le", "trois morceaux : é / co / le"]], "Relie chaque mot découpé à sa prononciation en syllabes."],
      ["missing", "mangue", 3, ["n", "g", "u"], "🥭", "Quelle lettre complète le fruit « man___ue » ?"],
      ["order", ["Le", "pa-pi-llon", "vole", "près", "des", "fleurs", "."], "Mets les mots dans l'ordre pour écrire une phrase."]
    ]);

  add("ff2b", "Lire des phrases simples", "📚", "Lecture", ["phrase", "école", "mangue"],
    { story: ["Ama va à l'école avec son cahier.", "À la récréation, elle partage une mangue avec Bih.", "Après la classe, Ama rentre à la maison avec son frère."] },
    [
      ["choice", "Où Ama va-t-elle avec son cahier ?", ["à l'école", "au marché", "à la rivière"], 0],
      ["choice", "Quel objet Ama apporte-t-elle en classe ?", ["un cahier", "un ballon", "une marmite"], 0],
      ["choice", "Quel fruit Ama partage-t-elle avec Bih ?", ["une mangue", "une orange", "une papaye"], 0],
      ["choice", "Avec qui Ama partage-t-elle le fruit ?", ["Bih", "sa maîtresse", "un vendeur"], 0],
      ["choice", "Où Ama va-t-elle après la classe ?", ["à la maison", "à l'aéroport", "à la plage"], 0],
      ["tf", "Ama partage une mangue avec Bih.", true, "La deuxième phrase dit qu'elle partage le fruit avec Bih."],
      ["tf", "Ama va à la rivière après la classe.", false, "Après la classe, elle rentre à la maison avec son frère."],
      ["match", [["cahier", "objet apporté en classe"], ["mangue", "fruit partagé à la récréation"], ["Bih", "ami qui reçoit une part"], ["maison", "lieu où Ama rentre"]], "Associe chaque mot au détail correspondant dans l'histoire."],
      ["dict", "cahier", "Écris le nom de l'objet qu'Ama apporte à l'école."],
      ["order", ["Ama", "partage", "une", "mangue", "avec", "Bih", "."], "Remets les mots dans l'ordre pour écrire une phrase de l'histoire."]
    ]);

  add("ff2c", "Masculin et féminin", "⚖️", "Grammaire", ["un", "une", "garçon"],
    { video: [["👦", "On dit un garçon : ce nom est au masculin."], ["👧", "On dit une fille : ce nom est au féminin."], ["🐱", "On dit un chat et une chatte."]] },
    [
      ["choice", "Quel article accompagne le nom féminin « fille » ?", ["une", "un", "des"], 0],
      ["choice", "Quelle expression est au masculin ?", ["un garçon", "une fille", "une chatte"], 0],
      ["choice", "Quelle forme désigne une chatte au féminin ?", ["une chatte", "un chat", "des chats"], 0],
      ["choice", "Quel article complète « ___ amie d'Ama » ?", ["une", "un", "le"], 0],
      ["choice", "Quelle expression est correctement écrite au féminin ?", ["une élève", "un fille", "une garçon"], 0],
      ["tf", "Dans « un garçon », l'article un est masculin.", true, "On emploie un devant le nom masculin garçon."],
      ["tf", "On écrit « un fille » pour parler d'une fille.", false, "On dit « une fille » : fille est un nom féminin."],
      ["match", [["un garçon", "nom masculin singulier de personne"], ["une fille", "nom féminin singulier de personne"], ["un chat", "nom masculin singulier d'animal"], ["une chatte", "nom féminin singulier d'animal"]], "Associe chaque groupe nominal à son genre."],
      ["build", "fille", "Écris le nom féminin qui correspond à « garçon » dans cette leçon."],
      ["order", ["Une", "amie", "lit", "un", "livre", "."], "Remets ces mots dans l'ordre pour former une phrase correcte."]
    ]);

  add("ff3", "Le nom et l'article", "📝", "Grammaire", ["nom", "article", "école"],
    { card: ["Le nom et son article", "Un nom désigne une personne, un animal, un lieu ou une chose. L'article se place devant le nom : le livre, une école, des élèves."] },
    [
      ["choice", "Quel mot est le nom dans « La maîtresse ouvre le livre » ?", ["livre", "ouvre", "la"], 0],
      ["choice", "Quel article complète « ___ école » ?", ["une", "un", "des"], 0],
      ["choice", "Quel groupe contient un article et un nom ?", ["le cahier", "écrit vite", "sous la table"], 0],
      ["choice", "Quel mot désigne une personne dans « Le garçon lit » ?", ["garçon", "lit", "le"], 0],
      ["choice", "Quel article accompagne correctement le nom masculin « ballon » ?", ["un ballon", "une ballon", "des ballon"], 0],
      ["tf", "Dans « une école », école est un nom.", true, "École désigne un lieu ; c'est donc un nom."],
      ["tf", "Dans « le cahier », le est le nom.", false, "Le est l'article ; cahier est le nom."],
      ["match", [["le", "article masculin singulier"], ["une", "article féminin singulier"], ["des", "article pluriel"], ["école", "nom d'un lieu"]], "Relie chaque article ou nom à sa catégorie."],
      ["missing", "livre", 2, ["v", "a", "i"], "📖", "Quelle lettre complète le nom de l'objet que l'on lit : li___re ?"],
      ["order", ["La", "maîtresse", "ouvre", "le", "livre", "."], "Mets les mots dans l'ordre pour écrire la phrase."]
    ]);

  add("ff3b", "Le singulier et le pluriel", "🔢", "Grammaire", ["singulier", "pluriel", "livres"],
    { story: ["Ama prend un livre dans son sac.", "Bih ajoute deux livres sur la table.", "Le mot change souvent au pluriel, et l'article peut devenir des."] },
    [
      ["choice", "Quel mot désigne plusieurs cahiers ?", ["des cahiers", "un cahier", "le cahier"], 0],
      ["choice", "Quel article convient à plusieurs mangues ?", ["des", "un", "une"], 0],
      ["choice", "Quelle est la forme plurielle de « livre » dans la phrase ?", ["livres", "livre", "livree"], 0],
      ["choice", "Quelle expression est au singulier ?", ["un ballon", "des ballons", "les ballons"], 0],
      ["choice", "Quelle phrase parle de plusieurs élèves ?", ["Les élèves lisent.", "L'élève lit.", "Un élève lit."], 0],
      ["tf", "« Un livre » est au singulier.", true, "Un livre désigne un seul livre."],
      ["tf", "« Des cahiers » parle d'un seul cahier.", false, "Des cahiers est au pluriel et désigne plusieurs cahiers."],
      ["match", [["un livre", "singulier"], ["des livres", "pluriel"], ["une mangue", "un seul fruit"], ["des mangues", "plusieurs fruits"]], "Associe chaque expression au nombre qu'elle indique."],
      ["dict", "livres", "Écris le pluriel de « livre »."],
      ["order", ["Les", "élèves", "rangent", "leurs", "cahiers", "."], "Mets les mots dans l'ordre pour écrire une phrase au pluriel."]
    ]);

  add("ff3c", "La phrase et la ponctuation", "✍️", "Écriture", ["phrase", "point", "question"],
    { video: [["🔠", "Une phrase commence par une majuscule."], ["📖", "Un point peut terminer une phrase déclarative."], ["❓", "Un point d'interrogation termine une question."]] },
    [
      ["choice", "Quel signe termine normalement la question « Où est le livre » ?", ["?", ".", ","], 0],
      ["choice", "Quelle phrase commence par une majuscule ?", ["Ama lit un livre.", "ama lit un livre.", "ama Lit un livre."], 0],
      ["choice", "Quel signe peut terminer une phrase qui exprime une joie ?", ["!", "?", ","], 0],
      ["choice", "Quelle phrase est correctement terminée par un point ?", ["Bih ferme son cahier.", "Bih ferme son cahier,", "Bih ferme son cahier?"], 0],
      ["choice", "Quel signe indique que l'on pose une question ?", ["le point d'interrogation", "la virgule", "le point"], 0],
      ["tf", "Une phrase écrite commence généralement par une majuscule.", true, "La majuscule marque le début de la phrase."],
      ["tf", "Un point d'interrogation termine normalement une phrase déclarative.", false, "Il termine une question ; une phrase déclarative peut se terminer par un point."],
      ["match", [[".", "termine une phrase déclarative"], ["?", "termine une question"], ["!", "marque une exclamation"], ["majuscule", "commence une phrase"]], "Associe chaque signe ou règle à son rôle dans une phrase."],
      ["build", "question", "Forme le mot qui désigne une phrase qui demande une réponse."],
      ["order", ["Où", "est", "mon", "livre", "?"], "Mets les mots et le signe dans l'ordre pour écrire une question."]
    ]);

  add("ff4", "Le verbe au présent", "⏰", "Grammaire", ["verbe", "présent", "parle"],
    { card: ["Les actions au présent", "Le présent indique une action qui se déroule maintenant ou qui se répète. Ama parle, Bih lit et les élèves chantent en classe."] },
    [
      ["choice", "Quel verbe complète « Ama ___ avec sa sœur » ?", ["parle", "parlons", "parlez"], 0],
      ["choice", "Quelle forme complète « Nous ___ une chanson » ?", ["chantons", "chante", "chantes"], 0],
      ["choice", "Quel verbe est au présent dans « Bih lit un livre » ?", ["lit", "lira", "lisait"], 0],
      ["choice", "Quelle phrase décrit une action habituelle au présent ?", ["Ngozi joue après l'école.", "Ngozi jouera demain.", "Ngozi jouait hier."], 0],
      ["choice", "Quelle forme complète « Tu ___ à la maison » ?", ["manges", "mangeons", "mangent"], 0],
      ["tf", "Dans « nous chantons », le verbe est au présent.", true, "Chantons indique une action faite par nous au présent."],
      ["tf", "Dans « Ama parlera », le verbe est au présent.", false, "Parlera est au futur ; au présent, on dit « Ama parle »."],
      ["match", [["je parle", "action au présent avec je"], ["tu joues", "action au présent avec tu"], ["nous lisons", "action au présent avec nous"], ["ils chantent", "action au présent avec ils"]], "Relie chaque forme verbale à la personne qui l'accompagne."],
      ["build", "parle", "Écris le verbe au présent qui complète « Ama ___ »."],
      ["order", ["Les", "élèves", "chantent", "en", "classe", "."], "Remets ces mots dans l'ordre pour former une phrase au présent."]
    ]);

  add("ff4b", "Les homophones a/à et et/est", "🔎", "Grammaire", ["a", "à", "et", "est"],
    { story: ["Ama a un cahier et un crayon.", "Elle va à l'école avec Bih.", "Le ciel est clair, et la classe commence."] },
    [
      ["choice", "Quel mot complète « Ama ___ un cahier » ?", ["a", "à", "est"], 0],
      ["choice", "Quel mot complète « Le livre est ___ Ama » ?", ["à", "a", "et"], 0],
      ["choice", "Quel mot relie les deux objets dans « un cahier ___ un crayon » ?", ["et", "est", "à"], 0],
      ["choice", "Quel mot complète « Le ciel ___ clair » ?", ["est", "et", "a"], 0],
      ["choice", "Quelle phrase emploie correctement « a » ?", ["Bih a un ballon.", "Bih va a l'école.", "Bih et un ami."], 0],
      ["tf", "Dans « Ama a un cahier », a est une forme du verbe avoir.", true, "Ama a quelque chose : a vient du verbe avoir."],
      ["tf", "Dans « Le livre est à Ama », on écrit « a » sans accent.", false, "On écrit « à » avec un accent pour indiquer ici à qui appartient le livre."],
      ["match", [["a", "verbe avoir"], ["à", "préposition"], ["et", "mot qui relie"], ["est", "verbe être"]], "Associe chaque homophone à sa nature dans la phrase."],
      ["dict", "école", "Écris le lieu où Ama va avec Bih."],
      ["order", ["Bih", "a", "un", "livre", "et", "un", "crayon", "."], "Mets les mots dans l'ordre pour former une phrase avec « a » et « et »."]
    ]);

  add("ff4c", "Lecture et compréhension", "📖", "Lecture", ["marché", "panier", "vendeuse"],
    { story: ["Amina accompagne sa tante au marché de Buea.", "Elles achètent des mangues et demandent le prix à une vendeuse.", "Amina porte le panier pendant que sa tante paie, puis elles rentrent ensemble."] },
    [
      ["choice", "Où Amina accompagne-t-elle sa tante ?", ["au marché de Buea", "à l'école de Douala", "au port de Limbe"], 0],
      ["choice", "Quel fruit achètent-elles ?", ["des mangues", "des oranges", "des noix de coco"], 0],
      ["choice", "À qui demandent-elles le prix ?", ["à une vendeuse", "à un conducteur", "à une infirmière"], 0],
      ["choice", "Que porte Amina ?", ["le panier", "un tableau", "une chaise"], 0],
      ["choice", "Qui paie les achats ?", ["sa tante", "Amina", "la maîtresse"], 0],
      ["tf", "Amina et sa tante achètent des mangues.", true, "La deuxième phrase indique qu'elles achètent des mangues."],
      ["tf", "Amina accompagne sa tante au marché de Garoua.", false, "L'histoire situe leur marché à Buea."],
      ["match", [["Buea", "ville du marché dans l'histoire"], ["mangues", "fruits achetés"], ["vendeuse", "personne qui indique le prix"], ["panier", "objet porté par Amina"]], "Relie chaque mot au détail correspondant dans l'histoire."],
      ["missing", "panier", 2, ["n", "r", "s"], "🧺", "Quelle lettre complète l'objet qu'Amina porte : pa___ier ?"],
      ["order", ["Sa", "tante", "paie", "les", "achats", "."], "Remets les mots dans l'ordre pour résumer une action de l'histoire."]
    ]);

  add("ff5", "L'accord de l'adjectif", "🎨", "Grammaire", ["adjectif", "petit", "petite"],
    { card: ["L'adjectif s'accorde avec le nom", "Un adjectif décrit un nom. Il s'accorde souvent en genre et en nombre : un petit sac, une petite mangue, des petits sacs."] },
    [
      ["choice", "Quel adjectif complète « une mangue ___ » ?", ["mûre", "mûrs", "mûr"], 0],
      ["choice", "Quelle expression accorde l'adjectif au féminin ?", ["une petite maison", "un petite maison", "une petit maison"], 0],
      ["choice", "Quelle forme complète « des sacs ___ » ?", ["lourds", "lourde", "lourd"], 0],
      ["choice", "Quel adjectif décrit correctement « un drapeau ___ » ?", ["jaune", "jaunes", "jaunee"], 0],
      ["choice", "Quelle expression est au pluriel ?", ["des fleurs rouges", "une fleur rouge", "la fleur rouge"], 0],
      ["tf", "Dans « une petite mangue », petite s'accorde avec le nom féminin.", true, "Mangue est féminin singulier ; on écrit petite."],
      ["tf", "On écrit « des maison blanche » pour plusieurs maisons.", false, "Au pluriel, on écrit « des maisons blanches »."],
      ["match", [["un fruit mûr", "masculin singulier"], ["une fleur rouge", "féminin singulier"], ["des sacs lourds", "masculin pluriel"], ["des robes bleues", "féminin pluriel"]], "Associe chaque groupe nominal à son genre et à son nombre."],
      ["build", "petite", "Écris la forme féminine de l'adjectif « petit »."],
      ["order", ["Les", "mangues", "mûres", "sont", "jaunes", "."], "Mets ces mots dans l'ordre pour former une phrase correcte."]
    ]);

  add("ff5b", "L'imparfait et le passé composé", "🕰️", "Conjugaison", ["imparfait", "passé composé", "hier"],
    { story: ["Quand elle était petite, Ama jouait souvent dans la cour.", "Hier, elle a joué au ballon avec Bih après l'école.", "L'imparfait décrit une habitude passée ; le passé composé présente une action terminée."] },
    [
      ["choice", "Quelle phrase décrit une habitude passée ?", ["Ama jouait souvent dans la cour.", "Ama a joué hier.", "Ama jouera demain."], 0],
      ["choice", "Quelle phrase présente une action terminée hier ?", ["Bih a lu un livre.", "Bih lisait souvent.", "Bih lira demain."], 0],
      ["choice", "Quel temps complète « Hier, Ngozi ___ une mangue » ?", ["a mangé", "mangeait souvent", "mangera"], 0],
      ["choice", "Quelle forme est à l'imparfait ?", ["nous chantions", "nous avons chanté", "nous chanterons"], 0],
      ["choice", "Quelle forme est au passé composé ?", ["elle a parlé", "elle parlait", "elle parlera"], 0],
      ["tf", "« Ama jouait souvent » décrit une habitude passée.", true, "L'imparfait peut décrire une habitude qui se répétait."],
      ["tf", "« Bih a couru » est une forme de l'imparfait.", false, "« A couru » est au passé composé ; l'imparfait serait « courait »."],
      ["match", [["elle jouait", "imparfait avec elle"], ["elle a joué", "passé composé avec elle"], ["nous chantions", "imparfait avec nous"], ["nous avons chanté", "passé composé avec nous"]], "Relie chaque forme verbale au temps auquel elle appartient."],
      ["build", "jouait", "Écris la forme à l'imparfait dans « Ama ___ souvent »."],
      ["order", ["Hier,", "Bih", "a", "joué", "au", "ballon", "."], "Remets les mots dans l'ordre pour raconter une action terminée."]
    ]);

  add("ff5c", "Synonymes et antonymes", "↔️", "Vocabulaire", ["synonyme", "contraire", "rapide"],
    { video: [["🙂", "Un synonyme a un sens proche d'un autre mot."], ["🐢", "Un antonyme a un sens contraire."], ["🏃", "Rapide et vite ont un sens proche ; lent est son contraire."]] },
    [
      ["choice", "Quel mot a un sens proche de « content » ?", ["heureux", "fâché", "vide"], 0],
      ["choice", "Quel mot est le contraire de « chaud » ?", ["froid", "tiède", "brûlant"], 0],
      ["choice", "Quel mot a un sens proche de « rapide » ?", ["vite", "lent", "lourd"], 0],
      ["choice", "Quel mot est le contraire de « grand » ?", ["petit", "haut", "large"], 0],
      ["choice", "Quel mot est un synonyme de « joli » ?", ["beau", "laid", "vide"], 0],
      ["tf", "« Lent » est le contraire de « rapide ».", true, "Lent et rapide expriment des vitesses opposées."],
      ["tf", "« Froid » est un synonyme de « chaud ».", false, "Froid est le contraire de chaud."],
      ["match", [["content", "heureux"], ["chaud", "froid"], ["rapide", "vite"], ["grand", "petit"]], "Associe chaque mot au synonyme ou à l'antonyme indiqué."],
      ["dict", "heureux", "Écris un synonyme de « content »."],
      ["order", ["Un", "petit", "chat", "court", "vite", "."], "Ordonne les mots pour décrire le déplacement du petit chat."]
    ]);

  add("ff6", "Lecture et conjugaison", "📚", "Lecture", ["récit", "verbe", "passé"],
    { card: ["Lire puis observer les verbes", "Dans un récit, les détails aident à comprendre qui agit et où. Les verbes changent selon le moment : Ama marche aujourd'hui, mais elle a marché hier."] },
    [
      ["choice", "Dans « Ama marche vers l'école », quel mot est le verbe ?", ["marche", "Ama", "école"], 0],
      ["choice", "Quelle forme indique une action terminée hier ?", ["Bih a lu.", "Bih lit.", "Bih lira."], 0],
      ["choice", "Quel sujet accomplit l'action dans « Les élèves chantent » ?", ["les élèves", "chantent", "la chanson"], 0],
      ["choice", "Quelle phrase est au présent ?", ["Ngozi écrit une lettre.", "Ngozi a écrit hier.", "Ngozi écrira demain."], 0],
      ["choice", "Quel mot complète « Nous ___ un récit » au présent ?", ["lisons", "lisez", "lit"], 0],
      ["tf", "Un verbe peut indiquer une action.", true, "Marcher, lire et écrire sont des verbes d'action."],
      ["tf", "Dans « les élèves chantent », le mot « élèves » est le verbe.", false, "Élèves est le sujet ; chantent est le verbe."],
      ["match", [["marche", "verbe au présent"], ["a marché", "verbe au passé composé"], ["marchera", "verbe au futur"], ["élèves", "nom qui peut être sujet"]], "Relie chaque mot ou forme à son rôle ou à son temps."],
      ["build", "lisons", "Écris le verbe « lire » au présent avec « nous »."],
      ["order", ["Les", "élèves", "lisent", "un", "récit", "."], "Mets les mots dans l'ordre pour écrire une phrase complète."]
    ]);

  add("ff6b", "Le futur simple", "⏳", "Conjugaison", ["futur", "demain", "parlerai"],
    { story: ["Demain, Ama parlera avec sa maîtresse.", "Bih jouera au football après les cours.", "Au futur simple, les terminaisons changent selon la personne."] },
    [
      ["choice", "Quelle forme complète « Demain, je ___ à ma tante » ?", ["parlerai", "parlais", "ai parlé"], 0],
      ["choice", "Quel verbe complète « Nous ___ une chanson demain » ?", ["chanterons", "chantions", "avons chanté"], 0],
      ["choice", "Quelle forme est au futur simple ?", ["tu joueras", "tu joues", "tu jouais"], 0],
      ["choice", "Quelle phrase parle de demain ?", ["Bih ira à l'école.", "Bih allait à l'école.", "Bih est allé à l'école."], 0],
      ["choice", "Quelle terminaison complète « elles parler___ » au futur ?", ["-ont", "-ais", "-ez"], 0],
      ["tf", "« Ama parlera » indique une action future.", true, "Parlera est au futur simple."],
      ["tf", "« Nous jouerons » est au passé composé.", false, "Jouerons est au futur ; le passé composé serait « nous avons joué »."],
      ["match", [["je parlerai", "futur avec je"], ["tu joueras", "futur avec tu"], ["il lira", "futur avec il"], ["nous chanterons", "futur avec nous"]], "Associe chaque forme du futur à la personne correspondante."],
      ["missing", "parlerai", 5, ["r", "a", "e"], "⏳", "Quelle lettre complète la forme « je parle___ » au futur ?"],
      ["order", ["Demain,", "Ama", "parlera", "avec", "sa", "maîtresse", "."], "Remets les mots dans l'ordre pour écrire une phrase au futur."]
    ]);

  add("ff6c", "Préparation au CEP : français", "📝", "Préparation au CEP", ["lecture", "accord", "ponctuation"],
    { video: [["📖", "Lis la consigne jusqu'au bout."], ["🔍", "Repère le sujet, le verbe et les indices."], ["✅", "Vérifie l'accord et la ponctuation avant de répondre."]] },
    [
      ["choice", "Quelle phrase est correctement ponctuée ?", ["Où habite Ama ?", "Où habite Ama.", "où habite Ama ?"], 0],
      ["choice", "Quel mot est un adjectif dans « une grande maison » ?", ["grande", "maison", "une"], 0],
      ["choice", "Quelle forme complète « Les filles ___ une lettre » ?", ["écrivent", "écrit", "écris"], 0],
      ["choice", "Quel est le pluriel de « un cahier » ?", ["des cahiers", "une cahier", "des cahier"], 0],
      ["choice", "Quel signe termine la phrase « Bravo pour ton travail » ?", ["!", "?", ","], 0],
      ["tf", "Un sujet au pluriel peut commander un verbe au pluriel.", true, "On écrit « les filles écrivent » avec le verbe au pluriel."],
      ["tf", "La phrase « Où est le livre. » porte le signe de ponctuation attendu pour une question.", false, "Une question se termine normalement par un point d'interrogation."],
      ["match", [["nom", "désigne une personne ou une chose"], ["verbe", "exprime une action ou un état"], ["adjectif", "décrit un nom"], ["point d'interrogation", "termine une question"]], "Relie chaque notion de français à sa définition."],
      ["dict", "écrivent", "Écris le verbe au pluriel dans « Les élèves ___ »."],
      ["order", ["Les", "élèves", "lisent", "la", "consigne", "."], "Mets les mots dans l'ordre pour former une consigne complète."]
    ]);

  add("fm1", "Compter jusqu'à 10", "🔢", "Nombres", ["un", "deux", "trois"],
    { card: ["Compter des objets", "On compte chaque objet une seule fois : un, deux, trois, puis quatre. Ama peut compter les mangues dans un panier jusqu'à dix."] },
    [
      ["choice", "Quel nombre vient après six ?", ["sept", "cinq", "neuf"], 0],
      ["choice", "Combien font deux mangues et une mangue ?", ["3", "2", "4"], 0],
      ["choice", "Quel nombre est plus grand que huit ?", ["10", "7", "6"], 0],
      ["choice", "Combien de doigts voit-on sur une main ?", ["5", "3", "8"], 0],
      ["tf", "Le nombre qui vient après neuf est dix.", true, "On compte huit, neuf, puis dix."],
      ["tf", "Quatre est plus grand que sept.", false, "Sept est plus grand que quatre."],
      ["match", [["1", "un"], ["3", "trois"], ["6", "six"], ["10", "dix"]], "Associe chaque chiffre à son nom en français."],
      ["num", "Ama a 3 mangues et Bih lui en donne 2. Combien de mangues a-t-elle maintenant ?", 5, "mangues"],
      ["num", "Il y a 4 élèves près de la porte et 3 dans la cour. Combien y a-t-il d'élèves ?", 7, "élèves"],
      ["num", "Paul compte 8 billes et en donne 3 à son ami. Combien lui en reste-t-il ?", 5, "billes"],
      ["num", "Ngozi range 2 livres sur une étagère et 4 sur une autre. Combien range-t-elle de livres ?", 6, "livres"]
    ]);

  add("fm1b", "Les formes géométriques", "🔺", "Géométrie", ["cercle", "triangle", "carré"],
    { story: ["À l'école, Ama dessine un cercle avec une craie.", "Bih trace un triangle et un carré dans son cahier.", "Ils comptent les côtés de chaque forme."] },
    [
      ["choice", "Quelle forme a trois côtés ?", ["un triangle", "un cercle", "un carré"], 0],
      ["choice", "Quelle forme n'a aucun côté droit ?", ["un cercle", "un triangle", "un rectangle"], 0],
      ["choice", "Combien de côtés égaux a un carré ?", ["quatre", "trois", "deux"], 0],
      ["choice", "Quelle forme ressemble au dessus d'une porte rectangulaire ?", ["un rectangle", "un cercle", "un triangle"], 0],
      ["tf", "Un triangle a trois côtés.", true, "Le mot triangle désigne une forme à trois côtés."],
      ["tf", "Un cercle a quatre côtés droits.", false, "Un cercle est rond et n'a pas de côtés droits."],
      ["match", [["triangle", "forme à trois côtés"], ["carré", "forme à quatre côtés égaux"], ["cercle", "forme sans côté droit"], ["côté", "bord droit d'une figure"]], "Relie chaque forme ou élément à sa description géométrique."],
      ["num", "Ama dessine 2 triangles et 1 carré. Combien dessine-t-elle de formes en tout ?", 3, "formes"],
      ["num", "Un triangle a 3 côtés et un carré en a 4. Combien cela fait-il de côtés au total ?", 7, "côtés"],
      ["num", "Bih dessine 4 cercles puis 2 autres. Combien de cercles a-t-il dessinés ?", 6, "cercles"],
      ["num", "La classe découpe 9 formes et en utilise 5. Combien de formes restent ?", 4, "formes"]
    ]);

  add("fm1c", "Plus grand, plus petit", "⚖️", "Nombres", ["plus grand", "plus petit", "égal"],
    { video: [["🔢", "On compare deux nombres pour savoir lequel est le plus grand."], ["🥭", "Sept mangues, c'est plus que cinq mangues."], ["📏", "Le signe < indique que le nombre de gauche est plus petit."]] },
    [
      ["choice", "Quel nombre est le plus grand : 8 ou 5 ?", ["8", "5", "ils sont égaux"], 0],
      ["choice", "Quel nombre est plus petit que 6 ?", ["4", "9", "8"], 0],
      ["choice", "Quel signe complète « 3 ___ 7 » ?", ["<", ">", "="], 0],
      ["choice", "Quelle comparaison est correcte ?", ["9 > 6", "4 > 8", "5 < 2"], 0],
      ["tf", "Dix est plus grand que sept.", true, "Dix vient après sept quand on compte."],
      ["tf", "Deux est égal à cinq.", false, "Deux et cinq sont différents ; cinq est plus grand."],
      ["match", [["2 < 6", "2 est plus petit que 6"], ["9 > 4", "9 est plus grand que 4"], ["5 = 5", "les deux nombres sont égaux"], ["1 < 3", "1 est plus petit que 3"]], "Relie chaque comparaison à sa lecture."],
      ["num", "Ama a 7 mangues et Bih en a 4. Combien Ama en a-t-elle de plus que Bih ?", 3, "mangues"],
      ["num", "Un panier contient 9 oranges. On en retire 2. Combien en reste-t-il ?", 7, "oranges"],
      ["num", "La classe compte 5 cahiers rouges et 5 cahiers bleus. Combien y a-t-il de cahiers ?", 10, "cahiers"],
      ["num", "Paul a 6 billes, puis en gagne 3. Combien de billes a-t-il maintenant ?", 9, "billes"]
    ]);

  add("fm2", "Additionner jusqu'à 20", "➕", "Calcul", ["addition", "somme", "dix"],
    { card: ["Additionner des quantités", "Additionner, c'est réunir des quantités. On peut compter d'abord les mangues d'Ama, puis celles de Bih, pour trouver la somme."] },
    [
      ["choice", "Quel calcul donne 8 + 5 ?", ["13", "12", "14"], 0],
      ["choice", "Quelle addition fait 16 ?", ["9 + 7", "8 + 6", "5 + 8"], 0],
      ["choice", "Ama a 6 mangues et en reçoit 4. Quelle opération faut-il faire ?", ["6 + 4", "6 - 4", "6 × 4"], 0],
      ["choice", "Quel résultat obtient-on avec 10 + 7 ?", ["17", "16", "18"], 0],
      ["tf", "La somme de 9 et 3 est 12.", true, "Neuf plus trois font douze."],
      ["tf", "Ajouter 4 à 11 donne 14.", false, "Onze plus quatre font quinze."],
      ["match", [["7 + 5", "12"], ["8 + 8", "16"], ["9 + 6", "15"], ["10 + 4", "14"]], "Associe chaque addition à sa somme."],
      ["num", "Ama apporte 7 mangues au marché et en achète 6 autres. Combien en a-t-elle ?", 13, "mangues"],
      ["num", "Une classe de Buea compte 8 filles et 9 garçons. Combien d'élèves compte-t-elle ?", 17, "élèves"],
      ["num", "Bih économise 500 FCFA puis 300 FCFA. Combien a-t-il économisé ?", 800, "FCFA"],
      ["num", "Une vendeuse a 12 plantains et en reçoit 5. Combien en a-t-elle maintenant ?", 17, "plantains"]
    ]);

  add("fm2b", "La soustraction", "➖", "Calcul", ["soustraction", "reste", "moins"],
    { story: ["Ngozi apporte 15 mangues au marché.", "Elle en vend 6 à une voisine.", "La soustraction permet de trouver combien de mangues restent dans son panier."] },
    [
      ["choice", "Quel résultat donne 14 − 5 ?", ["9", "8", "10"], 0],
      ["choice", "Quelle opération montre qu'on retire 3 de 12 ?", ["12 − 3", "12 + 3", "12 × 3"], 0],
      ["choice", "Que reste-t-il après 10 − 7 ?", ["3", "2", "4"], 0],
      ["choice", "Quelle différence obtient-on avec 18 − 9 ?", ["9", "8", "10"], 0],
      ["tf", "Quand on retire 4 de 13, il reste 9.", true, "Treize moins quatre font neuf."],
      ["tf", "La différence de 15 et 6 est 10.", false, "Quinze moins six font neuf."],
      ["match", [["11 − 3", "8"], ["16 − 7", "9"], ["14 − 7", "7"], ["20 − 5", "15"]], "Associe chaque soustraction au nombre qui reste."],
      ["num", "Ngozi a 15 mangues et en vend 6 au marché. Combien lui en reste-t-il ?", 9, "mangues"],
      ["num", "Un taxi quitte Bafoussam avec 18 passagers. Huit descendent. Combien restent dans le taxi ?", 10, "passagers"],
      ["num", "Ama a 1 000 FCFA et achète un cahier à 600 FCFA. Combien lui reste-t-il ?", 400, "FCFA"],
      ["num", "Une classe possède 17 livres et en prête 9. Combien de livres garde-t-elle ?", 8, "livres"]
    ]);

  add("fm2c", "Les pièces et les billets (FCFA)", "💵", "Monnaie", ["pièce", "billet", "FCFA"],
    { video: [["🪙", "Une pièce peut représenter une petite somme en FCFA."], ["💵", "Un billet porte une valeur indiquée en FCFA."], ["🧺", "Au marché, on additionne les montants pour payer."]] },
    [
      ["choice", "Une mangue coûte 200 FCFA. Quel montant faut-il pour en acheter deux ?", ["400 FCFA", "300 FCFA", "500 FCFA"], 0],
      ["choice", "Ama paie 1 000 FCFA pour un article de 700 FCFA. Quelle monnaie doit-elle recevoir ?", ["300 FCFA", "200 FCFA", "400 FCFA"], 0],
      ["choice", "Quel montant est égal à cinq pièces de 100 FCFA ?", ["500 FCFA", "400 FCFA", "600 FCFA"], 0],
      ["choice", "Bih a un billet de 500 FCFA et une pièce de 100 FCFA. Combien a-t-il ?", ["600 FCFA", "500 FCFA", "700 FCFA"], 0],
      ["tf", "Deux pièces de 100 FCFA font 200 FCFA.", true, "Cent plus cent font deux cents."],
      ["tf", "Un billet de 500 FCFA vaut moins qu'une pièce de 100 FCFA.", false, "Cinq cents FCFA est une somme supérieure à cent FCFA."],
      ["match", [["100 FCFA", "une pièce de cent"], ["500 FCFA", "cinq pièces de cent"], ["600 FCFA", "500 plus 100"], ["1 000 FCFA", "deux billets de 500"]], "Associe chaque somme à la façon de la former."],
      ["num", "Au marché, Ama achète un beignet à 200 FCFA et un jus à 300 FCFA. Quel est le total ?", 500, "FCFA"],
      ["num", "Paul a 1 000 FCFA et dépense 400 FCFA pour des bananes. Combien lui reste-t-il ?", 600, "FCFA"],
      ["num", "Une vendeuse reçoit trois pièces de 100 FCFA. Combien reçoit-elle en tout ?", 300, "FCFA"],
      ["num", "Un cahier coûte 700 FCFA. Bih donne un billet de 1 000 FCFA. Quelle monnaie reçoit-il ?", 300, "FCFA"]
    ]);

  add("fm3", "Les nombres jusqu'à 100", "🔢", "Numération", ["dizaines", "unités", "cent"],
    { card: ["Dizaines et unités", "Dans un nombre à deux chiffres, le premier chiffre indique les dizaines et le second les unités. Dans 47, il y a quatre dizaines et sept unités."] },
    [
      ["choice", "Quel nombre contient 6 dizaines et 3 unités ?", ["63", "36", "603"], 0],
      ["choice", "Quelle est la valeur du chiffre 8 dans 82 ?", ["80", "8", "2"], 0],
      ["choice", "Quel nombre vient juste après 59 ?", ["60", "58", "69"], 0],
      ["choice", "Quel nombre est formé de 4 dizaines et 9 unités ?", ["49", "94", "409"], 0],
      ["tf", "Dans 35, le chiffre 3 vaut 30.", true, "Le 3 est placé dans la colonne des dizaines."],
      ["tf", "Le nombre 64 contient 6 unités et 4 dizaines.", false, "Dans 64, il y a 6 dizaines et 4 unités."],
      ["match", [["27", "2 dizaines et 7 unités"], ["50", "5 dizaines et 0 unité"], ["81", "8 dizaines et 1 unité"], ["39", "3 dizaines et 9 unités"]], "Associe chaque nombre à sa décomposition en dizaines et unités."],
      ["num", "Ngozi a 5 paquets de dix crayons et 6 crayons seuls. Combien de crayons a-t-elle ?", 56, "crayons"],
      ["num", "Une classe compte 34 graines rouges et 20 graines jaunes. Combien y a-t-il de graines ?", 54, "graines"],
      ["num", "Bih a 72 perles et en donne 20 à son ami. Combien lui en reste-t-il ?", 52, "perles"],
      ["num", "Une carte montre 8 dizaines et 4 unités. Quel nombre indique-t-elle ?", 84, "unités"]
    ]);

  add("fm3b", "Addition et soustraction avec retenue", "🧮", "Calcul", ["retenue", "addition", "soustraction"],
    { story: ["Ama récolte 28 mangues et Bih en apporte 14 autres.", "Ils additionnent les dizaines et les unités pour trouver le total.", "Ensuite, ils donnent 12 mangues à leurs voisins et calculent le reste."] },
    [
      ["choice", "Quelle somme obtient-on avec 28 + 14 ?", ["42", "32", "52"], 0],
      ["choice", "Quel résultat donne 63 − 27 ?", ["36", "46", "34"], 0],
      ["choice", "Quelle addition nécessite de regrouper dix unités ?", ["38 + 7", "20 + 4", "11 + 3"], 0],
      ["choice", "Que donne 72 − 38 ?", ["34", "44", "36"], 0],
      ["tf", "Ajouter 10 à 46 donne 56.", true, "Une dizaine de plus que 46 donne 56."],
      ["tf", "Soustraire 5 de 30 donne 35.", false, "Trente moins cinq font vingt-cinq."],
      ["match", [["24 + 18", "42"], ["53 − 27", "26"], ["36 + 19", "55"], ["70 − 24", "46"]], "Relie chaque calcul posé à son résultat."],
      ["num", "Au marché de Douala, Ama achète 28 mangues puis 14 de plus. Combien en a-t-elle ?", 42, "mangues"],
      ["num", "Une école reçoit 65 cahiers et en distribue 28. Combien de cahiers restent ?", 37, "cahiers"],
      ["num", "Ngozi économise 375 FCFA lundi et 248 FCFA mardi. Combien économise-t-elle en tout ?", 623, "FCFA"],
      ["num", "Un vendeur a 90 oranges et en vend 36. Combien lui en reste-t-il ?", 54, "oranges"]
    ]);

  add("fm3c", "Mesurer les longueurs", "📏", "Mesures", ["mètre", "centimètre", "longueur"],
    { card: ["Mesurer avec m et cm", "Le centimètre sert à mesurer de petits objets et le mètre des longueurs plus grandes. Un mètre contient cent centimètres."] },
    [
      ["choice", "Quelle unité convient pour mesurer la longueur d'un crayon ?", ["centimètre", "kilomètre", "litre"], 0],
      ["choice", "Quelle unité convient pour mesurer la distance entre Buea et Limbe ?", ["kilomètre", "centimètre", "gramme"], 0],
      ["choice", "Combien de centimètres y a-t-il dans un mètre ?", ["100", "10", "1 000"], 0],
      ["choice", "Quel instrument peut mesurer la longueur d'une table ?", ["un mètre ruban", "une balance", "un thermomètre"], 0],
      ["tf", "Un mètre contient 100 centimètres.", true, "Cent centimètres font un mètre."],
      ["tf", "La distance entre deux villes se mesure en grammes.", false, "Une distance se mesure en mètres ou en kilomètres, pas en grammes."],
      ["match", [["longueur d'un crayon", "centimètres"], ["trajet entre villes", "kilomètres"], ["100 cm", "1 mètre"], ["règle graduée", "mesure une petite longueur"]], "Associe chaque mesure ou outil à son usage."],
      ["num", "Un ruban mesure 1 mètre et 25 centimètres. Combien mesure-t-il en centimètres ?", 125, "cm"],
      ["num", "La table mesure 80 cm et le banc 65 cm. Combien mesure leur longueur totale ?", 145, "cm"],
      ["num", "Un bâton de 150 cm est coupé de 40 cm. Quelle longueur reste-t-il ?", 110, "cm"],
      ["num", "Un trajet mesure 3 km puis continue sur 2 km. Quelle est sa longueur totale ?", 5, "km"]
    ]);

  add("fm4", "Les tables de multiplication", "✖️", "Calcul", ["multiplication", "table", "fois"],
    { card: ["Multiplier des groupes égaux", "La multiplication permet de compter rapidement des groupes égaux. Trois paniers de quatre mangues représentent 3 × 4, soit 12 mangues."] },
    [
      ["choice", "Ama met 4 mangues dans chacun de 3 paniers. Quel calcul donne le total ?", ["3 × 4", "3 + 4", "4 − 3"], 0],
      ["choice", "Quel produit donne 5 × 6 ?", ["30", "25", "35"], 0],
      ["choice", "Combien font 2 groupes de 8 cahiers ?", ["16", "10", "18"], 0],
      ["choice", "Quel produit donne 10 × 7 ?", ["70", "17", "60"], 0],
      ["tf", "Quatre groupes de cinq font 20.", true, "4 multiplié par 5 donne 20."],
      ["tf", "3 × 2 donne 9.", false, "Trois groupes de deux font six."],
      ["match", [["2 × 6", "12"], ["5 × 4", "20"], ["10 × 3", "30"], ["3 × 7", "21"]], "Associe chaque multiplication à son produit."],
      ["num", "À Yaoundé, une vendeuse prépare 4 sacs de 6 mangues. Combien de mangues prépare-t-elle ?", 24, "mangues"],
      ["num", "Une classe forme 5 rangées de 8 élèves. Combien d'élèves y a-t-il ?", 40, "élèves"],
      ["num", "Bih range 3 piles de 9 cahiers. Combien de cahiers range-t-il ?", 27, "cahiers"],
      ["num", "Un taxi fait 6 trajets de 10 km. Quelle distance parcourt-il en tout ?", 60, "km"]
    ]);

  add("fm4b", "La division", "➗", "Calcul", ["division", "partager", "quotient"],
    { story: ["Au marché, Ama a 24 mangues à partager également.", "Elle prépare 4 paniers avec le même nombre de fruits dans chacun.", "La division aide à trouver combien de mangues reçoit chaque panier."] },
    [
      ["choice", "Ama partage 24 mangues également entre 4 paniers. Combien met-elle dans chaque panier ?", ["6", "5", "8"], 0],
      ["choice", "Quel calcul partage 18 crayons en 3 groupes égaux ?", ["18 ÷ 3", "18 + 3", "18 × 3"], 0],
      ["choice", "Quel résultat donne 35 ÷ 5 ?", ["7", "6", "8"], 0],
      ["choice", "Combien font 48 ÷ 6 ?", ["8", "7", "9"], 0],
      ["tf", "Partager 20 oranges en 4 groupes égaux donne 5 oranges par groupe.", true, "Vingt divisé par quatre égale cinq."],
      ["tf", "36 divisé par 6 donne 8.", false, "Trente-six divisé par six donne six."],
      ["match", [["24 ÷ 3", "8"], ["27 ÷ 3", "9"], ["40 ÷ 4", "10"], ["42 ÷ 6", "7"]], "Associe chaque division à son quotient."],
      ["num", "Une vendeuse partage 32 mangues également entre 4 paniers. Combien met-elle dans chaque panier ?", 8, "mangues"],
      ["num", "18 élèves se répartissent en 3 équipes égales. Combien d'élèves y a-t-il par équipe ?", 6, "élèves"],
      ["num", "Un trajet de 24 km est parcouru en 4 étapes égales. Combien de kilomètres mesure chaque étape ?", 6, "km"],
      ["num", "Bih distribue 45 cahiers également à 5 groupes. Combien chaque groupe reçoit-il ?", 9, "cahiers"]
    ]);

  add("fm4c", "L'heure et la durée", "🕒", "Mesures", ["heure", "minute", "durée"],
    { video: [["🕗", "Une heure contient soixante minutes."], ["⏰", "À huit heures, la grande aiguille pointe vers le douze."], ["📚", "La durée mesure le temps entre le début et la fin d'une activité."]] },
    [
      ["choice", "Combien de minutes y a-t-il dans une heure ?", ["60", "30", "100"], 0],
      ["choice", "Quelle heure indique 7 h 30 ?", ["sept heures et demie", "sept heures pile", "huit heures et demie"], 0],
      ["choice", "Si une leçon commence à 9 h et dure une heure, quand finit-elle ?", ["à 10 h", "à 9 h 30", "à 11 h"], 0],
      ["choice", "Quelle durée sépare 14 h et 14 h 30 ?", ["30 minutes", "15 minutes", "60 minutes"], 0],
      ["tf", "À 5 h 30, trente minutes se sont écoulées après cinq heures.", true, "Une demi-heure correspond à trente minutes."],
      ["tf", "Deux heures contiennent 100 minutes.", false, "Deux heures contiennent 120 minutes."],
      ["match", [["8 h 00", "huit heures pile"], ["6 h 30", "six heures et demie"], ["1 heure", "60 minutes"], ["15 minutes", "un quart d'heure"]], "Associe chaque heure ou durée à son équivalence."],
      ["num", "Un cours commence à 8 h et se termine à 9 h. Combien de minutes dure-t-il ?", 60, "minutes"],
      ["num", "Ama commence ses devoirs à 16 h 00 et finit à 16 h 30. Combien de minutes travaille-t-elle ?", 30, "minutes"],
      ["num", "Un taxi part de Bafoussam à 10 h et roule pendant 2 heures. À quelle heure arrive-t-il ?", 12, "h"],
      ["num", "Une émission dure 45 minutes. Combien de minutes faut-il encore pour atteindre une heure ?", 15, "minutes"]
    ]);

  add("fm5", "Les fractions", "🍰", "Nombres", ["fraction", "moitié", "quart"],
    { card: ["Partager en parts égales", "Une fraction décrit des parts égales d'un tout. Une moitié partage en deux parts égales ; un quart partage en quatre parts égales."] },
    [
      ["choice", "Quelle fraction représente une part sur deux parts égales ?", ["1/2", "1/3", "1/4"], 0],
      ["choice", "Combien de quarts forment une unité entière ?", ["4", "2", "3"], 0],
      ["choice", "Quelle fraction est égale à la moitié ?", ["2/4", "1/3", "1/5"], 0],
      ["choice", "Ama partage une mangue en quatre parts égales. Quelle fraction représente une part ?", ["1/4", "1/2", "3/4"], 0],
      ["tf", "Deux moitiés égales forment un tout.", true, "Chaque moitié représente une des deux parts égales."],
      ["tf", "Un quart est plus grand qu'une moitié du même fruit.", false, "Un quart est une des quatre parts ; une moitié est une des deux parts."],
      ["match", [["1/2", "une part sur deux"], ["1/3", "une part sur trois"], ["1/4", "une part sur quatre"], ["3/4", "trois parts sur quatre"]], "Associe chaque fraction au nombre de parts décrit."],
      ["num", "Ama partage 8 mangues en deux groupes égaux. Combien de mangues y a-t-il dans un groupe ?", 4, "mangues"],
      ["num", "Une galette est découpée en 4 parts égales. Bih en mange 1. Combien de parts restent ?", 3, "parts"],
      ["num", "Un panier contient 12 oranges. La moitié est donnée aux voisins. Combien d'oranges sont données ?", 6, "oranges"],
      ["num", "Une corde est partagée en 4 morceaux égaux de 2 m chacun. Quelle est sa longueur totale ?", 8, "m"]
    ]);

  add("fm5b", "Les nombres décimaux", "🔟", "Numération", ["décimal", "virgule", "dixième"],
    { story: ["Au marché de Douala, Paul mesure un morceau de tissu de 1,5 m.", "La virgule sépare les unités des dixièmes dans un nombre décimal.", "Un mètre et cinq dixièmes de mètre peuvent aussi s'écrire 1,5 m."] },
    [
      ["choice", "Quel nombre représente un mètre et cinq dixièmes ?", ["1,5", "1,05", "15"], 0],
      ["choice", "Quel nombre décimal est égal à un demi ?", ["0,5", "0,2", "1,5"], 0],
      ["choice", "Quel nombre est le plus grand ?", ["2,4", "2,1", "1,9"], 0],
      ["choice", "Quelle écriture correspond à trois unités et deux dixièmes ?", ["3,2", "3,02", "32"], 0],
      ["tf", "Dans 4,7, le chiffre 7 indique sept dixièmes.", true, "Le 7 est à la première place après la virgule."],
      ["tf", "0,8 est plus grand que 1.", false, "Huit dixièmes est inférieur à une unité."],
      ["match", [["0,5", "cinq dixièmes"], ["1,2", "une unité et deux dixièmes"], ["2,0", "deux unités"], ["3,7", "trois unités et sept dixièmes"]], "Associe chaque nombre décimal à sa lecture."],
      ["num", "Un ruban mesure 1,5 m et un autre 0,5 m. Quelle est leur longueur totale ?", 2, "m"],
      ["num", "Une bouteille contient 1,2 litre d'eau. On en verse 0,2 litre. Combien reste-t-il ?", 1, "L"],
      ["num", "Un tissu mesure 2,5 m. La couturière coupe 1 m. Quelle longueur reste-t-il ?", 1.5, "m"],
      ["num", "Une règle mesure 10 cm. Un crayon mesure 7,5 cm. Quelle est la différence de longueur ?", 2.5, "cm"]
    ]);

  add("fm5c", "Les angles et les triangles", "📐", "Géométrie", ["angle", "triangle", "droit"],
    { video: [["📐", "Un angle se forme quand deux côtés se rencontrent."], ["🟦", "Un angle droit mesure 90 degrés."], ["🔺", "Les trois angles d'un triangle forment ensemble 180 degrés."]] },
    [
      ["choice", "Combien de degrés mesure un angle droit ?", ["90°", "45°", "180°"], 0],
      ["choice", "Combien de côtés possède un triangle ?", ["3", "4", "5"], 0],
      ["choice", "Quel type d'angle est plus petit qu'un angle droit ?", ["un angle aigu", "un angle obtus", "un angle plat"], 0],
      ["choice", "Quelle est la somme des angles d'un triangle ?", ["180°", "90°", "360°"], 0],
      ["tf", "Un angle droit mesure 90 degrés.", true, "C'est la mesure d'un angle droit."],
      ["tf", "Un triangle a quatre côtés.", false, "Un triangle possède trois côtés."],
      ["match", [["angle droit", "90°"], ["angle plat", "180°"], ["triangle", "3 côtés"], ["triangle équilatéral", "3 angles égaux"]], "Relie chaque notion à sa mesure ou à sa propriété."],
      ["num", "Deux angles d'un triangle mesurent 60° et 70°. Combien mesure le troisième angle ?", 50, "°"],
      ["num", "Un triangle a des angles de 90° et 35°. Quelle est la mesure du troisième angle ?", 55, "°"],
      ["num", "Un angle droit est partagé en deux angles égaux. Combien mesure chacun ?", 45, "°"],
      ["num", "Un triangle équilatéral a trois angles égaux qui totalisent 180°. Combien mesure chaque angle ?", 60, "°"]
    ]);

  add("fm6", "Pourcentages et périmètres", "📊", "Nombres et mesures", ["pourcentage", "périmètre", "côté"],
    { card: ["Pourcentage et contour", "Un pourcentage indique une part sur cent. Le périmètre est la longueur du contour d'une forme ; on additionne les longueurs de ses côtés."] },
    [
      ["choice", "Combien vaut 50 % de 40 mangues ?", ["20", "10", "30"], 0],
      ["choice", "Quel calcul donne le périmètre d'un carré de côté 5 cm ?", ["4 × 5", "5 × 5", "4 + 5"], 0],
      ["choice", "Combien vaut 25 % de 80 élèves ?", ["20", "25", "40"], 0],
      ["choice", "Quel est le périmètre d'un rectangle de 6 cm sur 4 cm ?", ["20 cm", "24 cm", "10 cm"], 0],
      ["tf", "25 % signifie 25 parts sur 100.", true, "Le symbole % signifie « sur cent »."],
      ["tf", "Le périmètre mesure la surface à l'intérieur d'une forme.", false, "Le périmètre mesure le contour ; l'aire mesure la surface."],
      ["match", [["50 %", "la moitié"], ["25 %", "un quart"], ["carré de côté 3 cm", "périmètre de 12 cm"], ["rectangle de 2 cm sur 5 cm", "périmètre de 14 cm"]], "Associe chaque pourcentage ou forme au résultat correspondant."],
      ["num", "Au marché, 10 mangues sur 40 sont mûres. Quel pourcentage du lot est mûr ?", 25, "%"],
      ["num", "Un carré de jardin a un côté de 7 m. Quel est son périmètre ?", 28, "m"],
      ["num", "Une classe a 20 élèves. 50 % participent au jeu. Combien participent ?", 10, "élèves"],
      ["num", "Un terrain rectangulaire mesure 12 m sur 8 m. Quel est son périmètre ?", 40, "m"]
    ]);

  add("fm6b", "L'aire du carré et du rectangle", "📏", "Géométrie", ["aire", "carré", "rectangle"],
    { story: ["La classe de Ngozi dessine un jardin carré de 4 mètres de côté.", "Pour trouver son aire, elle compte les rangées et les colonnes de mètres carrés.", "Pour un rectangle, on multiplie la longueur par la largeur."] },
    [
      ["choice", "Quelle opération calcule l'aire d'un carré de côté 5 cm ?", ["5 × 5", "5 + 5", "4 × 5"], 0],
      ["choice", "Comment calcule-t-on l'aire d'un rectangle ?", ["longueur × largeur", "longueur + largeur", "longueur × 2"], 0],
      ["choice", "Quelle unité convient pour exprimer l'aire d'une cour ?", ["m²", "m", "kg"], 0],
      ["choice", "Quel est le résultat de 6 cm × 3 cm pour l'aire ?", ["18 cm²", "18 cm", "9 cm²"], 0],
      ["tf", "L'aire mesure la surface à l'intérieur d'une forme.", true, "On calcule l'aire de la surface couverte."],
      ["tf", "Un rectangle de 4 m sur 3 m a une aire de 7 m².", false, "Son aire est 4 × 3, soit 12 m²."],
      ["match", [["carré de 3 cm", "aire de 9 cm²"], ["rectangle de 5 m sur 2 m", "aire de 10 m²"], ["carré de 4 m", "aire de 16 m²"], ["rectangle de 6 cm sur 3 cm", "aire de 18 cm²"]], "Associe chaque figure à son aire."],
      ["num", "Un jardin carré mesure 7 m de côté. Quelle est son aire ?", 49, "m²"],
      ["num", "Un tapis rectangulaire mesure 6 m sur 4 m. Quelle est son aire ?", 24, "m²"],
      ["num", "Un panneau mesure 8 cm de long et 5 cm de large. Quelle est son aire ?", 40, "cm²"],
      ["num", "Un petit terrain mesure 9 m sur 3 m. Quelle surface couvre-t-il ?", 27, "m²"]
    ]);

  add("fm6c", "Préparation au CEP : mathématiques", "📝", "Préparation au CEP", ["calcul", "mesure", "problème"],
    { video: [["📖", "Lis les nombres et la question avec attention."], ["🧮", "Choisis l'opération qui convient au problème."], ["✅", "Vérifie le calcul et écris l'unité de la réponse."]] },
    [
      ["choice", "Quelle opération permet de partager 48 mangues également entre 6 groupes ?", ["48 ÷ 6", "48 + 6", "48 × 6"], 0],
      ["choice", "Quel nombre est 10 % de 200 FCFA ?", ["20 FCFA", "10 FCFA", "40 FCFA"], 0],
      ["choice", "Quel nombre arrondi à la dizaine la plus proche est 347 ?", ["350", "340", "400"], 0],
      ["choice", "Quelle unité convient pour mesurer la distance entre deux villes ?", ["kilomètre", "centimètre", "gramme"], 0],
      ["tf", "Le périmètre est la longueur du contour d'une forme.", true, "On additionne les côtés pour trouver le périmètre."],
      ["tf", "La moitié de 36 mangues est 16 mangues.", false, "La moitié de 36 est 18."],
      ["match", [["1/2", "0,5"], ["1 km", "1 000 m"], ["périmètre", "longueur du contour"], ["25 % de 80", "20"]], "Associe chaque notion de révision à son équivalence."],
      ["num", "Une vendeuse a 48 mangues et les répartit en 6 paniers égaux. Combien de mangues met-elle par panier ?", 8, "mangues"],
      ["num", "Un taxi parcourt 125 km le matin et 78 km l'après-midi. Quelle distance parcourt-il en tout ?", 203, "km"],
      ["num", "Ama achète un cahier à 1 250 FCFA et un crayon à 300 FCFA. Quel est le coût total ?", 1550, "FCFA"],
      ["num", "Un rectangle de jardin mesure 9 m sur 4 m. Quel est son périmètre ?", 26, "m"]
    ]);

  add("fsc1", "Mon corps", "🧍", "Sciences", ["tête", "yeux", "mains"],
    { card: ["Les parties de mon corps", "La tête porte les yeux, le nez, la bouche et les oreilles. Les bras et les mains nous aident à tenir des objets, tandis que les jambes permettent de marcher."] },
    [
      ["choice", "Avec quelle partie du corps Ama regarde-t-elle une image ?", ["les yeux", "les mains", "les genoux"], 0],
      ["choice", "Quelle partie du corps aide Bih à entendre une chanson ?", ["les oreilles", "les pieds", "les coudes"], 0],
      ["choice", "Quelle partie du corps sert à mâcher les aliments ?", ["les dents", "les doigts", "les cheveux"], 0],
      ["choice", "Avec quelle partie du corps peut-on saisir un crayon ?", ["la main", "le genou", "le dos"], 0],
      ["choice", "Quelle partie du corps permet de sentir le parfum d'une fleur ?", ["le nez", "l'épaule", "le pied"], 0],
      ["tf", "Les yeux nous aident à voir.", true, "La vue est le sens utilisé avec les yeux."],
      ["tf", "On utilise les oreilles pour goûter une mangue.", false, "La langue sert à goûter ; les oreilles servent à entendre."],
      ["tf", "Les jambes aident le corps à marcher.", true, "Les jambes nous portent quand nous marchons."],
      ["match", [["yeux", "voir"], ["oreilles", "entendre"], ["nez", "sentir"], ["mains", "tenir un objet"]], "Associe chaque partie du corps à son rôle."],
      ["dict", "genoux", "Écris le nom des articulations au milieu des jambes."]
    ]);

  add("fsc1b", "Les cinq sens", "👃", "Sciences", ["vue", "ouïe", "odorat"],
    { story: ["Ama regarde la couleur d'une mangue avec ses yeux.", "Elle écoute le chant d'un oiseau et sent le parfum d'une fleur.", "La vue, l'ouïe, l'odorat, le goût et le toucher nous renseignent sur ce qui nous entoure."] },
    [
      ["choice", "Quel sens Ama utilise-t-elle pour voir la couleur de la mangue ?", ["la vue", "le goût", "l'ouïe"], 0],
      ["choice", "Quel sens aide Bih à entendre un tambour ?", ["l'ouïe", "l'odorat", "le toucher"], 0],
      ["choice", "Avec quel sens reconnaît-on l'odeur d'une fleur ?", ["l'odorat", "la vue", "le goût"], 0],
      ["choice", "Quel sens permet de sentir qu'une pierre est lisse ?", ["le toucher", "l'ouïe", "l'odorat"], 0],
      ["choice", "Quel sens nous renseigne sur la saveur d'un fruit ?", ["le goût", "la vue", "l'ouïe"], 0],
      ["tf", "La peau participe au sens du toucher.", true, "On sent une texture en touchant avec la peau."],
      ["tf", "Le nez sert principalement à entendre les sons.", false, "Le nez sert à sentir les odeurs ; les oreilles entendent les sons."],
      ["tf", "La langue nous aide à goûter les aliments.", true, "Le goût permet de reconnaître la saveur des aliments."],
      ["match", [["yeux", "vue"], ["oreilles", "ouïe"], ["nez", "odorat"], ["langue", "goût"]], "Relie chaque organe au sens auquel il participe."],
      ["build", "toucher", "Écris le nom du sens utilisé quand on sent une surface avec la peau."]
    ]);

  add("fsc1c", "Le temps qu'il fait", "🌦️", "Sciences", ["soleil", "pluie", "nuage"],
    { video: [["☀️", "Le soleil éclaire la journée."], ["🌧️", "La pluie tombe des nuages."], ["🌬️", "Le vent fait bouger les feuilles et les drapeaux."]] },
    [
      ["choice", "Quel temps peut remplir les flaques d'eau ?", ["la pluie", "le vent", "le soleil"], 0],
      ["choice", "Quel objet protège de la pluie ?", ["un parapluie", "une règle", "un cahier ouvert"], 0],
      ["choice", "Que peut faire le vent aux feuilles d'un arbre ?", ["les faire bouger", "les transformer en pierre", "les faire disparaître"], 0],
      ["choice", "Quel temps apporte de la lumière pendant la journée ?", ["un ciel ensoleillé", "une nuit sans lune", "un sol sec"], 0],
      ["choice", "Quel instrument mesure la température de l'air ?", ["un thermomètre", "une balance", "une règle"], 0],
      ["tf", "Les nuages peuvent apporter de la pluie.", true, "La pluie tombe des nuages."],
      ["tf", "Le vent est une sorte de chaussure.", false, "Le vent est de l'air en mouvement."],
      ["tf", "Un parapluie peut aider à rester au sec sous la pluie.", true, "On peut s'abriter sous un parapluie quand il pleut."],
      ["match", [["pluie", "eau qui tombe des nuages"], ["vent", "air en mouvement"], ["soleil", "source de lumière du jour"], ["thermomètre", "instrument qui mesure la température"]], "Associe chaque mot de la météo à sa description."],
      ["missing", "nuage", 3, ["g", "a", "u"], "☁️", "Quelle lettre complète le mot qui peut apporter la pluie : nua___e ?"]
    ]);

  add("fsc2", "Les animaux", "🐾", "Sciences", ["animal", "habitat", "nourriture"],
    { card: ["Les besoins des animaux", "Les animaux ont besoin de nourriture, d'eau et d'un abri adapté. Ils vivent dans des habitats différents, comme une maison, une forêt ou un étang."] },
    [
      ["choice", "De quoi un animal a-t-il besoin pour vivre ?", ["d'eau et de nourriture", "de plastique et de métal", "de peinture et de craie"], 0],
      ["choice", "Où un poisson vit-il généralement ?", ["dans l'eau", "dans un arbre sec", "dans un tiroir"], 0],
      ["choice", "Quel animal peut être observé dans une basse-cour ?", ["une poule", "un lion", "une baleine"], 0],
      ["choice", "Comment appelle-t-on le lieu où vit un animal ?", ["son habitat", "son outil", "sa couleur"], 0],
      ["choice", "Quelle partie aide un oiseau à voler ?", ["ses ailes", "ses nageoires", "ses sabots"], 0],
      ["tf", "Un habitat est un lieu où un animal peut vivre.", true, "L'habitat fournit un endroit où l'animal vit."],
      ["tf", "Tous les animaux vivent dans la même maison.", false, "Les animaux occupent des habitats variés."],
      ["tf", "Un animal a besoin d'eau.", true, "L'eau fait partie des besoins des animaux."],
      ["match", [["poisson", "nage dans l'eau"], ["oiseau", "possède des ailes"], ["poule", "peut vivre dans une basse-cour"], ["habitat", "lieu de vie d'un animal"]], "Relie chaque animal ou notion à une caractéristique."],
      ["dict", "habitat", "Écris le mot qui désigne le lieu où vit un animal."]
    ]);

  add("fsc2b", "Animaux domestiques et sauvages", "🐕", "Sciences", ["domestique", "sauvage", "soin"],
    { story: ["La famille de Bih nourrit une chèvre domestique dans la cour.", "Pendant une promenade, la classe observe un oiseau sauvage dans un arbre.", "Les élèves regardent l'oiseau de loin et ne tentent pas de le capturer."] },
    [
      ["choice", "Quel animal la famille de Bih nourrit-elle dans la cour ?", ["une chèvre", "un crocodile", "un éléphant"], 0],
      ["choice", "Où la classe observe-t-elle l'oiseau sauvage ?", ["dans un arbre", "dans une marmite", "dans un cahier"], 0],
      ["choice", "Comment faut-il observer un animal sauvage ?", ["de loin, sans le déranger", "en le poursuivant", "en le touchant sans permission"], 0],
      ["choice", "Quel animal peut être domestique dans une ferme ?", ["une poule", "un lion", "un gorille"], 0],
      ["choice", "Qui donne de l'eau à la chèvre de l'histoire ?", ["la famille de Bih", "l'oiseau sauvage", "le conducteur du bus"], 0],
      ["tf", "La chèvre de l'histoire est soignée par la famille.", true, "Bih et sa famille s'occupent de la chèvre domestique."],
      ["tf", "La classe capture l'oiseau sauvage pour jouer avec lui.", false, "Les élèves l'observent de loin sans le capturer."],
      ["tf", "Un animal sauvage doit être approché sans prudence.", false, "Il faut garder ses distances et ne pas déranger l'animal."],
      ["match", [["chèvre domestique", "soignée par des personnes"], ["oiseau sauvage", "observé dans l'arbre"], ["habitat", "lieu où vit un animal"], ["distance", "espace gardé pour observer sans toucher"]], "Associe chaque expression au détail correspondant dans la leçon."],
      ["build", "sauvage", "Écris le contraire de « domestique » pour décrire l'oiseau."]
    ]);

  add("fsc2c", "L'hygiène du corps", "🧼", "Santé", ["hygiène", "savon", "propre"],
    { video: [["🧼", "Mouille les mains et utilise du savon."], ["🤲", "Frotte les paumes et entre les doigts."], ["🚿", "Rince les mains à l'eau propre puis sèche-les."]] },
    [
      ["choice", "Que faut-il utiliser avec l'eau pour laver les mains ?", ["du savon", "du sable", "de la peinture"], 0],
      ["choice", "Quand est-il utile de se laver les mains ?", ["avant de manger", "seulement le jour de la fête", "uniquement après avoir dormi"], 0],
      ["choice", "Quel objet sert à nettoyer les dents ?", ["une brosse à dents", "une cuillère", "une règle"], 0],
      ["choice", "Que faut-il faire après avoir frotté les mains avec du savon ?", ["les rincer à l'eau", "les couvrir de terre", "garder toute la mousse"], 0],
      ["choice", "Quelle habitude aide à garder le corps propre ?", ["se laver régulièrement", "porter les mêmes vêtements sales", "éviter l'eau toute la semaine"], 0],
      ["tf", "Le savon aide à nettoyer les mains.", true, "On frotte les mains avec du savon puis on les rince."],
      ["tf", "Il est préférable de partager sa brosse à dents avec toute la classe.", false, "Chaque personne doit utiliser sa propre brosse à dents."],
      ["tf", "On peut se rincer les mains après les avoir lavées au savon.", true, "Le rinçage enlève le savon et la saleté."],
      ["match", [["savon", "sert à laver les mains"], ["brosse à dents", "nettoie les dents"], ["eau propre", "sert au rinçage"], ["hygiène", "habitudes pour rester propre"]], "Relie chaque objet ou notion à son rôle dans l'hygiène."],
      ["missing", "propre", 3, ["p", "r", "e"], "🧼", "Quelle lettre complète le mot qui décrit des mains lavées : pro___re ?"]
    ]);

  add("fsc3", "Les plantes", "🌱", "Sciences", ["racine", "tige", "feuille"],
    { card: ["Les parties d'une plante", "Les racines prennent l'eau du sol. La tige soutient la plante, et les feuilles reçoivent la lumière dont beaucoup de plantes ont besoin pour pousser."] },
    [
      ["choice", "Quelle partie d'une plante prend l'eau dans le sol ?", ["la racine", "la fleur", "le fruit"], 0],
      ["choice", "Quelle partie soutient les feuilles ?", ["la tige", "la graine", "la racine seule"], 0],
      ["choice", "Quelle partie reçoit souvent la lumière du soleil ?", ["la feuille", "la racine", "le caillou"], 0],
      ["choice", "Que peut devenir une graine quand elle germe ?", ["une jeune plante", "un animal", "une pierre"], 0],
      ["choice", "De quoi une plante a-t-elle besoin pour bien pousser ?", ["d'eau et de lumière", "de plastique et de peinture", "de sable sec seulement"], 0],
      ["tf", "Les racines absorbent de l'eau dans le sol.", true, "L'eau du sol entre dans la plante par les racines."],
      ["tf", "Les feuilles poussent sous le sol à la place des racines.", false, "Les feuilles se trouvent généralement au-dessus du sol ; les racines sont dans le sol."],
      ["tf", "Une graine peut germer et donner une jeune plante.", true, "La germination est le début de la croissance d'une plante."],
      ["match", [["racine", "prend l'eau du sol"], ["tige", "soutient les parties de la plante"], ["feuille", "reçoit la lumière"], ["graine", "peut germer"]], "Associe chaque partie de la plante à son rôle."],
      ["dict", "racine", "Écris le nom de la partie qui prend l'eau dans le sol."]
    ]);

  add("fsc3b", "Une alimentation équilibrée", "🍲", "Santé", ["alimentation", "variée", "légumes"],
    { story: ["Au repas, Ama mange du riz, des légumes et un morceau de poisson.", "Sa famille choisit des aliments variés au lieu de ne manger qu'un seul aliment.", "Boire de l'eau et varier les repas contribuent à prendre soin de son corps."] },
    [
      ["choice", "Quel repas de l'histoire comprend plusieurs types d'aliments ?", ["riz, légumes et poisson", "seulement des bonbons", "seulement du sel"], 0],
      ["choice", "Quel aliment est un légume ?", ["les feuilles de légumes", "le savon", "le papier"], 0],
      ["choice", "Que peut faire une famille pour varier ses repas ?", ["choisir différents aliments", "manger seulement du sucre", "ne jamais boire d'eau"], 0],
      ["choice", "Quelle boisson est un bon choix pour étancher la soif ?", ["l'eau", "l'huile", "la peinture"], 0],
      ["choice", "Pourquoi manger des aliments variés ?", ["pour apporter différents éléments nutritifs", "pour ne manger qu'une seule chose", "pour remplacer le sommeil"], 0],
      ["tf", "Une alimentation variée peut comprendre des légumes.", true, "Les légumes font partie des différents aliments qu'on peut manger."],
      ["tf", "Manger uniquement des bonbons constitue un repas varié.", false, "Un repas varié comprend plusieurs types d'aliments."],
      ["tf", "Boire de l'eau aide à répondre à la soif.", true, "L'eau est une boisson qui aide à étancher la soif."],
      ["match", [["riz", "aliment de base du repas"], ["légumes", "aliments d'origine végétale"], ["poisson", "aliment d'origine animale"], ["eau", "boisson qui étanche la soif"]], "Relie chaque aliment à la catégorie ou au rôle indiqué."],
      ["missing", "légumes", 2, ["g", "a", "u"], "🥬", "Quelle lettre complète le nom des aliments végétaux : lé___umes ?"]
    ]);

  add("fsc3c", "Le jour et la nuit", "🌗", "Sciences", ["jour", "nuit", "Terre"],
    { video: [["☀️", "La lumière du Soleil éclaire une partie de la Terre."], ["🌍", "La Terre tourne sur elle-même."], ["🌙", "Quand notre région est tournée à l'opposé du Soleil, c'est la nuit."]] },
    [
      ["choice", "Quelle source éclaire la Terre pendant la journée ?", ["le Soleil", "la Lune", "une lampe de poche éloignée"], 0],
      ["choice", "Qu'est-ce qui tourne sur elle-même et contribue à l'alternance du jour et de la nuit ?", ["la Terre", "une montagne", "un nuage"], 0],
      ["choice", "Que voit-on souvent dans le ciel nocturne ?", ["la Lune", "le Soleil de midi", "un arc-en-ciel permanent"], 0],
      ["choice", "Quand fait-il jour dans une région tournée vers le Soleil ?", ["quand elle reçoit sa lumière", "quand la région est dans l'obscurité", "quand il n'y a plus de Terre"], 0],
      ["choice", "Quel moment vient généralement après le coucher du Soleil ?", ["la nuit", "le midi", "le matin précédent"], 0],
      ["tf", "La Terre tourne sur elle-même.", true, "La rotation de la Terre accompagne l'alternance du jour et de la nuit."],
      ["tf", "La Lune est la source principale de lumière du jour.", false, "Le Soleil éclaire la Terre pendant la journée."],
      ["tf", "La nuit, la région qui nous entoure reçoit moins directement la lumière du Soleil.", true, "La partie tournée à l'opposé du Soleil est dans la nuit."],
      ["match", [["Soleil", "éclaire la Terre"], ["Terre", "tourne sur elle-même"], ["jour", "période éclairée par le Soleil"], ["nuit", "période où notre région est moins éclairée"]], "Associe chaque mot à sa place dans l'alternance du jour et de la nuit."],
      ["build", "Terre", "Écris le nom de la planète qui tourne sur elle-même."]
    ]);

  add("fsc4", "L'eau", "💧", "Sciences", ["solide", "liquide", "vapeur"],
    { card: ["Les états de l'eau", "L'eau peut être solide comme la glace, liquide comme l'eau d'un verre, ou gazeuse sous forme de vapeur. La chaleur peut faire fondre la glace ou évaporer de l'eau."] },
    [
      ["choice", "Quel état de l'eau trouve-t-on dans un glaçon ?", ["solide", "liquide", "gazeux"], 0],
      ["choice", "Quel état de l'eau boit-on dans un verre ?", ["liquide", "solide", "pierreux"], 0],
      ["choice", "Que devient la glace quand elle fond ?", ["de l'eau liquide", "du sable", "du métal"], 0],
      ["choice", "Quelle forme d'eau peut s'échapper d'une casserole chaude ?", ["la vapeur", "la glace", "le bois"], 0],
      ["choice", "Que faut-il faire pour transformer un glaçon en eau liquide ?", ["le réchauffer", "le refroidir davantage", "le couvrir de papier"], 0],
      ["tf", "La glace est de l'eau à l'état solide.", true, "Un glaçon est de l'eau solide."],
      ["tf", "La vapeur d'eau est un morceau de glace.", false, "La vapeur est de l'eau sous forme gazeuse."],
      ["tf", "L'eau liquide peut geler et devenir solide.", true, "En refroidissant suffisamment, l'eau liquide forme de la glace."],
      ["match", [["glace", "état solide"], ["eau d'un verre", "état liquide"], ["vapeur", "état gazeux"], ["fonte", "passage du solide au liquide"]], "Associe chaque exemple au bon état ou changement de l'eau."],
      ["dict", "liquide", "Écris l'état de l'eau que l'on boit dans un verre."]
    ]);

  add("fsc4b", "Le cycle de vie des animaux", "🦋", "Sciences", ["œuf", "larve", "adulte"],
    { story: ["Un papillon commence sa vie dans un œuf.", "Une chenille sort de l'œuf, grandit, puis devient une chrysalide.", "Un papillon adulte sort ensuite de la chrysalide et peut pondre des œufs."] },
    [
      ["choice", "Quelle étape vient d'abord dans le cycle du papillon ?", ["l'œuf", "la chrysalide", "le papillon adulte"], 0],
      ["choice", "Quel animal sort de l'œuf du papillon dans l'histoire ?", ["une chenille", "un têtard", "un poussin"], 0],
      ["choice", "Quelle étape suit la chenille dans ce cycle ?", ["la chrysalide", "l'œuf", "le papillon adulte directement"], 0],
      ["choice", "Quel animal sort de la chrysalide ?", ["le papillon adulte", "la poule", "la grenouille"], 0],
      ["choice", "Comment appelle-t-on les changements qui se répètent dans la vie d'un animal ?", ["son cycle de vie", "sa couleur", "son habitat"], 0],
      ["tf", "Dans le cycle présenté, la chenille vient après l'œuf.", true, "La chenille sort de l'œuf."],
      ["tf", "Le papillon adulte devient une chenille avant de pondre.", false, "La chenille précède la chrysalide et le papillon adulte."],
      ["tf", "Un cycle de vie comprend les étapes de la vie d'un animal.", true, "Il décrit les changements depuis le début de la vie."],
      ["match", [["œuf", "première étape du cycle présenté"], ["chenille", "sort de l'œuf"], ["chrysalide", "étape après la chenille"], ["papillon adulte", "sort de la chrysalide"]], "Associe chaque étape à sa place dans le cycle du papillon."],
      ["missing", "chenille", 3, ["n", "i", "l"], "🐛", "Quelle lettre complète le nom de la larve du papillon : che___ille ?"]
    ]);

  add("fsc4c", "L'électricité simple", "🔋", "Sciences", ["pile", "fil", "circuit"],
    { video: [["🔋", "Une pile peut fournir de l'énergie électrique à un petit montage."], ["💡", "Des fils relient la pile à une ampoule."], ["🔌", "Un circuit fermé permet au courant de circuler : l'ampoule peut s'allumer."]] },
    [
      ["choice", "Quel objet peut fournir de l'énergie à un petit circuit ?", ["une pile", "un cahier", "une cuillère"], 0],
      ["choice", "Quel élément relie les composants d'un circuit simple ?", ["un fil conducteur", "une feuille de papier", "un morceau de tissu"], 0],
      ["choice", "Que faut-il pour que l'ampoule d'un circuit simple s'allume ?", ["un circuit fermé", "un fil coupé", "une pile absente"], 0],
      ["choice", "Quel composant produit de la lumière dans ce montage ?", ["l'ampoule", "le fil", "le support en bois"], 0],
      ["choice", "Que doit-on faire si un appareil électrique est abîmé ?", ["prévenir un adulte", "le réparer sans aide", "mettre les doigts dans la prise"], 0],
      ["tf", "Une pile peut alimenter un petit circuit électrique.", true, "La pile fournit l'énergie nécessaire au montage."],
      ["tf", "Un circuit avec une coupure permet toujours à l'ampoule de s'allumer.", false, "Un circuit ouvert ou coupé empêche le courant de circuler."],
      ["tf", "Il faut demander l'aide d'un adulte pour un appareil abîmé.", true, "Un enfant ne doit pas manipuler un appareil dangereux seul."],
      ["match", [["pile", "source d'énergie du montage"], ["fil", "relie les composants"], ["ampoule", "produit de la lumière"], ["circuit fermé", "permet au courant de circuler"]], "Relie chaque élément à son rôle dans le circuit."],
      ["dict", "ampoule", "Écris le nom de la pièce qui produit la lumière dans le circuit."]
    ]);

  add("fsc5", "Hygiène et prévention du paludisme", "🦟", "Santé", ["moustiquaire", "eau stagnante", "prévention"],
    { card: ["Réduire les risques de piqûres", "Une moustiquaire bien utilisée peut aider à éviter les piqûres pendant le sommeil. Vider les récipients où l'eau stagne peut réduire les endroits où les moustiques se reproduisent ; en cas de fièvre, il faut prévenir un adulte et demander conseil à un professionnel de santé."] },
    [
      ["choice", "Qu'est-ce qui peut aider à éviter les piqûres pendant le sommeil ?", ["une moustiquaire", "un panier vide", "un cahier fermé"], 0],
      ["choice", "Quel récipient faut-il vider pour éviter l'eau stagnante ?", ["un seau rempli d'eau immobile", "une bouteille fermée", "un panier sec"], 0],
      ["choice", "Que doit faire un enfant qui a de la fièvre ?", ["prévenir un adulte et demander un avis médical", "garder le problème secret", "prendre seul un médicament trouvé"], 0],
      ["choice", "À qui peut-on demander conseil sur la prévention du paludisme ?", ["à un professionnel de santé", "à un vendeur de jouets", "à un conducteur de taxi"], 0],
      ["choice", "Quelle action aide à réduire les lieux où les moustiques peuvent se reproduire ?", ["vider l'eau qui stagne", "laisser des récipients pleins dehors", "boucher les fenêtres avec du papier"], 0],
      ["tf", "Une moustiquaire peut servir de barrière contre les piqûres pendant la nuit.", true, "Elle protège une personne endormie lorsqu'elle est bien utilisée."],
      ["tf", "L'eau stagnante autour de la maison éloigne toujours les moustiques.", false, "Vider l'eau stagnante peut réduire des lieux où les moustiques se reproduisent."],
      ["tf", "Un enfant malade doit en parler à un adulte.", true, "Un adulte peut l'aider à obtenir des conseils de santé."],
      ["match", [["moustiquaire", "barrière utilisée pendant le sommeil"], ["eau stagnante", "eau qui ne s'écoule pas"], ["fièvre", "symptôme à signaler à un adulte"], ["professionnel de santé", "personne à qui demander conseil médical"]], "Associe chaque terme à une mesure ou à une aide de prévention."],
      ["missing", "moustique", 3, ["s", "i", "u"], "🦟", "Quelle lettre complète le nom de l'insecte qui peut transmettre le paludisme : mou___tique ?"]
    ]);

  add("fsc5b", "La digestion et la respiration", "🫁", "Sciences", ["digestion", "estomac", "poumons"],
    { story: ["Ama mâche un morceau de plantain avant de l'avaler.", "La nourriture passe dans l'estomac, où elle est transformée pendant la digestion.", "Les poumons permettent de respirer : l'air entre puis ressort du corps."] },
    [
      ["choice", "Quel organe aide à digérer les aliments après qu'on les a avalés ?", ["l'estomac", "les poumons", "les oreilles"], 0],
      ["choice", "Quels organes aident Ama à respirer ?", ["les poumons", "l'estomac", "les genoux"], 0],
      ["choice", "Quelle action commence la digestion dans la bouche ?", ["mâcher les aliments", "cligner des yeux", "bouger les bras"], 0],
      ["choice", "Qu'est-ce qui entre dans le corps quand on inspire ?", ["de l'air", "du plantain", "du sable"], 0],
      ["choice", "Quel système transforme les aliments pour que le corps puisse les utiliser ?", ["le système digestif", "le système scolaire", "le système solaire"], 0],
      ["tf", "Les poumons participent à la respiration.", true, "Les poumons aident l'air à entrer et à sortir du corps."],
      ["tf", "Les poumons digèrent le plantain avalé.", false, "L'estomac participe à la digestion ; les poumons servent à respirer."],
      ["tf", "Mâcher les aliments fait partie de la digestion.", true, "La digestion commence dans la bouche quand on mâche."],
      ["match", [["dents", "mâchent les aliments"], ["estomac", "aide à digérer"], ["poumons", "aident à respirer"], ["air", "entre et sort pendant la respiration"]], "Associe chaque organe ou élément à sa fonction."],
      ["dict", "poumons", "Écris le nom des organes qui aident à respirer."]
    ]);

  add("fsc5c", "Protéger l'environnement", "🌍", "Sciences", ["environnement", "déchet", "réutiliser"],
    { video: [["🗑️", "Dépose les déchets dans une poubelle adaptée."], ["♻️", "Réutilise un objet propre quand il peut encore servir."], ["🌱", "Garde propres les chemins et les espaces partagés."]] },
    [
      ["choice", "Où Bih doit-il mettre un emballage vide ?", ["dans une poubelle adaptée", "dans la cour de classe", "dans un ruisseau"], 0],
      ["choice", "Quelle action peut réduire les déchets à l'école ?", ["réutiliser un contenant propre", "jeter tous les livres", "laisser des restes sur le chemin"], 0],
      ["choice", "Que signifie « réutiliser » un objet ?", ["s'en servir de nouveau", "le casser immédiatement", "le cacher dans la rue"], 0],
      ["choice", "Quel espace la classe peut-elle aider à garder propre ?", ["le chemin partagé par les élèves", "la rivière où l'on jette les déchets", "le sol d'une salle laissée sale"], 0],
      ["choice", "Que peut faire une classe après une activité de jardinage ?", ["ramasser les déchets sans danger", "verser les déchets dans un drain", "arracher toutes les jeunes plantes"], 0],
      ["tf", "Mettre les déchets dans une poubelle aide à garder les lieux propres.", true, "La poubelle évite de laisser les déchets par terre."],
      ["tf", "Jeter des déchets dans un ruisseau protège la nature.", false, "Les déchets peuvent salir l'eau et les espaces naturels."],
      ["tf", "On peut réutiliser certains objets propres qui servent encore.", true, "Réutiliser un objet peut réduire la quantité de déchets."],
      ["match", [["déchet", "objet dont on se débarrasse"], ["réutiliser", "se servir encore d'un objet"], ["environnement", "milieu qui nous entoure"], ["poubelle", "récipient pour les déchets"]], "Relie chaque mot au geste ou au lieu qui lui correspond."],
      ["build", "environnement", "Écris le mot qui désigne le milieu naturel et les lieux qui nous entourent."]
    ]);

  add("fsc6", "L'énergie", "⚡", "Sciences", ["énergie", "lumière", "mouvement"],
    { card: ["L'énergie fait fonctionner et bouger", "L'énergie permet à des objets de produire de la lumière, de la chaleur ou du mouvement. Le Soleil nous apporte lumière et chaleur, et une pile peut fournir de l'énergie à une lampe."] },
    [
      ["choice", "Quelle source naturelle nous apporte lumière et chaleur pendant la journée ?", ["le Soleil", "une règle", "un cahier"], 0],
      ["choice", "Quelle source peut alimenter une petite lampe de poche ?", ["une pile", "un morceau de tissu", "une pierre sèche"], 0],
      ["choice", "Quel effet de l'énergie voit-on quand une ampoule s'allume ?", ["de la lumière", "de la pluie", "du papier"], 0],
      ["choice", "Quel exemple montre un objet en mouvement ?", ["un vélo qui roule", "un livre fermé", "un mur immobile"], 0],
      ["choice", "Quelle machine simple peut aider à déplacer une charge ?", ["un levier", "une feuille", "un coussin"], 0],
      ["tf", "Le Soleil fournit de la lumière et de la chaleur.", true, "Le Soleil est une source de lumière et de chaleur."],
      ["tf", "Une pile est faite pour fournir de la nourriture à une lampe.", false, "Une pile peut fournir de l'énergie électrique à une lampe."],
      ["tf", "Un levier peut aider à déplacer ou soulever une charge.", true, "Le levier est une machine simple qui facilite certaines tâches."],
      ["match", [["Soleil", "source de lumière et de chaleur"], ["pile", "peut alimenter une lampe"], ["ampoule", "produit de la lumière"], ["levier", "machine simple pour déplacer une charge"]], "Associe chaque source ou objet à son rôle énergétique."],
      ["dict", "énergie", "Écris le mot qui permet à un objet de fonctionner ou de bouger."]
    ]);

  add("fsc6b", "Le système solaire", "🪐", "Sciences", ["Soleil", "Terre", "orbite"],
    { story: ["Le Soleil est au centre de notre système solaire.", "La Terre est une planète qui se déplace autour du Soleil.", "La Lune se déplace autour de la Terre, tandis que les autres planètes suivent leur propre orbite."] },
    [
      ["choice", "Quel astre se trouve au centre de notre système solaire ?", ["le Soleil", "la Lune", "la Terre"], 0],
      ["choice", "Sur quelle planète les humains vivent-ils ?", ["la Terre", "Mars", "la Lune"], 0],
      ["choice", "Autour de quel astre la Terre se déplace-t-elle ?", ["le Soleil", "la Lune", "une étoile filante"], 0],
      ["choice", "Quel astre naturel se déplace autour de la Terre ?", ["la Lune", "le Soleil", "Mars"], 0],
      ["choice", "Que désigne une orbite ?", ["le chemin suivi par un astre autour d'un autre", "une route entre deux villes", "une ligne dessinée sur un cahier"], 0],
      ["tf", "La Terre est une planète du système solaire.", true, "La Terre fait partie des planètes qui tournent autour du Soleil."],
      ["tf", "La Terre est au centre du système solaire et le Soleil tourne autour d'elle.", false, "Le Soleil est au centre de notre système solaire."],
      ["tf", "La Lune se déplace autour de la Terre.", true, "La Lune est le satellite naturel de la Terre."],
      ["match", [["Soleil", "étoile au centre du système"], ["Terre", "planète où nous vivons"], ["Lune", "astre qui tourne autour de la Terre"], ["orbite", "chemin suivi par un astre"]], "Relie chaque mot à sa place dans le système solaire."],
      ["build", "planète", "Écris le nom du type d'astre auquel appartient la Terre."]
    ]);

  add("fsc6c", "La reproduction des plantes", "🌼", "Sciences", ["fleur", "pollen", "graine"],
    { video: [["🌼", "Chez beaucoup de plantes à fleurs, le pollen participe à la reproduction."], ["🐝", "Un insecte peut transporter du pollen d'une fleur à une autre."], ["🌱", "Une graine peut germer et donner une jeune plante."]] },
    [
      ["choice", "Quelle partie de nombreuses plantes participe à la reproduction ?", ["la fleur", "la pierre", "le cahier"], 0],
      ["choice", "Quel élément peut être transporté d'une fleur à une autre ?", ["le pollen", "le sable", "le bois"], 0],
      ["choice", "Quelle partie de la fleur peut contenir les graines ?", ["le fruit", "le pollen", "la racine"], 0],
      ["choice", "Quel animal peut transporter du pollen entre des fleurs ?", ["une abeille", "un poisson", "un lézard sous l'eau"], 0],
      ["choice", "Quel mot désigne le début de la croissance d'une graine ?", ["germination", "digestion", "respiration"], 0],
      ["tf", "La reproduction de nombreuses plantes à fleurs fait intervenir le pollen.", true, "Le pollen participe à la reproduction de nombreuses plantes à fleurs."],
      ["tf", "Le pollen est une racine qui pousse dans le sol.", false, "Le pollen est produit par les fleurs ; les racines poussent dans le sol."],
      ["tf", "Un insecte peut transporter du pollen entre des fleurs.", true, "Certains insectes transportent du pollen en visitant les fleurs."],
      ["match", [["fleur", "partie de la plante liée à la reproduction"], ["pollen", "peut être transporté entre fleurs"], ["graine", "peut germer"], ["abeille", "insecte qui visite des fleurs"]], "Associe chaque élément à son rôle dans la reproduction des plantes."],
      ["missing", "graine", 3, ["i", "a", "e"], "🌱", "Quelle lettre complète ce qui peut germer : gra___ne ?"]
    ]);

  add("fh1", "Ma famille et mon école", "🏫", "Vie sociale", ["famille", "école", "classe"],
    { card: ["Des personnes et des lieux importants", "La famille prend soin de ses membres, et l'école est un lieu où les élèves apprennent avec leurs enseignants. À la maison comme en classe, chacun peut aider les autres."] },
    [
      ["choice", "Où Ama apprend-elle avec ses camarades ?", ["à l'école", "au marché", "dans un garage"], 0],
      ["choice", "Quel groupe peut prendre soin d'un enfant à la maison ?", ["sa famille", "les passagers d'un taxi", "les visiteurs d'un magasin"], 0],
      ["choice", "Qui aide les élèves à apprendre en classe ?", ["l'enseignant", "le vendeur", "le conducteur"], 0],
      ["choice", "Où les élèves suivent-ils une leçon avec leur enseignant ?", ["dans une salle de classe", "dans une rivière", "sur un terrain vide"], 0],
      ["choice", "Comment un enfant peut-il aider à la maison ?", ["ranger ses affaires", "casser les objets partagés", "laisser tous les déchets au sol"], 0],
      ["tf", "Une école est un lieu où les élèves peuvent apprendre.", true, "Les élèves y étudient avec leurs enseignants."],
      ["tf", "Une salle de classe est une personne de la famille.", false, "La salle de classe est un lieu ; la famille est un groupe de personnes."],
      ["tf", "Les membres d'une famille peuvent s'entraider.", true, "L'entraide aide les personnes qui vivent ensemble."],
      ["match", [["enseignant", "aide les élèves à apprendre"], ["camarade", "apprend avec toi"], ["famille", "personnes qui peuvent prendre soin les unes des autres"], ["salle de classe", "lieu où se déroule une leçon"]], "Associe chaque personne ou lieu à sa description."],
      ["dict", "famille", "Écris le nom du groupe de personnes qui prend soin les unes des autres à la maison."]
    ]);

  add("fh1b", "Les règles de vie", "🤝", "Vie sociale", ["règle", "respect", "responsabilité"],
    { story: ["À la maison, Bih range ses livres après avoir terminé ses devoirs.", "À l'école, Ama écoute lorsqu'un camarade prend la parole.", "Les règles de vie aident chacun à apprendre et à rester en sécurité."] },
    [
      ["choice", "Quelle action respecte une règle de classe ?", ["écouter quand quelqu'un parle", "crier pendant chaque réponse", "pousser ses camarades dans la file"], 0],
      ["choice", "Que fait Bih de ses livres après ses devoirs ?", ["il les range", "il les laisse sous la pluie", "il déchire leurs pages"], 0],
      ["choice", "Pourquoi une classe adopte-t-elle des règles ?", ["pour apprendre et rester en sécurité", "pour empêcher tout apprentissage", "pour cacher le matériel"], 0],
      ["choice", "Quelle action montre du respect à la maison ?", ["attendre son tour pour parler", "prendre tous les objets partagés", "ignorer une consigne de sécurité"], 0],
      ["choice", "Que signifie une responsabilité ?", ["une tâche dont on doit prendre soin", "un jeu auquel on ne participe jamais", "un lieu où l'on range les chaussures"], 0],
      ["tf", "Prendre son tour permet à chacun de parler et d'écouter.", true, "Les personnes peuvent participer sans se couper la parole."],
      ["tf", "Une règle de sécurité demande aux élèves de pousser les autres.", false, "Une règle de sécurité demande de faire attention aux autres."],
      ["tf", "Ranger ses livres après les devoirs peut être une responsabilité.", true, "Bih prend soin de ses affaires en les rangeant."],
      ["match", [["règle", "guide convenu pour le comportement"], ["respect", "traiter les autres avec considération"], ["responsabilité", "tâche dont on prend soin"], ["prendre son tour", "partager une activité équitablement"]], "Relie chaque mot de la vie collective à son sens."],
      ["build", "respect", "Écris le mot qui signifie traiter les autres avec considération."]
    ]);

  add("fh1c", "Mes besoins", "🏠", "Vie sociale", ["besoin", "nourriture", "abri"],
    { video: [["🍲", "La nourriture aide le corps à grandir et à fonctionner."], ["👕", "Les vêtements couvrent et protègent le corps."], ["🏠", "Un abri offre un lieu où vivre à l'écart du danger et des intempéries."]] },
    [
      ["choice", "Quel élément est un besoin essentiel pour le corps ?", ["de la nourriture", "un jouet neuf", "une affiche colorée"], 0],
      ["choice", "Quel besoin l'eau potable aide-t-elle à satisfaire ?", ["boire", "regarder la télévision", "décorer une porte"], 0],
      ["choice", "À quoi servent les vêtements ?", ["à couvrir et protéger le corps", "à remplacer l'eau", "à construire une route"], 0],
      ["choice", "Quel lieu peut protéger une famille de la pluie ?", ["un abri", "un ballon", "un crayon"], 0],
      ["choice", "Quel exemple est un désir plutôt qu'un besoin essentiel ?", ["un jouet supplémentaire", "de l'eau potable", "un abri contre la pluie"], 0],
      ["tf", "L'eau potable est nécessaire pour boire.", true, "Le corps a besoin d'eau propre à boire."],
      ["tf", "Une affiche colorée est aussi essentielle que la nourriture pour vivre.", false, "Une affiche est un objet agréable, mais la nourriture est un besoin essentiel."],
      ["tf", "Un abri peut protéger une personne des intempéries.", true, "Un abri offre une protection contre la pluie et d'autres conditions météorologiques."],
      ["match", [["nourriture", "aide à nourrir le corps"], ["vêtements", "couvrent et protègent le corps"], ["eau potable", "sert à boire"], ["abri", "protège des intempéries"]], "Associe chaque besoin à l'aide qu'il apporte."],
      ["missing", "besoin", 2, ["s", "o", "i"], "🏠", "Quelle lettre complète ce qui est nécessaire : be___oin ?"]
    ]);

  add("fh2", "Mon quartier", "🏘️", "Géographie", ["quartier", "voisin", "service"],
    { card: ["Les lieux autour de chez moi", "Un quartier est une partie d'une ville ou d'une localité. On peut y trouver des maisons, des boutiques, une école et des voisins qui partagent certains lieux."] },
    [
      ["choice", "Comment appelle-t-on une partie d'une ville où des personnes vivent ?", ["un quartier", "une planète", "un océan"], 0],
      ["choice", "Qui est un voisin ?", ["une personne qui habite près de chez toi", "un animal dans la forêt", "un vendeur dans un autre pays"], 0],
      ["choice", "Quel lieu peut se trouver dans un quartier ?", ["une école", "un volcan sous-marin", "un vaisseau spatial"], 0],
      ["choice", "Où peut-on acheter des produits près de chez soi ?", ["dans une boutique", "dans une salle de classe vide", "dans un nuage"], 0],
      ["choice", "Quel comportement contribue à garder un lieu partagé propre ?", ["mettre les déchets dans une poubelle", "les jeter sur le chemin", "les laisser devant la porte d'un voisin"], 0],
      ["tf", "Un quartier peut comprendre des maisons et des boutiques.", true, "Ce sont des lieux que l'on peut trouver près de chez soi."],
      ["tf", "Un voisin est toujours une personne qui habite dans un autre pays.", false, "Un voisin habite près de chez toi."],
      ["tf", "Les habitants peuvent contribuer à garder propres les espaces partagés.", true, "Chacun peut prendre soin des lieux communs."],
      ["match", [["quartier", "partie d'une ville ou d'une localité"], ["voisin", "personne qui habite près de toi"], ["boutique", "lieu où l'on achète des produits"], ["école", "lieu où les élèves apprennent"]], "Relie chaque lieu ou personne à sa définition."],
      ["dict", "quartier", "Écris le mot qui désigne la partie de la localité où tu habites."]
    ]);

  add("fh2b", "Les moyens de transport", "🚌", "Géographie", ["transport", "route", "voyage"],
    { story: ["Ama se rend à l'école à pied avec son frère.", "Pour aller dans une ville éloignée, leur tante prend un bus sur la route.", "Les moyens de transport aident les personnes à se déplacer d'un lieu à un autre."] },
    [
      ["choice", "Comment Ama se rend-elle à l'école dans l'histoire ?", ["à pied", "en bateau", "en avion"], 0],
      ["choice", "Quel moyen de transport la tante prend-elle pour aller loin ?", ["un bus", "un vélo immobile", "une brouette de jardin"], 0],
      ["choice", "Où un taxi roule-t-il généralement ?", ["sur une route", "sur un toit", "sous une table"], 0],
      ["choice", "Quel véhicule transporte des passagers sur une voie ferrée ?", ["un train", "un canoë", "un tracteur de jardin"], 0],
      ["choice", "Quel moyen convient pour traverser une rivière quand un service est disponible ?", ["un bateau", "une chaise", "un cahier"], 0],
      ["tf", "Un bus peut transporter plusieurs passagers.", true, "Un bus est un véhicule destiné au transport de passagers."],
      ["tf", "Un vélo se déplace en volant dans le ciel.", false, "Un vélo roule sur le sol grâce à ses roues."],
      ["tf", "Marcher est aussi un moyen de se déplacer.", true, "On peut se déplacer à pied."],
      ["match", [["bus", "véhicule pour plusieurs passagers"], ["vélo", "transport à deux roues pédalé"], ["train", "véhicule sur une voie ferrée"], ["bateau", "transport qui se déplace sur l'eau"]], "Associe chaque moyen de transport à son milieu ou à son usage."],
      ["build", "transport", "Écris le mot qui désigne l'action de déplacer des personnes ou des objets."]
    ]);

  add("fh2c", "Les fêtes au Cameroun", "🎉", "Vie sociale", ["fête", "célébration", "communauté"],
    { video: [["🎶", "Une communauté peut célébrer une occasion avec de la musique."], ["🍲", "Les familles peuvent préparer et partager des plats."], ["🤝", "Une fête rassemble des personnes qui se rencontrent et échangent."]] },
    [
      ["choice", "Quelle activité peut faire partie d'une fête communautaire ?", ["partager un repas", "casser les chaises", "cacher tous les instruments"], 0],
      ["choice", "Que peuvent faire des personnes lors d'une célébration ?", ["écouter de la musique", "jeter des déchets dans l'eau", "rester sans communiquer"], 0],
      ["choice", "Qui peut participer à une fête locale ?", ["des membres de la communauté", "seulement des objets", "uniquement des animaux sauvages"], 0],
      ["choice", "Que signifie célébrer une occasion ?", ["marquer un événement ensemble", "effacer toutes les histoires", "fermer chaque maison"], 0],
      ["choice", "Quelle action aide les invités à bien partager une fête ?", ["accueillir les personnes avec respect", "pousser les personnes dans la file", "refuser toute aide"], 0],
      ["tf", "Une fête peut rassembler des membres d'une communauté.", true, "Les personnes peuvent se réunir pour célébrer une occasion."],
      ["tf", "Toutes les communautés célèbrent toujours de la même façon.", false, "Les traditions et les célébrations peuvent varier selon les communautés."],
      ["tf", "Partager un repas peut faire partie d'une célébration.", true, "Des familles peuvent préparer et partager des plats pendant une fête."],
      ["match", [["musique", "son que l'on peut écouter pendant une fête"], ["repas partagé", "plats préparés pour plusieurs personnes"], ["communauté", "groupe de personnes vivant ensemble"], ["célébration", "moment qui marque une occasion"]], "Relie chaque mot à son rôle dans une fête communautaire."],
      ["missing", "fête", 2, ["t", "a", "e"], "🎉", "Quelle lettre complète un moment de célébration : fê___e ?"]
    ]);

  add("fh3", "Les métiers", "🧑🏾‍🔧", "Vie sociale", ["métier", "médecin", "agriculteur"],
    { card: ["Des métiers et des services", "Un métier est une activité exercée par une personne. Les médecins soignent des personnes, les enseignants font apprendre et les agriculteurs cultivent des produits."] },
    [
      ["choice", "Qui soigne les personnes malades ?", ["un médecin", "un menuisier", "un conducteur"], 0],
      ["choice", "Qui aide les élèves à apprendre à l'école ?", ["un enseignant", "un vendeur", "un pêcheur"], 0],
      ["choice", "Qui cultive des plantes pour produire des aliments ?", ["un agriculteur", "un pilote", "un facteur"], 0],
      ["choice", "Qui peut réparer une table en bois ?", ["un menuisier", "un médecin", "un enseignant"], 0],
      ["choice", "Qui conduit un bus pour transporter des passagers ?", ["un conducteur", "un agriculteur", "un infirmier"], 0],
      ["tf", "Un agriculteur peut cultiver des plantes.", true, "Cultiver des produits est une activité agricole."],
      ["tf", "Un enseignant soigne les dents pendant une consultation.", false, "Un dentiste soigne les dents ; un enseignant aide les élèves à apprendre."],
      ["tf", "Un conducteur peut transporter des passagers.", true, "Le conducteur conduit un véhicule pour déplacer des personnes."],
      ["match", [["médecin", "soigne des personnes"], ["enseignant", "aide à apprendre"], ["agriculteur", "cultive des plantes"], ["menuisier", "travaille le bois"]], "Associe chaque métier à une activité."],
      ["dict", "agriculteur", "Écris le nom du métier d'une personne qui cultive des plantes."]
    ]);

  add("fh3b", "S'orienter : les points cardinaux", "🧭", "Géographie", ["nord", "sud", "est"],
    { story: ["Ama place une carte devant elle et repère le nord en haut.", "L'est est à droite de la carte et l'ouest à gauche.", "Le sud se trouve en bas, à l'opposé du nord."] },
    [
      ["choice", "Sur la carte de l'histoire, quel point se trouve en haut ?", ["le nord", "le sud", "l'ouest"], 0],
      ["choice", "Quel point cardinal se trouve à droite de la carte ?", ["l'est", "l'ouest", "le sud"], 0],
      ["choice", "Quel point est à l'opposé du nord ?", ["le sud", "l'est", "l'ouest"], 0],
      ["choice", "Quel outil aide à repérer les directions ?", ["une boussole", "une balance", "un thermomètre"], 0],
      ["choice", "Si Bih regarde vers le nord, quelle direction se trouve derrière lui ?", ["le sud", "l'est", "l'ouest"], 0],
      ["tf", "L'est se trouve à droite du nord sur une carte orientée comme dans l'histoire.", true, "Sur cette carte, le nord est en haut et l'est à droite."],
      ["tf", "Le sud se trouve à l'opposé de l'est.", false, "Le sud est à l'opposé du nord ; l'ouest est à l'opposé de l'est."],
      ["tf", "Une boussole peut aider à s'orienter.", true, "Elle indique une direction qui aide à lire les points cardinaux."],
      ["match", [["nord", "en haut de la carte de l'histoire"], ["sud", "en bas de la carte"], ["est", "à droite"], ["ouest", "à gauche"]], "Associe chaque point cardinal à sa position sur la carte."],
      ["build", "boussole", "Écris le nom de l'instrument qui aide à repérer une direction."]
    ]);

  add("fh3c", "La sécurité routière", "🚦", "Sécurité", ["route", "piéton", "passage"],
    { video: [["🚶", "Arrête-toi avant de traverser la route."], ["👀", "Regarde attentivement dans les deux directions."], ["🚦", "Traverse au passage sûr quand la voie est dégagée."]] },
    [
      ["choice", "Que doit faire un piéton avant de traverser ?", ["s'arrêter et regarder", "courir sans regarder", "jouer au milieu de la route"], 0],
      ["choice", "Où faut-il traverser quand un passage sûr est disponible ?", ["au passage pour piétons", "entre des véhicules en mouvement", "derrière un bus qui recule"], 0],
      ["choice", "Que faut-il regarder avant de traverser une route ?", ["les deux directions", "seulement ses chaussures", "le ciel sans vérifier la route"], 0],
      ["choice", "Comment marcher près d'une route très fréquentée ?", ["avec attention et loin des véhicules", "en jouant au bord de la chaussée", "en courant les yeux fermés"], 0],
      ["choice", "Que doit faire un enfant qui ne sait pas si la route est sûre ?", ["demander l'aide d'un adulte", "traverser en courant", "suivre un véhicule"], 0],
      ["tf", "Un piéton doit regarder avant de traverser.", true, "Regarder permet de vérifier que la voie est dégagée."],
      ["tf", "Il est prudent de courir derrière un bus qui recule.", false, "Il faut rester à distance des véhicules et demander l'aide d'un adulte."],
      ["tf", "Un passage pour piétons peut aider à traverser à un endroit prévu.", true, "Il indique un lieu destiné à la traversée des piétons."],
      ["match", [["piéton", "personne qui se déplace à pied"], ["passage pour piétons", "lieu prévu pour traverser"], ["trottoir", "espace de marche au bord de la route"], ["regarder", "vérifier la circulation avant de traverser"]], "Associe chaque mot de la route à son usage sûr."],
      ["missing", "trottoir", 3, ["t", "o", "a"], "🚶", "Quelle lettre complète l'espace où les piétons peuvent marcher : tro___toir ?"]
    ]);

  add("fh4", "Les régions du Cameroun", "🗺️", "Géographie", ["région", "Yaoundé", "Cameroun"],
    { card: ["Dix régions et une capitale", "Le Cameroun compte dix régions : Adamaoua, Centre, Est, Extrême-Nord, Littoral, Nord, Nord-Ouest, Sud, Sud-Ouest et Ouest. Yaoundé est la capitale du pays."] },
    [
      ["choice", "Combien de régions compte le Cameroun ?", ["10", "8", "12"], 0],
      ["choice", "Quelle ville est la capitale du Cameroun ?", ["Yaoundé", "Douala", "Buea"], 0],
      ["choice", "Quel nom est celui d'une région camerounaise ?", ["Littoral", "Sahara", "Atlantique"], 0],
      ["choice", "Quelle paire contient deux noms de régions du Cameroun ?", ["Centre et Ouest", "Buea et Douala", "Yaoundé et Sanaga"], 0],
      ["choice", "Quelle ville est la capitale, et non la plus grande ville et le port ?", ["Yaoundé", "Douala", "Limbe"], 0],
      ["tf", "Yaoundé est la capitale du Cameroun.", true, "La capitale du pays est Yaoundé."],
      ["tf", "Le Cameroun compte douze régions.", false, "Le Cameroun compte dix régions."],
      ["tf", "Le Nord-Ouest figure parmi les noms français des régions.", true, "Le Nord-Ouest fait partie des dix régions."],
      ["match", [["Adamaoua", "Adamawa en anglais"], ["Extrême-Nord", "Far North en anglais"], ["Nord-Ouest", "North-West en anglais"], ["Sud-Ouest", "South-West en anglais"]], "Associe chaque nom français de région à son nom anglais."],
      ["dict", "Littoral", "Écris le nom de la région qui porte ce nom français."]
    ]);

  add("fh4b", "Le relief et les cours d'eau du Cameroun", "⛰️", "Géographie", ["mont Cameroun", "Sanaga", "fleuve"],
    { story: ["Le mont Cameroun, près de Buea, est le plus haut sommet du pays.", "Son altitude est d'environ 4 000 mètres.", "La Sanaga est le plus long fleuve du Cameroun."] },
    [
      ["choice", "Quel est le plus haut sommet du Cameroun ?", ["le mont Cameroun", "le mont Manengouba", "le mont Bamboutos"], 0],
      ["choice", "Près de quelle ville se trouve le mont Cameroun ?", ["Buea", "Garoua", "Bertoua"], 0],
      ["choice", "Quelle est l'altitude approximative du mont Cameroun ?", ["environ 4 000 m", "environ 400 m", "environ 40 000 m"], 0],
      ["choice", "Quel est le plus long fleuve du Cameroun ?", ["la Sanaga", "le Wouri", "le Nyong"], 0],
      ["choice", "Quel mot désigne le point le plus élevé d'une montagne ?", ["un sommet", "un delta", "une vallée"], 0],
      ["tf", "La Sanaga est le plus long fleuve du Cameroun.", true, "La Sanaga est le plus long fleuve du pays."],
      ["tf", "Le mont Cameroun se trouve près de Garoua.", false, "Le mont Cameroun se trouve près de Buea."],
      ["tf", "Le mont Cameroun mesure environ 4 000 mètres de haut.", true, "Son altitude est approximativement de 4 000 mètres."],
      ["match", [["mont Cameroun", "plus haut sommet du pays"], ["Buea", "ville proche du mont Cameroun"], ["Sanaga", "plus long fleuve du Cameroun"], ["4 000 m", "altitude approximative du sommet"]], "Associe chaque nom ou mesure au fait géographique correspondant."],
      ["build", "Sanaga", "Écris le nom du plus long fleuve du Cameroun."]
    ]);

  add("fh4c", "Les produits agricoles du Cameroun", "🌾", "Géographie", ["cacao", "café", "coton"],
    { video: [["🍫", "Le cacao est une culture qui sert à fabriquer du chocolat."], ["☕", "Le café est cultivé pour ses graines utilisées dans une boisson."], ["🌿", "Le coton est cultivé notamment dans le nord du Cameroun."]] },
    [
      ["choice", "Quelle culture sert à fabriquer du chocolat ?", ["le cacao", "le coton", "le café"], 0],
      ["choice", "Quelle culture est utilisée pour préparer une boisson appelée café ?", ["le café", "la banane", "le coton"], 0],
      ["choice", "Quelle culture est mentionnée parmi celles du nord du Cameroun ?", ["le coton", "le cacao seulement", "le riz importé"], 0],
      ["choice", "Quel produit agricole peut être transformé en huile de palme ?", ["les fruits du palmier", "les graines de cacao", "les fibres de coton"], 0],
      ["choice", "Quel produit est un fruit cultivé au Cameroun ?", ["la banane", "le coton", "le café"], 0],
      ["tf", "Le cacao peut servir à fabriquer du chocolat.", true, "Les graines de cacao sont utilisées pour fabriquer du chocolat."],
      ["tf", "Le coton est une culture fruitière qui donne des bananes.", false, "Le coton est une culture différente ; les bananes viennent du bananier."],
      ["tf", "Le coton est cultivé notamment dans le nord du Cameroun.", true, "Le coton fait partie des cultures mentionnées dans le nord."],
      ["match", [["cacao", "culture utilisée pour le chocolat"], ["café", "culture dont les graines servent à une boisson"], ["coton", "culture mentionnée dans le nord"], ["banane", "fruit cultivé"]], "Associe chaque produit agricole à son usage ou à sa catégorie."],
      ["dict", "cacao", "Écris le nom de la culture utilisée pour fabriquer du chocolat."]
    ]);

  add("fh5", "Les symboles nationaux", "⭐", "Citoyenneté", ["drapeau", "devise", "hymne"],
    { card: ["Des symboles du Cameroun", "Le drapeau du Cameroun a trois bandes verticales vert, rouge et jaune, avec une étoile jaune dans la bande rouge. La devise est « Paix – Travail – Patrie » et l'hymne commence par « Ô Cameroun, berceau de nos ancêtres »."] },
    [
      ["choice", "Quelles couleurs apparaissent sur le drapeau camerounais ?", ["vert, rouge et jaune", "bleu, blanc et noir", "rouge, bleu et vert"], 0],
      ["choice", "Où se trouve l'étoile jaune du drapeau ?", ["dans la bande rouge", "dans la bande verte", "au-dessus du drapeau"], 0],
      ["choice", "Quelle est la devise du Cameroun ?", ["Paix – Travail – Patrie", "Unité – Force – Progrès", "Liberté – Égalité – Fraternité"], 0],
      ["choice", "Quelle phrase ouvre l'hymne national ?", ["Ô Cameroun, berceau de nos ancêtres", "Ô Afrique, terre des montagnes", "Cameroun, pays de la mer"], 0],
      ["choice", "À quelle date célèbre-t-on la fête nationale du Cameroun ?", ["le 20 mai", "le 11 février", "le 1er octobre"], 0],
      ["tf", "Le drapeau du Cameroun porte une étoile jaune dans sa bande rouge.", true, "L'étoile jaune se trouve au milieu de la bande rouge."],
      ["tf", "La devise du Cameroun est « Ô Cameroun, berceau de nos ancêtres ».", false, "C'est le début de l'hymne ; la devise est « Paix – Travail – Patrie »."],
      ["tf", "La fête nationale du Cameroun a lieu le 20 mai.", true, "Le 20 mai est la fête nationale."],
      ["match", [["drapeau", "vert, rouge et jaune en bandes verticales"], ["étoile", "jaune dans la bande rouge"], ["devise", "Paix – Travail – Patrie"], ["hymne", "Ô Cameroun, berceau de nos ancêtres"]], "Associe chaque symbole ou institution à son élément national."],
      ["dict", "Patrie", "Écris le dernier mot de la devise nationale."]
    ]);

  add("fh5b", "La commune et le maire", "🏛️", "Citoyenneté", ["commune", "maire", "habitants"],
    { story: ["Les habitants d'une commune peuvent signaler les besoins de leur quartier.", "Le conseil communal discute des questions qui concernent la vie locale.", "Le maire dirige la commune et travaille avec les membres du conseil."] },
    [
      ["choice", "Quel sujet peut concerner une commune ?", ["un besoin partagé dans un quartier", "la couleur d'un cahier privé", "le repas d'une seule famille"], 0],
      ["choice", "Qui dirige la commune dans cette leçon ?", ["le maire", "un élève", "un vendeur de fruits"], 0],
      ["choice", "Que peuvent signaler les habitants à leur commune ?", ["un besoin local", "un résultat de calcul personnel", "un secret de famille"], 0],
      ["choice", "De quoi le conseil communal peut-il discuter ?", ["de questions de la vie locale", "des devoirs d'un seul élève", "des jeux d'un seul enfant"], 0],
      ["choice", "Qui vit dans une commune ?", ["ses habitants", "seulement les visiteurs", "uniquement les commerçants étrangers"], 0],
      ["tf", "Les habitants peuvent signaler des besoins de leur quartier.", true, "Les habitants peuvent informer leur commune des besoins locaux."],
      ["tf", "Le maire dirige une classe à la place de l'enseignant.", false, "Le maire dirige la commune ; l'enseignant s'occupe de la classe."],
      ["tf", "Le conseil communal discute de sujets liés à la vie locale.", true, "Le conseil examine des questions concernant la commune."],
      ["match", [["commune", "collectivité qui s'occupe de questions locales"], ["maire", "personne qui dirige la commune"], ["conseil communal", "groupe qui discute des besoins locaux"], ["habitants", "personnes qui vivent dans la commune"]], "Relie chaque acteur ou lieu à son rôle dans la vie communale."],
      ["build", "commune", "Écris le mot qui désigne la collectivité chargée de questions locales."]
    ]);

  add("fh5c", "Les droits et les devoirs de l'enfant", "⚖️", "Citoyenneté", ["droit", "devoir", "respect"],
    { video: [["📚", "Chaque enfant a le droit d'apprendre et d'aller à l'école."], ["🛡️", "Les enfants doivent être protégés contre les dangers."], ["🤝", "Chacun a le devoir de respecter les autres et les règles communes."]] },
    [
      ["choice", "Quel exemple est un droit de l'enfant ?", ["avoir accès à l'éducation", "abîmer les livres des autres", "ignorer toute règle de sécurité"], 0],
      ["choice", "Quelle action montre un devoir envers les autres ?", ["respecter ses camarades", "prendre tous les objets partagés", "empêcher les autres d'apprendre"], 0],
      ["choice", "Que doit faire un enfant qui ne se sent pas en sécurité ?", ["en parler à un adulte de confiance", "garder le danger secret", "s'approcher du danger"], 0],
      ["choice", "Quelle action respecte le droit des autres à apprendre ?", ["écouter pendant la leçon", "crier sans arrêt", "cacher les cahiers de la classe"], 0],
      ["choice", "Que signifie un devoir ?", ["une responsabilité à accomplir", "un objet à vendre", "un lieu de repos"], 0],
      ["tf", "Le droit à l'éducation permet à un enfant d'apprendre.", true, "L'éducation fait partie des droits évoqués dans la leçon."],
      ["tf", "Un devoir consiste à empêcher les autres de se sentir en sécurité.", false, "Un devoir comprend le respect des autres et des règles communes."],
      ["tf", "Un enfant peut demander de l'aide à un adulte de confiance.", true, "Parler à un adulte peut aider lorsqu'un enfant est en danger."],
      ["match", [["droit", "possibilité protégée pour l'enfant"], ["devoir", "responsabilité à accomplir"], ["éducation", "possibilité d'apprendre"], ["respect", "considération envers les autres"]], "Associe chaque mot aux droits et devoirs de l'enfant."],
      ["missing", "respect", 3, ["p", "e", "c"], "🤝", "Quelle lettre complète l'attitude due aux autres : res___ect ?"]
    ]);

  add("fh6", "L'histoire du Cameroun", "📜", "Histoire", ["indépendance", "réunification", "histoire"],
    { card: ["Quelques dates de l'histoire", "Le Cameroun est devenu indépendant le 1er janvier 1960 et a été réunifié le 1er octobre 1961. Le pays est devenu un État unitaire en 1972 ; la fête nationale a lieu le 20 mai."] },
    [
      ["choice", "À quelle date le Cameroun est-il devenu indépendant ?", ["le 1er janvier 1960", "le 1er octobre 1961", "le 20 mai 1972"], 0],
      ["choice", "Quand la réunification du Cameroun a-t-elle eu lieu ?", ["le 1er octobre 1961", "le 1er janvier 1960", "le 11 février 1960"], 0],
      ["choice", "En quelle année le Cameroun est-il devenu un État unitaire ?", ["1972", "1960", "1961"], 0],
      ["choice", "À quelle date célèbre-t-on la fête nationale ?", ["le 20 mai", "le 1er janvier", "le 1er octobre"], 0],
      ["choice", "Quel mot désigne le fait qu'un pays se gouverne sans dépendre d'une puissance étrangère ?", ["indépendance", "saison", "commerce"], 0],
      ["tf", "Le Cameroun est devenu indépendant le 1er janvier 1960.", true, "Cette date marque l'indépendance du Cameroun."],
      ["tf", "La fête nationale du Cameroun est le 1er octobre.", false, "La fête nationale a lieu le 20 mai ; le 1er octobre 1961 est la date de la réunification."],
      ["tf", "Le Cameroun est devenu un État unitaire en 1972.", true, "L'année 1972 correspond à la création de l'État unitaire."],
      ["match", [["indépendance", "1er janvier 1960"], ["réunification", "1er octobre 1961"], ["État unitaire", "1972"], ["fête nationale", "20 mai"]], "Associe chaque événement historique à sa date."],
      ["dict", "réunification", "Écris le mot qui désigne le fait de réunir de nouveau."]
    ]);

  add("fh6b", "Les trois pouvoirs", "⚖️", "Citoyenneté", ["exécutif", "législatif", "judiciaire"],
    { story: ["Les pouvoirs de l'État sont répartis entre l'exécutif, le législatif et le judiciaire.", "Le pouvoir législatif fait les lois et l'exécutif les met en œuvre.", "Le pouvoir judiciaire interprète les lois ; le Parlement comprend l'Assemblée nationale et le Sénat."] },
    [
      ["choice", "Quel pouvoir fait les lois ?", ["le pouvoir législatif", "le pouvoir exécutif", "le pouvoir judiciaire"], 0],
      ["choice", "Quel pouvoir met en œuvre les lois et les politiques ?", ["le pouvoir exécutif", "le pouvoir judiciaire", "le pouvoir législatif"], 0],
      ["choice", "Quel pouvoir interprète les lois ?", ["le pouvoir judiciaire", "le pouvoir législatif", "le pouvoir exécutif"], 0],
      ["choice", "Quels organes composent le Parlement du Cameroun ?", ["l'Assemblée nationale et le Sénat", "le conseil communal et l'école", "la cour et la clinique"], 0],
      ["choice", "Combien de pouvoirs sont présentés dans cette leçon ?", ["trois", "deux", "cinq"], 0],
      ["tf", "Le pouvoir législatif fait les lois.", true, "La fonction législative consiste à faire les lois."],
      ["tf", "Le pouvoir judiciaire est chargé de faire pousser les cultures.", false, "Le pouvoir judiciaire interprète les lois ; l'agriculture est une autre activité."],
      ["tf", "Le Parlement comprend l'Assemblée nationale et le Sénat.", true, "Ces deux institutions composent le Parlement du Cameroun."],
      ["match", [["exécutif", "met en œuvre les lois"], ["législatif", "fait les lois"], ["judiciaire", "interprète les lois"], ["Parlement", "Assemblée nationale et Sénat"]], "Associe chaque pouvoir ou institution à son rôle."],
      ["build", "judiciaire", "Écris le nom du pouvoir qui interprète les lois."]
    ]);

  add("fh6c", "Le Cameroun, l'Afrique et le monde", "🌍", "Géographie", ["Afrique centrale", "Union africaine", "Nations unies"],
    { video: [["🌍", "Le Cameroun se trouve en Afrique centrale."], ["🤝", "Le Cameroun est membre de l'Union africaine."], ["🕊️", "Le Cameroun est aussi membre des Nations unies."]] },
    [
      ["choice", "Dans quelle partie de l'Afrique se trouve le Cameroun ?", ["en Afrique centrale", "en Europe du Sud", "en Amérique du Sud"], 0],
      ["choice", "De quelle organisation africaine le Cameroun est-il membre ?", ["de l'Union africaine", "de l'Union européenne", "du Conseil du Pacifique"], 0],
      ["choice", "De quelle organisation internationale le Cameroun est-il membre ?", ["des Nations unies", "du Cercle arctique", "du Marché central"], 0],
      ["choice", "Sur quel continent se trouve le Cameroun ?", ["en Afrique", "en Asie", "en Europe"], 0],
      ["choice", "Quelle paire nomme deux organisations dont le Cameroun est membre ?", ["l'Union africaine et les Nations unies", "l'océan Atlantique et l'océan Pacifique", "l'Union africaine et l'Union européenne"], 0],
      ["tf", "Le Cameroun se trouve en Afrique centrale.", true, "Le Cameroun est un pays d'Afrique centrale."],
      ["tf", "Le Cameroun n'est pas membre de l'Union africaine.", false, "Le Cameroun est membre de l'Union africaine et des Nations unies."],
      ["tf", "Les Nations unies sont une organisation internationale.", true, "Le Cameroun est membre de cette organisation internationale."],
      ["match", [["Cameroun", "pays d'Afrique centrale"], ["Union africaine", "organisation de pays africains"], ["Nations unies", "organisation internationale"], ["Afrique", "continent où se trouve le Cameroun"]], "Associe chaque nom à sa situation géographique ou à son organisation."],
      ["dict", "continent", "Écris le mot qui désigne une grande étendue de terre comme l'Afrique."]
    ]);

  add("fa1", "Hello: greetings", "👋", "English", ["hello", "goodbye", "please"],
    { card: ["English greetings", "In English, people say hello when they meet. Goodbye is a friendly word for leaving, and please makes a request polite."] },
    [
      ["choice", "Quel mot anglais peut-on dire pour saluer quelqu'un ?", ["hello", "goodbye", "please"], 0],
      ["choice", "Quel mot anglais peut-on dire avant de quitter un ami ?", ["goodbye", "hello", "please"], 0],
      ["choice", "Quel mot rend une demande plus polie en anglais ?", ["please", "goodbye", "hello"], 0],
      ["choice", "Quel mot convient quand Ama rencontre sa maîtresse le matin ?", ["Hello!", "Goodbye!", "Please!"], 0],
      ["choice", "Quelle expression anglaise peut conclure une conversation ?", ["Goodbye!", "Hello!", "Good morning!"], 0],
      ["tf", "Vrai ou faux : « hello » est un salut en anglais.", true, "Hello est une salutation anglaise."],
      ["tf", "Vrai ou faux : « please » signifie « au revoir ».", false, "Please signifie « s'il te plaît » ou « s'il vous plaît » ; goodbye signifie « au revoir »."],
      ["match", [["hello", "bonjour"], ["goodbye", "au revoir"], ["please", "s'il te plaît"], ["thank you", "merci"]], "Relie chaque expression anglaise à son sens en français."],
      ["dict", "hello", "Écris le mot anglais qu'Ama dit pour saluer son amie."],
      ["order", ["Hello,", "Ama", "!"], "Remets les mots anglais dans l'ordre pour écrire une salutation."]
    ], "en", "fr");

  add("fa1b", "Animals", "🐾", "English vocabulary", ["cat", "dog", "bird"],
    { story: ["Ama sees a cat near the house.", "A dog runs across the yard while a bird sits in a tree.", "She names each animal in English and watches them safely."] },
    [
      ["choice", "Quel mot anglais désigne un animal qui miaule ?", ["cat", "dog", "bird"], 0],
      ["choice", "Quel animal anglais aboie ?", ["dog", "cat", "fish"], 0],
      ["choice", "Quel mot anglais désigne l'animal à plumes dans l'arbre ?", ["bird", "goat", "dog"], 0],
      ["choice", "Quel animal voit Ama près de la maison ?", ["a cat", "a lion", "a crocodile"], 0],
      ["choice", "Quel animal peut voler avec ses ailes ?", ["a bird", "a goat", "a dog"], 0],
      ["tf", "Vrai ou faux : dans l'histoire, le chat est près de la maison.", true, "La première phrase dit qu'Ama voit un chat près de la maison."],
      ["tf", "Vrai ou faux : le mot anglais « dog » désigne un oiseau.", false, "Dog signifie « chien » ; bird signifie « oiseau »."],
      ["match", [["cat", "chat"], ["dog", "chien"], ["bird", "oiseau"], ["fish", "poisson"]], "Relie chaque nom anglais d'animal à sa traduction française."],
      ["build", "bird", "Forme le mot anglais pour « oiseau »."],
      ["order", ["A", "bird", "sits", "in", "a", "tree", "."], "Mets les mots anglais dans l'ordre pour décrire l'oiseau."]
    ], "en", "fr");

  add("fa1c", "My body", "🧍", "English vocabulary", ["head", "eyes", "hands"],
    { video: [["🙂", "Your face is on your head."], ["👀", "You use your eyes to see."], ["🤲", "Your hands can hold a book."]] },
    [
      ["choice", "Quel mot anglais désigne la partie du corps qui porte le visage ?", ["head", "hand", "foot"], 0],
      ["choice", "Avec quelle partie du corps voit-on ?", ["eyes", "ears", "hands"], 0],
      ["choice", "Quel mot anglais désigne les parties qui tiennent un livre ?", ["hands", "knees", "feet"], 0],
      ["choice", "Quel mot complète « I see with my ___ » ?", ["eyes", "elbows", "toes"], 0],
      ["choice", "Quel mot anglais désigne une partie du corps au-dessus du cou ?", ["head", "leg", "finger"], 0],
      ["tf", "Vrai ou faux : on utilise ses yeux pour voir.", true, "Eyes signifie « yeux » ; les yeux servent à voir."],
      ["tf", "Vrai ou faux : le mot anglais « hands » signifie « oreilles ».", false, "Hands signifie « mains » ; ears signifie « oreilles »."],
      ["match", [["head", "tête"], ["eyes", "yeux"], ["hands", "mains"], ["feet", "pieds"]], "Associe chaque mot anglais du corps à son sens français."],
      ["dict", "hands", "Écris le mot anglais qui désigne les parties du corps utilisées pour tenir un livre."],
      ["order", ["My", "hands", "hold", "a", "book", "."], "Réorganise ces mots anglais pour former une phrase sur les mains."]
    ], "en", "fr");

  add("fa2", "Colours", "🎨", "English vocabulary", ["red", "blue", "yellow"],
    { card: ["Names of colours", "In English, the Cameroon flag has green, red and yellow stripes. The star on the red stripe is yellow."] },
    [
      ["choice", "Quel mot anglais désigne la couleur rouge ?", ["red", "blue", "yellow"], 0],
      ["choice", "Quel mot anglais désigne la couleur du ciel par temps clair ?", ["blue", "green", "red"], 0],
      ["choice", "Quelle couleur anglaise apparaît sur l'étoile du drapeau camerounais ?", ["yellow", "blue", "purple"], 0],
      ["choice", "Quel mot complète « The grass is ___ » ?", ["green", "red", "black"], 0],
      ["choice", "Quelle couleur est mentionnée sur la bande rouge du drapeau ?", ["yellow", "blue", "white"], 0],
      ["tf", "Vrai ou faux : « red » est le mot anglais pour la couleur rouge.", true, "Red signifie « rouge »."],
      ["tf", "Vrai ou faux : dans la leçon, l'étoile du drapeau est bleue.", false, "L'étoile du drapeau est jaune ; yellow signifie « jaune »."],
      ["match", [["red", "rouge"], ["blue", "bleu"], ["yellow", "jaune"], ["green", "vert"]], "Relie chaque nom anglais de couleur à sa traduction française."],
      ["build", "yellow", "Forme le mot anglais de la couleur de l'étoile du drapeau."],
      ["order", ["The", "star", "is", "yellow", "."], "Mets les mots anglais dans l'ordre pour écrire la phrase."]
    ], "en", "fr");

  add("fa2b", "Fruits and food", "🥭", "English vocabulary", ["mango", "banana", "rice"],
    { story: ["At the market, Ama buys a ripe mango and a banana.", "Her family cooks rice for lunch.", "She practises the English names of the fruit and food before eating."] },
    [
      ["choice", "Quel mot anglais désigne une mangue ?", ["mango", "banana", "rice"], 0],
      ["choice", "Quel fruit anglais est long et jaune quand il est mûr ?", ["banana", "orange", "grape"], 0],
      ["choice", "Quel aliment la famille d'Ama prépare-t-elle pour le déjeuner ?", ["rice", "soap", "paper"], 0],
      ["choice", "Que choisit Ama au marché avec la banane ?", ["a mango", "a shoe", "a pencil"], 0],
      ["choice", "Quel mot anglais désigne le riz ?", ["rice", "mango", "banana"], 0],
      ["tf", "Vrai ou faux : Ama achète un fruit au marché dans l'histoire.", true, "Elle achète une mangue et une banane."],
      ["tf", "Vrai ou faux : « rice » signifie « chaussure ».", false, "Rice signifie « riz » ; shoe signifie « chaussure »."],
      ["match", [["mango", "mangue"], ["banana", "banane"], ["rice", "riz"], ["orange", "orange"]], "Relie chaque aliment anglais à son nom français."],
      ["dict", "banana", "Écris le mot anglais du fruit jaune mentionné dans l'histoire."],
      ["order", ["Ama", "eats", "a", "mango", "."], "Reconstitue la phrase anglaise qui décrit le fruit mangé par Ama."]
    ], "en", "fr");

  add("fa2c", "Days of the week", "📅", "English vocabulary", ["Monday", "Tuesday", "Wednesday"],
    { video: [["📅", "Monday is the first school day in this example."], ["📚", "Tuesday comes after Monday."], ["✏️", "Wednesday comes after Tuesday."]] },
    [
      ["choice", "Quel jour anglais vient après Monday ?", ["Tuesday", "Sunday", "Friday"], 0],
      ["choice", "Quel mot anglais désigne le premier jour de la semaine scolaire dans la vidéo ?", ["Monday", "Wednesday", "Saturday"], 0],
      ["choice", "Quel jour vient après Tuesday ?", ["Wednesday", "Monday", "Thursday"], 0],
      ["choice", "Quel jour se trouve entre Monday et Wednesday ?", ["Tuesday", "Friday", "Sunday"], 0],
      ["choice", "Quel jour anglais vient avant Tuesday ?", ["Monday", "Thursday", "Saturday"], 0],
      ["tf", "Vrai ou faux : Wednesday vient après Tuesday.", true, "Wednesday suit Tuesday dans l'ordre des jours."],
      ["tf", "Vrai ou faux : Monday vient après Friday dans l'ordre de cette leçon.", false, "Monday vient avant Tuesday ; Friday est plus tard dans la semaine."],
      ["match", [["Monday", "lundi"], ["Tuesday", "mardi"], ["Wednesday", "mercredi"], ["Friday", "vendredi"]], "Associe chaque jour anglais à son nom français."],
      ["build", "Tuesday", "Écris le jour anglais qui vient après Monday."],
      ["order", ["Monday", "comes", "before", "Tuesday", "."], "Range ces mots anglais pour exprimer l'ordre des jours."]
    ], "en", "fr");

  add("fa3", "Numbers 1 to 20", "🔢", "English vocabulary", ["one", "twelve", "twenty"],
    { card: ["Counting in English", "Count from one to twenty in English. Twelve comes after eleven, and twenty is the number after nineteen."] },
    [
      ["choice", "Quel mot anglais désigne le nombre 1 ?", ["one", "two", "ten"], 0],
      ["choice", "Quel nombre anglais vient après eleven ?", ["twelve", "ten", "twenty"], 0],
      ["choice", "Quel mot anglais désigne le nombre 20 ?", ["twenty", "twelve", "two"], 0],
      ["choice", "Quel nombre se trouve entre six et eight ?", ["seven", "five", "nine"], 0],
      ["choice", "Quel nombre anglais vient avant ten ?", ["nine", "eleven", "twelve"], 0],
      ["tf", "Vrai ou faux : « twelve » désigne le nombre 12.", true, "Twelve signifie douze."],
      ["tf", "Vrai ou faux : « twenty » désigne le nombre 12.", false, "Twenty signifie vingt ; twelve signifie douze."],
      ["match", [["one", "1"], ["five", "5"], ["twelve", "12"], ["twenty", "20"]], "Relie chaque nombre écrit en anglais au chiffre correspondant."],
      ["dict", "seven", "Écris en anglais le nombre qui vient après six."],
      ["order", ["I", "have", "twelve", "mangoes", "."], "Mets les mots anglais en ordre pour écrire ce que possède la personne."]
    ], "en", "fr");

  add("fa3b", "Clothes", "👕", "English vocabulary", ["shirt", "shoes", "dress"],
    { story: ["Ama puts on a clean shirt before school.", "She wears shoes to walk safely along the road.", "Her sister chooses a dress for the family celebration."] },
    [
      ["choice", "Quel mot anglais désigne une chemise ?", ["shirt", "shoes", "dress"], 0],
      ["choice", "Que porte-t-on généralement aux pieds pour marcher ?", ["shoes", "a hat", "a shirt"], 0],
      ["choice", "Quel vêtement la sœur d'Ama choisit-elle pour la célébration ?", ["a dress", "a coat", "a sock"], 0],
      ["choice", "Que met Ama avant d'aller à l'école ?", ["a clean shirt", "a wet towel", "a cooking pot"], 0],
      ["choice", "Quel vêtement anglais couvre le haut du corps ?", ["a shirt", "a shoe", "a sock"], 0],
      ["tf", "Vrai ou faux : Ama met une chemise propre avant l'école.", true, "La première phrase dit qu'elle met une chemise propre."],
      ["tf", "Vrai ou faux : « shoes » désigne un chapeau.", false, "Shoes signifie « chaussures » ; hat signifie « chapeau »."],
      ["match", [["shirt", "chemise"], ["shoes", "chaussures"], ["dress", "robe"], ["hat", "chapeau"]], "Relie chaque vêtement anglais à sa traduction française."],
      ["build", "shirt", "Forme le mot anglais pour « chemise »."],
      ["order", ["Ama", "wears", "clean", "shoes", "."], "Ordonne les mots anglais pour décrire les chaussures d'Ama."]
    ], "en", "fr");

  add("fa3c", "My house", "🏠", "English vocabulary", ["house", "door", "window"],
    { video: [["🏠", "A house is a place where people live."], ["🚪", "A door lets people enter or leave a room."], ["🪟", "A window lets light enter the house."]] },
    [
      ["choice", "Quel mot anglais désigne le bâtiment où une famille peut vivre ?", ["house", "school", "market"], 0],
      ["choice", "Par où peut-on entrer dans une pièce ?", ["through a door", "through a table", "through a book"], 0],
      ["choice", "Quelle partie de la maison laisse entrer la lumière ?", ["a window", "a roof tile", "a wall painting"], 0],
      ["choice", "Quel mot anglais désigne une porte ?", ["door", "window", "floor"], 0],
      ["choice", "Quel lieu Ama peut-elle appeler « my house » ?", ["la maison où elle habite", "un bus en mouvement", "un arbre de la forêt"], 0],
      ["tf", "Vrai ou faux : une fenêtre peut laisser entrer la lumière.", true, "La vidéo explique qu'une fenêtre laisse entrer la lumière."],
      ["tf", "Vrai ou faux : « door » signifie « fenêtre ».", false, "Door signifie « porte » ; window signifie « fenêtre »."],
      ["match", [["house", "maison"], ["door", "porte"], ["window", "fenêtre"], ["room", "pièce"]], "Associe chaque mot anglais de la maison à son sens français."],
      ["dict", "window", "Écris le mot anglais pour « fenêtre »."],
      ["order", ["The", "door", "is", "open", "."], "Place les mots anglais dans le bon ordre pour décrire la porte."]
    ], "en", "fr");

  add("fa4", "My family", "👨‍👩‍👧", "English vocabulary", ["mother", "brother", "sister"],
    { card: ["Words for my family", "In English, mother names a female parent. Brother and sister name siblings, and a family can care for one another."] },
    [
      ["choice", "Quel mot anglais désigne une mère ?", ["mother", "brother", "sister"], 0],
      ["choice", "Quel mot anglais désigne un frère ?", ["brother", "mother", "aunt"], 0],
      ["choice", "Quel mot désigne une sœur en anglais ?", ["sister", "father", "cousin"], 0],
      ["choice", "Quel mot complète « My ___ helps me read » pour parler de la mère ?", ["mother", "brother", "sister"], 0],
      ["choice", "Quel mot désigne un enfant de mêmes parents de sexe masculin ?", ["brother", "mother", "grandmother"], 0],
      ["tf", "Vrai ou faux : « sister » signifie « sœur ».", true, "Sister est le mot anglais pour « sœur »."],
      ["tf", "Vrai ou faux : « mother » signifie « frère ».", false, "Mother signifie « mère » ; brother signifie « frère »."],
      ["match", [["mother", "mère"], ["brother", "frère"], ["sister", "sœur"], ["father", "père"]], "Relie chaque mot anglais de la famille à sa traduction française."],
      ["dict", "sister", "Écris le mot anglais qui signifie « sœur »."],
      ["order", ["My", "sister", "reads", "with", "me", "."], "Ordonne les mots anglais pour raconter qui lit avec moi."]
    ], "en", "fr");

  add("fa4b", "Telling the time", "🕒", "English vocabulary", ["o'clock", "half past", "quarter past"],
    { story: ["At eight o'clock, Ama starts her English lesson.", "At half past eight, the class takes a short break.", "At a quarter past nine, Bih walks home with his sister."] },
    [
      ["choice", "Quelle expression anglaise indique une heure pile ?", ["o'clock", "half past", "quarter past"], 0],
      ["choice", "Quelle expression signifie « et demie » en anglais ?", ["half past", "o'clock", "quarter to"], 0],
      ["choice", "Quelle expression anglaise signifie « et quart » ?", ["quarter past", "half past", "o'clock"], 0],
      ["choice", "À quelle heure Ama commence-t-elle la leçon dans l'histoire ?", ["at eight o'clock", "at half past eight", "at a quarter past nine"], 0],
      ["choice", "Combien de minutes après huit heures est « half past eight » ?", ["30 minutes", "15 minutes", "45 minutes"], 0],
      ["tf", "Vrai ou faux : « o'clock » s'emploie pour une heure pile.", true, "Eight o'clock signifie huit heures pile."],
      ["tf", "Vrai ou faux : « half past eight » signifie huit heures et quart.", false, "Half past eight signifie huit heures et demie."],
      ["match", [["o'clock", "heure pile"], ["half past", "et demie"], ["quarter past", "et quart"], ["quarter to", "moins le quart"]], "Associe chaque expression anglaise à sa lecture en français."],
      ["build", "o'clock", "Écris l'expression anglaise qui indique une heure pile."],
      ["order", ["It", "is", "half", "past", "eight", "."], "Mets les mots anglais dans l'ordre pour écrire l'heure."]
    ], "en", "fr");

  add("fa4c", "Action verbs", "🏃", "English vocabulary", ["run", "read", "play"],
    { video: [["🏃", "Ama can run across the playground."], ["📖", "Bih likes to read a story."], ["⚽", "The children play football after class."]] },
    [
      ["choice", "Quel verbe anglais décrit le fait de courir ?", ["run", "read", "sleep"], 0],
      ["choice", "Quel verbe signifie « lire » ?", ["read", "run", "open"], 0],
      ["choice", "Quel verbe complète « The children ___ football » ?", ["play", "eat", "write"], 0],
      ["choice", "Que fait Bih dans la vidéo avec une histoire ?", ["he reads", "he runs", "he sleeps"], 0],
      ["choice", "Quel verbe décrit l'action d'Ama sur le terrain ?", ["run", "cook", "draw"], 0],
      ["tf", "Vrai ou faux : « play » peut signifier jouer.", true, "Play est un verbe qui signifie jouer."],
      ["tf", "Vrai ou faux : « read » signifie courir.", false, "Read signifie lire ; run signifie courir."],
      ["match", [["run", "courir"], ["read", "lire"], ["play", "jouer"], ["sleep", "dormir"]], "Relie chaque verbe anglais à son sens français."],
      ["build", "read", "Forme le verbe anglais qui signifie « lire »."],
      ["order", ["Bih", "reads", "a", "story", "."], "Remets les mots anglais dans l'ordre pour former une phrase."]
    ], "en", "fr");

  add("fa5", "At school", "🏫", "English vocabulary", ["teacher", "book", "classroom"],
    { card: ["Words for the classroom", "A teacher helps pupils learn. A book has pages to read, and a classroom is a place where a class studies together."] },
    [
      ["choice", "Quel mot anglais désigne la personne qui aide les élèves à apprendre ?", ["teacher", "book", "desk"], 0],
      ["choice", "Quel objet contient des pages à lire ?", ["a book", "a ruler", "a shoe"], 0],
      ["choice", "Quel mot anglais désigne la salle où les élèves étudient ?", ["classroom", "market", "garden"], 0],
      ["choice", "Qui aide les élèves à comprendre une leçon ?", ["a teacher", "a window", "a pencil"], 0],
      ["choice", "Quel objet scolaire peut Ama ouvrir pour lire ?", ["a book", "a chair", "a door"], 0],
      ["tf", "Vrai ou faux : une salle de classe est un lieu où les élèves étudient.", true, "Classroom signifie « salle de classe »."],
      ["tf", "Vrai ou faux : « teacher » désigne un livre.", false, "Teacher signifie « enseignant » ; book signifie « livre »."],
      ["match", [["teacher", "enseignant"], ["book", "livre"], ["classroom", "salle de classe"], ["desk", "pupitre"]], "Relie chaque mot anglais de l'école à son sens français."],
      ["dict", "teacher", "Écris le mot anglais pour « enseignant »."],
      ["order", ["The", "teacher", "opens", "a", "book", "."], "Reconstitue en anglais l'action du professeur avec le livre."]
    ], "en", "fr");

  add("fa5b", "Weather and seasons", "🌦️", "English vocabulary", ["sunny", "rainy", "season"],
    { story: ["On a sunny morning, Ama walks to school.", "A rainy afternoon brings water to the garden.", "The weather can change during a season."] },
    [
      ["choice", "Quel mot anglais décrit une journée avec beaucoup de soleil ?", ["sunny", "rainy", "windy"], 0],
      ["choice", "Quel mot signifie « pluvieux » en anglais ?", ["rainy", "sunny", "cloudless"], 0],
      ["choice", "Quel temps apporte de l'eau au jardin dans l'histoire ?", ["a rainy afternoon", "a sunny morning", "a dry night"], 0],
      ["choice", "Quel mot anglais désigne une saison ?", ["season", "weather", "cloud"], 0],
      ["choice", "Quel temps permet à Ama de marcher au soleil le matin ?", ["sunny", "rainy", "stormy"], 0],
      ["tf", "Vrai ou faux : « rainy » décrit un temps pluvieux.", true, "Rainy signifie « pluvieux »."],
      ["tf", "Vrai ou faux : la météo ne peut jamais changer pendant une saison.", false, "Le temps peut changer au cours d'une saison."],
      ["match", [["sunny", "ensoleillé"], ["rainy", "pluvieux"], ["windy", "venteux"], ["season", "saison"]], "Relie chaque mot anglais de la météo à son sens français."],
      ["build", "rainy", "Forme le mot anglais qui décrit un après-midi avec de la pluie."],
      ["order", ["The", "weather", "can", "change", "."], "Arrange ces mots anglais pour parler de l'évolution du temps."]
    ], "en", "fr");

  add("fa5c", "At the market: prices", "🧺", "English vocabulary", ["price", "cost", "cheap"],
    { video: [["🥭", "The price of the mango is 500 FCFA."], ["💬", "Ama asks, “How much is the banana?”"], ["💵", "She pays the seller and checks her change."]] },
    [
      ["choice", "Quel mot anglais signifie « prix » ?", ["price", "basket", "fruit"], 0],
      ["choice", "Dans la phrase de la vidéo, combien coûte la mangue ?", ["500 FCFA", "200 FCFA", "1,000 FCFA"], 0],
      ["choice", "Quelle question anglaise permet de demander le prix d'une banane ?", ["How much is the banana?", "Where is the classroom?", "What time is it?"], 0],
      ["choice", "Quel mot anglais décrit un article qui ne coûte pas cher ?", ["cheap", "expensive", "heavy"], 0],
      ["choice", "Que vérifie Ama après avoir payé ?", ["her change", "the weather", "her homework"], 0],
      ["tf", "Vrai ou faux : dans la vidéo, une mangue coûte 500 FCFA.", true, "La première scène donne le prix de 500 FCFA."],
      ["tf", "Vrai ou faux : « price » signifie « panier ».", false, "Price signifie « prix » ; basket signifie « panier »."],
      ["match", [["price", "prix"], ["cost", "coûter"], ["cheap", "bon marché"], ["change", "monnaie rendue"]], "Relie chaque mot anglais du marché à son sens en français."],
      ["dict", "price", "Écris le mot anglais qui signifie « prix »."],
      ["order", ["The", "mango", "costs", "500", "FCFA", "."], "Mets les mots anglais dans l'ordre pour écrire le prix."]
    ], "en", "fr");

  add("fa6", "The simple present", "📘", "English grammar", ["plays", "reads", "goes"],
    { card: ["Habits in the simple present", "Use the simple present for habits and facts. With he, she or it, many verbs take -s: Ama reads, Bih plays and she goes to school."] },
    [
      ["choice", "Quelle forme complète « Ama ___ a story every evening » ?", ["reads", "read", "reading"], 0],
      ["choice", "Quelle forme complète « Bih ___ football after class » ?", ["plays", "play", "playing"], 0],
      ["choice", "Quel verbe complète « She ___ to school » ?", ["goes", "go", "going"], 0],
      ["choice", "Quelle phrase décrit une habitude ?", ["Ama reads every evening.", "Ama read yesterday.", "Ama is reading now."], 0],
      ["choice", "Quelle terminaison prend souvent un verbe au présent avec « he » ?", ["-s", "-ed", "-ing"], 0],
      ["tf", "Vrai ou faux : « He plays » est au présent simple.", true, "Plays exprime une habitude avec he."],
      ["tf", "Vrai ou faux : on écrit « She go to school » au présent simple.", false, "Avec she, on écrit « She goes to school »."],
      ["match", [["I read", "présent simple avec I"], ["she reads", "présent simple avec she"], ["they play", "présent simple avec they"], ["he goes", "présent simple avec he"]], "Associe chaque phrase anglaise à la personne utilisée."],
      ["dict", "plays", "Écris le verbe anglais au présent pour « he » dans « He ___ football »."],
      ["order", ["Ama", "reads", "a", "book", "every", "day", "."], "Remets les mots anglais dans l'ordre pour former une habitude."]
    ], "en", "fr");

  add("fa6b", "The present continuous", "🔄", "English grammar", ["is reading", "are playing", "running"],
    { story: ["Ama is reading a book now.", "Bih and Paul are playing football in the yard.", "The present continuous describes an action happening at this moment."] },
    [
      ["choice", "Quelle forme complète « Ama ___ a book now » ?", ["is reading", "reads", "read"], 0],
      ["choice", "Quelle forme convient à « Bih and Paul ___ football » ?", ["are playing", "is playing", "plays"], 0],
      ["choice", "Quelle terminaison porte souvent le verbe principal au présent continu ?", ["-ing", "-ed", "-s"], 0],
      ["choice", "Quelle phrase décrit une action en cours maintenant ?", ["Ama is reading now.", "Ama reads every day.", "Ama read yesterday."], 0],
      ["choice", "Quel auxiliaire complète « They ___ running » ?", ["are", "is", "am"], 0],
      ["tf", "Vrai ou faux : « is reading » peut décrire une action en cours.", true, "La forme is reading est au présent continu."],
      ["tf", "Vrai ou faux : « are playing » s'emploie avec un seul sujet « he ».", false, "Avec he, on dit « is playing » ; are playing accompagne they ou un sujet pluriel."],
      ["match", [["I am reading", "action en cours avec I"], ["she is running", "action en cours avec she"], ["they are playing", "action en cours avec they"], ["we are writing", "action en cours avec we"]], "Relie chaque forme au pronom qui convient."],
      ["build", "running", "Écris la forme en -ing du verbe anglais « run »."],
      ["order", ["They", "are", "playing", "in", "the", "yard", "."], "Mets les mots anglais dans l'ordre pour décrire une action en cours."]
    ], "en", "fr");

  add("fa6c", "Reading: a short story", "📖", "English reading", ["market", "basket", "returns"],
    { video: [["🧺", "Ama walks to the market with a basket."], ["🥭", "She buys mangoes and greets the seller."], ["🏠", "After shopping, Ama returns home with her aunt."]] },
    [
      ["choice", "Où Ama va-t-elle avec un panier dans l'histoire ?", ["to the market", "to the classroom", "to the river"], 0],
      ["choice", "Que met-elle dans son panier ?", ["mangoes", "shoes", "books"], 0],
      ["choice", "Qui Ama salue-t-elle au marché ?", ["the seller", "the pilot", "the doctor"], 0],
      ["choice", "Avec qui Ama rentre-t-elle à la maison ?", ["her aunt", "her teacher", "her neighbour"], 0],
      ["choice", "Quel mot anglais signifie qu'Ama rentre à la maison ?", ["returns", "buys", "greets"], 0],
      ["tf", "Vrai ou faux : Ama achète des mangues au marché.", true, "La deuxième scène dit qu'elle achète des mangues."],
      ["tf", "Vrai ou faux : Ama se rend au marché sans panier.", false, "Elle marche au marché avec un panier."],
      ["match", [["market", "marché"], ["basket", "panier"], ["seller", "vendeur ou vendeuse"], ["returns", "rentre"]], "Relie chaque mot anglais de l'histoire à son sens français."],
      ["dict", "basket", "Écris le mot anglais pour l'objet qu'Ama porte au marché."],
      ["order", ["Ama", "returns", "home", "with", "her", "aunt", "."], "Remets les mots anglais dans l'ordre pour résumer la fin de l'histoire."]
    ], "en", "fr");

  C.curriculum.plan.franco = {
    fra: [
      ["ff1", "ff1b", "ff1c"], ["ff2", "ff2b", "ff2c"], ["ff3", "ff3b", "ff3c"],
      ["ff4", "ff4b", "ff4c"], ["ff5", "ff5b", "ff5c"], ["ff6", "ff6b", "ff6c"]
    ],
    math: [
      ["fm1", "fm1b", "fm1c"], ["fm2", "fm2b", "fm2c"], ["fm3", "fm3b", "fm3c"],
      ["fm4", "fm4b", "fm4c"], ["fm5", "fm5b", "fm5c"], ["fm6", "fm6b", "fm6c"]
    ],
    sci: [
      ["fsc1", "fsc1b", "fsc1c"], ["fsc2", "fsc2b", "fsc2c"], ["fsc3", "fsc3b", "fsc3c"],
      ["fsc4", "fsc4b", "fsc4c"], ["fsc5", "fsc5b", "fsc5c"], ["fsc6", "fsc6b", "fsc6c"]
    ],
    shs: [
      ["fh1", "fh1b", "fh1c"], ["fh2", "fh2b", "fh2c"], ["fh3", "fh3b", "fh3c"],
      ["fh4", "fh4b", "fh4c"], ["fh5", "fh5b", "fh5c"], ["fh6", "fh6b", "fh6c"]
    ],
    ang: [
      ["fa1", "fa1b", "fa1c"], ["fa2", "fa2b", "fa2c"], ["fa3", "fa3b", "fa3c"],
      ["fa4", "fa4b", "fa4c"], ["fa5", "fa5b", "fa5c"], ["fa6", "fa6b", "fa6c"]
    ]
  };
})();
