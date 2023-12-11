-- SQLBook: Code

BEGIN;

INSERT INTO "room" ("room") VALUES (1), (2), (3), (4), (5);

INSERT INTO
    "location" ("departement", "code")
VALUES ('Ain', '01'), ('Aisne', '02'), ('Allier', '03'), (
        'Alpes-de-Haute-Provence',
        '04'
    ), ('Hautes-Alpes', '05'), ('Alpes-Maritimes', '06'), ('Ardèche', '07'), ('Ardennes', '08'), ('Ariège', '09'), ('Aube', '10'), ('Aude', '11'), ('Aveyron', '12'), ('Bouches-du-Rhône', '13'), ('Calvados', '14'), ('Cantal', '15'), ('Charente', '16'), ('Charente-Maritime', '17'), ('Cher', '18'), ('Corrèze', '19'), ('Corse-du-Sud', '2A'), ('Haute-Corse', '2B'), ('Côte-d''Or', '21'), ('Côtes-d''Armor', '22'), ('Creuse', '23'), ('Dordogne', '24'), ('Doubs', '25'), ('Drôme', '26'), ('Eure', '27'), ('Eure-et-Loir', '28'), ('Finistère', '29'), ('Gard', '30'), ('Haute-Garonne', '31'), ('Gers', '32'), ('Gironde', '33'), ('Hérault', '34'), ('Ille-et-Vilaine', '35'), ('Indre', '36'), ('Indre-et-Loire', '37'), ('Isère', '38'), ('Jura', '39'), ('Landes', '40'), ('Loir-et-Cher', '41'), ('Loire', '42'), ('Haute-Loire', '43'), ('Loire-Atlantique', '44'), ('Loiret', '45'), ('Lot', '46'), ('Lot-et-Garonne', '47'), ('Lozère', '48'), ('Maine-et-Loire', '49'), ('Manche', '50'), ('Marne', '51'), ('Haute-Marne', '52'), ('Mayenne', '53'), ('Meurthe-et-Moselle', '54'), ('Meuse', '55'), ('Morbihan', '56'), ('Moselle', '57'), ('Nièvre', '58'), ('Nord', '59'), ('Oise', '60'), ('Orne', '61'), ('Pas-de-Calais', '62'), ('Puy-de-Dôme', '63'), ('Pyrénées-Atlantiques', '64'), ('Hautes-Pyrénées', '65'), ('Pyrénées-Orientales', '66'), ('Bas-Rhin', '67'), ('Haut-Rhin', '68'), ('Rhône', '69'), ('Haute-Saône', '70'), ('Saône-et-Loire', '71'), ('Sarthe', '72'), ('Savoie', '73'), ('Haute-Savoie', '74'), ('Paris', '75'), ('Seine-Maritime', '76'), ('Seine-et-Marne', '77'), ('Yvelines', '78'), ('Deux-Sèvres', '79'), ('Somme', '80'), ('Tarn', '81'), ('Tarn-et-Garonne', '82'), ('Var', '83'), ('Vaucluse', '84'), ('Vendée', '85'), ('Vienne', '86'), ('Haute-Vienne', '87'), ('Vosges', '88'), ('Yonne', '89'), ('Territoire de Belfort', '90'), ('Essonne', '91'), ('Hauts-de-Seine', '92'), ('Seine-Saint-Denis', '93'), ('Val-de-Marne', '94'), ('Val-d''Oise', '95'), ('Guadeloupe', '971'), ('Martinique', '972'), ('Guyane', '973'), ('La Réunion', '974'), ('Mayotte', '976');

INSERT INTO
    "user" ("email", "pseudo", "password")
VALUES ('a@a.com', 'a', 'a');

INSERT INTO
    "notification" (
        "title",
        "message",
        "read",
        "user_id"
    )
VALUES (
        'contact',
        'Quelqu''un vous a contacté pour votre annonce',
        FALSE,
        1
    );

INSERT INTO
    "accomodation" (
        "title",
        "end_of_contract",
        "price",
        "description",
        "picture",
        "room_id",
        "user_id",
        "location_id",
        "created_at",
        "updated_at"
    )
