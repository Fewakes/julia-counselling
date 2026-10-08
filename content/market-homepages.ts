export type MarketHomeCopy = {
  market: "uk" | "pl";
  code: "GB" | "PL";
  hero: { eyebrow: string; start: string; emphasis: string; end: string; introduction: string; detail: string; primary: string; secondary: string; availability: string };
  trust: { figure: string; detail: string }[];
  recognition: { eyebrow: string; title: string; introduction: string; items: string[]; closing: string };
  about: { eyebrow: string; title: string; paragraphs: string[]; action: string };
  localFeature: { eyebrow: string; title: string; paragraphs: string[]; points: string[]; action: string; href: string };
  services: { number: string; category: string; title: string; detail: string; action: string; href: string }[];
  pause: { eyebrow: string; quote: string; detail: string };
  approach: { eyebrow: string; title: string; detail: string; action: string; href: string; tags: string[] };
  parents: { eyebrow: string; title: string; lines: string[]; detail: string; action: string; href: string };
  teens: { eyebrow: string; title: string; paragraphs: string[]; closing: string; action: string; href: string };
  steps: { number: string; title: string; detail: string }[];
  credentials: { title: string; detail: string }[];
  faq: { eyebrow: string; title: string; introduction: string; action: string; href: string; questions: { question: string; answer: string }[] };
  finalCta: { eyebrow: string; title: string; detail: string; action: string };
  finder: {
    title: string;
    introduction: string;
    forLabel: string;
    difficultyLabel: string;
    person: { value: string; label: string }[];
    difficulty: { value: string; label: string }[];
    resultLabel: string;
    resultTitle: string;
    resultDetail: string;
    resultAction: string;
    resultLinks: Record<string, { title: string; detail: string; href: string }>;
  };
};

