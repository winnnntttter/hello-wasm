// const Module = import('./imagequant/imagequant.js');
import imagequant from './imagequant/imagequant.js';
async function loadImage(file) {
    // create a new FileReader object
    const reader = new FileReader();

    // set up the FileReader to read the file as a data URL
    reader.readAsDataURL(file);

    await new Promise(resolve => (reader.onload = resolve));
    // create a new Image object
    const img = new Image();
    // set up the Image object to load the data URL as its source
    img.src = reader.result;
    await new Promise(resolve => (img.onload = resolve));

    // Make canvas same size as image
    const canvas = document.createElement('canvas');
    [canvas.width, canvas.height] = [img.width, img.height];
    // Draw image onto canvas
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    return ctx.getImageData(0, 0, img.width, img.height);
}

export default async function compressIMG(file) {
    const module = await imagequant();

    console.log('Version:', module.version().toString(16));
    const image = await loadImage(file);
    const rawImage = module.quantize(image.data, image.width, image.height, 256, 1.0);
    console.log('done');

    const imageData = new ImageData(new Uint8ClampedArray(rawImage.buffer), image.width, image.height);
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext('2d');
    ctx.putImageData(imageData, 0, 0);
    document.body.appendChild(canvas);
}
