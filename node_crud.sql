-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 12, 2023 at 04:41 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node_crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` float(10,2) NOT NULL,
  `description` text NOT NULL,
  `photo` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `description`, `photo`, `created_at`) VALUES
(11, 'Hello hhhhh', 123.00, 'Hello World', '/n2Cg6yfj4woDOYqjDp1EPbFVMRT6u8oWdhSh4wxBResmnLxnY7.jpg', '2023-02-12 15:15:54'),
(12, 'Hello', 123.00, 'Hello World', '/OYyqGq2ntm7z6vfLuSCIAu9CJbfgDpjxy9TEVIoNXundefinedBbguWnnS.jpg', '2023-02-12 14:04:00'),
(14, 'junior', 210.00, 'Hello sie man yoo man', '/ileDwye3n29y6BwgGlU60yfDrNI4vq5EM2ZWRAYLjDUtxn5OaZ.jpg', '2023-02-12 14:19:30'),
(16, 'Hello World 43', 43.00, 'gdgdghdfhf gdgdfgfdgdgf', '/40bdJDTZjAgZBRxHprql70FfdccY2TeKggSqdU2baB8662OJAd.jpg', '2023-02-12 14:36:15'),
(18, 'Hello World', 32.00, 'Hello sir i love you', '/jJqE80QTkLI75gNdjeQITGiS9WJbV10SsFz3Hykn3Ivm3zskor.jpg', '2023-02-12 15:04:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
