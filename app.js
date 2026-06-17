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

const examTickets = [
  {
    id: "ticket-1",
    number: 1,
    title: "Les nouvelles technologies",
    page: "билет 1",
    topic: "будущее, технологии, полезные предметы",
    vocabGroups: [
      { title: "Технологии", words: ["la technologie", "l'innovation (f.)", "l'invention (f.)", "le robot", "l'intelligence artificielle (f.)", "le logiciel", "l'imprimante 3D (f.)", "la tablette"] },
      { title: "Предметы", words: ["l'appareil (m.)", "le smartphone", "la batterie", "l'écran (m.)", "le clavier", "la souris", "l'ordinateur", "l'application (f.)"] },
      { title: "Описание", words: ["utile", "pratique", "indispensable", "automatique", "autonome", "fonctionner", "être en panne", "tomber en panne"] }
    ],
    tickets: [
      {
        title: "Билет 1 · Технологии будущего",
        question: "Les nouvelles technologies. Dans le futur: imaginer l'avenir, décrire l'utilité des objets.",
        goal: "Расскажи про технологии будущего и объясни, зачем они нужны.",
        required: ["la technologie", "l'innovation (f.)", "le robot", "utile", "pratique", "le smartphone", "l'intelligence artificielle (f.)"],
        plan: ["Сказать общее мнение", "Назвать 2-3 технологии", "Объяснить пользу", "Добавить личный пример"],
        answers: {
          easy: "À mon avis, les nouvelles technologies sont très utiles. Dans le futur, il y aura plus de robots et d'intelligence artificielle. Le smartphone restera indispensable parce qu'il aide à communiquer et à chercher des informations.",
          medium: "Je pense que les nouvelles technologies vont changer la vie quotidienne. Par exemple, les robots, les applications et l'intelligence artificielle seront plus pratiques. Ces objets seront utiles pour travailler, apprendre et gagner du temps.",
          challenge: "Dans le futur, les innovations technologiques seront partout. Un robot pourra aider à la maison, une application pourra organiser la journée et l'intelligence artificielle pourra transmettre des connaissances. Mais il faudra utiliser ces objets avec équilibre, parce que la technologie doit aider les personnes, pas remplacer les relations humaines."
        }
      }
    ],
    drills: [["Opinion", "Commence par: À mon avis..."], ["Futur", "Utilise: il y aura, on pourra, ce sera."], ["Objet", "Choisis un objet et explique son utilité."]]
  },
  {
    id: "ticket-2",
    number: 2,
    title: "La santé",
    page: "билет 2",
    topic: "здоровье, медицина, мнение",
    vocabGroups: [
      { title: "État de santé", words: ["être en pleine forme", "être patraque", "la fatigue physique", "le stress", "l'anxiété (f.)", "la fièvre"] },
      { title: "Médecine", words: ["consulter un/une médecin", "le traitement", "le remède", "l'antibiotique (m.)", "calmer une douleur", "se soigner"] },
      { title: "Bonnes habitudes", words: ["adopter de bonnes habitudes", "le repos", "récupérer", "la respiration", "relâcher ses muscles", "faire le plus grand bien"] }
    ],
    tickets: [
      {
        title: "Билет 2 · Здоровье и медицина",
        question: "La santé, les types de médecine. Exprimer son point de vue.",
        goal: "Вырази мнение: как заботиться о здоровье и когда идти к врачу.",
        required: ["être en pleine forme", "adopter de bonnes habitudes", "consulter un/une médecin", "le traitement", "le repos", "récupérer"],
        plan: ["Сказать мнение", "Назвать хорошие привычки", "Сказать про врача", "Завершить советом"],
        answers: {
          easy: "Pour être en pleine forme, il faut adopter de bonnes habitudes. Il faut dormir, se reposer et manger normalement. Si on est malade, il faut consulter un médecin et suivre un traitement.",
          medium: "À mon avis, la santé dépend des habitudes de tous les jours. Le repos, la respiration calme et le sport aident à récupérer. Mais si on a de la fièvre ou une douleur forte, il vaut mieux consulter un médecin.",
          challenge: "Je pense que la médecine est importante, mais les habitudes personnelles comptent aussi. Pour rester en pleine forme, il faut dormir assez, éviter le stress et prendre le temps de récupérer. Quand un problème continue, il ne faut pas attendre: on doit consulter un médecin et choisir un traitement adapté."
        }
      }
    ],
    drills: [["Point de vue", "Utilise: je pense que, à mon avis."], ["Conseils", "Donne trois conseils avec il faut."], ["Exemple", "Ajoute une situation personnelle simple."]]
  },
  {
    id: "ticket-3",
    number: 3,
    title: "À la pharmacie",
    page: "билет 3",
    topic: "аптека, симптомы, совет",
    vocabGroups: [
      { title: "Symptômes", words: ["être patraque", "la fièvre", "la toux", "le nez bouché", "le mal de gorge", "le rhume", "la migraine"] },
      { title: "Remèdes", words: ["le sirop", "les gouttes (f.)", "le remède", "l'antiseptique (m.)", "calmer une douleur", "le traitement"] }
    ],
    tickets: [
      {
        title: "Билет 3 · В аптеке",
        question: "À la pharmacie. Parler des problèmes de santé.",
        goal: "Сыграй мини-диалог: симптомы + просьба о лекарстве.",
        required: ["être patraque", "la fièvre", "la toux", "le nez bouché", "le sirop", "les gouttes (f.)"],
        plan: ["Поздороваться", "Назвать симптомы", "Попросить средство", "Сказать спасибо"],
        answers: {
          easy: "Bonjour madame. Je suis patraque. J'ai le nez bouché, je tousse et j'ai un peu de fièvre. Est-ce que vous pouvez me conseiller un sirop ou des gouttes ? Merci beaucoup.",
          medium: "Bonjour, je ne me sens pas bien depuis deux jours. J'ai mal à la gorge, le nez bouché et de la toux. Je voudrais un remède simple pour calmer la douleur. Vous me conseillez un sirop ?",
          challenge: "Bonjour madame, je viens vous demander conseil. Je suis patraque: j'ai de la fièvre, le nez bouché, une toux forte et mal à la gorge. Je voudrais un traitement léger, par exemple un sirop ou des gouttes. Si cela ne passe pas, je consulterai un médecin."
        }
      }
    ],
    drills: [["Dialogue", "Fais pharmacien + client."], ["Symptômes", "Nomme trois symptômes."], ["Demande", "Utilise: Est-ce que vous pouvez me conseiller...?"]]
  },
  {
    id: "ticket-4",
    number: 4,
    title: "Chez le médecin",
    page: "билет 4",
    topic: "врач, боль, части тела",
    vocabGroups: [
      { title: "Corps", words: ["la tête", "le cou", "le dos", "le ventre", "l'épaule (f.)", "le genou", "la jambe"] },
      { title: "Douleur", words: ["avoir mal", "la courbature", "souffrir", "soulager", "la tension"] },
      { title: "Soins", words: ["consulter un/une médecin", "le traitement", "le remède", "calmer une douleur"] }
    ],
    tickets: [
      {
        title: "Билет 4 · У врача",
        question: "Chez le médecin. Parler des problèmes de santé.",
        goal: "Объясни врачу, что болит и как давно.",
        required: ["avoir mal", "le dos", "le cou", "la tête", "souffrir", "soulager", "le traitement"],
        plan: ["Сказать причину визита", "Где болит", "Как давно", "Спросить про лечение"],
        answers: {
          easy: "Bonjour docteur. J'ai mal au dos et au cou. Je souffre depuis deux jours. Je voudrais savoir comment calmer la douleur et quel traitement je dois prendre.",
          medium: "Bonjour docteur, je viens parce que j'ai mal à la tête, au dos et au cou. La douleur n'est pas très forte, mais elle me fatigue. Est-ce que vous pouvez me conseiller un traitement pour soulager la tension ?",
          challenge: "Bonjour docteur. Depuis quelques jours, je souffre d'une douleur dans le dos et dans le cou. J'ai aussi parfois mal à la tête. Je pense que c'est peut-être à cause du stress ou d'une mauvaise position. Je voudrais un conseil pour soulager la douleur et éviter que cela recommence."
        }
      }
    ],
    drills: [["Corps", "Montre/nomme les parties du corps."], ["Temps", "Utilise: depuis hier, depuis deux jours."], ["Question", "Pose une question au médecin."]]
  },
  {
    id: "ticket-5",
    number: 5,
    title: "Les urgences",
    page: "билет 5",
    topic: "срочная помощь, службы, проблемы",
    vocabGroups: [
      { title: "Urgences", words: ["l'accident (m.)", "la victime", "le/la blessé(e)", "le numéro d'urgence", "l'appel (m.)", "l'ambulance (f.)", "le SAMU", "le pompier"] },
      { title: "Problèmes", words: ["la fièvre", "l'infection (f.)", "l'asthme (m.)", "la migraine", "le stress", "la toux"] }
    ],
    tickets: [
      {
        title: "Билет 5 · Срочная помощь",
        question: "Les urgences : les services, les maux, problèmes de santé.",
        goal: "Объясни, что делать при срочной медицинской ситуации.",
        required: ["le numéro d'urgence", "l'appel (m.)", "l'ambulance (f.)", "le SAMU", "la victime", "le/la blessé(e)"],
        plan: ["Назвать ситуацию", "Позвонить", "Описать человека", "Ждать помощь"],
        answers: {
          easy: "En cas d'urgence, il faut appeler le numéro d'urgence. Pendant l'appel, il faut expliquer où est la victime. Ensuite, l'ambulance ou le SAMU arrive pour aider le blessé.",
          medium: "Si une personne a un problème grave, il faut rester calme et appeler les urgences. On donne l'adresse, on explique les symptômes et on dit s'il y a un blessé. Après, le SAMU ou les pompiers peuvent intervenir.",
          challenge: "À mon avis, dans une urgence, il faut agir vite mais calmement. On appelle le numéro d'urgence, on décrit la situation, l'adresse et l'état de la victime. Il ne faut pas déplacer un blessé si ce n'est pas nécessaire. Ensuite, l'ambulance, le SAMU ou les pompiers arrivent."
        }
      }
    ],
    drills: [["Urgence", "Dis qui tu appelles."], ["Adresse", "Ajoute: l'adresse exacte."], ["Calme", "Utilise: il faut rester calme."]]
  },
  {
    id: "ticket-6",
    number: 6,
    title: "Un accident",
    page: "билет 6",
    topic: "авария, транспорт, боль",
    vocabGroups: [
      { title: "Accident", words: ["l'accident (m.)", "la victime", "le/la blessé(e)", "le policier", "la policière", "le pompier", "la pompière", "l'ambulance (f.)"] },
      { title: "Douleur", words: ["avoir mal", "la courbature", "souffrir", "soulager", "la tension", "le dos", "la jambe"] },
      { title: "Voyage", words: ["les transports", "le départ", "l'arrivée (f.)", "la direction", "les bagages (m.)"] }
    ],
    tickets: [
      {
        title: "Билет 6 · Несчастный случай",
        question: "Un accident : les services, les transports, les maux, les problèmes.",
        goal: "Опиши аварию и какие службы помогают.",
        required: ["l'accident (m.)", "la victime", "l'ambulance (f.)", "le pompier", "le policier", "avoir mal"],
        plan: ["Что произошло", "Кто пострадал", "Какие службы приехали", "Что делать дальше"],
        answers: {
          easy: "J'ai vu un accident dans la rue. Une victime avait mal à la jambe. J'ai appelé les urgences. L'ambulance, les pompiers et la police sont arrivés rapidement.",
          medium: "Un accident peut arriver dans les transports ou dans la rue. Si une personne est blessée, il faut appeler les urgences. Les pompiers aident la victime, l'ambulance l'emmène à l'hôpital et la police organise la circulation.",
          challenge: "Si je vois un accident, je garde mon calme. D'abord, je regarde si la victime est blessée et si elle a mal quelque part. Ensuite, j'appelle les urgences et je donne l'adresse. Les pompiers, la police et l'ambulance peuvent intervenir pour protéger les personnes et soulager les blessés."
        }
      }
    ],
    drills: [["Récit", "Raconte au passé composé."], ["Services", "Nomme ambulance, police, pompiers."], ["Douleur", "Ajoute une partie du corps."]]
  },
  {
    id: "ticket-7",
    number: 7,
    title: "La restauration",
    page: "билет 7",
    topic: "рестораны, блюда, еда",
    vocabGroups: [
      { title: "Lieux", words: ["le bistrot", "la brasserie", "le fast-food", "le restaurant gastronomique", "le restaurant végan", "le traiteur"] },
      { title: "Au restaurant", words: ["commander des plats", "sur place", "à emporter", "le serveur", "la serveuse", "le service", "le pourboire"] },
      { title: "Plats et goûts", words: ["les crêpes (f.)", "la ratatouille", "le couscous", "le fondant au chocolat", "épicé(e)", "salé(e)", "sucré(e)", "se régaler"] }
    ],
    tickets: [
      {
        title: "Билет 7 · Ресторан и еда",
        question: "La restauration, les types de restauration, les plats, les aliments: exprimer son intérêt, ses connaissances.",
        goal: "Расскажи, какие рестораны и блюда тебе нравятся.",
        required: ["le restaurant gastronomique", "commander des plats", "le serveur", "la ratatouille", "les crêpes (f.)", "se régaler"],
        plan: ["Назвать тип ресторана", "Назвать блюда", "Описать вкус", "Сказать мнение"],
        answers: {
          easy: "J'aime aller au restaurant avec mes amis. Je peux commander des crêpes ou de la ratatouille. Si le service est bon et le plat est goûteux, je me régale.",
          medium: "Je préfère les restaurants simples avec des produits frais. Dans une brasserie, je peux commander un plat salé et un dessert sucré, par exemple des crêpes ou un fondant au chocolat. Pour moi, le service est aussi important.",
          challenge: "La restauration est intéressante parce qu'il existe beaucoup de types de restaurants: le bistrot, la brasserie, le fast-food ou le restaurant gastronomique. Personnellement, j'aime les plats faits maison comme la ratatouille ou les crêpes. Si le serveur est agréable et si le plat n'est pas trop épicé, je me régale."
        }
      }
    ],
    drills: [["Commande", "Dis: je voudrais..., s'il vous plaît."], ["Goûts", "Utilise salé, sucré, épicé."], ["Avis", "Donne une critique positive."]]
  },
  {
    id: "ticket-8",
    number: 8,
    title: "L'information",
    page: "билет 8",
    topic: "информация, предпочтения, критика",
    vocabGroups: [
      { title: "Information", words: ["les médias", "le journalisme numérique", "le reportage", "le documentaire", "la plateforme", "le(s) point(s) de vue"] },
      { title: "S'informer", words: ["être au courant de", "regarder les nouvelles", "regarder les informations", "s'abonner à un média", "suivre l'actualité"] },
      { title: "Critique", words: ["les fausses nouvelles", "les infox", "commenter", "diffuser une information"] }
    ],
    tickets: [
      {
        title: "Билет 8 · Как я узнаю новости",
        question: "L'information, s'informer, vos préférences: faire une critique positive ou négative.",
        goal: "Скажи, где ты узнаёшь новости, что нравится и что не нравится.",
        required: ["les médias", "suivre l'actualité", "regarder les nouvelles", "la plateforme", "les fausses nouvelles", "le(s) point(s) de vue"],
        plan: ["Где узнаёшь новости", "Что предпочитаешь", "Плюс", "Минус"],
        answers: {
          easy: "Je m'informe surtout sur Internet. Je regarde les nouvelles sur une plateforme et je suis l'actualité sur les réseaux sociaux. C'est pratique, mais il faut faire attention aux fausses nouvelles.",
          medium: "Pour être au courant de l'actualité, j'utilise les médias en ligne. J'aime les reportages et les documentaires parce qu'ils expliquent un sujet. Mais je pense qu'il faut comparer plusieurs points de vue.",
          challenge: "Je préfère m'informer avec le journalisme numérique parce que c'est rapide et accessible. Je peux regarder les informations, lire un article ou voir un reportage. Le point positif, c'est la diversité des médias. Le point négatif, c'est le risque des infox, donc il faut vérifier les sources."
        }
      }
    ],
    drills: [["Source", "Dis où tu lis/regardes les infos."], ["Critique", "Un point positif, un point négatif."], ["Sécurité", "Parle des fausses nouvelles."]]
  },
  {
    id: "ticket-9",
    number: 9,
    title: "La presse et la télévision",
    page: "билет 9",
    topic: "пресса, телевидение, рубрики",
    vocabGroups: [
      { title: "Presse", words: ["l'article (m.)", "le journal", "le magazine", "la revue", "la presse en ligne", "la presse papier", "le titre"] },
      { title: "Télévision", words: ["la chaîne", "le direct", "l'émission (f.)", "le journal télévisé", "le JT", "la télé(vision)"] },
      { title: "Rubriques", words: ["actualité internationale", "culture", "écologie", "économie", "météo", "politique", "sport"] }
    ],
    tickets: [
      {
        title: "Билет 9 · Пресса и ТВ",
        question: "La presse écrite, la télévision, les rubriques: faire une critique positive ou négative.",
        goal: "Сравни прессу и телевидение простыми фразами.",
        required: ["la presse en ligne", "la presse papier", "le journal télévisé", "l'émission (f.)", "culture", "sport"],
        plan: ["Что читаешь", "Что смотришь", "Любимые рубрики", "Критика"],
        answers: {
          easy: "Je lis parfois la presse en ligne. Je regarde aussi le journal télévisé. J'aime les rubriques culture, sport et météo. La presse papier est intéressante, mais je l'utilise moins.",
          medium: "La presse en ligne est pratique parce qu'on peut lire un article rapidement. La télévision est utile pour voir le direct ou une émission. Je préfère les sujets de culture et de sport, mais je n'aime pas les informations trop longues.",
          challenge: "À mon avis, la presse écrite et la télévision ont des avantages différents. La presse en ligne permet de choisir un article et de lire tranquillement. La télévision donne des images et le direct. Le point négatif, c'est que certaines émissions simplifient trop les sujets."
        }
      }
    ],
    drills: [["Comparer", "Utilise: plus pratique que, moins long que."], ["Rubriques", "Choisis trois rubriques."], ["Critique", "Ajoute: j'aime / je n'aime pas."]]
  },
  {
    id: "ticket-10",
    number: 10,
    title: "Les médias et les réseaux sociaux",
    page: "билет 10",
    topic: "медиа, соцсети, актуальность",
    vocabGroups: [
      { title: "Médias", words: ["les médias", "le documentaire", "le reportage", "la diffusion en direct", "la diffusion en streaming", "publier un article"] },
      { title: "Réseaux sociaux", words: ["être connecté(e)", "être sur un réseau social", "ouvrir un compte sur un réseau social", "poster des photos", "regarder une vidéo", "suivre quelqu'un sur un réseau"] },
      { title: "Communication", words: ["commenter", "diffuser une information", "un moyen de communication", "sensibiliser un public"] }
    ],
    tickets: [
      {
        title: "Билет 10 · Медиа и соцсети",
        question: "Les médias, les BD, les actualités, les réseaux sociaux : faire une critique positive ou négative.",
        goal: "Расскажи про соцсети и медиа: плюсы и минусы.",
        required: ["les médias", "être sur un réseau social", "poster des photos", "regarder une vidéo", "commenter", "diffuser une information"],
        plan: ["Какими медиа пользуешься", "Что делаешь в соцсетях", "Плюс", "Минус"],
        answers: {
          easy: "Je suis sur les réseaux sociaux. Je regarde des vidéos, je suis des personnes et parfois je commente. C'est un moyen de communication pratique, mais il ne faut pas passer trop de temps en ligne.",
          medium: "Les médias et les réseaux sociaux permettent de diffuser une information très vite. On peut regarder une vidéo, poster des photos et suivre l'actualité. Le point négatif, c'est qu'il y a parfois des fausses nouvelles.",
          challenge: "Aujourd'hui, les médias et les réseaux sociaux sont très présents. Ils aident à communiquer, à sensibiliser un public et à suivre l'actualité. Mais je pense qu'il faut rester prudent: il ne faut pas tout croire, et il faut limiter le temps passé sur les plateformes."
        }
      }
    ],
    drills: [["Actions", "Utilise trois verbes: regarder, poster, commenter."], ["Critique", "Un avantage, un danger."], ["Temps", "Dis combien de temps tu passes en ligne."]]
  },
  {
    id: "ticket-11",
    number: 11,
    title: "Les podcasts",
    page: "билет 11",
    topic: "подкасты, радио, коммуникация",
    vocabGroups: [
      { title: "Podcasts", words: ["écouter des podcasts", "l'épisode (m.)", "les contenus sonores (m.)", "l'écoute (f.)", "la voix", "raconter"] },
      { title: "Radio", words: ["l'auditeur", "l'auditrice", "l'émission de radio (f.)", "le programme de radio"] },
      { title: "Communication", words: ["un outil de communication", "un moyen de communication", "transmettre des connaissances", "sensibiliser un public"] }
    ],
    tickets: [
      {
        title: "Билет 11 · Подкасты и коммуникация",
        question: "Les podcasts, la communication: faire une critique positive ou négative.",
        goal: "Объясни, зачем слушать подкасты и чем они полезны.",
        required: ["écouter des podcasts", "l'épisode (m.)", "la voix", "raconter", "un moyen de communication", "transmettre des connaissances"],
        plan: ["Слушаешь ли подкасты", "Когда слушаешь", "Польза", "Минус"],
        answers: {
          easy: "J'écoute parfois des podcasts. J'aime la voix du journaliste et les histoires qu'il raconte. Pour moi, c'est un bon moyen de communication et d'apprentissage.",
          medium: "Les podcasts sont pratiques parce qu'on peut les écouter dans les transports ou à la maison. Un épisode peut transmettre des connaissances sur un sujet simple. Le point négatif, c'est que parfois c'est trop long.",
          challenge: "Je trouve que les podcasts sont un outil de communication très moderne. Avec la voix, on peut raconter une histoire, expliquer une idée et sensibiliser un public. Personnellement, j'aime les épisodes courts, parce qu'ils sont faciles à écouter et utiles pour apprendre."
        }
      }
    ],
    drills: [["Préférence", "Dis quel sujet t'intéresse."], ["Moment", "Dis quand tu écoutes."], ["Critique", "Court ou long? utile ou inutile?"]]
  },
  {
    id: "ticket-12",
    number: 12,
    title: "Le sommeil",
    page: "билет 12",
    topic: "сон, причины, мнение",
    vocabGroups: [
      { title: "Sommeil", words: ["le bâillement", "la fatigue physique", "manquer de sommeil", "le repos", "le réveil", "s'endormir", "se réveiller", "la sieste"] },
      { title: "Corps", words: ["le dos", "le cou", "la tête", "la respiration", "le rythme cardiaque", "relâcher ses muscles"] },
      { title: "Habitudes", words: ["adopter de bonnes habitudes", "récupérer", "reposé(e)", "se sentir léger, légère", "s'étirer", "se lever"] }
    ],
    tickets: [
      {
        title: "Билет 12 · Сон",
        question: "Le sommeil (bon, mauvais, les raisons) : exprimer son point de vue.",
        goal: "Расскажи, почему сон важен и что делать, если плохо спишь.",
        required: ["manquer de sommeil", "le réveil", "s'endormir", "se réveiller", "le repos", "récupérer"],
        plan: ["Мнение о сне", "Причины плохого сна", "Последствия", "Советы"],
        answers: {
          easy: "Le sommeil est très important. Quand je manque de sommeil, je suis fatigué au réveil. Pour mieux dormir, il faut s'endormir plus tôt, éviter le téléphone et bien se reposer.",
          medium: "À mon avis, un bon sommeil aide à récupérer. Si je me couche tard, je me réveille fatigué et j'ai parfois mal au cou ou au dos. Pour mieux dormir, je respire calmement et je relâche mes muscles.",
          challenge: "Je pense que le sommeil influence beaucoup la santé. Quand une personne manque de sommeil, elle peut avoir de la fatigue physique, du stress et un mauvais rythme. Pour bien récupérer, il faut adopter de bonnes habitudes: se coucher plus tôt, éviter les écrans, respirer calmement et s'étirer au réveil."
        }
      }
    ],
    drills: [["Opinion", "Dis pourquoi le sommeil est important."], ["Causes", "Donne deux raisons du mauvais sommeil."], ["Conseils", "Donne trois conseils avec il faut."]]
  }
];

