const multer = require("multer");
const uploadImageSingle = () => {
    const storage = multer.diskStorage({

        filename: (req, file, cb) => {
            cb(null, Date.now() + "_" + file.originalname);
        },
    });
    const upload = multer({
        storage,
        fileFilter: (req, file, cb) => {
            cb(null, true);
        },
    });
    return upload;
};

module.exports = {
    uploadImageSingle
};
