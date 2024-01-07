-- SQLBook: Code

BEGIN;

INSERT INTO "room" ("room") VALUES (1), (2), (3), (4), (5);

INSERT INTO
    "location" ("departement", "code")
VALUES ('Ain', '01'), ('Aisne', '02'), ('Allier', '03'), (
        'Alpes-de-Haute-Provence',
        '04'
    ), ('Hautes-Alpes', '05'), ('Alpes-Maritimes', '06'), ('Ardèche', '07'), ('Ardennes', '08'), ('Ariège', '09'), ('Aube', '10'), ('Aude', '11'), ('Aveyron', '12'), ('Bouches-du-Rhône', '13'), ('Calvados', '14'), ('Cantal', '15'), ('Charente', '16'), ('Charente-Maritime', '17'), ('Cher', '18'), ('Corrèze', '19'), ('Corse-du-Sud', '2A'), ('Haute-Corse', '2B'), ('Côte-d''Or', '21'), ('Côtes-d''Armor', '22'), ('Creuse', '23'), ('Dordogne', '24'), ('Doubs', '25'), ('Drôme', '26'), ('Eure', '27'), ('Eure-et-Loir', '28'), ('Finistère', '29'), ('Gard', '30'), ('Haute-Garonne', '31'), ('Gers', '32'), ('Gironde', '33'), ('Hérault', '34'), ('Ille-et-Vilaine', '35'), ('Indre', '36'), ('Indre-et-Loire', '37'), ('Isère', '38'), ('Jura', '39'), ('Landes', '40'), ('Loir-et-Cher', '41'), ('Loire', '42'), ('Haute-Loire', '43'), ('Loire-Atlantique', '44'), ('Loiret', '45'), ('Lot', '46'), ('Lot-et-Garonne', '47'), ('Lozère', '48'), ('Maine-et-Loire', '49'), ('Manche', '50'), ('Marne', '51'), ('Haute-Marne', '52'), ('Mayenne', '53'), ('Meurthe-et-Moselle', '54'), ('Meuse', '55'), ('Morbihan', '56'), ('Moselle', '57'), ('Nièvre', '58'), ('Nord', '59'), ('Oise', '60'), ('Orne', '61'), ('Pas-de-Calais', '62'), ('Puy-de-Dôme', '63'), ('Pyrénées-Atlantiques', '64'), ('Hautes-Pyrénées', '65'), ('Pyrénées-Orientales', '66'), ('Bas-Rhin', '67'), ('Haut-Rhin', '68'), ('Rhône', '69'), ('Haute-Saône', '70'), ('Saône-et-Loire', '71'), ('Sarthe', '72'), ('Savoie', '73'), ('Haute-Savoie', '74'), ('Paris', '75'), ('Seine-Maritime', '76'), ('Seine-et-Marne', '77'), ('Yvelines', '78'), ('Deux-Sèvres', '79'), ('Somme', '80'), ('Tarn', '81'), ('Tarn-et-Garonne', '82'), ('Var', '83'), ('Vaucluse', '84'), ('Vendée', '85'), ('Vienne', '86'), ('Haute-Vienne', '87'), ('Vosges', '88'), ('Yonne', '89'), ('Territoire de Belfort', '90'), ('Essonne', '91'), ('Hauts-de-Seine', '92'), ('Seine-Saint-Denis', '93'), ('Val-de-Marne', '94'), ('Val-d''Oise', '95'), ('Guadeloupe', '971'), ('Martinique', '972'), ('Guyane', '973'), ('La Réunion', '974'), ('Mayotte', '976');

INSERT INTO "role" ("name") VALUES ('user'), ('admin');

INSERT INTO
    "user" ("email", "pseudo", "password")