const activeModules = examTickets;
const savedModuleId = localStorage.getItem("moduleId");
const initialModuleId = activeModules.some((module) => String(module.id) === savedModuleId) ? savedModuleId : activeModules[0].id;
const ANSWER_CONTENT_VERSION = "long-v1";

const answerTranslations = {
  "ticket-1": {
    easy: "По моему мнению, новые технологии очень полезны. В будущем будет больше роботов и искусственного интеллекта. Смартфон останется необходимым, потому что он помогает общаться и искать информацию.",
    medium: "Я думаю, что новые технологии изменят повседневную жизнь. Например, роботы, приложения и искусственный интеллект станут более практичными. Эти предметы будут полезны для работы, учёбы и экономии времени.",
    challenge: "В будущем технологические инновации будут повсюду. Робот сможет помогать дома, приложение сможет организовывать день, а искусственный интеллект сможет передавать знания. Но нужно будет использовать эти предметы умеренно, потому что технологии должны помогать людям, а не заменять человеческие отношения."
  },
  "ticket-2": {
    easy: "Чтобы быть в хорошей форме, нужно иметь хорошие привычки. Нужно спать, отдыхать и нормально питаться. Если человек болен, нужно обратиться к врачу и следовать лечению.",
    medium: "По моему мнению, здоровье зависит от ежедневных привычек. Отдых, спокойное дыхание и спорт помогают восстановиться. Но если есть температура или сильная боль, лучше обратиться к врачу.",
    challenge: "Я думаю, что медицина важна, но личные привычки тоже имеют значение. Чтобы оставаться в хорошей форме, нужно достаточно спать, избегать стресса и находить время на восстановление. Когда проблема продолжается, нельзя ждать: нужно обратиться к врачу и выбрать подходящее лечение."
  },
  "ticket-3": {
    easy: "Здравствуйте, мадам. Я плохо себя чувствую. У меня заложен нос, я кашляю и у меня небольшая температура. Вы можете посоветовать мне сироп или капли? Большое спасибо.",
    medium: "Здравствуйте, я плохо себя чувствую уже два дня. У меня болит горло, заложен нос и кашель. Я хотел бы простое средство, чтобы облегчить боль. Вы советуете мне сироп?",
    challenge: "Здравствуйте, мадам, я пришёл попросить у вас совет. Я плохо себя чувствую: у меня температура, заложен нос, сильный кашель и болит горло. Я хотел бы лёгкое лечение, например сироп или капли. Если это не пройдёт, я обращусь к врачу."
  },
  "ticket-4": {
    easy: "Здравствуйте, доктор. У меня болит спина и шея. Я страдаю уже два дня. Я хотел бы узнать, как облегчить боль и какое лечение мне нужно принимать.",
    medium: "Здравствуйте, доктор, я пришёл, потому что у меня болит голова, спина и шея. Боль не очень сильная, но она меня утомляет. Вы можете посоветовать мне лечение, чтобы снять напряжение?",
    challenge: "Здравствуйте, доктор. Уже несколько дней я страдаю от боли в спине и шее. У меня также иногда болит голова. Я думаю, что это, возможно, из-за стресса или плохой позы. Я хотел бы совет, чтобы облегчить боль и избежать повторения."
  },
  "ticket-5": {
    easy: "В случае срочной ситуации нужно позвонить по номеру экстренной помощи. Во время звонка нужно объяснить, где находится пострадавший. Затем скорая помощь или SAMU приезжает, чтобы помочь раненому.",
    medium: "Если у человека серьёзная проблема, нужно сохранять спокойствие и звонить в экстренные службы. Нужно назвать адрес, объяснить симптомы и сказать, есть ли раненый. Потом SAMU или пожарные могут вмешаться.",
    challenge: "По моему мнению, в экстренной ситуации нужно действовать быстро, но спокойно. Нужно позвонить по номеру экстренной помощи, описать ситуацию, адрес и состояние пострадавшего. Не нужно перемещать раненого, если это не необходимо. Затем приезжает скорая помощь, SAMU или пожарные."
  },
  "ticket-6": {
    easy: "Я увидел аварию на улице. У пострадавшего болела нога. Я позвонил в экстренные службы. Скорая помощь, пожарные и полиция быстро приехали.",
    medium: "Авария может произойти в транспорте или на улице. Если человек ранен, нужно позвонить в экстренные службы. Пожарные помогают пострадавшему, скорая отвозит его в больницу, а полиция организует движение.",
    challenge: "Если я вижу аварию, я сохраняю спокойствие. Сначала я смотрю, ранен ли пострадавший и болит ли у него что-то. Затем я звоню в экстренные службы и называю адрес. Пожарные, полиция и скорая помощь могут вмешаться, чтобы защитить людей и облегчить состояние раненых."
  },
  "ticket-7": {
    easy: "Мне нравится ходить в ресторан с друзьями. Я могу заказать блины или рататуй. Если обслуживание хорошее и блюдо вкусное, я наслаждаюсь едой.",
    medium: "Я предпочитаю простые рестораны со свежими продуктами. В брассери я могу заказать солёное блюдо и сладкий десерт, например блины или шоколадный фондан. Для меня обслуживание тоже важно.",
    challenge: "Ресторанная тема интересна, потому что существуют разные типы заведений: бистро, брассери, фастфуд или гастрономический ресторан. Лично мне нравятся домашние блюда, такие как рататуй или блины. Если официант приятный и блюдо не слишком острое, я наслаждаюсь едой."
  },
  "ticket-8": {
    easy: "Я узнаю новости в основном в интернете. Я смотрю новости на платформе и слежу за актуальностью в социальных сетях. Это удобно, но нужно обращать внимание на фейковые новости.",
    medium: "Чтобы быть в курсе новостей, я использую онлайн-медиа. Мне нравятся репортажи и документальные фильмы, потому что они объясняют тему. Но я думаю, что нужно сравнивать несколько точек зрения.",
    challenge: "Я предпочитаю получать информацию через цифровую журналистику, потому что это быстро и доступно. Я могу смотреть новости, читать статью или смотреть репортаж. Положительная сторона — разнообразие медиа. Отрицательная сторона — риск фейков, поэтому нужно проверять источники."
  },
  "ticket-9": {
    easy: "Я иногда читаю онлайн-прессу. Я также смотрю телевизионные новости. Мне нравятся рубрики культура, спорт и погода. Бумажная пресса интересная, но я использую её меньше.",
    medium: "Онлайн-пресса удобна, потому что можно быстро прочитать статью. Телевидение полезно, чтобы смотреть прямой эфир или передачу. Я предпочитаю темы культуры и спорта, но не люблю слишком длинные новости.",
    challenge: "По моему мнению, письменная пресса и телевидение имеют разные преимущества. Онлайн-пресса позволяет выбрать статью и спокойно читать. Телевидение даёт изображения и прямой эфир. Отрицательная сторона в том, что некоторые передачи слишком упрощают темы."
  },
  "ticket-10": {
    easy: "Я есть в социальных сетях. Я смотрю видео, слежу за людьми и иногда комментирую. Это удобное средство коммуникации, но не нужно проводить слишком много времени онлайн.",
    medium: "Медиа и социальные сети позволяют очень быстро распространять информацию. Можно смотреть видео, публиковать фотографии и следить за новостями. Отрицательная сторона в том, что иногда бывают фейковые новости.",
    challenge: "Сегодня медиа и социальные сети очень присутствуют в жизни. Они помогают общаться, привлекать внимание публики и следить за новостями. Но я думаю, что нужно быть осторожным: нельзя всему верить, и нужно ограничивать время на платформах."
  },
  "ticket-11": {
    easy: "Я иногда слушаю подкасты. Мне нравится голос журналиста и истории, которые он рассказывает. Для меня это хороший способ коммуникации и обучения.",
    medium: "Подкасты удобны, потому что их можно слушать в транспорте или дома. Эпизод может передавать знания по простой теме. Отрицательная сторона в том, что иногда это слишком долго.",
    challenge: "Я считаю, что подкасты — очень современный инструмент коммуникации. С помощью голоса можно рассказать историю, объяснить идею и привлечь внимание публики. Лично мне нравятся короткие эпизоды, потому что их легко слушать и они полезны для учёбы."
  },
  "ticket-12": {
    easy: "Сон очень важен. Когда я недосыпаю, я устаю утром после пробуждения. Чтобы лучше спать, нужно засыпать раньше, избегать телефона и хорошо отдыхать.",
    medium: "По моему мнению, хороший сон помогает восстановиться. Если я ложусь поздно, я просыпаюсь уставшим, и у меня иногда болит шея или спина. Чтобы лучше спать, я спокойно дышу и расслабляю мышцы.",
    challenge: "Я думаю, что сон сильно влияет на здоровье. Когда человек недосыпает, у него может быть физическая усталость, стресс и плохой ритм. Чтобы хорошо восстановиться, нужно приобрести хорошие привычки: ложиться раньше, избегать экранов, спокойно дышать и потягиваться утром."
  }
};

