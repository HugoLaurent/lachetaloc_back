CREATE TABLE
    IF NOT EXISTS "room" (
        "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "room" INTEGER NOT NULL
    );

CREATE TABLE
    IF NOT EXISTS "location" (
        "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "departement" TEXT,
        "code" INTEGER NOT NULL
    );

CREATE TABLE
    IF NOT EXISTS "user" (
        "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "email" TEXT UNIQUE NOT NULL,
        "pseudo" TEXT UNIQUE NOT NULL NOT NULL,
        "password" TEXT NOT NULL
    );

CREATE TABLE
    IF NOT EXISTS "notification" (
        "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "title" TEXT NOT NULL,
        "message" TEXT NOT NULL,
        "read" BOOLEAN DEFAULT FALSE NOT NULL,
        "user_id" INTEGER NOT NULL REFERENCES "user"(id) ON DELETE CASCADE
    );

CREATE TABLE
    IF NOT EXISTS "accomodation" (
        "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "title" TEXT NOT NULL,
        "end_of_contract" DATE NOT NULL,
        "price" INTEGER NOT NULL,
        "description" TEXT NOT NULL,
        "picture" TEXT NOT NULL,
        "room_id" INTEGER NOT NULL REFERENCES room(id) ON DELETE CASCADE,
        "user_id" INTEGER REFERENCES "user"(id) ON DELETE
        SET
            NULL,
            "location_id" INTEGER NOT NULL REFERENCES location(id) ON DELETE CASCADE,
            "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
            "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
    );

CREATE TABLE
    IF NOT EXISTS "follow" (
        "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "user_id" INTEGER NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
        "accomodation_id" INTEGER NOT NULL REFERENCES accomodation(id) ON DELETE CASCADE
    );