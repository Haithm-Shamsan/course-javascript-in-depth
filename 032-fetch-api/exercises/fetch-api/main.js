import fetch from "node-fetch";
import { writeFile } from "fs/promises";

const url = "https://w.wallhaven.cc/full/7p/wallhaven-7p75yy.png";

const downloadImage = async (url, destination) => {
    try {
        const respone = await fetch(url);

        const buffer = await respone.arrayBuffer();
        
        FileSystem.writeFile(destination, Buffer.from(buffer));
        console.log("dawnloading image seccedded")
    }
}
  

const destination =
  "D:/VSCodeProjects/javascript-in-depth/032-fetch-api/exercises/fetch-api/image.png";

downloadImage(url, destination);
