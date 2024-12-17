var getArr = function (col, isNumber) {
  var arr = col.split("\n");
  var arr2 = [];
  arr.forEach(function (c) {
    var ct = c.trim();

    if (isNumber) {
      var ctNum = parseInt(ct, 10);
      if (isNaN(ctNum)) {
        arr2.push(0);
      } else {
        arr2.push(ctNum);
      }
    } else {
      arr2.push(ct);
    }
  });
  return arr2;
};

var processData = function (d, customURL, fecha) {
  var collection = [];
  var cols = [
    {
      name: "count",
      isNumber: true,
    },
    {
      name: "previous",
      isNumber: true,
    },
    {
      name: "name_src",
      isNumber: false,
    },
    {
      name: "editorial_distribuidora",
      isNumber: false,
    },
    {
      name: "prices",
      isNumber: false,
    },
    {
      name: "shop",
      isNumber: true,
    },
    {
      name: "url",
      isNumber: false,
    },
  ];

  var o = {
    src: [],
    name: [],
  };

  cols.forEach(function (c) {
    o[c.name] = getArr(d[c.name], c.isNumber);
  });

  o.name_src.forEach(function (n, j) {
    var arr = n.split("|");
    o.name.push(arr[0].trim());
    if (arr[1]) {
      if (customURL[arr[1].trim()]) {
        o.src.push(customURL[arr[1].trim().toLowerCase()]);
      } else {
        o.src.push(
          `https://www.cazagangas.com.ar/images/juegos/${arr[1]
            .trim()
            .toLowerCase()}.jpg`
        );
      }
    } else {
      var src_url_arr = o.url[j].split("/");
      var src_url_arr_lastInd = src_url_arr.length - 1;
      if (src_url_arr[src_url_arr_lastInd]) {
        o.src.push(
          `https://www.cazagangas.com.ar/images/juegos/${src_url_arr[src_url_arr_lastInd]}.jpg`
        );
      }
    }
  });

  delete o.name_src;

  o.count.forEach(function (c, i) {
    collection.push({
      count: c,
      previous: o.previous[i],
      previous: o.previous[i],
      name: o.name[i],
      editorial_distribuidora: o.editorial_distribuidora[i],
      src: o.src[i],
      prices: o.prices[i],
      shop: o.shop[i],
      url: o.url[i],
      // count: c,
    });
  });

  return {
    collection,
    fecha: fecha || "Mes",
  };
};

export default processData;
