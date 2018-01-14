SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `crunchbase`
--
CREATE DATABASE `crunchbase` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `crunchbase`;

-- --------------------------------------------------------

--
-- Table structure for table `organizations`
--

CREATE TABLE IF NOT EXISTS `organizations` (
  `id` smallint(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `createdAt` timestamp,
  `updatedAt` timestamp,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `founders`
--

CREATE TABLE IF NOT EXISTS `founders` (
  `id` smallint(5) NOT NULL AUTO_INCREMENT,
  `organization_id` smallint(5) DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `bio` varchar(300) DEFAULT NULL,
  `age` int(11) NOT NULL,
  `createdAt` timestamp,
  `updatedAt` timestamp,
  PRIMARY KEY (`id`),
  KEY `id_founders` (`id`),
  FOREIGN KEY (organization_id) REFERENCES organizations(id)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;