export const ukHome: MarketHomeCopy = {
  market: "uk", code: "GB",
  hero: {
    eyebrow: "COUNSELLING SUPPORT FOR YOUNG PEOPLE & FAMILIES · UK",
    start: "A steadier place to",
    emphasis: "make sense",
    end: "of things.",
    introduction: "Counselling conversations for children, teenagers and parents thinking about anxiety, school pressure, confidence or change.",
    detail: "Julia brings more than eight years of professional experience and a UK education in counselling, psychotherapy and psychology. Ask about current availability and suitability before making plans.",
    primary: "Ask about availability", secondary: "Explore support",
    availability: "Current UK availability, eligibility and arrangements are confirmed individually.",
  },
  trust: [
    { figure: "8+ years", detail: "Professional experience" },
    { figure: "MSc", detail: "Counselling & Psychotherapy" },
    { figure: "BSc", detail: "Psychology" },
    { figure: "UK", detail: "Education and work experience" },
  ],
  recognition: {
    eyebrow: "A PLACE TO START", title: "Support can begin before you have the right words.",
    introduction: "Parents often reach out because something has changed, or because the same worry keeps returning. You do not need a diagnosis or a complete explanation to ask a question.",
    items: ["Worry is shaping more of the day.", "School has started to feel overwhelming.", "Confidence seems harder to find.", "Friendships have become complicated.", "A change at home or school is taking time to settle.", "Your teenager seems less like themselves."],
    closing: "A first conversation can help you understand what questions to ask next.",
  },
  about: {
    eyebrow: "MEET JULIA", title: "International experience, grounded in UK education.",
    paragraphs: [
      "Julia Slojkowska, MSc, studied counselling and psychotherapy at Keele University and psychology at De Montfort University. Her professional experience has included work with children and adolescents, school wellbeing and additional learning needs.",
      "Working across Qatar, the United Kingdom and Poland has encouraged Julia to stay curious about the wider picture: home, school, friendships, culture and the changes a young person is navigating.",
      "Parents are part of that picture. Their observations can help build understanding, while the young person’s own perspective and appropriate privacy remain important.",
    ], action: "More about Julia",
  },
  localFeature: {
    eyebrow: "THE SCHOOL CONTEXT", title: "School is part of the picture, not the whole story.",
    paragraphs: [
      "School stages, exams, attendance, friendships and changing expectations can all affect how a young person feels. It may help to understand what is happening in the classroom alongside what life is like at home and with friends.",
      "A school does not need to be involved for a family to make an enquiry. Any communication with a school would be discussed first and would require appropriate agreement.",
    ], points: ["School transitions and new routines", "Exam pressure and expectations", "Attendance, friendships and belonging", "Support shaped around the individual"],
    action: "How child counselling may help", href: "/uk/child-counselling/",
  },
  services: [
    { number: "01", category: "FOR CHILDREN", title: "A space for worries, feelings and change.", detail: "Information for parents considering support with a child’s emotions, friendships, school experience or a change in family life.", action: "Child counselling", href: "/uk/child-counselling/" },
    { number: "02", category: "FOR TEENAGERS", title: "A conversation at their pace.", detail: "A respectful place for a teenager to start with what matters to them, without needing to arrive with a plan.", action: "Teen counselling", href: "/uk/teen-counselling/" },
    { number: "03", category: "FOR PARENTS", title: "Time to think things through.", detail: "A parent consultation can help organise what you have noticed and consider possible next steps.", action: "Parent consultations", href: "/uk/parent-consultations/" },
  ],
  pause: { eyebrow: "A THOUGHT TO TAKE WITH YOU", quote: "A young person is more than the hardest part of their week.", detail: "Counselling can make room for strengths, relationships and ordinary moments as well as the things that feel difficult." },
  approach: { eyebrow: "HOW JULIA WORKS", title: "Curious, collaborative and shaped around the young person.", detail: "Julia’s integrative training draws on counselling and psychotherapy. The way conversations are structured depends on the young person, their circumstances and what feels useful. Specific methods and current eligibility can be discussed before work begins.", action: "Read about the approach", href: "/uk/approach/", tags: ["Integrative counselling", "Relationship-led", "Practical when helpful"] },
  parents: { eyebrow: "FOR PARENTS", title: "You can ask for support before you know what to ask for.", lines: ["You have noticed a change.", "You have tried to talk.", "You have checked in with school.", "You are still wondering what might help."], detail: "An initial enquiry is a chance to ask about fit, availability and possible next steps. It does not commit your child to ongoing sessions.", action: "Explore parent consultations", href: "/uk/parent-consultations/" },
  teens: { eyebrow: "FOR TEENAGERS", title: "You can start with what feels important to you.", paragraphs: ["You do not have to explain everything neatly or know what you want to change.", "School, friends, family, confidence or the future can all be places to begin. Your perspective belongs in the conversation."], closing: "Your voice belongs in the conversation.", action: "Read about teen counselling", href: "/uk/teen-counselling/" },
  steps: [
    { number: "01", title: "Initial enquiry", detail: "Ask about what is concerning you, availability and whether the service may be suitable." },
    { number: "02", title: "Understand the situation", detail: "If it feels appropriate to continue, make space for the young person’s experience and context." },
    { number: "03", title: "Agree a way forward", detail: "Discuss what support could involve, practical arrangements and parent involvement." },
    { number: "04", title: "Review together", detail: "Check whether the conversations are useful and what should happen next." },
  ],
  credentials: [
    { title: "MSc Counselling & Psychotherapy", detail: "Keele University, United Kingdom" },
    { title: "BSc Psychology", detail: "De Montfort University, United Kingdom" },
    { title: "Professional experience", detail: "More than eight years across Qatar, the UK and Poland" },
    { title: "Areas of experience", detail: "Children and adolescents · school wellbeing · additional learning needs" },
  ],
  faq: { eyebrow: "BEFORE YOU ENQUIRE", title: "Practical questions are welcome.", introduction: "Find out what you can ask first, how parents may be involved and which arrangements need individual confirmation.", action: "Read the UK FAQs", href: "/uk/faq/", questions: [
    { question: "Can I enquire before my child is involved?", answer: "Yes. A parent can make an initial enquiry, explain what they have noticed and ask about suitability and current availability." },
    { question: "Is UK availability guaranteed?", answer: "No. Current availability and eligibility are confirmed in response to each enquiry." },
    { question: "Are online sessions available?", answer: "Online eligibility and arrangements are not confirmed for every circumstance. Please ask before making plans." },
  ] },
  finalCta: { eyebrow: "A FIRST CONVERSATION", title: "Start with the question you already have.", detail: "A brief enquiry is enough to ask about the next step.", action: "Ask about availability" },
  finder: {
    title: "Not sure where to begin?", introduction: "Choose a starting point. Your answers stay in this browser and are not saved or sent.", forLabel: "Who are you looking for support for?", difficultyLabel: "What has been difficult lately?", person: [{ value: "child", label: "A child" }, { value: "teen", label: "A teenager" }, { value: "parent", label: "Me as a parent" }], difficulty: [{ value: "worry", label: "Worry" }, { value: "confidence", label: "Confidence" }, { value: "school", label: "School" }, { value: "friends", label: "Friendships" }, { value: "feelings", label: "Big feelings" }, { value: "change", label: "Change" }, { value: "unsure", label: "Not sure" }], resultLabel: "A place to explore", resultTitle: "You could start here", resultDetail: "This is simply a way to find relevant information, not an assessment or diagnosis.", resultAction: "Read more",
    resultLinks: {
      child: { title: "Child counselling", detail: "Information for parents considering support for a child.", href: "/uk/child-counselling/" },
      teen: { title: "Teen counselling", detail: "Information about a conversation shaped around a teenager.", href: "/uk/teen-counselling/" },
      parent: { title: "Parent consultations", detail: "A place for parents to talk through questions and possible next steps.", href: "/uk/parent-consultations/" },
    },
  },
};

