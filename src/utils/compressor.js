import Resizer from 'react-image-file-resizer';

function dataURItoFile(datauri, filename) {
    var arr = datauri.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
}

function makeName(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const resizeFile = (file) => new Promise(resolve => {
    Resizer.imageFileResizer(file[0], 600, 600, 'JPEG', 3000, 0,
        uri => {
            resolve(dataURItoFile(uri, makeName((12))));
        },
        'base64'
    );
});

export default resizeFile;