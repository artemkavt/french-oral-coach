const modules = [
  {
    id: 1,
    title: "Nouvelles vies",
    page: 13,
    topic: "parcours, loisirs, sorties",
    vocab: ["je suis ne", "j'ai grandi", "le parcours", "les etudes", "devenir", "un artiste", "sortir", "une activite", "accepter", "refuser"],
    questions: [
      "Racontez votre parcours.",
      "Quelles activites aimez-vous faire le week-end ?",
      "Proposez une sortie a un ami."
    ],
    drills: [
      ["Shadowing", "Lis le modele a voix haute deux fois, puis cache-le et recommence."],
      ["Ticket express", "Reponds en 45 secondes avec au moins 5 mots obligatoires."],
      ["Dialogue", "Propose une sortie, puis accepte ou refuse avec une raison."]
    ],
    answers: {
      easy: "Je suis ne en Russie et j'ai grandi dans ma ville. J'ai fait mes etudes a l'universite. Le week-end, j'aime sortir avec mes amis et faire une activite culturelle.",
      medium: "Je suis ne en Russie et j'ai grandi dans une famille active. Pendant mes etudes, j'ai decouvert le francais. Aujourd'hui, je veux progresser parce que j'aime voyager, sortir et parler avec des personnes differentes.",
      challenge: "Mon parcours est assez simple, mais il est important pour moi. J'ai grandi en Russie, puis j'ai commence mes etudes. Depuis quelque temps, j'apprends le francais avec l'intention de mieux communiquer. Quand un ami propose une sortie, j'accepte volontiers si c'est une activite culturelle."
    }
  },
  {
    id: 2,
    title: "Je me souviens",
    page: 27,
    topic: "souvenirs, sens, meteo, paysages",
    vocab: ["un souvenir", "je me souviens", "je me rappelle", "l'enfance", "une odeur", "une saveur", "la mer", "la campagne", "la meteo", "il pleut"],
    questions: [
      "Racontez un souvenir d'enfance.",
      "Vous aimez regarder de vieilles photos ?",
      "Quel temps fait-il souvent dans votre ville ?"
    ],
    drills: [
      ["Memoire", "Choisis une odeur ou une saveur et raconte le souvenir associe."],
      ["Imparfait", "Commence trois phrases par: Quand j'etais petit..."],
      ["Meteo", "Decris ta ville avec pluie, soleil, chaleur ou fraicheur."]
    ],
    answers: {
      easy: "Je me souviens de mon enfance chez ma grand-mere. Il y avait une bonne odeur dans la cuisine. J'aimais cette maison parce qu'elle etait calme.",
      medium: "Quand j'etais petit, je passais beaucoup de temps chez ma grand-mere. Je me rappelle une odeur de confiture et une saveur tres douce. Ce souvenir est reste dans ma memoire.",
      challenge: "Je me souviens tres bien d'un ete de mon enfance. Nous etions a la campagne, il faisait beau et tout etait calme. Dans la maison de ma grand-mere, il y avait toujours une odeur de cuisine. Ce souvenir me plait parce qu'il est simple, chaleureux et familial."
    }
  },
  {
    id: 3,
    title: "Comme a la maison",
    page: 41,
    topic: "logement, meubles, quartier",
    vocab: ["un logement", "un appartement", "une colocation", "le proprietaire", "le locataire", "une chambre", "la cuisine", "un meuble", "le quartier", "le loyer"],
    questions: [
      "Quel type de logement preferez-vous ?",
      "Decrivez votre appartement ideal.",
      "La colocation, c'est une bonne idee ?"
    ],
    drills: [
      ["Visite guidee", "Decris chaque piece comme si tu faisais visiter l'appartement."],
      ["Comparaison", "Compare la ville et la campagne avec plus, moins, aussi."],
      ["Opinion", "Donne deux avantages et un inconvenient de la colocation."]
    ],
    answers: {
      easy: "Je prefere un petit appartement dans un quartier calme. Il y a une chambre, une cuisine et un salon. Pour moi, le loyer ne doit pas etre trop cher.",
      medium: "Mon logement ideal est un appartement lumineux avec une grande cuisine et des meubles simples. J'aimerais habiter dans un quartier calme, mais pas loin du centre-ville.",
      challenge: "Je prefere vivre dans un appartement qui est confortable et bien situe. La colocation peut etre pratique parce que le loyer est moins cher et on parle avec les colocataires. Mais parfois, c'est difficile si les habitudes sont differentes."
    }
  },
  {
    id: 4,
    title: "Tous pareils, tous differents",
    page: 53,
    topic: "physique, caractere, compliments",
    vocab: ["le visage", "les cheveux", "le corps", "ressembler a", "un compliment", "gentil", "sympathique", "pretentieux", "timide", "genereux"],
    questions: [
      "Decrivez une personne de votre famille.",
      "Quel compliment vous fait plaisir ?",
      "Quels traits de caractere appreciez-vous ?"
    ],
    drills: [
      ["Portrait", "Decris le physique puis le caractere d'une personne."],
      ["Compliment", "Fais trois compliments naturels."],
      ["Nuance", "Ajoute parce que a chaque opinion."]
    ],
    answers: {
      easy: "Ma mere est sympathique et genereuse. Elle a les cheveux courts et un visage souriant. J'aime son caractere parce qu'elle est gentille.",
      medium: "Dans ma famille, je ressemble un peu a mon pere. Nous avons le meme sourire. Pour le caractere, j'apprecie les personnes gentilles, calmes et genereuses.",
      challenge: "Je pense que le caractere est plus important que le physique. J'aime les personnes qui sont sinceres, ouvertes et genereuses. Un compliment simple peut faire plaisir, par exemple: tu as beaucoup de courage, ou tu es toujours tres attentif."
    }
  },
  {
    id: 5,
    title: "En route vers le futur",
    page: 69,
    topic: "avenir, objets, technologies",
    vocab: ["l'avenir", "imaginer", "une machine", "un objet", "utile", "une innovation", "le telephone", "Internet", "fonctionner", "j'espere"],
    questions: [
      "Comment imaginez-vous l'avenir ?",
      "Quel objet est indispensable pour vous ?",
      "Les technologies changent-elles la vie ?"
    ],
    drills: [
      ["Futur simple", "Dis cinq phrases au futur."],
      ["Objet utile", "Explique l'utilite d'un objet en trois phrases."],
      ["Espoir", "Commence par: J'espere que..."]
    ],
    answers: {
      easy: "J'imagine que l'avenir sera tres technologique. Le telephone et Internet seront encore plus importants. J'espere que les machines seront utiles.",
      medium: "Pour moi, le telephone est un objet indispensable parce qu'il sert a communiquer, travailler et chercher des informations. Mais j'espere que les gens parleront encore beaucoup en face a face.",
      challenge: "L'avenir sera probablement lie aux innovations. Certaines machines vont faciliter la vie quotidienne, mais il faudra garder un equilibre. A mon avis, la technologie est utile quand elle aide les personnes sans remplacer les relations humaines."
    }
  },
  {
    id: 6,
    title: "En cuisine",
    page: 83,
    topic: "aliments, restaurant, gouts",
    vocab: ["les fruits", "les legumes", "les cereales", "la viande", "le poisson", "les epices", "cuisiner", "un plat", "la cuisson", "satisfait"],
    questions: [
      "Quels legumes aimez-vous ?",
      "Qu'est-ce que votre grand-mere cultive ?",
      "Que commandez-vous au restaurant ?"
    ],
    drills: [
      ["Panier", "Nomme 8 aliments puis fais deux phrases avec eux."],
      ["Restaurant", "Commande un plat et exprime ta satisfaction."],
      ["Recette", "Explique une recette avec trois instructions."]
    ],
    answers: {
      easy: "J'aime les tomates, les concombres et les carottes. Ma grand-mere cultive des pommes de terre et des oignons. Au restaurant, je commande souvent du poisson.",
      medium: "J'aime beaucoup les legumes frais, surtout les tomates, les carottes et les concombres. Chez ma grand-mere, il y a parfois des pommes de terre, des oignons et du chou. Pour moi, un bon plat doit etre simple et bien epice.",
      challenge: "En cuisine, j'aime les plats simples avec des legumes frais. Par exemple, j'aime les tomates, les carottes, les pommes de terre et les oignons. Ma grand-mere cultive quelques legumes dans son jardin, donc ils ont une saveur speciale. Au restaurant, je prefere commander du poisson avec des cereales ou un plat bien cuisine, mais pas trop epice."
    }
  },
  {
    id: 7,
    title: "À votre santé",
    page: 97,
    topic: "corps, sommeil, santé, urgences",
    vocabGroups: [
      {
        title: "Les parties du corps",
        words: ["le bras", "le cerveau", "la cheville", "la colonne vertébrale", "le cou", "la cuisse", "le dos", "l'épaule (f.)", "le genou", "la jambe", "le pied", "la tête", "le ventre"]
      },
      {
        title: "La douleur",
        words: ["avoir mal", "la courbature", "souffrir", "soulager", "la tension"]
      },
      {
        title: "Se sentir bien",
        words: ["adopter de bonnes habitudes", "apaisé(e)", "être en pleine forme", "masser", "récupérer", "se remettre", "relâcher ses muscles", "relaxé(e)", "reposé(e)", "se sentir léger, légère", "la sérénité"]
      },
      {
        title: "Le sommeil",
        words: ["le bâillement", "la fatigue physique", "manquer de sommeil", "le repos", "la respiration", "le rêve", "le réveil", "le rythme cardiaque", "s'endormir", "se réveiller", "la sieste"]
      },
      {
        title: "Les mouvements et positions",
        words: ["allongé(e)", "assis(e)", "debout", "s'étirer", "se lever"]
      },
      {
        title: "Les maux",
        words: ["l'allergie (f.)", "l'anxiété (f.)", "l'asthme (m.)", "la fièvre", "l'indigestion (f.)", "l'infection (f.)", "l'insomnie (f.)", "le mal de gorge", "la migraine", "le nez bouché", "le rhume", "le stress", "la toux"]
      },
      {
        title: "Se soigner",
        words: ["l'antibiotique (m.)", "l'antiseptique (m.)", "calmer une douleur", "consulter un/une médecin", "les gouttes (f.)", "le remède", "le sirop", "le traitement"]
      },
      {
        title: "Expressions",
        words: ["donner du tonus", "être patraque", "faire le plus grand bien"]
      },
      {
        title: "Les urgences",
        words: ["l'accident (m.)", "l'ambulance (f.)", "l'ambulancier", "l'ambulancière", "l'appel (m.)", "le/la blessé(e)", "le numéro d'urgence", "le policier", "la policière", "le pompier", "la pompière", "le SAMU", "la victime"]
      }
    ],
    questions: [
      "Dans quelle position dormez-vous ? Donnez des conseils pour bien dormir.",
      "Que faites-vous quand vous manquez de sommeil ?",
      "Vous ne vous sentez pas bien : expliquez vos symptômes à la pharmacie.",
      "Que faut-il faire en cas d'urgence ?"
    ],
    tickets: [
      {
        title: "Билет 7.1 · Сон",
        question: "Vous dormez mal. Expliquez votre problème et donnez trois conseils pour mieux dormir.",
        goal: "Говори 60 секунд. Используй минимум 6 слов про сон и тело.",
        required: ["manquer de sommeil", "le réveil", "s'endormir", "se réveiller", "le dos", "le cou", "relâcher ses muscles", "s'étirer"],
        plan: ["Назвать проблему", "Описать ощущения в теле", "Дать три совета", "Закончить хорошей привычкой"],
        answers: {
          easy: "Je dors mal en ce moment et je manque de sommeil. Le matin, au réveil, je suis fatigué et j'ai parfois mal au dos ou au cou. Pour mieux dormir, il faut éviter les écrans, s'endormir plus tôt et s'étirer doucement au réveil.",
          medium: "En ce moment, je manque de sommeil. Je m'endors tard et je me réveille fatigué. Le matin, j'ai souvent des tensions dans le cou et dans le dos. À mon avis, il faut adopter de bonnes habitudes: manger léger, respirer calmement, relâcher ses muscles et éviter le téléphone avant de dormir.",
          challenge: "Quand je dors mal, je ne suis pas en pleine forme: je manque de sommeil, je me réveille avec des courbatures et parfois une tension dans le cou. Pour améliorer la qualité du repos, je recommande de s'endormir sans écran, de placer correctement sa tête sur l'oreiller, de respirer doucement et de s'étirer au réveil. Ces habitudes peuvent faire le plus grand bien."
        }
      },
      {
        title: "Билет 7.2 · Аптека",
        question: "Vous allez à la pharmacie. Expliquez vos symptômes et demandez un conseil.",
        goal: "Сыграй мини-диалог. Используй симптомы и лекарства.",
        required: ["être patraque", "la fièvre", "la toux", "le nez bouché", "le sirop", "les gouttes", "le remède", "consulter un médecin"],
        plan: ["Поздороваться с фармацевтом", "Назвать симптомы", "Попросить средство", "Сказать, что сделаешь дальше"],
        answers: {
          easy: "Bonjour madame. Je suis un peu patraque. J'ai le nez bouché, je tousse et j'ai un peu de fièvre. Est-ce que vous pouvez me conseiller un sirop ou des gouttes ? Si ça continue, je vais consulter un médecin.",
          medium: "Bonjour, je ne me sens pas très bien depuis deux jours. J'ai le nez bouché, mal à la gorge, de la toux et un peu de fièvre. Je voudrais un remède efficace, peut-être un sirop pour calmer la toux et des gouttes. Si mon état ne s'améliore pas, je consulterai un médecin.",
          challenge: "Bonjour madame, je viens vous demander conseil parce que je suis patraque depuis hier. J'ai le nez bouché, une toux assez forte, de la fièvre et je me sens fatigué. Je préférerais commencer par un remède simple, par exemple un sirop ou des gouttes, mais si les symptômes continuent, je consulterai un médecin pour avoir un traitement adapté."
        }
      },
      {
        title: "Билет 7.3 · Самочувствие",
        question: "Que faites-vous pour être en pleine forme ? Parlez du sommeil, du corps et des habitudes.",
        goal: "Выскажи своё мнение и приведи личные примеры.",
        required: ["être en pleine forme", "adopter de bonnes habitudes", "la fatigue physique", "le repos", "la respiration", "récupérer", "relaxé(e)", "la sérénité"],
        plan: ["Сказать мнение", "Поговорить про сон", "Поговорить про тело", "Назвать две личные привычки"],
        answers: {
          easy: "Pour être en pleine forme, je dois bien dormir et me reposer. Quand j'ai de la fatigue physique, je fais une pause. J'essaie aussi de respirer doucement pour être plus relaxé.",
          medium: "Pour moi, il est important d'adopter de bonnes habitudes. Je dors assez, je fais attention au repos et je prends le temps de récupérer après une journée difficile. La respiration m'aide aussi à me sentir plus relaxé et à retrouver un peu de sérénité.",
          challenge: "À mon avis, être en pleine forme dépend surtout de petites habitudes régulières. Quand je ressens de la fatigue physique, je ne force pas: je me repose, je respire calmement et j'essaie de récupérer. Le sommeil est essentiel, mais la sérénité compte aussi. Si on relâche ses muscles et qu'on garde un bon rythme, on se sent plus léger."
        }
      },
      {
        title: "Билет 7.4 · Срочная помощь",
        question: "Vous voyez un accident. Expliquez ce qu'il faut faire en cas d'urgence.",
        goal: "Используй словарь срочной помощи и вырази мнение.",
        required: ["l'accident", "la victime", "le numéro d'urgence", "l'appel", "l'ambulance", "le SAMU", "le pompier", "le/la blessé(e)"],
        plan: ["Описать ситуацию", "Сказать, кому звонить", "Объяснить приезд помощи", "Дать своё мнение"],
        answers: {
          easy: "Si je vois un accident, je garde mon calme. J'appelle le numéro d'urgence et j'explique où se trouve la victime. Ensuite, une ambulance, le SAMU ou les pompiers peuvent arriver pour aider les blessés.",
          medium: "En cas d'accident, il faut d'abord protéger la victime et appeler le numéro d'urgence. Pendant l'appel, on doit donner l'adresse exacte et expliquer s'il y a des blessés. Après, l'ambulance, le SAMU, les pompiers ou la police peuvent venir sur place.",
          challenge: "À mon avis, en cas d'urgence, la chose la plus importante est de garder son calme. Si je vois un accident, je vérifie la situation sans me mettre en danger, puis j'appelle le numéro d'urgence. Je donne l'adresse, le nombre de victimes et l'état des blessés. Ensuite, l'ambulance, le SAMU, les pompiers ou les policiers peuvent intervenir rapidement."
        }
      }
    ],
    drills: [
      ["Sommeil", "Utilise: s'endormir, se réveiller, la sieste, le réveil, manquer de sommeil."],
      ["Corps", "Explique où tu as mal: le dos, le cou, l'épaule, le genou, la cheville."],
      ["Pharmacie", "Dis tes symptômes puis demande un sirop, des gouttes ou un remède."],
      ["Urgence", "Explique qui arrive: l'ambulance, les pompiers, le SAMU, la police."]
    ],
    answers: {
      easy: "Quand je manque de sommeil, je suis fatigué et je ne suis pas en pleine forme. Pour bien dormir, je m'allonge sur le dos, je pose ma tête sur l'oreiller et j'essaie de relâcher mes muscles.",
      medium: "Si je dors mal, j'ai parfois mal au dos, au cou ou à l'épaule. Je me réveille fatigué, donc j'essaie d'adopter de bonnes habitudes: manger léger, s'étirer au réveil et faire une petite sieste quand c'est possible.",
      challenge: "Quand je manque de sommeil, mon rythme cardiaque est parfois plus rapide et je ne me sens pas reposé. Pour récupérer, je conseille de s'endormir sans écran, de respirer doucement et de relâcher ses muscles. Si une personne est patraque, avec de la fièvre, une toux ou le nez bouché, elle peut consulter un médecin ou demander un remède à la pharmacie."
    }
  },
  {
    id: 8,
    title: "Dans les medias",
    page: 111,
    topic: "information, presse, reseaux sociaux",
    vocab: ["les medias", "s'informer", "la presse", "la television", "la radio", "un podcast", "les reseaux sociaux", "une critique", "interessant", "negatif"],
    questions: [
      "Comment vous informez-vous ?",
      "Aimez-vous les podcasts ?",
      "Faites la critique d'un media."
    ],
    drills: [
      ["Сравнение", "Сравни два медиа, которыми ты пользуешься."],
      ["Критика", "Назови один плюс и один минус."],
      ["Грамматика", "Используй конструкцию: il faut que..."]
    ],
    answers: {
      easy: "Je m'informe surtout sur Internet et les reseaux sociaux. Parfois, je regarde la television. Les podcasts sont interessants quand le sujet est utile.",
      medium: "Pour m'informer, j'utilise Internet, mais je fais attention aux sources. J'aime aussi les podcasts parce qu'on peut les ecouter dans les transports. A mon avis, les reseaux sociaux sont rapides, mais parfois trop superficiels.",
      challenge: "Je pense qu'il faut varier les medias pour mieux comprendre l'actualite. La presse peut etre plus serieuse, la television plus visuelle, et les podcasts plus personnels. Les reseaux sociaux sont pratiques, mais il faut verifier les informations."
    }
  },
  {
    id: 9,
    title: "Consommer responsable",
    page: 125,
    topic: "achats, produits, reparation",
    vocab: ["acheter", "un produit", "responsable", "reparer", "la matiere", "le travail manuel", "un conseil", "un service", "echanger", "economiser"],
    questions: [
      "Achetez-vous souvent des objets neufs ?",
      "Comment consommer responsable ?",
      "Demandez un service a quelqu'un."
    ],
    drills: [
      ["Совет", "Дай два совета в условном наклонении."],
      ["Грамматика", "Используй: en économisant, en réparant, en échangeant."],
      ["Просьба", "Вежливо попроси о помощи."]
    ],
    answers: {
      easy: "Pour consommer responsable, on peut acheter moins et reparer les objets. Je pense qu'il faut economiser et choisir des produits utiles.",
      medium: "Je n'achete pas toujours des objets neufs. Parfois, il est possible de reparer, d'echanger ou de demander un service. C'est plus responsable et souvent moins cher.",
      challenge: "A mon avis, consommer responsable signifie reflechir avant d'acheter. On peut economiser de l'argent en reparant les objets, en choisissant de bonnes matieres et en evitant les produits inutiles. C'est aussi une facon de respecter l'environnement."
    }
  },
  {
    id: 10,
    title: "Envies d'ailleurs",
    page: 139,
    topic: "voyage, tourisme, hebergement",
    vocab: ["un voyage", "un renseignement", "l'hebergement", "un sejour", "l'avion", "une visite", "un site touristique", "un blog", "agace", "decouvrir"],
    questions: [
      "Quel voyage aimeriez-vous faire ?",
      "Demandez des renseignements sur un sejour.",
      "Racontez une visite touristique."
    ],
    drills: [
      ["Агентство", "Задай пять вопросов о поездке."],
      ["Рассказ", "Расскажи в passé composé и imparfait."],
      ["Туризм", "Представь туристическое место."]
    ],
    answers: {
      easy: "J'aimerais faire un voyage en France. Je voudrais decouvrir Paris et visiter des sites touristiques. Pour l'hebergement, je prefere un petit hotel.",
      medium: "Pour mon prochain voyage, j'aimerais demander des renseignements sur le prix, l'hebergement et les visites. Je voudrais faire un sejour calme, mais aussi decouvrir des lieux touristiques.",
      challenge: "J'aimerais organiser un voyage ou je pourrais decouvrir une ville et aussi la nature. Avant de partir, je demanderais des renseignements sur l'avion, l'hebergement, les prestations et les visites touristiques. Ensuite, j'ecrirais peut-etre un article de blog pour raconter mon sejour."
    }
  },
  {
    id: 11,
    title: "De jolis parcours",
    page: 153,
    topic: "etudes, travail, projets",
    vocab: ["les etudes", "la scolarite", "un diplome", "un secteur", "une profession", "un CV", "un emploi", "un projet", "remercier", "evident"],
    questions: [
      "Parlez de vos projets professionnels.",
      "Quel travail ideal aimeriez-vous faire ?",
      "Remerciez une personne importante."
    ],
    drills: [
      ["Проект", "Используй: je voudrais, j'aimerais, je vais."],
      ["Устное CV", "Представь себя за 60 секунд."],
      ["Благодарность", "Сформулируй простую и формальную благодарность."]
    ],
    answers: {
      easy: "Je fais mes etudes et je pense a mon avenir professionnel. J'aimerais trouver un emploi interessant. Mon projet est de progresser et d'obtenir un bon diplome.",
      medium: "Mon travail ideal serait dans un secteur ou je peux apprendre et communiquer. Pour cela, il faut un bon CV, des competences et un projet clair. Je voudrais aussi remercier les personnes qui m'aident.",
      challenge: "Pour mes projets professionnels, je voudrais choisir une profession utile et interessante. Il est evident que les etudes et les diplomes sont importants, mais l'experience compte aussi. A l'oral, je veux pouvoir presenter mon parcours clairement, comme dans un entretien."
    }
  },
  {
    id: 12,
    title: "Soif de nature",
    page: 167,
    topic: "environnement, nature, animaux",
    vocab: ["la nature", "l'environnement", "un espace protege", "la pollution", "agir", "un animal", "un oiseau", "un jardin", "protester", "savoir faire"],
    questions: [
      "Que faites-vous pour proteger la nature ?",
      "Aimez-vous les animaux ?",
      "Pourquoi faut-il agir contre la pollution ?"
    ],
    drills: [
      ["Цель", "Используй: pour protéger, pour aider, pour éviter."],
      ["Мнение", "Вырази беспокойство, потом согласие."],
      ["Действие", "Назови три конкретных действия."]
    ],
    answers: {
      easy: "J'aime la nature et les animaux. Pour proteger l'environnement, je peux trier les dechets et eviter la pollution. Je pense qu'il faut agir.",
      medium: "Pour proteger la nature, on peut respecter les espaces proteges, aider les animaux et faire attention a la pollution. Dans un jardin, on peut aussi observer les oiseaux.",
      challenge: "Je suis inquiet quand je vois la pollution, parce que l'environnement est important pour tout le monde. Il faut agir pour proteger la nature, les espaces proteges et les animaux. Chacun peut faire quelque chose: trier, economiser l'eau, marcher plus souvent et protester quand c'est necessaire."
    }
  }
];

