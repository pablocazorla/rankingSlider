import processData from "./processData";

var customURL = {
  expedicion:
    "https://ss-static-01.esmsv.com/id/117776/productos/obtenerimagen/?id=9570",
};

var fecha = "Septiembre";

var dataRaw = {
  count: `897
764
739
719
668
667
603
546
373
369`,
  previous: `248
204
1081
415
9
97
77
10
213
462`,
  name_src: `Las Ruinas Perdidas de Arnak
Azul
Catan
7 Wonders Duel
Las Ruinas Perdidas de Arnak: La Expedición Perdida|expedicion
The Island
Skull King
Guerra del Anillo: El Juego de Cartas
Root
Clank! Catacumbas|clank-catacombs`,
  editorial_distribuidora: `Devir
Maldón
Devir
Top Toys
Devir
Top Toys
Devir
Devir
2 Tomatoes
Devir`,
  prices: `$100.320-$116.160
$85.000-$95.400
$73.815-$89.300
$84.900-$99.200
$58.000-$59.740
$103.950-$117.000
$33.820-$39.150
$75.700-$85.470
-		
$110.000-$119.100`,
  shop: `18 tiendas
11 tiendas
26 tiendas
5 tiendas
4 tiendas
4 tiendas
18 tiendas
11 tiendas
-
6 tiendas`,
  url: `https://www.cazagangas.com.ar/juego/las-ruinas-perdidas-de-arnak
https://www.cazagangas.com.ar/juego/azul
https://www.cazagangas.com.ar/juego/catan
https://www.cazagangas.com.ar/juego/7-wonders-duel
https://www.cazagangas.com.ar/juego/las-ruinas-perdidas-de-arnak-la-expedicion-perdida
https://www.cazagangas.com.ar/juego/the-island
https://www.cazagangas.com.ar/juego/skull-king
https://www.cazagangas.com.ar/juego/guerra-del-anillo-el-juego-de-cartas
https://www.cazagangas.com.ar/juego/root
https://www.cazagangas.com.ar/juego/clank-catacumbas`,
};

var data = processData(dataRaw, customURL, fecha);

export default data;
