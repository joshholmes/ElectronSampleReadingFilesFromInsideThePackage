// Initial welcome page. Delete the following line to remove it.
require('electron-webpack/package.json');
require('electron');

function write(msg) {
    var para = document.createElement("p");
    var node = document.createTextNode(msg);
    document.getElementById("app").appendChild(node);
}
var fs = require("fs");

write("__dirname: " + __dirname);
var path = __dirname + "/assets/main.md";

write("path: " + path);

try {   
    
    var buf = fs.readFileSync(path);
    write(buf.toString());
}
catch (e) {
    write("error: " + e.toString());
}