const answerExpansions = {
  "ticket-1": {
    fr: "Par exemple, ma grand-mère utilise déjà son téléphone pour appeler la famille. Elle ne comprend pas toujours les applications, mais elle trouve cela pratique. Dans mes études, j'utilise aussi Internet pour chercher des informations. Une bonne technologie doit être simple, utile et pas trop chère. Je pense qu'il faut que les gens gardent du temps pour parler en face à face (subjonctif: gardent). Si un robot aide une personne âgée, c'est positif. Mais si la technologie prend toute la place, c'est un problème.",
    ru: "Например, моя бабушка уже использует телефон, чтобы звонить семье. Она не всегда понимает приложения, но считает это удобным. В учёбе я тоже использую интернет, чтобы искать информацию. Хорошая технология должна быть простой, полезной и не слишком дорогой. Я думаю, что людям нужно сохранять время для общения лицом к лицу (subjonctif: gardent). Если робот помогает пожилому человеку, это положительно. Но если технология занимает всё место, это проблема."
  },
  "ticket-2": {
    fr: "Dans ma famille, on dit souvent que la santé est plus importante que le travail. Ma grand-mère conseille de bien dormir, de marcher et de manger une soupe chaude. Moi, j'essaie de boire plus d'eau et de bouger un peu chaque jour. Quand je suis stressé, je respire lentement et je fais une petite pause. Il faut que je fasse attention à mon rythme de vie (subjonctif: fasse). La médecine traditionnelle peut aider, mais il faut rester prudent. Pour moi, le plus important est d'écouter son corps.",
    ru: "В моей семье часто говорят, что здоровье важнее работы. Моя бабушка советует хорошо спать, ходить пешком и есть горячий суп. Я стараюсь пить больше воды и немного двигаться каждый день. Когда я испытываю стресс, я медленно дышу и делаю небольшую паузу. Мне нужно следить за своим ритмом жизни (subjonctif: fasse). Традиционная медицина может помогать, но нужно быть осторожным. Для меня самое важное — слушать своё тело."
  },
  "ticket-3": {
    fr: "À la pharmacie, je parle simplement parce que je ne suis pas médecin. Je dis où j'ai mal et depuis quand. Par exemple, je peux dire que j'ai le nez bouché depuis hier soir. Je peux aussi demander si le sirop se prend avant ou après le repas. Ma grand-mère préfère souvent les tisanes, mais moi je demande conseil au pharmacien. Il faut que le pharmacien comprenne bien mes symptômes (subjonctif: comprenne). Si la fièvre continue, je ne reste pas à la maison. Je prends rendez-vous avec un médecin.",
    ru: "В аптеке я говорю просто, потому что я не врач. Я говорю, где у меня болит и с какого времени. Например, я могу сказать, что у меня заложен нос со вчерашнего вечера. Я также могу спросить, принимают ли сироп до еды или после еды. Моя бабушка часто предпочитает травяные чаи, но я спрашиваю совет у фармацевта. Нужно, чтобы фармацевт хорошо понял мои симптомы (subjonctif: comprenne). Если температура продолжается, я не остаюсь дома. Я записываюсь к врачу."
  },
  "ticket-4": {
    fr: "Chez le médecin, il faut expliquer les symptômes avec précision. Je peux dire si la douleur est forte ou légère. Je peux aussi montrer la partie du corps qui me fait mal. Par exemple, après une longue journée devant l'ordinateur, j'ai parfois mal au dos. Ma grand-mère dit qu'il faut se lever et s'étirer plus souvent. Il faut que le médecin puisse comprendre la situation (subjonctif: puisse). Ensuite, il peut donner un traitement ou conseiller du repos. Je trouve important de ne pas attendre trop longtemps.",
    ru: "У врача нужно объяснять симптомы точно. Я могу сказать, сильная боль или лёгкая. Я также могу показать часть тела, которая болит. Например, после долгого дня за компьютером у меня иногда болит спина. Моя бабушка говорит, что нужно чаще вставать и потягиваться. Нужно, чтобы врач смог понять ситуацию (subjonctif: puisse). Затем он может назначить лечение или посоветовать отдых. Я считаю важным не ждать слишком долго."
  },
  "ticket-5": {
    fr: "Dans une urgence, chaque minute peut être importante. Il faut donner une adresse claire et parler calmement. Si je ne connais pas la rue, je peux décrire un magasin, un arrêt ou un bâtiment près de moi. Je ne dois pas paniquer, parce que la victime a besoin d'aide. Il faut que les secours arrivent vite (subjonctif: arrivent). Les pompiers, le SAMU et l'ambulance ont chacun un rôle. Je pense aussi qu'il faut apprendre les gestes simples de premiers secours. Cela peut sauver une vie.",
    ru: "В срочной ситуации каждая минута может быть важной. Нужно назвать чёткий адрес и говорить спокойно. Если я не знаю улицу, я могу описать магазин, остановку или здание рядом со мной. Я не должен паниковать, потому что пострадавшему нужна помощь. Нужно, чтобы службы помощи приехали быстро (subjonctif: arrivent). Пожарные, SAMU и скорая помощь имеют свою роль. Я также думаю, что нужно учить простые действия первой помощи. Это может спасти жизнь."
  },
  "ticket-6": {
    fr: "Un accident peut être très stressant pour tout le monde. Si je suis témoin, je dois regarder la situation avant d'agir. Je peux demander à une autre personne d'appeler les urgences. Si la victime parle, je peux lui dire de rester calme. Ma grand-mère dit toujours qu'il ne faut pas jouer au héros. Il faut que je reste prudent (subjonctif: reste). Après l'arrivée de la police ou des pompiers, je peux expliquer ce que j'ai vu. Cela aide les services à comprendre l'accident.",
    ru: "Авария может быть очень стрессовой для всех. Если я свидетель, я должен посмотреть на ситуацию перед тем, как действовать. Я могу попросить другого человека позвонить в экстренные службы. Если пострадавший говорит, я могу сказать ему сохранять спокойствие. Моя бабушка всегда говорит, что не нужно играть в героя. Нужно, чтобы я оставался осторожным (subjonctif: reste). После приезда полиции или пожарных я могу объяснить, что видел. Это помогает службам понять аварию."
  },
  "ticket-7": {
    fr: "Quand je vais au restaurant, je regarde d'abord le menu. J'aime les plats simples, parce qu'ils sont plus faciles à comprendre et à choisir. Avec ma famille, on commande parfois des crêpes ou un plat chaud. Ma grand-mère cuisine très bien, donc je compare souvent avec sa cuisine. Si le serveur est poli, l'ambiance devient plus agréable. Il faut que le service soit rapide mais aussi sympathique (subjonctif: soit). Je préfère les produits frais et les plats pas trop gras. À la fin, je peux laisser un petit pourboire.",
    ru: "Когда я иду в ресторан, я сначала смотрю меню. Мне нравятся простые блюда, потому что их легче понять и выбрать. С семьёй мы иногда заказываем блины или горячее блюдо. Моя бабушка очень хорошо готовит, поэтому я часто сравниваю с её кухней. Если официант вежливый, атмосфера становится приятнее. Нужно, чтобы обслуживание было быстрым, но также доброжелательным (subjonctif: soit). Я предпочитаю свежие продукты и не слишком жирные блюда. В конце я могу оставить небольшие чаевые."
  },
  "ticket-8": {
    fr: "Pour m'informer, je regarde surtout les médias en ligne. C'est rapide, mais parfois il y a trop d'informations. Je préfère lire un petit article clair plutôt qu'un texte très long. Je peux aussi regarder un reportage pour mieux comprendre un sujet. Ma grand-mère regarde encore les informations à la télévision. Il faut que les journalistes vérifient les sources (subjonctif: vérifient). Sinon, les fausses nouvelles peuvent circuler très vite. Pour moi, il est important de comparer plusieurs points de vue.",
    ru: "Чтобы узнавать новости, я чаще всего смотрю онлайн-медиа. Это быстро, но иногда информации слишком много. Я предпочитаю читать небольшую понятную статью, а не очень длинный текст. Я также могу посмотреть репортаж, чтобы лучше понять тему. Моя бабушка всё ещё смотрит новости по телевизору. Нужно, чтобы журналисты проверяли источники (subjonctif: vérifient). Иначе фейковые новости могут распространяться очень быстро. Для меня важно сравнивать несколько точек зрения."
  },
  "ticket-9": {
    fr: "La presse et la télévision ne donnent pas toujours la même impression. Dans un journal, on peut relire une phrase et réfléchir. À la télévision, les images aident à comprendre plus vite. J'aime les rubriques culture, météo et société. Mon père regarde parfois le sport, surtout les grands matchs. Il faut que les médias présentent les informations clairement (subjonctif: présentent). Je n'aime pas quand une émission parle trop fort ou trop vite. Pour apprendre le français, regarder un JT court peut être utile.",
    ru: "Пресса и телевидение не всегда создают одинаковое впечатление. В газете можно перечитать фразу и подумать. На телевидении изображения помогают быстрее понять. Мне нравятся рубрики культура, погода и общество. Мой отец иногда смотрит спорт, особенно большие матчи. Нужно, чтобы медиа представляли информацию понятно (subjonctif: présentent). Мне не нравится, когда передача говорит слишком громко или слишком быстро. Для изучения французского короткий выпуск новостей может быть полезен."
  },
  "ticket-10": {
    fr: "Les réseaux sociaux font partie de la vie quotidienne. Je peux écrire à mes amis, regarder une vidéo ou lire une nouvelle. Mais je sais que tout n'est pas vrai sur Internet. Il faut choisir les comptes que l'on suit. Parfois, je ferme l'application pour me concentrer sur mes études. Il faut que je limite mon temps en ligne (subjonctif: limite). Les médias peuvent sensibiliser un public, par exemple sur l'écologie ou la santé. Pour moi, le plus important est de rester critique.",
    ru: "Социальные сети являются частью повседневной жизни. Я могу написать друзьям, посмотреть видео или прочитать новость. Но я знаю, что не всё правда в интернете. Нужно выбирать аккаунты, на которые подписываешься. Иногда я закрываю приложение, чтобы сосредоточиться на учёбе. Мне нужно ограничивать своё время онлайн (subjonctif: limite). Медиа могут привлекать внимание публики, например к экологии или здоровью. Для меня самое важное — оставаться критичным."
  },
  "ticket-11": {
    fr: "Les podcasts sont pratiques parce qu'on peut les écouter partout. Je peux écouter un épisode dans le métro ou pendant une promenade. La voix est importante, parce qu'elle rend le sujet plus vivant. J'aime quand une personne raconte une histoire simple. Ma grand-mère préfère la radio, mais le principe est un peu le même. Il faut que le podcast soit clair et pas trop long (subjonctif: soit). Pour apprendre le français, je peux écouter plusieurs fois le même épisode. Cela aide à mémoriser les mots.",
    ru: "Подкасты удобны, потому что их можно слушать везде. Я могу слушать эпизод в метро или во время прогулки. Голос важен, потому что он делает тему более живой. Мне нравится, когда человек рассказывает простую историю. Моя бабушка предпочитает радио, но принцип немного похожий. Нужно, чтобы подкаст был понятным и не слишком длинным (subjonctif: soit). Для изучения французского я могу слушать один и тот же эпизод несколько раз. Это помогает запоминать слова."
  },
  "ticket-12": {
    fr: "Le sommeil influence l'humeur, le travail et les études. Si je dors mal, je suis moins attentif pendant la journée. Le soir, j'essaie de poser mon téléphone loin du lit. Ma grand-mère dit qu'une tisane chaude aide parfois à se détendre. Je pense aussi que la respiration calme est utile. Il faut que je me couche plus tôt pendant la semaine (subjonctif: couche). Le matin, je peux m'étirer pour réveiller le corps. Un bon rythme donne plus d'énergie.",
    ru: "Сон влияет на настроение, работу и учёбу. Если я плохо сплю, я менее внимателен днём. Вечером я стараюсь класть телефон далеко от кровати. Моя бабушка говорит, что горячий травяной чай иногда помогает расслабиться. Я также думаю, что спокойное дыхание полезно. Нужно, чтобы я ложился раньше в течение недели (subjonctif: couche). Утром я могу потянуться, чтобы разбудить тело. Хороший ритм даёт больше энергии."
  }
};

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

