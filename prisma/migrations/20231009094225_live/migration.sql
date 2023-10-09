-- CreateTable
CREATE TABLE "comment" (
    "id" SERIAL NOT NULL,
    "content" VARCHAR(255) NOT NULL,
    "postid" INTEGER,
    "userid" INTEGER,
    "name" VARCHAR(255),
    "created_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "followrequest" (
    "id" SERIAL NOT NULL,
    "requesterid" INTEGER NOT NULL,
    "targetid" INTEGER NOT NULL,
    "status" VARCHAR(191) NOT NULL,

    CONSTRAINT "followrequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER,
    "content" VARCHAR(255),
    "header" VARCHAR(255),
    "created_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "url" VARCHAR(300),

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userr" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "roles" VARCHAR(255) NOT NULL,
    "token" VARCHAR(255),
    "is_private" BOOLEAN DEFAULT false,
    "url" VARCHAR(300),
    "otp" INTEGER,
    "request" BOOLEAN DEFAULT false,

    CONSTRAINT "userr_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_ibfk_1" FOREIGN KEY ("postid") REFERENCES "post"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_user_fk" FOREIGN KEY ("userid") REFERENCES "userr"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "followrequest" ADD CONSTRAINT "follow_request_requester_fk" FOREIGN KEY ("requesterid") REFERENCES "userr"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "followrequest" ADD CONSTRAINT "follow_request_target_fk" FOREIGN KEY ("targetid") REFERENCES "userr"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_ibfk_1" FOREIGN KEY ("userid") REFERENCES "userr"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
