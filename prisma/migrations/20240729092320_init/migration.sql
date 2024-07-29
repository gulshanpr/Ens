-- CreateTable
CREATE TABLE "Domains" (
    "id" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "indexFromBlock" INTEGER NOT NULL,

    CONSTRAINT "Domains_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Domains_domain_key" ON "Domains"("domain");
