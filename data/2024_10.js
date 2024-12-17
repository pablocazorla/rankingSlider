import processData from "./processData";

var customURL = {
  carreras:
    "https://acdn.mitiendanube.com/stores/001/458/172/products/img_2973-c7034bfbf7f99ba1d017297221205240-1024-1024.jpeg",
};

var fecha = "Octubre";

var dataRaw = {
  count: `663
526
474
407
373
314
252
247
244
244`,
  previous: `764
739
667
0
719
104
47
373
369
897`,
  name_src: `Azul
Catan
The Island
Un Día en las Carreras|carreras
7 Wonders Duel
Trio
Coffee Rush
Root
Clank! Catacumbas|clank-catacombs
Las Ruinas Perdidas de Arnak`,
  editorial_distribuidora: `Maldón
Devir
Top Toys
Devir
Top Toys
Devir
Asmodee
2Tomatoes Games
Devir
Devir`,
  prices: `$82.169	$94.550
$73.814	$89.300
$109.000	$124.019
$70.000	$77.600
$84.100	$106.019
$21.850	$25.600
-
$200.000
$110.000	$121.600
$100.320	$116.160`,
  shop: ` 20 tiendas
 31 tiendas
 7 tiendas
 13 tiendas
 11 tiendas
 18 tiendas
-
1 tienda
 3 tiendas
 19 tiendas`,
  url: `https://www.cazagangas.com.ar/juego/azul
https://www.cazagangas.com.ar/juego/catan
https://www.cazagangas.com.ar/juego/the-island
https://www.cazagangas.com.ar/juego/un-dia-en-las-carreras
https://www.cazagangas.com.ar/juego/7-wonders-duel
https://www.cazagangas.com.ar/juego/trio
https://www.cazagangas.com.ar/juego/coffee-rush
https://www.cazagangas.com.ar/juego/root
https://www.cazagangas.com.ar/juego/clank-catacumbas
https://www.cazagangas.com.ar/juego/las-ruinas-perdidas-de-arnak`,
};

var data = processData(dataRaw, customURL, fecha);

export default data;
