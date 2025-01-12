import { CSV } from "https://js.sabae.cc/CSV.js";

const data = (await Deno.readTextFile("./src.txt")).split("\n");

const srcbase = "https://code4fukui.github.io/SakuraCloudCertificationStudyMaterial/";
const srcs = {
  "1.1": "1.1_Cloud.pdf",
  "1.2": "1.2_Computer.pdf",
  "1.3": "1.3_Network.pdf",
};

const list = [["word", "description", "src_title", "src_url"]];
let src = null;
for (const s of data) {
  const ss = s.split(",");
  if (ss.length == 0) continue;
  if (ss.length == 1) {
    if (ss[0] == "") continue;
    for (const name in srcs) {
      if (ss[0].startsWith(name)) {
        src = srcbase + srcs[name];
        break;
      }
    }
    console.log("src", src, "<-", ss[0]);
    continue;
  }
  ss.push("さくらのクラウド検定オンライン教材");
  ss.push(src);
  list.push(ss);
}
await Deno.writeTextFile("it-words.csv", CSV.encode(list));
