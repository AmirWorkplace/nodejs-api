import multer from 'multer';

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    const { filename, fieldname } = req.body;

    if (file.fieldname === 'others') {
      cb(null, body.filename);
    } else {
      cb(null, filename);
    }
  },

  destination: function (req, file, cb) {
    const { fieldname } = req.body;

    switch (fieldname) {
      case 'photo':
      case 'photos':
        cb(null, 'public/uploads/photos');
        break;

      case 'gallery':
      case 'galleries':
        cb(null, 'public/uploads/galleries');
        break;

      case 'image':
      case 'images':
        cb(null, 'public/uploads/images');
        break;

      case 'file':
      case 'files':
        cb(null, 'public/uploads/files');
        break;

      case 'cv':
        cb(null, 'public/uploads/cv');
        break;

      default:
        cb(null, 'public/uploads/others');
    }
  },
});

export const imageMulter = multer({ storage });

export default storage;
