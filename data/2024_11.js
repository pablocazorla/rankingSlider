import processData from "./processData";

var customURL = {
  manchas:
    "https://devirinvestments.s3.eu-west-1.amazonaws.com/img/catalog/product/8436607943044-1200-face3d.jpg",
  quest:
    "https://acdn.mitiendanube.com/stores/973/406/products/8436607941569-1200-face3d-b85d5088a5c980810517314239802905-1024-1024.jpg",
};

var fecha = "Noviembre";

var dataRaw = {
  count: `460
398
334
307
278
241
206
198
197
179`,
  previous: `526
663
244
0
373
154
247
171
0
158`,
  name_src: `Catan
Azul
Clank! Catacumbas|clank-catacombs
Quest|quest
7 Wonders Duel
Exploding Kittens
Root
Carcassonne
Manchas|manchas
Pandemic`,
  editorial_distribuidora: `Devir
Maldón
Devir
Devir
Top Toys
Top Toys
2Tomatoes Games
Devir
Devir
Top Toys`,
  prices: `$73.815	$94.000
$73.040	$95.400
–		
$45.000	$52.590
$75.000	$115.000
$14.640	$21.900
$220.000
$53.000	$61.100
$44.400	$48.840
$80.000	$136.619`,
  shop: `28 tiendas
 23 tiendas
–
 10 tiendas
 15 tiendas
 14 tiendas
1 tienda
 24 tiendas
 7 tiendas
 15 tiendas`,
  url: `https://www.cazagangas.com.ar/juego/catan
https://www.cazagangas.com.ar/juego/azul
https://www.cazagangas.com.ar/juego/clank-catacumbas
https://www.cazagangas.com.ar/juego/quest
https://www.cazagangas.com.ar/juego/7-wonders-duel
https://www.cazagangas.com.ar/juego/exploding-kittens
https://www.cazagangas.com.ar/juego/root
https://www.cazagangas.com.ar/juego/carcassonne
https://www.cazagangas.com.ar/juego/manchas
https://www.cazagangas.com.ar/juego/pandemic`,
};

var data = processData(dataRaw, customURL, fecha);

export default data;
