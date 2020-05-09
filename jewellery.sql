-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 09, 2020 at 05:09 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jewellery`
--

-- --------------------------------------------------------

--
-- Table structure for table `adminregistration`
--

CREATE TABLE `adminregistration` (
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `mobile` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `adminregistration`
--

INSERT INTO `adminregistration` (`email`, `password`, `fullname`, `mobile`) VALUES
('admin@gmail.com', '123', 'admin', '1234567890');

-- --------------------------------------------------------

--
-- Table structure for table `bill`
--

CREATE TABLE `bill` (
  `billID` int(11) NOT NULL,
  `datatime` datetime NOT NULL,
  `grandtotal` decimal(10,0) NOT NULL,
  `payment_method` varchar(100) NOT NULL,
  `city` varchar(200) NOT NULL,
  `zipcode` int(11) NOT NULL,
  `address` text NOT NULL,
  `remarks` text DEFAULT NULL,
  `personrecieved` varchar(100) DEFAULT 'NULL',
  `trackid` int(11) DEFAULT NULL,
  `companyname` varchar(300) DEFAULT 'NULL',
  `email` varchar(200) NOT NULL,
  `status` varchar(100) NOT NULL,
  `cancelledremarks` text DEFAULT NULL,
  `trackurl` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bill`
--

INSERT INTO `bill` (`billID`, `datatime`, `grandtotal`, `payment_method`, `city`, `zipcode`, `address`, `remarks`, `personrecieved`, `trackid`, `companyname`, `email`, `status`, `cancelledremarks`, `trackurl`) VALUES
(17, '2020-05-08 12:39:31', '83004', 'online', 'Muktasar', 143001, 'Neque saepe facilis ', 'Consequatur eos ut', 'Dolores aliqua Susc', 152354, 'Blackburn and Reynolds Traders', 'akshaykumar@gmail.com', 'Dispatched', NULL, 'https://www.jovihylikupor.com.au'),
(18, '2020-05-08 12:40:35', '9128', 'cash', 'Patiala', 17129, 'Tempora ut ea omnis ', 'Consequatur eos ut', 'Dolores aliqua Susc', 152354, 'Blackburn and Reynolds Traders', 'akshaykumar@gmail.com', 'Dispatched', NULL, 'https://www.jovihylikupor.com.au'),
(19, '2020-05-08 12:43:25', '9128', 'cash', 'Khanna', 91019, 'Cum anim irure minim', 'Blanditiis ipsa asp', NULL, 0, NULL, 'akshaykumar@gmail.com', 'cancelled', 'Quia fuga Nulla con', NULL),
(20, '2020-05-08 12:44:11', '9128', 'cash', 'Malerkotla', 31391, 'Mollit in id sed ips', 'Porro rerum aute dui', NULL, 0, NULL, 'akshaykumar@gmail.com', 'cancelled', 'Consequuntur vitae s', NULL),
(21, '2020-05-08 13:18:58', '9654', 'cash', 'Moga', 49541, 'Id perferendis culpa', 'Ad in quas blanditii', 'Voluptatibus sed aut', 661523, 'Barber Hampton Associates', 'aryankhanna510@gmail.com', 'Dispatched', NULL, 'https://www.rime.mobi');

-- --------------------------------------------------------

--
-- Table structure for table `billdetail`
--

