const cloudinary = require('cloudinary');

const customerGet = (req, res) => {
    res.send('Birds home page')
}

const customerPost = async (req, res) => {
    console.log(req.file)

    // Upload an image
    const uploadResult = await cloudinary.uploader
        .upload(
            req.file.path,
            () => { },
            {
                resource_type: "auto",
                folder: "Logo",
                use_filename: true
            }
        )
        .catch((error) => {
            console.log(error);
        });

    res.send(uploadResult)
}

module.exports = { customerGet, customerPost }