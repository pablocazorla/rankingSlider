import processData from "./processData";

var customURL = {
  ansia:
    "https://devirinvestments.s3.eu-west-1.amazonaws.com/img/catalog/product/8436589626874-1200-face3d.jpg",
};

var fecha = "Mayo";

var dataRaw = {
  count: `1806
  801
  765
  559
  530
  495
  487
  473
  438
  426`,
  previous: `61
  712
  1
  638
  34
  83
  231
  88
  22
  102`,
  name_src: `Sand
  Catan
  Cleptómano
  The White Castle
  Sushi Go Party!
  Pócimas y Brebajes
  La Tripulación: Misión Mar Profundo
  Paleo
  Exploding Kittens
  Root`,
  editorial_distribuidora: `Devir
  Devir
  Super Noob Games
  Devir
  Devir
  Devir
  Devir
  Devir
  Top Toys
  2Tomatoes Games`,
  prices: `$47.405	$57.385
  $65.900	$80.155
  $18.000	$23.000
  -
  $36.500	$43.500
  $57.285	$69.600
  $23.750	$29.000
  $58.900	$66.700
  $14.985	$19.690
  -`,
  shop: `16 tiendas
  26 tiendas
  6 tiendas
 -
  9 tiendas
  11 tiendas
  14 tiendas
  10 tiendas
  7 tiendas
 -`,
  url: `https://www.cazagangas.com.ar/juego/sand
  https://www.cazagangas.com.ar/juego/catan
  https://www.cazagangas.com.ar/juego/cleptomano
  https://www.cazagangas.com.ar/juego/the-white-castle
  https://www.cazagangas.com.ar/juego/sushi-go-party-
  https://www.cazagangas.com.ar/juego/pocimas-y-brebajes
  https://www.cazagangas.com.ar/juego/la-tripulacion-mision-mar-profundo
  https://www.cazagangas.com.ar/juego/paleo
  https://www.cazagangas.com.ar/juego/exploding-kittens
  https://www.cazagangas.com.ar/juego/root`,
};

var data = processData(dataRaw, customURL, fecha);

export default data;
