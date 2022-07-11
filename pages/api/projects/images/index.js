const upload = require("./controller");
export default function handler(req, res) {
    if (req.method == 'GET') {

    }
    else if(req.method == 'POST'){
        if (req.file === undefined) return res.send("you must select a file.");
        const imgUrl = `http://localhost:8080/file/${req.file.filename}`;
        return res.send(imgUrl);
    }
}