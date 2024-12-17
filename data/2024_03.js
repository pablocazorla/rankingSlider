import processData from "./processData";

var customURL = {
  ansia:
    "https://devirinvestments.s3.eu-west-1.amazonaws.com/img/catalog/product/8436589626874-1200-face3d.jpg",
};

var fecha = "Marzo";

var dataRaw = {
  count: `1346
  1184
  951
  753
  682
  284
  270
  270
  215
  205`,
  previous: `1026
  17
  24
  809
  33
  871
  0
  165
  106
  222`,
  name_src: `The White Castle
  Pequeñas Grandes Mazmorras
  3 Ring Circus
  Catan
  Revive
  Skull King
  Pequeñas Grandes Mazmorras: Hazañas
  Terraforming Mars
  Saboteur
  Las Ruinas Perdidas de Arnak`,
  editorial_distribuidora: `Devir
  Devir
  Devir
  Devir
  Devir
  Devir
  Devir
  Maldito Games
  Bureau de Juegos
  Devir`,
  prices: `$45.980-$52.990-
  $44.900-$49.900
  $51.500-$57.970
  $66.215-$83.650
  $126.000-$135.800
  $33.155-$45.000
  $40.990-$45.999
  $156.000
  -
  $89.000-$93.357`,
  shop: `17 tiendas
  11 tiendas
  14 tiendas
  27 tiendas
  15 tiendas
  13 tiendas
  10 tiendas
  1 tienda
  -
  14 tiendas`,
  url: `https://www.cazagangas.com.ar/juego/the-white-castle
  https://www.cazagangas.com.ar/juego/pequenas-grandes-mazmorras
  https://www.cazagangas.com.ar/juego/3-ring-circus
  https://www.cazagangas.com.ar/juego/catan
  https://www.cazagangas.com.ar/juego/revive
  https://www.cazagangas.com.ar/juego/skull-king
  https://www.cazagangas.com.ar/juego/pequenas-grandes-mazmorras-hazanas
  https://www.cazagangas.com.ar/juego/terraforming-mars
  https://www.cazagangas.com.ar/juego/saboteur
  https://www.cazagangas.com.ar/juego/las-ruinas-perdidas-de-arnak`,
};

var data = processData(dataRaw, customURL, fecha);

export default data;
