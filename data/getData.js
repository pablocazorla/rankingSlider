import { MONTHS } from "../js/constants";
import data01 from "./2024_01";
import data02 from "./2024_02";
import data03 from "./2024_03";
import data04 from "./2024_04";
import data05 from "./2024_05";
import data06 from "./2024_06";
import data07 from "./2024_07";
import data08 from "./2024_08";
import data09 from "./2024_09";
import data10 from "./2024_10";
import data11 from "./2024_11";
import data12 from "./2024_12";

var dataRaw = [
  data01,
  data02,
  data03,
  data04,
  data05,
  data06,
  data07,
  data08,
  data09,
  data10,
  data11,
  data12,
];

const getData = () => {
  const monthsRaw = dataRaw.map(({ collection, fecha }) => {
    const coll = collection.sort((a, b) => b.count - a.count);

    return {
      collection: coll.map(({ name, src, count }, order) => {
        return { name, src, count, order };
      }),
      fecha,
      max: coll[0].count,
    };
  });

  const pool = {};

  monthsRaw.forEach(({ collection, fecha }) => {
    collection.forEach(({ name, src, count, order }) => {
      if (!pool[name]) {
        pool[name] = {
          name,
          src,
          count: MONTHS.reduce((obj, month) => {
            obj[month] = { count: 0, order: 12 };
            return obj;
          }, {}),
        };
      }
      pool[name].count[fecha] = { count, order };
    });
  });

  return {
    months: monthsRaw.reduce((obj, { fecha, max }) => {
      obj[fecha] = { max };
      return obj;
    }, {}),
    games: Object.values(pool),
  };
};

export default getData;
