import processData from "./processData";

var customURL = {
  ansia:
    "https://devirinvestments.s3.eu-west-1.amazonaws.com/img/catalog/product/8436589626874-1200-face3d.jpg",
};

var fecha = "Junio";

var dataRaw = {
  count: `990
979
529
484
427
380
292
280
277
276`,
  previous: `0
801
473
177
495
11
765
530
382
1806`,
  name_src: `Clank! Catacumbas|clank-catacombs
Catan
Paleo
Clank!
Pócimas y Brebajes
Clank! La Maldición de la Momia
Cleptómano
Sushi Go Party!
Las Ruinas Perdidas de Arnak
Sand`,
  editorial_distribuidora: `Devir
Devir
Devir
Devir
Devir
Devir
Super Noob Games
Devir
Devir
Devir`,
  prices: `$113.145	$131.000
$72.865	$88.205
$68.200	$85.470
$86.260	$104.500
$63.080	$88.500
$50.635	$61.300
$18.000	$25.300
$41.000	$48.000
-
$49.900	$63.750`,
  shop: `8 tiendas
 23 tiendas
 12 tiendas
 16 tiendas
 11 tiendas
 14 tiendas
 8 tiendas
 16 tiendas
-
 14 tiendas`,
  url: `https://www.cazagangas.com.ar/juego/clank-catacumbas
https://www.cazagangas.com.ar/juego/catan
https://www.cazagangas.com.ar/juego/paleo
https://www.cazagangas.com.ar/juego/clank-
https://www.cazagangas.com.ar/juego/pocimas-y-brebajes
https://www.cazagangas.com.ar/juego/clank-la-maldicion-de-la-momia
https://www.cazagangas.com.ar/juego/cleptomano
https://www.cazagangas.com.ar/juego/sushi-go-party-
https://www.cazagangas.com.ar/juego/las-ruinas-perdidas-de-arnak
https://www.cazagangas.com.ar/juego/sand`,
};

var data = processData(dataRaw, customURL, fecha);

export default data;