VALUES (
        'user1@example.com',
        'john_doe',
        '$2b$10$zhSgfpKnKI0CqBXO6vQe2.lA29/ozBhJvql7XsnA7LRtb7mU2JAOy'
    ), (
        'user2@example.com',
        'jane_smith',
        '$2b$10$zhSgfpKnKI0CqBXO6vQe2.lA29/ozBhJvql7XsnA7LRtb7mU2JAOy'
    ), (
        'user3@example.com',
        'bob_jones',
        '$2b$10$zhSgfpKnKI0CqBXO6vQe2.lA29/ozBhJvql7XsnA7LRtb7mU2JAOy'
    ), (
        'user4@example.com',
        'alice_jackson',
        '$2b$10$zhSgfpKnKI0CqBXO6vQe2.lA29/ozBhJvql7XsnA7LRtb7mU2JAOy'
    ), (
        'user5@example.com',
        'peter_parker',
        '$2b$10$zhSgfpKnKI0CqBXO6vQe2.lA29/ozBhJvql7XsnA7LRtb7mU2JAOy'
    ), (
        'user6@example.com',
        'mary_watson',
        '$2b$10$zhSgfpKnKI0CqBXO6vQe2.lA29/ozBhJvql7XsnA7LRtb7mU2JAOy'
    ), (
        'user7@example.com',
        'bruce_wayne',
        '$2b$10$zhSgfpKnKI0CqBXO6vQe2.lA29/ozBhJvql7XsnA7LRtb7mU2JAOy'
    ), (
        'user8@example.com',
        'selina_kyle',
        '$2b$10$zhSgfpKnKI0CqBXO6vQe2.lA29/ozBhJvql7XsnA7LRtb7mU2JAOy'
    ), (
        'user9@example.com',
        'clark_kent',
        '$2b$10$zhSgfpKnKI0CqBXO6vQe2.lA29/ozBhJvql7XsnA7LRtb7mU2JAOy'
    ), (
        'user10@example.com',
        'lois_lane',
        '$2b$10$zhSgfpKnKI0CqBXO6vQe2.lA29/ozBhJvql7XsnA7LRtb7mU2JAOy'
    ), (
        'user11@example.com',
        'tony_stark',
        '$2b$10$zhSgfpKnKI0CqBXO6vQe2.lA29/ozBhJvql7XsnA7LRtb7mU2JAOy'
    ), (
        'user12@example.com',
        'natasha_romanoff',
        '$2b$10$zhSgfpKnKI0CqBXO6vQe2.lA29/ozBhJvql7XsnA7LRtb7mU2JAOy'
    ), (
        'user13@example.com',
        'steve_rogers',
        '$2b$10$zhSgfpKnKI0CqBXO6vQe2.lA29/ozBhJvql7XsnA7LRtb7mU2JAOy'
    ), (
        'user14@example.com',
        'wanda_maximoff',
        '$2b$10$zhSgfpKnKI0CqBXO6vQe2.lA29/ozBhJvql7XsnA7LRtb7mU2JAOy'
    ), (
        'user15@example.com',
        'bruce_banner',
        '$2b$10$zhSgfpKnKI0CqBXO6vQe2.lA29/ozBhJvql7XsnA7LRtb7mU2JAOy'
    ), (
        'user16@example.com',
        'diana_prince',
        '$2b$10$zhSgfpKnKI0CqBXO6vQe2.lA29/ozBhJvql7XsnA7LRtb7mU2JAOy'
    ), (
        'user17@example.com',
        'barry_allen',
        '$2b$10$zhSgfpKnKI0CqBXO6vQe2.lA29/ozBhJvql7XsnA7LRtb7mU2JAOy'
    ), (
        'user18@example.com',
        'hal_jordan',
        '$2b$10$zhSgfpKnKI0CqBXO6vQe2.lA29/ozBhJvql7XsnA7LRtb7mU2JAOy'
    ), (
        'user19@example.com',
        'arthur_curry',
        '$2b$10$zhSgfpKnKI0CqBXO6vQe2.lA29/ozBhJvql7XsnA7LRtb7mU2JAOy'
    ), (
        'user20@example.com',
        'logan_howell',
        '$2b$10$zhSgfpKnKI0CqBXO6vQe2.lA29/ozBhJvql7XsnA7LRtb7mU2JAOy'
    ), (
        'user21@example.com',
        'ororo_munroe',
        '$2b$10$zhSgfpKnKI0CqBXO6vQe2.lA29/ozBhJvql7XsnA7LRtb7mU2JAOy'
    ), (
        'user22@example.com',
        'charles_xavier',
        '$2b$10$zhSgfpKnKI0CqBXO6vQe2.lA29/ozBhJvql7XsnA7LRtb7mU2JAOy'
    ), (
        'user23@example.com',
        'jean_grey',
        '$2b$10$zhSgfpKnKI0CqBXO6vQe2.lA29/ozBhJvql7XsnA7LRtb7mU2JAOy'
    ), (
        'user24@example.com',
        'scott_summers',
        '$2b$10$zhSgfpKnKI0CqBXO6vQe2.lA29/ozBhJvql7XsnA7LRtb7mU2JAOy'
    ), (
        'user25@example.com',
        'hank_mccoy',
        '$2b$10$zhSgfpKnKI0CqBXO6vQe2.lA29/ozBhJvql7XsnA7LRtb7mU2JAOy'
    ), (
        'user26@example.com',
        'kitty_pryde',
        '$2b$10$zhSgfpKnKI0CqBXO6vQe2.lA29/ozBhJvql7XsnA7LRtb7mU2JAOy'
    ), (
        'user27@example.com',
        'wolverine_logan',
        '$2b$10$zhSgfpKnKI0CqBXO6vQe2.lA29/ozBhJvql7XsnA7LRtb7mU2JAOy'
    ), (
        'user28@example.com',
        'rogue_marie',
        '$2b$10$zhSgfpKnKI0CqBXO6vQe2.lA29/ozBhJvql7XsnA7LRtb7mU2JAOy'
    ), (
        'user29@example.com',
        'gambit_remy',
        '$2b$10$zhSgfpKnKI0CqBXO6vQe2.lA29/ozBhJvql7XsnA7LRtb7mU2JAOy'
    ), (
        'user30@example.com',
        'stormy_weather',
        '$2b$10$zhSgfpKnKI0CqBXO6vQe2.lA29/ozBhJvql7XsnA7LRtb7mU2JAOy'
    );

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
        1
    );

