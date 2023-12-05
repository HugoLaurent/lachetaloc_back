CREATE TABLE IF NOT EXISTS "user" (
    "id" SERIAL PRIMARY KEY,
    "titre" VARCHAR(50),
    "bail" DATE,
    "prix" INTEGER,
    "description" VARCHAR(255),
    "photo" VARCHAR(255),
    "piece_id" INTEGER,
    "utilsateur_id" INTEGER,
    "location_id" INTEGER,
);

INSERT INTO "user" ("titre", "bail", "prix", "description", "photo", "piece_id", "utilisateur_id", "location_id")
VALUES
  ('Bel appartement près du centre-ville', '2023-12-31', 1500, 'Appartement spacieux avec vue imprenable', 'https://picsum.photos/400/300', 1, 1, 1),
  ('Studio moderne en plein cœur de la ville', '2024-01-15', 1200, 'Studio lumineux avec cuisine équipée', 'https://picsum.photos/400/300', 2, 2, 2),
  ('Appartement familial avec jardin', '2023-12-01', 2000, 'Grand appartement idéal pour une famille', 'https://picsum.photos/400/300', 3, 3, 3),
  ('Penthouse de luxe avec terrasse', '2024-02-28', 3000, 'Vue panoramique depuis la terrasse', 'https://picsum.photos/400/300', 4, 4, 4),
  ('Appartement rénové dans quartier calme', '2023-12-15', 1800, 'Rénové récemment, quartier paisible', 'https://picsum.photos/400/300', 5, 5, 5);
