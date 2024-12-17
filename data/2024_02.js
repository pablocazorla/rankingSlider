import processData from "./processData";

var customURL = {
  manchas:
    "https://devirinvestments.s3.eu-west-1.amazonaws.com/img/catalog/product/8436607943044-1200-face3d.jpg",
  quest:
    "https://acdn.mitiendanube.com/stores/973/406/products/8436607941569-1200-face3d-b85d5088a5c980810517314239802905-1024-1024.jpg",
};

var fecha = "Febrero";

var dataRaw = {
  count: `1026
871
809
387
343
294
254
238
235
234`,
  previous: `210
26
970
248
117
1152
10
10
263
210`,
  name_src: `The White Castle
Skull King
Catan
The Mind
Hero Realms
Mindbug
Blind Business
El Señor de los Anillos: La Batalla por la Tierra Media
Azul
Pócimas y Brebajes`,
  editorial_distribuidora: `Devir
Devir
Devir
Maldón
Devir
Devir
Devir
Devir
Maldón
Devir`,
  prices: `–		
$35.500	$39.160
$73.815	$90.000
$37.100	$43.000
$40.500	$41.800
$27.500	$38.100
$18.240	$54.100
$20.500	
$85.000	$100.430
$66.400	$90.000`,
  shop: `–
 20 tiendas
 29 tiendas
 21 tiendas
 3 tiendas
 3 tiendas
 20 tiendas
1 tienda
 23 tiendas
 20 tiendas`,
  url: `https://www.cazagangas.com.ar/juego/the-white-castle
https://www.cazagangas.com.ar/juego/skull-king
https://www.cazagangas.com.ar/juego/catan
https://www.cazagangas.com.ar/juego/the-mind
https://www.cazagangas.com.ar/juego/hero-realms
https://www.cazagangas.com.ar/juego/mindbug
https://www.cazagangas.com.ar/juego/blind-business
https://www.cazagangas.com.ar/juego/el-senor-de-los-anillos-la-batalla-por-la-tierra-media
https://www.cazagangas.com.ar/juego/azul
https://www.cazagangas.com.ar/juego/pocimas-y-brebajes`,
};

var data = processData(dataRaw, customURL, fecha);

export default data;
