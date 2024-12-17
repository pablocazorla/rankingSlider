import processData from "./processData";

var customURL = {
  ansia:
    "https://devirinvestments.s3.eu-west-1.amazonaws.com/img/catalog/product/8436589626874-1200-face3d.jpg",
};

var fecha = "Julio";

var dataRaw = {
  count: `1014
787
662
577
469
381
361
344
292
286`,
  previous: `979
68
161
38
216
484
990
188
427
529`,
  name_src: `Catan
Guerra del Anillo: Segunda Edición
The White Castle
¡Rescate!
La Resistencia: Ávalon
Clank!
Clank! Catacumbas|clank-catacombs
Azul
Pócimas y Brebajes
Paleo`,
  editorial_distribuidora: `Devir
Devir
Devir
Devir
Devir
Devir
Devir
Next Move Games
Devir
Devir`,
  prices: `$72.865	$88.205
$137.250	$151.050
$53.000	$64.000
$74.300		–
–		
$86.260	$104.500
$113.145	$131.000
–		
$70.500	$88.500
$73.815	$85.470`,
  shop: ` 29 tiendas
 12 tiendas
 4 tiendas
1 tienda
–
 18 tiendas
 11 tiendas
–
 9 tiendas
 18 tiendas`,
  url: `https://www.cazagangas.com.ar/juego/catan
https://www.cazagangas.com.ar/juego/guerra-del-anillo-segunda-edicion
https://www.cazagangas.com.ar/juego/the-white-castle
https://www.cazagangas.com.ar/juego/-rescate-
https://www.cazagangas.com.ar/juego/la-resistencia-avalon
https://www.cazagangas.com.ar/juego/clank-
https://www.cazagangas.com.ar/juego/clank-catacumbas
https://www.cazagangas.com.ar/juego/azul
https://www.cazagangas.com.ar/juego/pocimas-y-brebajes
https://www.cazagangas.com.ar/juego/paleo`,
};

var data = processData(dataRaw, customURL, fecha);

export default data;
