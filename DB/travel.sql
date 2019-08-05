-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Traveldb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `Traveldb` ;

-- -----------------------------------------------------
-- Schema Traveldb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Traveldb` DEFAULT CHARACTER SET utf8 ;
USE `Traveldb` ;

-- -----------------------------------------------------
-- Table `travel`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `travel` ;

CREATE TABLE IF NOT EXISTS `travel` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  `distance` DOUBLE NULL,
  `description` VARCHAR(1000) NULL,
  `vehicle` VARCHAR(200) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS travel@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'travel'@'localhost' IDENTIFIED BY 'travel';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'travel'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `travel`
-- -----------------------------------------------------
START TRANSACTION;
USE `Traveldb`;
INSERT INTO `travel` (`id`, `name`, `distance`, `description`, `vehicle`) VALUES (1, 'Fort Worth ,Texas', 778.56, 'The drive was very nice, took an alternate route instead of the big highways', 'Honda Civic');
INSERT INTO `travel` (`id`, `name`, `distance`, `description`, `vehicle`) VALUES (2, 'West Palm Beach, Florida', 1532.45, 'The drive was very long. Took the major high ways to reach my destination', 'Toyota Camry');
INSERT INTO `travel` (`id`, `name`, `distance`, `description`, `vehicle`) VALUES (3, 'Miami', 1578.2, 'Terriable traffic that day took alot long than usual', 'Honda Civic');

COMMIT;