const textbookVocabGroups = {
  1: [
    { title: "Vivre", words: ["avoir un coup de foudre", "avoir un enfant", "déménager", "être célibataire", "être en couple", "faire connaissance", "grandir", "naître", "rencontrer quelqu'un", "se rencontrer", "se faire des ami(e)s", "se marier avec quelqu'un", "se séparer de quelqu'un", "s'installer", "tomber amoureux, amoureuse de quelqu'un"] },
    { title: "La vie personnelle", words: ["le/la célibataire", "le conjoint", "la conjointe", "le couple", "l'enfant (m., f.)", "la femme", "le mari", "le/la meilleur(e) ami(e)", "la rencontre", "la vie de famille"] },
    { title: "Le parcours scolaire et professionnel", words: ["chercher du travail", "devenir trader", "devenir écrivain(e)", "devenir humoriste", "faire ses études", "finir ses études", "faire un séjour Erasmus", "partir en Erasmus", "faire un stage", "obtenir un diplôme", "travailler dans une entreprise"] },
    { title: "Les professions artistiques", words: ["l'acteur", "l'actrice", "le chanteur", "la chanteuse", "le compositeur", "la compositrice", "l'écrivain(e)", "l'interprète", "le/la musicien(ne)", "le/la scénariste"] },
    { title: "Les lieux culturels", words: ["le château", "le cinéma", "le cirque", "le monument", "le musée", "le théâtre"] },
    { title: "Sortir", words: ["aller au cirque", "aller à un concert", "aller à un festival", "faire une balade", "faire une promenade", "faire une visite guidée", "visiter une exposition", "visiter un monument", "visiter un musée", "voir une pièce de théâtre", "voir un spectacle"] },
    { title: "Les activités en plein air", words: ["l'accrobranche (m.)", "le canoë kayak", "l'escalade (f.)", "le foot(ball)", "le jardinage", "le stand-up paddle", "la randonnée", "les sports aquatiques", "les sports nautiques", "le vélo", "la via ferrata"] },
    { title: "Les activités à l'intérieur", words: ["le bricolage", "les jeux de société", "les jeux vidéo", "le judo", "la peinture"] },
    { title: "Pratiquer une activité", words: ["bricoler", "être amateur, amatrice", "être professionnel(le)", "faire du vélo", "faire de l'escalade", "faire de l'accrobranche", "faire une compétition de", "faire une randonnée", "faire une via ferrata", "jardiner", "jouer au foot", "faire du foot", "jouer aux jeux vidéo", "peindre", "faire un tableau", "regarder une série", "regarder un match"] }
  ],
  2: [
    { title: "La mémoire", words: ["l'album photos (m.)", "oublier", "raconter un souvenir", "replonger dans son enfance", "se rappeler", "se souvenir"] },
    { title: "Les sens", words: ["le bruit", "le chant des oiseaux", "le goût", "goûter", "l'odeur (f.)", "le parfum", "regarder", "la saveur", "sentir bon", "sentir mauvais", "tenir la main", "voir", "la vue"] },
    { title: "Les souvenirs", words: ["un souvenir d'adolescence", "un souvenir d'école", "un souvenir d'enfance", "un souvenir de famille", "un souvenir de jeunesse", "un souvenir de vacances"] },
    { title: "Qualifier un souvenir", words: ["agréable", "bon", "difficile", "heureux", "inoubliable", "joyeux", "mauvais", "triste"] },
    { title: "À la mer", words: ["à marée basse", "à marée haute", "la barrière de corail", "la côte", "la dune", "l'île (f.)", "la mouette", "la plage", "le port", "le sable"] },
    { title: "À la campagne", words: ["le champ", "la ferme", "la prairie"] },
    { title: "À la montagne", words: ["le chalet", "le lac", "le sommet"] },
    { title: "La météo", words: ["la canicule", "la chaleur", "la fraîcheur", "le ciel bleu", "le ciel gris", "le climat", "l'orage (m.)", "la pluie", "le soleil", "la température", "les degrés", "le temps", "un temps humide", "un temps sec", "un temps gris", "le vent"] }
  ],
  3: [
    { title: "Les types de logement", words: ["l'appartement (m.)", "le foyer", "la résidence universitaire", "l'immeuble (m.)", "la maison", "le studio", "le T1", "le T2", "le F1", "le F2"] },
    { title: "Les parties d'un logement", words: ["le balcon", "la buanderie", "le bureau", "la chambre", "le couloir", "la cuisine", "la salle à manger", "la salle d'eau", "la salle de bain", "le salon", "le séjour", "la véranda"] },
    { title: "L'immeuble ou la maison", words: ["l'ascenseur (m.)", "la cave", "le sous-sol", "l'étage (m.)", "le garage", "le grenier", "le jardin", "le local à vélos", "le rez-de-chaussée"] },
    { title: "L'annonce immobilière", words: ["ancien(ne)", "neuf, neuve", "calme", "bruyant(e)", "clair(e)", "sombre", "confortable", "disponible", "équipé(e)", "le mètre carré", "meublé(e)", "rénové(e)", "la superficie"] },
    { title: "Les frais et les services", words: ["l'abonnement à Internet (m.)", "l'assurance (f.)", "les charges (f.)", "le chauffage", "l'eau (f.)", "l'électricité (f.)", "le gaz", "le loyer", "le ménage"] },
    { title: "Les habitant(e)s", words: ["la cohabitation", "le/la colocataire", "la colocation", "le/la locataire", "le/la propriétaire", "vivre seul(e)", "vivre en couple", "vivre en colocation"] },
    { title: "Les meubles", words: ["le bureau", "le canapé", "le sofa", "le divan", "le canapé-lit", "la chaise", "l'étagère (f.)", "le lit une place", "le lit deux places", "le placard", "les rangements (m.)", "la table", "la table basse", "la table de chevet", "le tabouret", "le téléviseur", "la télé"] },
    { title: "La décoration", words: ["le cadre photo", "le coussin", "l'horloge (f.)", "la lampe", "la plante", "le rideau"] },
    { title: "L'équipement", words: ["les appareils électroménagers (m.)", "la couette", "la douche", "l'évier (m.)", "le four", "le lavabo", "le lave-linge", "la machine à laver", "le lave-vaisselle", "la machine à café", "le réfrigérateur", "le frigo"] },
    { title: "La ville et le quartier", words: ["l'avenue (f.)", "le bâtiment", "les bureaux (m.)", "les espaces verts (m.)", "le magasin", "la rue", "ancien(ne)", "animé(e)", "chic", "commerçant(e)", "historique", "populaire", "tranquille", "vivant(e)"] }
  ],
  4: [
    { title: "La tête et le visage", words: ["barbu", "chauve", "dégarni", "les cheveux gris", "les cheveux bruns", "les cheveux longs", "les cheveux courts", "la fossette", "le menton", "le sourire"] },
    { title: "Le corps, la silhouette", words: ["âgé(e)", "vieux, vieille", "jeune", "corpulent(e)", "costaud(e)", "rond(e)", "être de grande taille", "être de petite taille", "faire du 44", "faire une taille 44", "fort(e)", "mesurer 1,60 m", "musclé(e)", "sec, sèche"] },
    { title: "L'apparence", words: ["avoir bonne mine", "avoir mauvaise mine", "avoir un corps parfait", "avoir un corps imparfait", "les canons de beauté (m.)", "les critères de beauté (m.)", "être bien dans sa peau", "se sentir bien dans sa peau", "rendre beau", "rendre belle"] },
    { title: "La ressemblance", words: ["avoir la tête de l'emploi", "être le sosie de", "ressembler à"] },
    { title: "La mode", words: ["le créateur", "la créatrice", "défiler", "le/la mannequin", "porter des vêtements", "poser"] },
    { title: "Les qualités", words: ["chaleureux, chaleureuse", "curieux, curieuse", "discret, discrète", "doux, douce", "extraverti(e)", "fidèle", "honnête", "indépendant(e)", "optimiste", "ordonné(e)", "prudent(e)", "réfléchi(e)", "spontané(e)", "travailleur, travailleuse"] },
    { title: "Les défauts", words: ["autoritaire", "bruyant(e)", "cruel(le)", "envieux, envieuse", "inquiet, inquiète", "maniaque", "menteur, menteuse", "paresseux, paresseuse", "pessimiste", "peureux, peureuse", "prétentieux, prétentieuse", "sans gêne", "stupide", "superficiel(le)", "têtu(e)"] },
    { title: "Expressions", words: ["avoir des yeux de lynx", "avoir une mémoire d'éléphant", "être têtu(e) comme une mule", "être têtu(e) comme un âne"] }
  ],
  5: [
    { title: "Le progrès", words: ["le chercheur", "la chercheuse", "la découverte", "l'énergie solaire (f.)", "l'évolution (f.)", "fabriquer", "l'innovation (f.)", "inventer", "l'inventeur", "l'inventrice", "l'invention (f.)", "la nouveauté", "la technologie"] },
    { title: "Les machines", words: ["l'appareil (m.)", "le moteur", "la navette", "le robot"] },
    { title: "Le fonctionnement des objets", words: ["être en panne", "tomber en panne", "fonctionner", "marcher bien", "marcher mal"] },
    { title: "Les caractéristiques des objets", words: ["automatique", "autonome", "électrique", "futuriste", "indispensable", "pratique", "robotisé(e)", "utile", "inutile"] },
    { title: "Les innovations technologiques", words: ["le GPS", "l'hologramme (m.)", "l'imprimante 3D (f.)", "l'intelligence artificielle (f.)", "le logiciel", "la reconnaissance faciale", "la tablette"] },
    { title: "Les innovations imaginaires", words: ["la soucoupe volante", "la téléportation"] },
    { title: "Le téléphone", words: ["l'appel (m.)", "la batterie", "le selfie", "le smartphone", "le SMS", "le texto", "le téléphone fixe", "le téléphone portable"] },
    { title: "Téléphoner", words: ["contacter quelqu'un", "décrocher", "raccrocher", "éteindre", "allumer", "être joignable", "répondre au téléphone", "téléphoner à quelqu'un", "appeler quelqu'un"] },
    { title: "L'informatique", words: ["le clavier", "la clé USB", "l'écran (m.)", "l'imprimante (f.)", "imprimer", "le PC", "l'ordinateur", "la souris"] },
    { title: "Internet", words: ["l'appli(cation) (f.)", "se connecter", "se désabonner", "en ligne", "envoyer un courriel", "faire une visioconférence", "le mail", "l'e-mail", "le courriel", "le réseau social", "le site Internet", "télécharger un document", "télécharger une vidéo", "télécharger une photo"] }
  ],
  6: [
    { title: "Les légumes", words: ["l'aubergine (f.)", "l'avocat (m.)", "la betterave", "la carotte", "le céleri", "la courge", "l'endive (f.)", "le navet", "l'oignon (m.)", "le poireau", "le radis"] },
    { title: "Les légumes secs et les céréales", words: ["la farine", "les lentilles (f.)", "les pois chiches (m.)", "le riz", "la semoule"] },
    { title: "Les fruits secs", words: ["l'amande (f.)", "la banane", "la framboise", "la groseille", "le kiwi", "la mûre", "la myrtille", "la poire", "la prune", "les raisins secs (m.)"] },
    { title: "Les viandes", words: ["le bœuf", "le mouton", "le poulet"] },
    { title: "Les poissons et fruits de mer", words: ["le colin", "les crevettes (f.)", "le saumon"] },
    { title: "Les herbes et les épices", words: ["la cannelle", "la coriandre", "le cumin", "le curcuma", "le gingembre", "la menthe", "la muscade", "le safran"] },
    { title: "Les quantités", words: ["une barquette de framboises", "une botte d'oignons", "une boule de glace", "un bouquet de menthe", "une feuille de menthe", "une pincée de sel", "une tablette de chocolat"] },
    { title: "Les actions sur les aliments", words: ["ajouter", "couper en morceaux", "faire cuire", "cuire", "laver", "mélanger", "mettre au four", "enfourner", "préchauffer le four", "préparer", "laisser refroidir", "refroidir", "servir", "sortir du four", "verser"] },
    { title: "Les lieux", words: ["le bistrot", "la brasserie", "le fast-food", "le restaurant étoilé", "le restaurant gastronomique", "le restaurant végan", "le restaurant végétarien", "le traiteur"] },
    { title: "La restauration", words: ["à emporter", "sur place", "l'ambiance (f.)", "commander des plats", "fait maison", "la nappe", "le pourboire", "les produits frais", "les produits de qualité", "le serveur", "la serveuse", "le service", "le tablier"] },
    { title: "Les plats", words: ["le bœuf bourguignon", "le bouillon", "la choucroute", "le clafoutis", "le confit", "le couscous", "les crêpes (f.)", "le flan", "le fondant au chocolat", "le gratin", "le pâté", "les poireaux-vinaigrette", "le pot-au-feu", "la purée", "la ratatouille", "les saucisses (f.)", "le tartare", "la tartiflette"] },
    { title: "La cuisson de la viande", words: ["à point", "bien cuit(e)", "saignant(e)"] },
    { title: "Les goûts et sensations", words: ["acide", "amer, amère", "épicé(e)", "pimenté(e)", "fade", "goûteux, goûteuse", "gras, grasse", "salé(e)", "sucré(e)"] },
    { title: "Manger", words: ["déguster", "goûter", "grignoter", "se régaler"] },
    { title: "Les personnes", words: ["allergique à", "difficile", "gourmand(e)", "gourmet", "végan(e)", "végétarien(ne)"] }
  ],
  7: [
    { title: "Les parties du corps", words: ["le bras", "le cerveau", "la cheville", "la colonne vertébrale", "le cou", "la cuisse", "le dos", "l'épaule (f.)", "le genou", "la jambe", "le pied", "la tête", "le ventre"] },
    { title: "La douleur", words: ["avoir mal", "la courbature", "souffrir", "soulager", "la tension"] },
    { title: "Se sentir bien", words: ["adopter de bonnes habitudes", "apaisé(e)", "être en pleine forme", "masser", "récupérer", "se remettre", "relâcher ses muscles", "relaxé(e)", "reposé(e)", "se sentir léger, légère", "la sérénité"] },
    { title: "Le sommeil", words: ["le bâillement", "la fatigue physique", "manquer de sommeil", "le repos", "la respiration", "le rêve", "le réveil", "le rythme cardiaque", "s'endormir", "se réveiller", "la sieste"] },
    { title: "Les mouvements et positions", words: ["allongé(e)", "assis(e)", "debout", "s'étirer", "se lever"] },
    { title: "Les maux", words: ["l'allergie (f.)", "l'anxiété (f.)", "l'asthme (m.)", "la fièvre", "l'indigestion (f.)", "l'infection (f.)", "l'insomnie (f.)", "le mal de gorge", "la migraine", "le nez bouché", "le rhume", "le stress", "la toux"] },
    { title: "Se soigner", words: ["l'antibiotique (m.)", "l'antiseptique (m.)", "calmer une douleur", "consulter un/une médecin", "les gouttes (f.)", "le remède", "le sirop", "le traitement"] },
    { title: "Expressions", words: ["donner du tonus", "être patraque", "faire le plus grand bien"] },
    { title: "Les urgences", words: ["l'accident (m.)", "l'ambulance (f.)", "l'ambulancier", "l'ambulancière", "l'appel (m.)", "le/la blessé(e)", "le numéro d'urgence", "le policier", "la policière", "le pompier", "la pompière", "le SAMU", "la victime"] }
  ],
  8: [
    { title: "L'information", words: ["la diffusion en direct", "la diffusion en streaming", "le documentaire", "l'enquête (f.)", "le reportage", "le journalisme numérique", "le/la journaliste", "les médias", "la plateforme", "le(s) point(s) de vue", "publier un article", "la revue de presse"] },
    { title: "S'informer", words: ["l'abonnement à (m.)", "être au courant de", "regarder les nouvelles", "regarder les informations", "s'abonner à un média", "suivre l'actualité"] },
    { title: "La presse écrite", words: ["l'article (m.)", "le dessinateur", "la dessinatrice", "le journal", "le magazine", "la revue", "le numéro", "la presse en ligne", "la presse papier", "le titre"] },
    { title: "La télévision", words: ["la chaîne", "le direct", "l'émission (f.)", "le journal télévisé", "le JT", "le téléviseur", "la télé(vision)"] },
    { title: "Les rubriques de l'info", words: ["actualité internationale", "actualité nationale", "actualité régionale", "culture", "écologie", "économie", "météo", "politique", "société", "sport"] },
    { title: "La radio, les podcasts", words: ["l'auditeur", "l'auditrice", "les contenus sonores (m.)", "l'écoute (f.)", "écouter des podcasts", "l'émission de radio (f.)", "l'épisode (m.)", "le programme de radio", "raconter", "la voix"] },
    { title: "Les réseaux sociaux", words: ["commenter", "être connecté(e)", "être en contact avec", "être sur un réseau social", "les fausses nouvelles", "les infox", "l'internaute (m./f.)", "ouvrir un compte sur un réseau social", "s'inscrire sur un réseau social", "fermer son compte", "quitter un réseau social", "poster des photos", "regarder une vidéo", "suivre quelqu'un sur un réseau"] },
    { title: "La communication", words: ["diffuser une information", "un outil de communication", "un moyen de communication", "sensibiliser un public", "transmettre des connaissances"] }
  ],
  9: [
    { title: "Consommer", words: ["acheter", "l'argent (m.)", "dépenser", "donner", "économiser", "emprunter", "jeter", "louer", "négocier", "partager", "payer", "vendre"] },
    { title: "Le produit", words: ["cher", "la couleur", "gratuit", "la marque", "neuf", "d'occasion", "le prix", "en promotion", "la taille"] },
    { title: "Les personnes", words: ["l'acheteur", "l'acheteuse", "le client", "la cliente", "le consommateur", "la consommatrice", "le particulier", "l'utilisateur", "l'utilisatrice", "le vendeur", "la vendeuse"] },
    { title: "Les catégories de produits", words: ["l'alimentation (f.)", "l'électroménager (m.)", "le matériel de sport", "le meuble", "le multimédia", "le produit de beauté", "le vêtement"] },
    { title: "Les travaux manuels", words: ["l'atelier (m.)", "la couture", "créer", "la cuisine", "la décoration", "la mécanique", "monter un meuble", "le tricot", "le tutoriel"] },
    { title: "Les matières", words: ["en bois", "en carton", "en coton", "en cuir", "en fer", "en jean", "en laine", "en papier", "en plastique", "en tissu", "en verre"] },
    { title: "La réparation", words: ["abîmé(e)", "cassé(e)", "changer une pièce", "la panne", "la pièce", "poncer", "réparer", "le technicien", "la technicienne"] },
    { title: "L'équipement", words: ["l'échelle (f.)", "l'outil (m.)", "la ponceuse", "la scie", "la tondeuse"] }
  ],
  10: [
    { title: "L'hébergement", words: ["l'auberge de jeunesse (f.)", "le camping", "chez l'habitant", "l'hôtel (m.)", "passer la nuit chez quelqu'un"] },
    { title: "Le séjour", words: ["le circuit", "la croisière", "le départ", "l'arrivée (f.)", "la destination", "la direction", "faire le tour de France", "faire le tour du monde", "l'itinéraire", "le/la touriste"] },
    { title: "L'avion", words: ["l'aéroport (m.)", "atterrir", "décoller", "les bagages (m.)", "le billet", "la compagnie aérienne", "le vol direct"] },
    { title: "Les prestations du séjour", words: ["la chambre double", "la chambre simple", "compris", "inclus", "la demi-pension", "la pension complète", "le petit déjeuner", "le repas"] },
    { title: "La visite touristique", words: ["l'audioguide (m.)", "la brochure touristique", "le bus touristique", "l'excursion (f.)", "le/la guide", "l'histoire (f.)", "les informations pratiques (f.)", "l'office de tourisme (m.)", "la visite guidée"] },
    { title: "Les sites", words: ["la cascade", "la falaise", "la fontaine", "la grotte", "le pont", "les ruines (f.)", "le volcan"] },
    { title: "Les types de tourisme", words: ["le tourisme de proximité", "le tourisme local", "le tourisme lent", "le slow tourisme", "le tourisme durable", "le tourisme responsable"] }
  ],
  11: [
    { title: "Le système scolaire français", words: ["l'école primaire", "le collège", "le lycée", "l'université (f.)"] },
    { title: "Les personnes", words: ["un(e) élève", "un(e) étudiant(e)", "un(e) professeur(e)", "un(e) enseignant(e)", "le/la prof de français", "le/la prof de maths"] },
    { title: "La scolarité", words: ["apprendre", "le cours", "enseigner", "la matière", "la salle de classe", "en classe"] },
    { title: "L'évaluation", words: ["avoir une bonne note", "avoir une mauvaise note", "la mention assez bien", "la mention bien", "la mention très bien", "noter", "mettre une note", "passer le bac", "passer un examen", "rater un examen", "rater son année", "redoubler une classe", "redoubler une année", "réussir un examen", "réussir son année"] },
    { title: "Les études", words: ["l'année de césure", "avoir bac +4", "commencer ses études", "arrêter ses études", "être en 1re année", "être en 2e année", "être en 3e année", "être étudiant(e) en informatique", "la fac de droit", "faire des études littéraires", "la formation en alternance"] },
    { title: "Les diplômes", words: ["le baccalauréat", "le bac", "un bachelor", "une licence", "un master 1", "M1", "un master 2", "M2"] },
    { title: "Les secteurs professionnels", words: ["la beauté", "le bien-être", "la communication", "la formation", "l'informatique (f.)", "le management", "le marketing", "le nettoyage", "le numérique", "la restauration", "le sport"] },
    { title: "Les professions", words: ["l'agent(e) d'entretien", "le/la chef(fe) d'entreprise", "l'entrepreneur(e)", "le coiffeur", "la coiffeuse", "l'esthéticien(ne)", "le formateur", "la formatrice", "l'ingénieur(e)", "le/la manucure", "le masseur", "la masseuse", "le/la secrétaire", "le tatoueur", "la tatoueuse"] },
    { title: "Le travail", words: ["l'ambiance de travail", "le coworking", "l'emploi", "le job", "le poste", "le travail", "l'employé(e)", "le/la salarié(e)", "l'entreprise", "la société", "les horaires", "le local", "le matériel", "le tarif", "le travail à distance", "le travail en présentiel", "le travail en équipe", "le travail collaboratif", "le travailleur indépendant", "la travailleuse indépendante"] },
    { title: "Le CV et la recherche d'emploi", words: ["les activités extra-professionnelles", "les centres d'intérêt", "l'annonce", "l'offre d'emploi", "le/la candidat(e)", "chercher du travail", "trouver du travail", "la compétence", "le curriculum vitae", "le CV", "l'entretien d'embauche", "l'expérience", "le parcours", "la recherche d'emploi", "le recrutement"] }
  ],
  12: [
    { title: "Les milieux naturels, les espaces protégés", words: ["l'archipel (m.)", "le désert", "la forêt tropicale", "l'île (f.)", "le lagon", "le milieu naturel", "la nature", "l'océan (m.)", "le parc naturel", "la planète", "la rivière", "le site naturel"] },
    { title: "L'environnement", words: ["la biodiversité", "l'écologie (f.)", "écologique", "l'espèce protégée (f.)"] },
    { title: "Agir pour l'environnement", words: ["se mobiliser", "préserver la biodiversité", "protéger l'environnement", "recycler", "sauver la planète", "trier", "valoriser la biodiversité"] },
    { title: "La pollution", words: ["le changement climatique", "le déchet", "la destruction", "disparaître", "être en danger", "le gaspillage", "les pesticides (m.)", "le plastique", "polluant(e)", "la poubelle", "le recyclage", "la surexploitation des ressources"] },
    { title: "Les animaux domestiques/de compagnie", words: ["le chat", "le cheval", "les chevaux", "la chèvre", "le chien", "le lapin", "le mouton", "le poisson", "la vache"] },
    { title: "Les animaux du jardin", words: ["l'abeille (f.)", "l'araignée (f.)", "le caméléon", "l'escargot (m.)", "la libellule", "le serpent", "la tortue"] },
    { title: "Les mammifères sauvages", words: ["le dauphin", "l'hippopotame (m.)", "la panthère", "le rat", "le singe", "le tigre"] },
    { title: "Les oiseaux", words: ["l'aigle (m.)", "le canard", "le canari", "la chouette", "le coq", "la poule"] },
    { title: "Expressions imagées", words: ["se coucher avec les poules", "poser un lapin", "avancer comme une tortue"] }
  ]
};

