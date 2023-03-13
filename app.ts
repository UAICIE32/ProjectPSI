import * as http from "http"
import plantumlEncoder from "plantuml-encoder";
import fs, { readFileSync } from "fs"
function requestImageFile(output, input, extension) {
    http.get({
        host: 'www.plantuml.com',
        path: "/plantuml/" + extension + "/" + plantumlEncoder.encode(input)
    }, function (res) {
        var fileStream = fs.createWriteStream(output);
        res.setEncoding('utf-8');
        res.pipe(fileStream);
        res.on('error', function (err) {
            throw err;
        });
    });
}
requestImageFile("test.svg", readFileSync("./result.puml", 'utf-8'), "svg")