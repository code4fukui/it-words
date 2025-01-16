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
  if (s.length == 0) continue;
  const n = s.indexOf(",");
  if (n < 0) {
    for (const name in srcs) {
      if (s.startsWith(name)) {
        src = srcbase + srcs[name];
        break;
      }
    }
    console.log("src", src, "<-", s);
    continue;
  }
  const ss = [s.substring(0, n), s.substring(n + 1)];
  ss.push("さくらのクラウド検定オンライン教材");
  ss.push(src);
  list.push(ss);
}
await Deno.writeTextFile("it-words.csv", CSV.encode(list));