modules.forEach((module) => {
  if (textbookVocabGroups[module.id]) {
    module.vocabGroups = textbookVocabGroups[module.id];
    delete module.vocab;
  }
});

const activeModules = modules.filter((module) => module.id >= 7);
const savedModuleId = Number(localStorage.getItem("moduleId"));
const initialModuleId = activeModules.some((module) => module.id === savedModuleId) ? savedModuleId : 7;

const translations = {
  "le bras": "рука",
  "le cerveau": "мозг",
  "la cheville": "лодыжка",
  "la colonne vertébrale": "позвоночник",
  "le cou": "шея",
  "la cuisse": "бедро",
  "le dos": "спина",
  "l'épaule (f.)": "плечо",
  "le genou": "колено",
  "la jambe": "нога",
  "le pied": "ступня, стопа",
  "la tête": "голова",
  "le ventre": "живот",
  "avoir mal": "испытывать боль, болеть",
  "la courbature": "ломота, мышечная боль",
  "souffrir": "страдать, болеть",
  "soulager": "облегчать боль",
  "la tension": "напряжение",
  "adopter de bonnes habitudes": "приобрести хорошие привычки",
  "apaisé(e)": "умиротворенный, спокойный",
  "être en pleine forme": "быть в отличной форме",
  "masser": "массировать",
  "récupérer": "восстанавливаться",
  "se remettre": "приходить в себя, восстанавливаться",
  "relâcher ses muscles": "расслабить мышцы",
  "relaxé(e)": "расслабленный",
  "reposé(e)": "отдохнувший",
  "se sentir léger, légère": "чувствовать легкость",
  "la sérénité": "спокойствие, безмятежность",
  "le bâillement": "зевок",
  "la fatigue physique": "физическая усталость",
  "manquer de sommeil": "недосыпать",
  "le repos": "отдых",
  "la respiration": "дыхание",
  "le rêve": "сон, сновидение",
  "le réveil": "пробуждение; будильник",
  "le rythme cardiaque": "сердечный ритм",
  "s'endormir": "засыпать",
  "se réveiller": "просыпаться",
  "la sieste": "дневной сон",
  "allongé(e)": "лежащий",
  "assis(e)": "сидящий",
  "debout": "стоя",
  "s'étirer": "потягиваться, растягиваться",
  "se lever": "вставать",
  "l'allergie (f.)": "аллергия",
  "l'anxiété (f.)": "тревожность",
  "l'asthme (m.)": "астма",
  "la fièvre": "температура, жар",
  "l'indigestion (f.)": "несварение",
  "l'infection (f.)": "инфекция",
  "l'insomnie (f.)": "бессонница",
  "le mal de gorge": "боль в горле",
  "la migraine": "мигрень",
  "le nez bouché": "заложенный нос",
  "le rhume": "простуда, насморк",
  "le stress": "стресс",
  "la toux": "кашель",
  "l'antibiotique (m.)": "антибиотик",
  "l'antiseptique (m.)": "антисептик",
  "calmer une douleur": "успокоить, снять боль",
  "consulter un/une médecin": "обратиться к врачу",
  "les gouttes (f.)": "капли",
  "le remède": "средство, лекарство",
  "le sirop": "сироп",
  "le traitement": "лечение",
  "donner du tonus": "придавать бодрость",
  "être patraque": "плохо себя чувствовать",
  "faire le plus grand bien": "очень помочь, пойти на пользу",
  "l'accident (m.)": "несчастный случай, авария",
  "l'ambulance (f.)": "скорая помощь",
  "l'ambulancier": "работник скорой помощи",
  "l'ambulancière": "работница скорой помощи",
  "l'appel (m.)": "звонок, вызов",
  "le/la blessé(e)": "раненый, пострадавший",
  "le numéro d'urgence": "номер экстренной помощи",
  "le policier": "полицейский",
  "la policière": "полицейская",
  "le pompier": "пожарный, спасатель",
  "la pompière": "пожарная, спасательница",
  "le SAMU": "служба скорой медицинской помощи",
  "la victime": "жертва, пострадавший"
};

