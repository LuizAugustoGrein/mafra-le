-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 22, 2024 at 11:36 PM
-- Server version: 10.11.7-MariaDB-cll-lve
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u596350710_mafra_le`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `order_index` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `button_color` varchar(255) NOT NULL,
  `left_image` varchar(255) NOT NULL,
  `right_image` varchar(255) NOT NULL,
  `class` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `order_index`, `title`, `description`, `button_color`, `left_image`, `right_image`, `class`) VALUES
(1, 1, 'Restaurante Animal', 'O livro apresenta um restaurante que atende ao paladar de diferentes animais. Por meio de divertidas rimas, conhecemos a preferência alimentar do cachorro, da pulga, do peixe, da baleia, da vaca, do besouro... Esse restaurante animal atende a gostos refinados ou esquisitos, a depender da exigência do cliente!', '#BD2F0A', 'https://luizgrein.com/projects/mafra-le/static/capa1.png', 'https://luizgrein.com/projects/mafra-le/static/capa2.png', 1),
(3, 2, 'Ratinhos e Balões', 'Ratinhos e balões é uma narrativa formada por uma sequência de cenas em que os ratinhos aprendem sobre amizade, medo, surpresa e outros conceitos e valores tão importantes na vida. As experiências deles ilustram para as crianças sentimentos e situações que, muitas vezes, são abstratos e difíceis de explicar na infância, como solidariedade e amor.', '#353D7A', 'https://luizgrein.com/projects/mafra-le/static/capa3.png', 'https://luizgrein.com/projects/mafra-le/static/capa4.png', 1),
(4, 3, 'O Presente de Aniversário', 'O pai e a mãe de Torresminho eram muito ocupados para dar atenção ao pequeno porquinho. Então, eles o enchiam de muitos presentes para compensá-lo pela constante ausência. Mal-acostumado, Torresminho passou a associar afeto à materialidade dos presentes. Até que, em um aniversário, um amigo não leva presente, mas dedica toda a atenção ao aniversariante, brincando muito com ele. E Torresminho descobre que há presentes que não podem ser embrulhados — e que esses costumam ser os melhores.', '#FC8290', 'https://luizgrein.com/projects/mafra-le/static/capa5.png', 'https://luizgrein.com/projects/mafra-le/static/capa6.png', 1),
(6, 4, 'A Mancha', 'O livro A mancha descreve uma tragédia ambiental, por meio de um poema ilustrado. A mancha de óleo espalha-se lentamente pelo oceano e pela costa, contaminando a vida marinha e destruindo ecossistemas. Enquanto alguns seres humanos tentam limpá-la, muitos outros se omitem.', '#005DBB', 'https://luizgrein.com/projects/mafra-le/static/capa7.png', 'https://luizgrein.com/projects/mafra-le/static/capa8.png', 1),
(7, 1, 'Cada bicho no seu canto', 'Cada bicho um seu canto tem como autor um dos mais importantes nomes da literatura contemporânea brasileira. Edimilson de Almeida Pereira recebeu importantes prêmios literários nacionais e internacionais em 2021 e 2022. A obra reúne vinte e cinco poemas sobre os mais variados bichos: cobra, rinoceronte, gato, vespa, raposa, cupim, jabuti... São poemas curtos, que sugerem aos leitores diferentes formas de ver esses animais e de pensar em suas características físicas, além de permitir imaginar aspectos divertidos relacionados ao comportamento deles.', '#FFC708', 'https://luizgrein.com/projects/mafra-le/static/capa9.png', 'https://luizgrein.com/projects/mafra-le/static/capa9.png', 2),
(8, 2, 'O pintinho sura', 'A coleção Meu Primeiro Lobato reúne histórias curtas extraídas de livros da obra infantil e adulta de Monteiro Lobato, acompanhadas de ilustrações que enriquecem e complementam a narrativa. Indicada para estudantes dos anos iniciais do Ensino Fundamental, ou ainda da Educação Infantil com leitura mediada por um adulto. A história de Narizinho e o Príncipe Escamado foi tirada do capítulo Narizinho Arrebitado, que faz parte do livro Reinações de Narizinho. Lúcia, ou Narizinho como é mais conhecida, é uma menina de sete anos. Na sua primeira reinação (ou travessura), ela adormece junto ao ribeiro o que passa pelo pomar do Sítio e é despertada por dois animaizinhos vestidos de gente passeando pelo seu rosto: um peixinho e um besouro. Em O pinguim que andou de bonde, uma história verdadeira ocorrida com Monteiro Lobato: o autor encontra um pinguim de asa quebrada e quer levá-lo para casa, de bonde, mas o motorneiro não permite o transporte de animais. Essa história foi extraída de duas cartas do autor ao seu amigo Godofredo Rangel, de 3 e 1 5 de julho de 1915.', '#6E4F26', 'https://luizgrein.com/projects/mafra-le/static/capa10.png', 'https://luizgrein.com/projects/mafra-le/static/capa10.png', 2),
(9, 3, 'Pronto, foguete, Vamos!', 'Pronto, foguete, vamos! conta a aventura da pequena Iolanda em seu quintal, com sua arara de pelúcia e alguns objetos e móveis de sua casa. Com elementos simples, a menina cria um universo de fantasia e imaginação e vive grandes aventuras. A narrativa brinca sutilmente com a ideia de acúmulo, que costuma estar presente em textos para essa faixa etária, mas, em vez da repetição do texto, são as palavras que vão se acumulando ao longo da história. Essa ideia é realçada nas ilustrações, que se compõem à medida que Iolanda empilha os objetos uns sobre os outros para dar vida a seu foguete. A história enfatiza ainda valores como a perseverança e a criatividade, mostrando como aproveitar cada situação da vida e ver o que ela pode trazer de bom se o foguete desmorona, é possível brincar de submarino.', '#1B1B1B', 'https://luizgrein.com/projects/mafra-le/static/capa11.png', 'https://luizgrein.com/projects/mafra-le/static/capa11.png', 2),
(10, 4, 'Uma velha e três chapéus', 'São três chapéus voadores. Eles falam uma língua engraçada, que ninguém entende, e andam por aí, levados pelo vento. Até que um dia eles encontram uma senhora muito ocupada, que deseja fazer muitas coisas antes de completar cem anos, inclusive se separar do marido, pois enjoou dele. Ela também é levada pelo vento e viaja com os três chapéus por montanhas, pelo mar e pelo sertão. Este é um divertido e premiado conto de Sylvia Orthof, vencedor do Prêmio Orígenes Lessa da FNLIJ em 1987.', '#807CB9', 'https://luizgrein.com/projects/mafra-le/static/capa12.png', 'https://luizgrein.com/projects/mafra-le/static/capa12.png', 2);

-- --------------------------------------------------------

--
-- Table structure for table `books_questions`
--

CREATE TABLE `books_questions` (
  `id` int(11) NOT NULL,
  `order_index` int(11) NOT NULL,
  `question` varchar(255) NOT NULL,
  `books_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `books_questions`
