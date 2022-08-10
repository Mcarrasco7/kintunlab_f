-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 10-08-2022 a las 10:31:52
-- Versión del servidor: 5.7.33
-- Versión de PHP: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `kintunlab_f`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividad_economica`
--

CREATE TABLE `actividad_economica` (
  `id_actividad` int(11) NOT NULL,
  `nombre` varchar(300) COLLATE utf8_spanish_ci NOT NULL,
  `id_subrubro` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `update` timestamp NULL DEFAULT NULL,
  `create` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `actividad_economica`
--

INSERT INTO `actividad_economica` (`id_actividad`, `nombre`, `id_subrubro`, `fecha`, `update`, `create`) VALUES
(1, 'Cultivo de trigo', 1, '2020-12-29', NULL, NULL),
(2, 'Cultivo de semillas de cereales, legumbres y oleaginosas (excepto semillas de raps y maravilla)', 1, '2020-12-29', NULL, NULL),
(3, 'Cultivo de otros tubÃ©rculos (excepto papas y camotes)', 1, '2020-12-29', NULL, NULL),
(4, 'Cultivo de otros frutos y nueces de Ã¡rboles y arbustos', 2, '2020-12-29', NULL, NULL),
(5, 'Cultivo de otras plantas perennes', 2, '2020-12-29', NULL, NULL),
(6, 'CrÃ­a de ganado bovino para la producciÃ³n de carne o como ganado reproductor', 3, '2020-12-29', NULL, NULL),
(7, 'Apicultura', 3, '2020-12-29', NULL, NULL),
(8, 'Cultivo de productos agrÃ­colas en combinaciÃ³n con la crÃ­a de animales (explotaciÃ³n mixta)', 4, '2020-12-29', NULL, NULL),
(9, 'Actividades de apoyo a la agricultura', 5, '2020-12-29', NULL, NULL),
(10, 'Actividades poscosecha', 5, '2020-12-29', NULL, NULL),
(11, 'ExplotaciÃ³n de viveros forestales', 6, '2020-12-29', NULL, NULL),
(12, 'ExtracciÃ³n de madera', 7, '2020-12-29', NULL, NULL),
(13, 'Servicios de corta de madera a cambio de una retribuciÃ³n o por contrata', 8, '2020-12-29', NULL, NULL),
(14, 'ElaboraciÃ³n y conservaciÃ³n de carne y productos cÃ¡rnicos', 9, '2020-12-29', NULL, NULL),
(15, 'ElaboraciÃ³n de productos lÃ¡cteos', 10, '2020-12-29', NULL, NULL),
(16, 'ElaboraciÃ³n de otros productos de molinerÃ©a n.c.p.', 11, '2020-12-29', NULL, NULL),
(17, 'ElaboraciÃ³n de productos de panaderÃ­a y pastelerÃ­a', 12, '2020-12-29', NULL, NULL),
(18, 'ElaboraciÃ³n de cacao, chocolate y de productos de confiterÃ­a', 12, '2020-12-29', NULL, NULL),
(19, 'ElaboraciÃ³n de otros productos alimenticios n.c.p.', 12, '2020-12-29', NULL, NULL),
(20, 'ElaboraciÃ³n de bebidas malteadas y de malta', 13, '2020-12-29', NULL, NULL),
(21, 'FabricaciÃ³n de papel y cartÃ³n para su posterior uso industrial n.c.p.', 14, '2020-12-29', NULL, NULL),
(22, 'FabricaciÃ³n de plÃ¡sticos y caucho sintÃ©tico en formas primarias', 15, '2020-12-29', NULL, NULL),
(23, 'FabricaciÃ³n de productos metÃ¡licos para uso estructural', 16, '2020-12-29', NULL, NULL),
(24, 'FabricaciÃ³n de muebles principalmente de madera', 17, '2020-12-29', NULL, NULL),
(25, 'GeneraciÃ³n de energÃ­a elÃ©ctrica en centrales hidroelÃ©ctricas', 18, '2020-12-29', NULL, NULL),
(26, 'CaptaciÃ³n, tratamiento y distribuciÃ³n de agua', 19, '2020-12-29', NULL, NULL),
(27, 'ConstrucciÃ³n de edificios para uso residencial', 20, '2020-12-29', NULL, NULL),
(28, 'ConstrucciÃ³n de carreteras y lÃ­neas de ferrocarril', 21, '2020-12-29', NULL, NULL),
(29, 'TerminaciÃ³n y acabado de edificios', 22, '2020-12-29', NULL, NULL),
(30, 'Mantenimiento y reparaciÃ³n de vehÃ­culos automotores', 23, '2020-12-29', NULL, NULL),
(31, 'Venta de partes, piezas y accesorios para vehÃ­culos automotores', 24, '2020-12-29', NULL, NULL),
(32, 'Corretaje al por mayor de productos agrÃ­colas', 25, '2020-12-29', NULL, NULL),
(33, 'Corretaje al por mayor de ganado', 25, '2020-12-29', NULL, NULL),
(34, 'Venta al por mayor de animales vivos', 26, '2020-12-29', NULL, NULL),
(35, 'Venta al por mayor de madera en bruto y productos primarios de la elaboraciÃ³n de madera', 27, '2020-12-29', NULL, NULL),
(36, 'Venta al por menor en comercios de alimentos, bebidas o tabaco (supermercados e hipermercados)', 28, '2020-12-29', NULL, NULL),
(37, 'Venta al por menor de alimentos en comercios especializados (almacenes pequeÃ±os y minimarket)', 29, '2020-12-29', NULL, NULL),
(38, 'Venta al por menor en comercios especializados de productos de panaderÃ­a y pastelerÃ­a', 29, '2020-12-29', NULL, NULL),
(39, 'Venta al por menor de bebidas alcohÃ³licas y no alcohÃ³licas en comercios especializados (botillerÃ­as)', 29, '2020-12-29', NULL, NULL),
(40, 'Venta al por menor de combustibles para vehÃ­culos automotores en comercios especializados', 30, '2020-12-29', NULL, NULL),
(41, 'Venta al por menor de artÃ­culos de ferreterÃ­a y materiales de construcciÃ³n', 31, '2020-12-29', NULL, NULL),
(42, 'Venta al por menor de productos de vidrio en comercios especializados', 31, '2020-12-29', NULL, NULL),
(43, 'Venta al por menor de muebles y colchones en comercios especializados', 31, '2020-12-29', NULL, NULL),
(44, 'Venta al por menor de aparatos elÃ©ctricos, textiles para el hogar y otros enseres domÃ©sticos n.c.p.', 31, '2020-12-29', NULL, NULL),
(45, 'Venta al por menor de artÃ­culos de papelerÃ­a y escritorio en comercios especializados', 32, '2020-12-29', NULL, NULL),
(46, 'Venta al por menor de artÃ­culos de caza y pesca en comercios especializados', 32, '2020-12-29', NULL, NULL),
(47, 'Venta al por menor de calzado en comercios especializados', 33, '2020-12-29', NULL, NULL),
(48, 'Venta al por menor de prendas y accesorios de vestir en comercios especializados', 33, '2020-12-29', NULL, NULL),
(49, 'Venta al por menor de productos farmacÃ©uticos y medicinales en comercios especializados', 33, '2020-12-29', NULL, NULL),
(50, 'Venta al por menor de gas licuado en bombonas (cilindros) en comercios especializados', 33, '2020-12-29', NULL, NULL),
(51, 'Venta al por menor de carbÃ³n, leÃ±a y otros combustibles de uso domÃ©stico en comercios especializados', 33, '2020-12-29', NULL, NULL),
(52, 'Venta al por menor de recuerdos, artesanÃ­as y artÃ­culos religiosos en comercios especializados', 33, '2020-12-29', NULL, NULL),
(53, 'Venta al por menor de otros productos en comercios especializados n.c.p.', 33, '2020-12-29', NULL, NULL),
(54, 'Venta al por menor de ropa usada en comercios', 33, '2020-12-29', NULL, NULL),
(55, 'Venta al por menor por correo, por internet y vÃ­a telefÃ³nica', 34, '2020-12-29', NULL, NULL),
(56, 'Servicios de transporte de escolares', 35, '2020-12-29', NULL, NULL),
(57, 'Servicios de transporte de trabajadores', 35, '2020-12-29', NULL, NULL),
(58, 'Servicios de transporte a turistas', 35, '2020-12-29', NULL, NULL),
(59, 'Otras actividades de transporte de pasajeros por vÃ­a terrestre n.c.p.', 35, '2020-12-29', NULL, NULL),
(60, 'Transporte de carga por carretera', 35, '2020-12-29', NULL, NULL),
(61, 'Actividades de hoteles', 36, '2020-12-29', NULL, NULL),
(62, 'Actividades de residenciales para estudiantes y trabajadores', 37, '2020-12-29', NULL, NULL),
(63, 'Otras actividades de alojamiento n.c.p.', 37, '2020-12-29', NULL, NULL),
(64, 'Actividades de restaurantes y de servicio mÃ³vil de comidas', 38, '2020-12-29', NULL, NULL),
(65, 'Suministro de comidas por encargo (servicios de banqueterÃ­a)', 39, '2020-12-29', NULL, NULL),
(66, 'Suministro industrial de comidas por encargo; concesiÃ³n de servicios de alimentaciÃ³n', 39, '2020-12-29', NULL, NULL),
(67, 'Transmisiones de radio', 40, '2020-12-29', NULL, NULL),
(68, 'ProgramaciÃ³n y transmisiones de televisiÃ³n', 41, '2020-12-29', NULL, NULL),
(69, 'Centros de llamados y centros de acceso a internet', 42, '2020-12-29', NULL, NULL),
(70, 'Procesamiento de datos, hospedaje y actividades conexas', 43, '2020-12-29', NULL, NULL),
(71, 'Empresas de asesorÃ­a y consultorÃ­a en inversiÃ³n financiera; sociedades de apoyo al giro', 44, '2020-12-29', NULL, NULL),
(72, 'Compra, venta y alquiler (excepto amoblados) de inmuebles', 45, '2020-12-29', NULL, NULL),
(73, 'Actividades de consultorÃ­a de gestiÃ³n', 46, '2020-12-29', NULL, NULL),
(74, 'Servicios y actividades de fotografÃ­a', 47, '2020-12-29', NULL, NULL),
(75, 'Otras actividades profesionales, cientÃ­ficas y tÃ©cnicas n.c.p.', 48, '2020-12-29', NULL, NULL),
(76, 'Actividades de agencias de viajes', 49, '2020-12-29', NULL, NULL),
(77, 'Otras actividades de servicios de apoyo a las empresas n.c.p.', 50, '2020-12-29', NULL, NULL),
(78, 'Actividades de la administraciÃ³n pÃºblica en general', 51, '2020-12-29', NULL, NULL),
(79, 'EnseÃ±anza primaria, secundaria cientÃ­fico humanista y tÃ©cnico profesional privada', 52, '2020-12-29', NULL, NULL),
(80, 'Servicios personales de educaciÃ³n', 53, '2020-12-29', NULL, NULL),
(81, 'Servicios prestados de forma independiente por otros profesionales de la salud', 54, '2020-12-29', NULL, NULL),
(82, 'Actividades de otras asociaciones n.c.p.', 55, '2020-12-29', NULL, NULL),
(83, 'Lavado y limpieza, incluida la limpieza en seco, de productos textiles y de piel', 56, '2020-12-29', NULL, NULL),
(84, 'PeluquerÃ­a y otros tratamientos de belleza', 56, '2020-12-29', NULL, NULL),
(85, 'Otras actividades de servicios personales n.c.p.', 56, '2020-12-29', NULL, NULL),
(87, 'Sin Actividad', 1, '2020-12-29', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `agenda`
--

CREATE TABLE `agenda` (
  `id_agenda` int(30) NOT NULL,
  `linea` int(20) DEFAULT NULL,
  `accion` varchar(1000) COLLATE utf8_spanish_ci DEFAULT NULL,
  `responsable` varchar(1000) COLLATE utf8_spanish_ci DEFAULT NULL,
  `recurso` varchar(1000) COLLATE utf8_spanish_ci DEFAULT NULL,
  `start_d` date DEFAULT NULL,
  `end_d` date DEFAULT NULL,
  `progress` int(100) DEFAULT NULL,
  `estado` tinyint(4) DEFAULT NULL,
  `update_date` datetime DEFAULT NULL,
  `create` timestamp NULL DEFAULT NULL,
  `update` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `agenda`
--

INSERT INTO `agenda` (`id_agenda`, `linea`, `accion`, `responsable`, `recurso`, `start_d`, `end_d`, `progress`, `estado`, `update_date`, `create`, `update`) VALUES
(1, 8, 'ConstrucciÃ³n y reposiciÃ³n de Infraestructura como punto de venta de productos locales', 'InstituciÃ³n a definir', NULL, '2020-11-01', '2021-01-31', 20, 0, '2021-09-30 14:51:48', NULL, NULL),
(2, 8, 'DefiniciÃ³n y ordenamiento de los grupos cuando corresponda', 'Municipalidad', NULL, '2020-01-01', '2020-04-30', 10, 0, '2021-09-30 14:51:48', NULL, NULL),
(6, 8, 'OrientaciÃ³n de asociatividad, y calidad de servicio, formalizaciÃ³n, temas legales', 'Seremi Agricultura ', 'Seremi Agricultura ', '2020-03-01', '2020-05-31', 50, 0, '2021-09-30 14:51:48', NULL, NULL),
(7, 9, 'ConstrucciÃ³n, de pozo , inscripciÃ³n de agua, financiamiento de infraestructura de riego', 'Municipalidad (construcciÃ³n y solicitud a INDAP de realizar PRI y BLA de forma simultanea)) INDAP (InscripciÃ³n e infraestructur a) CONADI (infraestructu\nra) ', 'ConstrucciÃ³n (recursos Municipales) , PRI y BLA (INDAP, InscripciÃ³n e infraestructu ra ) CONADI ( infraestructu ra) ', '2020-03-01', '2021-05-31', 20, 0, '2021-09-30 14:51:48', NULL, NULL),
(8, NULL, 'Alianza de fomento a la comercializaciÃ³n', 'sadas', 'dsad', '2020-01-01', '2020-12-31', 60, 1, '2021-09-30 14:51:48', NULL, NULL),
(9, NULL, 'Recurso agua', NULL, NULL, '2020-03-01', '2020-05-31', 50, 0, '2021-09-30 14:51:48', NULL, NULL),
(10, 8, 'Compra de equipamiento para los locales', 'FOSIS', 'Yo emprendo auto gestionado', '2020-03-01', '2020-08-31', 69, 0, '2021-09-30 14:51:48', NULL, NULL),
(11, 8, 'AcreditaciÃ³n del los grupos', 'INDAP', 'INDAP', '2020-07-01', '2021-01-31', 32, 0, '2021-09-30 14:51:48', NULL, NULL),
(12, NULL, 'CoordinaciÃ³n protecciÃ³n de las aguas en sectores degradados', NULL, NULL, '2020-04-01', '2021-01-31', 60, 0, '2021-09-30 14:51:48', NULL, NULL),
(13, 12, 'ProtecciÃ³n de los cursos de agua en sectores degradados (Cuencas)', 'CONAF/INDAP', 'Convenio CONAF/INDAP', '2020-04-01', '2021-01-31', 60, 0, '2021-09-30 14:51:48', NULL, NULL),
(14, NULL, 'ArticulaciÃ³n para la regularizaciÃ³n de predios', NULL, NULL, '2020-01-01', '2020-03-31', 20, 0, '2021-09-30 14:51:48', NULL, NULL),
(15, 14, 'Solicitar a Bienes Nacionales el listado de carpetas ingresadas a programa de regularizaciÃ³n de predio agrÃ­cola de la Comuna de Melipeuco.', 'Municipalidad/Area INDAP', 'Convenio INDAP/Bienes Nacionales, convenio Municipalidad Melipeuco/Bienes Nacionales.', '2020-01-01', '2020-03-31', 20, 0, '2021-09-30 14:51:48', NULL, NULL),
(16, NULL, 'Asesorar de manera integral a los usuarios PDTI o PRODESAL', NULL, NULL, '2020-04-01', '2021-01-01', 20, 0, '2021-09-30 14:51:48', NULL, NULL),
(17, 16, 'Asesorar de manera integral a los usuarios PDTI o PRODESAL, no solo en el Ã¡mbito econÃ³mico, sino que tambiÃ©n en el empoderamiento , autoestima y otras dimensiones.', 'INDAP; Acciones formativas, plan de trabajo PDTI', NULL, '2020-04-01', '2021-01-31', 20, 0, '2021-09-30 14:51:48', NULL, NULL),
(18, NULL, 'Procesar los productos de los agricultores en una sala con resoluciÃ³n sanitaria.', NULL, NULL, '2020-12-01', '2021-01-31', 40, 0, '2021-09-30 14:51:48', NULL, NULL),
(19, 18, 'ArticulaciÃ³n para la instalaciÃ³n de salas de proceso comunitarias', 'ExploraciÃ³n de fondo Subdere. Gustavo Aylwin encargado de la gestiÃ³n y comunicaciÃ³n hacia el Municipio.', 'SUBDERE', '2020-12-01', '2021-05-31', 40, 0, '2021-09-30 14:51:48', NULL, NULL),
(21, 18, 'gfdg', 'gfd', 'jyj', '2020-04-01', '2020-04-05', 23, 0, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `app`
--

CREATE TABLE `app` (
  `id_app` int(11) NOT NULL,
  `dashboard` longtext COLLATE utf8_spanish2_ci,
  `visor` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `acercaDe` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `create` timestamp NULL DEFAULT NULL,
  `update` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `app`
--

INSERT INTO `app` (`id_app`, `dashboard`, `visor`, `acercaDe`, `create`, `update`) VALUES
(1, '{\n    \"totalEmprendedores\": [\n        {\n            \"id\": \"1\",\n            \"nro_emp_coniniact\": \"2\",\n            \"flecha_coniniact\": \"1\",\n            \"por_coniniact\": \"5.27\",\n            \"glosa_coniniact\": \"Mas que en el mes anterior\",\n            \"nro_emp_sininiact\": \"32\",\n            \"flecha_sininiact\": \"1\",\n            \"por_sininiact\": \"33\",\n            \"glosa_sininiact\": \"Mas que en el SII\"\n        }\n    ],\n    \"historialDeRegistro\": [\n        {\n            \"id\": \"1\",\n            \"nro_hisreg_coniniact\": \"10\",\n            \"nro_hisreg_sininiact\": \"10\",\n            \"Mes_hisreg\": \"Jun\"\n        },\n        {\n            \"id\": \"2\",\n            \"nro_hisreg_coniniact\": \"20\",\n            \"nro_hisreg_sininiact\": \"22\",\n            \"Mes_hisreg\": \"Jul\"\n        },\n        {\n            \"id\": \"3\",\n            \"nro_hisreg_coniniact\": \"15\",\n            \"nro_hisreg_sininiact\": \"15\",\n            \"Mes_hisreg\": \"Ago\"\n        },\n        {\n            \"id\": \"4\",\n            \"nro_hisreg_coniniact\": \"25\",\n            \"nro_hisreg_sininiact\": \"25\",\n            \"Mes_hisreg\": \"Sep\"\n        },\n        {\n            \"id\": \"5\",\n            \"nro_hisreg_coniniact\": \"20\",\n            \"nro_hisreg_sininiact\": \"2\",\n            \"Mes_hisreg\": \"Oct\"\n        },\n        {\n            \"id\": \"6\",\n            \"nro_hisreg_coniniact\": \"30\",\n            \"nro_hisreg_sininiact\": \"30\",\n            \"Mes_hisreg\": \"Nov\"\n        },\n        {\n            \"id\": \"7\",\n            \"nro_hisreg_coniniact\": \"20\",\n            \"nro_hisreg_sininiact\": \"7\",\n            \"Mes_hisreg\": \"Dic\"\n        },\n        {\n            \"id\": \"8\",\n            \"nro_hisreg_coniniact\": \"10\",\n            \"nro_hisreg_sininiact\": \"10\",\n            \"Mes_hisreg\": \"Ene\"\n        },\n        {\n            \"id\": \"9\",\n            \"nro_hisreg_coniniact\": \"20\",\n            \"nro_hisreg_sininiact\": \"34\",\n            \"Mes_hisreg\": \"Feb\"\n        },\n        {\n            \"id\": \"10\",\n            \"nro_hisreg_coniniact\": \"2\",\n            \"nro_hisreg_sininiact\": \"1\",\n            \"Mes_hisreg\": \"Mar\"\n        }\n    ],\n    \"usoDeSuelo\": [\n        {\n            \"id\": \"1\",\n            \"por_uso_suelo\": \"85065\",\n            \"tip_suelo\": \"Bosques Nativo\"\n        },\n        {\n            \"id\": \"2\",\n            \"por_uso_suelo\": \"5817\",\n            \"tip_suelo\": \"Plantaciones\"\n        },\n        {\n            \"id\": \"3\",\n            \"por_uso_suelo\": \"37297\",\n            \"tip_suelo\": \"Humedales, Ã¡reas desprovistas de vegetaciÃ³n, nieve, glaciares y cuerpos de agua\"\n        },\n        {\n            \"id\": \"4\",\n            \"por_uso_suelo\": \"26365\",\n            \"tip_suelo\": \"Praderas y matorrales\"\n        },\n        {\n            \"id\": \"5\",\n            \"por_uso_suelo\": \"99\",\n            \"tip_suelo\": \"Ãreas urbanas e industriales\"\n        },{\n            \"id\": \"6\",\n            \"por_uso_suelo\": \"1344\",\n            \"tip_suelo\": \"Terrenos agrÃ­colas\"\n        }\n    ],\n    \"coberturaDeSuelo\": [\n        {\n         \"nom_amenat\":\"Volcan Llaima\",\n         \"cob_suelo_amenat\":\"27.783\",\n         \"por_amenat\":\"0.17\",\n         \"sit_signatu\":\"Parque nacional Conguillío\",\n         \"cob_suelo_sit_signatu\":\"29.976\",\n         \"por_signatu\":\"0.19\"\n      },\n      {\n         \"nom_amenat\":\"Volcan Sollipulli\",\n         \"cob_suelo_amenat\":\"13.161\",\n         \"por_amenat\":\"0.08\",\n         \"sit_signatu\":\"Parque Nacional Villarrica\",\n         \"cob_suelo_sit_signatu\":\"34\",\n         \"por_signatu\":\"0.002\"\n      },\n      {\n         \"sit_signatu\":\"Reserva naciona China muerta\",\n         \"cob_suelo_sit_signatu\":\"8.504\",\n         \"por_signatu\":\"0.05\"\n      }\n    ],\n    \"principalesRubros\": [\n        {\n            \"id\": \"1\",\n            \"rub_econ\": \"Cultivo de otros tubï¿½rculos(excepto papas)\",\n            \"por_rub_econ\": 34\n        },\n        {\n            \"id\": \"2\",\n            \"rub_econ\": \"Cultivo de productos agricolas en comb\",\n            \"por_rub_econ\": 23\n        },\n        {\n            \"id\": \"3\",\n            \"rub_econ\": \"Sin actividad\",\n            \"por_rub_econ\": 12\n        },\n        {\n            \"id\": \"4\",\n            \"rub_econ\": \"Cria de ganado bovino para la produccion\",\n            \"por_rub_econ\": 12\n        },\n        {\n            \"id\": \"5\",\n            \"rub_econ\": \"Cultivo de otros frutos y nueces de arbol\",\n            \"por_rub_econ\": 10\n        },\n        {\n            \"id\": \"6\",\n            \"rub_econ\": \"otros\",\n            \"por_rub_econ\": 9\n        }\n       \n    ],\n    \"cantidadDeTrabajadores\": [\n        {\n            \"id\": \"1\",\n            \"por_cant_trab\": 45,\n            \"pom_rubeco_cantr\": \"Agricultura, ganaderï¿½a, caza y silvicult\"\n        },\n        {\n            \"id\": \"2\",\n            \"por_cant_trab\": 11,\n            \"pom_rubeco_cantr\": \"Industrias manufactureras\"\n        },\n        {\n            \"id\": \"3\",\n            \"por_cant_trab\": 11,\n            \"pom_rubeco_cantr\": \"Construcciï¿½n\"\n        },\n        {\n            \"id\": \"4\",\n            \"por_cant_trab\": 12,\n            \"pom_rubeco_cantr\": \"Comercio al por mayor y al por menor\"\n        },\n        {\n            \"id\": \"5\",\n            \"por_cant_trab\": 22,\n            \"pom_rubeco_cantr\": \"Otros\"\n        }\n    ],\n    \"prueba\": [\n      34,\n      23,\n      12,\n      12,\n      10,\n      9\n   ]\n}', '{\n    \"visor\": [\n        {\n            \"id\": \"1\",\n            \"vis_ben\": \"Abelino Parra Huenchumï¿½n\",\n            \"vis_emp\": \"nombre emprendimiento\",\n            \"vis_run\": \"10.659.940-8\",\n            \"vis_ori_cult\": \"sin informacion\",\n            \"vis_gen\": \"Masculino\",\n            \"vis_prog\": \"PDU,UPT Santa Mï¿½ria de llaima\",\n            \"niv_ven\": \"3\",\n            \"tip_prop\": \"2\",\n            \"vis_form\": \"3\",\n            \"rt_des\": \"3\",\n            \"vis_exp\": \"1\",\n            \"vis_edu\": \"2\",\n            \"vis_fin\": \"1\",\n            \"vis_red\": \"3\"\n        }\n    ]\n}', '{\n    \"acercaDeParrafo\": {\n        \"id\": \"1\",\n        \"titulo\": \"KintunLab\",\n        \"subTitulo\": \"En el marco de la Polï¿½tica de Desarrollo Rural y a travï¿½s de un trabajo en conjunto entre el Ministerio de Agricultura (por medio de INDAP y ODEPA) y La I. Municipalidad de Melipeuco, tiene lugar la realizaciï¿½n del Plan Piloto de Desarrollo Rural, el cual busca la inclusiï¿½n de un modelo de trabajo que permita la articulaciï¿½n de actores, programas y/o proyectos existentes, y la promociï¿½n de nuevas iniciativas que potencien las oportunidades del medio rural comunal....\"\n    },\n    \"acercaDeImagenes\": [\n        {\n            \"ancho\": \"12\",\n            \"url\": \"http://www.kintunlab.cl/API_app/api-kintunlab/lumen/public/imagenes/logo-lpt.jpg\",\n            \"habilitado\": true\n        },\n        {\n            \"ancho\": \"4\",\n            \"url\": \"http://www.kintunlab.cl/API_app/api-kintunlab/lumen/public/imagenes/logo-corfo.png\",\n            \"habilitado\": true\n        },\n        {\n            \"ancho\": \"4\",\n            \"url\": \"http://www.kintunlab.cl/API_app/api-kintunlab/lumen/public/imagenes/logo-plan-impulso.png\",\n            \"habilitado\": true\n        },\n        {\n            \"ancho\": \"4\",\n            \"url\": \"http://www.kintunlab.cl/API_app/api-kintunlab/lumen/public/imagenes/logo-gore.png\",\n            \"habilitado\": true\n        },\n        {\n            \"ancho\": \"6\",\n            \"url\": \"http://www.kintunlab.cl/API_app/api-kintunlab/lumen/public/imagenes/logo-gobierno.png\",\n            \"habilitado\": true\n        },\n        {\n            \"ancho\": \"6\",\n            \"url\": \"http://www.kintunlab.cl/API_app/api-kintunlab/lumen/public/imagenes/logo-melipeuco.png\",\n            \"habilitado\": true\n        }\n    ]\n}', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bitacora`
--

