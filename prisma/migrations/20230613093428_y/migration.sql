-- AlterTable
ALTER TABLE `comment` ADD COLUMN `userId` INTEGER NULL;

-- CreateIndex
CREATE INDEX `comment_ibfk_1` ON `comment`(`postId`);

-- CreateIndex
CREATE INDEX `comment_user_fk` ON `comment`(`userId`);

-- AddForeignKey
ALTER TABLE `comment` ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `post`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `comment` ADD CONSTRAINT `comment_user_fk` FOREIGN KEY (`userId`) REFERENCES `userr`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
