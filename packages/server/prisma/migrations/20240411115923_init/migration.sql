-- CreateEnum
CREATE TYPE "SecurityGroup" AS ENUM ('Admin', 'Supervisor', 'User');

-- CreateTable
CREATE TABLE "Organization" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contact_email" TEXT,
    "phone_number" TEXT,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "password" TEXT NOT NULL,
    "org_id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "roleId" INTEGER,
    "locationId" INTEGER,
    "securityGroup" "SecurityGroup" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillCategory" (
    "id" SERIAL NOT NULL,
    "org_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "SkillCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "org_id" TEXT NOT NULL,
    "skill_category_id" INTEGER NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "org_id" TEXT NOT NULL,
    "parent_id" INTEGER,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoleSkillTarget" (
    "id" SERIAL NOT NULL,
    "role_id" INTEGER NOT NULL,
    "skill_id" INTEGER NOT NULL,
    "target" INTEGER NOT NULL,

    CONSTRAINT "RoleSkillTarget_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "org_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSkill" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "skillId" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 0,
    "proficiency" INTEGER NOT NULL DEFAULT 0,
    "interest" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "UserSkill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Training" (
    "id" SERIAL NOT NULL,
    "org_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "target" TEXT NOT NULL,
    "skillId" INTEGER NOT NULL,
    "duration" TEXT NOT NULL,
    "description" TEXT,
    "url" TEXT,
    "instructor" TEXT,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),

    CONSTRAINT "Training_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillAuditLog" (
    "id" SERIAL NOT NULL,
    "org_id" TEXT NOT NULL,
    "evidenceId" INTEGER,
    "skill_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "approver_id" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "feedback" TEXT,
    "rating" INTEGER,

    CONSTRAINT "SkillAuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EvidenceType" (
    "id" SERIAL NOT NULL,
    "org_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "EvidenceType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GeneralEvidence" (
    "id" SERIAL NOT NULL,
    "auditId" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,
    "evidenceId" INTEGER,
    "org_id" TEXT NOT NULL,
    "project_title" TEXT,
    "roles" TEXT,
    "responsibilities" TEXT,
    "duration" TEXT,
    "technologies_used" TEXT,
    "results" TEXT,
    "proficiency" INTEGER,
    "certification_name" TEXT,
    "issuing_organization" TEXT,
    "date_obtained" TIMESTAMP(3),
    "certification_url" TEXT,
    "assessment_name" TEXT,
    "date_taken" TIMESTAMP(3),
    "score_grade" TEXT,
    "comments" TEXT,

    CONSTRAINT "GeneralEvidence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrainingEvidence" (
    "id" SERIAL NOT NULL,
    "auditId" INTEGER NOT NULL,
    "evidenceId" INTEGER NOT NULL,
    "trainingId" INTEGER NOT NULL,
    "certification_url" TEXT,
    "comments" TEXT,
    "org_id" TEXT NOT NULL,

    CONSTRAINT "TrainingEvidence_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Organization_contact_email_key" ON "Organization"("contact_email");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_phone_number_key" ON "Organization"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "User_emailAddress_key" ON "User"("emailAddress");

-- CreateIndex
CREATE UNIQUE INDEX "GeneralEvidence_evidenceId_key" ON "GeneralEvidence"("evidenceId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillCategory" ADD CONSTRAINT "SkillCategory_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_skill_category_id_fkey" FOREIGN KEY ("skill_category_id") REFERENCES "SkillCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "Role"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoleSkillTarget" ADD CONSTRAINT "RoleSkillTarget_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoleSkillTarget" ADD CONSTRAINT "RoleSkillTarget_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSkill" ADD CONSTRAINT "UserSkill_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSkill" ADD CONSTRAINT "UserSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Training" ADD CONSTRAINT "Training_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Training" ADD CONSTRAINT "Training_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillAuditLog" ADD CONSTRAINT "SkillAuditLog_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillAuditLog" ADD CONSTRAINT "SkillAuditLog_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillAuditLog" ADD CONSTRAINT "SkillAuditLog_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillAuditLog" ADD CONSTRAINT "SkillAuditLog_approver_id_fkey" FOREIGN KEY ("approver_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EvidenceType" ADD CONSTRAINT "EvidenceType_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneralEvidence" ADD CONSTRAINT "GeneralEvidence_auditId_fkey" FOREIGN KEY ("auditId") REFERENCES "SkillAuditLog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneralEvidence" ADD CONSTRAINT "GeneralEvidence_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "EvidenceType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneralEvidence" ADD CONSTRAINT "GeneralEvidence_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingEvidence" ADD CONSTRAINT "TrainingEvidence_auditId_fkey" FOREIGN KEY ("auditId") REFERENCES "SkillAuditLog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingEvidence" ADD CONSTRAINT "TrainingEvidence_evidenceId_fkey" FOREIGN KEY ("evidenceId") REFERENCES "EvidenceType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingEvidence" ADD CONSTRAINT "TrainingEvidence_trainingId_fkey" FOREIGN KEY ("trainingId") REFERENCES "Training"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingEvidence" ADD CONSTRAINT "TrainingEvidence_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