CREATE TABLE `billdetail` (
  `billdetailid` int(11) NOT NULL,
  `price` float(10,2) NOT NULL,
  `quantity` int(11) NOT NULL,
  `productid` int(11) NOT NULL,
  `billid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `billdetail`
--

INSERT INTO `billdetail` (`billdetailid`, `price`, `quantity`, `productid`, `billid`) VALUES
(33, 65360.75, 1, 68, 17),
(34, 17643.12, 1, 71, 17),
(35, 9127.84, 1, 76, 18),
(36, 9127.84, 1, 76, 19),
(37, 9127.84, 1, 76, 20),
(38, 9654.30, 1, 67, 21);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `catid` int(11) NOT NULL,
  `catName` varchar(200) NOT NULL,
  `catDescp` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`catid`, `catName`, `catDescp`) VALUES
(1, 'Gold', 'Consequatur unde del'),
(2, 'Diamond', 'Ducimus voluptas no'),
(3, 'Platinum', 'Id error id sed qui '),
(4, 'Vivah', 'Molestias modi et au');

-- --------------------------------------------------------

--
-- Table structure for table `clientregistration`
--

CREATE TABLE `clientregistration` (
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `mobile` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `clientregistration`
--

INSERT INTO `clientregistration` (`email`, `password`, `fullname`, `mobile`) VALUES
('akshaykumar@gmail.com', '1234567890', 'Akshay Kumar', '8965471236'),
('aryankhanna510@gmail.com', '1234567890', 'Aryan Khanna', '8847684874'),
('wanyvop@mailinator.net', 'Pa$$w0rd!', 'Nita Hardin', '8471131002');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `pid` int(11) NOT NULL,
  `productname` varchar(200) NOT NULL,
  `productprice` int(11) NOT NULL,
  `productstock` int(11) NOT NULL,
  `productdiscount` int(11) NOT NULL,
  `productdesc` text NOT NULL,
  `productimage` text NOT NULL,
  `subid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`pid`, `productname`, `productprice`, `productstock`, `productdiscount`, `productdesc`, `productimage`, `subid`) VALUES
