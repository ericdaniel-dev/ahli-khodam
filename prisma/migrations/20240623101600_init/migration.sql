-- CreateTable
CREATE TABLE "admin" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "khodam" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "philosophy" TEXT NOT NULL,
    "images" TEXT,

    CONSTRAINT "khodam_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_username_key" ON "admin"("username");

-- CreateIndex
CREATE UNIQUE INDEX "khodam_title_key" ON "khodam"("title");
