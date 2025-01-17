import { CSV } from "https://js.sabae.cc/CSV.js";
import "./makeSakuraCSV.js";

const dstfn = "it-words.csv";

const srcs = [
  { url: "sakura-it-words.csv" },
  { url: "https://ichigojam.github.io/doc/IchigoJam-words.csv", src_title: "IchigoJam用語集", src_url: "https://github.com/IchigoJam/doc/blob/master/IchigoJam-words.csv" },
];

const list = [];
for (const src of srcs) {
  const list2 = await CSV.fetchJSON(src.url);
  if (src.src_title) {
    list2.forEach(i => {
      i.src_title = src.src_title;
      i.src_url = src.src_url;
    });
  }
  list2.forEach(i => list.push(i));
}
await Deno.writeTextFile(dstfn, CSV.stringify(list));