(66, 'Gold 22KT GOLD HOOP EARRINGS Earring', 15641, 50, 10, 'These hoop earrings are embellished with simple engravings that give it a rather rustic feel. Make every moment a special one with this pair.', '8885eleni-koureas-0Hv7W_p410w-unsplash.jpg', 4),
(67, 'Gold 22KT GOLD STUD EARRINGS Earring', 10727, 49, 10, 'Want a pair of earrings that can take on the challenge of both formal and casual occasions? This is just what you are looking for! These lustrous earrings are up for the task of giving you an exquisite glow wherever you go', '2554featured1.jpg', 4),
(68, 'Gold 22KT GOLD DROP EARRINGS Earring', 76895, 49, 15, 'Luminous pearls and delicately crafted gold give these drop earrings an ethereal aura. Let your mystical beauty shine through with a little help from this pair.', '3551blog8.jpg', 4),
(69, 'Gold 22KT GOLD AND SYNTHETIC STONES DROP EARRINGS Earring', 24116, 50, 12, 'Two little paisley details dangle from these floral drop earrings. Add just the right amount of glamour to your everyday style with this pair.', '9767blog2.jpg', 4),
(70, 'Gold 22KT GOLD AND SYNTHETIC STONE PENDANT Pendant', 42441, 10, 17, 'Embrace the grand magnificence of the sun with this pendant. It is an ode to the source of life and light and makes for an exuberant accessory to your ethnic style.', '7065product-9.jpg', 5),
(71, 'Gold 22KT YELLOW GOLD PENDANT Pendant', 21516, 19, 18, 'This 22KT gold pendant by Tanishq for women is in the shape of a kite with extended edges. Four parallel gold bars with polished and textured finishes together house a round pearl-like detail on the inside, forming the crux of this design. The pendant has a small O-ring connected to a spacious and hollow bail on top', '9811sp1.jpg', 5),
(72, 'Gold 22KT GOLD HEART PENDANT Pendant', 30026, 22, 10, 'This 22KT yellow gold pendant features a heart design. The centre features a rhombus design, which is decorated with intricately woven twisted filigree elements and a red stone. Two C-shaped elements, adorned with twisted filigree, together with the rhombus element renders a heart design. Radiating from the heart design are dewdrop-shaped petals which are arranged to render a half-flower design. This flower element is embellished with rawa balls. The high-polished pendant is connected to spacious bails. This pendant makes an elegant ornament for all occasions', '603product-17.jpg', 5),
(73, 'Gold 22KT GOLD AND POLKY DIAMOND PENDANT Pendant', 40069, 50, 23, 'Polky diamonds illuminate this magnificent pendant and make it a shining piece of jewellery. Pair this with your best ethnic ensemble and enchant onlookers at any occasion.', '5541product14.jpg', 5),
(74, 'Gold 22KT GOLD FINGER RING Finger Ring', 26414, 100, 10, 'This pinwheel-inspired finger ring is an exquisite accessory. Its sleek and elegant design will add a charming magnificence to your occasion-wear.', '6821banner4.jpg', 6),
(75, 'Gold 22KT GOLD FINGER RING Finger Ring', 20136, 100, 11, 'This whimsical design makes a delightful ring that adds polish to your stylish, everyday ensemble.', '468category3.png', 6),
(76, 'Gold 22KT GOLD FINGER RING Finger Ring', 10256, 124, 11, 'Carry the divine protection, strength and courage of Lord Hanuman no matter where you go, with this gold ring. It\'s a thoughtful and auspicious gift for a loved one too.', '3394camilla-carvalho-Y9dcQpOIMHQ-unsplash.jpg', 6),
(77, 'Gold 22KT GOLD FINGER RING Finger Ring', 15368, 50, 11, 'Carry the divine protection, strength and courage of Lord Hanuman no matter where you go, with this gold ring. It\'s a thoughtful and auspicious gift for a loved one too.', '3016category2.png', 6),
(78, 'Diamond KENDALL AMETHYST HOOP EARRINGS Earring', 10682, 100, 10, 'Heart shaped amethyst adds a touch of romance to this pair of hoop earrings. The contemporary design of these earrings will make you look charming each time you adorn it.', '3024adv3.jpg', 8),
(79, 'Diamond MOHANA RUBY STUD EARRINGS Earring', 21734, 100, 11, 'Blood red rubies ensconced in a stunning yellow gold setting lend these earrings a hypnotic beauty. Give just the right pop of colour to your work-wear with this pair.', '7981attractive-beautiful-beautiful-girl-beauty-458766.jpg', 8),
(80, 'Diamond AQUINN DIAMOND STUD EARRINGS Earring', 36512, 23, 11, 'Blood red rubies ensconced in a stunning yellow gold setting lend these earrings a hypnotic beauty. Give just the right pop of colour to your work-wear with this pair.', '159img2-middle.jpg', 8),
(81, 'Diamond MEDHA RUBY STUD EARRINGS Earring', 24562, 20, 11, 'Blood red rubies ensconced in a stunning yellow gold setting lend these earrings a hypnotic beauty. Give just the right pop of colour to your work-wear with this pair.', '884category8.png', 8),
(82, 'Diamond 18KT Gold and Diamond Pendant Pendant', 96231, 60, 25, 'The dainty floral design makes this pendant extremely versatile and it goes with both, your western and Indo-western ensembles! The chain in the image is for representative purpose only and the actual product comes without a chain.', '7049category9.png', 9),
(83, 'Diamond ADINA DIAMOND PENDANT Pendant', 23654, 50, 23, 'The dainty floral design makes this pendant extremely versatile and it goes with both, your western and Indo-western ensembles! The chain in the image is for representative purpose only and the actual product comes without a chain.', '6885alex-chambers-TxCbfMc854c-unsplash.jpg', 9),
(84, 'Diamond 18KT Yellow Gold Diamond Pendant', 96231, 100, 26, 'These petite stud earrings will add a fun pop of colour to your everyday wear. Whether it is for wok or a night about town, these earrings are the perfect choice.', '1683category5.png', 9),
(85, 'Diamond Lili Floral Stud Earings Pendant', 56320, 40, 10, 'These petite stud earrings will add a fun pop of colour to your everyday wear. Whether it is for wok or a night about town, these earrings are the perfect choice.', '1747insta1.jpg', 9),
(86, 'Diamond 18KT Gold and Diamond Ring Finger Ring', 26351, 50, 11, 'Simple and elegant just like you! Shine bright like the diamond which is the highlight of this pretty piece.', '1807product-4.jpg', 10),
(87, 'Diamond JULIANA SOLITAIRE RING Finger Ring', 36522, 20, 23, 'Simple and elegant just like you! Shine bright like the diamond which is the highlight of this pretty piece.', '3523category6.png', 10),
(88, 'Diamond 18KT GOLD AND DIAMOND FINGER RING Finger Ring', 86324, 30, 22, 'Simple and elegant just like you! Shine bright like the diamond which is the highlight of this pretty piece.', '6161sp4.jpg', 10),
(89, 'Diamond 22KT GOLD AND DIAMOND FINGER RING Finger Ring', 56321, 50, 23, 'Simple and elegant just like you! Shine bright like the diamond which is the highlight of this pretty piece.', '7637product-5.jpg', 10),
(90, 'Diamond Betsi Diamond Bracelets Bracelets', 89365, 50, 25, 'Inspired by the wrist watch, this bracelet is a symbol of timeless sophistication. It is an ideal fit for the ones who want to radiate a refined persona.', '7538blog10.jpg', 11),
(91, 'Diamond Quincy Diamond Bracelet Bracelets', 36256, 60, 23, 'Inspired by the wrist watch, this bracelet is a symbol of timeless sophistication. It is an ideal fit for the ones who want to radiate a refined persona.', '9697banner3.jpg', 11),
(92, 'Platinum 950 PLATINUM STUD EARRINGS Earring', 64596, 50, 23, 'The richness of Platinum is held together by the precious diamond on this contemporary design. This pair makes for the perfect gift to people who bind everyone together with their precious souls.', '7180category8.png', 12),
(93, 'Platinum 950 PLATINUM AND DIAMOND STUD EARRINGS Earring', 96321, 50, 39, 'The richness of Platinum is held together by the precious diamond on this contemporary design. This pair makes for the perfect gift to people who bind everyone together with their precious souls.', '9258blog8.jpg', 12),
(94, 'Platinum Aspun Platinum Stud Earings Earring', 56329, 50, 22, 'Like a bow adds the perfect finishing touch to a gift, these ribbon-shaped stud earrings will add that extra charm to your style. Be it for everyday wear or special occasions - you won\'t be able to resist this pair!', '7905img4-middle.jpg', 12),
(95, 'Platinum TEESTA PLATINUM AND DIAMOND STUD EARRINGS Earring', 65321, 50, 23, 'Like a bow adds the perfect finishing touch to a gift, these ribbon-shaped stud earrings will add that extra charm to your style. Be it for everyday wear or special occasions - you won\'t be able to resist this pair!', '6638product-12.jpg', 12),
(96, 'Platinum AARINI PLATINUM AND DIAMOND PENDANT Pendant', 56238, 88, 26, 'Radiant with contemporary elegance, this pendant will elevate your work ensemble a notch above everyone else. The chain in the image is for representative purpose only and the actual product comes without a chain.', '1260category9.png', 13),
(97, 'Platinum AARINI 950 PLATINUM AND DIAMOND PENDANT Pendant', 56963, 50, 23, 'Radiant with contemporary elegance, this pendant will elevate your work ensemble a notch above everyone else. The chain in the image is for representative purpose only and the actual product comes without a chain.', '2626category4.png', 13),
(98, 'Platinum 950 PLATINUM PENDANT Pendant', 59633, 22, 26, 'Capture the cheerful appeal of butterflies for eternity with this platinum pendant. A delightful addition to everyday style, it makes for a charming gift too!', '8019serkan-turk-v6jcUbxetL0-unsplash.jpg', 13),
(99, 'Platinum 950 PLATINUM PENDANT Pendant', 56369, 12, 5, 'Capture the cheerful appeal of butterflies for eternity with this platinum pendant. A delightful addition to everyday style, it makes for a charming gift too!', '1890product9.jpg', 13),
(100, 'Platinum 950 PLATINUM RING Finger Ring', 56325, 26, 15, 'Indulge the minimalist in you with this finely crafted platinum ring. Its luminous radiance and smooth finish will keep your style at its pinnacle always.', '3608adv1.jpg', 14),
(101, 'Platinum 950 PLATINUM RING Finger Ring', 166321, 56, 56, 'Indulge the minimalist in you with this finely crafted platinum ring. Its luminous radiance and smooth finish will keep your style at its pinnacle always.', '3795product17.jpg', 14),
(102, 'Platinum 950 PLATINUM RING Finger Ring', 49625, 152, 30, 'Indulge the minimalist in you with this finely crafted platinum ring. Its luminous radiance and smooth finish will keep your style at its pinnacle always.', '7199black-and-white-close-up-jewellery-jewelry-265906.jpg', 14),
(103, 'Platinum 950 PLATINUM RING Finger Ring', 56329, 26, 15, 'Indulge the minimalist in you with this finely crafted platinum ring. Its luminous radiance and smooth finish will keep your style at its pinnacle always.', '3443product-18.jpg', 14),
(104, 'Platinum 950 PLATINUM CHAIN Chains', 19623, 122, 15, 'Cast in allluring 950 Platinum, this chain and its stunning interweave will exude radiance when paired with a fancy pendant.', '9567blog3.jpg', 15),
(105, 'Platinum 950 PLATINUM CHAIN Chains', 14562, 100, 15, 'Cast in allluring 950 Platinum, this chain and its stunning interweave will exude radiance when paired with a fancy pendant.', '8508blog5.jpg', 15),
(106, 'Platinum 950 PLATINUM CHAIN Chains', 15630, 123, 20, 'Cast in allluring 950 Platinum, this chain and its stunning interweave will exude radiance when paired with a fancy pendant.', '3710blog14.jpg', 15),
(107, 'Platinum 950 PLATINUM CHAIN Chains', 15362, 100, 9, 'Cast in allluring 950 Platinum, this chain and its stunning interweave will exude radiance when paired with a fancy pendant.', '6470deal2.jpg', 15),
(108, 'Vivah Wedding Mangalsutra Mangalsutra', 23651, 122, 5, 'This classy and striking design is the perfect addition to your jewellery collection!', '3613home4-slider5.jpg', 16),
(109, 'Vivah Gold and Diamond Mangalsutra  Mangalsutra', 63254, 100, 15, 'This classy and striking design is the perfect addition to your jewellery collection!', '8589deal5.jpg', 16),
(110, 'Vivah 18KT Gold and Diamond Mangalsutra Mangalsutra', 36526, 100, 25, 'This classy and striking design is the perfect addition to your jewellery collection!', '210blog7.jpg', 16),
(111, 'Vivah 18KT Gold Mangalsutra Mangalsutra', 56329, 100, 23, 'This classy and striking design is the perfect addition to your jewellery collection!', '8378insta7.jpg', 16),
(112, 'Vivah 22KT Gold Bangles Bangles', 96325, 120, 50, 'This magnificent bangle is a fusion of the old and new. The ravishing red bead adds to the allure of this stylish bangle. Give your festive-wear a touch of enchantment with this glorious bangle', '985blur-close-up-elegant-flower-298852.jpg', 17),
(113, 'Vivah 22KT Gold and Diamond Bangles Bangles', 56321, 100, 15, 'This magnificent bangle is a fusion of the old and new. The ravishing red bead adds to the allure of this stylish bangle. Give your festive-wear a touch of enchantment with this glorious bangle', '197g7.jpg', 17),
(114, 'Vivah 22KT Gold Bangles Bangles', 165423, 50, 56, 'This magnificent bangle is a fusion of the old and new. The ravishing red bead adds to the allure of this stylish bangle. Give your festive-wear a touch of enchantment with this glorious bangle', '8457img3-middle.jpg', 17),
(115, 'Vivah 18KT Gold Bangles Bangles', 56329, 200, 10, 'This magnificent bangle is a fusion of the old and new. The ravishing red bead adds to the allure of this stylish bangle. Give your festive-wear a touch of enchantment with this glorious bangle', '8305img1-middle.jpg', 17),
(116, 'Vivah Gold and Diamond Neckware Set Neckwear ', 563297, 100, 21, 'This neckwear and earrings set is the simplest way for you to bring stately charm to grand festivities!', '1217insta5.jpg', 18),
(117, 'Vivah 22KT Gold Neckware Set Neckwear ', 965321, 20, 21, 'This neckwear and earrings set is the simplest way for you to bring stately charm to grand festivities!', '2947deal7.jpg', 18),
(118, 'Vivah 18KT Pearls Necklace Set Neckwear ', 563212, 50, 10, 'This neckwear and earrings set is the simplest way for you to bring stately charm to grand festivities!', '8379blog1.jpg', 18),
(119, 'Vivah 18KT Gold and Diamond Neckware Set Neckwear ', 563210, 20, 10, 'This neckwear and earrings set is the simplest way for you to bring stately charm to grand festivities!', '284insta3.jpg', 18),
(120, 'Gold 10 Gram Gold Coin Gold Coin', 10236, 100, 5, '10 Gram Gold Coin.........', '3041rsbl-gold-coin-20-grams-24kt-gold-995-purity-fineness.jpg', 7),
(121, 'Gold 5 Gram Gold Coin Gold Coin', 12365, 125, 10, '5 Gram Gold Coin..........', '697913179165_1567284796904063_1509885611828974225_n.jpg', 7);