Object.assign(translations, {
  "la diffusion en direct": "прямой эфир",
  "la diffusion en streaming": "стриминг, онлайн-трансляция",
  "le documentaire": "документальный фильм",
  "l'enquête (f.)": "расследование",
  "le reportage": "репортаж",
  "le journalisme numérique": "цифровая журналистика",
  "le/la journaliste": "журналист, журналистка",
  "les médias": "медиа, СМИ",
  "la plateforme": "платформа",
  "le(s) point(s) de vue": "точка зрения",
  "publier un article": "опубликовать статью",
  "la revue de presse": "обзор прессы",
  "l'abonnement à (m.)": "подписка на",
  "être au courant de": "быть в курсе",
  "regarder les nouvelles": "смотреть новости",
  "regarder les informations": "смотреть новости",
  "s'abonner à un média": "подписаться на медиа",
  "suivre l'actualité": "следить за новостями",
  "l'article (m.)": "статья",
  "le dessinateur": "художник, иллюстратор",
  "la dessinatrice": "художница, иллюстратор",
  "le journal": "газета",
  "le magazine": "журнал",
  "la revue": "журнал, обзор",
  "le numéro": "номер, выпуск",
  "la presse en ligne": "онлайн-пресса",
  "la presse papier": "бумажная пресса",
  "le titre": "заголовок",
  "la chaîne": "телеканал",
  "le direct": "прямой эфир",
  "l'émission (f.)": "передача",
  "le journal télévisé": "телевизионные новости",
  "le JT": "выпуск новостей",
  "le téléviseur": "телевизор",
  "la télé(vision)": "телевидение",
  "actualité internationale": "международные новости",
  "actualité nationale": "национальные новости",
  "actualité régionale": "региональные новости",
  "culture": "культура",
  "écologie": "экология",
  "économie": "экономика",
  "météo": "погода",
  "politique": "политика",
  "société": "общество",
  "sport": "спорт",
  "le sport": "спорт",
  "l'auditeur": "слушатель",
  "l'auditrice": "слушательница",
  "les contenus sonores (m.)": "аудиоконтент",
  "l'écoute (f.)": "прослушивание",
  "écouter des podcasts": "слушать подкасты",
  "l'émission de radio (f.)": "радиопередача",
  "l'épisode (m.)": "эпизод",
  "le programme de radio": "радиопрограмма",
  "raconter": "рассказывать",
  "la voix": "голос",
  "commenter": "комментировать",
  "être connecté(e)": "быть онлайн",
  "être en contact avec": "быть на связи с",
  "être sur un réseau social": "быть в соцсети",
  "les fausses nouvelles": "фейковые новости",
  "les infox": "фейки",
  "l'internaute (m./f.)": "интернет-пользователь",
  "ouvrir un compte sur un réseau social": "открыть аккаунт в соцсети",
  "s'inscrire sur un réseau social": "зарегистрироваться в соцсети",
  "fermer son compte": "закрыть аккаунт",
  "quitter un réseau social": "уйти из соцсети",
  "poster des photos": "публиковать фото",
  "regarder une vidéo": "смотреть видео",
  "suivre quelqu'un sur un réseau": "подписаться на кого-то в сети",
  "diffuser une information": "распространять информацию",
  "un outil de communication": "инструмент коммуникации",
  "un moyen de communication": "средство коммуникации",
  "sensibiliser un public": "привлечь внимание аудитории",
  "transmettre des connaissances": "передавать знания",

  "acheter": "покупать",
  "l'argent (m.)": "деньги",
  "dépenser": "тратить",
  "donner": "отдавать, дарить",
  "économiser": "экономить",
  "emprunter": "брать взаймы",
  "jeter": "выбрасывать",
  "louer": "арендовать",
  "négocier": "договариваться, торговаться",
  "partager": "делиться",
  "payer": "платить",
  "vendre": "продавать",
  "cher": "дорогой",
  "la couleur": "цвет",
  "gratuit": "бесплатный",
  "la marque": "марка, бренд",
  "neuf": "новый",
  "d'occasion": "подержанный",
  "le prix": "цена",
  "en promotion": "по акции",
  "la taille": "размер",
  "l'acheteur": "покупатель",
  "l'acheteuse": "покупательница",
  "le client": "клиент",
  "la cliente": "клиентка",
  "le consommateur": "потребитель",
  "la consommatrice": "потребительница",
  "le particulier": "частное лицо",
  "l'utilisateur": "пользователь",
  "l'utilisatrice": "пользовательница",
  "le vendeur": "продавец",
  "la vendeuse": "продавщица",
  "l'alimentation (f.)": "еда, продукты питания",
  "l'électroménager (m.)": "бытовая техника",
  "le matériel de sport": "спортивное оборудование",
  "le meuble": "мебель",
  "le multimédia": "мультимедиа, техника",
  "le produit de beauté": "косметика",
  "le vêtement": "одежда",
  "l'atelier (m.)": "мастерская",
  "la couture": "шитьё",
  "créer": "создавать",
  "la cuisine": "готовка; кухня",
  "la décoration": "декор",
  "la mécanique": "механика",
  "monter un meuble": "собирать мебель",
  "le tricot": "вязание",
  "le tutoriel": "инструкция, туториал",
  "en bois": "из дерева",
  "en carton": "из картона",
  "en coton": "из хлопка",
  "en cuir": "из кожи",
  "en fer": "из железа",
  "en jean": "из джинсовой ткани",
  "en laine": "из шерсти",
  "en papier": "из бумаги",
  "en plastique": "из пластика",
  "en tissu": "из ткани",
  "en verre": "из стекла",
  "abîmé(e)": "испорченный, повреждённый",
  "cassé(e)": "сломанный",
  "changer une pièce": "заменить деталь",
  "la panne": "поломка",
  "la pièce": "деталь",
  "poncer": "шлифовать",
  "réparer": "чинить",
  "le technicien": "техник",
  "la technicienne": "техник",
  "l'échelle (f.)": "лестница",
  "l'outil (m.)": "инструмент",
  "la ponceuse": "шлифовальная машинка",
  "la scie": "пила",
  "la tondeuse": "газонокосилка",

  "l'auberge de jeunesse (f.)": "хостел",
  "le camping": "кемпинг",
  "chez l'habitant": "у местного жителя",
  "l'hôtel (m.)": "отель",
  "passer la nuit chez quelqu'un": "переночевать у кого-то",
  "le circuit": "маршрут, тур",
  "la croisière": "круиз",
  "le départ": "отправление",
  "l'arrivée (f.)": "прибытие",
  "la destination": "направление",
  "la direction": "направление",
  "faire le tour de France": "объехать Францию",
  "faire le tour du monde": "объехать мир",
  "l'itinéraire": "маршрут",
  "le/la touriste": "турист, туристка",
  "l'aéroport (m.)": "аэропорт",
  "atterrir": "приземляться",
  "décoller": "взлетать",
  "les bagages (m.)": "багаж",
  "le billet": "билет",
  "la compagnie aérienne": "авиакомпания",
  "le vol direct": "прямой рейс",
  "la chambre double": "двухместный номер",
  "la chambre simple": "одноместный номер",
  "compris": "включено",
  "inclus": "включено",
  "la demi-pension": "полупансион",
  "la pension complète": "полный пансион",
  "le petit déjeuner": "завтрак",
  "le repas": "приём пищи",
  "l'audioguide (m.)": "аудиогид",
  "la brochure touristique": "туристическая брошюра",
  "le bus touristique": "туристический автобус",
  "l'excursion (f.)": "экскурсия",
  "le/la guide": "гид",
  "l'histoire (f.)": "история",
  "les informations pratiques (f.)": "практическая информация",
  "l'office de tourisme (m.)": "туристический офис",
  "la visite guidée": "экскурсия с гидом",
  "la cascade": "водопад",
  "la falaise": "скала, утёс",
  "la fontaine": "фонтан",
  "la grotte": "пещера",
  "le pont": "мост",
  "les ruines (f.)": "руины",
  "le volcan": "вулкан",
  "le tourisme de proximité": "местный туризм",
  "le tourisme local": "местный туризм",
  "le tourisme lent": "медленный туризм",
  "le slow tourisme": "медленный туризм",
  "le tourisme durable": "устойчивый туризм",
  "le tourisme responsable": "ответственный туризм",

  "l'école primaire": "начальная школа",
  "le collège": "средняя школа, коллеж",
  "le lycée": "старшая школа, лицей",
  "l'université (f.)": "университет",
  "un(e) élève": "ученик, ученица",
  "un(e) étudiant(e)": "студент, студентка",
  "un(e) professeur(e)": "преподаватель",
  "un(e) enseignant(e)": "учитель, преподаватель",
  "le/la prof de français": "учитель французского",
  "le/la prof de maths": "учитель математики",
  "apprendre": "учить, изучать",
  "le cours": "урок, курс",
  "enseigner": "преподавать",
  "la matière": "предмет",
  "la salle de classe": "классная комната",
  "en classe": "на уроке, в классе",
  "avoir une bonne note": "получить хорошую оценку",
  "avoir une mauvaise note": "получить плохую оценку",
  "la mention assez bien": "оценка «довольно хорошо»",
  "la mention bien": "оценка «хорошо»",
  "la mention très bien": "оценка «отлично»",
  "noter": "оценивать",
  "mettre une note": "ставить оценку",
  "passer le bac": "сдавать бакалавриат",
  "passer un examen": "сдавать экзамен",
  "rater un examen": "провалить экзамен",
  "rater son année": "не сдать учебный год",
  "redoubler une classe": "остаться на второй год",
  "redoubler une année": "повторить год обучения",
  "réussir un examen": "сдать экзамен",
  "réussir son année": "успешно закончить год",
  "l'année de césure": "академический перерыв",
  "avoir bac +4": "иметь уровень bac+4",
  "commencer ses études": "начать учёбу",
  "arrêter ses études": "бросить учёбу",
  "être en 1re année": "быть на первом курсе",
  "être en 2e année": "быть на втором курсе",
  "être en 3e année": "быть на третьем курсе",
  "être étudiant(e) en informatique": "учиться на информатике",
  "la fac de droit": "юридический факультет",
  "faire des études littéraires": "изучать гуманитарные науки",
  "la formation en alternance": "дуальное обучение",
  "le baccalauréat": "бакалавриат, школьный экзамен",
  "le bac": "бак",
  "un bachelor": "бакалавр",
  "une licence": "лисанс, бакалавриат",
  "un master 1": "первый год магистратуры",
  "M1": "первый год магистратуры",
  "un master 2": "второй год магистратуры",
  "M2": "второй год магистратуры",
  "la beauté": "красота",
  "le bien-être": "благополучие, wellness",
  "la communication": "коммуникация",
  "la formation": "обучение",
  "l'informatique (f.)": "информатика, IT",
  "le management": "менеджмент",
  "le marketing": "маркетинг",
  "le nettoyage": "уборка",
  "le numérique": "цифровая сфера",
  "la restauration": "ресторанная сфера",
  "l'agent(e) d'entretien": "работник по уборке",
  "le/la chef(fe) d'entreprise": "руководитель компании",
  "l'entrepreneur(e)": "предприниматель",
  "le coiffeur": "парикмахер",
  "la coiffeuse": "парикмахер",
  "l'esthéticien(ne)": "косметолог",
  "le formateur": "тренер, преподаватель",
  "la formatrice": "тренер, преподавательница",
  "l'ingénieur(e)": "инженер",
  "le/la manucure": "мастер маникюра",
  "le masseur": "массажист",
  "la masseuse": "массажистка",
  "le/la secrétaire": "секретарь",
  "le tatoueur": "тату-мастер",
  "la tatoueuse": "тату-мастер",
  "l'ambiance de travail": "рабочая атмосфера",
  "le coworking": "коворкинг",
  "l'emploi": "работа",
  "le job": "работа",
  "le poste": "должность",
  "le travail": "работа",
  "l'employé(e)": "сотрудник",
  "le/la salarié(e)": "наёмный работник",
  "l'entreprise": "компания",
  "la société": "компания",
  "les horaires": "расписание, часы работы",
  "le local": "помещение",
  "le matériel": "оборудование",
  "le tarif": "тариф, цена",
  "le travail à distance": "удалённая работа",
  "le travail en présentiel": "очная работа",
  "le travail en équipe": "работа в команде",
  "le travail collaboratif": "совместная работа",
  "le travailleur indépendant": "самозанятый",
  "la travailleuse indépendante": "самозанятая",
  "les activités extra-professionnelles": "внепрофессиональные занятия",
  "les centres d'intérêt": "интересы",
  "l'annonce": "объявление",
  "l'offre d'emploi": "вакансия",
  "le/la candidat(e)": "кандидат",
  "chercher du travail": "искать работу",
  "trouver du travail": "найти работу",
  "la compétence": "навык, компетенция",
  "le curriculum vitae": "резюме",
  "le CV": "резюме",
  "l'entretien d'embauche": "собеседование",
  "l'expérience": "опыт",
  "le parcours": "путь, опыт",
  "la recherche d'emploi": "поиск работы",
  "le recrutement": "набор, рекрутинг",

  "l'archipel (m.)": "архипелаг",
  "le désert": "пустыня",
  "la forêt tropicale": "тропический лес",
  "l'île (f.)": "остров",
  "le lagon": "лагуна",
  "le milieu naturel": "природная среда",
  "la nature": "природа",
  "l'océan (m.)": "океан",
  "le parc naturel": "природный парк",
  "la planète": "планета",
  "la rivière": "река",
  "le site naturel": "природный объект",
  "la biodiversité": "биоразнообразие",
  "l'écologie (f.)": "экология",
  "écologique": "экологичный",
  "l'espèce protégée (f.)": "охраняемый вид",
  "se mobiliser": "мобилизоваться, объединиться",
  "préserver la biodiversité": "сохранять биоразнообразие",
  "protéger l'environnement": "защищать окружающую среду",
  "recycler": "перерабатывать",
  "sauver la planète": "спасать планету",
  "trier": "сортировать",
  "valoriser la biodiversité": "ценить биоразнообразие",
  "le changement climatique": "изменение климата",
  "le déchet": "мусор, отход",
  "la destruction": "разрушение",
  "disparaître": "исчезать",
  "être en danger": "быть в опасности",
  "le gaspillage": "расточительство",
  "les pesticides (m.)": "пестициды",
  "le plastique": "пластик",
  "polluant(e)": "загрязняющий",
  "la poubelle": "мусорное ведро",
  "le recyclage": "переработка",
  "la surexploitation des ressources": "чрезмерная эксплуатация ресурсов",
  "le chat": "кот",
  "le cheval": "лошадь",
  "les chevaux": "лошади",
  "la chèvre": "коза",
  "le chien": "собака",
  "le lapin": "кролик",
  "le mouton": "овца",
  "le poisson": "рыба",
  "la vache": "корова",
  "l'abeille (f.)": "пчела",
  "l'araignée (f.)": "паук",
  "le caméléon": "хамелеон",
  "l'escargot (m.)": "улитка",
  "la libellule": "стрекоза",
  "le serpent": "змея",
  "la tortue": "черепаха",
  "le dauphin": "дельфин",
  "l'hippopotame (m.)": "бегемот",
  "la panthère": "пантера",
  "le rat": "крыса",
  "le singe": "обезьяна",
  "le tigre": "тигр",
  "l'aigle (m.)": "орёл",
  "le canard": "утка",
  "le canari": "канарейка",
  "la chouette": "сова",
  "le coq": "петух",
  "la poule": "курица",
  "se coucher avec les poules": "ложиться очень рано",
  "poser un lapin": "не прийти на встречу",
  "avancer comme une tortue": "двигаться очень медленно"
});

