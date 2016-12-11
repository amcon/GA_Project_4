const cloudinary = require('cloudinary');

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const API_KEY = process.env.CLOUDINARY_API_KEY;
const API_SECRET = process.env.CLOUDINARY_API_SECRET;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});

function uploadImage (imagePath) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(imagePath, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });
}

function uploadArray (pathsArray) {
  let promisesArray = [];
  pathsArray.forEach((path, i) => {
    promisesArray.push(uploadImage(path));
  });
  console.log(promisesArray, 'in uploadArray')
  return promisesArray;
}

module.exports = {
  uploadImage,
  uploadArray
}