--

INSERT INTO `books_questions` (`id`, `order_index`, `question`, `books_id`) VALUES
(1, 1, 'TODOS OS ANIMAIS SÃO SERES VIVOS E PRECISAM:', 1),
(2, 2, 'NA PAGINA 25 TEM UM TRECHO DA HISTÓRIA QUE AFIRMA QUE O MORCEGO ADORA AS JABUTICABAS CAÍDAS NA GRAMA. PARA OS HUMANOS O ALIMENTO ANTES DE SER CONSUMIDO PRECISA SER:', 1),
(3, 1, 'O LIVRO ENSINA QUE PARA SER FELIZ É PRECISO:', 3),
(4, 1, 'A HISTÓRIA “O PRESENTE DE ANIVERSÁRIO” ENSINA QUE O MAIOR PRESENTE PARA AS CRIANÇAS É:', 4),
(5, 1, 'UMA MANCHA SE ESPALHA PELO MAR FICANDO:', 6),
(6, 1, 'A LITERATURA TRAZ VÁRIOS TIPOS DE ANIMAIS, ALGUNS SELVAGENS, OUTROS ESTÃO NO NOSSO CONVÍVIO DIÁRIO. ASSINALE A OPÇÃO QUE SÓ POSSUI ANIMAL SELVAGENS.', 7),
(7, 1, 'O PINTINHO SURA CRESCEU E SE TORNOU UM GALO, A HISTÓRIA NOS ENSINA QUE:', 8),
(8, 2, 'A PALAVRA “EMBORNAL” APARECE VÁRIAS VEZES NA HISTÓRIA, VAMOS PESQUISAR NO DICIONÁRIO SEU SIGNIFICADO?', 8),
(9, 1, 'O MUNDO DA IMAGINAÇÃO É MARAVILHOSO. IOLANDA BRINCOU NA CONSTRUÇÃO DE UM FOGUETE, O QUE VOCÊ APRENDEU COM IOLANDA?', 9),
(10, 1, 'NA ESCOLA TEMOS AMIGOS QUE USAM LINGUAGENS DIFERENTE PARA SE COMUNICAR, ALGUNS PRECISAM USAR AS MÃOS POIS NÃO CONSEGUEM FALAR, VOCÊSABE O NOME DESSA LINGUA DE SINAIS?', 10);