Object.assign(translations, {
  "la technologie": "технология",
  "l'innovation (f.)": "инновация",
  "l'invention (f.)": "изобретение",
  "le robot": "робот",
  "l'intelligence artificielle (f.)": "искусственный интеллект",
  "le logiciel": "программа, ПО",
  "l'imprimante 3D (f.)": "3D-принтер",
  "la tablette": "планшет",
  "l'appareil (m.)": "устройство, аппарат",
  "le smartphone": "смартфон",
  "la batterie": "батарея, аккумулятор",
  "l'écran (m.)": "экран",
  "le clavier": "клавиатура",
  "la souris": "мышь",
  "l'ordinateur": "компьютер",
  "l'application (f.)": "приложение",
  "utile": "полезный",
  "pratique": "удобный, практичный",
  "indispensable": "необходимый",
  "automatique": "автоматический",
  "autonome": "автономный",
  "fonctionner": "работать, функционировать",
  "être en panne": "быть сломанным",
  "tomber en panne": "сломаться",
  "se soigner": "лечиться",
  "les transports": "транспорт",
  "le bistrot": "бистро",
  "la brasserie": "ресторан-пивная, брассери",
  "le fast-food": "фастфуд",
  "le restaurant gastronomique": "гастрономический ресторан",
  "le restaurant végan": "веганский ресторан",
  "le traiteur": "кейтеринг, кулинария",
  "commander des plats": "заказывать блюда",
  "sur place": "на месте",
  "à emporter": "с собой",
  "le serveur": "официант",
  "la serveuse": "официантка",
  "le service": "обслуживание",
  "le pourboire": "чаевые",
  "les crêpes (f.)": "блины, крепы",
  "la ratatouille": "рататуй",
  "le couscous": "кускус",
  "le fondant au chocolat": "шоколадный фондан",
  "épicé(e)": "пряный, острый",
  "salé(e)": "солёный",
  "sucré(e)": "сладкий",
  "se régaler": "наслаждаться едой"
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
  cardScope: localStorage.getItem("cardScope") || "ticket",
  cardFlipped: false,
  cardStats: JSON.parse(localStorage.getItem("cardStats") || "{}"),
  customAnswers: JSON.parse(localStorage.getItem("customAnswers") || "{}"),
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
const answerTranslation = document.querySelector("#answerTranslation");
const saveAnswerBtn = document.querySelector("#saveAnswerBtn");
const resetAnswerBtn = document.querySelector("#resetAnswerBtn");
const translateToRussianBtn = document.querySelector("#translateToRussianBtn");
const translateToFrenchBtn = document.querySelector("#translateToFrenchBtn");
const openGoogleTranslateBtn = document.querySelector("#openGoogleTranslateBtn");
const translateStatus = document.querySelector("#translateStatus");
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
const speakCardBtn = document.querySelector("#speakCardBtn");
const knownCardBtn = document.querySelector("#knownCardBtn");
const wrongCardBtn = document.querySelector("#wrongCardBtn");
const scopeTabs = document.querySelectorAll(".scope-tab");
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
  return activeModules.find((module) => String(module.id) === String(state.moduleId)) || activeModules[0];
}

function allVocab(module) {
  if (module.vocabGroups) {
    return module.vocabGroups.flatMap((group) => group.words);
  }
  return module.vocab || [];
}

function uniqueWords(words) {
  return [...new Set(words)];
}

function allExamVocab() {
  return uniqueWords(activeModules.flatMap((module) => allVocab(module)));
}

function cardDeck() {
  if (state.cardScope === "all") {
    return {
      id: "all-vocab",
      label: "Все слова",
      words: allExamVocab()
    };
  }

  const module = currentModule();
  return {
    id: module.id,
    label: `Билет ${module.number || module.id}`,
    words: allVocab(module)
  };
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
  const deck = cardDeck();
  const words = deck.words;
  const word = words[state.cardIndex];
  const key = statKey(deck.id, word);
  const current = state.cardStats[key] || { right: 0, wrong: 0 };
  state.cardStats[key] = {
    right: current.right + (isRight ? 1 : 0),
    wrong: current.wrong + (isRight ? 0 : 1)
  };
  addXp(isRight ? 5 : 1);
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
  const deck = cardDeck();
  const words = deck.words;
  if (!words.length) return;
  state.cardIndex = Math.min(state.cardIndex, words.length - 1);
  const word = words[state.cardIndex];
  const translation = translationFor(word);
  const stat = statFor(deck.id, word);
  cardProgress.textContent = `${deck.label} · ${state.cardIndex + 1} / ${words.length}`;
  cardLabel.textContent = state.cardFlipped ? "Перевод" : "Французский";
  cardFront.textContent = state.cardFlipped ? translation : word;
  cardBack.textContent = state.cardFlipped ? `${word} · верно ${stat.right}, ошибок ${stat.wrong}` : "Нажми, чтобы увидеть перевод";
  flashcard.classList.toggle("flipped", state.cardFlipped);
  scopeTabs.forEach((button) => button.classList.toggle("active", button.dataset.scope === state.cardScope));
  renderCardStats();
}

function renderCardStats() {
  const deck = cardDeck();
  const words = deck.words;
  const stats = words.map((word) => ({ word, ...statFor(deck.id, word) }));
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
  const words = cardDeck().words;
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
  localStorage.setItem("cardScope", state.cardScope);
  localStorage.setItem("cardStats", JSON.stringify(state.cardStats));
  localStorage.setItem("customAnswers", JSON.stringify(state.customAnswers));
}

function currentTicket() {
  const module = currentModule();
  const tickets = module.tickets || [];
  return tickets[state.questionIndex % tickets.length];
}

function answerKey() {
  const module = currentModule();
  return `${ANSWER_CONTENT_VERSION}::${module.id}::${state.questionIndex}::${state.level}`;
}

function modelFrenchAnswer() {
  const module = currentModule();
  const ticket = currentTicket();
  const base = ticket ? ticket.answers[state.level] : module.answers[state.level];
  const expansion = answerExpansions[module.id]?.fr;
  return expansion ? `${base} ${expansion}` : base;
}

function modelRussianAnswer() {
  const module = currentModule();
  const base = answerTranslations[module.id]?.[state.level] || "Перевод можно написать здесь своими словами.";
  const expansion = answerExpansions[module.id]?.ru;
  return expansion ? `${base} ${expansion}` : base;
}

function currentAnswerRecord() {
  const key = answerKey();
  return state.customAnswers[key] || {
    fr: modelFrenchAnswer(),
    ru: modelRussianAnswer()
  };
}

function frenchDraftFromRussian(text) {
  const module = currentModule();
  const ticket = currentTicket();
  const clean = text.trim();
  if (!clean) return modelFrenchAnswer();

  const lower = clean.toLocaleLowerCase("ru");
  const starts = {
    "ticket-1": "À mon avis, les nouvelles technologies sont utiles.",
    "ticket-2": "À mon avis, la santé est très importante.",
    "ticket-3": "Bonjour, je ne me sens pas très bien.",
    "ticket-4": "Bonjour docteur, je viens parce que j'ai un problème de santé.",
    "ticket-5": "En cas d'urgence, il faut rester calme.",
    "ticket-6": "J'ai vu un accident dans la rue.",
    "ticket-7": "J'aime aller au restaurant avec mes amis.",
    "ticket-8": "Je m'informe surtout sur Internet.",
    "ticket-9": "Je lis parfois la presse en ligne et je regarde la télévision.",
    "ticket-10": "J'utilise les médias et les réseaux sociaux.",
    "ticket-11": "J'écoute parfois des podcasts.",
    "ticket-12": "Le sommeil est très important pour la santé."
  };
  const phrases = [starts[module.id] || "À mon avis, c'est important."];

  if (lower.includes("нрав")) phrases.push("J'aime ce sujet parce qu'il est utile pour moi.");
  if (lower.includes("не нрав") || lower.includes("минус")) phrases.push("Mais il y a aussi des inconvénients.");
  if (lower.includes("важ")) phrases.push("Je pense que c'est important dans la vie quotidienne.");
  if (lower.includes("друг")) phrases.push("Je peux en parler avec mes amis.");
  if (lower.includes("интернет") || lower.includes("соц")) phrases.push("J'utilise Internet et les réseaux sociaux.");
  if (lower.includes("здоров") || lower.includes("бол")) phrases.push("Quand il y a un problème, il faut consulter un médecin.");
  if (lower.includes("сон") || lower.includes("спать")) phrases.push("Pour mieux dormir, il faut se reposer et éviter les écrans.");
  if (lower.includes("ресторан") || lower.includes("еда")) phrases.push("Je préfère les plats simples avec des produits frais.");
  if (lower.includes("технолог")) phrases.push("Les technologies aident à communiquer et à chercher des informations.");

  const required = ticket?.required?.slice(0, 4).join(", ");
  if (required) {
    phrases.push(`Je peux utiliser ces mots: ${required}.`);
  }
  phrases.push("Voilà mon point de vue.");
  return uniqueWords(phrases).join(" ");
}

function setTranslateStatus(message, isError = false) {
  translateStatus.textContent = message;
  translateStatus.classList.toggle("is-error", isError);
}

async function translateText(text, sourceLang, targetLang) {
  const clean = text.trim();
  if (!clean) {
    throw new Error("Сначала напиши текст для перевода.");
  }

  const params = new URLSearchParams({
    client: "gtx",
    sl: sourceLang,
    tl: targetLang,
    dt: "t",
    q: clean
  });
  const response = await fetch(`https://translate.googleapis.com/translate_a/single?${params.toString()}`);
  if (!response.ok) {
    throw new Error("Переводчик сейчас не отвечает.");
  }

  const data = await response.json();
  const translated = data?.[0]?.map((part) => part?.[0] || "").join("").trim();
  if (!translated) {
    throw new Error("Переводчик не вернул текст.");
  }
  return translated;
}

async function translateAnswer(direction) {
  const isRuToFr = direction === "ru-fr";
  const source = isRuToFr ? answerTranslation.value : modelAnswer.value;
  const target = isRuToFr ? modelAnswer : answerTranslation;
  const sourceLang = isRuToFr ? "ru" : "fr";
  const targetLang = isRuToFr ? "fr" : "ru";
  const button = isRuToFr ? translateToFrenchBtn : translateToRussianBtn;

  button.disabled = true;
  setTranslateStatus("Перевожу...");
  try {
    target.value = await translateText(source, sourceLang, targetLang);
    saveCurrentAnswer();
    setTranslateStatus("Перевод готов.");
  } catch (error) {
    setTranslateStatus(`${error.message} Текст не изменён.`, true);
  } finally {
    button.disabled = false;
  }
}

function openGoogleTranslate() {
  const hasRussianFocus = document.activeElement === answerTranslation;
  const sourceText = hasRussianFocus ? answerTranslation.value : modelAnswer.value;
  const sourceLang = hasRussianFocus ? "ru" : "fr";
  const targetLang = hasRussianFocus ? "fr" : "ru";
  const url = new URL("https://translate.google.com/");
  url.searchParams.set("sl", sourceLang);
  url.searchParams.set("tl", targetLang);
  url.searchParams.set("text", sourceText.trim());
  url.searchParams.set("op", "translate");
  window.open(url.toString(), "_blank", "noopener,noreferrer");
}

function renderModules() {
  moduleList.innerHTML = activeModules.map((module) => `
    <button class="module-button ${String(module.id) === String(state.moduleId) ? "active" : ""}" data-module="${module.id}">
      <span class="module-number">${module.number || module.id}</span>
      <span>
        <span class="module-name">${module.title}</span>
        <span class="module-topic">${module.topic}</span>
      </span>
    </button>
  `).join("");
  renderCompleteness();
}

function renderCompleteness() {
  if (!coverageList) return;
  coverageList.innerHTML = activeModules.map((module) => {
    const words = allVocab(module);
    const translated = words.filter((word) => translations[word]).length;
    const translationPercent = words.length ? Math.round((translated / words.length) * 100) : 0;
    const ticketCount = module.tickets?.length || 0;
    return `
      <div class="coverage-item ${String(module.id) === String(state.moduleId) ? "active" : ""}">
        <span>Билет ${module.number || module.id}</span>
        <strong>${translationPercent}% · ${words.length} слов</strong>
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
  moduleMeta.textContent = `Билет ${module.number || module.id} · ${module.page}`;
  ticketQuestion.textContent = question;
  ticketGoal.textContent = ticket ? ticket.goal : `Используй минимум 5 слов из темы: ${module.topic}.`;
  const answerRecord = currentAnswerRecord();
  modelAnswer.value = answerRecord.fr;
  answerTranslation.value = answerRecord.ru;
  modelAnswer.classList.toggle("is-hidden", state.answerHidden);
  answerTranslation.classList.toggle("is-hidden", state.answerHidden);
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

function speakCurrentCard() {
  if (!("speechSynthesis" in window)) return;
  const words = cardDeck().words;
  const word = words[state.cardIndex];
  if (!word) return;
  const cleanWord = word.replace(/\s*\([^)]*\)/g, "");
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(cleanWord);
  utterance.lang = "fr-FR";
  utterance.rate = 0.85;
  window.speechSynthesis.speak(utterance);
}

function saveCurrentAnswer() {
  state.customAnswers[answerKey()] = {
    fr: modelAnswer.value.trim(),
    ru: answerTranslation.value.trim()
  };
  saveState();
}

moduleList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-module]");
  if (!button) return;
  state.moduleId = button.dataset.module;
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

scopeTabs.forEach((button) => {
  button.addEventListener("click", () => {
    state.cardScope = button.dataset.scope;
    state.cardIndex = 0;
    state.cardFlipped = false;
    saveState();
    renderFlashcard();
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
  state.moduleId = activeModules[0].id;
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
saveAnswerBtn.addEventListener("click", saveCurrentAnswer);
modelAnswer.addEventListener("input", saveCurrentAnswer);
answerTranslation.addEventListener("input", saveCurrentAnswer);
resetAnswerBtn.addEventListener("click", () => {
  delete state.customAnswers[answerKey()];
  saveState();
  setTranslateStatus("");
  renderPractice();
});
translateToRussianBtn.addEventListener("click", () => translateAnswer("fr-ru"));
translateToFrenchBtn.addEventListener("click", () => translateAnswer("ru-fr"));
openGoogleTranslateBtn.addEventListener("click", openGoogleTranslate);
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
speakCardBtn.addEventListener("click", speakCurrentCard);
knownCardBtn.addEventListener("click", () => updateCardStat(true));
wrongCardBtn.addEventListener("click", () => updateCardStat(false));
weakWords.addEventListener("click", (event) => {
  const button = event.target.closest("[data-word]");
  if (!button) return;
  const words = cardDeck().words;
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
