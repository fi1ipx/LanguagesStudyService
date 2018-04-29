-- --------------------------------------------------------
-- Хост:                         localhost
-- Версия сервера:               5.7.20-log - MySQL Community Server (GPL)
-- Операционная система:         Win64
-- HeidiSQL Версия:              9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Дамп структуры базы данных langstudy
CREATE DATABASE IF NOT EXISTS `langstudy` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `langstudy`;

-- Дамп структуры для таблица langstudy.groups
CREATE TABLE IF NOT EXISTS `groups` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `group_name` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Дамп данных таблицы langstudy.groups: ~2 rows (приблизительно)
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
REPLACE INTO `groups` (`id`, `group_name`) VALUES
	(1, 'USERS'),
	(2, 'ADMINS');
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;

-- Дамп структуры для таблица langstudy.group_authorities
CREATE TABLE IF NOT EXISTS `group_authorities` (
  `group_id` bigint(20) NOT NULL,
  `authority` varchar(50) NOT NULL,
  KEY `fk_group_authorities_group` (`group_id`),
  CONSTRAINT `fk_group_authorities_group` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Дамп данных таблицы langstudy.group_authorities: ~3 rows (приблизительно)
/*!40000 ALTER TABLE `group_authorities` DISABLE KEYS */;
REPLACE INTO `group_authorities` (`group_id`, `authority`) VALUES
	(2, 'ROLE_ADMIN'),
	(1, 'ROLE_USER'),
	(2, 'ROLE_USER');
/*!40000 ALTER TABLE `group_authorities` ENABLE KEYS */;

-- Дамп структуры для таблица langstudy.group_members
CREATE TABLE IF NOT EXISTS `group_members` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL DEFAULT '0',
  `group_id` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_group_members_group` (`group_id`),
  CONSTRAINT `fk_group_members_group` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Дамп данных таблицы langstudy.group_members: ~2 rows (приблизительно)
/*!40000 ALTER TABLE `group_members` DISABLE KEYS */;
REPLACE INTO `group_members` (`id`, `username`, `group_id`) VALUES
	(1, 'user', 1),
	(2, 'admin', 2);
/*!40000 ALTER TABLE `group_members` ENABLE KEYS */;

-- Дамп структуры для таблица langstudy.languages
CREATE TABLE IF NOT EXISTS `languages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- Дамп данных таблицы langstudy.languages: ~3 rows (приблизительно)
/*!40000 ALTER TABLE `languages` DISABLE KEYS */;
REPLACE INTO `languages` (`id`, `name`) VALUES
	(1, 'English'),
	(2, 'Russian'),
	(3, 'Turkish');
/*!40000 ALTER TABLE `languages` ENABLE KEYS */;

-- Дамп структуры для таблица langstudy.persistent_logins
CREATE TABLE IF NOT EXISTS `persistent_logins` (
  `username` varchar(64) NOT NULL,
  `series` varchar(64) NOT NULL,
  `token` varchar(64) NOT NULL,
  `last_used` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`series`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Дамп данных таблицы langstudy.persistent_logins: ~1 rows (приблизительно)
/*!40000 ALTER TABLE `persistent_logins` DISABLE KEYS */;
REPLACE INTO `persistent_logins` (`username`, `series`, `token`, `last_used`) VALUES
	('admin', 'KmJMlz8HW8614xp8lhRfmg==', 'eh1zTSNFmcS1wuSxVRTJ7g==', '2018-04-29 16:00:42');
/*!40000 ALTER TABLE `persistent_logins` ENABLE KEYS */;

-- Дамп структуры для таблица langstudy.translations
CREATE TABLE IF NOT EXISTS `translations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `word_id` int(11) NOT NULL DEFAULT '0',
  `tr_lang_id` int(11) NOT NULL DEFAULT '0',
  `translation` varchar(1000) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `fk_word_id` (`word_id`),
  KEY `fk_tr_lang_id` (`tr_lang_id`),
  CONSTRAINT `fk_tr_lang_id` FOREIGN KEY (`tr_lang_id`) REFERENCES `languages` (`id`),
  CONSTRAINT `fk_word_id` FOREIGN KEY (`word_id`) REFERENCES `words` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Дамп данных таблицы langstudy.translations: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `translations` DISABLE KEYS */;
/*!40000 ALTER TABLE `translations` ENABLE KEYS */;

-- Дамп структуры для таблица langstudy.users
CREATE TABLE IF NOT EXISTS `users` (
  `username` varchar(50) NOT NULL,
  `password` varchar(64) NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Дамп данных таблицы langstudy.users: ~1 rows (приблизительно)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
REPLACE INTO `users` (`username`, `password`, `enabled`) VALUES
	('admin', '$2a$10$EblZqNptyYvcLm/VwDCVAuBjzZOI7khzdyGPBr08PpIi0na624b8.', 1),
	('user', '$2a$10$EblZqNptyYvcLm/VwDCVAuBjzZOI7khzdyGPBr08PpIi0na624b8.', 1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Дамп структуры для таблица langstudy.words
CREATE TABLE IF NOT EXISTS `words` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lang_id` int(11) NOT NULL,
  `word` varchar(255) NOT NULL,
  `rank` int(11) NOT NULL DEFAULT '0',
  `definition` varchar(1000) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `fk_lang_id` (`lang_id`),
  CONSTRAINT `fk_lang_id` FOREIGN KEY (`lang_id`) REFERENCES `languages` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- Дамп данных таблицы langstudy.words: ~1 rows (приблизительно)
/*!40000 ALTER TABLE `words` DISABLE KEYS */;
REPLACE INTO `words` (`id`, `lang_id`, `word`, `rank`, `definition`) VALUES
	(2, 1, 'offensive', 2, 'causing someone to feel deeply hurt, upset, or angry. attack');
/*!40000 ALTER TABLE `words` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
