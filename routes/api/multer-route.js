const router = require('express').Router();
const multer = require('multer');
const upload = multer({dest: 'public/uploads/'});

router.post('/', upload.single('profile'), (req, res) => {
    try{
        console.log(req.file);
        console.log(req.body);
        res.send(req.file);
    }catch(err){
        res.send(400);
    }
})

module.exports = router;
