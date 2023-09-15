-- CreateTable
CREATE TABLE `followRequest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `requesterId` INTEGER NOT NULL,
    `targetId` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    INDEX `follow_request_requester_fk`(`requesterId`),
    INDEX `follow_request_target_fk`(`targetId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `followRequest` ADD CONSTRAINT `follow_request_requester_fk` FOREIGN KEY (`requesterId`) REFERENCES `userr`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `followRequest` ADD CONSTRAINT `follow_request_target_fk` FOREIGN KEY (`targetId`) REFERENCES `userr`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
