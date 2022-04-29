const router = require('express').Router();
const multerRoutes = require('./multer-route');

router.use('/upload-img', multerRoutes);

module.exports = router;
