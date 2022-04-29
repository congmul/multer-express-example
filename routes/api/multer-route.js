const router = require('express').Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, 'build'))
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage });

router.post('/', upload.single('profile'), (req, res) => {
    try{
        console.log(JSON.stringify(req.file))
        var response = '<a href="/">Home</a><br>'
        response += "Files uploaded successfully.<br>"
        response += `<img src="/uploads/${req.file.filename}" /><br>`
        return res.send(response)
    }catch(err){
        res.send(400);
    }
})

module.exports = router;