-- --------------------------------------------------------

--
-- Table structure for table `books_questions_answers`
--

CREATE TABLE `books_questions_answers` (
  `id` int(11) NOT NULL,
  `response` varchar(255) NOT NULL,
  `is_right` tinyint(1) NOT NULL,
  `questions_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `books_questions_answers`
--

INSERT INTO `books_questions_answers` (`id`, `response`, `is_right`, `questions_id`) VALUES
(1, 'SE ALIMENTAR', 1, 1),
(2, 'APENAS GANHAR CARINHO', 0, 1),
(3, 'EXPERIMENTADO PELO MORCEGO', 0, 2),
(4, 'SER HIGIENIZADO', 1, 2),
(5, 'TER AMIGOS E SE DIVERTIR', 1, 3),
(6, 'VIVER SOZINHO', 0, 3),
(7, 'OS OBJETOS PARA BRINCAR SOZINHO', 0, 4),
(8, 'BRINCADEIRAS COM A FAMÍLIA E AMIGOS', 1, 4),
(9, 'TUDO ALEGRE', 0, 5),
(10, 'TUDO TRISTE', 1, 5),
(11, 'GATO, JABUTI, CUPIM, GALO', 0, 6),
(12, 'GIRAFA, LEOPARDO, RINOCERONTE, ANTÍLOPE', 1, 6),
(13, 'ARANHA, LACRAIA, PEIXE, GATO', 0, 6),
(14, 'GALO, LAGARTO, ESCORPIÃO, PEIXE', 0, 6),
(15, 'NÃO PODEMOS TRATAR MAL OS COLEGAS', 0, 7),
(16, 'TER CORAGEM PARA ENFRENTAR OS PROBLEMAS', 0, 7),
(17, 'FAZER SEMPRE NOVOS AMIGOS', 0, 7),
(18, 'AS TRÊS OPÇÕES ESTÃO CORRETAS', 1, 7),
(19, 'BOLSA DE VIAGEM PARA GUARDAR ANIMAIS', 0, 8),
(20, 'SACO PARA GUARDAR COMIDA (SACOLA)', 1, 8),
(21, 'NÃO PODEMOS DESISTIR', 1, 9),
(22, 'DEVEMOS BRINCAR SEM IMAGINAÇÃO', 0, 9),
(23, 'INGLÊS', 0, 10),
(24, 'LIBRAS', 1, 10),
(25, 'BRAILLE', 0, 10);

-- --------------------------------------------------------

--
-- Table structure for table `classes`
--

CREATE TABLE `classes` (
  `class` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `classes`
--

INSERT INTO `classes` (`class`, `name`) VALUES
(1, '1º ano'),
(2, '2º ano'),
(3, '3º ano'),
(4, '4º ano'),
(5, '5º ano');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `registration_number` varchar(255) NOT NULL,
  `class` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `avatar_skin` int(11) DEFAULT NULL,
  `avatar_eye` int(11) DEFAULT NULL,
  `avatar_hair` int(11) DEFAULT NULL,
  `avatar_hair_color` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `registration_number`, `class`, `name`, `avatar_skin`, `avatar_eye`, `avatar_hair`, `avatar_hair_color`) VALUES
(1, '123', 1, 'luiz augusto', 3, 3, 3, 3),
(2, '56546546', 1, NULL, NULL, NULL, NULL, NULL),
(3, '78787878', 1, NULL, NULL, NULL, NULL, NULL),
(4, '43434343', 1, NULL, NULL, NULL, NULL, NULL),
(5, '43243243', 1, 'Luiz augusto grein', 5, 10, 0, 10),
(6, '43243243', 2, 'Lluizzz', 4, 4, 3, 4),
(7, '12345678', 1, 'Luiz Augusto Grein', 2, 3, 4, 1),
(8, '12345678', 2, 'Luiz Augusto Grein', 3, 3, 4, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users_answers`
--

CREATE TABLE `users_answers` (
  `users_id` int(11) NOT NULL,
  `books_answers_id` int(11) NOT NULL,
  `is_right` tinyint(1) NOT NULL,
  `moment` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users_answers`
--

INSERT INTO `users_answers` (`users_id`, `books_answers_id`, `is_right`, `moment`) VALUES
(8, 12, 1, '2024-03-22 20:31:28'),
(8, 18, 1, '2024-03-22 20:32:00'),
(8, 20, 1, '2024-03-22 20:32:09'),
(8, 21, 1, '2024-03-22 20:32:19'),
(8, 24, 1, '2024-03-22 20:32:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `class` (`class`);

--
-- Indexes for table `books_questions`
--
ALTER TABLE `books_questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `books_id` (`books_id`);

--
-- Indexes for table `books_questions_answers`
--
ALTER TABLE `books_questions_answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `questions_id` (`questions_id`);

--
-- Indexes for table `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`class`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `class` (`class`);

--
-- Indexes for table `users_answers`
--
ALTER TABLE `users_answers`
  ADD KEY `books_answers_id` (`books_answers_id`),
  ADD KEY `users_id` (`users_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `books_questions`
--
ALTER TABLE `books_questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `books_questions_answers`
--
ALTER TABLE `books_questions_answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `classes`
--
ALTER TABLE `classes`
  MODIFY `class` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_ibfk_1` FOREIGN KEY (`class`) REFERENCES `classes` (`class`);

--
-- Constraints for table `books_questions`
--
ALTER TABLE `books_questions`
  ADD CONSTRAINT `books_questions_ibfk_1` FOREIGN KEY (`books_id`) REFERENCES `books` (`id`);

--
-- Constraints for table `books_questions_answers`
--
ALTER TABLE `books_questions_answers`
  ADD CONSTRAINT `books_questions_answers_ibfk_1` FOREIGN KEY (`questions_id`) REFERENCES `books_questions` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`class`) REFERENCES `classes` (`class`);

--
-- Constraints for table `users_answers`
--
ALTER TABLE `users_answers`
  ADD CONSTRAINT `users_answers_ibfk_1` FOREIGN KEY (`books_answers_id`) REFERENCES `books_questions_answers` (`id`),
  ADD CONSTRAINT `users_answers_ibfk_2` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
