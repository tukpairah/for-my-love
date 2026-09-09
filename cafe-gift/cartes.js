/*
  ================================================
  ЭТО ЕДИНСТВЕННЫЙ ФАЙЛ, КОТОРЫЙ ТЕБЕ НУЖНО МЕНЯТЬ.
  ================================================

  Как это работает:
  - Отсчёт стартует 9 сентября 2026 (day 1).
  - Каждый день открывается только карточка с сегодняшним номером и раньше.
  - Просто впиши текст на французском в поле "text" нужного дня.
  - Если день ещё не написан — оставь текст как есть (заглушку),
    просто вернись и перепиши его позже, пока день не наступил.
  - emoji в поле "icon" — просто название кофейной темы дня (необязательно менять).
  - Ничего больше в файле трогать не нужно. Кавычки и запятые оставляй как есть.
*/

const START_DATE = "2026-09-09"; // день 1. Если нужно сдвинуть старт — поменяй только эту дату.

const CARTES = [
  {
    day: 1,
    title: "Un café pour commencer",
    icon: "coffee",
    text: "Chaque grande histoire commence par une première tasse. La nôtre a six mois aujourd'hui, et je suis fier de toi avant même que tu commences quoi que ce soit. Un garçon kazakh est toujours à tes côtés, même à distance."
  },
  {
    day: 2,
    title: "Quand tu as besoin de motivation",
    icon: "bolt",
    text: "Tu es plus forte que tu ne le penses. Chaque page que tu révises te rapproche de la personne que tu es en train de devenir. Respire, et continue — je crois en toi."
  },
  {
    day: 3,
    title: "Quand tu as eu une mauvaise journée",
    icon: "cloud-rain",
    text: "Une mauvaise journée ne définit pas tes examens, ni nous. Pose ton stylo, prends un café chaud, et rappelle-toi : demain est une nouvelle page. Je suis là."
  },
  {
    day: 4,
    title: "Quand on vient de raccrocher",
    icon: "phone",
    text: "Même quand l'appel se termine, mes pensées restent avec toi. La distance n'éteint jamais ce qu'on construit ensemble."
  },
  {
    day: 5,
    title: "Quand la distance pèse trop lourd",
    icon: "map-pin",
    text: "Aktobe et Paris ne sont que des noms sur une carte. Mon cœur, lui, n'a pas besoin de visa pour être avec toi."
  },
  {
    day: 6,
    title: "Quand tu as une bonne nouvelle",
    icon: "sparkles",
    text: "Je le savais ! Chaque victoire, petite ou grande, mérite d'être célébrée — et je célèbre avec toi, même de loin."
  },
  {
    day: 7,
    title: "Quand tu n'arrives pas à dormir",
    icon: "moon",
    text: "Ferme les yeux. Le travail sera encore là demain, aussi solide que mon soutien pour toi. Repose-toi, tu l'as mérité."
  },
  {
    day: 8,
    title: "À mi-chemin",
    icon: "flag",
    text: "Sept jours de faits, sept jours à venir. Regarde comme tu as tenu bon. Continue ainsi — je suis fier de toi à chaque étape."
  },
  {
    day: 9,
    title: "Quand tout semble trop difficile",
    icon: "heart-handshake",
    text: "Tu n'es pas seule dans cette épreuve, même si tu portes l'essentiel. Un garçon kazakh pense à toi à chaque instant, où que tu sois."
  },
  {
    day: 10,
    title: "Quand tu doutes de toi",
    icon: "star",
    text: "Le doute visite tout le monde, mais il ne reste jamais chez les gens qui travaillent aussi dur que toi. Tu es capable de bien plus que tu ne l'imagines."
  },
  {
    day: 11,
    title: "Quand tu as besoin d'une pause",
    icon: "cup",
    text: "Même le meilleur café doit refroidir un instant avant d'être savouré. Accorde-toi cette pause — tu en as le droit."
  },
  {
    day: 12,
    title: "Quand tu penses à nous",
    icon: "heart",
    text: "Six mois, des milliers de kilomètres, et pourtant chaque jour me rapproche un peu plus de toi dans mes pensées. On construit quelque chose de vrai."
  },
  {
    day: 13,
    title: "Quand la fin approche",
    icon: "hourglass",
    text: "Presque là. Les derniers efforts sont toujours les plus durs, mais aussi les plus révélateurs de ta force. Encore un peu."
  },
  {
    day: 14,
    title: "Bravo, tu l'as fait",
    icon: "confetti",
    text: "Quatorze jours, quatorze pensées, un seul message qui reste : je suis incroyablement fier de toi. Un garçon kazakh sera toujours là, à chaque examen, à chaque victoire, à chaque instant. Joyeux 6 mois, mon amour."
  }
];
