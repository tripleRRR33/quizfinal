<script>
        let questions = [
            {
                question: "Quelle est la capitale de la France ?",
                answers: [
                    { text: "Londres", correct: false, explanation: "Londres est la capitale du Royaume-Uni." },
                    { text: "Paris", correct: true, explanation: "Correct ! Paris est bien la capitale de la France." },
                    { text: "Berlin", correct: false, explanation: "Berlin est la capitale de l'Allemagne." },
                    { text: "Madrid", correct: false, explanation: "Madrid est la capitale de l'Espagne." }
                ]
            },
            {
                question: "Quel est le plus grand océan du monde ?",
                answers: [
                    { text: "Atlantique", correct: false, explanation: "L'océan Atlantique est le deuxième plus grand océan." },
                    { text: "Pacifique", correct: true, explanation: "Correct ! L'océan Pacifique est le plus grand océan du monde." },
                    { text: "Indien", correct: false, explanation: "L'océan Indien est le troisième plus grand océan." },
                    { text: "Arctique", correct: false, explanation: "L'océan Arctique est le plus petit océan." }
                ]
            },
            {
                question: "Quel est le plus haut sommet du monde ?",
                answers: [
                    { text: "Mont Blanc", correct: false, explanation: "Le Mont Blanc est le plus haut sommet des Alpes." },
                    { text: "Everest", correct: true, explanation: "Correct ! L'Everest est le plus haut sommet du monde." },
                    { text: "K2", correct: false, explanation: "Le K2 est le deuxième plus haut sommet du monde." },
                    { text: "Kilimandjaro", correct: false, explanation: "Le Kilimandjaro est le plus haut sommet d'Afrique." }
                ]
            },
            {
                question: "Quelle est la plus longue rivière du monde ?",
                answers: [
                    { text: "Amazone", correct: true, explanation: "Correct ! L'Amazone est la plus longue rivière du monde." },
                    { text: "Nil", correct: false, explanation: "Le Nil est la deuxième plus longue rivière du monde." },
                    { text: "Yangtsé", correct: false, explanation: "Le Yangtsé est la plus longue rivière d'Asie." },
                    { text: "Mississippi", correct: false, explanation: "Le Mississippi est la plus longue rivière d'Amérique du Nord." }
                ]
            },
            {
                question: "Quel est le plus grand désert du monde ?",
                answers: [
                    { text: "Sahara", correct: false, explanation: "Le Sahara est le plus grand désert chaud du monde." },
                    { text: "Antarctique", correct: true, explanation: "Correct ! L'Antarctique est le plus grand désert du monde." },
                    { text: "Gobi", correct: false, explanation: "Le désert de Gobi est un grand désert en Asie." },
                    { text: "Kalahari", correct: false, explanation: "Le désert du Kalahari est situé en Afrique." }
                ]
            },
            {
                question: "Quelle est la langue la plus parlée au monde ?",
                answers: [
                    { text: "Anglais", correct: false, explanation: "L'anglais est la langue la plus parlée comme langue seconde." },
                    { text: "Mandarin", correct: true, explanation: "Correct ! Le mandarin est la langue la plus parlée au monde." },
                    { text: "Espagnol", correct: false, explanation: "L'espagnol est largement parlé en Amérique latine." },
                    { text: "Hindi", correct: false, explanation: "Le hindi est largement parlé en Inde." }
                ]
            },
            {
                question: "Quel est le pays le plus peuplé du monde ?",
                answers: [
                    { text: "Inde", correct: false, explanation: "L'Inde est le deuxième pays le plus peuplé du monde." },
                    { text: "Chine", correct: true, explanation: "Correct ! La Chine est le pays le plus peuplé du monde." },
                    { text: "États-Unis", correct: false, explanation: "Les États-Unis sont le troisième pays le plus peuplé." },
                    { text: "Indonésie", correct: false, explanation: "L'Indonésie est le quatrième pays le plus peuplé." }
                ]
            },
            {
                question: "Quel est le plus grand pays du monde par superficie ?",
                answers: [
                    { text: "Canada", correct: false, explanation: "Le Canada est le deuxième plus grand pays par superficie." },
                    { text: "Russie", correct: true, explanation: "Correct ! La Russie est le plus grand pays du monde par superficie." },
                    { text: "Chine", correct: false, explanation: "La Chine est le troisième plus grand pays." },
                    { text: "États-Unis", correct: false, explanation: "Les États-Unis sont le quatrième plus grand pays." }
                ]
            },
            {
                question: "Quel est le plus grand lac d'eau douce du monde par superficie ?",
                answers: [
                    { text: "Lac Supérieur", correct: true, explanation: "Correct ! Le lac Supérieur est le plus grand lac d'eau douce par superficie." },
                    { text: "Lac Victoria", correct: false, explanation: "Le lac Victoria est le plus grand lac d'Afrique." },
                    { text: "Lac Huron", correct: false, explanation: "Le lac Huron est l'un des Grands Lacs d'Amérique du Nord." },
                    { text: "Lac Baïkal", correct: false, explanation: "Le lac Baïkal est le plus grand lac d'eau douce par volume." }
                ]
            },
            {
                question: "Quel est le plus grand satellite naturel de la Terre ?",
                answers: [
                    { text: "Lune", correct: true, explanation: "Correct ! La Lune est le plus grand satellite naturel de la Terre." },
                    { text: "Phobos", correct: false, explanation: "Phobos est un satellite de Mars." },
                    { text: "Europe", correct: false, explanation: "Europe est un satellite de Jupiter." },
                    { text: "Titan", correct: false, explanation: "Titan est un satellite de Saturne." }
                ]
            },
            {
                question: "Quel est le plus rapide des animaux terrestres ?",
                answers: [
                    { text: "Guepard", correct: true, explanation: "Correct ! Le guépard est le plus rapide des animaux terrestres." },
                    { text: "Lion", correct: false, explanation: "Le lion est rapide mais moins rapide que le guépard." },
                    { text: "Antilope", correct: false, explanation: "Certaines antilopes sont rapides mais pas autant qu'un guépard." },
                    { text: "Cheval", correct: false, explanation: "Les chevaux sont rapides mais pas aussi rapides que les guépards." }
                ]
            },
            {
                question: "Quel est le plus grand mammifère marin ?",
                answers: [
                    { text: "Requin", correct: false, explanation: "Les requins sont grands mais pas des mammifères." },
                    { text: "Baleine bleue", correct: true, explanation: "Correct ! La baleine bleue est le plus grand mammifère marin." },
                    { text: "Dauphin", correct: false, explanation: "Les dauphins sont des mammifères mais plus petits que les baleines." },
                    { text: "Orque", correct: false, explanation: "Les orques sont grandes mais plus petites que les baleines bleues." }
                ]
            },
            {
                question: "Quel est le plus petit continent par superficie ?",
                answers: [
                    { text: "Europe", correct: false, explanation: "L'Europe est le deuxième plus petit continent." },
                    { text: "Australie", correct: true, explanation: "Correct ! L'Australie est le plus petit continent par superficie." },
                    { text: "Antarctique", correct: false, explanation: "L'Antarctique est plus grand que l'Australie." },
                    { text: "Amérique du Sud", correct: false, explanation: "L'Amérique du Sud est plus grande que l'Australie." }
                ]
            },
            {
                question: "Quel est le plus grand pays d'Afrique par superficie ?",
                answers: [
                    { text: "Algérie", correct: true, explanation: "Correct ! L'Algérie est le plus grand pays d'Afrique par superficie." },
                    { text: "Soudan", correct: false, explanation: "Le Soudan était le plus grand avant la séparation du Soudan du Sud." },
                    { text: "Congo", correct: false, explanation: "La République Démocratique du Congo est le deuxième plus grand." },
                    { text: "Libye", correct: false, explanation: "La Libye est grande mais plus petite que l'Algérie." }
                ]
            },
            {
                question: "Quel est le plus long fleuve d'Amérique du Sud ?",
                answers: [
                    { text: "Amazon", correct: true, explanation: "Correct ! L'Amazone est le plus long fleuve d'Amérique du Sud." },
                    { text: "Paraná", correct: false, explanation: "Le Paraná est long mais plus court que l'Amazone." },
                    { text: "Orénoque", correct: false, explanation: "L'Orénoque est un long fleuve mais plus court que l'Amazone." },
                    { text: "Uruguay", correct: false, explanation: "Le fleuve Uruguay est plus court que l'Amazone." }
                ]
            },
            {
                question: "Quel est le plus grand océan du monde par volume ?",
                answers: [
                    { text: "Atlantique", correct: false, explanation: "L'océan Atlantique est grand mais moins volumineux que le Pacifique." },
                    { text: "Pacifique", correct: true, explanation: "Correct ! L'océan Pacifique est le plus grand océan par volume." },
                    { text: "Indien", correct: false, explanation: "L'océan Indien est moins volumineux que le Pacifique." },
                    { text: "Arctique", correct: false, explanation: "L'océan Arctique est le plus petit océan." }
                ]
            },
            {
                question: "Quel est le plus grand pays d'Amérique du Sud par superficie ?",
                answers: [
                    { text: "Argentine", correct: false, explanation: "L'Argentine est grande mais plus petite que le Brésil." },
                    { text: "Brésil", correct: true, explanation: "Correct ! Le Brésil est le plus grand pays d'Amérique du Sud par superficie." },
                    { text: "Colombie", correct: false, explanation: "La Colombie est grande mais plus petite que le Brésil." },
                    { text: "Pérou", correct: false, explanation: "Le Pérou est grand mais plus petit que le Brésil." }
                ]
            },
            {
                question: "Quel est le plus grand producteur de café au monde ?",
                answers: [
                    { text: "Colombie", correct: false, explanation: "La Colombie est un grand producteur mais pas le plus grand." },
                    { text: "Brésil", correct: true, explanation: "Correct ! Le Brésil est le plus grand producteur de café au monde." },
                    { text: "Vietnam", correct: false, explanation: "Le Vietnam est un grand producteur mais pas le plus grand." },
                    { text: "Éthiopie", correct: false, explanation: "L'Éthiopie est un grand producteur mais pas le plus grand." }
                ]
            },
            {
                question: "Quel est le plus grand désert chaud du monde ?",
                answers: [
                    { text: "Sahara", correct: true, explanation: "Correct ! Le Sahara est le plus grand désert chaud du monde." },
                    { text: "Gobi", correct: false, explanation: "Le Gobi est un grand désert mais pas le plus grand désert chaud." },
                    { text: "Kalahari", correct: false, explanation: "Le Kalahari est un grand désert mais plus petit que le Sahara." },
                    { text: "Mojave", correct: false, explanation: "Le désert de Mojave est plus petit que le Sahara." }
                ]
            }[
    {
        question: "Quelle est la capitale de l'Italie ?",
        answers: [
            { text: "Rome", correct: true, explanation: "Correct ! Rome est la capitale de l'Italie." },
            { text: "Milan", correct: false, explanation: "Milan est une grande ville mais ce n'est pas la capitale." },
            { text: "Venise", correct: false, explanation: "Venise est célèbre pour ses canaux mais ce n'est pas la capitale." },
            { text: "Florence", correct: false, explanation: "Florence est connue pour son art mais ce n'est pas la capitale." }
        ]
    },
    {
        question: "Quel est le plus long fleuve du monde ?",
        answers: [
            { text: "Nil", correct: true, explanation: "Correct ! Le Nil est le plus long fleuve du monde." },
            { text: "Amazone", correct: false, explanation: "L'Amazone est le deuxième plus long fleuve du monde." },
            { text: "Yangtsé", correct: false, explanation: "Le Yangtsé est le plus long fleuve d'Asie." },
            { text: "Mississippi", correct: false, explanation: "Le Mississippi est le plus long fleuve d'Amérique du Nord." }
        ]
    },
    {
        question: "Quel est le plus haut sommet d'Europe ?",
        answers: [
            { text: "Mont Blanc", correct: true, explanation: "Correct ! Le Mont Blanc est le plus haut sommet d'Europe." },
            { text: "Mont Elbrouz", correct: false, explanation: "Le Mont Elbrouz est le plus haut sommet de Russie." },
            { text: "Mont Rose", correct: false, explanation: "Le Mont Rose est le deuxième plus haut sommet des Alpes." },
            { text: "Mont Cervin", correct: false, explanation: "Le Mont Cervin est célèbre mais moins haut que le Mont Blanc." }
        ]
    },
    {
        question: "Quel est le plus grand pays d'Asie par superficie ?",
        answers: [
            { text: "Chine", correct: false, explanation: "La Chine est grande mais la Russie est plus grande." },
            { text: "Inde", correct: false, explanation: "L'Inde est grande mais la Russie est plus grande." },
            { text: "Russie", correct: true, explanation: "Correct ! La Russie est le plus grand pays d'Asie et du monde." },
            { text: "Kazakhstan", correct: false, explanation: "Le Kazakhstan est grand mais moins que la Russie." }
        ]
    },
    {
        question: "Quel est le plus grand océan du monde par superficie ?",
        answers: [
            { text: "Atlantique", correct: false, explanation: "L'océan Atlantique est le deuxième plus grand océan." },
            { text: "Pacifique", correct: true, explanation: "Correct ! L'océan Pacifique est le plus grand océan par superficie." },
            { text: "Indien", correct: false, explanation: "L'océan Indien est le troisième plus grand océan." },
            { text: "Arctique", correct: false, explanation: "L'océan Arctique est le plus petit océan." }
        ]
    },
    {
        question: "Quel est le plus grand désert du monde par superficie ?",
        answers: [
            { text: "Sahara", correct: false, explanation: "Le Sahara est le plus grand désert chaud mais pas le plus grand désert." },
            { text: "Antarctique", correct: true, explanation: "Correct ! L'Antarctique est le plus grand désert du monde par superficie." },
            { text: "Gobi", correct: false, explanation: "Le désert de Gobi est un grand désert en Asie." },
            { text: "Kalahari", correct: false, explanation: "Le désert du Kalahari est situé en Afrique." }
        ]
    },
    {
        question: "Quelle est la langue la plus parlée en Amérique du Sud ?",
        answers: [
            { text: "Espagnol", correct: true, explanation: "Correct ! L'espagnol est la langue la plus parlée en Amérique du Sud." },
            { text: "Portugais", correct: false, explanation: "Le portugais est largement parlé au Brésil mais l'espagnol est plus répandu." },
            { text: "Français", correct: false, explanation: "Le français est parlé dans certains pays mais moins que l'espagnol." },
            { text: "Anglais", correct: false, explanation: "L'anglais est parlé dans certaines régions mais moins que l'espagnol." }
        ]
    },
    {
        question: "Quel est le plus grand pays d'Amérique du Nord par superficie ?",
        answers: [
            { text: "Canada", correct: true, explanation: "Correct ! Le Canada est le plus grand pays d'Amérique du Nord par superficie." },
            { text: "États-Unis", correct: false, explanation: "Les États-Unis sont grands mais moins que le Canada." },
            { text: "Mexique", correct: false, explanation: "Le Mexique est grand mais moins que le Canada." },
            { text: "Groenland", correct: false, explanation: "Le Groenland est une région autonome du Danemark." }
        ]
    },
    {
        question: "Quel est le plus grand fleuve d'Asie ?",
        answers: [
            { text: "Yangtsé", correct: true, explanation: "Correct ! Le Yangtsé est le plus grand fleuve d'Asie." },
            { text: "Gange", correct: false, explanation: "Le Gange est important mais moins long que le Yangtsé." },
            { text: "Mékong", correct: false, explanation: "Le Mékong est long mais moins que le Yangtsé." },
            { text: "Amour", correct: false, explanation: "Le fleuve Amour est long mais moins que le Yangtsé." }
        ]
    },
    {
        question: "Quel est le plus grand lac d'Afrique par superficie ?",
        answers: [
            { text: "Lac Victoria", correct: true, explanation: "Correct ! Le lac Victoria est le plus grand lac d'Afrique par superficie." },
            { text: "Lac Tanganyika", correct: false, explanation: "Le lac Tanganyika est grand mais moins que le lac Victoria." },
            { text: "Lac Malawi", correct: false, explanation: "Le lac Malawi est grand mais moins que le lac Victoria." },
            { text: "Lac Tchad", correct: false, explanation: "Le lac Tchad est grand mais moins que le lac Victoria." }
        ]
    },
    {
        question: "Quel est le plus grand désert d'Asie ?",
        answers: [
            { text: "Gobi", correct: true, explanation: "Correct ! Le désert de Gobi est le plus grand désert d'Asie." },
            { text: "Karakoum", correct: false, explanation: "Le désert de Karakoum est grand mais moins que le Gobi." },
            { text: "Thar", correct: false, explanation: "Le désert de Thar est important mais moins que le Gobi." },
            { text: "Taklamakan", correct: false, explanation: "Le désert de Taklamakan est grand mais moins que le Gobi." }
        ]
    },
    {
        question: "Quelle est la plus haute montagne d'Afrique ?",
        answers: [
            { text: "Mont Kilimandjaro", correct: true, explanation: "Correct ! Le Kilimandjaro est la plus haute montagne d'Afrique." },
            { text: "Mont Kenya", correct: false, explanation: "Le Mont Kenya est haut mais moins que le Kilimandjaro." },
            { text: "Ruwenzori", correct: false, explanation: "Les montagnes Ruwenzori sont hautes mais moins que le Kilimandjaro." },
            { text: "Simien", correct: false, explanation: "Les montagnes Simien sont hautes mais moins que le Kilimandjaro." }
        ]
    },
    {
        question: "Quel est le plus grand producteur de vin au monde ?",
        answers: [
            { text: "France", correct: true, explanation: "Correct ! La France est le plus grand producteur de vin au monde." },
            { text: "Italie", correct: false, explanation: "L'Italie est un grand producteur mais moins que la France." },
            { text: "Espagne", correct: false, explanation: "L'Espagne est un grand producteur mais moins que la France." },
            { text: "États-Unis", correct: false, explanation: "Les États-Unis sont un grand producteur mais moins que la France." }
        ]
    },
    {
        question: "Quel est le plus grand pays d'Europe par superficie ?",
        answers: [
            { text: "France", correct: false, explanation: "La France est grande mais la Russie est plus grande." },
            { text: "Allemagne", correct: false, explanation: "L'Allemagne est grande mais la Russie est plus grande." },
            { text: "Russie", correct: true, explanation: "Correct ! La Russie est le plus grand pays d'Europe par superficie." },
            { text: "Espagne", correct: false, explanation: "L'Espagne est grande mais la Russie est plus grande." }
        ]
    },
    {
        question: "Quelle est la plus grande forêt tropicale du monde ?",
        answers: [
            { text: "Forêt amazonienne", correct: true, explanation: "Correct ! La forêt amazonienne est la plus grande forêt tropicale du monde." },
            { text: "Forêt du Congo", correct: false, explanation: "La forêt du Congo est grande mais moins que l'Amazonie." },
            { text: "Forêt de Bornéo", correct: false, explanation: "La forêt de Bornéo est grande mais moins que l'Amazonie." },
            { text: "Forêt de Sumatra", correct: false, explanation: "La forêt de Sumatra est grande mais moins que l'Amazonie." }
        ]
    },
    {
        question: "Quel est le plus grand lac de Russie par superficie ?",
        answers: [
            { text: "Lac Baïkal", correct: true, explanation: "Correct ! Le lac Baïkal est le plus grand lac de Russie par superficie." },
            { text: "Lac Ladoga", correct: false, explanation: "Le lac Ladoga est grand mais moins que le lac Baïkal." },
            { text: "Lac Onega", correct: false, explanation: "Le lac Onega est grand mais moins que le lac Baïkal." },
            { text: "Lac Tchany", correct: false, explanation: "Le lac Tchany est grand mais moins que le lac Baïkal." }
        ]
    },
    {
        question: "Quel est le plus grand pays d'Océanie par superficie ?",
        answers: [
            { text: "Australie", correct: true, explanation: "Correct ! L'Australie est le plus grand pays d'Océanie par superficie." },
            { text: "Papouasie-Nouvelle-Guinée", correct: false, explanation: "La Papouasie-Nouvelle-Guinée est grande mais moins que l'Australie." },
            { text: "Nouvelle-Zélande", correct: false, explanation: "La Nouvelle-Zélande est grande mais moins que l'Australie." },
            { text: "Fidji", correct: false, explanation: "Les Fidji sont grandes mais moins que l'Australie." }
        ]
    },
    {
        question: "Quel est le plus grand lac d'Amérique du Sud par superficie ?",
        answers: [
            { text: "Lac Titicaca", correct: true, explanation: "Correct ! Le lac Titicaca est le plus grand lac d'Amérique du Sud par superficie." },
            { text: "Lac Maracaibo", correct: false, explanation: "Le lac Maracaibo est grand mais moins que le lac Titicaca." },
            { text: "Lac Poopó", correct: false, explanation: "Le lac Poopó est grand mais moins que le lac Titicaca." },
            { text: "Lac Buenos Aires", correct: false, explanation: "Le lac Buenos Aires est grand mais moins que le lac Titicaca." }
        ]
    },
    {
        question: "Quelle est la plus haute montagne d'Amérique du Sud ?",
        answers: [
            { text: "Aconcagua", correct: true, explanation: "Correct ! L'Aconcagua est la plus haute montagne d'Amérique du Sud." },
            { text: "Ojos del Salado", correct: false, explanation: "Le Ojos del Salado est haut mais moins que l'Aconcagua." },
            { text: "Huascarán", correct: false, explanation: "Le Huascarán est haut mais moins que l'Aconcagua." },
            { text: "Illimani", correct: false, explanation: "L'Illimani est haut mais moins que l'Aconcagua." }
        ]
    },
    {
        question: "Quel est le plus grand golfe du monde par superficie ?",
        answers: [
            { text: "Golfe du Mexique", correct: true, explanation: "Correct ! Le golfe du Mexique est le plus grand golfe du monde par superficie." },
            { text: "Golfe Persique", correct: false, explanation: "Le golfe Persique est grand mais moins que le golfe du Mexique." },
            { text: "Golfe du Bengale", correct: false, explanation: "Le golfe du Bengale est grand mais moins que le golfe du Mexique." },
            { text: "Golfe de Guinée", correct: false, explanation: "Le golfe de Guinée est grand mais moins que le golfe du Mexique." }
        ]
    },
    {
        question: "Quel est le plus grand pays d'Afrique par population ?",
        answers: [
            { text: "Nigeria", correct: true, explanation: "Correct ! Le Nigeria est le plus grand pays d'Afrique par population." },
            { text: "Éthiopie", correct: false, explanation: "L'Éthiopie est grande mais moins peuplée que le Nigeria." },
            { text: "Égypte", correct: false, explanation: "L'Égypte est grande mais moins peuplée que le Nigeria." },
            { text: "Congo", correct: false, explanation: "Le Congo est grand mais moins peuplé que le Nigeria." }
        ]
    },
    {
        question: "Quel est le plus grand pays d'Asie du Sud-Est par superficie ?",
        answers: [
            { text: "Indonésie", correct: true, explanation: "Correct ! L'Indonésie est le plus grand pays d'Asie du Sud-Est par superficie." },
            { text: "Thaïlande", correct: false, explanation: "La Thaïlande est grande mais moins que l'Indonésie." },
            { text: "Malaisie", correct: false, explanation: "La Malaisie est grande mais moins que l'Indonésie." },
            { text: "Philippines", correct: false, explanation: "Les Philippines sont grandes mais moins que l'Indonésie." }
        ]
    },
    {
        question: "Quel est le plus grand pays d'Asie du Sud par population ?",
        answers: [
            { text: "Pakistan", correct: false, explanation: "Le Pakistan est grand mais moins peuplé que l'Inde." },
            { text: "Bangladesh", correct: false, explanation: "Le Bangladesh est grand mais moins peuplé que l'Inde." },
            { text: "Inde", correct: true, explanation: "Correct ! L'Inde est le plus grand pays d'Asie du Sud par population." },
            { text: "Sri Lanka", correct: false, explanation: "Le Sri Lanka est grand mais moins peuplé que l'Inde." }
        ]
    },
    {
        question: "Quel est le plus grand fleuve d'Australie ?",
        answers: [
            { text: "Murray", correct: true, explanation: "Correct ! Le Murray est le plus grand fleuve d'Australie." },
            { text: "Darling", correct: false, explanation: "Le Darling est long mais moins que le Murray." },
            { text: "Lachlan", correct: false, explanation: "Le Lachlan est long mais moins que le Murray." },
            { text: "Cooper", correct: false, explanation: "Le Cooper est long mais moins que le Murray." }
        ]
    },
    {
        question: "Quel est le plus grand pays d'Amérique Centrale par superficie ?",
        answers: [
            { text: "Nicaragua", correct: true, explanation: "Correct ! Le Nicaragua est le plus grand pays d'Amérique Centrale par superficie." },
            { text: "Honduras", correct: false, explanation: "Le Honduras est grand mais moins que le Nicaragua." },
            { text: "Guatemala", correct: false, explanation: "Le Guatemala est grand mais moins que le Nicaragua." },
            { text: "Panama", correct: false, explanation: "Le Panama est grand mais moins que le Nicaragua." }
        ]
    },
    {
        question: "Quel est le plus grand pays d'Afrique de l'Ouest par superficie ?",
        answers: [
            { text: "Mali", correct: true, explanation: "Correct ! Le Mali est le plus grand pays d'Afrique de l'Ouest par superficie." },
            { text: "Niger", correct: false, explanation: "Le Niger est grand mais moins que le Mali." },
            { text: "Nigeria", correct: false, explanation: "Le Nigeria est grand mais moins que le Mali." },
            { text: "Ghana", correct: false, explanation: "Le Ghana est grand mais moins que le Mali." }
        ]
    },
    {
       {
    question: "Quelle est la capitale de la Belgique ?",
    answers: [
        { text: "Bruxelles", correct: true, explanation: "Correct ! Bruxelles est la capitale de la Belgique." },
        { text: "Anvers", correct: false, explanation: "Anvers est une grande ville mais ce n'est pas la capitale." },
        { text: "Gand", correct: false, explanation: "Gand est une grande ville mais ce n'est pas la capitale." },
        { text: "Liège", correct: false, explanation: "Liège est une grande ville mais ce n'est pas la capitale." }
    ]
},
{
    question: "Quel est le plus grand fleuve d'Afrique ?",
    answers: [
        { text: "Nil", correct: true, explanation: "Correct ! Le Nil est le plus grand fleuve d'Afrique." },
        { text: "Congo", correct: false, explanation: "Le Congo est grand mais moins long que le Nil." },
        { text: "Niger", correct: false, explanation: "Le Niger est grand mais moins long que le Nil." },
        { text: "Zambèze", correct: false, explanation: "Le Zambèze est grand mais moins long que le Nil." }
    ]
},
{
    question: "Quel est le plus grand pays d'Europe par population ?",
    answers: [
        { text: "Allemagne", correct: true, explanation: "Correct ! L'Allemagne est le plus grand pays d'Europe par population." },
        { text: "France", correct: false, explanation: "La France est grande mais moins peuplée que l'Allemagne." },
        { text: "Royaume-Uni", correct: false, explanation: "Le Royaume-Uni est grand mais moins peuplé que l'Allemagne." },
        { text: "Italie", correct: false, explanation: "L'Italie est grande mais moins peuplée que l'Allemagne." }
    ]
},
{
    question: "Quel est le plus grand désert d'Amérique du Nord ?",
    answers: [
        { text: "Désert de Sonora", correct: true, explanation: "Correct ! Le désert de Sonora est le plus grand désert d'Amérique du Nord." },
        { text: "Désert de Chihuahua", correct: false, explanation: "Le désert de Chihuahua est grand mais moins que le désert de Sonora." },
        { text: "Désert de Mojave", correct: false, explanation: "Le désert de Mojave est grand mais moins que le désert de Sonora." },
        { text: "Désert de la Vallée de la Mort", correct: false, explanation: "Le désert de la Vallée de la Mort est grand mais moins que le désert de Sonora." }
    ]
},
{
    question: "Quel est le plus grand pays d'Amérique du Sud par population ?",
    answers: [
        { text: "Brésil", correct: true, explanation: "Correct ! Le Brésil est le plus grand pays d'Amérique du Sud par population." },
        { text: "Argentine", correct: false, explanation: "L'Argentine est grande mais moins peuplée que le Brésil." },
        { text: "Colombie", correct: false, explanation: "La Colombie est grande mais moins peuplée que le Brésil." },
        { text: "Pérou", correct: false, explanation: "Le Pérou est grand mais moins peuplé que le Brésil." }
    ]
},
{
    question: "Quel est le plus grand pays d'Afrique du Nord par superficie ?",
    answers: [
        { text: "Algérie", correct: true, explanation: "Correct ! L'Algérie est le plus grand pays d'Afrique du Nord par superficie." },
        { text: "Libye", correct: false, explanation: "La Libye est grande mais moins que l'Algérie." },
        { text: "Égypte", correct: false, explanation: "L'Égypte est grande mais moins que l'Algérie." },
        { text: "Maroc", correct: false, explanation: "Le Maroc est grand mais moins que l'Algérie." }
    ]
},
{
    question: "Quel est le plus petit pays du monde par superficie ?",
    answers: [
        { text: "Vatican", correct: true, explanation: "Correct ! Le Vatican est le plus petit pays du monde par superficie." },
        { text: "Monaco", correct: false, explanation: "Monaco est petit mais plus grand que le Vatican." },
        { text: "Nauru", correct: false, explanation: "Nauru est petit mais plus grand que le Vatican." },
        { text: "Tuvalu", correct: false, explanation: "Tuvalu est petit mais plus grand que le Vatican." }
    ]
},
{
    question: "Quel est le plus grand pays du monde par superficie ?",
    answers: [
        { text: "Canada", correct: false, explanation: "Le Canada est le deuxième plus grand pays par superficie." },
        { text: "Russie", correct: true, explanation: "Correct ! La Russie est le plus grand pays du monde par superficie." },
        { text: "Chine", correct: false, explanation: "La Chine est le troisième plus grand pays." },
        { text: "États-Unis", correct: false, explanation: "Les États-Unis sont le quatrième plus grand pays." }
    ]
},
{
    question: "Quel est le plus grand pays d'Afrique par superficie ?",
    answers: [
        { text: "Algérie", correct: true, explanation: "Correct ! L'Algérie est le plus grand pays d'Afrique par superficie." },
        { text: "Soudan", correct: false, explanation: "Le Soudan était le plus grand avant la séparation du Soudan du Sud." },
        { text: "Congo", correct: false, explanation: "La République Démocratique du Congo est le deuxième plus grand." },
        { text: "Libye", correct: false, explanation: "La Libye est grande mais plus petite que l'Algérie." }
    ]
},
{
    question: "Quel est le plus long fleuve d'Amérique du Sud ?",
    answers: [
        { text: "Amazone", correct: true, explanation: "Correct ! L'Amazone est le plus long fleuve d'Amérique du Sud." },
        { text: "Paraná", correct: false, explanation: "Le Paraná est long mais plus court que l'Amazone." },
        { text: "Orénoque", correct: false, explanation: "L'Orénoque est un long fleuve mais plus court que l'Amazone." },
        { text: "Uruguay", correct: false, explanation: "Le fleuve Uruguay est plus court que l'Amazone." }
    ]
},
{
    question: "Quel est le plus grand pays d'Asie par superficie ?",
    answers: [
        { text: "Chine", correct: false, explanation: "La Chine est grande mais la Russie est plus grande." },
        { text: "Inde", correct: false, explanation: "L'Inde est grande mais la Russie est plus grande." },
        { text: "Russie", correct: true, explanation: "Correct ! La Russie est le plus grand pays d'Asie et du monde." },
        { text: "Kazakhstan", correct: false, explanation: "Le Kazakhstan est grand mais moins que la Russie." }
    ]
},
{
    question: "Quel est le plus grand océan du monde par superficie ?",
    answers: [
        { text: "Atlantique", correct: false, explanation: "L'océan Atlantique est le deuxième plus grand océan." },
        { text: "Pacifique", correct: true, explanation: "Correct ! L'océan Pacifique est le plus grand océan par superficie." },
        { text: "Indien", correct: false, explanation: "L'océan Indien est le troisième plus grand océan." },
        { text: "Arctique", correct: false, explanation: "L'océan Arctique est le plus petit océan." }
    ]
},
{
    question: "Quel est le plus grand désert du monde par superficie ?",
    answers: [
        { text: "Sahara", correct: false, explanation: "Le Sahara est le plus grand désert chaud mais pas le plus grand désert." },
        { text: "Antarctique", correct: true, explanation: "Correct ! L'Antarctique est le plus grand désert du monde par superficie." },
        { text: "Gobi", correct: false, explanation: "Le désert de Gobi est un grand désert en Asie." },
        { text: "Kalahari", correct: false, explanation: "Le désert du Kalahari est situé en Afrique." }
    ]
},
{
    question: "Quelle est la langue la plus parlée en Amérique du Sud ?",
    answers: [
        { text: "Espagnol", correct: true, explanation: "Correct ! L'espagnol est la langue la plus parlée en Amérique du Sud." },
        { text: "Portugais", correct: false, explanation: "Le portugais est largement parlé au Brésil mais l'espagnol est plus répandu." },
        { text: "Français", correct: false, explanation: "Le français est parlé dans certains pays mais moins que l'espagnol." },
        { text: "Anglais", correct: false, explanation: "L'anglais est parlé dans certaines régions mais moins que l'espagnol." }
    ]
},
{
    question: "Quel est le plus grand pays d'Amérique du Nord par superficie ?",
    answers: [
        { text: "Canada", correct: true, explanation: "Correct ! Le Canada est le plus grand pays d'Amérique du Nord par superficie." },
        { text: "États-Unis", correct: false, explanation: "Les États-Unis sont grands mais moins que le Canada." },
        { text: "Mexique", correct: false, explanation: "Le Mexique est grand mais moins que le Canada." },
        { text: "Groenland", correct: false, explanation: "Le Groenland est une région autonome du Danemark." }
    ]
},
{
    question: "Quel est le plus grand fleuve d'Asie ?",
    answers: [
        { text: "Yangtsé", correct: true, explanation: "Correct ! Le Yangtsé est le plus grand fleuve d'Asie." },
        { text: "Gange", correct: false, explanation: "Le Gange est important mais moins long que le Yangtsé." },
        { text: "Mékong", correct: false, explanation: "Le Mékong est long mais moins que le Yangtsé." },
        { text: "Amour", correct: false, explanation: "Le fleuve Amour est long mais moins que le Yangtsé." }
    ]
},
{
    question: "Quel est le plus grand lac d'Afrique par superficie ?",
    answers: [
        { text: "Lac Victoria", correct: true, explanation: "Correct ! Le lac Victoria est le plus grand lac d'Afrique par superficie." },
        { text: "Lac Tanganyika", correct: false, explanation: "Le lac Tanganyika est grand mais moins que le lac Victoria." },
        { text: "Lac Malawi", correct: false, explanation: "Le lac Malawi est grand mais moins que le lac Victoria." },
        { text: "Lac Tchad", correct: false, explanation: "Le lac Tchad est grand mais moins que le lac Victoria." }
    ]
},
{
    question: "Quel est le plus grand désert d'Asie ?",
    answers: [
        { text: "Gobi", correct: true, explanation: "Correct ! Le désert de Gobi est le plus grand désert d'Asie." },
        { text: "Karakoum", correct: false, explanation: "Le désert de Karakoum est grand mais moins que le Gobi." },
        { text: "Thar", correct: false, explanation: "Le désert de Thar est important mais moins que le Gobi." },
        { text: "Taklamakan", correct: false, explanation: "Le désert de Taklamakan est grand mais moins que le Gobi." }
    ]
},
{
    question: "Quelle est la plus haute montagne d'Afrique ?",
    answers: [
        { text: "Mont Kilimandjaro", correct: true, explanation: "Correct ! Le Kilimandjaro est la plus haute montagne d'Afrique." },
        { text: "Mont Kenya", correct: false, explanation: "Le Mont Kenya est haut mais moins que le Kilimandjaro." },
        { text: "Ruwenzori", correct: false, explanation: "Les montagnes Ruwenzori sont hautes mais moins que le Kilimandjaro." },
        { text: "Simien", correct: false, explanation: "Les montagnes Simien sont hautes mais moins que le Kilimandjaro." }
    ]
},
{
    question: "Quel est le plus grand producteur de vin au monde ?",
    answers: [
        { text: "France", correct: true, explanation: "Correct ! La France est le plus grand producteur de vin au monde." },
        { text: "Italie", correct: false, explanation: "L'Italie est un grand producteur mais moins que la France." },
        { text: "Espagne", correct: false, explanation: "L'Espagne est un grand producteur mais moins que la France." },
        { text: "États-Unis", correct: false, explanation: "Les États-Unis sont un grand producteur mais moins que la France." }
    ]
},
{
    question: "Quel est le plus grand pays d'Europe par superficie ?",
    answers: [
        { text: "France", correct: false, explanation: "La France est grande mais la Russie est plus grande." },
        { text: "Allemagne", correct: false, explanation: "L'Allemagne est grande mais la Russie est plus grande." },
        { text: "Russie", correct: true, explanation: "Correct ! La Russie est le plus grand pays d'Europe par superficie." },
        { text: "Espagne", correct: false, explanation: "L'Espagne est grande mais la Russie est plus grande." }
    ]
},
{
    question: "Quelle est la plus grande forêt tropicale du monde ?",
    answers: [
        { text: "Forêt amazonienne", correct: true, explanation: "Correct ! La forêt amazonienne est la plus grande forêt tropicale du monde." },
        { text: "Forêt du Congo", correct: false, explanation: "La forêt du Congo est grande mais moins que l'Amazonie." },
        { text: "Forêt de Bornéo", correct: false, explanation: "La forêt de Bornéo est grande mais moins que l'Amazonie." },
        { text: "Forêt de Sumatra", correct: false, explanation: "La forêt de Sumatra est grande mais moins que l'Amazonie." }
    ]
},
{
    question: "Quel est le plus grand lac de Russie par superficie ?",
    answers: [
        { text: "Lac Baïkal", correct: true, explanation: "Correct ! Le lac Baïkal est le plus grand lac de Russie par superficie." },
        { text: "Lac Ladoga", correct: false, explanation: "Le lac Ladoga est grand mais moins que le lac Baïkal." },
        { text: "Lac Onega", correct: false, explanation: "Le lac Onega est grand mais moins que le lac Baïkal." },
        { text: "Lac Tchany", correct: false, explanation: "Le lac Tchany est grand mais moins que le lac Baïkal." }
    ]
},
{
    question: "Quel est le plus grand pays d'Océanie par superficie ?",
    answers: [
        { text: "Australie", correct: true, explanation: "Correct ! L'Australie est le plus grand pays d'Océanie par superficie." },
        { text: "Papouasie-Nouvelle-Guinée", correct: false, explanation: "La Papouasie-Nouvelle-Guinée est grande mais moins que l'Australie." },
        { text: "Nouvelle-Zélande", correct: false, explanation: "La Nouvelle-Zélande est grande mais moins que l'Australie." },
        { text: "Fidji", correct: false, explanation: "Les Fidji sont grandes mais moins que l'Australie." }
    ]
},
{
    question: "Quel est le plus grand lac d'Amérique du Sud par superficie ?",
    answers: [
        { text: "Lac Titicaca", correct: true, explanation: "Correct ! Le lac Titicaca est le plus grand lac d'Amérique du Sud par superficie." },
        { text: "Lac Maracaibo", correct: false, explanation: "Le lac Maracaibo est grand mais moins que le lac Titicaca." },
        { text: "Lac Poopó", correct: false, explanation: "Le lac Poopó est grand mais moins que le lac Titicaca." },
        { text: "Lac Buenos Aires", correct: false, explanation: "Le lac Buenos Aires est grand mais moins que le lac Titicaca." }
    ]
},
{
    question: "Quelle est la plus haute montagne d'Amérique du Sud ?",
    answers: [
        { text: "Aconcagua", correct: true, explanation: "Correct ! L'Aconcagua est la plus haute montagne d'Amérique du Sud." },
        { text: "Ojos del Salado", correct: false, explanation: "Le Ojos del Salado est haut mais moins que l'Aconcagua." },
        { text: "Huascarán", correct: false, explanation: "Le Huascarán est haut mais moins que l'Aconcagua." },
        { text: "Illimani", correct: false, explanation: "L'Illimani est haut mais moins que l'Aconcagua." }
    ]
},
{
    question: "Quel est le plus grand golfe du monde par superficie ?",
    answers: [
        { text: "Golfe du Mexique", correct: true, explanation: "Correct ! Le golfe du Mexique est le plus grand golfe du monde par superficie." },
        { text: "Golfe Persique", correct: false, explanation: "Le golfe Persique est grand mais moins que le golfe du Mexique." },
        { text: "Golfe du Bengale", correct: false, explanation: "Le golfe du Bengale est grand mais moins que le golfe du Mexique." },
        { text: "Golfe de Guinée", correct: false
        ];

        let currentQuestionIndex = 0;
        let timer = 15;
        let answeredQuestions = 0;
        let correctAnswers = 0;
        let totalTime = 0;
        const timerElement = document.getElementById('timer');
        const questionElement = document.getElementById('question');
        const answersElement = document.getElementById('answers');
        const resultElement = document.getElementById('result');
        const explanationElement = document.getElementById('explanation');
        const statisticsElement = document.getElementById('statistics');

        function startTimer() {
            const interval = setInterval(() => {
                timer--;
                totalTime++;
                timerElement.textContent = `Temps restant : ${timer}s`;

                if (timer <= 0) {
                    clearInterval(interval);
                    document.querySelectorAll('.answers button').forEach(button => button.disabled = true);
                    resultElement.style.display = 'block';
                    resultElement.textContent = 'Temps écoulé !';
                    resultElement.style.color = 'red';
                    explanationElement.textContent = '';
                    showStatistics();
                }
            }, 1000);
        }

        function loadQuestion() {
            timer = 15;
            startTimer();
            const currentQuestion = questions[currentQuestionIndex];
            questionElement.textContent = currentQuestion.question;
            answersElement.innerHTML = '';
            currentQuestion.answers.forEach(answer => {
                const button = document.createElement('button');
                button.textContent = answer.text;
                button.onclick = () => checkAnswer(button, answer.correct, answer.explanation);
                answersElement.appendChild(button);
            });
            resultElement.style.display = 'none';
            explanationElement.style.display = 'none';
        }

        function checkAnswer(button, isCorrect, explanationText) {
            clearInterval(startTimer);
            document.querySelectorAll('.answers button').forEach(btn => btn.disabled = true);

            resultElement.style.display = 'block';
            explanationElement.style.display = 'block';

            if (isCorrect) {
                resultElement.textContent = 'Bonne réponse !';
                resultElement.style.color = 'green';
                button.classList.add('correct');
                correctAnswers++;
            } else {
                resultElement.textContent = 'Mauvaise réponse.';
                resultElement.style.color = 'red';
                button.classList.add('wrong');
            }

            explanationElement.textContent = explanationText;
            answeredQuestions++;

            setTimeout(() => {
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    loadQuestion();
                } else {
                    showStatistics();
                }
            }, 2000);
        }

        function showStatistics() {
            statisticsElement.style.display = 'block';
            const averageTime = (totalTime / questions.length).toFixed(2);
            statisticsElement.innerHTML = `
                <h2>Statistiques</h2>
                <p>Questions répondues : ${answeredQuestions}/${questions.length}</p>
                <p>Bonnes réponses : ${correctAnswers}</p>
                <p>Temps moyen par question : ${averageTime} secondes</p>
            `;
        }

        loadQuestion();
    </script>
