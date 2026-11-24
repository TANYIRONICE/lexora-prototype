(() => {
  const langs = [
    { code: "en", name: "English", dir: "ltr" },
    { code: "fr", name: "Français", dir: "ltr" },
    { code: "es", name: "Español", dir: "ltr" },
    { code: "pt", name: "Português", dir: "ltr" },
    { code: "ar", name: "العربية", dir: "rtl" }
  ];
  const strings = {};
  const row = (key, en, fr, es, pt, ar) => { strings[key] = { en, fr, es, pt, ar }; };
  row("banner", "Prototype · demo data is saved only on this device", "Prototype · les données de démonstration sont enregistrées sur cet appareil", "Prototipo · los datos de demostración se guardan en este dispositivo", "Protótipo · os dados de demonstração ficam salvos neste dispositivo", "نسخة تجريبية · تُحفظ البيانات على هذا الجهاز فقط");
  row("welcomeDesc", "English for kids, teens and adults – lessons, spelling and listening practice.", "L’anglais pour enfants, adolescents et adultes : leçons, orthographe et écoute.", "Inglés para niños, adolescentes y adultos: lecciones, ortografía y práctica auditiva.", "Inglês para crianças, adolescentes e adultos: lições, ortografia e compreensão oral.", "الإنجليزية للأطفال واليافعين والبالغين: دروس وتهجئة وتدريب على الاستماع.");
  row("parentButton", "I'm a parent or guardian", "Je suis parent ou tuteur", "Soy padre, madre o tutor", "Sou pai, mãe ou responsável", "أنا والد أو وصي");
  row("learnerButton", "I'm a learner (13 or older)", "Je suis apprenant·e (13 ans ou plus)", "Soy estudiante (13 años o más)", "Sou estudante (13 anos ou mais)", "أنا متعلم (13 عامًا أو أكثر)");
  row("under13", "Children under 13 use Lexora through a parent's account.", "Les enfants de moins de 13 ans utilisent Lexora avec le compte d’un parent.", "Los menores de 13 años usan Lexora desde la cuenta de un adulto.", "Crianças menores de 13 anos usam o Lexora pela conta de um responsável.", "يستخدم الأطفال دون 13 عامًا ليكسورا من خلال حساب أحد الوالدين.");
  row("adminPreview", "Content admin (preview)", "Administration du contenu (aperçu)", "Administración de contenido (vista previa)", "Administração de conteúdo (prévia)", "إدارة المحتوى (معاينة)");
  row("ageQuestion", "What year were you born?", "En quelle année êtes-vous né·e ?", "¿En qué año naciste?", "Em que ano você nasceu?", "في أي عام وُلدت؟");
  row("ageWhy", "We ask so we can give you the right experience.", "Cette information nous aide à vous proposer une expérience adaptée.", "Lo preguntamos para ofrecerte una experiencia adecuada.", "Perguntamos para oferecer a experiência certa para você.", "نسأل لنقدم لك تجربة مناسبة.");
  row("selectYear", "Select year", "Choisir l’année", "Selecciona el año", "Selecione o ano", "اختر السنة");
  row("continue", "Continue", "Continuer", "Continuar", "Continuar", "متابعة");
  row("back", "‹ Back", "‹ Retour", "‹ Atrás", "‹ Voltar", "‹ رجوع");
  row("under13Title", "Ask a parent to set up Lexora", "Demande à un parent de configurer Lexora", "Pide a un adulto que configure Lexora", "Peça a um responsável para configurar o Lexora", "اطلب من أحد والديك إعداد ليكسورا");
  row("under13Desc", "Learners under 13 use Lexora through a parent or guardian's account. It only takes a minute!", "Les moins de 13 ans utilisent Lexora avec le compte d’un parent ou tuteur. Cela ne prend qu’une minute !", "Los menores de 13 años usan Lexora desde la cuenta de un adulto. ¡Solo toma un minuto!", "Menores de 13 anos usam o Lexora pela conta de um responsável. Leva só um minuto!", "يستخدم من هم دون 13 عامًا ليكسورا عبر حساب أحد الوالدين أو الأوصياء. لن يستغرق الأمر سوى دقيقة!");
  row("parentSetup", "I'm the parent – set up now", "Je suis le parent – configurer maintenant", "Soy el adulto – configurar ahora", "Sou responsável – configurar agora", "أنا الوالد – ابدأ الإعداد");
  row("createAccount", "Create your account", "Créer votre compte", "Crea tu cuenta", "Crie sua conta", "أنشئ حسابك");
  row("yourName", "Your first name or nickname", "Votre prénom ou surnom", "Tu nombre o apodo", "Seu nome ou apelido", "اسمك الأول أو لقبك");
  row("email", "Email", "E-mail", "Correo electrónico", "E-mail", "البريد الإلكتروني");
  row("password", "Password", "Mot de passe", "Contraseña", "Senha", "كلمة المرور");
  row("startWhere", "Where do you want to start?", "Par où voulez-vous commencer ?", "¿Por dónde quieres empezar?", "Por onde você quer começar?", "من أين تريد أن تبدأ؟");
  row("beginner", "Beginner (A1)", "Débutant (A1)", "Principiante (A1)", "Iniciante (A1)", "مبتدئ (A1)");
  row("levelQuiz", "Take a short level quiz", "Faire un petit test de niveau", "Hacer una prueba breve de nivel", "Fazer um teste rápido de nível", "أجرِ اختبار مستوى قصيرًا");
  row("terms", "I agree to the Terms of Use and Privacy Policy.", "J’accepte les conditions d’utilisation et la politique de confidentialité.", "Acepto las condiciones de uso y la política de privacidad.", "Concordo com os Termos de Uso e a Política de Privacidade.", "أوافق على شروط الاستخدام وسياسة الخصوصية.");
  row("create", "Create account", "Créer un compte", "Crear cuenta", "Criar conta", "إنشاء حساب");
  row("prototypeNote", "Prototype: account details stay on this device; nothing is sent to a server.", "Prototype : les informations du compte restent sur cet appareil.", "Prototipo: los datos de la cuenta permanecen en este dispositivo.", "Protótipo: os dados da conta ficam neste dispositivo.", "نسخة تجريبية: تبقى بيانات الحساب على هذا الجهاز ولا تُرسل إلى خادم.");
  row("parentAccount", "Parent account", "Compte parent", "Cuenta de adulto", "Conta do responsável", "حساب الوالد");
  row("parentIntro", "You'll manage your children's profiles and see their progress.", "Vous gérerez les profils de vos enfants et suivrez leurs progrès.", "Gestionarás los perfiles de tus hijos y verás su progreso.", "Você gerenciará os perfis dos seus filhos e acompanhará o progresso.", "ستدير ملفات أطفالك وتتابع تقدمهم.");
  row("parentFirst", "Your first name", "Votre prénom", "Tu nombre", "Seu primeiro nome", "اسمك الأول");
  row("contact", "Email or phone number", "E-mail ou numéro de téléphone", "Correo o número de teléfono", "E-mail ou telefone", "البريد الإلكتروني أو رقم الهاتف");
  row("consent", "Parental consent", "Autorisation parentale", "Consentimiento parental", "Consentimento dos responsáveis", "موافقة الوالدين");
  row("consentText", "For each child we store only a nickname, an avatar, an age band and learning progress. No ads, no chat, no contact with other users. You can download or delete this data at any time.", "Pour chaque enfant, nous conservons uniquement un surnom, un avatar, une tranche d’âge et les progrès. Sans publicité ni discussion. Vous pouvez télécharger ou supprimer ces données à tout moment.", "De cada niño guardamos solo un apodo, avatar, edad aproximada y progreso. Sin anuncios ni chat. Puedes descargar o borrar estos datos cuando quieras.", "De cada criança, guardamos apenas apelido, avatar, faixa etária e progresso. Sem anúncios ou conversas. Você pode baixar ou excluir esses dados quando quiser.", "نحتفظ لكل طفل بلقب وصورة رمزية وفئة عمرية وتقدم التعلم فقط. بلا إعلانات أو محادثات. يمكنك تنزيل هذه البيانات أو حذفها في أي وقت.");
  row("consentCheck", "I am the parent or legal guardian, I agree to the Privacy Policy, and I consent to Lexora storing this information about my child.", "Je suis le parent ou tuteur légal, j’accepte la politique de confidentialité et autorise Lexora à conserver ces informations sur mon enfant.", "Soy el padre, madre o tutor legal, acepto la política de privacidad y autorizo a Lexora a guardar esta información de mi hijo.", "Sou pai, mãe ou responsável legal, concordo com a Política de Privacidade e autorizo o Lexora a guardar estas informações da criança.", "أنا الوالد أو الوصي القانوني، وأوافق على سياسة الخصوصية وأسمح لليكسورا بحفظ هذه المعلومات عن طفلي.");
  row("addChild", "Add a child", "Ajouter un enfant", "Añadir un niño", "Adicionar uma criança", "إضافة طفل");
  row("childPrivacy", "We don't ask for your child's real name, photo or birthday.", "Nous ne demandons ni le vrai nom, ni la photo, ni la date de naissance de votre enfant.", "No pedimos el nombre real, la foto ni la fecha de nacimiento del niño.", "Não pedimos o nome verdadeiro, foto ou data de nascimento da criança.", "لا نطلب الاسم الحقيقي لطفلك أو صورته أو تاريخ ميلاده.");
  row("nickname", "Nickname", "Surnom", "Apodo", "Apelido", "اللقب");
  row("avatar", "Choose an avatar", "Choisir un avatar", "Elige un avatar", "Escolha um avatar", "اختر صورة رمزية");
  row("age", "Age", "Âge", "Edad", "Idade", "العمر");
  row("add", "Add child", "Ajouter l’enfant", "Añadir niño", "Adicionar criança", "إضافة طفل");
  row("whoLearning", "Who's learning today?", "Qui apprend aujourd’hui ?", "¿Quién aprenderá hoy?", "Quem vai aprender hoje?", "من سيتعلم اليوم؟");
  row("kids", "Kids", "Enfants", "Niños", "Crianças", "الأطفال");
  row("parent", "Parent", "Parent", "Adulto", "Responsável", "الوالد");
  row("learner", "Learner", "Apprenant·e", "Estudiante", "Estudante", "متعلم");
  row("parentArea", "Parent area", "Espace parent", "Área para adultos", "Área dos responsáveis", "منطقة الوالدين");
  row("learn", "Learn", "Apprendre", "Aprender", "Aprender", "تعلّم");
  row("progress", "Progress", "Progrès", "Progreso", "Progresso", "التقدم");
  row("review", "Review", "Révision", "Repaso", "Revisão", "مراجعة");
  row("profiles", "Profiles", "Profils", "Perfiles", "Perfis", "الملفات");
  row("homeHi", "Hi {name}! What shall we learn today?", "Salut {name} ! Qu’allons-nous apprendre aujourd’hui ?", "¡Hola, {name}! ¿Qué aprenderemos hoy?", "Olá, {name}! O que vamos aprender hoje?", "مرحبًا يا {name}! ماذا سنتعلم اليوم؟");
  row("level", "Level: {level}", "Niveau : {level}", "Nivel: {level}", "Nível: {level}", "المستوى: {level}");
  row("continueLesson", "Continue", "Continuer", "Continuar", "Continuar", "متابعة");
  row("lessonFinished", "You've finished every lesson in this prototype!", "Vous avez terminé toutes les leçons de ce prototype !", "¡Has terminado todas las lecciones de este prototipo!", "Você concluiu todas as lições deste protótipo!", "لقد أنهيت جميع دروس هذه النسخة التجريبية!");
  row("videoTag", "🎬 Video", "🎬 Vidéo", "🎬 Vídeo", "🎬 Vídeo", "🎬 فيديو");
  row("activities", "{n} activities", "{n} activités", "{n} actividades", "{n} atividades", "{n} أنشطة");
  row("comingSoon", "Coming soon", "Bientôt disponible", "Próximamente", "Em breve", "قريبًا");
  row("moreLessons", "More lessons will be added from the admin dashboard", "D’autres leçons seront ajoutées depuis le tableau de bord", "Se añadirán más lecciones desde el panel de administración", "Mais lições serão adicionadas pelo painel administrativo", "ستُضاف دروس أخرى من لوحة الإدارة");
  row("unlockMsg", "Finish the lesson before to unlock this one", "Terminez la leçon précédente pour déverrouiller celle-ci", "Termina la lección anterior para desbloquear esta", "Conclua a lição anterior para desbloquear esta", "أكمل الدرس السابق لفتح هذا الدرس");
  row("check", "Check", "Vérifier", "Comprobar", "Conferir", "تحقق");
  row("tapPair", "Tap one on each side…", "Touchez un élément de chaque côté…", "Toca un elemento de cada lado…", "Toque em um item de cada lado…", "اضغط على عنصر من كل جانب…");
  row("spellOff", "Spell-check is switched off – no help from the keyboard!", "La correction orthographique est désactivée – le clavier ne vous aidera pas !", "La corrección ortográfica está desactivada: ¡el teclado no te ayudará!", "A correção ortográfica está desativada: o teclado não vai ajudar!", "التدقيق الإملائي متوقف — لن تساعدك لوحة المفاتيح!");
  row("typeHere", "Type here", "Écrivez ici", "Escribe aquí", "Digite aqui", "اكتب هنا");
  row("listen", "Listen", "Écouter", "Escuchar", "Ouvir", "استمع");
  row("slow", "Slow", "Lentement", "Despacio", "Devagar", "ببطء");
  row("readToMe", "Read to me", "Lis-moi le texte", "Léeme", "Leia para mim", "اقرأ لي");
  row("true", "True", "Vrai", "Verdadero", "Verdadeiro", "صحيح");
  row("false", "False", "Faux", "Falso", "Falso", "خطأ");
  row("nextPage", "Next page ›", "Page suivante ›", "Página siguiente ›", "Próxima página ›", "الصفحة التالية ›");
  row("great", "Great job!", "Bravo !", "¡Muy bien!", "Muito bem!", "أحسنت!");
  row("excellent", "Excellent!", "Excellent !", "¡Excelente!", "Excelente!", "ممتاز!");
  row("wellDone", "Well done!", "Bien joué !", "¡Bien hecho!", "Muito bem!", "أحسنت!");
  row("brilliant", "Brilliant!", "Formidable !", "¡Genial!", "Brilhante!", "رائع!");
  row("notQuite", "Not quite", "Pas tout à fait", "Casi", "Quase", "ليس تمامًا");
  row("correctAnswer", "Correct answer:", "Bonne réponse :", "Respuesta correcta:", "Resposta correta:", "الإجابة الصحيحة:");
  row("retryEnd", "We'll try this one again at the end.", "Nous réessaierons à la fin.", "Volveremos a intentarlo al final.", "Vamos tentar de novo no final.", "سنحاول هذا السؤال مرة أخرى في النهاية.");
  row("leaveConfirm", "Leave this lesson? Your answers in this lesson won't be saved.", "Quitter cette leçon ? Vos réponses ne seront pas enregistrées.", "¿Salir de la lección? Tus respuestas no se guardarán.", "Sair desta lição? Suas respostas não serão salvas.", "هل تريد مغادرة الدرس؟ لن تُحفظ إجاباتك.");
  row("greatAgain", "Not quite. Let's try again later.", "Pas tout à fait. Nous réessaierons plus tard.", "Casi. Lo intentaremos de nuevo más tarde.", "Quase. Vamos tentar de novo depois.", "ليس تمامًا. سنحاول مرة أخرى لاحقًا.");
  row("summaryTitle", "Lesson complete!", "Leçon terminée !", "¡Lección completada!", "Lição concluída!", "اكتمل الدرس!");
  row("firstTry", "first-try score", "résultat au premier essai", "resultado al primer intento", "resultado na primeira tentativa", "النتيجة من المحاولة الأولى");
  row("words", "words", "mots", "palabras", "palavras", "كلمات");
  row("minutes", "min", "min", "min", "min", "دقيقة");
  row("newBadge", "New badge!", "Nouveau badge !", "¡Insignia nueva!", "Novo emblema!", "شارة جديدة!");
  row("newBadges", "New badges!", "Nouveaux badges !", "¡Insignias nuevas!", "Novos emblemas!", "شارات جديدة!");
  row("practiceList", "Words to practise were added to your Review list:", "Les mots à réviser ont été ajoutés à votre liste :", "Las palabras para practicar se añadieron a tu lista de repaso:", "As palavras para praticar foram adicionadas à revisão:", "أُضيفت الكلمات التي تحتاج إلى تدريب إلى قائمة المراجعة:");
  row("home", "Home", "Accueil", "Inicio", "Início", "الرئيسية");
  row("myProgress", "My progress", "Mes progrès", "Mi progreso", "Meu progresso", "تقدمي");
  row("stars", "stars", "étoiles", "estrellas", "estrelas", "نجوم");
  row("lessonsDone", "lessons done", "leçons terminées", "lecciones completadas", "lições concluídas", "دروس مكتملة");
  row("dayStreak", "day streak", "jours de suite", "días seguidos", "dias seguidos", "أيام متتالية");
  row("wordsLearned", "words learned", "mots appris", "palabras aprendidas", "palavras aprendidas", "كلمات تعلمتها");
  row("accuracy", "accuracy", "précision", "precisión", "precisão", "الدقة");
  row("skills", "Skills", "Compétences", "Habilidades", "Habilidades", "المهارات");
  row("finishSkill", "Finish a lesson to see your skills.", "Terminez une leçon pour voir vos compétences.", "Completa una lección para ver tus habilidades.", "Conclua uma lição para ver suas habilidades.", "أكمل درسًا لرؤية مهاراتك.");
  row("badges", "Badges", "Badges", "Insignias", "Emblemas", "الشارات");
  row("recentLessons", "Recent lessons", "Leçons récentes", "Lecciones recientes", "Lições recentes", "الدروس الأخيرة");
  row("reviewTitle", "Review words", "Réviser les mots", "Repasar palabras", "Revisar palavras", "مراجعة الكلمات");
  row("reviewDesc", "Words you found tricky are saved here so you can practise them again.", "Les mots difficiles sont enregistrés ici pour que vous puissiez les réviser.", "Aquí guardamos las palabras difíciles para que puedas practicarlas.", "As palavras difíceis ficam salvas aqui para você praticar novamente.", "تُحفظ هنا الكلمات الصعبة لتتمكن من التدرب عليها مجددًا.");
  row("practise", "Practise {n} word", "Réviser {n} mot", "Practicar {n} palabra", "Praticar {n} palavra", "تدرّب على {n} كلمة");
  row("practisePlural", "Practise {n} words", "Réviser {n} mots", "Practicar {n} palabras", "Praticar {n} palavras", "تدرّب على {n} كلمات");
  row("emptyReview", "No words to review yet. Mistakes in spelling activities will appear here.", "Aucun mot à réviser pour l’instant. Les erreurs d’orthographe apparaîtront ici.", "Aún no hay palabras. Los errores de ortografía aparecerán aquí.", "Ainda não há palavras. Erros de ortografia aparecerão aqui.", "لا توجد كلمات للمراجعة بعد. ستظهر أخطاء التهجئة هنا.");
  row("grownups", "Grown-ups only", "Réservé aux adultes", "Solo adultos", "Somente adultos", "للبالغين فقط");
  row("gatePrompt", "To continue, answer this question.", "Pour continuer, répondez à cette question.", "Para continuar, responde esta pregunta.", "Para continuar, responda a esta pergunta.", "للمتابعة، أجب عن هذا السؤال.");
  row("notRight", "That's not right – try again", "Ce n’est pas juste – réessayez", "No es correcto; inténtalo de nuevo", "Não está certo — tente novamente", "إجابة غير صحيحة — حاول مرة أخرى");
  row("settings", "Settings", "Paramètres", "Ajustes", "Configurações", "الإعدادات");
  row("retakeQuiz", "Retake level quiz", "Refaire le test de niveau", "Repetir prueba de nivel", "Refazer o teste de nível", "إعادة اختبار المستوى");
  row("downloadData", "Download my data", "Télécharger mes données", "Descargar mis datos", "Baixar meus dados", "تنزيل بياناتي");
  row("deleteData", "Delete my account and data", "Supprimer mon compte et mes données", "Eliminar mi cuenta y mis datos", "Excluir minha conta e meus dados", "حذف حسابي وبياناتي");
  row("language", "Language", "Langue", "Idioma", "Idioma", "اللغة");
  row("voiceInMyLang", "Read instructions aloud in my language", "Lire les consignes à voix haute dans ma langue", "Leer las instrucciones en voz alta en mi idioma", "Ler as instruções em voz alta no meu idioma", "قراءة التعليمات بصوت عالٍ بلغتي");
  row("deleteConfirm", "Delete the account and ALL learning data on this device? This can't be undone.", "Supprimer le compte et TOUTES les données de cet appareil ? Cette action est irréversible.", "¿Eliminar la cuenta y TODOS los datos de aprendizaje? No se puede deshacer.", "Excluir a conta e TODOS os dados de aprendizagem? Isso não pode ser desfeito.", "هل تريد حذف الحساب وجميع بيانات التعلم من هذا الجهاز؟ لا يمكن التراجع عن ذلك.");
  row("allDeleted", "All data deleted", "Toutes les données ont été supprimées", "Se eliminaron todos los datos", "Todos os dados foram excluídos", "حُذفت جميع البيانات");
  row("noVoice", "No {lang} voice is available on this device.", "Aucune voix en {lang} n’est disponible sur cet appareil.", "No hay una voz en {lang} disponible en este dispositivo.", "Não há voz em {lang} disponível neste dispositivo.", "لا يتوفر صوت باللغة {lang} على هذا الجهاز.");
  row("noVoiceHelp", "No {lang} voice on this device, so audio stays in English. You can add one in the phone's text-to-speech settings.", "Aucune voix en {lang} sur cet appareil : le son reste en anglais. Vous pouvez en ajouter une dans les paramètres de synthèse vocale du téléphone.", "No hay voz en {lang} en este dispositivo, así que el audio sigue en inglés. Puedes añadir una en los ajustes de texto a voz del teléfono.", "Não há voz em {lang} neste dispositivo, por isso o áudio fica em inglês. Você pode adicionar uma nas configurações de texto para fala do telefone.", "لا يتوفر صوت باللغة {lang} على هذا الجهاز، لذلك يبقى الصوت بالإنجليزية. يمكنك إضافة صوت من إعدادات تحويل النص إلى كلام في الهاتف.");
  row("movie", "Movie time", "L’heure du cinéma", "¡Hora de película!", "Hora do filme", "حان وقت الفيلم");
  row("mathsWhiz", "Maths whiz", "As des maths", "Genio de las matemáticas", "Craque da matemática", "عبقري الرياضيات");
  row("firstBadge", "First lesson", "Première leçon", "Primera lección", "Primeira lição", "الدرس الأول");
  row("threeBadge", "3 lessons", "3 leçons", "3 lecciones", "3 lições", "٣ دروس");
  row("perfectBadge", "Perfect score", "Score parfait", "Puntuación perfecta", "Pontuação perfeita", "نتيجة مثالية");
  row("spellerBadge", "Spelling star", "As de l’orthographe", "Estrella de ortografía", "Estrela da ortografia", "نجم التهجئة");
  row("readerBadge", "Story time", "Heure du conte", "Hora del cuento", "Hora da história", "وقت القصة");
  row("streakBadge", "3-day streak", "Série de 3 jours", "Racha de 3 días", "Sequência de 3 dias", "سلسلة ٣ أيام");
  row("familyBadge", "Family words", "Mots de la famille", "Palabras de la familia", "Palavras da família", "كلمات العائلة");
  row("shopperBadge", "Smart shopper", "As des courses", "Comprador inteligente", "Comprador esperto", "متسوق ذكي");
  row("shapesBadge", "Shape spotter", "As des formes", "Experto en formas", "Especialista em formas", "خبير الأشكال");
  row("tenBadge", "10 lessons", "10 leçons", "10 lecciones", "10 lições", "١٠ دروس");
  row("watchEnd", "Watch to the end", "Regarder jusqu’à la fin", "Mira hasta el final", "Assista até o fim", "شاهد حتى النهاية");
  row("watchAgain", "Watch again", "Regarder encore", "Ver otra vez", "Assistir novamente", "شاهد مرة أخرى");
  row("play", "Play", "Lire", "Reproducir", "Reproduzir", "تشغيل");
  row("pause", "Pause", "Pause", "Pausa", "Pausar", "إيقاف مؤقت");
  row("speed", "1×", "1×", "1×", "1×", "١×");
  row("kidsEnglish", "Kids' English", "Anglais pour enfants", "Inglés para niños", "Inglês para crianças", "الإنجليزية للأطفال");
  row("academy", "English Academy", "Académie d’anglais", "Academia de inglés", "Academia de inglês", "أكاديمية الإنجليزية");
  row("spellingStudio", "Spelling Studio", "Atelier d’orthographe", "Taller de ortografía", "Estúdio de ortografia", "استوديو التهجئة");
  row("mathSectionDesc", "Counting, numbers and everyday maths.", "Compter, découvrir les nombres et faire des maths au quotidien.", "Conteo, números y matemáticas cotidianas.", "Contagem, números e matemática do dia a dia.", "العد والأرقام والرياضيات اليومية.");
  row("kidMaths", "Numbers", "Nombres", "Números", "Números", "الأعداد");
  row("fractions", "Fractions", "Fractions", "Fracciones", "Frações", "الكسور");
  row("toastAdded", "{name} added", "{name} ajouté·e", "{name} añadido", "{name} adicionada", "تمت إضافة {name}");
  row("yourProgress", "Hello {name}. Here's how your children are doing.", "Bonjour {name}. Voici les progrès de vos enfants.", "Hola, {name}. Así van tus hijos.", "Olá, {name}. Veja como seus filhos estão progredindo.", "مرحبًا {name}. إليك تقدم أطفالك.");
  row("noVoiceBrowser", "Audio isn't supported in this browser", "Le son n’est pas pris en charge par ce navigateur", "Este navegador no admite audio", "Este navegador não oferece suporte a áudio", "الصوت غير مدعوم في هذا المتصفح");
  row("aiPlanned", "The AI tutor is planned for a later phase", "Le tuteur IA est prévu pour une prochaine phase", "El tutor de IA está previsto para una fase futura", "O tutor de IA está previsto para uma fase futura", "من المخطط إضافة المدرّس الذكي في مرحلة لاحقة");
  row("tryAgain", "Try again", "Réessayer", "Intentarlo de nuevo", "Tentar novamente", "حاول مرة أخرى");
  row("spokenStars", "Well done! You got {n} star!", "Bravo ! Tu as gagné {n} étoile !", "¡Muy bien! ¡Has ganado {n} estrella!", "Muito bem! Você ganhou {n} estrela!", "أحسنت! حصلت على نجمة واحدة!");
  row("spokenStarsPlural", "Well done! You got {n} stars!", "Bravo ! Tu as gagné {n} étoiles !", "¡Muy bien! ¡Has ganado {n} estrellas!", "Muito bem! Você ganhou {n} estrelas!", "أحسنت! حصلت على {n} نجوم!");
  row("scene", "Scene", "Scène", "Escena", "Cena", "مشهد");
  row("truefalseTitle", "True or false?", "Vrai ou faux ?", "¿Verdadero o falso?", "Verdadeiro ou falso?", "صحيح أم خطأ؟");
  row("time", "time", "durée", "tiempo", "tempo", "الوقت");
  row("unitKids", "Kids", "Enfants", "Niños", "Crianças", "الأطفال");
  row("unitLearner", "13+", "13+", "13+", "13+", "13+");
  row("placementLevel", "Level quiz · question {n} of {total}", "Test de niveau · question {n} sur {total}", "Prueba de nivel · pregunta {n} de {total}", "Teste de nível · questão {n} de {total}", "اختبار المستوى · السؤال {n} من {total}");
  row("placementYourLevel", "Your level: {level}", "Votre niveau : {level}", "Tu nivel: {level}", "Seu nível: {level}", "مستواك: {level}");
  row("placementScore", "You got {score} of {total} right.", "Vous avez obtenu {score} bonnes réponses sur {total}.", "Acertaste {score} de {total}.", "Você acertou {score} de {total}.", "أجبت إجابة صحيحة عن {score} من {total}.");
  row("topHome", "Home", "Accueil", "Inicio", "Início", "الرئيسية");
  row("badgeFirst", "First lesson", "Première leçon", "Primera lección", "Primeira lição", "الدرس الأول");
  row("hello", "Hello,", "Bonjour,", "Hola,", "Olá,", "مرحبًا،");
  row("slogan", "“Words Open Worlds.”", "« Les mots ouvrent des mondes. »", "«Las palabras abren mundos.»", "“As palavras abrem mundos.”", "«الكلمات تفتح آفاقًا»");
  row("placementNote", "In this prototype only Beginner A1 lessons exist, so you'll start there. The full app will place you in the right unit.", "Dans ce prototype, seules les leçons Débutant A1 existent. L’application complète vous orientera vers la bonne unité.", "En este prototipo solo hay lecciones de Principiante A1. La aplicación completa te ubicará en la unidad adecuada.", "Neste protótipo, só existem lições de Iniciante A1. O aplicativo completo indicará a unidade certa.", "في هذه النسخة التجريبية توجد دروس المبتدئين A1 فقط. سيوجهك التطبيق الكامل إلى الوحدة المناسبة.");
  row("startLearning", "Start learning", "Commencer à apprendre", "Empezar a aprender", "Começar a aprender", "ابدأ التعلم");
  row("aiTutor", "AI English Tutor", "Tuteur d’anglais IA", "Tutor de inglés con IA", "Tutor de inglês com IA", "مدرّس الإنجليزية الذكي");
  row("aiTutorDesc", "Ask questions, get your writing corrected. Coming soon.", "Posez des questions et faites corriger vos textes. Bientôt disponible.", "Haz preguntas y corrige tus textos. Próximamente.", "Tire dúvidas e receba correções de textos. Em breve.", "اطرح الأسئلة واحصل على تصحيح كتابتك. قريبًا.");
  row("closeLesson", "Close lesson", "Quitter la leçon", "Cerrar lección", "Fechar lição", "إغلاق الدرس");
  row("story", "Story", "Histoire", "Cuento", "História", "قصة");
  row("lastActive", "last active {date}", "dernière activité : {date}", "última actividad: {date}", "última atividade: {date}", "آخر نشاط: {date}");
  row("never", "never", "jamais", "nunca", "nunca", "أبدًا");
  row("needsPractice", "Needs practice:", "À réviser :", "Necesita practicar:", "Precisa praticar:", "يحتاج إلى تدريب:");
  row("recent", "Recent:", "Récent :", "Reciente:", "Recente:", "الأحدث:");
  row("deleteProfile", "Delete {name}'s profile", "Supprimer le profil de {name}", "Eliminar el perfil de {name}", "Excluir o perfil de {name}", "حذف ملف {name}");
  row("deleteProfileConfirm", "Delete {name}'s profile and progress?", "Supprimer le profil et les progrès de {name} ?", "¿Eliminar el perfil y el progreso de {name}?", "Excluir o perfil e o progresso de {name}?", "هل تريد حذف ملف {name} وتقدمه؟");
  row("noChildProfiles", "No child profiles yet.", "Aucun profil d’enfant pour l’instant.", "Aún no hay perfiles de niños.", "Ainda não há perfis de crianças.", "لا توجد ملفات أطفال بعد.");
  row("addAnotherChild", "+ Add a child", "+ Ajouter un enfant", "+ Añadir un niño", "+ Adicionar criança", "+ إضافة طفل");
  row("privacyConsent", "Privacy & consent", "Confidentialité et consentement", "Privacidad y consentimiento", "Privacidade e consentimento", "الخصوصية والموافقة");
  row("consentGiven", "Consent given on {date} (policy version {version}). No ads, no chat, no tracking.", "Autorisation donnée le {date} (version {version}). Sans publicité, discussion ni suivi.", "Consentimiento otorgado el {date} (versión {version}). Sin anuncios, chat ni seguimiento.", "Consentimento dado em {date} (versão {version}). Sem anúncios, conversas ou rastreamento.", "تمت الموافقة في {date} (الإصدار {version}). بلا إعلانات أو محادثات أو تتبع.");
  row("downloadFamily", "Download my family's data", "Télécharger les données de ma famille", "Descargar los datos de mi familia", "Baixar os dados da minha família", "تنزيل بيانات عائلتي");
  row("deleteFamily", "Delete account and all data", "Supprimer le compte et toutes les données", "Eliminar la cuenta y todos los datos", "Excluir a conta e todos os dados", "حذف الحساب وجميع البيانات");
  row("schoolSystem", "School system", "Système scolaire", "Sistema educativo", "Sistema escolar", "النظام التعليمي");
  row("class", "Class", "Classe", "Clase", "Classe", "الصف");
  row("classLabel", "Class {n}", "Classe {n}", "Clase {n}", "Classe {n}", "الصف {n}");
  row("anglophone", "Anglophone", "Anglophone", "Anglófono", "Anglófono", "ناطق بالإنجليزية");
  row("francophone", "Francophone", "Francophone", "Francófono", "Francófono", "ناطق بالفرنسية");
  row("classSystem", "{className} · {systemName}", "{className} · {systemName}", "{className} · {systemName}", "{className} · {systemName}", "{className} · {systemName}");
  row("otherClasses", "Other classes", "Autres classes", "Otras clases", "Outras classes", "صفوف أخرى");
  row("subjectProgress", "Stars by subject", "Étoiles par matière", "Estrellas por asignatura", "Estrelas por matéria", "النجوم حسب المادة");
  row("noLessonsForClass", "No lessons are available for this class yet.", "Aucune leçon n’est encore disponible pour cette classe.", "Todavía no hay lecciones para esta clase.", "Ainda não há lições disponíveis para esta classe.", "لا تتوفر دروس لهذا الصف بعد.");
  row("curriculum", "Cameroon curriculum", "Programme scolaire du Cameroun", "Plan de estudios de Camerún", "Currículo dos Camarões", "منهج الكاميرون");
  row("lesson", "Lesson", "Leçon", "Lección", "Lição", "الدرس");
  row("subject_anglo_eng", "English Language", "Anglais", "Inglés", "Inglês", "اللغة الإنجليزية");
  row("subject_anglo_math", "Mathematics", "Mathématiques", "Matemáticas", "Matemática", "الرياضيات");
  row("subject_anglo_sci", "Science & Technology", "Sciences et technologie", "Ciencia y tecnología", "Ciências e tecnologia", "العلوم والتكنولوجيا");
  row("subject_anglo_soc", "Social Studies", "Sciences sociales", "Ciencias sociales", "Estudos sociais", "الدراسات الاجتماعية");
  row("subject_anglo_fre", "French", "Français", "Francés", "Francês", "اللغة الفرنسية");
  row("subject_franco_fra", "French Language", "Français", "Francés", "Francês", "اللغة الفرنسية");
  row("subject_franco_math", "Mathematics", "Mathématiques", "Matemáticas", "Matemática", "الرياضيات");
  row("subject_franco_sci", "Science and Technology", "Sciences et technologie", "Ciencia y tecnología", "Ciências e tecnologia", "العلوم والتكنولوجيا");
  row("subject_franco_shs", "Human and Social Sciences", "Sciences humaines et sociales", "Ciencias humanas y sociales", "Ciências humanas e sociais", "العلوم الإنسانية والاجتماعية");
  row("subject_franco_ang", "English Language", "Anglais (English)", "Inglés (English)", "Inglês (English)", "اللغة الإنجليزية");

  const translations = {
    "Kids' English": ["Anglais pour enfants", "Inglés para niños", "Inglês para crianças", "الإنجليزية للأطفال"],
    "Letters, sounds, words and stories for ages 5–12.": ["Lettres, sons, mots et histoires pour les 5–12 ans.", "Letras, sonidos, palabras e historias para niños de 5 a 12 años.", "Letras, sons, palavras e histórias para crianças de 5 a 12 anos.", "حروف وأصوات وكلمات وقصص للأطفال من 5 إلى 12 عامًا."],
    "Unit 1 · Letters & first words": ["Unité 1 · Lettres et premiers mots", "Unidad 1 · Letras y primeras palabras", "Unidade 1 · Letras e primeiras palavras", "الوحدة 1 · الحروف والكلمات الأولى"],
    "Unit 2 · My family": ["Unité 2 · Ma famille", "Unidad 2 · Mi familia", "Unidade 2 · Minha família", "الوحدة 2 · عائلتي"],
    "English Academy": ["Académie d’anglais", "Academia de inglés", "Academia de inglês", "أكاديمية الإنجليزية"],
    "Grammar, vocabulary, reading and listening for teens and adults.": ["Grammaire, vocabulaire, lecture et écoute pour adolescents et adultes.", "Gramática, vocabulario, lectura y comprensión auditiva para adolescentes y adultos.", "Gramática, vocabulário, leitura e compreensão oral para adolescentes e adultos.", "قواعد ومفردات وقراءة واستماع لليافعين والبالغين."],
    "Beginner A1 · Unit 1: Hello!": ["Débutant A1 · Unité 1 : Bonjour !", "Principiante A1 · Unidad 1: ¡Hola!", "Iniciante A1 · Unidade 1: Olá!", "مبتدئ A1 · الوحدة 1: مرحبًا!"],
    "Beginner A1 · Unit 2: Shopping": ["Débutant A1 · Unité 2 : Faire les courses", "Principiante A1 · Unidad 2: De compras", "Iniciante A1 · Unidade 2: Compras", "مبتدئ A1 · الوحدة 2: التسوق"],
    "Spelling Studio": ["Atelier d’orthographe", "Taller de ortografía", "Estúdio de ortografia", "استوديو التهجئة"],
    "Spelling rules, word building, dictation and tests.": ["Règles d’orthographe, construction de mots, dictées et tests.", "Reglas ortográficas, formación de palabras, dictados y pruebas.", "Regras ortográficas, formação de palavras, ditado e testes.", "قواعد التهجئة وبناء الكلمات والإملاء والاختبارات."],
    "Word list 1 · Tricky words": ["Liste 1 · Mots difficiles", "Lista 1 · Palabras difíciles", "Lista 1 · Palavras difíceis", "قائمة الكلمات 1 · كلمات صعبة"],
    "Word list 2 · Silent letters": ["Liste 2 · Lettres muettes", "Lista 2 · Letras mudas", "Lista 2 · Letras mudas", "قائمة الكلمات 2 · الحروف الصامتة"],
    "Counting, numbers and everyday maths.": ["Compter, découvrir les nombres et faire des maths au quotidien.", "Conteo, números y matemáticas cotidianas.", "Contagem, números e matemática do dia a dia.", "العد والأرقام والرياضيات اليومية."],
    "Maths": ["Maths", "Matemáticas", "Matemática", "الرياضيات"],
    "Numbers to 10": ["Les nombres jusqu’à 10", "Números hasta el 10", "Números até 10", "الأعداد حتى 10"],
    "Everyday maths · Fractions & percentages": ["Maths du quotidien · Fractions et pourcentages", "Matemáticas cotidianas · Fracciones y porcentajes", "Matemática do dia a dia · Frações e porcentagens", "رياضيات يومية · الكسور والنسب المئوية"],
    "Shapes & measuring": ["Formes et mesures", "Formas y medidas", "Formas e medidas", "الأشكال والقياس"],
    "Letters A, B, C": ["Les lettres A, B, C", "Letras A, B, C", "Letras A, B, C", "الحروف A وB وC"],
    "Animals & a story": ["Des animaux et une histoire", "Animales y un cuento", "Animais e uma história", "حيوانات وقصة"],
    "The verb “to be”": ["Le verbe « être »", "El verbo «to be»", "O verbo «to be»", "الفعل «to be»"],
    "Daily routines": ["Les habitudes quotidiennes", "Rutinas diarias", "Rotina diária", "الروتين اليومي"],
    "Tricky words": ["Mots difficiles", "Palabras difíciles", "Palavras difíceis", "كلمات صعبة"],
    "Spelling test 1": ["Test d’orthographe 1", "Prueba de ortografía 1", "Teste de ortografia 1", "اختبار التهجئة 1"],
    "Colours (video lesson)": ["Les couleurs (leçon vidéo)", "Colores (lección en vídeo)", "Cores (lição em vídeo)", "الألوان (درس بالفيديو)"],
    "Counting 1 to 10": ["Compter de 1 à 10", "Contar del 1 al 10", "Contar de 1 a 10", "العد من 1 إلى 10"],
    "Adding up to 10": ["Additionner jusqu’à 10", "Sumas hasta 10", "Adição até 10", "الجمع حتى 10"],
    "Fractions & percentages": ["Fractions et pourcentages", "Fracciones y porcentajes", "Frações e porcentagens", "الكسور والنسب المئوية"],
    "Spelling tip": ["Conseil d’orthographe", "Consejo de ortografía", "Dica de ortografia", "نصيحة للتهجئة"],
    "Grammar: to be": ["Grammaire : to be", "Gramática: to be", "Gramática: to be", "قواعد: to be"],
    "Present simple": ["Présent simple", "Presente simple", "Presente simples", "المضارع البسيط"],
    "Fractions and percentages": ["Fractions et pourcentages", "Fracciones y porcentajes", "Frações e porcentagens", "الكسور والنسب المئوية"],
    "three apples": ["trois pommes", "tres manzanas", "três maçãs", "ثلاث تفاحات"],
    "Meet A, B and C": ["Découvrons A, B et C", "Conozcamos A, B y C", "Vamos conhecer A, B e C", "هيا نتعرف على A وB وC"],
    "Colours": ["Les couleurs", "Los colores", "As cores", "الألوان"],
    "Adding apples": ["Additionner des pommes", "Sumamos manzanas", "Somando maçãs", "جمع التفاح"],
    "Hello! Let's meet A, B and C.": ["Bonjour ! Découvrons A, B et C.", "¡Hola! Conozcamos A, B y C.", "Olá! Vamos conhecer A, B e C.", "مرحبًا! هيا نتعرف على A وB وC."],
    "A is for apple.": ["A comme apple (pomme).", "A de apple (manzana).", "A de apple (maçã).", "A لكلمة apple (تفاحة)."],
    "B is for ball.": ["B comme ball (ballon).", "B de ball (pelota).", "B de ball (bola).", "B لكلمة ball (كرة)."],
    "C is for cat.": ["C comme cat (chat).", "C de cat (gato).", "C de cat (gato).", "C لكلمة cat (قطة)."],
    "Let's play with letters!": ["Jouons avec les lettres !", "¡Juguemos con las letras!", "Vamos brincar com as letras!", "هيا نلعب بالحروف!"],
    "This apple is red.": ["Cette pomme est rouge.", "Esta manzana es roja.", "Esta maçã é vermelha.", "هذه التفاحة حمراء."],
    "The sun is yellow.": ["Le soleil est jaune.", "El sol es amarillo.", "O sol é amarelo.", "الشمس صفراء."],
    "The sea is blue. A whale swims in the sea.": ["La mer est bleue. Une baleine nage dans la mer.", "El mar es azul. Una ballena nada en el mar.", "O mar é azul. Uma baleia nada no mar.", "البحر أزرق. يسبح حوت في البحر."],
    "The frog is green.": ["La grenouille est verte.", "La rana es verde.", "O sapo é verde.", "الضفدع أخضر."],
    "Look at the rainbow!": ["Regarde l’arc-en-ciel !", "¡Mira el arcoíris!", "Olhe o arco-íris!", "انظر إلى قوس قزح!"],
    "What colour is the frog? Green!": ["De quelle couleur est la grenouille ? Verte !", "¿De qué color es la rana? ¡Verde!", "Que cor é o sapo? Verde!", "ما لون الضفدع؟ أخضر!"],
    "Two apples plus one apple equals three apples.": ["Deux pommes plus une pomme, ça fait trois pommes.", "Dos manzanas más una manzana son tres manzanas.", "Duas maçãs mais uma maçã são três maçãs.", "تفاحتان زائد تفاحة واحدة تساوي ثلاث تفاحات."],
    "Two pears plus two pears equals four pears.": ["Deux poires plus deux poires, ça fait quatre poires.", "Dos peras más dos peras son cuatro peras.", "Duas peras mais duas peras são quatro peras.", "حبتا كمثرى زائد حبتا كمثرى تساوي أربع حبات."],
    "Three oranges plus one orange equals four oranges.": ["Trois oranges plus une orange, ça fait quatre oranges.", "Tres naranjas más una naranja son cuatro naranjas.", "Três laranjas mais uma laranja são quatro laranjas.", "ثلاث برتقالات زائد برتقالة تساوي أربع برتقالات."],
    "A is for apple": ["A comme apple (pomme)", "A de apple (manzana)", "A de apple (maçã)", "A لكلمة apple (تفاحة)"],
    "B is for ball": ["B comme ball (ballon)", "B de ball (pelota)", "B de ball (bola)", "B لكلمة ball (كرة)"],
    "C is for cat": ["C comme cat (chat)", "C de cat (gato)", "C de cat (gato)", "C لكلمة cat (قطة)"],
    "Tap the picture that starts with B.": ["Touche l’image qui commence par B.", "Toca la imagen que empieza por B.", "Toque na imagem que começa com B.", "اضغط على الصورة التي تبدأ بحرف B."],
    "Listen. Which one did you hear?": ["Écoute. Qu’as-tu entendu ?", "Escucha. ¿Cuál has oído?", "Ouça. Qual você ouviu?", "استمع. أي كلمة سمعتها؟"],
    "Match the letter to the picture.": ["Associe la lettre à l’image.", "Relaciona la letra con la imagen.", "Associe a letra à imagem.", "صِل الحرف بالصورة."],
    "Which letter is missing?": ["Quelle lettre manque ?", "¿Qué letra falta?", "Qual letra está faltando?", "ما الحرف الناقص؟"],
    "Build the word.": ["Construis le mot.", "Forma la palabra.", "Monte a palavra.", "كوّن الكلمة."],
    "Build the word you hear.": ["Construis le mot que tu entends.", "Forma la palabra que oyes.", "Monte a palavra que ouvir.", "كوّن الكلمة التي تسمعها."],
    "Grammar: to be": ["Grammaire : to be", "Gramática: to be", "Gramática: to be", "قواعد: to be"],
    "What is this?": ["Qu’est-ce que c’est ?", "¿Qué es esto?", "O que é isto?", "ما هذا؟"],
    "Sam the dog": ["Sam le chien", "Sam, el perro", "Sam, o cachorro", "سام الكلب"],
    "This is Sam. Sam is a little dog.": ["Voici Sam. Sam est un petit chien.", "Este es Sam. Sam es un perro pequeño.", "Este é Sam. Sam é um cachorrinho.", "هذا سام. سام كلب صغير."],
    "Sam sees a bird in the big tree.": ["Sam voit un oiseau dans le grand arbre.", "Sam ve un pájaro en el árbol grande.", "Sam vê um pássaro na árvore grande.", "يرى سام طائرًا في الشجرة الكبيرة."],
    "The bird sings. Sam is happy!": ["L’oiseau chante. Sam est content !", "El pájaro canta. ¡Sam está feliz!", "O pássaro canta. Sam está feliz!", "يغني الطائر. سام سعيد!"],
    "Who is Sam?": ["Qui est Sam ?", "¿Quién es Sam?", "Quem é Sam?", "من هو سام؟"],
    "She ___ a teacher.": ["Elle ___ enseignante.", "Ella ___ profesora.", "Ela ___ professora.", "هي ___ معلمة."],
    "They ___ from Cameroon.": ["Ils/Elles ___ du Cameroun.", "Ellos ___ de Camerún.", "Eles ___ de Camarões.", "هم ___ من الكاميرون."],
    "Put the words in order.": ["Mets les mots dans l’ordre.", "Ordena las palabras.", "Coloque as palavras em ordem.", "رتب الكلمات."],
    "“We is happy.” is correct English.": ["« We is happy. » est une phrase correcte en anglais.", "«We is happy» es una frase correcta en inglés.", "“We is happy.” está correto em inglês.", "جملة «We is happy.» صحيحة بالإنجليزية."],
    "We use “are” with we: “We are happy.”": ["On utilise « are » avec « we » : « We are happy. »", "Usamos «are» con «we»: «We are happy».", "Usamos “are” com “we”: “We are happy.”", "نستخدم «are» مع «we»: «We are happy.»"],
    "Listen. Where is Ada from?": ["Écoute. D’où vient Ada ?", "Escucha. ¿De dónde es Ada?", "Ouça. De onde Ada é?", "استمع. من أين أدا؟"],
    "Listen and type what you hear.": ["Écoute et écris ce que tu entends.", "Escucha y escribe lo que oyes.", "Ouça e digite o que ouvir.", "استمع واكتب ما تسمعه."],
    "He ___ breakfast at 7.": ["Il ___ son petit-déjeuner à 7 h.", "Él ___ el desayuno a las 7.", "Ele ___ o café da manhã às 7.", "هو ___ الإفطار الساعة 7."],
    "Match the meal to the time.": ["Associe le repas au moment de la journée.", "Relaciona la comida con la hora.", "Associe a refeição ao horário.", "صِل الوجبة بالوقت المناسب."],
    "We ___ football on Saturdays.": ["Nous ___ au football le samedi.", "Nosotros ___ al fútbol los sábados.", "Nós ___ futebol aos sábados.", "نحن ___ كرة القدم أيام السبت."],
    "“He go to work by taxi.” is correct English.": ["« He go to work by taxi. » est une phrase correcte en anglais.", "«He go to work by taxi» es correcto en inglés.", "“He go to work by taxi.” está correto em inglês.", "جملة «He go to work by taxi.» صحيحة بالإنجليزية."],
    "With he/she/it, add -s: “He goes to work by taxi.”": ["Avec he/she/it, ajoute -s : « He goes to work by taxi. »", "Con he/she/it, añade -s: «He goes to work by taxi».", "Com he/she/it, acrescente -s: “He goes to work by taxi.”", "مع he/she/it نضيف -s: «He goes to work by taxi.»"],
    "Listen and spell the word.": ["Écoute et épelle le mot.", "Escucha y deletrea la palabra.", "Ouça e soletre a palavra.", "استمع وتهجّ الكلمة."],
    "Which spelling is correct?": ["Quelle orthographe est correcte ?", "¿Qué escritura es correcta?", "Qual grafia está correta?", "أي تهجئة صحيحة؟"],
    "Spell the word you hear.": ["Épelle le mot que tu entends.", "Deletrea la palabra que oyes.", "Soletre a palavra que ouvir.", "تهجّ الكلمة التي تسمعها."],
    "Which one is yellow?": ["Lequel est jaune ?", "¿Cuál es amarillo?", "Qual é amarelo?", "أيها أصفر؟"],
    "Listen. Which colour did you hear?": ["Écoute. Quelle couleur as-tu entendue ?", "Escucha. ¿Qué color has oído?", "Ouça. Qual cor você ouviu?", "استمع. ما اللون الذي سمعته؟"],
    "Match the colour word to the picture.": ["Associe le nom de la couleur à l’image.", "Relaciona el color con la imagen.", "Associe a cor à imagem.", "صِل اسم اللون بالصورة."],
    "How many stars?": ["Combien d’étoiles ?", "¿Cuántas estrellas?", "Quantas estrelas?", "كم عدد النجوم؟"],
    "Listen. Which number did you hear?": ["Écoute. Quel nombre as-tu entendu ?", "Escucha. ¿Qué número has oído?", "Ouça. Qual número você ouviu?", "استمع. ما الرقم الذي سمعته؟"],
    "Match the number to the word.": ["Associe le nombre au mot.", "Relaciona el número con la palabra.", "Associe o número à palavra.", "صِل الرقم بالكلمة."],
    "Count the balls.": ["Compte les ballons.", "Cuenta las pelotas.", "Conte as bolas.", "عُدّ الكرات."],
    "How many apples? 🍎🍎 + 🍎🍎 = ?": ["Combien de pommes ? 🍎🍎 + 🍎🍎 = ?", "¿Cuántas manzanas? 🍎🍎 + 🍎🍎 = ?", "Quantas maçãs? 🍎🍎 + 🍎🍎 = ?", "كم تفاحة؟ 🍎🍎 + 🍎🍎 = ?"],
    "3 + 4 = ?": ["3 + 4 = ?", "3 + 4 = ?", "3 + 4 = ?", "3 + 4 = ?"],
    "How many fish altogether?": ["Combien de poissons en tout ?", "¿Cuántos peces hay en total?", "Quantos peixes há ao todo?", "كم سمكة في المجموع؟"],
    "5 + 5 = 10": ["5 + 5 = 10", "5 + 5 = 10", "5 + 5 = 10", "5 + 5 = 10"],
    "Listen. Which answer did you hear?": ["Écoute. Quelle réponse as-tu entendue ?", "Escucha. ¿Qué respuesta has oído?", "Ouça. Qual resposta você ouviu?", "استمع. ما الإجابة التي سمعتها؟"],
    "What is ¼ of 20?": ["Combien font ¼ de 20 ?", "¿Cuánto es ¼ de 20?", "Quanto é ¼ de 20?", "كم يساوي ربع 20؟"],
    "25% of 80 = ?": ["25 % de 80 = ?", "¿25 % de 80 = ?", "25% de 80 = ?", "٢٥٪ من ٨٠ = ؟"],
    "0.5 is the same as 50%.": ["0,5 équivaut à 50 %.", "0,5 equivale al 50 %.", "0,5 é igual a 50%.", "0.5 تساوي 50٪."],
    "A shirt costs 10,000 XAF. It is 20% off. What is the new price?": ["Un vêtement coûte 10 000 XAF. Il est soldé à -20 %. Quel est son nouveau prix ?", "Una camisa cuesta 10.000 XAF y tiene un 20 % de descuento. ¿Cuál es el nuevo precio?", "Uma camisa custa 10.000 XAF e tem 20% de desconto. Qual é o novo preço?", "ثمن قميص 10,000 فرنك أفريقي. عليه خصم 20٪. ما السعر الجديد؟"],
    "Half of 150 = ?": ["La moitié de 150 = ?", "¿La mitad de 150 = ?", "Metade de 150 = ?", "نصف 150 = ؟"],
    "I ___ a student.": ["Je ___ étudiant·e.", "Yo ___ estudiante.", "Eu ___ estudante.", "أنا ___ طالب."],
    "She ___ to school every day.": ["Elle ___ à l’école tous les jours.", "Ella ___ a la escuela todos los días.", "Ela ___ à escola todos os dias.", "هي ___ إلى المدرسة كل يوم."],
    "Yesterday we ___ football.": ["Hier, nous ___ au football.", "Ayer ___ al fútbol.", "Ontem, nós ___ futebol.", "أمس، ___ كرة القدم."],
    "If it rains, I ___ stay at home.": ["S’il pleut, je ___ rester à la maison.", "Si llueve, ___ quedarme en casa.", "Se chover, eu ___ ficar em casa.", "إذا أمطرت، ___ أن أبقى في المنزل."],
    "I have lived here ___ 2015.": ["J’habite ici ___ 2015.", "Vivo aquí ___ 2015.", "Moro aqui ___ 2015.", "أعيش هنا ___ 2015."],
    "Unit 3 · Food & fruit": ["Unité 3 · Nourriture et fruits", "Unidad 3 · Comida y fruta", "Unidade 3 · Comida e frutas", "الوحدة 3 · الطعام والفواكه"],
    "Elementary A2 · Unit 3: The past": ["Élémentaire A2 · Unité 3 : Le passé", "Elemental A2 · Unidad 3: El pasado", "Elementar A2 · Unidade 3: O passado", "المستوى A2 · الوحدة 3: الماضي"],
    "Elementary A2 · Unit 4: Travel & directions": ["Élémentaire A2 · Unité 4 : Voyages et directions", "Elemental A2 · Unidad 4: Viajes y direcciones", "Elementar A2 · Unidade 4: Viagens e direções", "المستوى A2 · الوحدة 4: السفر والاتجاهات"],
    "Word list 3 · Plurals (-s, -es, -ies)": ["Liste 3 · Le pluriel (-s, -es, -ies)", "Lista 3 · Plurales (-s, -es, -ies)", "Lista 3 · Plurais (-s, -es, -ies)", "قائمة الكلمات 3 · الجمع (-s و-es و-ies)"],
    "Shapes": ["Formes", "Formas", "Formas", "الأشكال"],
    "Measuring & time": ["Mesures et heure", "Medidas y tiempo", "Medidas e tempo", "القياس والوقت"],
    "Letters D, E, F": ["Les lettres D, E, F", "Letras D, E, F", "Letras D, E, F", "الحروف D وE وF"],
    "My family": ["Ma famille", "Mi familia", "Minha família", "عائلتي"],
    "My body (video lesson)": ["Mon corps (leçon vidéo)", "Mi cuerpo (lección en vídeo)", "Meu corpo (lição em vídeo)", "جسمي (درس بالفيديو)"],
    "Numbers & prices": ["Nombres et prix", "Números y precios", "Números e preços", "الأعداد والأسعار"],
    "At the market": ["Au marché", "En el mercado", "No mercado", "في السوق"],
    "Yesterday (past simple)": ["Hier (passé simple)", "Ayer (pasado simple)", "Ontem (passado simples)", "الأمس (الماضي البسيط)"],
    "Silent letters": ["Lettres muettes", "Letras mudas", "Letras mudas", "الحروف الصامتة"],
    "Spelling test 2": ["Test d’orthographe 2", "Prueba de ortografía 2", "Teste de ortografia 2", "اختبار التهجئة 2"],
    "Taking away (up to 10)": ["Soustraire (jusqu’à 10)", "Restar (hasta 10)", "Subtração (até 10)", "الطرح (حتى 10)"],
    "Money & change": ["Argent et monnaie", "Dinero y cambio", "Dinheiro e troco", "المال والباقي"],
    "Meet D, E and F": ["Découvrons D, E et F", "Conozcamos D, E y F", "Vamos conhecer D, E e F", "هيا نتعرف على D وE وF"],
    "Ama's family": ["La famille d’Ama", "La familia de Ama", "A família de Ama", "عائلة آما"],
    "Touch your head!": ["Touche ta tête !", "¡Tócate la cabeza!", "Toque na sua cabeça!", "المس رأسك!"],
    "Numbers and prices": ["Nombres et prix", "Números y precios", "Números e preços", "الأعداد والأسعار"],
    "Ask the price": ["Demander le prix", "Preguntar el precio", "Perguntar o preço", "اسأل عن السعر"],
    "Useful market phrases": ["Phrases utiles au marché", "Frases útiles para el mercado", "Frases úteis para o mercado", "عبارات مفيدة في السوق"],
    "The past simple": ["Le passé simple", "El pasado simple", "O passado simples", "الماضي البسيط"],
    "Test instructions": ["Consignes du test", "Instrucciones de la prueba", "Instruções do teste", "تعليمات الاختبار"],
    "Birds fly away": ["Les oiseaux s’envolent", "Los pájaros se van volando", "Os pássaros voam para longe", "تطير الطيور بعيدًا"],
    "Circle and square": ["Cercle et carré", "Círculo y cuadrado", "Círculo e quadrado", "دائرة ومربع"],
    "Triangle and rectangle": ["Triangle et rectangle", "Triángulo y rectángulo", "Triângulo e retângulo", "مثلث ومستطيل"],
    "Money in Cameroon": ["L’argent au Cameroun", "El dinero en Camerún", "Dinheiro nos Camarões", "المال في الكاميرون"],
    "D is for dog.": ["D comme dog (chien).", "D de dog (perro).", "D de dog (cachorro).", "D لكلمة dog (كلب)."],
    "E is for egg.": ["E comme egg (œuf).", "E de egg (huevo).", "E de egg (ovo).", "E لكلمة egg (بيضة)."],
    "F is for fish.": ["F comme fish (poisson).", "F de fish (pez).", "F de fish (peixe).", "F لكلمة fish (سمكة)."],
    "Tap the picture that starts with E.": ["Touche l’image dont le mot commence par E.", "Toca la imagen cuya palabra empieza por E.", "Toque na imagem cuja palavra começa com E.", "المس الصورة التي تبدأ كلمتها بحرف E."],
    "Who lives with Ama in Douala?": ["Qui vit avec Ama à Douala ?", "¿Quién vive con Ama en Douala?", "Quem mora com Ama em Douala?", "من يعيش مع آما في دوالا؟"],
    "Listen. Who is in Ama's family?": ["Écoute. Qui fait partie de la famille d’Ama ?", "Escucha. ¿Quién forma parte de la familia de Ama?", "Ouça. Quem faz parte da família de Ama?", "استمع. من أفراد عائلة آما؟"],
    "This is Ama. She lives in Douala with her family.": ["Voici Ama. Elle vit à Douala avec sa famille.", "Esta es Ama. Vive en Douala con su familia.", "Esta é Ama. Ela mora em Douala com a família.", "هذه آما. تعيش في دوالا مع عائلتها."],
    "Her mother is called Ngozi. Her father is called Paul.": ["Sa mère s’appelle Ngozi. Son père s’appelle Paul.", "Su madre se llama Ngozi. Su padre se llama Paul.", "A mãe dela se chama Ngozi. O pai dela se chama Paul.", "اسم أمها نغوزي واسم أبيها بول."],
    "Ama has a sister and a baby brother.": ["Ama a une sœur et un petit frère.", "Ama tiene una hermana y un hermano pequeño.", "Ama tem uma irmã e um irmãozinho.", "لدى آما أخت وأخ صغير."],
    "They eat together and smile.": ["Ils mangent ensemble et sourient.", "Comen juntos y sonríen.", "Eles comem juntos e sorriem.", "يأكلون معًا ويبتسمون."],
    "Which body part do you use to smell?": ["Quelle partie du corps utilises-tu pour sentir ?", "¿Qué parte del cuerpo usas para oler?", "Que parte do corpo você usa para sentir cheiros?", "أي جزء من جسمك تستخدمه للشم؟"],
    "Touch your head. Which body part is it?": ["Touche ta tête. De quelle partie du corps s’agit-il ?", "Tócate la cabeza. ¿Qué parte del cuerpo es?", "Toque na cabeça. Que parte do corpo é?", "المس رأسك. ما هذا الجزء من الجسم؟"],
    "Listen. Which word did you hear?": ["Écoute. Quel mot as-tu entendu ?", "Escucha. ¿Qué palabra has oído?", "Ouça. Qual palavra você ouviu?", "استمع. ما الكلمة التي سمعتها؟"],
    "Match the body word to the picture.": ["Associe le mot du corps à l’image.", "Relaciona la parte del cuerpo con la imagen.", "Associe a parte do corpo à imagem.", "صِل كلمة الجزء من الجسم بالصورة."],
    "Hello! Let's meet D, E and F.": ["Bonjour ! Découvrons D, E et F.", "¡Hola! Conozcamos D, E y F.", "Olá! Vamos conhecer D, E e F.", "مرحبًا! هيا نتعرف على D وE وF."],
    "Let's say D, E and F!": ["Disons D, E et F !", "¡Digamos D, E y F!", "Vamos dizer D, E e F!", "هيا نقول D وE وF!"],
    "Point to your eyes!": ["Montre tes yeux !", "¡Señala tus ojos!", "Aponte para os seus olhos!", "أشر إلى عينيك!"],
    "Touch your nose!": ["Touche ton nez !", "¡Tócate la nariz!", "Toque no seu nariz!", "المس أنفك!"],
    "Point to your mouth!": ["Montre ta bouche !", "¡Señala tu boca!", "Aponte para a sua boca!", "أشر إلى فمك!"],
    "Wave your hands!": ["Agite tes mains !", "¡Mueve las manos!", "Acene com as mãos!", "لوّح بيديك!"],
    "Head, eyes, nose, mouth and hands!": ["La tête, les yeux, le nez, la bouche et les mains !", "¡Cabeza, ojos, nariz, boca y manos!", "Cabeça, olhos, nariz, boca e mãos!", "الرأس والعينان والأنف والفم واليدان!"],
    "How much does the bag cost?": ["Combien coûte le sac ?", "¿Cuánto cuesta la bolsa?", "Quanto custa a bolsa?", "كم ثمن الحقيبة؟"],
    "Which number is one thousand?": ["Quel nombre correspond à mille ?", "¿Qué número es mil?", "Qual número é mil?", "أي رقم يساوي ألفًا؟"],
    "Match the numeral to the words.": ["Associe le chiffre aux mots.", "Relaciona la cifra con las palabras.", "Associe o numeral às palavras.", "صِل الرقم بالكلمات."],
    "Listen. How much does it cost?": ["Écoute. Combien ça coûte ?", "Escucha. ¿Cuánto cuesta?", "Ouça. Quanto custa?", "استمع. كم ثمنه؟"],
    "Listen and type the price in words.": ["Écoute et écris le prix en toutes lettres.", "Escucha y escribe el precio con palabras.", "Ouça e escreva o preço por extenso.", "استمع واكتب السعر بالكلمات."],
    "Write one thousand as a numeral.": ["Écris mille en chiffres.", "Escribe mil con cifras.", "Escreva mil em algarismos.", "اكتب ألفًا بالأرقام."],
    "100 = one hundred francs.": ["100 = cent francs.", "100 = cien francos.", "100 = cem francos.", "100 = مئة فرنك."],
    "500 = five hundred francs.": ["500 = cinq cents francs.", "500 = quinientos francos.", "500 = quinhentos francos.", "500 = خمسمئة فرنك."],
    "1,000 = one thousand francs.": ["1 000 = mille francs.", "1.000 = mil francos.", "1.000 = mil francos.", "1,000 = ألف فرنك."],
    "10,000 = ten thousand francs.": ["10 000 = dix mille francs.", "10.000 = diez mil francos.", "10.000 = dez mil francos.", "10,000 = عشرة آلاف فرنك."],
    "How much is it?": ["Combien ça coûte ?", "¿Cuánto cuesta?", "Quanto custa?", "كم ثمنه؟"],
    "It costs 500 francs.": ["Ça coûte 500 francs.", "Cuesta 500 francos.", "Custa 500 francos.", "ثمنه 500 فرنك."],
    "The bag costs 10,000 francs.": ["Le sac coûte 10 000 francs.", "La bolsa cuesta 10.000 francos.", "A bolsa custa 10.000 francos.", "ثمن الحقيبة 10,000 فرنك."],
    "Two mangoes cost 500 francs each. How much are they?": ["Deux mangues coûtent 500 francs chacune. Combien coûtent-elles ?", "Dos mangos cuestan 500 francos cada uno. ¿Cuánto cuestan?", "Duas mangas custam 500 francos cada. Quanto custam?", "ثمن حبتَي مانجو 500 فرنك لكل واحدة. كم ثمنهما؟"],
    "Listen to the customer. What would she like?": ["Écoute la cliente. Que voudrait-elle ?", "Escucha a la clienta. ¿Qué quiere?", "Ouça a cliente. O que ela gostaria?", "استمع إلى الزبونة. ماذا تريد؟"],
    "___ tomatoes are fresh.": ["___ tomates sont frais.", "___ tomates están frescos.", "___ tomates estão frescos.", "___ طماطم طازجة."],
    "“These tomato is fresh.” is correct English.": ["« These tomato is fresh. » est une phrase correcte en anglais.", "«These tomato is fresh» es una frase correcta en inglés.", "“These tomato is fresh.” está correto em inglês.", "جملة «These tomato is fresh.» صحيحة بالإنجليزية."],
    "Use “these” with a plural noun: “These tomatoes are fresh.”": ["Utilise « these » avec un nom au pluriel : « These tomatoes are fresh. »", "Usa «these» con un sustantivo plural: «These tomatoes are fresh».", "Use “these” com um substantivo no plural: “These tomatoes are fresh.”", "استخدم «these» مع الاسم الجمع: «These tomatoes are fresh.»"],
    "How can I politely ask for one orange?": ["Comment demander poliment une orange ?", "¿Cómo puedo pedir una naranja con cortesía?", "Como posso pedir uma laranja com educação?", "كيف أطلب برتقالة بأدب؟"],
    "I'd like some oranges, please.": ["Je voudrais des oranges, s’il vous plaît.", "Quisiera unas naranjas, por favor.", "Eu gostaria de algumas laranjas, por favor.", "أود بعض البرتقال من فضلك."],
    "Can I have two tomatoes?": ["Puis-je avoir deux tomates ?", "¿Me da dos tomates?", "Posso levar dois tomates?", "هل يمكنني أخذ حبتَي طماطم؟"],
    "How much are the tomatoes?": ["Combien coûtent les tomates ?", "¿Cuánto cuestan los tomates?", "Quanto custam os tomates?", "كم ثمن الطماطم؟"],
    "Use this for one thing and these for more than one.": ["Utilise « this » pour une chose et « these » pour plusieurs.", "Usa «this» para una cosa y «these» para más de una.", "Use “this” para uma coisa e “these” para mais de uma.", "استخدم «this» لشيء واحد و«these» لأكثر من شيء."],
    "Yesterday, Paul ___ football in Buea.": ["Hier, Paul ___ au football à Buea.", "Ayer, Paul ___ al fútbol en Buea.", "Ontem, Paul ___ futebol em Buea.", "أمس، ___ بول كرة القدم في بويا."],
    "Ngozi ___ to Yaoundé yesterday.": ["Ngozi ___ à Yaoundé hier.", "Ngozi ___ a Yaundé ayer.", "Ngozi ___ a Yaoundé ontem.", "___ نغوزي إلى ياوندي أمس."],
    "Yesterday, Ama ate a mango.": ["Hier, Ama a mangé une mangue.", "Ayer, Ama comió un mango.", "Ontem, Ama comeu uma manga.", "أكلت آما مانجو أمس."],
    "Regular verbs: play → played; watch → watched.": ["Verbes réguliers : play → played ; watch → watched.", "Verbos regulares: play → played; watch → watched.", "Verbos regulares: play → played; watch → watched.", "الأفعال المنتظمة: play ← played؛ watch ← watched."],
    "Some verbs change: go → went; have → had; see → saw; eat → ate.": ["Certains verbes changent : go → went ; have → had ; see → saw ; eat → ate.", "Algunos verbos cambian: go → went; have → had; see → saw; eat → ate.", "Alguns verbos mudam: go → went; have → had; see → saw; eat → ate.", "تتغير بعض الأفعال: go ← went؛ have ← had؛ see ← saw؛ eat ← ate."],
    "Yesterday, Paul ___ lunch before school.": ["Hier, Paul ___ le déjeuner avant l’école.", "Ayer, Paul ___ antes de ir a la escuela.", "Ontem, Paul ___ antes da escola.", "أمس، ___ بول الغداء قبل المدرسة."],
    "Listen and spell the past tense of “see.”": ["Écoute et écris le passé de « see ».", "Escucha y escribe el pasado de «see».", "Ouça e escreva o passado de “see”.", "استمع واكتب صيغة الماضي من «see»."],
    "“I goed to the market yesterday.” is correct English.": ["« I goed to the market yesterday. » est une phrase correcte en anglais.", "«I goed to the market yesterday» es una frase correcta en inglés.", "“I goed to the market yesterday.” está correto em inglês.", "جملة «I goed to the market yesterday.» صحيحة بالإنجليزية."],
    "“Goed” is wrong. The past simple of “go” is “went.”": ["« Goed » est incorrect. Le passé simple de « go » est « went ».", "«Goed» es incorrecto. El pasado simple de «go» es «went».", "“Goed” está errado. O passado simples de “go” é “went.”", "«Goed» خطأ. الماضي البسيط من «go» هو «went»."],
    "The k is silent in knife.": ["Le k est muet dans knife.", "La k es muda en knife.", "O k é mudo em knife.", "حرف k صامت في كلمة knife."],
    "The w is silent in write.": ["Le w est muet dans write.", "La w es muda en write.", "O w é mudo em write.", "حرف w صامت في كلمة write."],
    "The b is silent in lamb.": ["Le b est muet dans lamb.", "La b es muda en lamb.", "O b é mudo em lamb.", "حرف b صامت في كلمة lamb."],
    "The h is silent in hour.": ["Le h est muet dans hour.", "La h es muda en hour.", "O h é mudo em hour.", "حرف h صامت في كلمة hour."],
    "The s is silent in island.": ["Le s est muet dans island.", "La s es muda en island.", "O s é mudo em island.", "حرف s صامت في كلمة island."],
    "Which letter is silent in lamb?": ["Quelle lettre est muette dans lamb ?", "¿Qué letra es muda en lamb?", "Qual letra é muda em lamb?", "أي حرف صامت في كلمة lamb؟"],
    "Listen carefully and spell each silent-letter word.": ["Écoute attentivement et épelle chaque mot avec une lettre muette.", "Escucha con atención y deletrea cada palabra con una letra muda.", "Ouça com atenção e soletre cada palavra com uma letra muda.", "استمع جيدًا وتهجَّ كل كلمة فيها حرف صامت."],
    "Five birds sit on a branch.": ["Cinq oiseaux sont posés sur une branche.", "Cinco pájaros están posados en una rama.", "Cinco pássaros estão pousados em um galho.", "تقف خمسة طيور على غصن."],
    "Two birds fly away.": ["Deux oiseaux s’envolent.", "Dos pájaros se van volando.", "Dois pássaros voam para longe.", "يطير طائران بعيدًا."],
    "Three birds are left.": ["Il reste trois oiseaux.", "Quedan tres pájaros.", "Restam três pássaros.", "تبقى ثلاثة طيور."],
    "5 - 2 = ?": ["5 − 2 = ?", "5 − 2 = ?", "5 − 2 = ?", "٥ − ٢ = ؟"],
    "8 - 3 = ?": ["8 − 3 = ?", "8 − 3 = ?", "8 − 3 = ?", "٨ − ٣ = ؟"],
    "There are 9 oranges. 4 are eaten. How many are left?": ["Il y a 9 oranges. On en mange 4. Combien en reste-t-il ?", "Hay 9 naranjas. Se comen 4. ¿Cuántas quedan?", "Há 9 laranjas. 4 são comidas. Quantas restam?", "هناك 9 برتقالات. أُكلت 4. كم بقي؟"],
    "7 - 3 = 5": ["7 − 3 = 5", "7 − 3 = 5", "7 − 3 = 5", "٧ − ٣ = ٥"],
    "7 minus 3 equals 4.": ["7 moins 3 égale 4.", "7 menos 3 es igual a 4.", "7 menos 3 é igual a 4.", "٧ ناقص ٣ يساوي ٤."],
    "Listen. How many birds are left?": ["Écoute. Combien reste-t-il d’oiseaux ?", "Escucha. ¿Cuántos pájaros quedan?", "Ouça. Quantos pássaros restam?", "استمع. كم طائرًا بقي؟"],
    "A circle is round.": ["Un cercle est rond.", "Un círculo es redondo.", "Um círculo é redondo.", "الدائرة مستديرة."],
    "A square has four equal sides.": ["Un carré a quatre côtés égaux.", "Un cuadrado tiene cuatro lados iguales.", "Um quadrado tem quatro lados iguais.", "للمربع أربعة أضلاع متساوية."],
    "A triangle has three sides.": ["Un triangle a trois côtés.", "Un triángulo tiene tres lados.", "Um triângulo tem três lados.", "للمثلث ثلاثة أضلاع."],
    "A rectangle has four sides.": ["Un rectangle a quatre côtés.", "Un rectángulo tiene cuatro lados.", "Um retângulo tem quatro lados.", "للمستطيل أربعة أضلاع."],
    "Which shape has three sides?": ["Quelle forme a trois côtés ?", "¿Qué forma tiene tres lados?", "Qual forma tem três lados?", "أي شكل له ثلاثة أضلاع؟"],
    "Which shape has no corners?": ["Quelle forme n’a pas de coins ?", "¿Qué forma no tiene esquinas?", "Qual forma não tem cantos?", "أي شكل ليس له زوايا؟"],
    "Match the shape to the picture.": ["Associe la forme à l’image.", "Relaciona la forma con la imagen.", "Associe a forma à imagem.", "صِل الشكل بالصورة."],
    "How many sides does a triangle have?": ["Combien de côtés a un triangle ?", "¿Cuántos lados tiene un triángulo?", "Quantos lados tem um triângulo?", "كم ضلعًا للمثلث؟"],
    "How many sides does a rectangle have?": ["Combien de côtés a un rectangle ?", "¿Cuántos lados tiene un rectángulo?", "Quantos lados tem um retângulo?", "كم ضلعًا للمستطيل؟"],
    "Prices in this lesson are in XAF (CFA francs).": ["Les prix de cette leçon sont en XAF (francs CFA).", "Los precios de esta lección están en XAF (francos CFA).", "Os preços desta lição estão em XAF (francos CFA).", "الأسعار في هذا الدرس بوحدة XAF (فرنك سيفا)."],
    "Add prices to find the total.": ["Additionne les prix pour trouver le total.", "Suma los precios para obtener el total.", "Some os preços para encontrar o total.", "اجمع الأسعار لإيجاد المجموع."],
    "A bag of rice costs 4,500 XAF. A bottle of oil costs 1,500 XAF. What is the total?": ["Un sac de riz coûte 4 500 XAF. Une bouteille d’huile coûte 1 500 XAF. Quel est le total ?", "Un saco de arroz cuesta 4.500 XAF. Una botella de aceite cuesta 1.500 XAF. ¿Cuál es el total?", "Um saco de arroz custa 4.500 XAF. Uma garrafa de óleo custa 1.500 XAF. Qual é o total?", "ثمن كيس الأرز 4,500 XAF وثمن زجاجة الزيت 1,500 XAF. ما المجموع؟"],
    "A book costs 2,000 XAF. How much do 3 books cost?": ["Un livre coûte 2 000 XAF. Combien coûtent 3 livres ?", "Un libro cuesta 2.000 XAF. ¿Cuánto cuestan 3 libros?", "Um livro custa 2.000 XAF. Quanto custam 3 livros?", "ثمن كتاب 2,000 XAF. كم ثمن 3 كتب؟"],
    "You buy things for 6,750 XAF and pay 10,000 XAF. How much change do you get?": ["Tu achètes pour 6 750 XAF et tu paies 10 000 XAF. Combien te rend-on ?", "Compras por 6.750 XAF y pagas 10.000 XAF. ¿Cuánto te devuelven?", "Você compra itens por 6.750 XAF e paga 10.000 XAF. Quanto recebe de troco?", "اشتريت أشياء بـ6,750 XAF ودفعت 10,000 XAF. كم سيُعاد إليك؟"],
    "A taxi ride costs 1,500 XAF. What do 4 rides cost?": ["Un trajet en taxi coûte 1 500 XAF. Combien coûtent 4 trajets ?", "Un viaje en taxi cuesta 1.500 XAF. ¿Cuánto cuestan 4 viajes?", "Uma corrida de táxi custa 1.500 XAF. Quanto custam 4 corridas?", "تكلفة رحلة التاكسي 1,500 XAF. كم تكلفة 4 رحلات؟"],
    "Fruit costs 2,500 XAF and bread costs 1,000 XAF. What is the total?": ["Les fruits coûtent 2 500 XAF et le pain coûte 1 000 XAF. Quel est le total ?", "La fruta cuesta 2.500 XAF y el pan cuesta 1.000 XAF. ¿Cuál es el total?", "As frutas custam 2.500 XAF e o pão custa 1.000 XAF. Qual é o total?", "ثمن الفاكهة 2,500 XAF وثمن الخبز 1,000 XAF. ما المجموع؟"],
    "A shirt costs 8,000 XAF. It is 25% off. What is the sale price?": ["Un vêtement coûte 8 000 XAF. Il bénéficie d’une réduction de 25 %. Quel est son prix soldé ?", "Una camisa cuesta 8.000 XAF. Tiene un 25 % de descuento. ¿Cuál es el precio rebajado?", "Uma camisa custa 8.000 XAF. Ela tem 25% de desconto. Qual é o preço com desconto?", "ثمن قميص 8,000 XAF وعليه خصم 25٪. ما سعره بعد الخصم؟"],
    "mother": ["mère", "madre", "mãe", "أم"],
    "father": ["père", "padre", "pai", "أب"],
    "sister": ["sœur", "hermana", "irmã", "أخت"],
    "brother": ["frère", "hermano", "irmão", "أخ"],
    "baby": ["bébé", "bebé", "bebê", "رضيع"]
  };
  Object.assign(translations, {
    "Elementary A2 · Unit 3: The past": ["Élémentaire A2 · Unité 3 : Le passé", "Elemental A2 · Unidad 3: El pasado", "Elementar A2 · Unidade 3: O passado", "المستوى A2 · الوحدة 3: الماضي"],
    "Elementary A2 · Unit 4: Travel & directions": ["Élémentaire A2 · Unité 4 : Voyages et directions", "Elemental A2 · Unidad 4: Viajes y direcciones", "Elementar A2 · Unidade 4: Viagens e direções", "المستوى A2 · الوحدة 4: السفر والاتجاهات"],
    "Word list 2 · Silent letters": ["Liste 2 · Lettres muettes", "Lista 2 · Letras mudas", "Lista 2 · Letras mudas", "قائمة الكلمات 2 · الحروف الصامتة"],
    "Word list 3 · Plurals (-s, -es, -ies)": ["Liste 3 · Le pluriel (-s, -es, -ies)", "Lista 3 · Plurales (-s, -es, -ies)", "Lista 3 · Plurais (-s, -es, -ies)", "قائمة الكلمات 3 · صيغ الجمع (-s و-es و-ies)"],
    "Measuring & time": ["Mesures et heure", "Medidas y hora", "Medidas e horas", "القياس والوقت"],
    "Shapes": ["Formes", "Formas", "Formas", "الأشكال"],
    "Short-vowel words": ["Mots avec voyelles brèves", "Palabras con vocales cortas", "Palavras com vogais curtas", "كلمات بحركات قصيرة"],
    "Nouns and verbs": ["Noms et verbes", "Sustantivos y verbos", "Substantivos e verbos", "الأسماء والأفعال"],
    "Past tense and reading": ["Passé et lecture", "Pasado y lectura", "Passado e leitura", "الماضي والقراءة"],
    "Adjectives and punctuation": ["Adjectifs et ponctuation", "Adjetivos y puntuación", "Adjetivos e pontuação", "الصفات وعلامات الترقيم"],
    "Tenses and reading practice": ["Temps verbaux et lecture", "Tiempos verbales y lectura", "Tempos verbais e leitura", "الأزمنة والتدرب على القراءة"],
    "Numbers to 100: tens and ones": ["Nombres jusqu’à 100 : dizaines et unités", "Números hasta 100: decenas y unidades", "Números até 100: dezenas e unidades", "الأعداد حتى 100: العشرات والآحاد"],
    "Multiplication as groups": ["La multiplication en groupes", "La multiplicación como grupos", "Multiplicação em grupos", "الضرب في مجموعات"],
    "Multiplication and division": ["Multiplication et division", "Multiplicación y división", "Multiplicação e divisão", "الضرب والقسمة"],
    "Fractions and decimals": ["Fractions et nombres décimaux", "Fracciones y decimales", "Frações e decimais", "الكسور والأعداد العشرية"],
    "Percentages, area and perimeter": ["Pourcentages, aire et périmètre", "Porcentajes, área y perímetro", "Porcentagens, área e perímetro", "النسب المئوية والمساحة والمحيط"],
    "Plants and animals": ["Plantes et animaux", "Plantas y animales", "Plantas e animais", "النباتات والحيوانات"],
    "Our senses and healthy food": ["Nos sens et une alimentation saine", "Nuestros sentidos y la alimentación saludable", "Nossos sentidos e alimentação saudável", "حواسنا والطعام الصحي"],
    "Water and its states": ["L’eau et ses états", "El agua y sus estados", "A água e seus estados", "الماء وحالاته"],
    "Hygiene and preventing malaria": ["Hygiène et prévention du paludisme", "Higiene y prevención de la malaria", "Higiene e prevenção da malária", "النظافة والوقاية من الملاريا"],
    "Energy and simple machines": ["Énergie et machines simples", "Energía y máquinas simples", "Energia e máquinas simples", "الطاقة والآلات البسيطة"],
    "My school and my family": ["Mon école et ma famille", "Mi escuela y mi familia", "Minha escola e minha família", "مدرستي وعائلتي"],
    "Community helpers": ["Les personnes qui aident la communauté", "Personas que ayudan a la comunidad", "Pessoas que ajudam a comunidade", "مساعدو المجتمع"],
    "Directions and simple maps": ["Directions et cartes simples", "Direcciones y mapas sencillos", "Direções e mapas simples", "الاتجاهات والخرائط البسيطة"],
    "Cameroon: regions and capital": ["Cameroun : régions et capitale", "Camerún: regiones y capital", "Camarões: regiões e capital", "الكاميرون: الأقاليم والعاصمة"],
    "National symbols, rights and duties": ["Symboles nationaux, droits et devoirs", "Símbolos nacionales, derechos y deberes", "Símbolos nacionais, direitos e deveres", "الرموز الوطنية والحقوق والواجبات"],
    "Cameroon: history and government": ["Cameroun : histoire et gouvernement", "Camerún: historia y gobierno", "Camarões: história e governo", "الكاميرون: التاريخ والحكومة"],
    "Bonjour: greetings": ["Bonjour : les salutations", "Bonjour: saludos", "Bonjour: cumprimentos", "Bonjour: التحيات"],
    "French colours and numbers": ["Couleurs et nombres en français", "Colores y números en francés", "Cores e números em francês", "الألوان والأعداد بالفرنسية"],
    "Classroom objects": ["Objets de la classe", "Objetos del aula", "Objetos da sala de aula", "أدوات الصف"],
    "À l'école: classroom objects": ["À l’école : les objets de la classe", "En la escuela: objetos del aula", "Na escola: objetos da sala de aula", "في المدرسة: أدوات الصف"],
    "être and avoir": ["Être et avoir", "Être y avoir", "Être e avoir", "être وavoir"],
    "Être and avoir in the present": ["Être et avoir au présent", "Être y avoir en presente", "Être e avoir no presente", "être وavoir في المضارع"],
    "Hello: greetings": ["Bonjour : les salutations", "Hola: saludos", "Olá: cumprimentos", "مرحبًا: التحيات"],
    "Numbers 1 to 20": ["Nombres de 1 à 20", "Números del 1 al 20", "Números de 1 a 20", "الأعداد من 1 إلى 20"],
    "My family": ["Ma famille", "Mi familia", "Minha família", "عائلتي"],
    "At school": ["À l’école", "En la escuela", "Na escola", "في المدرسة"],
    "The simple present": ["Le présent simple", "El presente simple", "O presente simples", "المضارع البسيط"],
    "Key idea": ["Idée clé", "Idea clave", "Ideia principal", "الفكرة الأساسية"],
    "Match each word with its meaning.": ["Associe chaque mot à sa signification.", "Relaciona cada palabra con su significado.", "Associe cada palavra ao seu significado.", "صِل كل كلمة بمعناها."],
    "Listen and spell the word.": ["Écoute et écris le mot.", "Escucha y escribe la palabra.", "Ouça e soletre a palavra.", "استمع واكتب الكلمة."]
  });
  Object.assign(translations, {
    "The vowels a, e, i, o and u can make short sounds.": ["Les voyelles a, e, i, o et u peuvent avoir un son bref.", "Las vocales a, e, i, o y u pueden tener un sonido corto.", "As vogais a, e, i, o e u podem ter um som curto.", "يمكن أن تُنطق الحروف المتحركة a وe وi وo وu بأصوات قصيرة."],
    "Which word has the short a sound?": ["Quel mot contient le son bref de a ?", "¿Qué palabra tiene el sonido corto de la a?", "Qual palavra tem o som curto de a?", "أي كلمة فيها صوت a القصير؟"],
    "Cat begins with the short a sound.": ["Cat commence par le son bref de a.", "Cat empieza con el sonido corto de la a.", "Cat começa com o som curto de a.", "تبدأ كلمة Cat بصوت a القصير."],
    "Pen has the short e sound.": ["Pen contient le son bref de e.", "Pen tiene el sonido corto de la e.", "Pen tem o som curto de e.", "تحتوي كلمة Pen على صوت e القصير."],
    "Pig has the short i sound.": ["Pig contient le son bref de i.", "Pig tiene el sonido corto de la i.", "Pig tem o som curto de i.", "تحتوي كلمة Pig على صوت i القصير."],
    "A noun names a person, place, animal or thing.": ["Un nom désigne une personne, un lieu, un animal ou une chose.", "Un sustantivo nombra a una persona, un lugar, un animal o una cosa.", "Um substantivo dá nome a uma pessoa, lugar, animal ou coisa.", "الاسم يدل على شخص أو مكان أو حيوان أو شيء."],
    "Which word is a verb?": ["Quel mot est un verbe ?", "¿Qué palabra es un verbo?", "Qual palavra é um verbo?", "أي كلمة فعل؟"],
    "A verb can show an action.": ["Un verbe peut exprimer une action.", "Un verbo puede expresar una acción.", "Um verbo pode indicar uma ação.", "يمكن أن يدل الفعل على حركة."],
    "Run is an action word, so it is a verb.": ["Run exprime une action, c’est donc un verbe.", "Run expresa una acción, por eso es un verbo.", "Run indica uma ação, por isso é um verbo.", "كلمة Run تدل على فعل، لذلك فهي فعل."],
    "Yesterday, Paul played football and watched the sunset.": ["Hier, Paul a joué au football et a regardé le coucher du soleil.", "Ayer, Paul jugó al fútbol y contempló la puesta de sol.", "Ontem, Paul jogou futebol e viu o pôr do sol.", "لعب بول كرة القدم وشاهد غروب الشمس أمس."],
    "What did Paul do yesterday?": ["Qu’a fait Paul hier ?", "¿Qué hizo Paul ayer?", "O que Paul fez ontem?", "ماذا فعل بول أمس؟"],
    "Many regular verbs add -ed in the past.": ["De nombreux verbes réguliers prennent -ed au passé.", "Muchos verbos regulares añaden -ed en pasado.", "Muitos verbos regulares recebem -ed no passado.", "تُضاف اللاحقة -ed إلى كثير من الأفعال المنتظمة في الماضي."],
    "Played and watched are past forms of regular verbs.": ["Played et watched sont des formes passées de verbes réguliers.", "Played y watched son formas pasadas de verbos regulares.", "Played e watched são formas passadas de verbos regulares.", "كلمتا Played وwatched صيغتان ماضيتان لفعلين منتظمين."],
    "Yesterday, Paul played football in Buea.": ["Hier, Paul a joué au football à Buea.", "Ayer, Paul jugó al fútbol en Buea.", "Ontem, Paul jogou futebol em Buea.", "لعب بول كرة القدم في بويا أمس."],
    "After the game, he watched the sunset.": ["Après le match, il a regardé le coucher du soleil.", "Después del partido, contempló la puesta de sol.", "Depois do jogo, ele viu o pôr do sol.", "شاهد غروب الشمس بعد المباراة."],
    "He went home and had dinner with his family.": ["Il est rentré et a dîné avec sa famille.", "Volvió a casa y cenó con su familia.", "Ele foi para casa e jantou com a família.", "عاد إلى البيت وتناول العشاء مع عائلته."],
    "An adjective describes a person, place, animal or thing.": ["Un adjectif décrit une personne, un lieu, un animal ou une chose.", "Un adjetivo describe a una persona, un lugar, un animal o una cosa.", "Um adjetivo descreve uma pessoa, lugar, animal ou coisa.", "تصف الصفة شخصًا أو مكانًا أو حيوانًا أو شيئًا."],
    "Which word is an adjective?": ["Quel mot est un adjectif ?", "¿Qué palabra es un adjetivo?", "Qual palavra é um adjetivo?", "أي كلمة صفة؟"],
    "A sentence begins with a capital letter and ends with punctuation.": ["Une phrase commence par une majuscule et se termine par un signe de ponctuation.", "Una oración empieza con mayúscula y termina con un signo de puntuación.", "Uma frase começa com letra maiúscula e termina com um sinal de pontuação.", "تبدأ الجملة بحرف كبير وتنتهي بعلامة ترقيم."],
    "A capital letter starts a sentence; a full stop, question mark or exclamation mark can end it.": ["Une phrase commence par une majuscule et peut finir par un point, un point d’interrogation ou d’exclamation.", "Una oración empieza con mayúscula y puede terminar con punto, interrogación o exclamación.", "Uma frase começa com maiúscula e pode terminar com ponto, interrogação ou exclamação.", "تبدأ الجملة بحرف كبير، وقد تنتهي بنقطة أو علامة استفهام أو تعجب."],
    "Ngozi usually reads, visited her aunt yesterday and will return tomorrow.": ["Ngozi lit habituellement, a rendu visite à sa tante hier et reviendra demain.", "Ngozi suele leer, visitó a su tía ayer y volverá mañana.", "Ngozi costuma ler, visitou a tia ontem e voltará amanhã.", "تقرأ نغوزي عادةً، وزارت خالتها أمس، وستعود غدًا."],
    "When did Ngozi visit Yaoundé?": ["Quand Ngozi a-t-elle visité Yaoundé ?", "¿Cuándo visitó Ngozi Yaundé?", "Quando Ngozi visitou Yaoundé?", "متى زارت نغوزي ياوندي؟"],
    "“Tomorrow” can tell us about the future.": ["« Tomorrow » peut indiquer le futur.", "«Tomorrow» puede indicar el futuro.", "“Tomorrow” pode indicar o futuro.", "كلمة “Tomorrow” قد تدل على المستقبل."],
    "Tomorrow means a day after today, so it points to the future.": ["Tomorrow signifie le jour après aujourd’hui et indique donc le futur.", "Tomorrow significa el día después de hoy, así que señala el futuro.", "Tomorrow significa o dia depois de hoje, por isso indica o futuro.", "تعني Tomorrow اليوم التالي، ولذلك تشير إلى المستقبل."],
    "Ngozi usually reads after school.": ["Ngozi lit habituellement après l’école.", "Ngozi suele leer después de la escuela.", "Ngozi costuma ler depois da escola.", "تقرأ نغوزي عادةً بعد المدرسة."],
    "Yesterday, she visited her aunt in Yaoundé.": ["Hier, elle a rendu visite à sa tante à Yaoundé.", "Ayer, visitó a su tía en Yaundé.", "Ontem, ela visitou a tia em Yaoundé.", "زارت خالتها في ياوندي أمس."],
    "Tomorrow, she will return to class.": ["Demain, elle retournera en classe.", "Mañana volverá a clase.", "Amanhã, ela voltará à aula.", "ستعود إلى الصف غدًا."],
    "In 47, the 4 means four tens and the 7 means seven ones.": ["Dans 47, le 4 représente quatre dizaines et le 7 représente sept unités.", "En 47, el 4 representa cuatro decenas y el 7, siete unidades.", "Em 47, o 4 representa quatro dezenas e o 7, sete unidades.", "في العدد 47، يمثل الرقم 4 أربع عشرات والرقم 7 سبع آحاد."],
    "How many tens are in 47?": ["Combien y a-t-il de dizaines dans 47 ?", "¿Cuántas decenas hay en 47?", "Quantas dezenas há em 47?", "كم عشرة في العدد 47؟"],
    "The number 35 has 3 tens and 5 ones.": ["Le nombre 35 contient 3 dizaines et 5 unités.", "El número 35 tiene 3 decenas y 5 unidades.", "O número 35 tem 3 dezenas e 5 unidades.", "يتكون العدد 35 من 3 عشرات و5 آحاد."],
    "The 3 is in the tens place and the 5 is in the ones place.": ["Le 3 est au rang des dizaines et le 5 à celui des unités.", "El 3 está en la posición de las decenas y el 5 en la de las unidades.", "O 3 está na casa das dezenas e o 5 na casa das unidades.", "يقع الرقم 3 في منزلة العشرات والرقم 5 في منزلة الآحاد."],
    "How many ones are in 63?": ["Combien y a-t-il d’unités dans 63 ?", "¿Cuántas unidades hay en 63?", "Quantas unidades há em 63?", "كم آحاد في العدد 63؟"],
    "Three groups of five make 15: 3 × 5 = 15.": ["Trois groupes de cinq font 15 : 3 × 5 = 15.", "Tres grupos de cinco suman 15: 3 × 5 = 15.", "Três grupos de cinco dão 15: 3 × 5 = 15.", "ثلاث مجموعات من خمسة تساوي 15: 3 × 5 = 15."],
    "What is 4 × 2?": ["Combien font 4 × 2 ?", "¿Cuánto es 4 × 2?", "Quanto é 4 × 2?", "كم يساوي 4 × 2؟"],
    "Multiplication can show equal groups.": ["La multiplication peut représenter des groupes égaux.", "La multiplicación puede representar grupos iguales.", "A multiplicação pode representar grupos iguais.", "يمكن أن يمثل الضرب مجموعات متساوية."],
    "Adding the same number in equal groups is multiplication.": ["Additionner plusieurs groupes égaux revient à multiplier.", "Sumar grupos iguales equivale a multiplicar.", "Somar grupos iguais é uma forma de multiplicar.", "جمع مجموعات متساوية هو عملية ضرب."],
    "5 groups of 2 make how many?": ["Combien font 5 groupes de 2 ?", "¿Cuánto suman 5 grupos de 2?", "Quanto dão 5 grupos de 2?", "كم يساوي 5 مجموعات من 2؟"],
    "Division shares a number into equal groups.": ["La division répartit un nombre en groupes égaux.", "La división reparte un número en grupos iguales.", "A divisão reparte um número em grupos iguais.", "تقسم القسمة العدد إلى مجموعات متساوية."],
    "24 oranges are shared equally among 4 baskets. How many are in each basket?": ["On répartit 24 oranges également dans 4 paniers. Combien y en a-t-il par panier ?", "Se reparten 24 naranjas por igual en 4 cestas. ¿Cuántas hay en cada cesta?", "24 laranjas são divididas igualmente em 4 cestos. Quantas ficam em cada cesto?", "وُزعت 24 برتقالة بالتساوي على 4 سلال. كم برتقالة في كل سلة؟"],
    "If 12 mangoes are shared among 3 children, each gets 4.": ["Si 12 mangues sont partagées entre 3 enfants, chacun en reçoit 4.", "Si se reparten 12 mangos entre 3 niños, cada uno recibe 4.", "Se 12 mangas forem divididas entre 3 crianças, cada uma recebe 4.", "إذا قُسمت 12 مانجو على 3 أطفال، يحصل كل طفل على 4."],
    "12 divided by 3 equals 4.": ["12 divisé par 3 égale 4.", "12 dividido entre 3 es igual a 4.", "12 dividido por 3 é igual a 4.", "12 مقسومًا على 3 يساوي 4."],
    "36 ÷ 6 = ?": ["36 ÷ 6 = ?", "¿36 ÷ 6 = ?", "36 ÷ 6 = ?", "٣٦ ÷ ٦ = ؟"],
    "One half is 0.5, and one quarter is 0.25.": ["Un demi vaut 0,5 et un quart vaut 0,25.", "Un medio es 0,5 y un cuarto es 0,25.", "Um meio é 0,5 e um quarto é 0,25.", "النصف يساوي 0.5 والربع يساوي 0.25."],
    "Which decimal is the same as one half?": ["Quel nombre décimal équivaut à un demi ?", "¿Qué decimal equivale a un medio?", "Qual decimal equivale a um meio?", "أي عدد عشري يساوي النصف؟"],
    "0.25 is the same as one quarter.": ["0,25 équivaut à un quart.", "0,25 equivale a un cuarto.", "0,25 equivale a um quarto.", "0.25 يساوي الربع."],
    "One quarter written as a decimal is 0.25.": ["Un quart s’écrit 0,25 en nombre décimal.", "Un cuarto se escribe 0,25 en forma decimal.", "Um quarto é escrito como 0,25 em decimal.", "يُكتب الربع بالصيغة العشرية 0.25."],
    "What is ½ of 18?": ["Combien font ½ de 18 ?", "¿Cuánto es ½ de 18?", "Quanto é ½ de 18?", "كم يساوي نصف 18؟"],
    "A rectangle 5 units long and 3 units wide has area 15 square units.": ["Un rectangle de 5 unités sur 3 a une aire de 15 unités carrées.", "Un rectángulo de 5 por 3 unidades tiene un área de 15 unidades cuadradas.", "Um retângulo de 5 por 3 unidades tem área de 15 unidades quadradas.", "مساحة مستطيل طوله 5 وحدات وعرضه 3 هي 15 وحدة مربعة."],
    "What is the perimeter of a 5 by 3 rectangle?": ["Quel est le périmètre d’un rectangle de 5 sur 3 ?", "¿Cuál es el perímetro de un rectángulo de 5 por 3?", "Qual é o perímetro de um retângulo de 5 por 3?", "ما محيط مستطيل أبعاده 5 في 3؟"],
    "The perimeter of a 5 by 3 rectangle is 16 units.": ["Le périmètre d’un rectangle de 5 sur 3 est de 16 unités.", "El perímetro de un rectángulo de 5 por 3 es de 16 unidades.", "O perímetro de um retângulo de 5 por 3 é de 16 unidades.", "محيط مستطيل أبعاده 5 في 3 يساوي 16 وحدة."],
    "Add all sides: 5 + 3 + 5 + 3 = 16.": ["Additionne tous les côtés : 5 + 3 + 5 + 3 = 16.", "Suma todos los lados: 5 + 3 + 5 + 3 = 16.", "Some todos os lados: 5 + 3 + 5 + 3 = 16.", "اجمع جميع الأضلاع: 5 + 3 + 5 + 3 = 16."],
    "What is 10% of 200?": ["Combien font 10 % de 200 ?", "¿Cuánto es el 10 % de 200?", "Quanto é 10% de 200?", "كم يساوي 10٪ من 200؟"],
    "Plants grow, and animals need food and water.": ["Les plantes grandissent et les animaux ont besoin de nourriture et d’eau.", "Las plantas crecen y los animales necesitan alimento y agua.", "As plantas crescem e os animais precisam de comida e água.", "تنمو النباتات وتحتاج الحيوانات إلى الطعام والماء."],
    "What do plants need to grow?": ["De quoi les plantes ont-elles besoin pour pousser ?", "¿Qué necesitan las plantas para crecer?", "Do que as plantas precisam para crescer?", "ماذا تحتاج النباتات لتنمو؟"],
    "Animals need food and water to live.": ["Les animaux ont besoin de nourriture et d’eau pour vivre.", "Los animales necesitan alimento y agua para vivir.", "Os animais precisam de comida e água para viver.", "تحتاج الحيوانات إلى الطعام والماء لتعيش."],
    "Food and water help animals stay alive and grow.": ["La nourriture et l’eau aident les animaux à vivre et à grandir.", "El alimento y el agua ayudan a los animales a vivir y crecer.", "A comida e a água ajudam os animais a viver e crescer.", "يساعد الطعام والماء الحيوانات على البقاء والنمو."],
    "A small plant grows toward the light.": ["Une petite plante pousse en direction de la lumière.", "Una planta pequeña crece hacia la luz.", "Uma plantinha cresce em direção à luz.", "تنمو نبتة صغيرة نحو الضوء."],
    "Rain gives plants water.": ["La pluie apporte de l’eau aux plantes.", "La lluvia da agua a las plantas.", "A chuva fornece água às plantas.", "يوفر المطر الماء للنباتات."],
    "Animals need food and water too.": ["Les animaux ont aussi besoin de nourriture et d’eau.", "Los animales también necesitan alimento y agua.", "Os animais também precisam de comida e água.", "تحتاج الحيوانات أيضًا إلى الطعام والماء."],
    "Our senses help us notice the world around us.": ["Nos sens nous aident à percevoir le monde qui nous entoure.", "Nuestros sentidos nos ayudan a percibir el mundo que nos rodea.", "Nossos sentidos ajudam a perceber o mundo ao nosso redor.", "تساعدنا حواسنا على إدراك العالم من حولنا."],
    "Which sense helps you hear a song?": ["Quel sens te permet d’entendre une chanson ?", "¿Qué sentido te permite oír una canción?", "Qual sentido ajuda você a ouvir uma música?", "أي حاسة تساعدك على سماع أغنية؟"],
    "Fruit and vegetables can be part of healthy meals.": ["Les fruits et les légumes peuvent faire partie de repas équilibrés.", "Las frutas y verduras pueden formar parte de comidas saludables.", "Frutas e legumes podem fazer parte de refeições saudáveis.", "يمكن أن تكون الفاكهة والخضروات جزءًا من وجبات صحية."],
    "Eating a variety of foods helps us get different nutrients.": ["Manger des aliments variés nous apporte différents nutriments.", "Comer alimentos variados nos aporta distintos nutrientes.", "Comer alimentos variados nos fornece diferentes nutrientes.", "يساعدنا تناول أطعمة متنوعة على الحصول على مغذيات مختلفة."],
    "Water can be a liquid, ice can be a solid, and water vapour is a gas.": ["L’eau peut être liquide, la glace solide et la vapeur d’eau gazeuse.", "El agua puede ser líquida, el hielo sólido y el vapor de agua gaseoso.", "A água pode ser líquida, o gelo sólido e o vapor de água gasoso.", "قد يكون الماء سائلاً والثلج صلبًا وبخار الماء غازًا."],
    "What is frozen water called?": ["Comment appelle-t-on l’eau gelée ?", "¿Cómo se llama el agua congelada?", "Como se chama a água congelada?", "ماذا نسمي الماء المتجمد؟"],
    "Ice is water in a solid state.": ["La glace est de l’eau à l’état solide.", "El hielo es agua en estado sólido.", "O gelo é água no estado sólido.", "الثلج ماء في الحالة الصلبة."],
    "When water freezes, it becomes solid ice.": ["Quand l’eau gèle, elle devient de la glace solide.", "Cuando el agua se congela, se convierte en hielo sólido.", "Quando a água congela, transforma-se em gelo sólido.", "عندما يتجمد الماء يصبح ثلجًا صلبًا."],
    "A mosquito net and removing stagnant water help prevent mosquito bites.": ["Une moustiquaire et l’élimination de l’eau stagnante aident à éviter les piqûres de moustiques.", "Una mosquitera y eliminar el agua estancada ayudan a prevenir las picaduras de mosquito.", "Uma mosquiteira e a remoção de água parada ajudam a evitar picadas de mosquitos.", "تساعد الناموسية وإزالة المياه الراكدة على الوقاية من لدغات البعوض."],
    "What can help protect you from mosquito bites at night?": ["Qu’est-ce qui peut te protéger des piqûres de moustiques la nuit ?", "¿Qué puede protegerte de las picaduras de mosquito por la noche?", "O que pode proteger você das picadas de mosquito à noite?", "ما الذي يساعد على حمايتك من لدغات البعوض ليلًا؟"],
    "Removing stagnant water can help prevent mosquitoes from breeding.": ["Éliminer l’eau stagnante peut empêcher les moustiques de se reproduire.", "Eliminar el agua estancada puede evitar que los mosquitos se reproduzcan.", "Remover a água parada pode impedir a reprodução dos mosquitos.", "قد تساعد إزالة المياه الراكدة على منع تكاثر البعوض."],
    "Mosquitoes can breed in stagnant water, so remove it where possible.": ["Les moustiques peuvent se reproduire dans l’eau stagnante ; élimine-la si possible.", "Los mosquitos pueden reproducirse en agua estancada; elimínala cuando sea posible.", "Os mosquitos podem se reproduzir em água parada; remova-a sempre que possível.", "قد يتكاثر البعوض في المياه الراكدة، لذا أزلها متى أمكن."],
    "A lever and a wheel can make some jobs easier.": ["Un levier et une roue peuvent faciliter certains travaux.", "Una palanca y una rueda pueden facilitar algunas tareas.", "Uma alavanca e uma roda podem facilitar alguns trabalhos.", "يمكن أن تجعل الرافعة والعجلة بعض الأعمال أسهل."],
    "Which simple machine helps a wheelbarrow move?": ["Quelle machine simple aide une brouette à avancer ?", "¿Qué máquina simple ayuda a mover una carretilla?", "Que máquina simples ajuda a mover um carrinho de mão?", "أي آلة بسيطة تساعد عربة اليد على الحركة؟"],
    "A simple machine can help us do work.": ["Une machine simple peut nous aider à effectuer un travail.", "Una máquina simple puede ayudarnos a realizar un trabajo.", "Uma máquina simples pode ajudar a realizar um trabalho.", "يمكن أن تساعدنا الآلة البسيطة على إنجاز العمل."],
    "Simple machines change how a force is used.": ["Les machines simples modifient la façon dont une force est utilisée.", "Las máquinas simples cambian la forma de usar una fuerza.", "As máquinas simples mudam a forma como uma força é usada.", "تغير الآلات البسيطة طريقة استخدام القوة."],
    "A family cares for one another, and a school is a place to learn.": ["Les membres d’une famille prennent soin les uns des autres, et l’école est un lieu d’apprentissage.", "Una familia se cuida y la escuela es un lugar para aprender.", "Uma família cuida uns dos outros, e a escola é um lugar para aprender.", "تعتني الأسرة بأفرادها، والمدرسة مكان للتعلم."],
    "Where do pupils learn with a teacher?": ["Où les élèves apprennent-ils avec un enseignant ?", "¿Dónde aprenden los alumnos con un profesor?", "Onde os alunos aprendem com um professor?", "أين يتعلم التلاميذ مع المعلم؟"],
    "A classroom is part of a school.": ["Une salle de classe fait partie d’une école.", "Un aula forma parte de una escuela.", "Uma sala de aula faz parte de uma escola.", "الفصل جزء من المدرسة."],
    "Pupils learn together in classrooms at school.": ["Les élèves apprennent ensemble dans les salles de classe.", "Los alumnos aprenden juntos en las aulas de la escuela.", "Os alunos aprendem juntos nas salas de aula.", "يتعلم التلاميذ معًا في فصول المدرسة."],
    "People in a community do different jobs to help others.": ["Dans une communauté, les gens exercent différents métiers pour aider les autres.", "En una comunidad, las personas tienen distintos trabajos para ayudar a los demás.", "As pessoas da comunidade fazem diferentes trabalhos para ajudar os outros.", "يؤدي أفراد المجتمع أعمالًا مختلفة لمساعدة الآخرين."],
    "Who helps care for people who are ill?": ["Qui aide à soigner les personnes malades ?", "¿Quién ayuda a cuidar a las personas enfermas?", "Quem ajuda a cuidar das pessoas doentes?", "من يساعد في رعاية المرضى؟"],
    "A farmer can grow food for the community.": ["Un agriculteur peut produire de la nourriture pour la communauté.", "Un agricultor puede cultivar alimentos para la comunidad.", "Um agricultor pode produzir alimentos para a comunidade.", "يمكن للمزارع إنتاج الطعام للمجتمع."],
    "Farmers grow crops and raise animals for food.": ["Les agriculteurs cultivent des plantes et élèvent des animaux pour produire de la nourriture.", "Los agricultores cultivan y crían animales para obtener alimentos.", "Os agricultores cultivam plantas e criam animais para produzir alimentos.", "يزرع المزارعون المحاصيل ويربون الحيوانات لإنتاج الطعام."],
    "A simple map shows places and can help us find a route.": ["Une carte simple montre des lieux et peut aider à trouver un itinéraire.", "Un mapa sencillo muestra lugares y puede ayudarnos a encontrar una ruta.", "Um mapa simples mostra lugares e pode ajudar a encontrar um caminho.", "توضح الخريطة البسيطة الأماكن وقد تساعدنا في العثور على طريق."],
    "On a map, what can a path help you find?": ["Sur une carte, que peut-on trouver grâce à un chemin ?", "En un mapa, ¿qué puedes encontrar siguiendo un camino?", "Em um mapa, o que um caminho pode ajudar você a encontrar?", "ماذا يساعدك المسار على إيجاده في الخريطة؟"],
    "A map can help us find places.": ["Une carte peut nous aider à trouver des lieux.", "Un mapa puede ayudarnos a encontrar lugares.", "Um mapa pode ajudar a encontrar lugares.", "قد تساعدنا الخريطة في العثور على الأماكن."],
    "Maps show places and routes.": ["Les cartes montrent des lieux et des itinéraires.", "Los mapas muestran lugares y rutas.", "Os mapas mostram lugares e caminhos.", "تعرض الخرائط الأماكن والطرق."],
    "A map shows places around us.": ["Une carte montre les lieux qui nous entourent.", "Un mapa muestra los lugares que nos rodean.", "Um mapa mostra os lugares ao nosso redor.", "تعرض الخريطة الأماكن من حولنا."],
    "Follow the path to the left.": ["Suis le chemin vers la gauche.", "Sigue el camino hacia la izquierda.", "Siga o caminho à esquerda.", "اتبع الطريق إلى اليسار."],
    "Then follow the path to the right.": ["Puis suis le chemin vers la droite.", "Luego sigue el camino hacia la derecha.", "Depois, siga o caminho à direita.", "ثم اتبع الطريق إلى اليمين."],
    "Cameroon has 10 regions, and Yaoundé is the capital.": ["Le Cameroun compte 10 régions et Yaoundé est sa capitale.", "Camerún tiene 10 regiones y Yaundé es su capital.", "Camarões tem 10 regiões, e Yaoundé é a capital.", "تضم الكاميرون 10 أقاليم وياوندي هي عاصمتها."],
    "What is the capital of Cameroon?": ["Quelle est la capitale du Cameroun ?", "¿Cuál es la capital de Camerún?", "Qual é a capital dos Camarões?", "ما عاصمة الكاميرون؟"],
    "Cameroon has ten regions.": ["Le Cameroun compte dix régions.", "Camerún tiene diez regiones.", "Camarões tem dez regiões.", "تضم الكاميرون عشرة أقاليم."],
    "The ten regions include Adamawa, Centre, East, Far North, Littoral, North, North-West, South, South-West and West.": ["Les dix régions sont l’Adamaoua, le Centre, l’Est, l’Extrême-Nord, le Littoral, le Nord, le Nord-Ouest, le Sud, le Sud-Ouest et l’Ouest.", "Las diez regiones son Adamawa, Centro, Este, Extremo Norte, Litoral, Norte, Noroeste, Sur, Suroeste y Oeste.", "As dez regiões são Adamawa, Centro, Leste, Extremo Norte, Litoral, Norte, Noroeste, Sul, Sudoeste e Oeste.", "الأقاليم العشرة هي أداماوا والوسط والشرق وأقصى الشمال والساحل والشمال والشمال الغربي والجنوب والجنوب الغربي والغرب."],
    "Cameroon's flag has green, red and yellow stripes, with a yellow star in the red stripe.": ["Le drapeau du Cameroun a des bandes vertes, rouges et jaunes, avec une étoile jaune dans la bande rouge.", "La bandera de Camerún tiene franjas verdes, rojas y amarillas, con una estrella amarilla en la franja roja.", "A bandeira dos Camarões tem faixas verdes, vermelhas e amarelas, com uma estrela amarela na faixa vermelha.", "يتكون علم الكاميرون من أشرطة خضراء وحمراء وصفراء، ونجمة صفراء في الشريط الأحمر."],
    "Where is the yellow star on Cameroon's flag?": ["Où se trouve l’étoile jaune du drapeau camerounais ?", "¿Dónde está la estrella amarilla de la bandera de Camerún?", "Onde fica a estrela amarela na bandeira dos Camarões?", "أين توجد النجمة الصفراء في علم الكاميرون؟"],
    "Citizens have rights and duties.": ["Les citoyens ont des droits et des devoirs.", "Los ciudadanos tienen derechos y deberes.", "Os cidadãos têm direitos e deveres.", "للمواطنين حقوق وواجبات."],
    "A national flag, motto and anthem are symbols of Cameroon.": ["Le drapeau, la devise et l’hymne nationaux sont des symboles du Cameroun.", "La bandera, el lema y el himno nacionales son símbolos de Camerún.", "A bandeira, o lema e o hino nacionais são símbolos dos Camarões.", "العلم والشعار والنشيد الوطني رموز للكاميرون."],
    "Cameroon became independent on 1 January 1960 and reunited on 1 October 1961.": ["Le Cameroun est devenu indépendant le 1er janvier 1960 et a été réunifié le 1er octobre 1961.", "Camerún obtuvo la independencia el 1 de enero de 1960 y se reunificó el 1 de octubre de 1961.", "Camarões tornou-se independente em 1º de janeiro de 1960 e foi reunificado em 1º de outubro de 1961.", "استقلت الكاميرون في 1 يناير 1960 وتوحدت في 1 أكتوبر 1961."],
    "When is Cameroon's National Day?": ["Quand a lieu la fête nationale du Cameroun ?", "¿Cuándo es el Día Nacional de Camerún?", "Quando é o Dia Nacional dos Camarões?", "متى يُحتفل باليوم الوطني للكاميرون؟"],
    "Cameroon's National Day is 20 May, marking the unitary state established in 1972.": ["La fête nationale du Cameroun a lieu le 20 mai et rappelle l’État unitaire établi en 1972.", "El Día Nacional de Camerún es el 20 de mayo y conmemora el Estado unitario establecido en 1972.", "O Dia Nacional dos Camarões é 20 de maio e marca o Estado unitário criado em 1972.", "يوافق اليوم الوطني للكاميرون 20 مايو، ويحيي ذكرى قيام الدولة الموحدة عام 1972."],
    "English and French are the official languages of Cameroon.": ["L’anglais et le français sont les langues officielles du Cameroun.", "El inglés y el francés son los idiomas oficiales de Camerún.", "Inglês e francês são as línguas oficiais dos Camarões.", "الإنجليزية والفرنسية هما اللغتان الرسميتان في الكاميرون."],
    "What does “bonjour” mean?": ["Que signifie « bonjour » ?", "¿Qué significa «bonjour»?", "O que significa “bonjour”?", "ماذا تعني كلمة «bonjour»؟"],
    "“Merci” means “thank you” in French.": ["« Merci » signifie « thank you » en français.", "«Merci» significa «thank you» en francés.", "“Merci” significa “thank you” em francês.", "تعني «Merci» عبارة «thank you» بالفرنسية."],
    "Merci is the French word for thank you.": ["Merci est le mot français qui signifie thank you.", "Merci es la palabra francesa que significa thank you.", "Merci é a palavra francesa para thank you.", "Merci هي الكلمة الفرنسية التي تعني thank you."],
    "Which French word means yellow?": ["Quel mot français signifie yellow ?", "¿Qué palabra francesa significa yellow?", "Qual palavra francesa significa yellow?", "أي كلمة فرنسية تعني yellow؟"],
    "“Un, deux, trois” means “one, two, three.”": ["« Un, deux, trois » signifie « one, two, three ».", "«Un, deux, trois» significa «one, two, three».", "“Un, deux, trois” significa “one, two, three”.", "تعني «Un, deux, trois» عبارة «one, two, three»."],
    "French numbers one to three are un, deux and trois.": ["Les nombres français de un à trois sont un, deux et trois.", "Los números del uno al tres en francés son un, deux y trois.", "Os números de um a três em francês são un, deux e trois.", "الأعداد الفرنسية من واحد إلى ثلاثة هي un وdeux وtrois."],
    "Which French word means mother?": ["Quel mot français signifie mother ?", "¿Qué palabra francesa significa mother?", "Qual palavra francesa significa mother?", "أي كلمة فرنسية تعني mother؟"],
    "“Mon frère” means “my brother.”": ["« Mon frère » signifie « my brother ».", "«Mon frère» significa «my brother».", "“Mon frère” significa “my brother”.", "تعني «Mon frère» عبارة «my brother»."],
    "Frère means brother, and mon means my.": ["Frère signifie brother et mon signifie my.", "Frère significa brother y mon significa my.", "Frère significa brother, e mon significa my.", "تعني Frère كلمة brother وتعني mon كلمة my."],
    "Which word means “book” in French?": ["Quel mot signifie « book » en français ?", "¿Qué palabra significa «book» en francés?", "Qual palavra significa “book” em francês?", "أي كلمة تعني «book» بالفرنسية؟"],
    "“Une règle” means “a ruler.”": ["« Une règle » signifie « a ruler ».", "«Une règle» significa «a ruler».", "“Une règle” significa “a ruler”.", "تعني «Une règle» عبارة «a ruler»."],
    "Règle is the French word for ruler.": ["Règle est le mot français pour ruler.", "Règle es la palabra francesa para ruler.", "Règle é a palavra francesa para ruler.", "Règle هي الكلمة الفرنسية التي تعني ruler."],
    "How do you say “I am” in French?": ["Comment dit-on « I am » en français ?", "¿Cómo se dice «I am» en francés?", "Como se diz “I am” em francês?", "كيف نقول «I am» بالفرنسية؟"],
    "“J'ai un livre” means “I have a book.”": ["« J’ai un livre » signifie « I have a book ».", "«J'ai un livre» significa «I have a book».", "“J'ai un livre” significa “I have a book”.", "تعني «J'ai un livre» عبارة «I have a book»."],
    "Avoir means to have; j'ai means I have.": ["Avoir signifie « avoir » ; j’ai signifie « j’ai ».", "Avoir significa «tener»; j'ai significa «yo tengo».", "Avoir significa “ter”; j'ai significa “eu tenho”.", "تعني Avoir «يملك»، وتعني j'ai «أنا أملك»."],
    "Where does Amina go in the morning?": ["Où Amina va-t-elle le matin ?", "¿Adónde va Amina por la mañana?", "Aonde Amina vai de manhã?", "إلى أين تذهب أمينة صباحًا؟"],
    "“Amina lit un livre” means “Amina reads a book.”": ["« Amina lit un livre » signifie « Amina reads a book ».", "«Amina lit un livre» significa «Amina reads a book».", "“Amina lit un livre” significa “Amina reads a book”.", "تعني «Amina lit un livre» عبارة «Amina reads a book»."],
    "Lit comes from the French verb lire, to read.": ["Lit vient du verbe français lire, qui signifie « lire ».", "Lit viene del verbo francés lire, que significa leer.", "Lit vem do verbo francês lire, que significa ler.", "تأتي Lit من الفعل الفرنسي lire الذي يعني القراءة."],
    "Hello is a friendly greeting.": ["Hello est une salutation amicale.", "Hello es un saludo cordial.", "Hello é uma saudação amigável.", "Hello تحية ودية."],
    "Red, yellow and blue are colour words.": ["Red, yellow et blue sont des mots de couleur.", "Red, yellow y blue son palabras de colores.", "Red, yellow e blue são palavras que indicam cores.", "كلمات Red وyellow وblue تدل على الألوان."],
    "One, two and three are the first numbers in English.": ["One, two et three sont les premiers nombres en anglais.", "One, two y three son los primeros números en inglés.", "One, two e three são os primeiros números em inglês.", "One وtwo وthree هي الأعداد الأولى باللغة الإنجليزية."],
    "Mother, father and sister are family words.": ["Mother, father et sister sont des mots de la famille.", "Mother, father y sister son palabras de la familia.", "Mother, father e sister são palavras relacionadas à família.", "كلمات Mother وfather وsister تتعلق بالعائلة."],
    "A book, a pencil and a teacher are found at school.": ["On trouve un livre, un crayon et un enseignant à l’école.", "En la escuela hay libros, lápices y profesores.", "Na escola há livros, lápis e professores.", "نجد كتابًا وقلمًا ومعلمًا في المدرسة."],
    "Use the simple present for habits: “I play every day.”": ["Utilise le présent simple pour les habitudes : « I play every day. »", "Usa el presente simple para hábitos: «I play every day».", "Use o presente simples para hábitos: “I play every day.”", "نستخدم المضارع البسيط للعادات: «I play every day.»"]
  });
  const tr = {};
  Object.entries(translations).forEach(([en, values]) => { tr[en] = { fr: values[0], es: values[1], pt: values[2], ar: values[3] }; });
  const gloss = {
    apple: ["pomme", "manzana", "maçã", "تفاحة"], ball: ["ballon", "pelota", "bola", "كرة"], cat: ["chat", "gato", "gato", "قطة"],
    dog: ["chien", "perro", "cachorro", "كلب"], fish: ["poisson", "pez", "peixe", "سمكة"], bird: ["oiseau", "pájaro", "pássaro", "طائر"],
    teacher: ["enseignant·e", "profesor/a", "professor/a", "معلّم"], student: ["étudiant·e", "estudiante", "estudante", "طالب"], from: ["de", "de", "de", "من"],
    breakfast: ["petit-déjeuner", "desayuno", "café da manhã", "إفطار"], lunch: ["déjeuner", "almuerzo", "almoço", "غداء"], dinner: ["dîner", "cena", "jantar", "عشاء"],
    because: ["parce que", "porque", "porque", "لأن"], friend: ["ami·e", "amigo/a", "amigo/a", "صديق"], beautiful: ["beau/belle", "hermoso/a", "bonito/a", "جميل"], Wednesday: ["mercredi", "miércoles", "quarta-feira", "الأربعاء"], necessary: ["nécessaire", "necesario/a", "necessário/a", "ضروري"],
    red: ["rouge", "rojo", "vermelho", "أحمر"], yellow: ["jaune", "amarillo", "amarelo", "أصفر"], blue: ["bleu", "azul", "azul", "أزرق"], green: ["vert", "verde", "verde", "أخضر"],
    one: ["un", "uno", "um", "واحد"], two: ["deux", "dos", "dois", "اثنان"], three: ["trois", "tres", "três", "ثلاثة"], four: ["quatre", "cuatro", "quatro", "أربعة"], five: ["cinq", "cinco", "cinco", "خمسة"], apples: ["pommes", "manzanas", "maçãs", "تفاحات"], pears: ["poires", "peras", "peras", "كمثرى"], oranges: ["oranges", "naranjas", "laranjas", "برتقالات"],
    plus: ["plus", "más", "mais", "زائد"], equals: ["égale", "igual a", "igual a", "يساوي"], half: ["moitié", "mitad", "metade", "نصف"], quarter: ["quart", "cuarto", "quarto", "ربع"], percent: ["pour cent", "por ciento", "por cento", "بالمئة"],
    egg: ["œuf", "huevo", "ovo", "بيضة"], mother: ["mère", "madre", "mãe", "أم"], father: ["père", "padre", "pai", "أب"], sister: ["sœur", "hermana", "irmã", "أخت"], brother: ["frère", "hermano", "irmão", "أخ"], baby: ["bébé", "bebé", "bebê", "رضيع"],
    head: ["tête", "cabeza", "cabeça", "رأس"], eyes: ["yeux", "ojos", "olhos", "عينان"], nose: ["nez", "nariz", "nariz", "أنف"], mouth: ["bouche", "boca", "boca", "فم"], hands: ["mains", "manos", "mãos", "يدان"],
    hundred: ["cent", "cien", "cem", "مئة"], thousand: ["mille", "mil", "mil", "ألف"], francs: ["francs", "francos", "francos", "فرنك"], price: ["prix", "precio", "preço", "سعر"],
    market: ["marché", "mercado", "mercado", "سوق"], tomato: ["tomate", "tomate", "tomate", "طماطم"], orange: ["orange", "naranja", "laranja", "برتقالة"], banana: ["banane", "plátano", "banana", "موزة"], mango: ["mangue", "mango", "manga", "مانجو"], this: ["ce/cette", "este/esta", "este/esta", "هذا/هذه"], these: ["ces", "estos/estas", "estes/estas", "هؤلاء"],
    played: ["joué", "jugó", "jogou", "لعب"], watched: ["regardé", "vio", "assistiu", "شاهد"], went: ["allé", "fue", "foi", "ذهب"], had: ["eu", "tuvo", "teve", "كان لديه"], saw: ["vu", "vio", "viu", "رأى"], ate: ["mangé", "comió", "comeu", "أكل"],
    knife: ["couteau", "cuchillo", "faca", "سكين"], write: ["écrire", "escribir", "escrever", "اكتب"], lamb: ["agneau", "cordero", "cordeiro", "حَمَل"], hour: ["heure", "hora", "hora", "ساعة"], island: ["île", "isla", "ilha", "جزيرة"],
    minus: ["moins", "menos", "menos", "ناقص"], left: ["restant", "restante", "restante", "متبقٍ"], "take away": ["soustraire", "restar", "subtrair", "اطرح"],
    circle: ["cercle", "círculo", "círculo", "دائرة"], square: ["carré", "cuadrado", "quadrado", "مربع"], triangle: ["triangle", "triángulo", "triângulo", "مثلث"], rectangle: ["rectangle", "rectángulo", "retângulo", "مستطيل"],
    total: ["total", "total", "total", "المجموع"], change: ["monnaie", "cambio", "troco", "الباقي"], cost: ["coût", "costo", "custo", "تكلفة"]
  };
  Object.assign(gloss, {
    pen: ["stylo", "bolígrafo", "caneta", "قلم"],
    pig: ["cochon", "cerdo", "porco", "خنزير"],
    noun: ["nom", "sustantivo", "substantivo", "اسم"],
    verb: ["verbe", "verbo", "verbo", "فعل"],
    school: ["école", "escuela", "escola", "مدرسة"],
    yesterday: ["hier", "ayer", "ontem", "أمس"],
    adjective: ["adjectif", "adjetivo", "adjetivo", "صفة"],
    sentence: ["phrase", "oración", "frase", "جملة"],
    usually: ["d’habitude", "normalmente", "geralmente", "عادةً"],
    tomorrow: ["demain", "mañana", "amanhã", "غدًا"],
    tens: ["dizaines", "decenas", "dezenas", "عشرات"],
    ones: ["unités", "unidades", "unidades", "آحاد"],
    forty: ["quarante", "cuarenta", "quarenta", "أربعون"],
    groups: ["groupes", "grupos", "grupos", "مجموعات"],
    multiply: ["multiplier", "multiplicar", "multiplicar", "يضرب"],
    product: ["produit", "producto", "produto", "حاصل الضرب"],
    divide: ["diviser", "dividir", "dividir", "يقسم"],
    share: ["partager", "compartir", "partilhar", "يشارك"],
    equal: ["égal", "igual", "igual", "متساوٍ"],
    decimal: ["nombre décimal", "decimal", "decimal", "عدد عشري"],
    area: ["aire", "área", "área", "مساحة"],
    perimeter: ["périmètre", "perímetro", "perímetro", "محيط"],
    plant: ["plante", "planta", "planta", "نبات"],
    animal: ["animal", "animal", "animal", "حيوان"],
    grow: ["grandir", "crecer", "crescer", "ينمو"],
    senses: ["sens", "sentidos", "sentidos", "حواس"],
    taste: ["goût", "gusto", "paladar", "تذوق"],
    healthy: ["sain", "saludable", "saudável", "صحي"],
    solid: ["solide", "sólido", "sólido", "صلب"],
    liquid: ["liquide", "líquido", "líquido", "سائل"],
    water: ["eau", "agua", "água", "ماء"],
    hygiene: ["hygiène", "higiene", "higiene", "نظافة"],
    mosquito: ["moustique", "mosquito", "mosquito", "بعوضة"],
    net: ["moustiquaire", "mosquitera", "mosquiteira", "شبكة"],
    energy: ["énergie", "energía", "energia", "طاقة"],
    lever: ["levier", "palanca", "alavanca", "رافعة"],
    wheel: ["roue", "rueda", "roda", "عجلة"],
    family: ["famille", "familia", "família", "عائلة"],
    class: ["classe", "clase", "turma", "صف"],
    nurse: ["infirmier·ère", "enfermero/a", "enfermeiro/a", "ممرض/ممرضة"],
    farmer: ["agriculteur·rice", "agricultor/a", "agricultor/a", "مزارع"],
    map: ["carte", "mapa", "mapa", "خريطة"],
    right: ["droite", "derecha", "direita", "يمين"],
    regions: ["régions", "regiones", "regiões", "أقاليم"],
    capital: ["capitale", "capital", "capital", "عاصمة"],
    Yaoundé: ["Yaoundé", "Yaundé", "Yaoundé", "ياوندي"],
    flag: ["drapeau", "bandera", "bandeira", "علم"],
    motto: ["devise", "lema", "lema", "شعار"],
    citizen: ["citoyen·ne", "ciudadano/a", "cidadão/ã", "مواطن/مواطنة"],
    independence: ["indépendance", "independencia", "independência", "استقلال"],
    reunification: ["réunification", "reunificación", "reunificação", "إعادة توحيد"],
    "National Day": ["fête nationale", "Día Nacional", "Dia Nacional", "اليوم الوطني"],
    hello: ["bonjour", "hola", "olá", "مرحبًا"],
    goodbye: ["au revoir", "adiós", "adeus", "وداعًا"],
    please: ["s’il vous plaît", "por favor", "por favor", "من فضلك"],
    book: ["livre", "libro", "livro", "كتاب"],
    pencil: ["crayon", "lápiz", "lápis", "قلم رصاص"],
    play: ["jouer", "jugar", "jogar", "يلعب"],
    eat: ["manger", "comer", "comer", "يأكل"],
    go: ["aller", "ir", "ir", "يذهب"]
  });
  gloss["three apples"] = ["trois pommes", "tres manzanas", "três maçãs", "ثلاث تفاحات"];
  Object.entries(gloss).forEach(([word, values]) => {
    if (!tr[word]) tr[word] = { fr: values[0], es: values[1], pt: values[2], ar: values[3] };
  });
  const glossMap = {};
  Object.entries(gloss).forEach(([word, values]) => {
    glossMap[word] = { fr: values[0], es: values[1], pt: values[2], ar: values[3] };
    glossMap[word.toLowerCase()] = glossMap[word];
  });
  window.LEXORA_I18N = { langs, strings, tr, gloss: glossMap };
})();