-- --------------------------------------------------------

--
-- Table structure for table `subcategory`
--

CREATE TABLE `subcategory` (
  `subid` int(11) NOT NULL,
  `subname` varchar(200) NOT NULL,
  `subDescription` text NOT NULL,
  `catid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subcategory`
--

INSERT INTO `subcategory` (`subid`, `subname`, `subDescription`, `catid`) VALUES
(4, 'Earring', 'Gold Earrings', 1),
(5, 'Pendant', 'Gold pendant\n', 1),
(6, 'Finger Ring', 'Finger ring', 1),
(7, 'Gold Coin', 'Gold coin\r\n', 1),
(8, 'Earring', 'Diamond Earing', 2),
(9, 'Pendant', 'Diamond Pendant', 2),
(10, 'Finger Ring', 'Diamond Finger Ring', 2),
(11, 'Bracelets', 'Diamond Bracelets', 2),
(12, 'Earring', 'Platinum Earrings', 3),
(13, 'Pendant', 'Platinum Pendants', 3),
(14, 'Finger Ring', 'Platinum Finger Rings', 3),
(15, 'Chains', 'Chains', 3),
(16, 'Mangalsutra', 'MangalSutra', 4),
(17, 'Bangles', 'Bangles', 4),
(18, 'Neckwear ', 'Neckwear', 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adminregistration`
--
ALTER TABLE `adminregistration`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `bill`
--
ALTER TABLE `bill`
  ADD PRIMARY KEY (`billID`),
  ADD KEY `email` (`email`);

--
-- Indexes for table `billdetail`
--
ALTER TABLE `billdetail`
  ADD PRIMARY KEY (`billdetailid`),
  ADD KEY `billid` (`billid`),
  ADD KEY `productid` (`productid`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`catid`);

--
-- Indexes for table `clientregistration`
--
ALTER TABLE `clientregistration`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`pid`),
  ADD KEY `subid` (`subid`);

--
-- Indexes for table `subcategory`
--
ALTER TABLE `subcategory`
  ADD PRIMARY KEY (`subid`),
  ADD KEY `catid` (`catid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bill`
--
ALTER TABLE `bill`
  MODIFY `billID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `billdetail`
--
ALTER TABLE `billdetail`
  MODIFY `billdetailid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `catid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=122;

--
-- AUTO_INCREMENT for table `subcategory`
--
ALTER TABLE `subcategory`
  MODIFY `subid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bill`
--
ALTER TABLE `bill`
  ADD CONSTRAINT `bill_ibfk_1` FOREIGN KEY (`email`) REFERENCES `clientregistration` (`email`);

--
-- Constraints for table `billdetail`
--
ALTER TABLE `billdetail`
  ADD CONSTRAINT `billdetail_ibfk_1` FOREIGN KEY (`billid`) REFERENCES `bill` (`billID`),
  ADD CONSTRAINT `billdetail_ibfk_2` FOREIGN KEY (`productid`) REFERENCES `product` (`pid`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`subid`) REFERENCES `subcategory` (`subid`);

--
-- Constraints for table `subcategory`
--
ALTER TABLE `subcategory`
  ADD CONSTRAINT `subcategory_ibfk_1` FOREIGN KEY (`catid`) REFERENCES `category` (`catid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