const simpleTicketsByUnit = {
  8: [
    {
      title: "Билет 8.1 · Новости",
      question: "Comment vous informez-vous ?",
      goal: "Говори 45 секунд. Используй слова про медиа и новости.",
      required: ["les médias", "s'informer", "suivre l'actualité", "le journal", "la télévision", "les réseaux sociaux"],
      plan: ["Сказать источник новостей", "Назвать 2 медиа", "Сказать плюс и минус"],
      answers: {
        easy: "Je m'informe surtout sur Internet. Je regarde parfois les nouvelles à la télévision. J'utilise aussi les réseaux sociaux, mais je vérifie les informations.",
        medium: "Pour m'informer, j'utilise Internet, les médias et parfois la télévision. Je lis des articles en ligne et je suis l'actualité. Les réseaux sociaux sont pratiques, mais il faut faire attention aux fausses nouvelles.",
        challenge: "Je m'informe avec plusieurs médias: la presse en ligne, la télévision et les réseaux sociaux. J'aime lire des articles parce qu'ils donnent souvent plus de détails. À mon avis, il faut comparer les points de vue et vérifier les sources."
      }
    },
    {
      title: "Билет 8.2 · Подкасты",
      question: "Vous aimez les podcasts et la radio ? Pourquoi ?",
      goal: "Говори просто: что слушаешь, когда и почему.",
      required: ["écouter des podcasts", "la radio", "l'épisode", "la voix", "raconter", "transmettre des connaissances"],
      plan: ["Сказать, слушаешь ли", "Когда слушаешь", "Почему полезно"],
      answers: {
        easy: "J'aime écouter des podcasts. Je les écoute dans les transports. La voix est agréable et on peut apprendre des choses.",
        medium: "J'aime les podcasts parce qu'ils sont pratiques. Un épisode peut raconter une histoire ou transmettre des connaissances. Je préfère écouter quand je marche ou quand je suis dans les transports.",
        challenge: "J'écoute parfois la radio et des podcasts. Pour moi, c'est un bon moyen de communication parce qu'on peut apprendre sans regarder un écran. J'aime surtout les épisodes courts avec une voix claire."
      }
    }
  ],
  9: [
    {
      title: "Билет 9.1 · Покупки",
      question: "Achetez-vous souvent des objets neufs ?",
      goal: "Расскажи про покупки и ответственное потребление.",
      required: ["acheter", "dépenser", "économiser", "neuf", "d'occasion", "le prix"],
      plan: ["Сказать, что покупаешь", "Новые или б/у", "Как экономишь"],
      answers: {
        easy: "Je n'achète pas toujours des objets neufs. Parfois, j'achète d'occasion pour économiser. Je regarde le prix et la qualité.",
        medium: "Quand j'achète quelque chose, je fais attention au prix. Je préfère économiser et acheter seulement les objets utiles. Les objets d'occasion sont parfois une bonne idée.",
        challenge: "Je pense qu'il ne faut pas acheter trop vite. Avant de dépenser de l'argent, je compare les prix. Si un produit d'occasion est en bon état, je peux le choisir parce que c'est moins cher et plus responsable."
      }
    },
    {
      title: "Билет 9.2 · Ремонт",
      question: "Pourquoi est-ce utile de réparer les objets ?",
      goal: "Используй слова про ремонт и материалы.",
      required: ["réparer", "cassé(e)", "la panne", "changer une pièce", "l'outil", "le technicien"],
      plan: ["Назвать проблему", "Сказать, кто чинит", "Объяснить пользу"],
      answers: {
        easy: "Réparer les objets est utile. Si un objet est cassé, on peut changer une pièce. Parfois, il faut demander à un technicien.",
        medium: "Quand il y a une panne, je préfère réparer avant d'acheter un nouveau produit. Il faut parfois un outil ou une pièce. C'est plus économique.",
        challenge: "Réparer est une bonne habitude. Si un meuble ou un appareil est cassé, on peut chercher la panne, changer une pièce ou appeler un technicien. Cela permet d'économiser et de jeter moins."
      }
    }
  ],
  10: [
    {
      title: "Билет 10.1 · Поездка",
      question: "Quel voyage aimeriez-vous faire ?",
      goal: "Расскажи про направление, жильё и транспорт.",
      required: ["la destination", "l'hôtel", "l'auberge de jeunesse", "les bagages", "le billet", "le départ"],
      plan: ["Куда поехать", "Где жить", "Как ехать"],
      answers: {
        easy: "J'aimerais faire un voyage en France. Je voudrais dormir à l'hôtel ou dans une auberge de jeunesse. Avant le départ, je prépare mes bagages et mon billet.",
        medium: "Ma destination idéale est la France. Je voudrais visiter Paris et peut-être une autre ville. Pour l'hébergement, je choisirais un hôtel simple. Je préparerais mes bagages avant le départ.",
        challenge: "J'aimerais organiser un séjour en France. Je choisirais une destination intéressante, par exemple Paris ou Lyon. Je réserverais une chambre simple dans un hôtel et j'achèterais un billet pour un vol direct."
      }
    },
    {
      title: "Билет 10.2 · Туризм",
      question: "Comment aimez-vous visiter une ville ?",
      goal: "Используй слова про экскурсии и места.",
      required: ["la visite guidée", "le/la guide", "l'audioguide", "la brochure touristique", "le pont", "la fontaine"],
      plan: ["Как посещаешь город", "Что смотришь", "С кем"],
      answers: {
        easy: "J'aime faire une visite guidée. Le guide explique l'histoire de la ville. J'aime voir les ponts, les fontaines et les beaux bâtiments.",
        medium: "Pour visiter une ville, j'aime utiliser une brochure touristique ou un audioguide. Je regarde les sites importants, par exemple un pont, une fontaine ou des ruines.",
        challenge: "Quand je visite une ville, je préfère prendre mon temps. Une visite guidée est pratique parce que le guide donne des informations. J'aime aussi le tourisme local et les promenades tranquilles."
      }
    }
  ],
  11: [
    {
      title: "Билет 11.1 · Учёба",
      question: "Parlez de vos études.",
      goal: "Расскажи просто: где учишься, предметы, экзамены.",
      required: ["l'université", "un(e) étudiant(e)", "le cours", "la matière", "passer un examen", "réussir un examen"],
      plan: ["Где учишься", "Что изучаешь", "Экзамены"],
      answers: {
        easy: "Je suis étudiant à l'université. J'ai plusieurs cours et matières. Bientôt, je vais passer un examen. Je veux réussir mon examen.",
        medium: "Je fais mes études à l'université. J'aime certaines matières, mais les examens sont difficiles. Pour réussir, je dois apprendre régulièrement et aller en classe.",
        challenge: "Mon parcours scolaire est important pour moi. À l'université, je suis plusieurs cours et je prépare mes examens. Mon objectif est de réussir mon année et d'obtenir un diplôme."
      }
    },
    {
      title: "Билет 11.2 · Работа",
      question: "Quel travail aimeriez-vous faire ?",
      goal: "Расскажи про профессию, навыки и CV.",
      required: ["l'emploi", "le CV", "la compétence", "l'entretien d'embauche", "l'expérience", "chercher du travail"],
      plan: ["Какая работа", "Какие навыки", "Как искать"],
      answers: {
        easy: "J'aimerais trouver un emploi intéressant. Pour chercher du travail, il faut préparer un CV. Il faut aussi parler de ses compétences.",
        medium: "Mon travail idéal est un travail où je peux apprendre. Pour chercher un emploi, je dois écrire un CV et préparer un entretien d'embauche. L'expérience est importante.",
        challenge: "Je voudrais travailler dans un domaine utile et intéressant. Pour trouver du travail, il faut avoir un bon CV, des compétences claires et un peu d'expérience. Pendant l'entretien d'embauche, il faut bien présenter son parcours."
      }
    }
  ],
  12: [
    {
      title: "Билет 12.1 · Экология",
      question: "Que faites-vous pour protéger la nature ?",
      goal: "Расскажи про экологичные действия.",
      required: ["la nature", "l'environnement", "trier", "recycler", "le déchet", "sauver la planète"],
      plan: ["Сказать мнение", "Назвать действия", "Почему важно"],
      answers: {
        easy: "J'aime la nature. Pour protéger l'environnement, je trie les déchets et je recycle. Je pense que chacun peut aider la planète.",
        medium: "Pour protéger la nature, je fais de petites actions. Je trie les déchets, j'évite le plastique et je recycle. À mon avis, c'est important pour sauver la planète.",
        challenge: "L'environnement est très important. Nous devons protéger la nature, recycler et éviter le gaspillage. Même de petites actions peuvent aider: trier les déchets, utiliser moins de plastique et respecter les espaces naturels."
      }
    },
    {
      title: "Билет 12.2 · Животные",
      question: "Aimez-vous les animaux ?",
      goal: "Используй слова про животных и природу.",
      required: ["le chat", "le chien", "la chouette", "la tortue", "l'abeille (f.)", "l'espèce protégée (f.)"],
      plan: ["Каких животных любишь", "Где они живут", "Почему их защищать"],
      answers: {
        easy: "J'aime les animaux, surtout les chats et les chiens. J'aime aussi les oiseaux. Il faut protéger les animaux et la nature.",
        medium: "J'aime beaucoup les animaux domestiques comme le chat et le chien. Dans la nature, il y a aussi des oiseaux, des abeilles et des tortues. Certaines espèces sont protégées.",
        challenge: "Les animaux sont importants pour la biodiversité. J'aime les animaux domestiques, mais aussi les animaux du jardin comme l'abeille ou la tortue. À mon avis, il faut protéger les espèces fragiles et respecter leur milieu naturel."
      }
    }
  ]
};