CREATE TABLE `bitacora` (
  `id_bitacora` int(11) NOT NULL,
  `id_user` int(45) NOT NULL,
  `descripcion` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `descripcionactividad` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `create` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `update` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comunas`
--

CREATE TABLE `comunas` (
  `comuna_id` int(11) NOT NULL,
  `comuna_nombre` varchar(64) NOT NULL,
  `provincia_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comunas`
--

INSERT INTO `comunas` (`comuna_id`, `comuna_nombre`, `provincia_id`) VALUES
(1, 'Arica', 1),
(2, 'Camarones', 1),
(3, 'General Lagos', 2),
(4, 'Putre', 2),
(5, 'Alto Hospicio', 3),
(6, 'Iquique', 3),
(7, 'Camiña', 4),
(8, 'Colchane', 4),
(9, 'Huara', 4),
(10, 'Pica', 4),
(11, 'Pozo Almonte', 4),
(12, 'Antofagasta', 5),
(13, 'Mejillones', 5),
(14, 'Sierra Gorda', 5),
(15, 'Taltal', 5),
(16, 'Calama', 6),
(17, 'Ollague', 6),
(18, 'San Pedro de Atacama', 6),
(19, 'María Elena', 7),
(20, 'Tocopilla', 7),
(21, 'Chañaral', 8),
(22, 'Diego de Almagro', 8),
(23, 'Caldera', 9),
(24, 'Copiapó', 9),
(25, 'Tierra Amarilla', 9),
(26, 'Alto del Carmen', 10),
(27, 'Freirina', 10),
(28, 'Huasco', 10),
(29, 'Vallenar', 10),
(30, 'Canela', 11),
(31, 'Illapel', 11),
(32, 'Los Vilos', 11),
(33, 'Salamanca', 11),
(34, 'Andacollo', 12),
(35, 'Coquimbo', 12),
(36, 'La Higuera', 12),
(37, 'La Serena', 12),
(38, 'Paihuaco', 12),
(39, 'Vicuña', 12),
(40, 'Combarbalá', 13),
(41, 'Monte Patria', 13),
(42, 'Ovalle', 13),
(43, 'Punitaqui', 13),
(44, 'Río Hurtado', 13),
(45, 'Isla de Pascua', 14),
(46, 'Calle Larga', 15),
(47, 'Los Andes', 15),
(48, 'Rinconada', 15),
(49, 'San Esteban', 15),
(50, 'La Ligua', 16),
(51, 'Papudo', 16),
(52, 'Petorca', 16),
(53, 'Zapallar', 16),
(54, 'Hijuelas', 17),
(55, 'La Calera', 17),
(56, 'La Cruz', 17),
(57, 'Limache', 17),
(58, 'Nogales', 17),
(59, 'Olmué', 17),
(60, 'Quillota', 17),
(61, 'Algarrobo', 18),
(62, 'Cartagena', 18),
(63, 'El Quisco', 18),
(64, 'El Tabo', 18),
(65, 'San Antonio', 18),
(66, 'Santo Domingo', 18),
(67, 'Catemu', 19),
(68, 'Llaillay', 19),
(69, 'Panquehue', 19),
(70, 'Putaendo', 19),
(71, 'San Felipe', 19),
(72, 'Santa María', 19),
(73, 'Casablanca', 20),
(74, 'Concón', 20),
(75, 'Juan Fernández', 20),
(76, 'Puchuncaví', 20),
(77, 'Quilpué', 20),
(78, 'Quintero', 20),
(79, 'Valparaíso', 20),
(80, 'Villa Alemana', 20),
(81, 'Viña del Mar', 20),
(82, 'Colina', 21),
(83, 'Lampa', 21),
(84, 'Tiltil', 21),
(85, 'Pirque', 22),
(86, 'Puente Alto', 22),
(87, 'San José de Maipo', 22),
(88, 'Buin', 23),
(89, 'Calera de Tango', 23),
(90, 'Paine', 23),
(91, 'San Bernardo', 23),
(92, 'Alhué', 24),
(93, 'Curacaví', 24),
(94, 'María Pinto', 24),
(95, 'Melipilla', 24),
(96, 'San Pedro', 24),
(97, 'Cerrillos', 25),
(98, 'Cerro Navia', 25),
(99, 'Conchalí', 25),
(100, 'El Bosque', 25),
(101, 'Estación Central', 25),
(102, 'Huechuraba', 25),
(103, 'Independencia', 25),
(104, 'La Cisterna', 25),
(105, 'La Granja', 25),
(106, 'La Florida', 25),
(107, 'La Pintana', 25),
(108, 'La Reina', 25),
(109, 'Las Condes', 25),
(110, 'Lo Barnechea', 25),
(111, 'Lo Espejo', 25),
(112, 'Lo Prado', 25),
(113, 'Macul', 25),
(114, 'Maipú', 25),
(115, 'Ñuñoa', 25),
(116, 'Pedro Aguirre Cerda', 25),
(117, 'Peñalolén', 25),
(118, 'Providencia', 25),
(119, 'Pudahuel', 25),
(120, 'Quilicura', 25),
(121, 'Quinta Normal', 25),
(122, 'Recoleta', 25),
(123, 'Renca', 25),
(124, 'San Miguel', 25),
(125, 'San Joaquín', 25),
(126, 'San Ramón', 25),
(127, 'Santiago', 25),
(128, 'Vitacura', 25),
(129, 'El Monte', 26),
(130, 'Isla de Maipo', 26),
(131, 'Padre Hurtado', 26),
(132, 'Peñaflor', 26),
(133, 'Talagante', 26),
(134, 'Codegua', 27),
(135, 'Coínco', 27),
(136, 'Coltauco', 27),
(137, 'Doñihue', 27),
(138, 'Graneros', 27),
(139, 'Las Cabras', 27),
(140, 'Machalí', 27),
(141, 'Malloa', 27),
(142, 'Mostazal', 27),
(143, 'Olivar', 27),
(144, 'Peumo', 27),
(145, 'Pichidegua', 27),
(146, 'Quinta de Tilcoco', 27),
(147, 'Rancagua', 27),
(148, 'Rengo', 27),
(149, 'Requínoa', 27),
(150, 'San Vicente de Tagua Tagua', 27),
(151, 'La Estrella', 28),
(152, 'Litueche', 28),
(153, 'Marchihue', 28),
(154, 'Navidad', 28),
(155, 'Peredones', 28),
(156, 'Pichilemu', 28),
(157, 'Chépica', 29),
(158, 'Chimbarongo', 29),
(159, 'Lolol', 29),
(160, 'Nancagua', 29),
(161, 'Palmilla', 29),
(162, 'Peralillo', 29),
(163, 'Placilla', 29),
(164, 'Pumanque', 29),
(165, 'San Fernando', 29),
(166, 'Santa Cruz', 29),
(167, 'Cauquenes', 30),
(168, 'Chanco', 30),
(169, 'Pelluhue', 30),
(170, 'Curicó', 31),
(171, 'Hualañé', 31),
(172, 'Licantén', 31),
(173, 'Molina', 31),
(174, 'Rauco', 31),
(175, 'Romeral', 31),
(176, 'Sagrada Familia', 31),
(177, 'Teno', 31),
(178, 'Vichuquén', 31),
(179, 'Colbún', 32),
(180, 'Linares', 32),
(181, 'Longaví', 32),
(182, 'Parral', 32),
(183, 'Retiro', 32),
(184, 'San Javier', 32),
(185, 'Villa Alegre', 32),
(186, 'Yerbas Buenas', 32),
(187, 'Constitución', 33),
(188, 'Curepto', 33),
(189, 'Empedrado', 33),
(190, 'Maule', 33),
(191, 'Pelarco', 33),
(192, 'Pencahue', 33),
(193, 'Río Claro', 33),
(194, 'San Clemente', 33),
(195, 'San Rafael', 33),
(196, 'Talca', 33),
(197, 'Arauco', 34),
(198, 'Cañete', 34),
(199, 'Contulmo', 34),
(200, 'Curanilahue', 34),
(201, 'Lebu', 34),
(202, 'Los Álamos', 34),
(203, 'Tirúa', 34),
(204, 'Alto Biobío', 35),
(205, 'Antuco', 35),
(206, 'Cabrero', 35),
(207, 'Laja', 35),
(208, 'Los Ángeles', 35),
(209, 'Mulchén', 35),
(210, 'Nacimiento', 35),
(211, 'Negrete', 35),
(212, 'Quilaco', 35),
(213, 'Quilleco', 35),
(214, 'San Rosendo', 35),
(215, 'Santa Bárbara', 35),
(216, 'Tucapel', 35),
(217, 'Yumbel', 35),
(218, 'Chiguayante', 36),
(219, 'Concepción', 36),
(220, 'Coronel', 36),
(221, 'Florida', 36),
(222, 'Hualpén', 36),
(223, 'Hualqui', 36),
(224, 'Lota', 36),
(225, 'Penco', 36),
(226, 'San Pedro de La Paz', 36),
(227, 'Santa Juana', 36),
(228, 'Talcahuano', 36),
(229, 'Tomé', 36),
(230, 'Bulnes', 37),
(231, 'Chillán', 37),
(232, 'Chillán Viejo', 37),
(233, 'Cobquecura', 37),
(234, 'Coelemu', 37),
(235, 'Coihueco', 37),
(236, 'El Carmen', 37),
(237, 'Ninhue', 37),
(238, 'Ñiquen', 37),
(239, 'Pemuco', 37),
(240, 'Pinto', 37),
(241, 'Portezuelo', 37),
(242, 'Quillón', 37),
(243, 'Quirihue', 37),
(244, 'Ránquil', 37),
(245, 'San Carlos', 37),
(246, 'San Fabián', 37),
(247, 'San Ignacio', 37),
(248, 'San Nicolás', 37),
(249, 'Treguaco', 37),
(250, 'Yungay', 37),
(251, 'Carahue', 38),
(252, 'Cholchol', 38),
(253, 'Cunco', 38),
(254, 'Curarrehue', 38),
(255, 'Freire', 38),
(256, 'Galvarino', 38),
(257, 'Gorbea', 38),
(258, 'Lautaro', 38),
(259, 'Loncoche', 38),
(260, 'Melipeuco', 38),
(261, 'Nueva Imperial', 38),
(262, 'Padre Las Casas', 38),
(263, 'Perquenco', 38),
(264, 'Pitrufquén', 38),
(265, 'Pucón', 38),
(266, 'Saavedra', 38),
(267, 'Temuco', 38),
(268, 'Teodoro Schmidt', 38),
(269, 'Toltén', 38),
(270, 'Vilcún', 38),
(271, 'Villarrica', 38),
(272, 'Angol', 39),
(273, 'Collipulli', 39),
(274, 'Curacautín', 39),
(275, 'Ercilla', 39),
(276, 'Lonquimay', 39),
(277, 'Los Sauces', 39),
(278, 'Lumaco', 39),
(279, 'Purén', 39),
(280, 'Renaico', 39),
(281, 'Traiguén', 39),
(282, 'Victoria', 39),
(283, 'Corral', 40),
(284, 'Lanco', 40),
(285, 'Los Lagos', 40),
(286, 'Máfil', 40),
(287, 'Mariquina', 40),
(288, 'Paillaco', 40),
(289, 'Panguipulli', 40),
(290, 'Valdivia', 40),
(291, 'Futrono', 41),
(292, 'La Unión', 41),
(293, 'Lago Ranco', 41),
(294, 'Río Bueno', 41),
(295, 'Ancud', 42),
(296, 'Castro', 42),
(297, 'Chonchi', 42),
(298, 'Curaco de Vélez', 42),
(299, 'Dalcahue', 42),
(300, 'Puqueldón', 42),
(301, 'Queilén', 42),
(302, 'Quemchi', 42),
(303, 'Quellón', 42),
(304, 'Quinchao', 42),
(305, 'Calbuco', 43),
(306, 'Cochamó', 43),
(307, 'Fresia', 43),
(308, 'Frutillar', 43),
(309, 'Llanquihue', 43),
(310, 'Los Muermos', 43),
(311, 'Maullín', 43),
(312, 'Puerto Montt', 43),
(313, 'Puerto Varas', 43),
(314, 'Osorno', 44),
(315, 'Puero Octay', 44),
(316, 'Purranque', 44),
(317, 'Puyehue', 44),
(318, 'Río Negro', 44),
(319, 'San Juan de la Costa', 44),
(320, 'San Pablo', 44),
(321, 'Chaitén', 45),
(322, 'Futaleufú', 45),
(323, 'Hualaihué', 45),
(324, 'Palena', 45),
(325, 'Aisén', 46),
(326, 'Cisnes', 46),
(327, 'Guaitecas', 46),
(328, 'Cochrane', 47),
(329, 'O\'higgins', 47),
(330, 'Tortel', 47),
(331, 'Coihaique', 48),
(332, 'Lago Verde', 48),
(333, 'Chile Chico', 49),
(334, 'Río Ibáñez', 49),
(335, 'Antártica', 50),
(336, 'Cabo de Hornos', 50),
(337, 'Laguna Blanca', 51),
(338, 'Punta Arenas', 51),
(339, 'Río Verde', 51),
(340, 'San Gregorio', 51),
(341, 'Porvenir', 52),
(342, 'Primavera', 52),
(343, 'Timaukel', 52),
(344, 'Natales', 53),
(345, 'Torres del Paine', 53);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comunidades`
--

CREATE TABLE `comunidades` (
  `id_comunidades` int(11) NOT NULL,
  `nombre` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `programa` int(11) NOT NULL,
  `socios` int(3) DEFAULT NULL,
  `sector` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `presidente` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `rubroprincipal` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `autoridadancestral` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `liderazgos` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `comunidadescol` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `create` timestamp NULL DEFAULT NULL,
  `update` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `comunidades`
--

INSERT INTO `comunidades` (`id_comunidades`, `nombre`, `programa`, `socios`, `sector`, `presidente`, `rubroprincipal`, `autoridadancestral`, `liderazgos`, `comunidadescol`, `create`, `update`) VALUES
(1, 'PAILE PAILE', 1, 7, '325', 'RUBEN VALLEJOS ACUÑA', 'GANADERIA MAYOR', '', '', '', NULL, NULL),
(2, 'CAREN ALTO', 1, 20, '273', 'MIRNA APABLAZA CORDOVA', 'APICULTURA, BOVINOS, OBINOS', NULL, NULL, NULL, NULL, NULL),
(3, 'HUECHELEPUN', 1, 22, '273', 'ARTURO CORDOVA LEMA', 'BOVINOS, OVINOS, TURISMO, PRADERAS', NULL, NULL, NULL, NULL, NULL),
(4, 'MOLULCO', 1, 12, '273', 'CARLOS CERDA URRA', 'BOVINOS, OVINOS,CAPRINOS, APICULTURA, TURISMO', NULL, NULL, NULL, NULL, NULL),
(13, 'CASA BLANCA', 1, 26, '273', 'JUANA CATALAN PARADA', 'BOVINOS, OVINOS, TURISMO', NULL, NULL, NULL, NULL, NULL),
(14, 'LONCOTRIUQUE', 1, 17, '273', 'JOSE VARELA OLIVERA', 'BOVINOS, OVINOS, TURISMO, PRADERAS', NULL, 'RED DE TURISMO RURAL LONCOTRIUQUE', NULL, NULL, NULL),
(15, 'ALTO LLAIMA', 2, 26, '273', 'Natalie Aburto Cancino', 'Multi Rubro Autoconsumo, recoleccion', NULL, NULL, NULL, NULL, NULL),
(16, 'LEGNAY', 2, 11, '273', 'Hernám Cayumán Calfullán', 'Autoconsumo producción ganadera y recolección, turismo', NULL, NULL, NULL, NULL, NULL),
(17, 'ESCORIAL', 2, 15, '325', 'Andrés Melivilu Jaramillo', 'Autoconsumo multirubro, recolección y turismo', '', '', '', NULL, NULL),
(18, 'SANTA JULIA', 2, 4, '273', 'Mercedes Painevil Huenupi', 'Autoconsumo multirubro, recolección y turismo', NULL, NULL, NULL, NULL, NULL),
(19, 'CHERQUEN', 2, 25, '273', 'Miriam Loyola Poblete', 'Autoconsumo produccion ganadera, turismo', NULL, NULL, NULL, NULL, NULL),
(20, 'El Membrillo', 3, 20, '273', 'Joaquin Parra Sandoval', 'Frutales, Hortalizas, ganadería turismo', NULL, NULL, NULL, NULL, NULL),
(21, 'Juan Meli', 3, 21, '273', 'Sandra Carrasco Parra', 'Autoconsumo producción ganadera y recolección, turismo', NULL, NULL, NULL, NULL, NULL),
(22, 'Esteban Romero', 3, 8, '273', 'Gabriela Jara Vasquez', 'Autoconsumo producción ganadera y recolección.', NULL, NULL, NULL, NULL, NULL),
(23, 'Nicolas Huenchumn', 3, 12, '273', 'Laura Cortes Arias', 'Autoconsumo produccion ganadera ', NULL, NULL, NULL, NULL, NULL),
(24, 'Nicolas Huencuman 2', 3, 14, '273', 'Gricelda Campos Huenchuman', 'Autoconsumo produccion ganadera, apicultura.', NULL, NULL, NULL, NULL, NULL),
(25, 'Tres Esquina', 3, 13, '273', 'Juan Nicolas Calfullan Ovando', 'Autoconsumo producción ganadera y recolección, turismo', NULL, NULL, NULL, NULL, NULL),
(26, 'Flor del VAlle', 3, 26, '273', 'Manuel Gonzales Arias', 'Autoconsumo produccion ganadera, turismo', NULL, NULL, NULL, NULL, NULL),
(27, 'Tracura', 3, 14, '273', 'Mario Cuevas Tagle', 'Autoconsumo producción ganadera, turismo', NULL, NULL, NULL, NULL, NULL),
(28, 'Esteban Traipe', 3, 15, '273', 'Rosa Romero Albino', 'Autoconsumo producción ganadera', NULL, NULL, NULL, NULL, NULL),
(29, 'Llaima', 4, 16, '273', 'Jacinto Lienlaf M, Clorinda Zulema Lienlaf', 'Multirubro-Autoconsumo', NULL, NULL, NULL, NULL, NULL),
(30, 'Llaima', 4, 14, '273', 'Moisés Trecanao, Rosentina Huichacura', 'Multirubro-Autoconsumo', NULL, NULL, NULL, NULL, NULL),
(31, 'Llaima', 4, 25, '273', 'Bernardino Melillan,Gloria Melillan', 'Multirubro-Autoconsumo', NULL, NULL, NULL, NULL, NULL),
(32, 'Llaima', 4, 29, '273', 'Ilia Cotrena San Martín, Susana Huilipan', 'Multirubro-Autoconsumo', NULL, NULL, NULL, NULL, NULL),
(33, 'Llaima', 4, 15, '273', 'Maclina Mella C., Gerardo Morales', 'Multirubro-Autoconsumo', NULL, NULL, NULL, NULL, NULL),
(34, 'Llaima', 4, 33, '273', 'Juan A. Ayenao, Juan E. Ayenao', 'Multirubro-Autoconsumo', NULL, NULL, NULL, NULL, NULL),
(35, 'Caren Bajo', 5, 13, '273', 'Sandra Caballos Jofre', 'Autoconsumo producción ganadera y recolección, turismo', NULL, NULL, NULL, NULL, NULL),
(36, 'Cumcumllaque', 5, 15, '273', 'Uberlinda Hernandez Sepulveda', 'Autoconsumo producción ganadera y recolección, Hortalizas', NULL, NULL, NULL, NULL, NULL),
(37, 'Francisco Ovando', 5, 14, '273', 'Victor Calfullan martines', 'Autoconsumo producción ganadera y recolección, Hortalizas', NULL, NULL, NULL, NULL, NULL),
(38, 'Jacinto Lefiñir', 5, 18, '325', 'Adelina Neipan Huenupi', 'Autoconsumo producción ganadera y recolección, Hortalizas', '', '', '', NULL, NULL),
(39, 'Esteban Trecaman', 5, 19, '273', 'Jose Emilio Pichuntru Trecaman', 'Autoconsumo producción ganadera y recolección, Hortalizas', NULL, NULL, NULL, NULL, NULL),
(40, 'Huallerupe', 5, 20, '273', 'Veronica Canio Relmucao', 'Autoconsumo producción ganadera y recolección, Hortalizas', NULL, NULL, NULL, NULL, NULL),
(41, 'Andres Huenupi', 5, 12, '273', 'Luis Antemio Huenupi Trecaman', 'Autoconsumo producción ganadera y recolección, Hortalizas', NULL, NULL, NULL, NULL, NULL),
(42, 'Alpehue alto2', 5, 27, '325', 'Isaac Raillan Huanchullan', 'Autoconsumo producción ganadera y recolección, Hortalizas', '', '', '', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `emprendedor`
--

CREATE TABLE `emprendedor` (
  `rut` varchar(255) DEFAULT NULL,
  `nombres` varchar(500) DEFAULT NULL,
  `apellidos` varchar(500) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `telefono` varchar(100) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `id_comuna` int(100) DEFAULT NULL,
  `latitud` varchar(10000) DEFAULT NULL,
  `longitud` varchar(10000) DEFAULT NULL,
  `tenencia` int(2) NOT NULL,
  `regularizado` int(2) DEFAULT NULL,
  `id_programa` int(45) DEFAULT NULL,
  `ejecutivo` varchar(45) DEFAULT NULL,
  `electricidad` int(2) DEFAULT NULL,
  `agua` int(2) DEFAULT NULL,
  `subsidio` int(2) DEFAULT NULL,
  `gfamiliaradultos` int(2) DEFAULT NULL,
  `gfamiliarmenores` int(2) DEFAULT NULL,
  `indigena` int(2) DEFAULT NULL,
  `otrosingresos` int(2) DEFAULT NULL,
  `descripcioningresos` varchar(45) DEFAULT NULL,
  `iniciacion_actividad` int(2) DEFAULT '0',
  `asociativo` int(2) DEFAULT NULL,
  `nombreasociativo` int(2) DEFAULT NULL,
  `nivel_ventas` tinyint(4) DEFAULT NULL,
  `innovacion` tinyint(4) DEFAULT NULL,
  `ventas` varchar(100) DEFAULT NULL,
  `etapa_desarrollo` tinyint(4) DEFAULT NULL,
  `escalamiento` tinyint(4) DEFAULT NULL,
  `numero_trabajadores` tinyint(20) DEFAULT NULL,
  `jornada` tinyint(4) DEFAULT NULL,
  `actividad_economica` int(11) DEFAULT NULL,
  `genero` int(2) DEFAULT NULL,
  `edad` date DEFAULT NULL,
  `educacion` int(4) DEFAULT NULL,
  `fondo_adjudicado` int(2) DEFAULT NULL,
  `finanziamiento` int(2) DEFAULT NULL,
  `sector_productivo` int(10) DEFAULT NULL,
  `tipo_propiedad` int(10) DEFAULT NULL,
  `infraestructura` int(3) DEFAULT NULL,
  `capacidad_productiva` int(20) DEFAULT NULL,
  `formalizacion` int(2) DEFAULT NULL,
  `vendiendo` int(2) DEFAULT NULL,
  `niveles_venta` int(4) DEFAULT NULL,
  `territorio_ventas` int(2) DEFAULT NULL,
  `canal_venta` int(2) DEFAULT NULL,
  `capacidad_escala` tinyint(4) DEFAULT NULL,
  `claridad` tinyint(4) DEFAULT NULL,
  `redes` tinyint(4) DEFAULT NULL,
  `marketing` tinyint(4) DEFAULT NULL,
  `inversión` tinyint(4) DEFAULT NULL,
  `acceso_bancario` tinyint(4) DEFAULT NULL,
  `competencia` tinyint(4) DEFAULT NULL,
  `nivel_desarrollo` tinyint(4) DEFAULT NULL,
  `estacionalidad` tinyint(4) DEFAULT NULL,
  `conocimientos` tinyint(4) DEFAULT NULL,
  `comerciales` tinyint(4) DEFAULT NULL,
  `redes_de_apoyo` tinyint(4) DEFAULT NULL,
  `competencias` tinyint(4) DEFAULT NULL,
  `acceso_financiero` tinyint(4) DEFAULT NULL,
  `emprendimiento` varchar(1000) DEFAULT NULL,
  `emprendimientodir` varchar(1000) DEFAULT NULL,
  `activo` tinyint(4) DEFAULT NULL,
  `fecha_creacion` datetime DEFAULT NULL,
  `id_emprendedor` int(254) NOT NULL,
  `rolsii` varchar(1000) DEFAULT NULL,
  `superficie` varchar(100) DEFAULT NULL,
  `estado` tinyint(4) DEFAULT '1',
  `create` timestamp NULL DEFAULT NULL,
  `update` timestamp NULL DEFAULT NULL,
  `id_ficha` int(45) DEFAULT NULL,
  `patente` int(11) DEFAULT NULL,
  `resolucion` int(11) DEFAULT NULL,
  `capacitaciones` int(11) DEFAULT NULL,
  `id_uso_suelo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `emprendedor`
--

INSERT INTO `emprendedor` (`rut`, `nombres`, `apellidos`, `direccion`, `telefono`, `email`, `id_comuna`, `latitud`, `longitud`, `tenencia`, `regularizado`, `id_programa`, `ejecutivo`, `electricidad`, `agua`, `subsidio`, `gfamiliaradultos`, `gfamiliarmenores`, `indigena`, `otrosingresos`, `descripcioningresos`, `iniciacion_actividad`, `asociativo`, `nombreasociativo`, `nivel_ventas`, `innovacion`, `ventas`, `etapa_desarrollo`, `escalamiento`, `numero_trabajadores`, `jornada`, `actividad_economica`, `genero`, `edad`, `educacion`, `fondo_adjudicado`, `finanziamiento`, `sector_productivo`, `tipo_propiedad`, `infraestructura`, `capacidad_productiva`, `formalizacion`, `vendiendo`, `niveles_venta`, `territorio_ventas`, `canal_venta`, `capacidad_escala`, `claridad`, `redes`, `marketing`, `inversión`, `acceso_bancario`, `competencia`, `nivel_desarrollo`, `estacionalidad`, `conocimientos`, `comerciales`, `redes_de_apoyo`, `competencias`, `acceso_financiero`, `emprendimiento`, `emprendimientodir`, `activo`, `fecha_creacion`, `id_emprendedor`, `rolsii`, `superficie`, `estado`, `create`, `update`, `id_ficha`, `patente`, `resolucion`, `capacitaciones`, `id_uso_suelo`) VALUES
('', 'Constanza  ', 'Monsalve', 'Las quintas B km. 4,5 camino a Chol chol', '971394210', 'arboledaemaluisa@gmail.com', 267, '-72,66504444', '-38,69486111', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $8.400.000 ', 0, 0, 2, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Arboleda Ema Luisa', '0', 0, '2022-08-10 00:00:00', 1, '76.754.916-4', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('17.652.829-k', 'Matias ', 'fuentes', 'Av Barros Arana 29', '972536212', 'cervezavandermolen@gmail.com', 259, '-72,62575556', '-39,36582778', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $8.000.000 ', 0, 0, 1, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Cerveza Van del Molen', '0', 0, '2022-08-10 00:00:00', 2, '', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('13.805.237-0', 'Cristian  ', 'Sepulveda', 'los confines 483', '977484530', 'ferretsanjoaquin.angol@gmail.com', 272, '-72,69587778', '-37,79502778', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $240.000.000 ', 0, 0, 2, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Ferreteria San Joaquin', '0', 0, '2022-08-10 00:00:00', 3, '', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Nayade ', 'Quelempan ', 'Fiorentina, 01631 villa alameda', '971612278', 'cristea39@gmail.com', 267, '-72,62910278', '-38,75714167', 0, 0, 1, '0', 0, 0, 0, 0, 0, 1, 0, '0', 0, 0, 0, 0, 0, ' $6.000.000 ', 0, 0, 2, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Aji Don Maty', '0', 0, '2022-08-10 00:00:00', 4, '77.449.843-5', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Alex Ivan  ', 'Romero', 'pedro de oia 800', '974851055', 'contacto.chucaokayak@gmail.com', 271, '-72,23559167', '-39,28034167', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $13.000.000 ', 0, 0, 2, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Chucaco Kayak', '0', 0, '2022-08-10 00:00:00', 5, '77.062.783-4', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('14.218.453-2', 'Sergio  ', 'Melo', 'torremolinos 450 local 230 mall mirage', '982209538', 'sergiomelocofre@gmail.com', 267, '-72,614875', '-38,73207778', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, '', 0, 0, 4, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Creasmile', '0', 0, '2022-08-10 00:00:00', 6, '', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('9.992888-3', 'Ginette ', 'Tralma ', 'Sector Curaco Pehuenche', '979214132', 'Merkencuraco@gmail.com', 252, '-72,87547222', '-38,56594444', 0, 0, 1, '0', 0, 0, 0, 0, 0, 1, 0, '0', 0, 0, 0, 0, 0, ' $50.000.000 ', 0, 0, 4, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Curaco Gourmet', '0', 0, '2022-08-10 00:00:00', 7, '', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Francisco ', 'Aguilera ', 'Manuel Montt 290 local 8 ', '961575406', 'klgofrancisco@gmail.com', 267, '-72,62223056', '-38,73123889', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $300.000.000 ', 0, 0, 5, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Fuente de soda Garden', '0', 0, '2022-08-10 00:00:00', 8, '76.720.994-0', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Laura ', 'Aedo ', 'Camino Villarrica a Pucin KM10', '956375530', 'contacto@wenupillan.cl', 271, '-72,102625', '-39,29850556', 0, 0, 1, '0', 0, 0, 0, 0, 0, 1, 0, '0', 0, 0, 0, 0, 0, ' $70.000.000 ', 0, 0, 4, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Wenu Pillan', '0', 0, '2022-08-10 00:00:00', 9, '76.900.451-3', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Paula Leon ', '', 'reusch 406', '950189663', 'contacto@manzanilla.cl', 267, '-72,61744167', '-38,73173333', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $58.000.000 ', 0, 0, 2, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Manzanilla', '0', 0, '2022-08-10 00:00:00', 10, '', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Yanira ', 'Valdivieso', 'camino villarrica lican ray km 16', '984132255', 'yvaldivieso@nativasdeco.cl', 271, '-71,90780278', '-39,27178056', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $48.000.000 ', 0, 0, 4, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Nativas Deco', '0', 0, '2022-08-10 00:00:00', 11, '77.335.397-2', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Nicolas ', 'Palma', 'San Martin 438', '991478354', 'nico@raelv.cl', 267, '-72,59623889', '-38,74190833', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, '', 0, 0, 5, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Rutas Australes', '0', 0, '2022-08-10 00:00:00', 12, '76.432.188-k', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Vicente ', 'Llanquinao', 'camino tromen km 5sector 5 ', '953700634', 'info@sturnella.cl', 267, '-72,61697222', '-38,72448333', 0, 0, 1, '0', 0, 0, 0, 0, 0, 1, 0, '0', 0, 0, 0, 0, 0, ' $45.000.000 ', 0, 0, 3, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Sturnella', '0', 0, '2022-08-10 00:00:00', 13, '', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Jaime ', 'Candia', 'viertel 588', '982206473', 'jaimecandia@tiempo21.cl982206473', 267, '-72,61066111', '-38,73521389', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $75.000.000 ', 0, 0, 3, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Tiempo 21', '0', 0, '2022-08-10 00:00:00', 14, '76.675.899-1', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Tomas ', 'Gutierrez', 'km 2,5 villarrica a lican ray ', '961397965', 'andres@tronconoble.com', 271, '-72,23010278', '-39,31600556', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, '', 0, 0, 11, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Tronco Noble', '0', 0, '2022-08-10 00:00:00', 15, '76.346.069-k', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Maria Cristina ', 'Rebolledo ', 'Sexta faja, Manhue km#18', '991391070', 'granjalaslagunassextafaja@gmail.com', 259, '-72,40161111', '-39,22447222', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $5.000.000 ', 0, 0, 6, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Granja Las Lagunas', '0', 0, '2022-08-10 00:00:00', 16, '76.765.206-2', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Peter ', 'Brunner', 'km 12, 5 camino Huincacara Sur', '995307981', 'contacto@huincaterra.cl', 271, '-72,09736944', '-39,39168611', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $130.000.000 ', 0, 0, 3, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Huinca Terra', '0', 0, '2022-08-10 00:00:00', 17, '', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Ricardo Koch V.', '', 'Av. Altamira 02051', '957990635', 'contacto@chefkoch.cl', 267, '-72,60184722', '-38,728825', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $12.000.000 ', 0, 0, 4, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Biodeli', '0', 0, '2022-08-10 00:00:00', 18, '76.947.082-4', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Alejandro ', 'Contreras ', 'Dr. Garriga 1266', '952384657', 'alejandro.contreras@d3si.cl', 270, '-73,07461944', '-38,03500556', 0, 0, 1, '0', 0, 0, 0, 0, 0, 1, 0, '0', 0, 0, 0, 0, 0, ' $300.000.000 ', 0, 0, 3, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'D3si', '0', 0, '2022-08-10 00:00:00', 19, '77.058.146-K', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Victor  ', 'Palma', 'iviador Acevedo 1074, local 4', '992258845', 'hieloslacustrevillarrica@gmail.com', 271, '-72,22855833', '-39,289475', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $35.000.000 ', 0, 0, 3, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Hielos Lacustre', '0', 0, '2022-08-10 00:00:00', 20, '77.088.821-2', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Arturo ', 'Campomanes', 'Las Heras 852', '998734345', 'laboratorio.avellina@gmail.com', 267, '-72,59663056', '-38,7411', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $160.000.000 ', 0, 0, 12, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Laboratorio Avellina', '0', 0, '2022-08-10 00:00:00', 21, '76.060.636-7', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Maria ', 'Arraras', 'Rucahue Chomio Km. 6', '998296660', 'pilarraras@gmail.com', 251, '-73,40810278', '-38,70669444', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' No Sabe ', 0, 0, 1, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Turismo Maria del Pilar Arraras', '0', 0, '2022-08-10 00:00:00', 22, '77.054.868-3', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Hada ', 'Diaz', '12 de febrero 0851', '953523044', 'paulina@nohue.cl', 267, '-72,57620278', '-38,72649722', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $35.000.000 ', 0, 0, 5, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Nohue', '0', 0, '2022-08-10 00:00:00', 23, '76.888.621-0', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Oriette ', 'Sandoval ', 'Inglaterra 509', '942008277', 'ofquieditores@gmail.com', 267, '-72,6073', '-38,73305556', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' - ', 0, 0, 4, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Ofqui, Editorial y Lebreria', '0', 0, '2022-08-10 00:00:00', 24, '76.107.989-1', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Pilar - Rene ', 'Quidel - Galindo', 'Camino Niagara Km. 3,4 Ruta S-269 ', '941510577', 'hola@tencaisidra.cl', 262, '-72,55506667', '-38,74165833', 0, 0, 1, '0', 0, 0, 0, 0, 0, 1, 0, '0', 0, 0, 0, 0, 0, ' $15.000.000 ', 0, 0, 3, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Sidra Tencai', '0', 0, '2022-08-10 00:00:00', 25, '77.153.368-K', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Juana ', 'Collihuin', 'Republica 027', '94902456', 'jcollihuin71@gmail.com', 261, '-72,94654167', '-38,74190278', 0, 0, 1, '0', 0, 0, 0, 0, 0, 1, 0, '0', 0, 0, 0, 0, 0, ' $8.000.000 ', 0, 0, 2, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Juana Collihuin', '0', 0, '2022-08-10 00:00:00', 26, '75.122.52-7', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Patricia  ', 'Avila', 'El Ventisquero 02703', '978242823', 'contacto@tentenvilu.cl', 267, '-72,63824722', '-38,72917778', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $400.000.000 ', 0, 0, 4, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Tente Vilu', '0', 0, '2022-08-10 00:00:00', 27, '76.699.945-K', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Paulino ', 'Catalan ', 'Sexta Faja Km. 18 Manhue', '941682954', 'ventas@cacherodelaspampas.cl', 259, '-72,46417778', '-39,20197222', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' - ', 0, 0, 1, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Cachero de Las Pampas', '0', 0, '2022-08-10 00:00:00', 28, '77.151.809-5', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Matias ', 'Nahrwold', 'Km. 2,5 Ruta S-745 Huiscapi', '996424966', 'matias@cervezablau.cl', 259, '-72,42309167', '-39,300475', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $7.000.000 ', 0, 0, 2, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Cerveza Blau', '0', 0, '2022-08-10 00:00:00', 29, '76.711.675-6', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Marcelo ', 'Rivera ', 'Ruta S-959 Menetue', '997151959', 'marceloriveran@gmail.com', 265, '-71,6933', '-39,34025', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' - ', 0, 0, 9, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Montevivo Termas', '0', 0, '2022-08-10 00:00:00', 30, '76.815.121-0', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Ximena ', 'Miranda', 'Km. 746 Ruta 5 Sur', '993276521', 'ventas@collimallin.cl', 259, '-72,56578056', '-39,34610278', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $1.400.000.000 ', 0, 0, 13, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Quesos Collimallin', '0', 0, '2022-08-10 00:00:00', 31, '76.452.518-3', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Oscar ', 'arriaza', 'Km 5 ruta S 40 ', '968166887', 'Oscararriazagamil.com', 261, '-72,95394722', '-38,74356111', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $48.000.000 ', 0, 0, 3, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Cafeteria Florencia', '0', 0, '2022-08-10 00:00:00', 32, '76.755.605-5', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('15.986.954-7', '', '', 'Guyana 0155', '992767498', 'm.elcastano9@gmail.com', 267, '-72,61345556', '-38,74666111', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $60.000.000 ', 0, 0, 7, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'El Castaio SPA', '0', 0, '2022-08-10 00:00:00', 33, '', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('22.065.028-6', 'Juan fernando ', 'Araya', 'Ruperto millar 0150 ', '979934710', 'juanfernando.araya2@gmail.com', 259, '-72,61989167', '-39,36812222', 0, 0, 1, '0', 0, 0, 0, 0, 0, 1, 0, '0', 0, 0, 0, 0, 0, ' $12.000.000 ', 0, 0, 3, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Fit & Fresh', '0', 0, '2022-08-10 00:00:00', 34, '', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('9.047407-3', 'Verinica ', 'Cortez', 'Sector Elocoyan, Km. 5, Loncoche', '968491953', 'contacto@florahue.cl', 259, '-72,62800833', '-39,33060833', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $15.000.000 ', 0, 0, 3, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Florahue', '0', 0, '2022-08-10 00:00:00', 35, '', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('10.549.622-2', 'Gladys ', 'Acuia', 'Langdon 8 541', '949041626', 'cristian.westermeyer@gmail.com', 267, '-72,55663333', '-38,72542778', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $6.000.000 ', 0, 0, 1, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Gladys Acuia', '0', 0, '2022-08-10 00:00:00', 36, '', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('17.660.455-7', 'Sergio ', 'Arias', 'Catherine Horley 0302', '954794428', 'sandovalrubilars@gmail.com', 259, '-72,6216', '-39,36341944', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $25.000.000 ', 0, 0, 3, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Cerveceria Khaos', '0', 0, '2022-08-10 00:00:00', 37, '', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Ginette ', 'Parra', 'Martin lutero 02776', '985013702', 'Ginetparra@gmail.com', 267, '-72,64900278', '-38,74343889', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $60.000.000 ', 0, 0, 5, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'La Parra Cerimica', '0', 0, '2022-08-10 00:00:00', 38, '76.919.544-0', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Carlos ', 'Rodriguez', 'Martin lutero 03006', '989030641', 'carc71@gmail.com', 267, '-71,75379722', '-38,03771944', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $- ', 0, 0, 0, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Refugio Las Mentas', '0', 0, '2022-08-10 00:00:00', 39, '76.243.234-k', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Paola ', 'Huenupe', 'Parcela 10, Alto Chufquen, ', '998784512', 'rukachufquen@gmail.com', 281, '-72,66889167', '-38,28008611', 0, 0, 1, '0', 0, 0, 0, 0, 0, 1, 0, '0', 0, 0, 0, 0, 0, ' $26.000.000 ', 0, 0, 2, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Ruka Chufquen', '0', 0, '2022-08-10 00:00:00', 40, '77.280.449-0', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Henry ', 'Molina', 'Pasaje volcan osorno 1441', '98957045', 'henry.molina.araneda@gmail.com', 259, '-72,641025', '-39,37553611', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $14.000.000 ', 0, 0, 3, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Santa Cerveza', '0', 0, '2022-08-10 00:00:00', 41, '77.323.705-0', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Yercko ', 'Viveros', 'Avenida los pablos 1969', '985780688', 'yercko.viveros@gmail.com', 267, '-72,63906389', '-38,74508333', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $156.000.000 ', 0, 0, 12, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Santino', '0', 0, '2022-08-10 00:00:00', 42, '77.128.711-5', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Luis ', 'Canales', '21 de mayo 167 Quepe', '956940178', 'temperodelsur@gmail.com', 255, '-72,61501944', '-38,86885278', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $24.000.000 ', 0, 0, 3, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Tempero', '0', 0, '2022-08-10 00:00:00', 43, '76.333.554-2', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Wilma ', 'Levil', 'Km 12 camino carahue a nehuentue', '944055375', 'omilenantucarahue@gmail.com', 251, '-73,27709167', '-38,69674444', 0, 0, 1, '0', 0, 0, 0, 0, 0, 1, 0, '0', 0, 0, 0, 0, 0, ' $17.000.000 ', 0, 0, 3, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Nativo Diko ', '0', 0, '2022-08-10 00:00:00', 44, '76.648.493-k', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Angelo ', 'Quilodrin', 'Porvenir 1375', '987066368', 'd.catalan@yoggie.cl', 259, '-72,627275', '-39,38160833', 0, 0, 1, '0', 0, 0, 0, 0, 0, 1, 0, '0', 0, 0, 0, 0, 0, ' $60.000.000 ', 0, 0, 4, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Yoggie', '0', 0, '2022-08-10 00:00:00', 45, '76.946.083-7', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Marioli ', 'Figueroa', 'Gabriela Mistral 03075', '968477532', 'mfigueroa@inversionesayf.cl', 267, '-72,64546944', '-38,73626667', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' - ', 0, 0, 1, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Petit Boulon', '0', 0, '2022-08-10 00:00:00', 46, '76.388.886-K', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Sandra ', 'Cifuentes', 'Huepil Km. 10', '985981531', 'contacto@domohuepil.cl', 265, '-71,73901389', '-39,23327778', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $48.000.000 ', 0, 0, 6, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Domo Huepil', '0', 0, '2022-08-10 00:00:00', 47, '76.663.951-8', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('18.434.779-2', 'Michael ', 'Paredes', 'Los cedros 907', '977629745', 'ninjapizzapucon@gmail.com', 265, '-71,96634722', '-39,27455278', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $37.000.000 ', 0, 0, 5, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Ninja Pizzas', '0', 0, '2022-08-10 00:00:00', 48, '', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Rene ', 'Lopez', 'Andris Bello 1044 - Depto. A', '968287079', 'rlopez@kotoduo.cl', 267, '-72,58806667', '-38,742', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $230.000.000 ', 0, 0, 13, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Kotoduo Producciones', '0', 0, '2022-08-10 00:00:00', 49, '76.583.763-4', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Juan Carlos  ', 'Amand', 'Km 6.3 Camino Villarrica-Pucin', '989035008', 'contacto@cervezacrater.cl', 271, '-72,15898056', '-39,29916944', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $165.000.000 ', 0, 0, 3, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Cerveza Crater', '0', 0, '2022-08-10 00:00:00', 50, '76.564.350-3', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Patricio Fernando ', 'Casagrande ', 'Los Pellines 01557', '996427245', 'casagrande.patricio@gmail.com', 271, '-72,22602778', '-39,28843611', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' - ', 0, 0, 3, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Constructora Ambilar', '0', 0, '2022-08-10 00:00:00', 51, '76.229.322-6', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Sergio ', 'Rios ', 'Av Rudecindo Ortega 0710', '971380021', 'adm.temuco@cecinasentrerios.cl', 267, '-72,57575556', '-38,72732778', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $840.000.000 ', 0, 0, 19, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Fabrica de Cecinas', '0', 0, '2022-08-10 00:00:00', 52, '76.357.825-9', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('18.832.909-8', 'Nicolas Ignacio ', 'Arriagada ', 'Camino Aeropuerto Parcela 6', '958692667', 'contacto@hemisferiosustentable.cl', 265, '-71,40082222', '-39,30710556', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $14.000.000 ', 0, 0, 4, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Hemisferio Sustentable', '0', 0, '2022-08-10 00:00:00', 53, '', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Marcelina ', 'Huentecura ', 'Sector Taife S/N', '995977655', 'ulchakuyen@gmail.com', 251, '-73,11302778', '-38,70966667', 0, 0, 1, '0', 0, 0, 0, 0, 0, 1, 0, '0', 0, 0, 0, 0, 0, ' $4.000.000 ', 0, 0, 0, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Plateria ilchkuyen', '0', 0, '2022-08-10 00:00:00', 54, '76.821.249-K', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Maritza Susana ', 'Pereira ', 'Cornelio Saavedra 115', '979949408', 'maritzasup@gmail.com', 267, '-72,561925', '-38,72698056', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $120.000.000 ', 0, 0, 1, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Minimercado Maritza Pereira', '0', 0, '2022-08-10 00:00:00', 55, '76.776.943-1', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Soraya ', 'Araya', 'Pasaje Angelo Sodano 170', '994462662', 'petiscosaraucanos@gmail.com', 274, '-71,89667222', '-38,43129722', 0, 0, 1, '0', 0, 0, 0, 0, 0, 1, 0, '0', 0, 0, 0, 0, 0, ' $13.000.000 ', 0, 0, 3, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Petisco Araucano', '0', 0, '2022-08-10 00:00:00', 56, '76.536.173-7', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Claudia Lorena ', 'Tapia ', 'Camino Los Aromos Parcela 22', '977807919', 'gerencia@cumbresaraucania.cl', 267, '-72,58896111', '-38,72440556', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $240.000.000 ', 0, 0, 9, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Restoran Cumbre', '0', 0, '2022-08-10 00:00:00', 57, '76.867.767-0', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Rosa ', 'Pilquinao ', 'Comunidad Indigena Toro Mellin', '981240776', 'vinatrayenko@gmail.com', 256, '-72,62959444', '-38,45214444', 0, 0, 1, '0', 0, 0, 0, 0, 0, 1, 0, '0', 0, 0, 0, 0, 0, ' $1.200.000 ', 0, 0, 4, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Trayenco', '0', 0, '2022-08-10 00:00:00', 58, '77.147.605-8', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('9.516.908-2', 'Julio Roberto ', 'Rodriguez ', 'Pasaje Arriagada Km, 2', '964073261', 'jrodriguez610@hotmail.com', 265, '-71,95961111', '-39,301375', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $72.000.000 ', 0, 0, 3, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Veterinaria Alto Pucin', '0', 0, '2022-08-10 00:00:00', 59, '', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Patricio ', 'Toledo', 'Camino Pucon A Vca Km 6 S/N', '981385236', 'patricio@woodnic.cl', 271, '-72,21788333', '-39,29126389', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, '-', 0, 0, 1, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Woodnic', '0', 0, '2022-08-10 00:00:00', 60, '76.620.243-8', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Narciso Alejandro ', 'Martini ', 'Kilimetro 3,5 Ruta Villarrica a Freire.', '941657279', 'contacto@berrysur.com', 271, '-72,24392778', '-39,24705', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, '-', 0, 0, 0, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Berry Sur', '0', 0, '2022-08-10 00:00:00', 61, '78.665.580-3', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Jorge ', 'Reinao', 'Sector Coihue S/N cholchol', '978919016', 'jorge.reinao@gmail.com', 267, '-72,85745', '-38,65270833', 0, 0, 1, '0', 0, 0, 0, 0, 0, 1, 0, '0', 0, 0, 0, 0, 0, '-', 0, 0, 10, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Rewe', '0', 0, '2022-08-10 00:00:00', 62, '65.038.054-1', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Maria ', 'Prieto', 'Camino Villarrica/Freire', '988680614', 'contacto@kombuchacha.cl', 255, '-72,54174722', '-38,98136389', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, '-', 0, 0, 25, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Kombuchacha', '0', 0, '2022-08-10 00:00:00', 63, '76.792.536-0', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Liliana ', 'Aguilera ', 'Bilbao 278', '992894882', 'agricoladonpedro@gmail.com', 272, '-72,69964444', '-37,80099444', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $585.000.000 ', 0, 0, 7, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Agricola Don Pedro', '0', 0, '2022-08-10 00:00:00', 64, '76.312.395-2', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Yinett ', 'Castro', 'Calderin de la Barca 3521', '986999904', 'yinette.pcastro@gmail.com', 267, '-72,60189722', '-38,728875', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $7.500.000 ', 0, 0, 2, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Alimentos IKA', '0', 0, '2022-08-10 00:00:00', 65, '76.896.999-K', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Eduardo Mauricio ', 'Pino ', 'Av. O\'Higgins 805', '995408479', 'bodega805.angol@gmail.com', 272, '-72,69761389', '-37,80315833', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $15.000.000 ', 0, 0, 1, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Bodega 805', '0', 0, '2022-08-10 00:00:00', 66, '76.999.328-2', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Paola ', 'Spiner', 'Anken Tapel 2695', '996109167', 'paospiner@gmail.com', 267, '-72,66244444', '-38,71108056', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $24.000.000 ', 0, 0, 1, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Chocolates KL', '0', 0, '2022-08-10 00:00:00', 67, '77.039.251-9', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Felipe ', 'Bustamante', 'Chesque Alto Km. 1.9', '978504468', 'felipe.bustamante.follert@gmail.com', 271, '-72,20568056', '-39,38863056', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $35.000.000 ', 0, 0, 2, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Entre Pampa y Bosque', '0', 0, '2022-08-10 00:00:00', 68, '76.380.422-4', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Mariela Fernanda ', 'Gonzalez ', 'O\'Carrol 1401', '971428971', 'contacto@lasolucionrepuestos.cl', 273, '-72,43226389', '-37,9589', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $480.000.000 ', 0, 0, 7, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'La Soluciin', '0', 0, '2022-08-10 00:00:00', 69, '76.622.246-3', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Maria Genoveva ', 'Saavedra ', 'Km 21 camino Parque Nahuelbuta', '991416079', 'genosaav.san@gmail.com', 272, '-72,935625', '-37,81274722', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $8.400.000 ', 0, 0, 1, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Los Castaios', '0', 0, '2022-08-10 00:00:00', 70, '76.974.438-k', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Claudia ', 'Guerra', 'El Acantilado Poniente 811', '998476758', 'hola@santocacao.cl', 267, '-72,63961389', '-38,73117222', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $6.000.000 ', 0, 0, 2, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Santo Cacao', '0', 0, '2022-08-10 00:00:00', 71, '77.027.127-4', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Paula Andrea ', 'Gonzilez ', 'Av. O\'Higgins 799', '945027172', 'emporiolafon@gmail.com', 272, '-72,69058333', '-37,80754167', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Gastronomia Paula Gonzalez', '0', 0, '2022-08-10 00:00:00', 72, '76.300.924-6', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Alvaro Jonathan ', 'Mardones ', 'Parcela 1 Surco y Semilla ruta R49 camino a Curaco', '984634846', 'surcoysemilla1@gmail.com', 273, '-72,28871944', '-38,03236944', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $5.000.000 ', 0, 0, 1, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Surco y Semilla', '0', 0, '2022-08-10 00:00:00', 73, '77.049.817-1', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Jorge Alejandro ', 'Vega ', 'Julio Sepilveda 1193', '977954602', 'broatel@gmail.com', 272, '-72,70815278', '-37,78894722', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $36.000.000 ', 0, 0, 4, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'TeleAngol', '0', 0, '2022-08-10 00:00:00', 74, '76.023.875-9', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('11.583.170-4', 'Elisabeth Beatriz ', 'Rodriguez ', 'Av. O\'Higgins 602', '998645823', 'elizabeth.r.u@hotmail.com', 272, '-72,69608889', '-37,80428889', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $84.000.000 ', 0, 0, 1, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Tostaduria Elin', '0', 0, '2022-08-10 00:00:00', 75, '', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Claudio  ', 'Castro', 'Calle Temuco esq Pedro Aguirre Cerda Nehuentue', '992496829', 'ccastro12@uc.cl', 251, '-72,96872222', '-38,90127778', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $27.000.000 ', 0, 0, 5, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Claudio Castro Alarcon', '0', 0, '2022-08-10 00:00:00', 76, '76.325.022-9', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Alfredo ', 'Bascur', 'Bernardo Oihiggins Ni 1037', '963932443', 'alfredo.bascur@gmail.com', 267, '-71,96339167', '-38,35713056', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $- ', 0, 0, 4, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Agricola Santa Alicia', '0', 0, '2022-08-10 00:00:00', 77, '77.024.349-1', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Alfredo ', 'Bascur', 'Bernardo Oihiggins Ni 1037', '963932443', 'alfredo@activaccion.cl', 267, '-72,58845833', '-38,74376944', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $120.000.000 ', 0, 0, 4, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Activaciin Comunicaciones', '0', 0, '2022-08-10 00:00:00', 78, '76.858.306-4', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('12.912.394-k', 'Susana ', 'Ulloa ', 'Trancura Ni 110 ', '989532557', 'api.su@hotmail.com', 265, '-71,94891944', '-39,27148889', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, '', 0, 0, 3, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Apisur', '0', 0, '2022-08-10 00:00:00', 79, '', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Tomas ', 'Barh', 'Ansonera Ni 160', '996095060', 'info@cafeberlin.cl', 265, '-71,97593889', '-39,27376389', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $150.000.000 ', 0, 0, 20, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Cafi Berlin', '0', 0, '2022-08-10 00:00:00', 80, '76.556.743-2', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Felipe ', 'Aravena ', 'Ines de suares 1210', '991633469', 'felieparanedasagredo@gmail.com', 267, '-72,63363889', '-38,73760556', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $100.000.000 ', 0, 0, 11, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Carnes Araneda', '0', 0, '2022-08-10 00:00:00', 81, '76.771.157-3', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Jorege ', 'Petters ', 'Las Quilas Ni 1605', '944785881', 'jpetersg@gmail.com', 267, '-72,60465', '-38,75052222', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $180.000.000 ', 0, 0, 12, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Cafeteria Clementina', '0', 0, '2022-08-10 00:00:00', 82, '76.713.783-4', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Alejandro ', 'Cardenas ', 'Pirineos 0841', '973886624', 'agecomltda@gmail.com', 267, '-72,61435278', '-38,73468611', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $78.000.000 ', 0, 0, 9, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Hotel Globin', '0', 0, '2022-08-10 00:00:00', 83, '76.683.132-k', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('16.029.843-k', 'Denisse ', 'Jara', 'Caburgua S/N', '992927363', 'productosnaturalescaburgua@gmail.com', 265, '-71,81351389', '-39,18485', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $2.000.000 ', 0, 0, 1, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Casa en el Bosque', '0', 0, '2022-08-10 00:00:00', 84, '', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Nathali ', 'Hernandez', 'Geronimo de Aalderete Ni 211 Local A6', '956828793', 'enbarracosmeticanatural@gmail.com', 265, '-71,97770278', '-39,27488056', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $28.000.000 ', 0, 0, 3, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'En Barra', '0', 0, '2022-08-10 00:00:00', 85, '77.068.423-4', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Marcelo ', 'Madrid', 'Ohiggins 597', '989220669', 'mamasandtapas@hotmail.com', 265, '-71,97216667', '-39,27553333', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $680.000.000 ', 0, 0, 45, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Mamas y Tapas', '0', 0, '2022-08-10 00:00:00', 86, '77.213.750-8', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Mauricio ', 'San Martin ', 'Fundo Monte Bello Lote B1C', '942668731', 'mauricio@peucoxp.cl', 251, '-73,16320833', '-38,72673889', 0, 0, 1, '0', 0, 0, 0, 0, 0, 0, 0, '0', 0, 0, 0, 0, 0, ' $160.000.000 ', 0, 0, 2, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Peuco Expediciones', '0', 0, '2022-08-10 00:00:00', 87, '76.232.807-0.i', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1),
('', 'Jaime Ignacio ', 'Caniuiir ', 'Pitralahue Km 12 Camino a Trovolhue', '985923489', 'contacto.agroserviciosjc@gmail.com', 251, '-73,25425', '-38,67738889', 0, 0, 1, '0', 0, 0, 0, 0, 0, 1, 0, '0', 0, 0, 0, 0, 0, ' $80.000.000 ', 0, 0, 2, 0, 1, 0, '1993-03-23', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Juan Ignacio Caiunir', '0', 0, '2022-08-10 00:00:00', 88, '77.083.853-3', '0', 1, '2022-08-10 04:00:00', '2022-08-10 04:00:00', 1, 0, 0, 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `emprendedor-comunidades`
--

CREATE TABLE `emprendedor-comunidades` (
  `id_emprendedor-comunidades` int(11) NOT NULL,
  `id_emprendedores` int(45) DEFAULT NULL,
  `id_comunidades` int(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `emprendedor-organizacion`
--

CREATE TABLE `emprendedor-organizacion` (
  `id_emprendedor-organizacion` int(11) NOT NULL,
  `id_emprendedor` int(100) NOT NULL,
  `id_organizacion` int(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evaluacion`
--

CREATE TABLE `evaluacion` (
  `id_evaluacion` int(11) NOT NULL,
  `id_user` int(42) DEFAULT NULL,
  `evaluacion` varchar(300) COLLATE utf8_spanish_ci DEFAULT NULL,
  `create` timestamp NULL DEFAULT NULL,
  `upadate` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `evaluacion`
--

INSERT INTO `evaluacion` (`id_evaluacion`, `id_user`, `evaluacion`, `create`, `upadate`) VALUES
(1, 13, '1', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evento`
--

CREATE TABLE `evento` (
  `id_evento` int(40) NOT NULL,
  `nombre` varchar(1000) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `descripcion` varchar(1000) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `inicio` date DEFAULT NULL,
  `fin` date DEFAULT NULL,
  `etiqueta` varchar(1000) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `archivo` varchar(1000) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estado` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `evento`
--

INSERT INTO `evento` (`id_evento`, `nombre`, `descripcion`, `inicio`, `fin`, `etiqueta`, `archivo`, `estado`) VALUES
(1, 'Fiesta del Baqueano 2021', 'Este 27 y 28 de noviembre se llevarÃ¡ a cabo la Fiesta del Baqueano en Melipeuco; localidad de gran atractivo turÃ­stico, ubicada en los valles cordilleranos de la Provincia de CautÃ­n', '2021-11-20', '2021-11-27', 'fiesta, baqueano', 'img/fiesta-baqueano-melipeuco-2021.png', 0),
(2, 'Fiesta 2', 'InformaciÃ³n Basica', '2021-03-20', '2021-05-01', 'fiesta, evento', 'img/project-1.jpg', 0),
(3, 'Fiesta 3', 'InformaciÃ³n Basica para un evento', '2021-03-20', '2021-05-01', 'evento', 'img/project-2.jpg', 0),
(4, 'evento 1', 'Libreta de participaciÃ³n ', '2022-02-03', '2022-02-24', 'evento', 'img/project-3.jpg', 0),
(5, 'Webinar Kintunlab', 'Ãºltimo evento para ajustar datos', '2022-06-15', '2022-06-30', 'evento', 'http://kintunlab.cl/kintun/assets/images/infografia/GRAFICOS_INTRO_KINTUNLAB/GRAFICOS_INTRO_KINTUNLAB_page-0001.jpg', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ficha`
--

CREATE TABLE `ficha` (
  `id_ficha` int(11) NOT NULL,
  `rut_emprendedor` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `fecha` date DEFAULT NULL,
  `id_institucion` int(2) NOT NULL,
  `nombre` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `aporte1` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `aporte2` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `id_bitacora` int(45) NOT NULL,
  `id_evaluacion` int(45) NOT NULL,
  `estado` int(2) DEFAULT NULL,
  `id_productividad` int(45) NOT NULL,
  `create` timestamp NULL DEFAULT NULL,
  `uptate` timestamp NULL DEFAULT NULL,
  `id_infraestructura` int(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `ficha`
--

INSERT INTO `ficha` (`id_ficha`, `rut_emprendedor`, `fecha`, `id_institucion`, `nombre`, `aporte1`, `aporte2`, `id_bitacora`, `id_evaluacion`, `estado`, `id_productividad`, `create`, `uptate`, `id_infraestructura`) VALUES
(1, '1', NULL, 1, NULL, NULL, NULL, 1, 1, 1, 1, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grafico`
--

CREATE TABLE `grafico` (
  `id_grafico` int(11) NOT NULL,
  `graficos` longtext COLLATE utf8_spanish2_ci,
  `id_emprendedor` int(11) DEFAULT NULL,
  `create` timestamp NULL DEFAULT NULL,
  `update` timestamp NULL DEFAULT NULL,
  `estado` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci COMMENT='grafico de datos';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `infraestructura`
--

CREATE TABLE `infraestructura` (
  `id_infraestructura` int(11) NOT NULL,
  `fuenteagua` int(2) DEFAULT NULL,
  `fuenteaguadetalle` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `derechosagua` int(2) DEFAULT NULL,
  `derechosaguadetalle` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `sistemaderiesgo` int(2) DEFAULT NULL,
  `sistemaderiesgodetalle` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `cierre` int(2) DEFAULT NULL,
  `cierredetalle` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `bodega` int(2) DEFAULT NULL,
  `bodegadetalle` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `create` timestamp NULL DEFAULT NULL,
  `update` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `infraestructura`
--

INSERT INTO `infraestructura` (`id_infraestructura`, `fuenteagua`, `fuenteaguadetalle`, `derechosagua`, `derechosaguadetalle`, `sistemaderiesgo`, `sistemaderiesgodetalle`, `cierre`, `cierredetalle`, `bodega`, `bodegadetalle`, `create`, `update`) VALUES
(1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `institucion`
--

CREATE TABLE `institucion` (
  `id_institucion` int(11) NOT NULL,
  `nombre` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `update` timestamp NULL DEFAULT NULL,
  `create` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `institucion`
--

INSERT INTO `institucion` (`id_institucion`, `nombre`, `update`, `create`) VALUES
(1, 'institución 1', NULL, NULL),
(2, 'institución 2', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `organizaciones`
--

CREATE TABLE `organizaciones` (
  `id_organizaciones` int(11) NOT NULL,
  `nombre` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `clasificación` int(11) DEFAULT NULL,
  `rol` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `creacion` date DEFAULT NULL,
  `personalidadjuridica` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `renovacionpersonalidadjuridica` date DEFAULT NULL,
  `vigencia` date DEFAULT NULL,
  `socios` int(3) DEFAULT NULL,
  `domicilio` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `contacto` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `presidente` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `presidente_rut` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `secretario` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `secretario_rut` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `tesorero` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `tesorero_rut` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `create` timestamp NULL DEFAULT NULL,
  `update` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `organizaciones`
--

INSERT INTO `organizaciones` (`id_organizaciones`, `nombre`, `clasificación`, `rol`, `creacion`, `personalidadjuridica`, `renovacionpersonalidadjuridica`, `vigencia`, `socios`, `domicilio`, `contacto`, `presidente`, `presidente_rut`, `secretario`, `secretario_rut`, `tesorero`, `tesorero_rut`, `create`, `update`) VALUES
(1, 'Taller de Mujeres Cumcumllaque (rayenco) ', 2, '65.425.230-0', '1998-10-16', '30/96', '2016-10-08', '2019-10-08', 16, 'Sede Comunitaria  Cumcumllaque', '', 'Digna Raquel Blanco Romero', '10.968.676-k', 'Angelina Graciela Perquil Ovando', '13.397.210-2', 'Marcelina veronica Romero  Albino', '16.234.631-8', NULL, NULL),
(2, 'Grupo de Mujeres Los Morros', 2, '65.426.030-3', '2002-09-06', '30/136', '2018-12-03', '2021-12-03', 14, 'Sector Cherquen', '84975068', 'Silvia Ester Manquilef Marileo', '12,124,874-3', 'Gloria Patricia Manquilef Marileo', '12,845,618-8', 'Rosa Julia Quintriqueo Martinez', '11,803,380-9', NULL, NULL),
(3, 'Grupo de Mujeres Las Rosas de Llaima', 2, '65.878.460-9', '2007-10-18', '30/217', '2016-10-08', '2019-10-08', 11, 'Sector Rural Santa Maria de Llaina', '964152585', 'Natalie Estela Aburto Cancino', '16.316.538-4', 'Susana Huilipan', '13.155.320-k', 'Luisa Elena Aburto Burgos', '10.274.295-8', NULL, NULL),
(4, 'Grupo de Mujeres Campesinas de Melipeuco', 2, '65.003.852-5', '2008-12-18', '30/238', '2018-09-22', '2021-09-22', 23, 'P.Aguirre Cerda Nº S/N', '77787667', 'Maria Cristina Rivas Morales', '8,813,831-7', 'Karin Eduviges Antipan Colipe', '11,586,846-2', 'Florisa Irma Salinas Linconao', '10,155,626-3', NULL, NULL),
(5, 'Grupo de Mujeres Virtuosa', 2, NULL, '2012-07-09', '30/293', '2017-03-21', '2020-03-21', 18, 'Iglesia la Vid Verdadera', '452581267', 'Erika Alda Acuña Aguilera', '8.441.154-k', 'Aracely Aurora Coronado Acuña', '17.146.228-2', 'Eva Ruth  Rebolledo Falcon', '12.333.517-1', NULL, NULL),
(6, 'Comité Los Andes de Huechelepun', 2, '65.432.380-1', '1997-04-07', '30/61', '2016-01-28', '2019-01-28', 15, 'Sector Huechelepun', '90424845', 'Margarita Parada Pardo', '9.309.053-5', 'Monica Sepulveda Arias ', '9.833.674-6', 'Esnilda Pardo Carrillo ', '5.880.448-7', NULL, NULL),
(7, 'Agrupación de Mujeres Rayen Kolkuiza', 3, '65067836-2', '2013-05-10', '30/300', '2019-01-10', '2022-07-15', 10, 'Palihue Pillan ', '452503157', 'Uberlinda Leonor  Torres Martinez', '6.945.746-0', 'Miroslava Torres Jofre', '10.402.903-5', 'Rosa Mirta Jara Pacheco', '8.181.364-7', NULL, NULL),
(8, 'fgfddasdas', NULL, 'das', '2022-05-06', '', '2022-05-06', '2022-05-06', 1, '', '', '', '', '', '', '', '', NULL, NULL),
(9, 'mcarrasco', NULL, NULL, '2022-05-06', NULL, '2022-05-06', '2022-05-06', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productividad`
--

CREATE TABLE `productividad` (
  `id_productividad` int(11) NOT NULL,
  `cultivo` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `variedad` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `superficie` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `fecha` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `rendimiento` int(150) DEFAULT NULL,
  `ingreso` int(150) DEFAULT NULL,
  `id_infraestructura` int(45) DEFAULT NULL,
  `create` timestamp NULL DEFAULT NULL,
  `update` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `productividad`
--

INSERT INTO `productividad` (`id_productividad`, `cultivo`, `variedad`, `superficie`, `fecha`, `rendimiento`, `ingreso`, `id_infraestructura`, `create`, `update`) VALUES
(1, '1', '1', '1', '1', 1, 1, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `programa`
--

CREATE TABLE `programa` (
  `id_programa` int(11) NOT NULL,
  `Nombre` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `id_institucion` int(30) NOT NULL,
  `create` timestamp NULL DEFAULT NULL,
  `update` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `programa`
--

INSERT INTO `programa` (`id_programa`, `Nombre`, `id_institucion`, `create`, `update`) VALUES
(1, 'PRODESAL', 1, NULL, NULL),
(2, 'PDTI, UPT Cordillera', 1, NULL, NULL),
(3, 'PDTI, UPT El Valle 1', 1, NULL, NULL),
(4, 'PDTI, UPT Santa MarÃ­a de Llaima', 1, NULL, NULL),
(5, 'PDTI, UPT El Valle 2', 1, NULL, NULL),
(6, 'centro de negocios mapuche', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincias`
--

CREATE TABLE `provincias` (
  `provincia_id` int(11) NOT NULL,
  `provincia_nombre` varchar(64) NOT NULL,
  `region_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `provincias`
--

INSERT INTO `provincias` (`provincia_id`, `provincia_nombre`, `region_id`) VALUES
(1, 'Arica', 1),
(2, 'Parinacota', 1),
(3, 'Iquique', 2),
(4, 'El Tamarugal', 2),
(5, 'Antofagasta', 3),
(6, 'El Loa', 3),
(7, 'Tocopilla', 3),
(8, 'Chañaral', 4),
(9, 'Copiapó', 4),
(10, 'Huasco', 4),
(11, 'Choapa', 5),
(12, 'Elqui', 5),
(13, 'Limarí', 5),
(14, 'Isla de Pascua', 6),
(15, 'Los Andes', 6),
(16, 'Petorca', 6),
(17, 'Quillota', 6),
(18, 'San Antonio', 6),
(19, 'San Felipe de Aconcagua', 6),
(20, 'Valparaiso', 6),
(21, 'Chacabuco', 7),
(22, 'Cordillera', 7),
(23, 'Maipo', 7),
(24, 'Melipilla', 7),
(25, 'Santiago', 7),
(26, 'Talagante', 7),
(27, 'Cachapoal', 8),
(28, 'Cardenal Caro', 8),
(29, 'Colchagua', 8),
(30, 'Cauquenes', 9),
(31, 'Curicó', 9),
(32, 'Linares', 9),
(33, 'Talca', 9),
(34, 'Arauco', 10),
(35, 'Bio Bío', 10),
(36, 'Concepción', 10),
(37, 'Ñuble', 10),
(38, 'Cautín', 11),
(39, 'Malleco', 11),
(40, 'Valdivia', 12),
(41, 'Ranco', 12),
(42, 'Chiloé', 13),
(43, 'Llanquihue', 13),
(44, 'Osorno', 13),
(45, 'Palena', 13),
(46, 'Aisén', 14),
(47, 'Capitán Prat', 14),
(48, 'Coihaique', 14),
(49, 'General Carrera', 14),
(50, 'Antártica Chilena', 15),
(51, 'Magallanes', 15),
(52, 'Tierra del Fuego', 15),
(53, 'Última Esperanza', 15);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `regiones`
--

CREATE TABLE `regiones` (
  `region_id` int(11) NOT NULL,
  `region_nombre` varchar(64) NOT NULL,
  `region_ordinal` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `regiones`
--

INSERT INTO `regiones` (`region_id`, `region_nombre`, `region_ordinal`) VALUES
(1, 'Arica y Parinacota', 'XV'),
(2, 'Tarapacá', 'I'),
(3, 'Antofagasta', 'II'),
(4, 'Atacama', 'III'),
(5, 'Coquimbo', 'IV'),
(6, 'Valparaiso', 'V'),
(7, 'Metropolitana de Santiago', 'RM'),
(8, 'Libertador General Bernardo O\'Higgins', 'VI'),
(9, 'Maule', 'VII'),
(10, 'Biobío', 'VIII'),
(11, 'La Araucanía', 'IX'),
(12, 'Los Ríos', 'XIV'),
(13, 'Los Lagos', 'X'),
(14, 'Aisén del General Carlos Ibáñez del Campo', 'XI'),
(15, 'Magallanes y de la Antártica Chilena', 'XII');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rubro`
--

CREATE TABLE `rubro` (
  `id_rubro` int(11) NOT NULL,
  `nombre` varchar(300) COLLATE utf8_spanish_ci NOT NULL,
  `fecha` date NOT NULL,
  `create` timestamp NULL DEFAULT NULL,
  `update` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `rubro`
--

INSERT INTO `rubro` (`id_rubro`, `nombre`, `fecha`, `create`, `update`) VALUES
(1, 'Comercio al por mayor y al por menor; reparación de vehículos automotores y motocicletas', '2020-12-29', NULL, NULL),
(2, 'Actividades de alojamiento y de servicio de comidas', '2020-12-29', NULL, NULL),
(3, 'Agricultura, ganadería, silvicultura y pesca', '2020-12-29', NULL, NULL),
(4, 'Industria manufacturera', '2020-12-29', NULL, NULL),
(5, 'Transporte y almacenamiento', '2020-12-29', NULL, NULL),
(6, 'Otras actividades de servicios', '2020-12-29', NULL, NULL),
(7, 'Construcción', '2020-12-29', NULL, NULL),
(8, 'Actividades de servicios administrativos y de apoyo', '2020-12-29', NULL, NULL),
(9, 'Información y comunicaciones', '2020-12-29', NULL, NULL),
(10, 'Enseñanza', '2020-12-29', NULL, NULL),
(11, 'Suministro de electricidad, gas, vapor y aire acondicionado', '2020-12-29', NULL, NULL),
(12, 'Suministro de agua; evacuación de aguas residuales, gestión de desechos y descontaminación', '2020-12-29', NULL, NULL),
(13, 'Actividades profesionales, científicas y técnicas', '2020-12-29', NULL, NULL),
(14, 'Actividades financieras y de seguros', '2020-12-29', NULL, NULL),
(15, 'Actividades inmobiliarias', '2020-12-29', NULL, NULL),
(16, 'Administración pública y defensa; planes de seguridad social de afiliación obligatoria', '2020-12-29', NULL, NULL),
(17, 'Actividades de atención de la salud humana y de asistencia social', '2020-12-29', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subrubro`
--

CREATE TABLE `subrubro` (
  `id_subrubro` int(11) NOT NULL,
  `nombre` varchar(300) COLLATE utf8_spanish_ci NOT NULL,
  `id_rubro` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `create` timestamp NULL DEFAULT NULL,
  `upate` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `subrubro`
--

INSERT INTO `subrubro` (`id_subrubro`, `nombre`, `id_rubro`, `fecha`, `create`, `upate`) VALUES
(1, 'Cultivo de plantas no perennes', 3, '2020-12-29', NULL, NULL),
(2, 'Cultivo de plantas perennes', 3, '2020-12-29', NULL, NULL),
(3, 'GanaderÃ­a', 3, '2020-12-29', NULL, NULL),
(4, 'Cultivo de productos agr�colas en combinaci�n con la cr�a de animales', 3, '2020-12-29', NULL, NULL),
(5, 'Actividades de apoyo a la agricultura y la ganader�a y actividades poscosecha', 3, '2020-12-29', NULL, NULL),
(6, 'Silvicultura y otras actividades forestales', 3, '2020-12-29', NULL, NULL),
(7, 'Extracci�n de madera', 3, '2020-12-29', NULL, NULL),
(8, 'Servicios de apoyo a la silvicultura', 3, '2020-12-29', NULL, NULL),
(9, 'Elaboraci�n y conservaci�n de carne', 4, '2020-12-29', NULL, NULL),
(10, 'Elaboraci�n de productos l�cteos', 4, '2020-12-29', NULL, NULL),
(11, 'Elaboraci�n de productos de moliner�a, almidones y productos derivados del almid�n', 4, '2020-12-29', NULL, NULL),
(12, 'Elaboraci�n de otros productos alimenticios', 4, '2020-12-29', NULL, NULL),
(13, 'Elaboraci�n de bebidas alcoh�licas y no alcoh�licas', 4, '2020-12-29', NULL, NULL),
(14, 'Fabricaci�n de papel y de productos de papel', 4, '2020-12-29', NULL, NULL),
(15, 'Fabricaci�n sustancias qu�micas b�sicas, abonos y compuestos de nitr�geno, pl�sticos y caucho sint.', 4, '2020-12-29', NULL, NULL),
(16, 'Fabricaci�n de productos met�licos para uso estructural, tanques, dep�sitos, recipientes de metal', 4, '2020-12-29', NULL, NULL),
(17, 'Fabricaci�n de muebles', 4, '2020-12-29', NULL, NULL),
(18, 'Generaci�n, transmisi�n y distribuci�n de energ�a el�ctrica', 1, '2020-12-29', NULL, NULL),
(19, 'Captaci�n, tratamiento y distribuci�n de agua', 12, '2020-12-29', NULL, NULL),
(20, 'Construcci�n de edificios', 7, '2020-12-29', NULL, NULL),
(21, 'Construcci�n de carreteras y l�neas de ferrocarril', 7, '2020-12-29', NULL, NULL),
(22, 'Terminaci�n y acabado de edificios', 7, '2020-12-29', NULL, NULL),
(23, 'Mantenimiento y reparaci�n de veh�culos automotores', 1, '2020-12-29', NULL, NULL),
(24, 'Venta de partes, piezas y accesorios para veh�culos automotores', 1, '2020-12-29', NULL, NULL),
(25, 'Venta al por mayor a cambio de una retribuci�n o por contrata', 1, '2020-12-29', NULL, NULL),
(26, 'Venta al por mayor de materias primas agropecuarias y animales vivos', 1, '2020-12-29', NULL, NULL),
(27, 'Otras actividades de venta al por mayor especializada', 1, '2020-12-29', NULL, NULL),
(28, 'Venta al por menor en comercios no especializados', 1, '2020-12-29', NULL, NULL),
(29, 'Venta al por menor de alimentos, bebidas y tabaco en comercios especializados', 1, '2020-12-29', NULL, NULL),
(30, 'Venta al por menor de combustibles para veh�culos automotores en comercios especializados', 1, '2020-12-29', NULL, NULL),
(31, 'Venta al por menor de otros enseres dom�sticos en comercios especializados', 1, '2020-12-29', NULL, NULL),
(32, 'Venta al por menor de productos culturales y recreativos en comercios especializados', 1, '2020-12-29', NULL, NULL),
(33, 'Venta al por menor de otros productos en comercios especializados', 1, '2020-12-29', NULL, NULL),
(34, 'Venta al por menor no realizada en comercios, puestos de venta o mercados', 1, '2020-12-29', NULL, NULL),
(35, 'Otras actividades de transporte por v�a terrestre', 5, '2020-12-29', NULL, NULL),
(36, 'Actividades de alojamiento para estancias cortas', 2, '2020-12-29', NULL, NULL),
(37, 'Otras actividades de alojamiento', 2, '2020-12-29', NULL, NULL),
(38, 'Actividades de restaurantes y de servicio m�vil de comidas', 2, '2020-12-29', NULL, NULL),
(39, 'Suministro de comidas por encargo y otras actividades de servicio de comidas', 2, '2020-12-29', NULL, NULL),
(40, 'Transmisiones de radio', 9, '2020-12-29', NULL, NULL),
(41, 'Programaci�n y transmisiones de televisi�n', 9, '2020-12-29', NULL, NULL),
(42, 'Otras actividades de telecomunicaciones', 9, '2020-12-29', NULL, NULL),
(43, 'Procesamiento de datos, hospedaje y actividades conexas; portales web', 16, '2020-12-29', NULL, NULL),
(44, 'Actividades auxiliares de servicios financieros, excepto las de seguros y fondos de pensiones', 16, '2020-12-29', NULL, NULL),
(45, 'Actividades inmobiliarias realizadas con bienes propios o arrendados', 16, '2020-12-29', NULL, NULL),
(46, 'Actividades de consultor�a de gesti�n', 16, '2020-12-29', NULL, NULL),
(47, 'Actividades de fotograf�a', 16, '2020-12-29', NULL, NULL),
(48, 'Otras actividades profesionales, cient�ficas y t�cnicas n.c.p.', 16, '2020-12-29', NULL, NULL),
(49, 'Actividades de agencias de viajes y operadores tur�sticos', 16, '2020-12-29', NULL, NULL),
(50, 'ctividades de servicios de apoyo a las empresas n.c.p.', 16, '2020-12-29', NULL, NULL),
(51, 'Administraci�n del estado y aplicaci�n de la pol�tica econ�mica y social de la comunidad', 16, '2020-12-29', NULL, NULL),
(52, 'Ense�anza preescolar, primaria, secundaria cient�fico humanista y t�cnico profesional', 16, '2020-12-29', NULL, NULL),
(53, 'Otros tipos de ense�anza', 16, '2020-12-29', NULL, NULL),
(54, 'Otras actividades de atenci�n de la salud humana', 16, '2020-12-29', NULL, NULL),
(55, 'Actividades de otras asociaciones', 16, '2020-12-29', NULL, NULL),
(56, 'Otras actividades de servicios personales', 8, '2020-12-29', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `user_id` int(2) NOT NULL,
  `user_name` varchar(1000) NOT NULL,
  `user_password` varchar(1000) NOT NULL,
  `user_type` int(2) NOT NULL,
  `user_active` int(2) NOT NULL,
  `id_user_data` int(2) NOT NULL,
  `create` timestamp NULL DEFAULT NULL,
  `update` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_password`, `user_type`, `user_active`, `id_user_data`, `create`, `update`) VALUES
(13, 'mcarrasco', 'fd37ca5ca8763ae077a5e9740212319591603c42a08a60dcc91d12e7e457b024f6bdfdc10cdc1383e1602ff2092b4bc1bb8cac9306a9965eb352435f5dfe8bb0', 1, 1, 18, NULL, NULL),
(14, 'mcarrasco 2', 'fd37ca5ca8763ae077a5e9740212319591603c42a08a60dcc91d12e7e457b024f6bdfdc10cdc1383e1602ff2092b4bc1bb8cac9306a9965eb352435f5dfe8bb0', 2, 1, 19, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_data`
--

CREATE TABLE `user_data` (
  `id_user_data` int(4) NOT NULL,
  `name` varchar(1000) NOT NULL,
  `email` varchar(1000) NOT NULL,
  `birthday` date NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `sexo` int(2) NOT NULL,
  `id_comuna` int(10) NOT NULL,
  `create` timestamp NULL DEFAULT NULL,
  `update` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user_data`
--

INSERT INTO `user_data` (`id_user_data`, `name`, `email`, `birthday`, `telefono`, `sexo`, `id_comuna`, `create`, `update`) VALUES
(18, 'Marco Carrasco Bustos', 'mcarrasco@uct.cl', '1995-03-07', '+45358475', 1, 262, NULL, NULL),
(19, 'Marco Prueba', 'lpt@uct.cl', '1995-03-04', '23432342', 1, 262, NULL, NULL),
(20, 'marco tem', 'dsad@gmail.com', '2022-03-02', '3432423', 1, 273, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_permission`
--

CREATE TABLE `user_permission` (
  `id_user_permission` int(244) NOT NULL,
  `user_id` int(244) DEFAULT NULL,
  `lista_emprendedor` tinyint(10) DEFAULT NULL,
  `visor` tinyint(10) DEFAULT NULL,
  `dashboard` tinyint(10) DEFAULT NULL,
  `create` timestamp NULL DEFAULT NULL,
  `update` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `uso_suelo`
--

CREATE TABLE `uso_suelo` (
  `id_uso_suelo` int(11) NOT NULL,
  `nombre` varchar(1000) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `uso_suelo`
--

INSERT INTO `uso_suelo` (`id_uso_suelo`, `nombre`) VALUES
(1, 'Bosque nativo'),
(2, 'Renoval'),
(3, 'Matorral'),
(4, 'Terrenos sin vegetación'),
(5, 'Monocultivo forestal\r\n'),
(6, 'Praderas'),
(7, 'Matorral - pradera\r\n'),
(8, 'Nieves y glaciares\r\n'),
(9, 'Cuerpos de agua\r\n'),
(10, 'Bosque nativo - plantación\r\n');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividad_economica`
--
ALTER TABLE `actividad_economica`
  ADD PRIMARY KEY (`id_actividad`),
  ADD KEY `id_subrubro` (`id_subrubro`);

--
-- Indices de la tabla `agenda`
--
ALTER TABLE `agenda`
  ADD PRIMARY KEY (`id_agenda`);

--
-- Indices de la tabla `app`
--
ALTER TABLE `app`
  ADD PRIMARY KEY (`id_app`);

--
-- Indices de la tabla `bitacora`
--
ALTER TABLE `bitacora`
  ADD PRIMARY KEY (`id_bitacora`),
  ADD KEY `FK_bitacora_idx` (`id_user`);

--
-- Indices de la tabla `comunas`
--
ALTER TABLE `comunas`
  ADD PRIMARY KEY (`comuna_id`),
  ADD KEY `FK_emprendedorprovicia_idx` (`provincia_id`);

--
-- Indices de la tabla `comunidades`
--
ALTER TABLE `comunidades`
  ADD PRIMARY KEY (`id_comunidades`);

--
-- Indices de la tabla `emprendedor`
--
ALTER TABLE `emprendedor`
  ADD PRIMARY KEY (`id_emprendedor`),
  ADD KEY `FK_emprendedoractividad` (`actividad_economica`),
  ADD KEY `FK_comuna` (`id_comuna`),
  ADD KEY `FK_programa` (`id_programa`),
  ADD KEY `fk_ficha_idx` (`id_ficha`),
  ADD KEY `emprendedor_FK` (`id_uso_suelo`);

--
-- Indices de la tabla `emprendedor-comunidades`
--
ALTER TABLE `emprendedor-comunidades`
  ADD PRIMARY KEY (`id_emprendedor-comunidades`),
  ADD KEY `FK_emprendedorcomunidad1_idx` (`id_emprendedores`),
  ADD KEY `FK_emprendedorcomunidad2_idx` (`id_comunidades`);

--
-- Indices de la tabla `emprendedor-organizacion`
--
ALTER TABLE `emprendedor-organizacion`
  ADD PRIMARY KEY (`id_emprendedor-organizacion`),
  ADD KEY `FK_emprendedororg1_idx` (`id_emprendedor`),
  ADD KEY `FK_emprendedororg2_idx` (`id_organizacion`);

--
-- Indices de la tabla `evaluacion`
--
ALTER TABLE `evaluacion`
  ADD PRIMARY KEY (`id_evaluacion`);

--
-- Indices de la tabla `evento`
--
ALTER TABLE `evento`
  ADD PRIMARY KEY (`id_evento`);

--
-- Indices de la tabla `ficha`
--
ALTER TABLE `ficha`
  ADD PRIMARY KEY (`id_ficha`),
  ADD KEY `fk_institucion_idx` (`id_institucion`),
  ADD KEY `fk_productividad_idx` (`id_productividad`),
  ADD KEY `Fk_evaluacion_idx` (`id_evaluacion`),
  ADD KEY `fk_infraestructura_idx` (`id_infraestructura`);

--
-- Indices de la tabla `grafico`
--
ALTER TABLE `grafico`
  ADD PRIMARY KEY (`id_grafico`),
  ADD KEY `grafico_FK` (`id_emprendedor`);

--
-- Indices de la tabla `infraestructura`
--
ALTER TABLE `infraestructura`
  ADD PRIMARY KEY (`id_infraestructura`);

--
-- Indices de la tabla `institucion`
--
ALTER TABLE `institucion`
  ADD PRIMARY KEY (`id_institucion`);

--
-- Indices de la tabla `organizaciones`
--
ALTER TABLE `organizaciones`
  ADD PRIMARY KEY (`id_organizaciones`);

--
-- Indices de la tabla `productividad`
--
ALTER TABLE `productividad`
  ADD PRIMARY KEY (`id_productividad`);

--
-- Indices de la tabla `programa`
--
ALTER TABLE `programa`
  ADD PRIMARY KEY (`id_programa`);

--
-- Indices de la tabla `provincias`
--
ALTER TABLE `provincias`
  ADD PRIMARY KEY (`provincia_id`),
  ADD KEY `FK_region_idx` (`region_id`);

--
-- Indices de la tabla `regiones`
--
ALTER TABLE `regiones`
  ADD PRIMARY KEY (`region_id`);

--
-- Indices de la tabla `rubro`
--
ALTER TABLE `rubro`
  ADD PRIMARY KEY (`id_rubro`);

--
-- Indices de la tabla `subrubro`
--
ALTER TABLE `subrubro`
  ADD PRIMARY KEY (`id_subrubro`),
  ADD KEY `id_rubro` (`id_rubro`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `id_user_data` (`id_user_data`);

--
-- Indices de la tabla `user_data`
--
ALTER TABLE `user_data`
  ADD PRIMARY KEY (`id_user_data`),
  ADD KEY `FK_comuna_idx` (`id_comuna`);

--
-- Indices de la tabla `user_permission`
--
ALTER TABLE `user_permission`
  ADD PRIMARY KEY (`id_user_permission`),
  ADD KEY `FK_useruser_permission` (`user_id`);

--
-- Indices de la tabla `uso_suelo`
--
ALTER TABLE `uso_suelo`
  ADD PRIMARY KEY (`id_uso_suelo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actividad_economica`
--
ALTER TABLE `actividad_economica`
  MODIFY `id_actividad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=173;

--
-- AUTO_INCREMENT de la tabla `agenda`
--
ALTER TABLE `agenda`
  MODIFY `id_agenda` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `app`
--
ALTER TABLE `app`
  MODIFY `id_app` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `comunas`
--
ALTER TABLE `comunas`
  MODIFY `comuna_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=346;

--
-- AUTO_INCREMENT de la tabla `comunidades`
--
ALTER TABLE `comunidades`
  MODIFY `id_comunidades` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT de la tabla `emprendedor`
--
ALTER TABLE `emprendedor`
  MODIFY `id_emprendedor` int(254) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=743;

--
-- AUTO_INCREMENT de la tabla `evento`
--
ALTER TABLE `evento`
  MODIFY `id_evento` int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `grafico`
--
ALTER TABLE `grafico`
  MODIFY `id_grafico` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `institucion`
--
ALTER TABLE `institucion`
  MODIFY `id_institucion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `organizaciones`
--
ALTER TABLE `organizaciones`
  MODIFY `id_organizaciones` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `programa`
--
ALTER TABLE `programa`
  MODIFY `id_programa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `provincias`
--
ALTER TABLE `provincias`
  MODIFY `provincia_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT de la tabla `regiones`
--
ALTER TABLE `regiones`
  MODIFY `region_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `rubro`
--
ALTER TABLE `rubro`
  MODIFY `id_rubro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `subrubro`
--
ALTER TABLE `subrubro`
  MODIFY `id_subrubro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `user_data`
--
ALTER TABLE `user_data`
  MODIFY `id_user_data` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `user_permission`
--
ALTER TABLE `user_permission`
  MODIFY `id_user_permission` int(244) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `uso_suelo`
--
ALTER TABLE `uso_suelo`
  MODIFY `id_uso_suelo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `actividad_economica`
--
ALTER TABLE `actividad_economica`
  ADD CONSTRAINT `actividad_economica_ibfk_1` FOREIGN KEY (`id_subrubro`) REFERENCES `subrubro` (`id_subrubro`);

--
-- Filtros para la tabla `bitacora`
--
ALTER TABLE `bitacora`
  ADD CONSTRAINT `FK_bitacora` FOREIGN KEY (`id_user`) REFERENCES `user` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `comunas`
--
ALTER TABLE `comunas`
  ADD CONSTRAINT `comunas_FK` FOREIGN KEY (`provincia_id`) REFERENCES `provincias` (`provincia_id`);

--
-- Filtros para la tabla `emprendedor`
--
ALTER TABLE `emprendedor`
  ADD CONSTRAINT `FK_emprendedoractividad` FOREIGN KEY (`actividad_economica`) REFERENCES `actividad_economica` (`id_actividad`),
  ADD CONSTRAINT `FK_programa` FOREIGN KEY (`id_programa`) REFERENCES `programa` (`id_programa`),
  ADD CONSTRAINT `emprendedor_FK` FOREIGN KEY (`id_uso_suelo`) REFERENCES `uso_suelo` (`id_uso_suelo`),
  ADD CONSTRAINT `fk_comunasem` FOREIGN KEY (`id_comuna`) REFERENCES `comunas` (`comuna_id`),
  ADD CONSTRAINT `fk_ficha_idx` FOREIGN KEY (`id_ficha`) REFERENCES `ficha` (`id_ficha`);

--
-- Filtros para la tabla `emprendedor-comunidades`
--
ALTER TABLE `emprendedor-comunidades`
  ADD CONSTRAINT `FK_emprendedorcomunidad1_idx` FOREIGN KEY (`id_emprendedores`) REFERENCES `emprendedor` (`id_emprendedor`),
  ADD CONSTRAINT `FK_emprendedorcomunidad2_idx` FOREIGN KEY (`id_comunidades`) REFERENCES `comunidades` (`id_comunidades`);

--
-- Filtros para la tabla `emprendedor-organizacion`
--
ALTER TABLE `emprendedor-organizacion`
  ADD CONSTRAINT `FK_emprendedororg1_idx` FOREIGN KEY (`id_emprendedor`) REFERENCES `emprendedor` (`id_emprendedor`),
  ADD CONSTRAINT `FK_emprendedororg2_idx` FOREIGN KEY (`id_organizacion`) REFERENCES `organizaciones` (`id_organizaciones`);

--
-- Filtros para la tabla `ficha`
--
ALTER TABLE `ficha`
  ADD CONSTRAINT `Fk_evaluacion` FOREIGN KEY (`id_evaluacion`) REFERENCES `evaluacion` (`id_evaluacion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_infraestructura` FOREIGN KEY (`id_infraestructura`) REFERENCES `infraestructura` (`id_infraestructura`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_institucion` FOREIGN KEY (`id_institucion`) REFERENCES `institucion` (`id_institucion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_productividad` FOREIGN KEY (`id_productividad`) REFERENCES `productividad` (`id_productividad`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `grafico`
--
ALTER TABLE `grafico`
  ADD CONSTRAINT `grafico_FK` FOREIGN KEY (`id_emprendedor`) REFERENCES `emprendedor` (`id_emprendedor`);

--
-- Filtros para la tabla `provincias`
--
ALTER TABLE `provincias`
  ADD CONSTRAINT `FK_regionprovincia` FOREIGN KEY (`region_id`) REFERENCES `regiones` (`region_id`);

--
-- Filtros para la tabla `subrubro`
--
ALTER TABLE `subrubro`
  ADD CONSTRAINT `subrubro_ibfk_1` FOREIGN KEY (`id_rubro`) REFERENCES `rubro` (`id_rubro`);

--
-- Filtros para la tabla `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK_iduserdata` FOREIGN KEY (`id_user_data`) REFERENCES `user_data` (`id_user_data`);

--
-- Filtros para la tabla `user_data`
--
ALTER TABLE `user_data`
  ADD CONSTRAINT `fk_comunas` FOREIGN KEY (`id_comuna`) REFERENCES `comunas` (`comuna_id`);

--
-- Filtros para la tabla `user_permission`
--
ALTER TABLE `user_permission`
  ADD CONSTRAINT `FK_useruser_permission` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
