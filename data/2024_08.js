import processData from "./processData";

var customURL = {
  ansia:
    "https://devirinvestments.s3.eu-west-1.amazonaws.com/img/catalog/product/8436589626874-1200-face3d.jpg",
};

var fecha = "Agosto";

var dataRaw = {
  count: `1320
1081
623
462
431
425
415
323
295
266`,
  previous: `7
1014
0
361
787
41
248
292
381
662`,
  name_src: `El Grande
Catan
Akropolis
Clank! Catacumbas|clank-catacombs
Guerra del Anillo: Segunda Edición
boop.
7 Wonders Duel
Pócimas y Brebajes
Clank!
The White Castle`,
  editorial_distribuidora: `Devir
Devir
Maldón
Devir
Devir
Smirk & Laughter Games
Repos Production
Devir
Devir
Devir`,
  prices: `$90.600	$104.500
$72.865	$89.300
$57.500	$61.900
$104.500	$130.000
$137.300	$160.000
-
$99.999		-
$80.400	$90.000
$88.160	$107.000`,
  shop: `4 tiendas
 29 tiendas
 13 tiendas
 16 tiendas
 3 tiendas
-
1 tienda
 5 tiendas
 18 tiendas
-`,
  url: `https://www.cazagangas.com.ar/juego/el-grande
https://www.cazagangas.com.ar/juego/catan
https://www.cazagangas.com.ar/juego/akropolis
https://www.cazagangas.com.ar/juego/clank-catacumbas
https://www.cazagangas.com.ar/juego/guerra-del-anillo-segunda-edicion
https://www.cazagangas.com.ar/juego/boop
https://www.cazagangas.com.ar/juego/7-wonders-duel
https://www.cazagangas.com.ar/juego/pocimas-y-brebajes
https://www.cazagangas.com.ar/juego/clank-
https://www.cazagangas.com.ar/juego/the-white-castle`,
};

var data = processData(dataRaw, customURL, fecha);

export default data;
