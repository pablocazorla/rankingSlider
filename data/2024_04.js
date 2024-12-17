import processData from "./processData";

var customURL = {
  ansia:
    "https://devirinvestments.s3.eu-west-1.amazonaws.com/img/catalog/product/8436589626874-1200-face3d.jpg",
};

var fecha = "Abril";

var dataRaw = {
  count: `712
  646
  638
  636
  360
  340
  261
  231
  217
  209`,
  previous: `753
  1184
  1346
  39
  205
  0
  270
  35
  284
  951`,
  name_src: `Catan
  Pequeñas Grandes Mazmorras
  The White Castle
  Regicide
  Las Ruinas Perdidas de Arnak
  Rivales
  Terraforming Mars
  La Tripulación: Misión Mar Profundo
  Skull King
  3 Ring Circus`,
  editorial_distribuidora: `Devir
  Devir
  Devir
  Devir
  Devir
  Pulga Escapista
  Maldito Games
  Devir
  Devir
  Devir`,
  prices: `$66.215-$76.670	$10.455
  -	
  $48.400-$49.200
  $16.530-$18.990
  $89.000-$98.340
  $7.990-$9.000
  $156.000
  $24.500-$26.000
  $34.100-$36.400
  $52.700-$57.990
  -
  $89.000-$93.357`,
  shop: ` 26 tiendas
  -
   7 tiendas
   20 tiendas
   4 tiendas
   7 tiendas
  1 tienda
   10 tiendas
   5 tiendas
   10 tiendas`,
  url: `https://www.cazagangas.com.ar/juego/catan
  https://www.cazagangas.com.ar/juego/pequenas-grandes-mazmorras
  https://www.cazagangas.com.ar/juego/the-white-castle
  https://www.cazagangas.com.ar/juego/regicide
  https://www.cazagangas.com.ar/juego/las-ruinas-perdidas-de-arnak
  https://www.cazagangas.com.ar/juego/rivales
  https://www.cazagangas.com.ar/juego/terraforming-mars
  https://www.cazagangas.com.ar/juego/la-tripulacion-mision-mar-profundo
  https://www.cazagangas.com.ar/juego/skull-king
  https://www.cazagangas.com.ar/juego/3-ring-circus`,
};

var data = processData(dataRaw, customURL, fecha);

export default data;