modules.forEach((module) => {
  if (simpleTicketsByUnit[module.id]) {
    module.tickets = simpleTicketsByUnit[module.id];
  }
});

const state = {
  moduleId: initialModuleId,
  view: localStorage.getItem("view") || "tickets",
  level: localStorage.getItem("level") || "easy",
  questionIndex: Number(localStorage.getItem("questionIndex")) || 0,
  xp: Number(localStorage.getItem("xp")) || 0,
  answerHidden: localStorage.getItem("answerHidden") === "true",
  cardIndex: Number(localStorage.getItem("cardIndex")) || 0,
  cardFlipped: false,
  cardStats: JSON.parse(localStorage.getItem("cardStats") || "{}"),
  timer: null,
  remaining: 45
};

const moduleList = document.querySelector("#moduleList");
const coverageList = document.querySelector("#coverageList");
const moduleTitle = document.querySelector("#moduleTitle");
const moduleMeta = document.querySelector("#moduleMeta");
const ticketQuestion = document.querySelector("#ticketQuestion");
const ticketGoal = document.querySelector("#ticketGoal");
const modelAnswer = document.querySelector("#modelAnswer");
const ticketPlan = document.querySelector("#ticketPlan");
const vocabChips = document.querySelector("#vocabChips");
const vocabCount = document.querySelector("#vocabCount");
const drillList = document.querySelector("#drillList");
const builder = document.querySelector("#builder");
const coverage = document.querySelector("#coverage");
const dailyScore = document.querySelector("#dailyScore");
const dailyProgress = document.querySelector("#dailyProgress");
const timerValue = document.querySelector("#timerValue");
const timerRing = document.querySelector("#timerRing");
const hideAnswerBtn = document.querySelector("#hideAnswerBtn");
const ticketsView = document.querySelector("#ticketsView");
const cardsView = document.querySelector("#cardsView");
const builderView = document.querySelector("#builderView");
const modeTabs = document.querySelectorAll(".mode-tab");
const flashcard = document.querySelector("#flashcard");
const cardLabel = document.querySelector("#cardLabel");
const cardFront = document.querySelector("#cardFront");
const cardBack = document.querySelector("#cardBack");
const cardProgress = document.querySelector("#cardProgress");
const flipCardBtn = document.querySelector("#flipCardBtn");
const nextCardBtn = document.querySelector("#nextCardBtn");
const knownCardBtn = document.querySelector("#knownCardBtn");
const wrongCardBtn = document.querySelector("#wrongCardBtn");
const knownPercent = document.querySelector("#knownPercent");
const knownCount = document.querySelector("#knownCount");
const wrongCount = document.querySelector("#wrongCount");
const untouchedCount = document.querySelector("#untouchedCount");
const weakWords = document.querySelector("#weakWords");
const courseTitleInput = document.querySelector("#courseTitleInput");
const courseFileInput = document.querySelector("#courseFileInput");
const courseTextInput = document.querySelector("#courseTextInput");
const generateCourseBtn = document.querySelector("#generateCourseBtn");
const generatedPreview = document.querySelector("#generatedPreview");
const generatedCount = document.querySelector("#generatedCount");

