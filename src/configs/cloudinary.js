const cloudinary = require('cloudinary');

(async function () {

    // Configuration
    cloudinary.config({
        cloud_name: 'dzkp4wigv',
        api_key: '273191544515999',
        api_secret: '8F3Y73k6JevMjxMFnvnWEThf8Lc' // Click 'View Credentials' below to copy your API secret
    });

    // // Upload an image
    //  const uploadResult = await cloudinary.uploader
    //    .upload(
    //        'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
    //            public_id: 'shoes',
    //        }
    //    )
    //    .catch((error) => {
    //        console.log(error);
    //    });

    // console.log(uploadResult);

    // // Optimize delivery by resizing and applying auto-format and auto-quality
    // const optimizeUrl = cloudinary.url('shoes', {
    //     fetch_format: 'auto',
    //     quality: 'auto'
    // });

    // console.log(optimizeUrl);

    // // Transform the image: auto-crop to square aspect_ratio
    // const autoCropUrl = cloudinary.url('shoes', {
    //     crop: 'auto',
    //     gravity: 'auto',
    //     width: 500,
    //     height: 500,
    // });

    // console.log(autoCropUrl);    
})();

console.log("runn")