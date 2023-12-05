CREATE TABLE
    IF NOT EXISTS "piece" (
        "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "nombre" INTEGER NOT NULL
    );

CREATE TABLE
    IF NOT EXISTS "localisation" (
        "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "departement" TEXT,
        "code" INTEGER NOT NULL
    );

CREATE TABLE
    IF NOT EXISTS "utilisateur" (
        "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "email" TEXT UNIQUE NOT NULL,
        "pseudo" TEXT UNIQUE NOT NULL NOT NULL,
        "mot_de_passe" TEXT NOT NULL
    );

CREATE TABLE
    IF NOT EXISTS "notification" (
        "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "titre" TEXT NOT NULL,
        "message" TEXT NOT NULL,
        "lu" BOOLEAN DEFAULT FALSE NOT NULL,
        "utilisateur_id" INTEGER NOT NULL REFERENCES utilisateur(id) ON DELETE CASCADE
    );

CREATE TABLE
    IF NOT EXISTS "logement" (
        "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "titre" TEXT NOT NULL,
        "bail" DATE NOT NULL,
        "prix" INTEGER NOT NULL,
        "description" TEXT NOT NULL,
        "photo" TEXT NOT NULL,
        "piece_id" INTEGER NOT NULL REFERENCES piece(id) ON DELETE CASCADE,
        "utilisateur_id" INTEGER REFERENCES utilisateur(id) ON DELETE
        SET
            NULL,
            "localisation_id" INTEGER NOT NULL REFERENCES localisation(id) ON DELETE CASCADE
    );

CREATE TABLE
    IF NOT EXISTS "suivi" (
        "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "utilisateur_id" INTEGER NOT NULL REFERENCES utilisateur(id) ON DELETE CASCADE,
        "logement_id" INTEGER NOT NULL REFERENCES logement(id) ON DELETE CASCADE
    );