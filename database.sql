-- --------------------------------------------------------

--
-- Estrutura da tabela `emails`
--

CREATE TABLE IF NOT EXISTS `emails` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `idc` tinyint unsigned NOT NULL, -- 1 dilma, 2 serra, 3 marina, 4 maneca
  `nome` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `email` varchar(255) COLLATE latin1_general_ci NOT NULL,
  `sexo` tinyint(1) unsigned NOT NULL,
  `date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX (`idc`),
  INDEX (`email`)
) ENGINE=MyISAM ROW_FORMAT=fixed DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=1;

-- --------------------------------------------------------