VALUES (
        'Un petit nid d''amour',
        '2025-05-06',
        2000,
        'Appartement spacieux, baigné de lumière naturelle, offrant une vue imprenable sur la ville et les montagnes environnantes, situé à proximité des commodités du centre-ville.',
        'images/pictures/1702323454741.jpg',
        2,
        1,
        76,
        '2023-12-11 19:37:34.746',
        '2023-12-11 19:37:34.746'
    ), (
        'Paradis sur terre',
        '2024-06-08',
        1200,
        'Espace contemporain, cuisine équipée, balcon privé offrant une vue panoramique sur le quartier dynamique, proche des transports et des lieux de divertissement.',
        'images/pictures/1702323516534.jpg',
        1,
        1,
        93,
        '2023-12-11 19:38:36.565',
        '2023-12-11 19:38:36.565'
    ), (
        'De la lumière',
        '2024-04-01',
        1800,
        'Espace contemporain, cuisine équipée, balcon privé offrant une vue panoramique sur le quartier dynamique, proche des transports et des lieux de divertissement.',
        'images/pictures/1702323588818.jpg',
        3,
        1,
        1,
        '2023-12-11 19:39:48.864',
        '2023-12-11 19:39:48.864'
    ), (
        'Une pépite',
        '2024-08-22',
        2500,
        'Logement idéalement situé, doté d''un design minimaliste, de hauts plafonds et de grandes fenêtres, offrant une abondance de lumière naturelle et une ambiance contemporaine.',
        'images/pictures/1702323629584.jpg',
        4,
        1,
        76,
        '2023-12-11 19:40:29.625',
        '2023-12-11 19:40:29.625'
    ), (
        'Votre future maison',
        '2024-11-04',
        28,
        'Appartement de luxe, finitions haut de gamme, terrasse privée offrant une vue spectaculaire sur la mer, à proximité des restaurants, boutiques et de la vie nocturne.',
        'images/pictures/1702323719263.jpg',
        2,
        1,
        76,
        '2023-12-11 19:41:59.265',
        '2023-12-11 19:41:59.265'
    ), (
        'Vue sur la rivière',
        '2025-09-15',
        1500,
        'Appartement moderne avec vue sur la rivière, proche des parcs et des pistes cyclables, parfait pour les amoureux de la nature.',
        'images/pictures/1702323454741.jpg',
        3,
        1,
        45,
        '2023-12-11 19:43:12.421',
        '2023-12-11 19:43:12.421'
    ), (
        'Oasis urbaine',
        '2024-10-20',
        1900,
        'Magnifique appartement au cœur de la ville offrant un oasis de calme, terrasse ensoleillée et à quelques pas des restaurants et boutiques.',
        'images/pictures/1702323516534.jpg',
        4,
        1,
        76,
        '2023-12-11 19:44:14.010',
        '2023-12-11 19:44:14.010'
    ), (
        'Retraite paisible',
        '2025-01-05',
        2200,
        'Maison de ville élégante avec jardin paisible, parfait pour se détendre après une journée bien remplie, à proximité des transports et des écoles.',
        'images/pictures/1702323967832.jpg',
        5,
        1,
        22,
        '2023-12-11 19:45:17.832',
        '2023-12-11 19:45:17.832'
    ), (
        'Vue panoramique',
        '2024-12-30',
        2600,
        'Penthouse avec vue panoramique sur la ville, espace lumineux, décoration moderne, terrasse spacieuse pour profiter du panorama.',
        'images/pictures/1702324052119.jpg',
        5,
        1,
        89,
        '2023-12-11 19:46:52.119',
        '2023-12-11 19:46:52.119'
    ), (
        'Appartement familial',
        '2025-03-18',
        1800,
        'Appartement spacieux pour famille, quartier calme, proche des écoles et des parcs, idéal pour une vie confortable.',
        'images/pictures/1702324138265.jpg',
        1,
        1,
        17,
        '2023-12-11 19:48:03.265',
        '2023-12-11 19:48:03.265'
    ), (
        'Vivre en grand',
        '2024-09-10',
        2800,
        'Loft moderne avec hauts plafonds, fenêtres panoramiques, offrant une sensation d''espace, emplacement central proche des transports.',
        'images/pictures/1702323588818.jpg',
        2,
        1,
        70,
        '2023-12-11 19:49:23.347',
        '2023-12-11 19:49:23.347'
    ), (
        'Vue sur le parc',
        '2025-06-28',
        1700,
        'Appartement lumineux avec vue sur le parc, quartier convivial, proche des commerces et des transports en commun.',
        'images/pictures/1702324267832.jpg',
        3,
        1,
        31,
        '2023-12-11 19:50:47.832',
        '2023-12-11 19:50:47.832'
    ), (
        'Charme urbain',
        '2024-11-15',
        2100,
        'Appartement au charme urbain, quartier animé avec restaurants et bars, espace confortable pour une vie citadine.',
        'images/pictures/1702324329198.jpg',
        4,
        1,
        52,
        '2023-12-11 19:51:59.198',
        '2023-12-11 19:51:59.198'
    ), (
        'Maison de caractère',
        '2025-02-22',
        2400,
        'Maison de caractère avec jardin, quartier résidentiel, à proximité des commodités, parfait pour une famille ou un couple.',
        'images/pictures/1702324382837.jpg',
        5,
        1,
        13,
        '2023-12-11 19:53:12.837',
        '2023-12-11 19:53:12.837'
    ), (
        'Vivre en bord de mer',
        '2024-07-12',
        1950,
        'Appartement près de la plage, vue sur la mer, ambiance détendue, proche des restaurants et des activités nautiques.',
        'images/pictures/1702324445155.jpg',
        2,
        1,
        84,
        '2023-12-11 19:54:25.155',
        '2023-12-11 19:54:25.155'
    ), (
        'Vue imprenable',
        '2025-04-09',
        1850,
        'Appartement offrant une vue imprenable sur les montagnes, cadre paisible, parfait pour les amoureux de la nature.',
        'images/pictures/1702323454741.jpg',
        1,
        1,
        3,
        '2023-12-11 19:55:38.000',
        '2023-12-11 19:55:38.000'
    ), (
        'Vue sur la rivière',
        '2025-09-15',
        1500,
        'Appartement moderne avec vue sur la rivière, proche des parcs et des pistes cyclables, parfait pour les amoureux de la nature.',
        'images/pictures/1702323588818.jpg',
        3,
        1,
        45,
        '2023-12-11 19:43:12.421',
        '2023-12-11 19:43:12.421'
    ), (
        'Oasis urbaine',
        '2024-10-20',
        1900,
        'Magnifique appartement au cœur de la ville offrant un oasis de calme, terrasse ensoleillée et à quelques pas des restaurants et boutiques.',
        'images/pictures/1702323516534.jpg',
        4,
        1,
        76,
        '2023-12-11 19:44:14.010',
        '2023-12-11 19:44:14.010'
    ), (
        'Retraite paisible',
        '2025-01-05',
        2200,
        'Maison de ville élégante avec jardin paisible, parfait pour se détendre après une journée bien remplie, à proximité des transports et des écoles.',
        'images/pictures/1702323454741.jpg',
        5,
        1,
        22,
        '2023-12-11 19:45:17.832',
        '2023-12-11 19:45:17.832'
    ), (
        'Vue panoramique',
        '2024-12-30',
        2600,
        'Penthouse avec vue panoramique sur la ville, espace lumineux, décoration moderne, terrasse spacieuse pour profiter du panorama.',
        'images/pictures/1702324052119.jpg',
        3,
        1,
        89,
        '2023-12-11 19:46:52.119',
        '2023-12-11 19:46:52.119'
    ), (
        'Appartement familial',
        '2025-03-18',
        1800,
        'Appartement spacieux pour famille, quartier calme, proche des écoles et des parcs, idéal pour une vie confortable.',
        'images/pictures/1702323588818.jpg',
        1,
        1,
        17,
        '2023-12-11 19:48:03.265',
        '2023-12-11 19:48:03.265'
    ), (
        'Vivre en grand',
        '2024-09-10',
        2800,
        'Loft moderne avec hauts plafonds, fenêtres panoramiques, offrant une sensation d''espace, emplacement central proche des transports.',
        'images/pictures/1702323516534.jpg',
        2,
        1,
        70,
        '2023-12-11 19:49:23.347',
        '2023-12-11 19:49:23.347'
    ), (
        'Vue sur le parc',
        '2025-06-28',
        1700,
        'Appartement lumineux avec vue sur le parc, quartier convivial, proche des commerces et des transports en commun.',
        'images/pictures/1702323454741.jpg',
        3,
        1,
        31,
        '2023-12-11 19:50:47.832',
        '2023-12-11 19:50:47.832'
    ), (
        'Charme urbain',
        '2024-11-15',
        2100,
        'Appartement au charme urbain, quartier animé avec restaurants et bars, espace confortable pour une vie citadine.',
        'images/pictures/1702324329198.jpg',
        4,
        1,
        52,
        '2023-12-11 19:51:59.198',
        '2023-12-11 19:51:59.198'
    ), (
        'Maison de caractère',
        '2025-02-22',
        2400,
        'Maison de caractère avec jardin, quartier résidentiel, à proximité des commodités, parfait pour une famille ou un couple.',
        'images/pictures/1702324382837.jpg',
        5,
        1,
        13,
        '2023-12-11 19:53:12.837',
        '2023-12-11 19:53:12.837'
    ), (
        'Vivre en bord de mer',
        '2024-07-12',
        1950,
        'Appartement près de la plage, vue sur la mer, ambiance détendue, proche des restaurants et des activités nautiques.',
        'images/pictures/1702323516534.jpg',
        4,
        1,
        84,
        '2023-12-11 19:54:25.155',
        '2023-12-11 19:54:25.155'
    ), (
        'Vue imprenable',
        '2025-04-09',
        1850,
        'Appartement offrant une vue imprenable sur les montagnes, cadre paisible, parfait pour les amoureux de la nature.',
        'images/pictures/1702323588818.jpg',
        1,
        1,
        3,
        '2023-12-11 19:55:38.000',
        '2023-12-11 19:55:38.000'
    ), (
        'Vue sur la rivière',
        '2025-09-15',
        1500,
        'Appartement moderne avec vue sur la rivière, proche des parcs et des pistes cyclables, parfait pour les amoureux de la nature.',
        'images/pictures/1702323454741.jpg',
        3,
        1,
        45,
        '2023-12-11 19:43:12.421',
        '2023-12-11 19:43:12.421'
    ), (
        'Oasis urbaine',
        '2024-10-20',
        1900,
        'Magnifique appartement au cœur de la ville offrant un oasis de calme, terrasse ensoleillée et à quelques pas des restaurants et boutiques.',
        'images/pictures/1702323516534.jpg',
        4,
        1,
        76,
        '2023-12-11 19:44:14.010',
        '2023-12-11 19:44:14.010'
    ), (
        'Retraite paisible',
        '2025-01-05',
        2200,
        'Maison de ville élégante avec jardin paisible, parfait pour se détendre après une journée bien remplie, à proximité des transports et des écoles.',
        'images/pictures/1702323588818.jpg',
        5,
        1,
        22,
        '2023-12-11 19:45:17.832',
        '2023-12-11 19:45:17.832'
    ), (
        'Vue panoramique',
        '2024-12-30',
        2600,
        'Penthouse avec vue panoramique sur la ville, espace lumineux, décoration moderne, terrasse spacieuse pour profiter du panorama.',
        'images/pictures/1702323629584.jpg',
        2,
        1,
        89,
        '2023-12-11 19:46:52.119',
        '2023-12-11 19:46:52.119'
    ), (
        'Appartement familial',
        '2025-03-18',
        1800,
        'Appartement spacieux pour famille, quartier calme, proche des écoles et des parcs, idéal pour une vie confortable.',
        'images/pictures/1702323719263.jpg',
        1,
        1,
        17,
        '2023-12-11 19:48:03.265',
        '2023-12-11 19:48:03.265'
    ), (
        'Charme urbain',
        '2024-06-08',
        2100,
        'Appartement au charme urbain, quartier animé avec restaurants et bars, espace confortable pour une vie citadine.',
        'images/pictures/1702323778211.jpg',
        3,
        1,
        52,
        '2023-12-11 19:49:23.347',
        '2023-12-11 19:49:23.347'
    ), (
        'Cocon douillet',
        '2025-07-20',
        1700,
        'Studio confortable, lumineux et calme, parfait pour les étudiants ou les professionnels, à proximité des transports en commun.',
        'images/pictures/1702323856421.jpg',
        4,
        1,
        14,
        '2023-12-11 19:50:47.832',
        '2023-12-11 19:50:47.832'
    ), (
        'Rêve citadin',
        '2024-09-28',
        1950,
        'Appartement moderne, vue sur la ville, quartier dynamique, proche des centres  et des lieux de divertissement.',
        'images/pictures/1702323901010.jpg',
        5,
        1,
        27,
        '2023-12-11 19:51:59.198',
        '2023-12-11 19:51:59.198'
    ), (
        'Refuge paisible ',
        '2025-05-10',
        2400,
        'Maison individuelle avec jardin paisible,
        environnement calme et verdoyant,
        parfait pour se ressourcer après une journée chargée.',
        'images/pictures/1702323967832.jpg',
        2,
        1,
        60,
        '2023-12-11 19:53:12.837',
        '2023-12-11 19:53:12.837'
    ), (
        'Appartement ensoleillé ',
        '2024-08-15',
        1850,
        'Appartement lumineux,
        orientation plein sud,
        balcon ensoleillé,
        proche des commerces et des transports.',
        'images/pictures/1702324052119.jpg',
        3,
        1,
        33,
        '2023-12-11 19:54:25.155',
        '2023-12-11 19:54:25.155'
    ), (
        'Espace détente ',
        '2025-01-25 ',
        2000,
        'Appartement spacieux avec coin détente,
        ambiance chaleureuse,
        à proximité des parcs et des restaurants.',
        'images/pictures/1702324138265.jpg',
        4,
        1,
        45,
        '2023-12-11 19:55:38.000',
        '2023-12-11 19:55:38.000'
    ), (
        'Vie citadine ',
        '2024-11-03 ',
        1750,
        'Appartement confortable,
        quartier animé,
        proche des transports en commun,
        des magasins et des lieux de loisirs.',
        'images/pictures/1702324201347.jpg',
        5,
        1,
        78,
        '2023-12-11 19:56:52.000',
        '2023-12-11 19:56:52.000'
    ), (
        'Havre de paix ',
        '2025-04-14 ',
        2300,
        'Maison spacieuse,
        jardin paisible,
        quartier familial,
        à proximité des écoles et des installations sportives.',
        'images/pictures/1702324267832.jpg',
        1,
        1,
        12,
        '2023-12-11 19:57:23.000',
        '2023-12-11 19:57:23.000'
    ), (
        'Loft moderne ',
        '2024-07-30 ',
        2650,
        'Loft moderne avec vue dégagée,
        hauts plafonds,
        ambiance contemporaine,
        proche des restaurants et des transports.',
        'images/pictures/1702324329198.jpg',
        2,
        1,
        25,
        '2023-12-11 19:58:41.000',
        '2023-12-11 19:58:41.000'
    ), (
        'Espace lumineux ',
        '2025-02-09 ',
        1900,
        'Appartement lumineux,
        vue sur le parc,
        ambiance conviviale,
        proche des commerces et des transports.',
        'images/pictures/1702324382837.jpg',
        3,
        1,
        38,
        '2023-12-11 19:59:59.000',
        '2023-12-11 19:59:59.000'
    ), (
        'Vue sur la mer ',
        '2024-09-17 ',
        2100,
        'Appartement avec vue sur la mer,
        ambiance relaxante,
        à proximité des plages et des restaurants.',
        'images/pictures/1702324445155.jpg',
        4,
        1,
        51,
        '2023-12-11 20:01:11.000',
        '2023-12-11 20:01:11.000'
    ), (
        'Pied-à-terre moderne ',
        '2025-03-08 ',
        1950,
        'Studio moderne,
        cuisine équipée,
        quartier pratique proche des transports,
        parfait pour les professionnels en déplacement.',
        'images/pictures/1702324506411.jpg',
        5,
        1,
        64,
        '2023-12-11 20:02:29.000',
        '2023-12-11 20:02:29.000'
    ), (
        'Coin de paradis ',
        '2024-06-25 ',
        1800,
        'Appartement cosy,
        quartier paisible,
        ambiance chaleureuse,
        proche des parcs et des commodités.',
        'images/pictures/1702324569277.jpg',
        1,
        1,
        77,
        '2023-12-11 20:03:41.000',
        '2023-12-11 20:03:41.000'
    ), (
        'Vie urbaine moderne ',
        '2025-01-18 ',
        2200,
        'Appartement moderne,
        quartier dynamique,
        proche des restaurants,
        bars et magasins.',
        'images/pictures/1702324631123.jpg',
        2,
        1,
        16,
        '2023-12-11 20:04:53.000',
        '2023-12-11 20:04:53.000'
    ), (
        'Coin tranquille ',
        '2024-08-02 ',
        1750,
        'Appartement confortable dans un quartier calme,
        idéal pour se détendre après une journée de travail.',
        'images/pictures/1702324694024.jpg',
        3,
        1,
        29,
        '2023-12-11 20:06:05.000',
        '2023-12-11 20:06:05.000'
    );

COMMIT;