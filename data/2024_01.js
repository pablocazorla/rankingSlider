import processData from "./processData";

var customURL = {
  manchas:
    "https://devirinvestments.s3.eu-west-1.amazonaws.com/img/catalog/product/8436607943044-1200-face3d.jpg",
  quest:
    "https://acdn.mitiendanube.com/stores/973/406/products/8436607941569-1200-face3d-b85d5088a5c980810517314239802905-1024-1024.jpg",
};

var fecha = "Enero";

var dataRaw = {
  count: `1152
970
383
370
366
298
293
271
270
263`,
  previous: `32
882
257
152
580
228
147
927
12
221`,
  name_src: `Mindbug
Catan
Las Ruinas Perdidas de Arnak
El Laberinto Mágico
Las Vegas, Baby!
Sagrada
Paleo
Océanos de Papel
Alice ha desaparecido
Carcassonne`,
  editorial_distribuidora: `Devir
Devir
Devir
Devir
Neptuno Games
Devir
Devir
Buró
Devir
Devir`,
  prices: `$27.500	$38.100
$73.815	$90.000
$100.320	$116.160
–		
$45.750	$59.780
–		
$73.815	$96.000
$13.491	$16.900
$33.000	$42.000
$53.000	$58.630`,
  shop: `3 tiendas
 29 tiendas
 19 tiendas
–
 10 tiendas
–
 10 tiendas
 26 tiendas
 8 tiendas
 20 tiendas`,
  url: `https://www.cazagangas.com.ar/juego/mindbug
https://www.cazagangas.com.ar/juego/catan
https://www.cazagangas.com.ar/juego/las-ruinas-perdidas-de-arnak
https://www.cazagangas.com.ar/juego/el-laberinto-magico
https://www.cazagangas.com.ar/juego/las-vegas-baby-
https://www.cazagangas.com.ar/juego/sagrada
https://www.cazagangas.com.ar/juego/paleo
https://www.cazagangas.com.ar/juego/oceanos-de-papel
https://www.cazagangas.com.ar/juego/alice-ha-desaparecido
https://www.cazagangas.com.ar/juego/carcassonne`,
};

var data = processData(dataRaw, customURL, fecha);

export default data;
