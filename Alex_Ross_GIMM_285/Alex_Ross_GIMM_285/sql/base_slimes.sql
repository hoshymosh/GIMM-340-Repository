-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: student-databases.cvode4s4cwrc.us-west-2.rds.amazonaws.com
-- Generation Time: May 08, 2025 at 08:47 AM
-- Server version: 8.0.35
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `alexross379`
--

-- --------------------------------------------------------

--
-- Table structure for table `base_slimes`
--

CREATE TABLE `base_slimes` (
  `id` int NOT NULL,
  `image` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `diet_id` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `food_pref` varchar(255) NOT NULL,
  `toy_pref` varchar(255) NOT NULL,
  `can_largo` tinyint(1) NOT NULL,
  `Notes` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `base_slimes`
--

INSERT INTO `base_slimes` (`id`, `image`, `name`, `diet_id`, `food_pref`, `toy_pref`, `can_largo`, `Notes`) VALUES
(1, 'https://tiermaker.com/images/media/template_images/2024/17719991/slime-rancher-1and2-all-slimes-grey-labyrinth-update-17719991/1000019212.png', 'Pink', '5', 'No Preference', 'Beach Ball', 1, ''),
(2, 'https://tiermaker.com/images/media/template_images/2024/17719991/slime-rancher-1and2-all-slimes-grey-labyrinth-update-17719991/1000019213.png', 'Tabby', '3', 'Stony Hen', 'Yarn Ball', 1, ''),
(3, 'https://tiermaker.com/images/media/template_images/2024/17719991/slime-rancher-1and2-all-slimes-grey-labyrinth-update-17719991/1000019214.png', 'Phosphor', '1', 'Cuberry', 'Night Light', 1, 'Only spawns at night.'),
(4, 'https://tiermaker.com/images/media/template_images/2024/17719991/slime-rancher-1and2-all-slimes-grey-labyrinth-update-17719991/1000019229.png', 'Rock', '2', 'Heart Beet', 'Big Rock', 1, 'Can injure the player.'),
(5, 'https://tiermaker.com/images/media/template_images/2024/17719991/slime-rancher-1and2-all-slimes-grey-labyrinth-update-17719991/1000019230.png', 'Boom', '3', 'Briar Hen', 'Bomb Ball', 1, 'Can injure the player.'),
(6, 'https://tiermaker.com/images/media/template_images/2024/17719991/slime-rancher-1and2-all-slimes-grey-labyrinth-update-17719991/1000019215.png', 'Honey', '1', 'Mint Mango', 'Buzzy Bee', 1, ''),
(7, 'https://tiermaker.com/images/media/template_images/2024/17719991/slime-rancher-1and2-all-slimes-grey-labyrinth-update-17719991/1000019216.png', 'Puddle', '4', 'Water', 'Rubber Ducky', 0, 'Must be raised in a Pond or body of water.'),
(8, 'https://tiermaker.com/images/media/template_images/2024/17719991/slime-rancher-1and2-all-slimes-grey-labyrinth-update-17719991/1000019232.png', 'Fire', '4', 'Ash', 'Charcoal Brick', 0, 'Must be raised in an Incinerator. Can injure the player.'),
(9, 'https://tiermaker.com/images/media/template_images/2024/17719991/slime-rancher-1and2-all-slimes-grey-labyrinth-update-17719991/1000019231.png', 'Crystal', '2', 'Odd Onion', 'Crystal Ball', 1, 'Can injure the player.'),
(10, 'https://tiermaker.com/images/media/template_images/2024/17719991/slime-rancher-1and2-all-slimes-grey-labyrinth-update-17719991/1000019224.png', 'Hunter', '3', 'Roostro', 'Stuffed Chicken', 1, 'Prone to becoming Feral. Can injure the player.'),
(11, 'https://tiermaker.com/images/media/template_images/2024/17719991/slime-rancher-1and2-all-slimes-grey-labyrinth-update-17719991/1000019222.png', 'Saber', '3', 'Thundercluck Hen', 'Stego Buddy', 1, ''),
(12, 'https://tiermaker.com/images/media/template_images/2024/17719991/slime-rancher-1and2-all-slimes-grey-labyrinth-update-17719991/1000019225.png', 'Tangle', '3', 'Painted Hen', 'Sol Mate', 1, 'Only spawns during a Level 3 Pollen Storm.'),
(13, 'https://tiermaker.com/images/media/template_images/2024/17719991/slime-rancher-1and2-all-slimes-grey-labyrinth-update-17719991/1000019226.png', 'Dervish', '1', 'Prickle Pear', 'Gyro Top', 1, 'Only spawns during a Level 3 Wind Storm.'),
(14, 'https://tiermaker.com/images/media/template_images/2024/17719991/slime-rancher-1and2-all-slimes-grey-labyrinth-update-17719991/1000019220.png', 'Angler', '3', 'Sea Hen', 'Plushie Puffer Fish', 1, ''),
(15, 'https://tiermaker.com/images/media/template_images/2024/17719991/slime-rancher-1and2-all-slimes-grey-labyrinth-update-17719991/1000019219.png', 'Batty', '1', 'Pomegranite', 'Full Moon Ball', 1, ''),
(16, 'https://tiermaker.com/images/media/template_images/2024/17719991/slime-rancher-1and2-all-slimes-grey-labyrinth-update-17719991/1000019217.png', 'Cotton', '2', 'Water Lettuce', 'Bouncy Ball', 1, ''),
(17, 'https://tiermaker.com/images/media/template_images/2024/17719991/slime-rancher-1and2-all-slimes-grey-labyrinth-update-17719991/1000019218.png', 'Flutter', '4', 'Nectar', 'Glowbug', 1, ''),
(18, 'https://tiermaker.com/images/media/template_images/2024/17719991/slime-rancher-1and2-all-slimes-grey-labyrinth-update-17719991/1000019221.png', 'Ringtail', '5', 'No Preference', 'Trashcan', 1, 'Turns to stone during the day, and reverts at night. Will continually eat without producing Plorts when it would otherwise be full.'),
(19, 'https://tiermaker.com/images/media/template_images/2024/17719991/slime-rancher-1and2-all-slimes-grey-labyrinth-update-17719991/1000019223.png', 'Yolky', '4', 'None', 'None', 0, 'Must be raised in a Coop. Occasionally causes nearby chickens to lay a giant egg containing 5 Chickadoos and, if the egg is fresh, five Yolky Plorts. Spawns rarely from Nests found in the wild.'),
(20, 'https://tiermaker.com/images/media/template_images/2024/17719991/slime-rancher-1and2-all-slimes-grey-labyrinth-update-17719991/1000019235.png', 'Shadow', '4', 'None', 'None', 0, 'Can not be stored in the Vacpack. Drops Plorts when hit by an Item.'),
(21, 'https://tiermaker.com/images/media/template_images/2024/17719991/slime-rancher-1and2-all-slimes-grey-labyrinth-update-17719991/1000019227.png', 'Twin', '1', 'Polaricherry', 'None', 1, ''),
(22, 'https://tiermaker.com/images/media/template_images/2024/17719991/slime-rancher-1and2-all-slimes-grey-labyrinth-update-17719991/1000019228.png', 'Sloomber', '3', 'Candied Hen', 'None', 1, ''),
(23, 'https://tiermaker.com/images/media/template_images/2024/17719991/slime-rancher-1and2-all-slimes-grey-labyrinth-update-17719991/1000019234.png', 'Lucky', '3', 'No Preference', 'None', 0, 'Can not be stored in the Vacpack. Drops Coins when fed Meat.'),
(24, 'https://tiermaker.com/images/media/template_images/2024/17719991/slime-rancher-1and2-all-slimes-grey-labyrinth-update-17719991/1000019233.png', 'Golden', '4', 'None', 'None', 0, 'Can not be stored in the Vacpack. Drops Plorts when hit by an Item.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `base_slimes`
--
ALTER TABLE `base_slimes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `base_slimes`
--
ALTER TABLE `base_slimes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
