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

-- Дамп структуры для таблица langstudy.languages
CREATE TABLE IF NOT EXISTS `languages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- Дамп данных таблицы langstudy.languages: ~6 rows (приблизительно)
/*!40000 ALTER TABLE `languages` DISABLE KEYS */;
REPLACE INTO `languages` (`id`, `name`) VALUES
	(1, 'English'),
	(2, 'Russian'),
	(3, 'Turkish'),
	(4, 'Arabic'),
	(5, 'Hindi'),
	(6, 'Sanskrit');
/*!40000 ALTER TABLE `languages` ENABLE KEYS */;

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
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL DEFAULT '0',
  `middle_name` varchar(100) DEFAULT '0',
  `last_name` varchar(100) NOT NULL DEFAULT '0',
  `login` varchar(100) NOT NULL DEFAULT '0',
  `password` varchar(100) NOT NULL DEFAULT '0',
  `email` varchar(100) NOT NULL DEFAULT '0',
  `admin` tinyint(1) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Дамп данных таблицы langstudy.users: ~2 rows (приблизительно)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
REPLACE INTO `users` (`id`, `first_name`, `middle_name`, `last_name`, `login`, `password`, `email`, `admin`) VALUES
	(1, 'Marco', 'Antonio', 'Barrera', 'marco', 'secret', 'marco@yahoo.com', 0),
	(2, 'Donald', '0', 'Newman', 'djt', 'donn', 'donald@yahoo.com', 1);
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- Дамп данных таблицы langstudy.words: ~2 rows (приблизительно)
/*!40000 ALTER TABLE `words` DISABLE KEYS */;
REPLACE INTO `words` (`id`, `lang_id`, `word`, `rank`, `definition`) VALUES
	(2, 1, 'offensive', 2, 'causing someone to feel deeply hurt, upset, or angry. attack'),
	(4, 1, 'perception', 3, 'the ability to see, hear, or become aware of something through the senses');
/*!40000 ALTER TABLE `words` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
