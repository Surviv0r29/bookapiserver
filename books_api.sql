-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 11, 2023 at 05:51 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `books_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `discountRate` int(11) DEFAULT NULL,
  `coverImage` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`id`, `title`, `description`, `discountRate`, `coverImage`, `price`) VALUES
(1, 'title1', 'A classic novel by F. Scott Fitzgerald.', 10, 'https://m.media-amazon.com/images/I/91bWtphm61L._AC_UF1000,1000_QL80_.jpg', '15.99'),
(2, 'title2', 'A classic novel by J.K.Rowling', 10, 'https://m.media-amazon.com/images/I/91bWtphm61L._AC_UF1000,1000_QL80_.jpg', '15.99'),
(3, 'title3', 'A classic novel by J.K.Rowling', 10, 'https://m.media-amazon.com/images/I/91bWtphm61L._AC_UF1000,1000_QL80_.jpg', '15.99');

-- --------------------------------------------------------

--
-- Table structure for table `book_user_books_user_book`
--

CREATE TABLE `book_user_books_user_book` (
  `bookId` int(11) NOT NULL,
  `userBookId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `balance` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user_book`
--

CREATE TABLE `user_book` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `bookId` int(11) NOT NULL,
  `purchaseDate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `book_user_books_user_book`
--
ALTER TABLE `book_user_books_user_book`
  ADD PRIMARY KEY (`bookId`,`userBookId`),
  ADD KEY `IDX_b1080ad08b135da1698e9e92f0` (`bookId`),
  ADD KEY `IDX_e47bf09cd1acd2dacd18fd1b05` (`userBookId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_book`
--
ALTER TABLE `user_book`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_ab47037d446ad35a3437ad77170` (`userId`),
  ADD KEY `FK_82b430d61bfdb4e840329b48170` (`bookId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_book`
--
ALTER TABLE `user_book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `book_user_books_user_book`
--
ALTER TABLE `book_user_books_user_book`
  ADD CONSTRAINT `FK_b1080ad08b135da1698e9e92f03` FOREIGN KEY (`bookId`) REFERENCES `book` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_e47bf09cd1acd2dacd18fd1b05a` FOREIGN KEY (`userBookId`) REFERENCES `user_book` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_book`
--
ALTER TABLE `user_book`
  ADD CONSTRAINT `FK_82b430d61bfdb4e840329b48170` FOREIGN KEY (`bookId`) REFERENCES `book` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_ab47037d446ad35a3437ad77170` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