INSERT INTO
    "accommodation" (
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
        'images/pictures/1702323588818.jpg',
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
        2,
        93,
        '2023-12-11 19:38:36.565',
        '2023-12-11 19:38:36.565'
    ), (
        'De la lumière',
        '2024-04-01',
        1800,
        'Espace contemporain, cuisine équipée, balcon privé offrant une vue panoramique sur le quartier dynamique, proche des transports et des lieux de divertissement.',
        'images/pictures/1702323629584.jpg',
        3,
        3,
        1,
        '2023-12-11 19:39:48.864',
        '2023-12-11 19:39:48.864'
    ), (
        'Une pépite',
        '2024-08-22',
        2500,
        'Logement idéalement situé, doté d''un design minimaliste, de hauts plafonds et de grandes fenêtres, offrant une abondance de lumière naturelle et une ambiance contemporaine.',
        'images/pictures/1702323454741.jpg',
        4,
        4,
        76,
        '2023-12-11 19:40:29.625',
        '2023-12-11 19:40:29.625'
    ), (
        'Votre future maison',
        '2024-11-04',
        28,
        'Appartement de luxe, finitions haut de gamme, terrasse privée offrant une vue spectaculaire sur la mer, à proximité des restaurants, boutiques et de la vie nocturne.',
        'images/pictures/1702323516534.jpg',
        2,
        5,
        76,
        '2023-12-11 19:41:59.265',
        '2023-12-11 19:41:59.265'
    ), (
        'Vue sur la rivière',
        '2025-09-15',
        1500,
        'Appartement moderne avec vue sur la rivière, proche des parcs et des pistes cyclables, parfait pour les amoureux de la nature.',
        'images/pictures/1702323588818.jpg',
        3,
        6,
        45,
        '2023-12-11 19:43:12.421',
        '2023-12-11 19:43:12.421'
    ), (
        'Oasis urbaine',
        '2024-10-20',
        1900,
        'Magnifique appartement au cœur de la ville offrant un oasis de calme, terrasse ensoleillée et à quelques pas des restaurants et boutiques.',
        'images/pictures/1702323629584.jpg',
        4,
        7,
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
        8,
        22,
        '2023-12-11 19:45:17.832',
        '2023-12-11 19:45:17.832'
    ), (
        'Vue panoramique',
        '2024-12-30',
        2600,
        'Penthouse avec vue panoramique sur la ville, espace lumineux, décoration moderne, terrasse spacieuse pour profiter du panorama.',
        'images/pictures/1702323516534.jpg',
        5,
        9,
        89,
        '2023-12-11 19:46:52.119',
        '2023-12-11 19:46:52.119'
    ), (
        'Appartement familial',
        '2025-03-18',
        1800,
        'Appartement spacieux pour famille, quartier calme, proche des écoles et des parcs, idéal pour une vie confortable.',
        'images/pictures/1702323629584.jpg',
        1,
        10,
        17,
        '2023-12-11 19:48:03.265',
        '2023-12-11 19:48:03.265'
    ), (
        'Vivre en grand',
        '2024-09-10',
        2800,
        'Loft moderne avec hauts plafonds, fenêtres panoramiques, offrant une sensation d''espace, emplacement central proche des transports.',
        'images/pictures/1702323454741.jpg',
        2,
        11,
        70,
        '2023-12-11 19:49:23.347',
        '2023-12-11 19:49:23.347'
    ), (
        'Vue sur le parc',
        '2025-06-28',
        1700,
        'Appartement lumineux avec vue sur le parc, quartier convivial, proche des commerces et des transports en commun.',
        'images/pictures/1702323516534.jpg',
        3,
        12,
        31,
        '2023-12-11 19:50:47.832',
        '2023-12-11 19:50:47.832'
    ), (
        'Havre de paix',
        '2024-07-14',
        2100,
        'Maison avec jardin dans quartier résidentiel calme, parfait pour se ressourcer, à proximité des écoles et des parcs.',
        'images/pictures/1702323588818.jpg',
        4,
        13,
        45,
        '2023-12-11 19:52:11.521',
        '2023-12-11 19:52:11.521'
    ), (
        'Style urbain',
        '2025-02-09',
        1950,
        'Appartement moderne au style urbain, proche des restaurants, bars et centres culturels, pour une vie animée.',
        'images/pictures/1702323629584.jpg',
        5,
        14,
        93,
        '2023-12-11 19:53:24.937',
        '2023-12-11 19:53:24.937'
    ), (
        'Vue sur la ville',
        '2024-07-03',
        1400,
        'Appartement lumineux offrant une vue imprenable sur la ville, situé au cœur du quartier dynamique, à proximité des commerces et des transports en commun.',
        'images/pictures/1702323629584.jpg',
        4,
        15,
        52,
        '2023-12-11 20:01:36.298',
        '2023-12-11 20:01:36.298'
    ), (
        'Espace moderne',
        '2025-04-18',
        2600,
        'Appartement spacieux avec un design moderne, balcon privé offrant une vue dégagée sur la nature environnante, proche des services et des écoles.',
        'images/pictures/1702323516534.jpg',
        3,
        16,
        82,
        '2023-12-11 20:03:02.175',
        '2023-12-11 20:03:02.175'
    ), (
        'Penthouse luxueux',
        '2024-12-22',
        1700,
        'Penthouse élégant avec terrasse spacieuse offrant une vue panoramique, idéal pour les amoureux de luxe et de confort.',
        'images/pictures/1702323588818.jpg',
        2,
        17,
        15,
        '2023-12-11 20:04:29.634',
        '2023-12-11 20:04:29.634'
    ), (
        'Résidence paisible',
        '2025-10-11',
        800,
        'Maison de ville dans un quartier calme, proche des parcs et des pistes cyclables, parfait pour une vie paisible en famille.',
        'images/pictures/1702323454741.jpg',
        1,
        18,
        67,
        '2023-12-11 20:05:51.832',
        '2023-12-11 20:05:51.832'
    ), (
        'Vivre en harmonie',
        '2024-09-28',
        2100,
        'Appartement moderne au design harmonieux, vue dégagée sur la rivière, situé dans un quartier résidentiel proche des commodités.',
        'images/pictures/1702323516534.jpg',
        5,
        19,
        40,
        '2023-12-11 20:07:14.275',
        '2023-12-11 20:07:14.275'
    ), (
        'Oasis urbaine',
        '2025-03-07',
        1500,
        'Appartement au cœur de la ville offrant un oasis de tranquillité, à proximité des restaurants, boutiques et lieux culturels.',
        'images/pictures/1702323629584.jpg',
        3,
        20,
        25,
        '2023-12-11 20:08:41.971',
        '2023-12-11 20:08:41.971'
    ), (
        'Raffinement contemporain',
        '2024-11-16',
        2400,
        'Maison moderne offrant un espace de vie raffiné, jardin privé et à proximité des transports et des écoles.',
        'images/pictures/1702323588818.jpg',
        4,
        21,
        73,
        '2023-12-11 20:10:05.722',
        '2023-12-11 20:10:05.722'
    ), (
        'Vue sur la mer',
        '2025-01-24',
        1900,
        'Appartement avec vue imprenable sur la mer, lumineux et spacieux, à proximité des plages et des loisirs nautiques.',
        'images/pictures/1702323454741.jpg',
        2,
        22,
        88,
        '2023-12-11 20:11:28.519',
        '2023-12-11 20:11:28.519'
    ), (
        'Design épuré',
        '2024-06-10',
        1300,
        'Appartement au design épuré, lumineux, avec de grandes fenêtres offrant une vue dégagée sur le quartier animé.',
        'images/pictures/1702323629584.jpg',
        1,
        23,
        7,
        '2023-12-11 20:12:56.205',
        '2023-12-11 20:12:56.205'
    ), (
        'Havre de verdure',
        '2025-07-29',
        2200,
        'Maison avec jardin verdoyant, idéal pour profiter du plein air, proche des parcs et des services.',
        'images/pictures/1702323588818.jpg',
        5,
        24,
        50,
        '2023-12-11 20:14:19.904',
        '2023-12-11 20:14:19.904'
    ), (
        'Vie citadine',
        '2024-08-15',
        1600,
        'Appartement moderne pour une vie citadine confortable, proche des transports et des zones de loisirs.',
        'images/pictures/1702323454741.jpg',
        3,
        25,
        18,
        '2023-12-11 20:15:43.618',
        '2023-12-11 20:15:43.618'
    ), (
        'Espace contemporain',
        '2025-02-27',
        2300,
        'Appartement contemporain offrant un espace de vie élégant et lumineux, situé dans un quartier calme et verdoyant.',
        'images/pictures/1702323516534.jpg',
        4,
        26,
        85,
        '2023-12-11 20:17:08.293',
        '2023-12-11 20:17:08.293'
    ), (
        'Confort familial',
        '2024-10-05',
        1100,
        'Maison confortable pour une vie familiale, quartier convivial proche des écoles et des espaces de jeux.',
        'images/pictures/1702323629584.jpg',
        2,
        27,
        33,
        '2023-12-11 20:18:32.102',
        '2023-12-11 20:18:32.102'
    ), (
        'Vue panoramique',
        '2025-05-14',
        2500,
        'Appartement offrant une vue panoramique sur la ville, design moderne et ambiance chaleureuse.',
        'images/pictures/1702323588818.jpg',
        5,
        28,
        70,
        '2023-12-11 20:19:54.905',
        '2023-12-11 20:19:54.905'
    ), (
        'Tranquillité urbaine',
        '2024-04-01',
        900,
        'Appartement offrant un cadre paisible au cœur de la ville, idéal pour se ressourcer après une journée active.',
        'images/pictures/1702323454741.jpg',
        1,
        29,
        60,
        '2023-12-11 20:21:18.609',
        '2023-12-11 20:21:18.609'
    );

COMMIT;