function currentModule() {
  return activeModules.find((module) => module.id === state.moduleId) || activeModules[0];
}

function allVocab(module) {
  if (module.vocabGroups) {
    return module.vocabGroups.flatMap((group) => group.words);
  }
  return module.vocab || [];
}

function translationFor(word) {
  return translations[word] || "перевод скоро добавим";
}

function statKey(moduleId, word) {
  return `${moduleId}::${word}`;
}

function statFor(moduleId, word) {
  return state.cardStats[statKey(moduleId, word)] || { right: 0, wrong: 0 };
}

function updateCardStat(isRight) {
  const module = currentModule();
  const words = allVocab(module);
  const word = words[state.cardIndex];
  const key = statKey(module.id, word);
  const current = state.cardStats[key] || { right: 0, wrong: 0 };
  state.cardStats[key] = {
    right: current.right + (isRight ? 1 : 0),
    wrong: current.wrong + (isRight ? 0 : 1)
  };
  saveState();
  nextFlashcard();
}

function normalizeText(value) {
  return value
    .toLocaleLowerCase("fr")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function renderVocab(module) {
  if (module.vocabGroups) {
    return module.vocabGroups.map((group) => `
      <section class="vocab-group">
        <h4>${group.title}</h4>
        <div class="chips">
          ${group.words.map((word) => `
            <button class="chip vocab-chip" data-word="${word}">
              <span>${word}</span>
              <small>${translationFor(word)}</small>
            </button>
          `).join("")}
        </div>
      </section>
    `).join("");
  }
  return `<div class="chips">${allVocab(module).map((word) => `
    <button class="chip vocab-chip" data-word="${word}">
      <span>${word}</span>
      <small>${translationFor(word)}</small>
    </button>
  `).join("")}</div>`;
}

function renderFlashcard() {
  const words = allVocab(currentModule());
  if (!words.length) return;
  const module = currentModule();
  state.cardIndex = Math.min(state.cardIndex, words.length - 1);
  const word = words[state.cardIndex];
  const translation = translationFor(word);
  const stat = statFor(module.id, word);
  cardProgress.textContent = `${state.cardIndex + 1} / ${words.length}`;
  cardLabel.textContent = state.cardFlipped ? "Перевод" : "Французский";
  cardFront.textContent = state.cardFlipped ? translation : word;
  cardBack.textContent = state.cardFlipped ? `${word} · верно ${stat.right}, ошибок ${stat.wrong}` : "Нажми, чтобы увидеть перевод";
  flashcard.classList.toggle("flipped", state.cardFlipped);
  renderCardStats();
}

function renderCardStats() {
  const module = currentModule();
  const words = allVocab(module);
  const stats = words.map((word) => ({ word, ...statFor(module.id, word) }));
  const known = stats.filter((item) => item.right > 0 && item.wrong === 0).length;
  const wrongTotal = stats.reduce((sum, item) => sum + item.wrong, 0);
  const untouched = stats.filter((item) => item.right === 0 && item.wrong === 0).length;
  const percent = words.length ? Math.round((known / words.length) * 100) : 0;
  knownPercent.textContent = `${percent}%`;
  knownCount.textContent = String(known);
  wrongCount.textContent = String(wrongTotal);
  untouchedCount.textContent = String(untouched);
  const weak = stats
    .filter((item) => item.wrong > 0)
    .sort((a, b) => b.wrong - a.wrong)
    .slice(0, 8);
  weakWords.innerHTML = weak.length
    ? weak.map((item) => `
      <button class="weak-word" data-word="${item.word}">
        <strong>${item.word}</strong>
        <span>${translationFor(item.word)} · ошибок: ${item.wrong}</span>
      </button>
    `).join("")
    : `<p class="empty-note">Пока нет слабых слов. Отмечай “Не знаю”, и они появятся здесь.</p>`;
}

function renderView() {
  ticketsView.classList.toggle("active", state.view === "tickets");
  cardsView.classList.toggle("active", state.view === "cards");
  builderView.classList.toggle("active", state.view === "builder");
  modeTabs.forEach((button) => button.classList.toggle("active", button.dataset.view === state.view));
  document.querySelector("#shuffleBtn").style.display = state.view === "tickets" ? "" : "none";
  renderFlashcard();
}

function nextFlashcard() {
  const words = allVocab(currentModule());
  state.cardIndex = (state.cardIndex + 1) % words.length;
  state.cardFlipped = false;
  saveState();
  renderFlashcard();
}

function parseCourseText(text) {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  const groups = [];
  let current = null;

  for (const line of lines) {
    const cleaned = line.replace(/^[-–—]\s*/, "• ");
    const bulletMatch = cleaned.match(/^(?:•|\*)\s*(.+)$/);
    if (bulletMatch) {
      if (!current) {
        current = { title: "Словарь", words: [] };
        groups.push(current);
      }
      current.words.push(bulletMatch[1].trim());
      continue;
    }

    const looksLikeTitle = line.length < 80 && !/[.!?]$/.test(line) && !/^\d/.test(line);
    if (looksLikeTitle) {
      current = { title: line, words: [] };
      groups.push(current);
    }
  }

  return groups.filter((group) => group.words.length);
}

function renderGeneratedCourse() {
  const title = courseTitleInput.value.trim() || "Мой курс";
  const groups = parseCourseText(courseTextInput.value);
  const total = groups.reduce((sum, group) => sum + group.words.length, 0);
  generatedCount.textContent = String(total);
  generatedPreview.innerHTML = groups.length
    ? `
      <div class="generated-title">${title}</div>
      ${groups.map((group) => `
        <section class="vocab-group">
          <h4>${group.title}</h4>
          <div class="chips">
            ${group.words.map((word) => `<span class="chip">${word}</span>`).join("")}
          </div>
        </section>
      `).join("")}
    `
    : `<p class="empty-note">Пока не нашёл словарные группы. Попробуй вставить текст, где слова начинаются с маркера •.</p>`;
}

function saveState() {
  localStorage.setItem("moduleId", String(state.moduleId));
  localStorage.setItem("view", state.view);
  localStorage.setItem("level", state.level);
  localStorage.setItem("questionIndex", String(state.questionIndex));
  localStorage.setItem("xp", String(state.xp));
  localStorage.setItem("answerHidden", String(state.answerHidden));
  localStorage.setItem("cardIndex", String(state.cardIndex));
  localStorage.setItem("cardStats", JSON.stringify(state.cardStats));
}

function renderModules() {
  moduleList.innerHTML = activeModules.map((module) => `
    <button class="module-button ${module.id === state.moduleId ? "active" : ""}" data-module="${module.id}">
      <span class="module-number">${module.id}</span>
      <span>
        <span class="module-name">${module.title}</span>
        <span class="module-topic">${module.topic}</span>
      </span>
    </button>
  `).join("");
  renderCompleteness();
}

function renderCompleteness() {
  coverageList.innerHTML = activeModules.map((module) => {
    const words = allVocab(module);
    const translated = words.filter((word) => translations[word]).length;
    const translationPercent = words.length ? Math.round((translated / words.length) * 100) : 0;
    const ticketCount = module.tickets?.length || 0;
    return `
      <div class="coverage-item ${module.id === state.moduleId ? "active" : ""}">
        <span>Юнит ${module.id}</span>
        <strong>${translationPercent}% · ${ticketCount} бил.</strong>
      </div>
    `;
  }).join("");
}

function renderPractice() {
  const module = currentModule();
  const tickets = module.tickets || [];
  const ticket = tickets[state.questionIndex % tickets.length];
  const question = ticket ? ticket.question : module.questions[state.questionIndex % module.questions.length];
  moduleTitle.textContent = module.title;
  moduleMeta.textContent = `Юнит ${module.id} · стр. ${module.page}`;
  ticketQuestion.textContent = question;
  ticketGoal.textContent = ticket ? ticket.goal : `Используй минимум 5 слов из темы: ${module.topic}.`;
  modelAnswer.textContent = ticket ? ticket.answers[state.level] : module.answers[state.level];
  modelAnswer.classList.toggle("is-hidden", state.answerHidden);
  hideAnswerBtn.textContent = state.answerHidden ? "Показать пример" : "Скрыть пример";
  ticketPlan.innerHTML = ticket ? `
    <div class="ticket-title">${ticket.title}</div>
    <div class="ticket-steps">${ticket.plan.map((step) => `<span>${step}</span>`).join("")}</div>
    <div class="ticket-required">${ticket.required.map((word) => `<button class="chip required-word" data-word="${word}">${word}</button>`).join("")}</div>
  ` : "";
  vocabCount.textContent = `${allVocab(module).length}`;
  vocabChips.innerHTML = renderVocab(module);
  const drills = ticket
    ? [["План билета", ticket.plan.join(" → ")], ["Обязательные слова", ticket.required.join(", ")]]
    : module.drills;
  drillList.innerHTML = drills.map(([title, text]) => `
    <div class="drill">
      <strong>${title}</strong>
      <p>${text}</p>
    </div>
  `).join("");
  document.querySelectorAll(".seg").forEach((button) => {
    button.classList.toggle("active", button.dataset.level === state.level);
  });
  renderProgress();
  updateCoverage();
  renderFlashcard();
  renderView();
}

function renderProgress() {
  dailyScore.textContent = `${state.xp} XP`;
  dailyProgress.style.width = `${Math.min(100, state.xp % 100)}%`;
}

function updateCoverage() {
  const module = currentModule();
  const text = normalizeText(builder.value);
  let used = 0;
  document.querySelectorAll(".chip").forEach((chip) => {
    const word = normalizeText(chip.dataset.word.replace(/\s*\([^)]*\)/g, ""));
    const isUsed = text.includes(word);
    chip.classList.toggle("used", isUsed);
    if (isUsed) used += 1;
  });
  coverage.textContent = used
    ? `Использовано слов из модуля: ${used}/${allVocab(module).length}`
    : "Начни писать свой устный ответ, и я подсвечу слова из учебника.";
}

