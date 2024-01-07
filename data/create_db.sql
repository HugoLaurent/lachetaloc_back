CREATE TABLE
    IF NOT EXISTS "room" (
        "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "room" INTEGER NOT NULL
    );

CREATE TABLE
    IF NOT EXISTS "location" (
        "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "departement" TEXT,
        "code" TEXT NOT NULL
    );

CREATE TABLE
    IF NOT EXISTS "role" (
        "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "name" TEXT NOT NULL
    );

CREATE TABLE
    IF NOT EXISTS "user" (
        "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "email" TEXT UNIQUE NOT NULL,
        "pseudo" TEXT UNIQUE NOT NULL NOT NULL,
        "password" TEXT NOT NULL,
        "role_id" INTEGER NOT NULL REFERENCES role(id) ON DELETE CASCADE DEFAULT 1
    );

CREATE TABLE
    IF NOT EXISTS "contact" (
        "user_id" INTEGER NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
        "contact_id" INTEGER NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
        PRIMARY KEY ("user_id", "contact_id"),
        "accepted" BOOLEAN DEFAULT FALSE NOT NULL
    );

ALTER TABLE "contact"
ADD
    CONSTRAINT "unique_contact" UNIQUE ("user_id", "contact_id");

CREATE TABLE
    IF NOT EXISTS "notification" (
        "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "title" TEXT NOT NULL,
        "message" TEXT NOT NULL,
        "read" BOOLEAN DEFAULT FALSE NOT NULL,
        "user_id" INTEGER NOT NULL REFERENCES "user"(id) ON DELETE CASCADE
    );

CREATE TABLE
    IF NOT EXISTS "accommodation" (
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
        "accommodation_id" INTEGER NOT NULL REFERENCES accommodation(id) ON DELETE CASCADE
    );