export const plHome: MarketHomeCopy = {
  market: "pl", code: "PL",
  hero: {
    eyebrow: "DZIECI · MŁODZIEŻ · RODZICE · POLSKA",
    start: "Nie trzeba od razu",
    emphasis: "wiedzieć,",
    end: "od czego zacząć.",
    introduction: "Rozmowa o emocjach, szkole, relacjach i zmianach może pomóc uporządkować to, co dzieje się w życiu dziecka i całej rodziny.",
    detail: "Julia Slojkowska, MSc, ma ponad osiem lat doświadczenia zawodowego zdobywanego w Katarze, Wielkiej Brytanii i Polsce. Możliwość i warunki współpracy potwierdzamy indywidualnie.",
    primary: "Zapytaj o możliwość konsultacji", secondary: "Zobacz, w czym można szukać wsparcia",
    availability: "Formę spotkań, dostępność i możliwość współpracy ustalamy po otrzymaniu zapytania.",
  },
  trust: [
    { figure: "8+ lat", detail: "Doświadczenia zawodowego" },
    { figure: "MSc", detail: "Counselling i psychoterapia" },
    { figure: "BSc", detail: "Psychologia" },
    { figure: "3 kraje", detail: "Katar · Wielka Brytania · Polska" },
  ],
  recognition: {
    eyebrow: "KIEDY COŚ SIĘ ZMIENIA", title: "Czasem wystarczy zauważyć, że coś jest trudniejsze.",
    introduction: "Nie trzeba czekać na kryzys ani znać właściwego określenia dla trudności. Rodzic może zacząć od tego, co widzi i co go niepokoi.",
    items: ["Zmartwienia wracają i trudno od nich odpocząć.", "Dziecko przestało wierzyć w swoje możliwości.", "Szkoła i obowiązki zaczynają przytłaczać.", "Relacje z rówieśnikami stały się trudne.", "Emocje są intensywne i trudno je zrozumieć.", "Zmiana lub dorastanie przynosi wiele pytań."],
    closing: "Nie musisz wiedzieć, czego dokładnie potrzeba, żeby zapytać o rozmowę.",
  },
  about: {
    eyebrow: "POZNAJ JULIĘ", title: "Doświadczenie z różnych miejsc. Uważność na konkretną osobę.",
    paragraphs: [
      "Julia Slojkowska, MSc, zdobywała doświadczenie zawodowe w Katarze, Wielkiej Brytanii i Polsce. Jej wykształcenie obejmuje psychologię oraz counselling i psychoterapię.",
      "W pracy z dziećmi i młodzieżą ważne jest nie tylko to, co dzieje się podczas rozmowy. Znaczenie mają także dom, szkoła, relacje, potrzeby edukacyjne i ważne zmiany w życiu.",
      "Rodzic może wnieść cenne obserwacje, a młoda osoba potrzebuje przestrzeni, by wyrazić własne zdanie. Sposób współpracy warto ustalać z uwzględnieniem wieku i konkretnej sytuacji.",
    ], action: "Więcej o Julii",
  },
  localFeature: {
    eyebrow: "RODZINA, SZKOŁA, ZMIANA", title: "Dziecko funkcjonuje w konkretnym świecie.",
    paragraphs: [
      "Trudności mogą łączyć się z nauką, relacjami, zmianą szkoły, przeprowadzką albo pytaniami o dorastanie. Rozmowa może pomóc spojrzeć na codzienność szerzej, bez szukania winnego.",
      "Doświadczenie życia pomiędzy krajami i kulturami może być ważną częścią historii rodziny. Nie zakładamy jednak, że każda zmiana jest problemem — warto zapytać młodą osobę, jak sama ją przeżywa.",
    ], points: ["Zmiana szkoły lub miejsca zamieszkania", "Relacje z rówieśnikami i poczucie przynależności", "Język, kultura i życie pomiędzy krajami", "Mocne strony obok tego, co trudne"],
    action: "Konsultacje dla rodziców", href: "/pl/konsultacje-dla-rodzicow/",
  },
  services: [
    { number: "01", category: "DLA DZIECI", title: "Miejsce na emocje, pytania i własne tempo.", detail: "Informacje dla rodziców, którzy zastanawiają się nad wsparciem dziecka w emocjach, szkole, relacjach lub zmianie.", action: "Wsparcie dzieci", href: "/pl/wsparcie-dzieci/" },
    { number: "02", category: "DLA MŁODZIEŻY", title: "Rozmowa bez gotowych odpowiedzi.", detail: "Przestrzeń, w której nastolatek może zacząć od tego, co jest dla niego ważne — bez presji, by opowiedzieć wszystko od razu.", action: "Wsparcie młodzieży", href: "/pl/wsparcie-mlodziezy/" },
    { number: "03", category: "DLA RODZICÓW", title: "Najpierw możesz porozmawiać samodzielnie.", detail: "Konsultacja dla rodzica może pomóc uporządkować obserwacje i zastanowić się nad możliwymi kolejnymi krokami.", action: "Konsultacje dla rodziców", href: "/pl/konsultacje-dla-rodzicow/" },
  ],
  pause: { eyebrow: "MYŚL NA POCZĄTEK", quote: "Nie trzeba od razu znaleźć rozwiązania. Czasem najpierw warto lepiej zrozumieć sytuację.", detail: "Uważna rozmowa może uwzględniać trudności, ale także relacje, mocne strony i codzienne doświadczenia młodej osoby." },
  approach: { eyebrow: "MOJE PODEJŚCIE", title: "Relacja i ciekawość zamiast jednego gotowego schematu.", detail: "Sposób rozmowy warto dostosowywać do wieku, sytuacji i potrzeb młodej osoby. Czasem pomocne jest nazwanie emocji, innym razem przyjrzenie się konkretnej sytuacji i temu, co może ułatwić codzienność.", action: "Przeczytaj o podejściu", href: "/pl/moje-podejscie/", tags: ["Podejście integracyjne", "Uważna relacja", "Praktycznie, gdy to pomocne"] },
  parents: { eyebrow: "DLA RODZICÓW", title: "Możesz zacząć od własnych pytań.", lines: ["Próbujesz rozmawiać.", "Dajesz dziecku przestrzeń.", "Szukasz wskazówek w szkole.", "A mimo to coś nadal Cię niepokoi."], detail: "Konsultacja może pomóc spokojnie przyjrzeć się temu, co już zauważyłeś lub zauważyłaś. Nie musisz wcześniej decydować, czy dziecko powinno rozpocząć własne spotkania.", action: "Zobacz konsultacje dla rodziców", href: "/pl/konsultacje-dla-rodzicow/" },
  teens: { eyebrow: "DLA NASTOLATKÓW I NASTOLATEK", title: "Można zacząć od „nie wiem”.", paragraphs: ["Nie musisz mieć gotowej odpowiedzi ani dokładnie wiedzieć, o czym chcesz rozmawiać.", "Możesz mieć własne tempo i własne zdanie o tym, co byłoby pomocne. Ważne, by rozmowa uwzględniała także Twoją perspektywę."], closing: "Nie trzeba niczego udowadniać.", action: "Jak wygląda wsparcie młodzieży", href: "/pl/wsparcie-mlodziezy/" },
  steps: [
    { number: "01", title: "Pierwsze pytanie", detail: "Rodzic lub młoda osoba może krótko napisać, czego dotyczy zapytanie." },
    { number: "02", title: "Rozpoznanie sytuacji", detail: "Jeśli współpraca może być odpowiednia, warto spokojnie poznać perspektywę dziecka i rodziny." },
    { number: "03", title: "Ustalenie kolejnego kroku", detail: "Omawiamy, jaka forma rozmowy może być pomocna i jakie zasady trzeba ustalić." },
    { number: "04", title: "Sprawdzenie, co służy", detail: "Warto wracać do pytania, czy spotkania są pomocne i co powinno wydarzyć się dalej." },
  ],
  credentials: [
    { title: "MSc Counselling & Psychotherapy", detail: "Keele University, Wielka Brytania" },
    { title: "BSc Psychology", detail: "De Montfort University, Wielka Brytania" },
    { title: "Doświadczenie zawodowe", detail: "Ponad osiem lat pracy w Katarze, Wielkiej Brytanii i Polsce" },
    { title: "Obszary doświadczenia", detail: "Dzieci i młodzież · dobrostan w szkole · dodatkowe potrzeby edukacyjne" },
  ],
  faq: { eyebrow: "PYTANIA PRZED KONTAKTEM", title: "Warto wiedzieć, o co można zapytać.", introduction: "Informacje o pierwszej rozmowie, poufności, udziale rodziców i kwestiach organizacyjnych.", action: "Zobacz wszystkie pytania", href: "/pl/faq/", questions: [
    { question: "Czy rodzic może napisać samodzielnie?", answer: "Tak. Możesz najpierw opisać krótko, co Cię niepokoi, i zapytać o możliwość rozmowy." },
    { question: "Czy od razu trzeba zdecydować o spotkaniach dziecka?", answer: "Nie. Pierwszy kontakt może pomóc uporządkować pytania i omówić możliwe dalsze kroki." },
    { question: "Czy spotkania odbywają się online?", answer: "Forma spotkań i możliwość współpracy zależą od aktualnych ustaleń. Potwierdzimy je w odpowiedzi na zapytanie." },
  ] },
  finalCta: { eyebrow: "PIERWSZY KONTAKT", title: "Nie musisz wiedzieć dokładnie, czego potrzebuje Twoje dziecko.", detail: "Możemy zacząć od krótkiej rozmowy.", action: "Zapytaj o możliwość konsultacji" },
  finder: {
    title: "Nie wiesz, od czego zacząć?", introduction: "Wybierz temat, który jest Ci najbliższy. Odpowiedzi nie są zapisywane ani wysyłane.", forLabel: "Dla kogo szukasz wsparcia?", difficultyLabel: "Co jest ostatnio trudne?", person: [{ value: "child", label: "Dla dziecka" }, { value: "teen", label: "Dla nastolatka lub nastolatki" }, { value: "parent", label: "Dla mnie jako rodzica" }], difficulty: [{ value: "worry", label: "Niepokój" }, { value: "confidence", label: "Pewność siebie" }, { value: "school", label: "Szkoła" }, { value: "friends", label: "Relacje" }, { value: "feelings", label: "Emocje" }, { value: "change", label: "Zmiana" }, { value: "unsure", label: "Nie wiem" }], resultLabel: "Możliwe miejsce na początek", resultTitle: "Możesz zacząć tutaj", resultDetail: "To tylko wskazówka, która pomaga znaleźć informacje — nie diagnoza ani ocena.", resultAction: "Zobacz informacje",
    resultLinks: {
      child: { title: "Wsparcie dzieci", detail: "Informacje dla rodziców rozważających rozmowę wspierającą dla dziecka.", href: "/pl/wsparcie-dzieci/" },
      teen: { title: "Wsparcie młodzieży", detail: "Informacje o rozmowie dostosowanej do potrzeb nastolatka lub nastolatki.", href: "/pl/wsparcie-mlodziezy/" },
      parent: { title: "Konsultacje dla rodziców", detail: "Miejsce, by omówić pytania i możliwe kolejne kroki.", href: "/pl/konsultacje-dla-rodzicow/" },
    },
  },
};