function setTimer(value) {
  const max = 45;
  state.remaining = value;
  timerValue.textContent = String(value);
  const circumference = 326.7;
  const offset = circumference - (value / max) * circumference;
  timerRing.style.strokeDashoffset = String(offset);
}

function startTimer() {
  clearInterval(state.timer);
  setTimer(45);
  state.timer = setInterval(() => {
    const next = state.remaining - 1;
    setTimer(Math.max(0, next));
    if (next <= 0) {
      clearInterval(state.timer);
    }
  }, 1000);
}

function addXp(amount) {
  state.xp = Math.max(0, state.xp + amount);
  saveState();
  renderProgress();
}

moduleList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-module]");
  if (!button) return;
  state.moduleId = Number(button.dataset.module);
  state.questionIndex = 0;
  state.cardIndex = 0;
  state.cardFlipped = false;
  builder.value = "";
  saveState();
  renderModules();
  renderPractice();
});

modeTabs.forEach((button) => {
  button.addEventListener("click", () => {
    state.view = button.dataset.view;
    saveState();
    renderView();
  });
});

courseFileInput.addEventListener("change", async () => {
  const file = courseFileInput.files?.[0];
  if (!file) return;
  courseTextInput.value = await file.text();
  renderGeneratedCourse();
});

generateCourseBtn.addEventListener("click", renderGeneratedCourse);

document.querySelector("#shuffleBtn").addEventListener("click", () => {
  const module = currentModule();
  const count = module.tickets?.length || module.questions.length;
  state.questionIndex = (state.questionIndex + 1) % count;
  saveState();
  renderPractice();
});

document.querySelector("#resetBtn").addEventListener("click", () => {
  clearInterval(state.timer);
  state.xp = 0;
  state.questionIndex = 0;
  state.moduleId = 7;
  state.cardIndex = 0;
  state.cardFlipped = false;
  builder.value = "";
  setTimer(45);
  saveState();
  renderModules();
  renderPractice();
});

document.querySelectorAll(".seg").forEach((button) => {
  button.addEventListener("click", () => {
    state.level = button.dataset.level;
    saveState();
    renderPractice();
  });
});

document.querySelector("#startTimerBtn").addEventListener("click", startTimer);
document.querySelector("#doneBtn").addEventListener("click", () => addXp(15));
document.querySelector("#hardBtn").addEventListener("click", () => addXp(5));
hideAnswerBtn.addEventListener("click", () => {
  state.answerHidden = !state.answerHidden;
  saveState();
  renderPractice();
});
document.querySelector("#copyBuilderBtn").addEventListener("click", async () => {
  await navigator.clipboard?.writeText(builder.value);
});

vocabChips.addEventListener("click", (event) => {
  const chip = event.target.closest("[data-word]");
  if (!chip) return;
  const words = allVocab(currentModule());
  const index = words.indexOf(chip.dataset.word);
  if (index >= 0) {
    state.cardIndex = index;
    state.cardFlipped = true;
  }
  const separator = builder.value.trim() ? " " : "";
  builder.value += `${separator}${chip.dataset.word}`;
  builder.focus();
  saveState();
  renderFlashcard();
  updateCoverage();
});

builder.addEventListener("input", updateCoverage);
flashcard.addEventListener("click", () => {
  state.cardFlipped = !state.cardFlipped;
  renderFlashcard();
});
flipCardBtn.addEventListener("click", () => {
  state.cardFlipped = !state.cardFlipped;
  renderFlashcard();
});
nextCardBtn.addEventListener("click", () => {
  nextFlashcard();
});
knownCardBtn.addEventListener("click", () => updateCardStat(true));
wrongCardBtn.addEventListener("click", () => updateCardStat(false));
weakWords.addEventListener("click", (event) => {
  const button = event.target.closest("[data-word]");
  if (!button) return;
  const words = allVocab(currentModule());
  const index = words.indexOf(button.dataset.word);
  if (index >= 0) {
    state.cardIndex = index;
    state.cardFlipped = false;
    state.view = "cards";
    saveState();
    renderView();
  }
});

renderModules();
renderPractice();
renderView();
setTimer(45);
