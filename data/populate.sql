BEGIN;

INSERT INTO "piece" ("nombre") VALUES (1), (2), (3), (4), (5);

INSERT INTO
    "localisation" ("departement", "code")
VALUES ('Ain', 1), ('Aisne', 2), ('Allier', 3), ('Alpes-de-Haute-Provence', 4), ('Hautes-Alpes', 5), ('Alpes-Maritimes', 6), ('Ardèche', 7), ('Ardennes', 8), ('Ariège', 9), ('Aube', 10), ('Aude', 11), ('Aveyron', 12), ('Bouches-du-Rhône', 13), ('Calvados', 14), ('Cantal', 15), ('Charente', 16), ('Charente-Maritime', 17), ('Cher', 18), ('Corrèze', 19), ('Corse-du-Sud', 20), ('Haute-Corse', 21), ('Côte-d''Or', 22), ('Côtes-d''Armor', 23), ('Creuse', 24), ('Dordogne', 25), ('Doubs', 26), ('Drôme', 27), ('Eure', 28), ('Eure-et-Loir', 29), ('Finistère', 30), ('Gard', 31), ('Haute-Garonne', 32), ('Gers', 33), ('Gironde', 34), ('Hérault', 35), ('Ille-et-Vilaine', 36), ('Indre', 37), ('Indre-et-Loire', 38), ('Isère', 39), ('Jura', 40), ('Landes', 41), ('Loir-et-Cher', 42), ('Loire', 43), ('Haute-Loire', 44), ('Loire-Atlantique', 45), ('Loiret', 46), ('Lot', 47), ('Lot-et-Garonne', 48), ('Lozère', 49), ('Maine-et-Loire', 50), ('Manche', 51), ('Marne', 52), ('Haute-Marne', 53), ('Mayenne', 54), ('Meurthe-et-Moselle', 55), ('Meuse', 56), ('Morbihan', 57), ('Moselle', 58), ('Nièvre', 59), ('Nord', 60), ('Oise', 61), ('Orne', 62), ('Pas-de-Calais', 63), ('Puy-de-Dôme', 64), ('Pyrénées-Atlantiques', 65), ('Hautes-Pyrénées', 66), ('Pyrénées-Orientales', 67), ('Bas-Rhin', 68), ('Haut-Rhin', 69), ('Rhône', 70), ('Haute-Saône', 71), ('Saône-et-Loire', 72), ('Sarthe', 73), ('Savoie', 74), ('Haute-Savoie', 75), ('Paris', 76), ('Seine-Maritime', 77), ('Seine-et-Marne', 78), ('Yvelines', 79), ('Deux-Sèvres', 80), ('Somme', 81), ('Tarn', 82), ('Tarn-et-Garonne', 83), ('Var', 84), ('Vaucluse', 85), ('Vendée', 86), ('Vienne', 87), ('Haute-Vienne', 88), ('Vosges', 89), ('Yonne', 90), ('Territoire de Belfort', 91), ('Essonne', 92), ('Hauts-de-Seine', 93), ('Seine-Saint-Denis', 94), ('Val-de-Marne', 95), ('Val-d''Oise', 96), ('Guadeloupe', 97), ('Martinique', 98), ('Guyane', 99), ('La Réunion', 100), ('Mayotte', 101);

INSERT INTO
    "utilisateur" (
        "email",
        "pseudo",
        "mot_de_passe"
    )
VALUES ('a@a.com', 'a', 'a');

INSERT INTO
    "notification" (
        "titre",
        "message",
        "lu",
        "utilisateur_id"
    )
VALUES (
        'contact',
        'Quelqu''un vous a contacté pour votre annonce',
        FALSE,
        1
    );

INSERT INTO
    "logement" (
        "titre",
        "bail",
        "prix",
        "description",
        "photo",
        "piece_id",
        "utilisateur_id",
        "localisation_id"
    )
VALUES (
        'Bel appartement près du centre-ville',
        '2023-12-31',
        1500,
        'Appartement spacieux avec vue imprenable',
        'https://picsum.photos/400/300',
        1,
        1,
        1
    ), (
        'Studio moderne en plein cœur de la ville',
        '2024-01-15',
        1200,
        'Studio lumineux avec cuisine équipée',
        'https://picsum.photos/400/300',
        2,
        1,
        2
    ), (
        'Appartement familial avec jardin',
        '2023-12-01',
        2000,
        'Grand appartement idéal pour une famille',
        'https://picsum.photos/400/300',
        3,
        1,
        3
    ), (
        'Penthouse de luxe avec terrasse',
        '2024-02-28',
        3000,
        'Vue panoramique depuis la terrasse',
        'https://picsum.photos/400/300',
        4,
        1,
        4
    ), (
        'Appartement rénové dans quartier calme',
        '2023-12-15',
        1800,
        'Rénové récemment, quartier paisible',
        'https://picsum.photos/400/300',
        5,
        1,
        5
    );

COMMIT;