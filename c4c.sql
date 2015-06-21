-- phpMyAdmin SQL Dump
-- version 4.3.4
-- http://www.phpmyadmin.net
--
-- Host: lunaroverlord.cn3imgfeosz7.eu-west-1.rds.amazonaws.com:3306
-- Generation Time: Jun 21, 2015 at 05:28 PM
-- Server version: 5.6.21-log
-- PHP Version: 5.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `c4c`
--

-- --------------------------------------------------------

--
-- Table structure for table `links`
--

CREATE TABLE IF NOT EXISTS `links` (
  `uid` int(11) NOT NULL,
  `sid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `links`
--

INSERT INTO `links` (`uid`, `sid`) VALUES
(1, 1),
(1, 2),
(1, 4),
(2, 1),
(2, 5),
(3, 6),
(3, 1),
(3, 2),
(3, 3),
(3, 4),
(4, 5),
(4, 2),
(4, 6),
(4, 4),
(5, 5),
(5, 1),
(5, 3),
(6, 4),
(6, 6),
(6, 2),
(7, 1),
(7, 5),
(7, 3),
(8, 1),
(8, 2),
(8, 6),
(9, 3),
(9, 4),
(9, 5),
(10, 2),
(10, 6),
(10, 1);

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE IF NOT EXISTS `services` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `name`) VALUES
(1, 'shelter'),
(2, 'shower'),
(3, 'kit'),
(4, 'chat'),
(5, 'wifi'),
(6, 'house');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `name` varchar(200) COLLATE utf8_bin NOT NULL,
  `pw` varchar(32) COLLATE utf8_bin NOT NULL,
  `email` varchar(50) COLLATE utf8_bin NOT NULL,
  `location` varchar(20) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `pw`, `email`, `location`) VALUES
(1, 'Olaf Vandans', 'qwerty', 'olafs@olafs.eu', '55.9443131,-3.184752'),
(2, 'Judy Duong', 'qwerty', 'judy@judy.ca', '55.9443131,-3.184752'),
(3, 'John Mclain', 'diehard', 'yippie@kayee.mofo', '55.9531566,-3.196656'),
(4, 'Joe Sample', 'qwerty', 'joe@sample.eu', '55.9531724,-3.196656'),
(5, 'Miguel do Ferreira', 'felicidade', 'miguel@tropico.br', '55.9412654,-3.177310'),
(6, 'April Summers', 'cowabunga', 'april@summers.com', '55.9423469,-3.177731'),
(7, 'Monthy Christo', 'qwerty', 'the@countnet.fr', '55.9579236,-3.193897'),
(8, 'William Wallace', 'qwerty', 'bill@freedom.net', '55.9274863,-3.199434'),
(9, 'Mark Twain', 'qwerty', 'mark@twain.us', '55.9283383,-3.208937'),
(10, 'Graham Smarts', 'qwerty', 'graham@smartconcepts.eu', '55.9502215,-3.183970');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
