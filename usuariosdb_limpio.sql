
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


--
-- Base de datos: `usuariosdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito_items`
--

CREATE TABLE `carrito_items` (
  `id` int(11) NOT NULL,
  `session_id` varchar(64) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `producto_id` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL DEFAULT 1,
  `precio_unit` decimal(10,2) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `carrito_items`
--

INSERT INTO `carrito_items` (`id`, `session_id`, `user_id`, `producto_id`, `cantidad`, `precio_unit`, `created_at`, `updated_at`) VALUES
(1, 'popbi3ar29434g0ml9c5bvkp81', 7, 5, 7, 65.00, '2025-10-27 12:13:00', '2025-10-27 12:53:07'),
(2, 'popbi3ar29434g0ml9c5bvkp81', 7, 4, 1, 85.00, '2025-10-27 12:18:03', '2025-10-27 12:18:03'),
(3, 'gf2emqhv5jtdn05di9qibphsgv', 7, 5, 2, 65.00, '2025-10-29 12:17:59', '2025-10-29 12:20:33');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inventario_movimientos`
--

CREATE TABLE `inventario_movimientos` (
  `id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  `tipo` varchar(20) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `referencia` varchar(64) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `inventario_movimientos`
--

INSERT INTO `inventario_movimientos` (`id`, `producto_id`, `tipo`, `cantidad`, `referencia`, `created_at`) VALUES
(5, 2, 'salida', -1, 'PEDBC97AF76', '2025-11-03 19:10:40'),
(6, 3, 'salida', -2, 'PEDBC97AF76', '2025-11-03 19:10:40'),
(7, 5, 'salida', -2, 'PED22072AF6', '2025-11-03 20:40:37');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `session_id` varchar(64) DEFAULT NULL,
  `codigo` varchar(20) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `direccion` text NOT NULL,
  `ciudad` varchar(50) NOT NULL,
  `notas` text DEFAULT NULL,
  `estado` varchar(20) NOT NULL DEFAULT 'creado',
  `subtotal` decimal(10,2) NOT NULL,
  `impuestos` decimal(10,2) NOT NULL DEFAULT 0.00,
  `total` decimal(10,2) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id`, `user_id`, `session_id`, `codigo`, `nombre`, `email`, `telefono`, `direccion`, `ciudad`, `notas`, `estado`, `subtotal`, `impuestos`, `total`, `created_at`) VALUES
(6, 7, '7dafdasgk0p6qbd35u4189tcjo', 'PEDBC97AF76', 'Marcus', 'apdo@gmail.com', '0932545532', 'Luna nueva y Loja', 'Bacha', '', 'pendiente', 527.50, 84.40, 611.90, '2025-11-03 19:10:40'),
(7, 7, '48oc20egpkduieh7tlgg9cv9k4', 'PED22072AF6', '1', 'apdo@gmail.com', '1', 'q', 'q', 'w', 'pendiente', 130.00, 20.80, 150.80, '2025-11-03 20:40:37'),
(23, NULL, 'angular_ocuy63dlo', 'PEDA8IXAEV1', 'aqew', 'apdo@gmail.com', '565655', 'fsgsgr', '5666', '', 'creado', 899.99, 144.00, 1043.99, '2025-11-30 18:11:45'),
(24, NULL, 'angular_ocuy63dlo', 'PEDT4OUJ27A', 'aqew', 'apdo@gmail.com', '565655', 'u5', 'u56', '', 'creado', 899.99, 144.00, 1043.99, '2025-11-30 22:30:08'),
(25, NULL, 'angular_ocuy63dlo', 'PEDN43RJ9X5', 'aqew', 'apdo@gmail.com', '565655', '565', '56', '', 'creado', 129.50, 20.72, 150.22, '2025-12-01 11:12:14'),
(26, NULL, 'angular_ocuy63dlo', 'PED6Z07TZBS', 'aqew', 'apdo@gmail.com', '565655', '6555', '5666', '', 'creado', 899.99, 144.00, 1043.99, '2025-12-01 23:56:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido_items`
--

CREATE TABLE `pedido_items` (
  `id` int(11) NOT NULL,
  `pedido_id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `titulo_snapshot` varchar(255) NOT NULL,
  `precio_unit` decimal(10,2) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `subtotal` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pedido_items`
--

INSERT INTO `pedido_items` (`id`, `pedido_id`, `producto_id`, `titulo`, `titulo_snapshot`, `precio_unit`, `cantidad`, `subtotal`) VALUES
(5, 6, 2, 'Auriculares SonicWave', '', 129.50, 1, 129.50),
(6, 6, 3, 'Smartwatch Chronos Fit', '', 199.00, 2, 398.00),
(7, 7, 5, 'Audífonos bluetooth P-max', '', 65.00, 2, 130.00),
(23, 23, 1, 'Laptop NovaBook X14', 'Laptop NovaBook X14', 899.99, 1, 899.99),
(25, 24, 1, 'Laptop NovaBook X14', 'Laptop NovaBook X14', 899.99, 1, 899.99),
(26, 25, 2, 'Auriculares SonicWave', 'Auriculares SonicWave', 129.50, 1, 129.50),
(27, 26, 1, 'Laptop NovaBook X14', 'Laptop NovaBook X14', 899.99, 1, 899.99);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `titulo` varchar(120) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL DEFAULT 0.00,
  `categoria` varchar(40) DEFAULT 'general',
  `imagen_url` varchar(255) DEFAULT NULL,
  `modelo_3d_url` varchar(255) DEFAULT NULL,
  `creado_en` datetime DEFAULT current_timestamp(),
  `activo` tinyint(1) NOT NULL DEFAULT 1,
  `stock` int(11) NOT NULL DEFAULT 0,
  `stock_min` int(11) NOT NULL DEFAULT 5
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `titulo`, `descripcion`, `precio`, `categoria`, `imagen_url`, `modelo_3d_url`, `creado_en`, `activo`, `stock`, `stock_min`) VALUES
(1, 'Laptop NovaBook X14', '', 899.99, 'computadoras', 'https://hp.widen.net/content/bnkronnii1/jpeg/bnkronnii1.jpg?w=1500&dpi=300', 'gaming_desktop_pc_blend_file.glb', '2025-10-16 12:13:18', 1, 5, 5),
(2, 'Auriculares SonicWave', '', 129.50, 'audio', 'https://media.sketchfab.com/models/4970f358fc4b4bd99dee4440d9a85c56/thumbnails/c36f26f81b194042b14429d5f388e5e1/9e92ac342d7544a8b89269298d7bfc10.jpeg', 'gaming_headphone.glb', '2025-10-16 12:13:18', 1, 0, 5),
(3, 'Smartwatch Chronos Fit', '', 199.00, 'wearables', 'https://http2.mlstatic.com/D_NQ_NP_896970-MLU74966786829_032024-O.webp', NULL, '2025-10-16 12:13:18', 1, 2, 5),
(4, 'Teclado Mecánico Lumina', '', 85.00, 'perifericos', 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/b8bb57975374f089752b6f71cf916bcd.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp', NULL, '2025-10-16 12:13:18', 1, 3, 5),
(5, 'Audífonos bluetooth P-max', '', 65.00, 'audio', 'https://www.tecnotrade.com.ec/wp-content/uploads/2021/09/audifono_bluetooth_f9_tecnotrade.jpg', NULL, '2025-10-21 12:17:48', 1, 5, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `tema` varchar(20) DEFAULT 'claro',
  `ultimo_login` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `password`, `tema`, `ultimo_login`) VALUES
(3, 'ggg', 'apdo2@gmail.com', '$2y$10$V4sU8LvaFsiYC1rk7ByRy.EH623vUbrqeXoJVqgs5GIRLAAzG56Lm', 'claro', '2025-11-30 22:32:42'),
(7, 'eee', 'apdo@gmail.com', '$2y$10$AgxJlW4iWMifaTcCg1rPIe7Ci/eVtcr.o3H5Hv7Y9WBSxk0g8y5p.', 'oscuro', '2025-11-30 22:22:12');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito_items`
--
ALTER TABLE `carrito_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `session_id` (`session_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `producto_id` (`producto_id`);

--
-- Indices de la tabla `inventario_movimientos`
--
ALTER TABLE `inventario_movimientos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `producto_id` (`producto_id`),
  ADD KEY `tipo` (`tipo`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `codigo` (`codigo`);

--
-- Indices de la tabla `pedido_items`
--
ALTER TABLE `pedido_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pedido_id` (`pedido_id`),
  ADD KEY `producto_id` (`producto_id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito_items`
--
ALTER TABLE `carrito_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `inventario_movimientos`
--
ALTER TABLE `inventario_movimientos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `pedido_items`
--
ALTER TABLE `pedido_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito_items`
--
ALTER TABLE `carrito_items`
  ADD CONSTRAINT `fk_carrito_producto` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`);

--
-- Filtros para la tabla `inventario_movimientos`
--
ALTER TABLE `inventario_movimientos`
  ADD CONSTRAINT `fk_inv_producto` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`);

--
-- Filtros para la tabla `pedido_items`
--
ALTER TABLE `pedido_items`
  ADD CONSTRAINT `fk_pi_pedido` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`id`),
  ADD CONSTRAINT `fk_pi_producto` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`);
COMMIT;
