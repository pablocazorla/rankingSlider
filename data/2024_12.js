import processData from "./processData";

var customURL = {
  manchas:
    "https://devirinvestments.s3.eu-west-1.amazonaws.com/img/catalog/product/8436607943044-1200-face3d.jpg",
  quest:
    "https://acdn.mitiendanube.com/stores/973/406/products/8436607941569-1200-face3d-b85d5088a5c980810517314239802905-1024-1024.jpg",

  amenaza:
    "https://acdn.mitiendanube.com/stores/117/811/products/amenaza-gigante1-87541b64936e98fc5f17326532934029.jpg",
};

var fecha = "Diciembre";

var dataRaw = {
  count: `349
280
256
198
175
169
151
140
136
119`,
  previous: `460
152
398
127
121
48
128
278
178
198`,
  name_src: `Catan
Amenaza Gigante|amenaza
Azul
Sagrada
Pócimas y Brebajes
Polilla Tramposa
La Tripulación: Misión Mar Profundo
7 Wonders Duel
Las Ruinas Perdidas de Arnak
Carcassonne`,
  editorial_distribuidora: `Devir
GG Juegos de Mesa
Maldón
Devir
Devir
Devir
Devir
Top Toys
Devir
Devir`,
  prices: `$73.815	$90.000
$20.800	$23.700
$85.000	$100.430
–		
$66.400	$90.000
–		
$27.450	$37.500
$75.000	$115.000
$100.320	$116.160
$53.000	$58.630`,
  shop: ` 29 tiendas
 13 tiendas
 23 tiendas
–
 20 tiendas
–
 10 tiendas
 14 tiendas
 19 tiendas
 20 tiendas`,
  url: `https://www.cazagangas.com.ar/juego/catan
https://www.cazagangas.com.ar/juego/amenaza-gigante
https://www.cazagangas.com.ar/juego/azul
https://www.cazagangas.com.ar/juego/sagrada
https://www.cazagangas.com.ar/juego/pocimas-y-brebajes
https://www.cazagangas.com.ar/juego/polilla-tramposa
https://www.cazagangas.com.ar/juego/la-tripulacion-mision-mar-profundo
https://www.cazagangas.com.ar/juego/7-wonders-duel
https://www.cazagangas.com.ar/juego/las-ruinas-perdidas-de-arnak
https://www.cazagangas.com.ar/juego/carcassonne`,
};

var data = processData(dataRaw, customURL, fecha);

export default data;
