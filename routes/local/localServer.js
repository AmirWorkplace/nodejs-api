import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import path from 'path';
import { imageMulter } from '../../utils/multerStorage.js';
import { publicPath } from '../../utils/dirPath.js';
import File from '../../models/local/File.js';
import fs, { unlink } from 'fs';

const app = express();
const router = express.Router();
const currentPath = new URL(import.meta.url).pathname;
const __dirname = path.dirname(currentPath);

// determine the root directory path
const rootDir = path.resolve(currentPath, '../../../');

app.use(express.urlencoded({ extended: true }));

// allow to use public folder of my local directory
app.use(express.static(path.join(__dirname, 'public')));

// create a chat view route of socket implementation
router.route('/chat').get(
  expressAsyncHandler(async function (req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
  })
);

// get all file data route
router
  .route('/file')
  .get(
    expressAsyncHandler(async function (req, res) {
      const fileData = await File.find();

      if (fileData) {
        res.status(200).json(fileData);
        return;
      } else if (!data.length) {
        res.status(404).json({ message: 'No file data are available here!' });
        return;
      } else {
        res.status(404).json({ message: 'No file data are available here!' });
        return;
      }
    })
  )
  .post(
    imageMulter.single('file'),
    expressAsyncHandler(async function (req, res) {
      const { filename, fieldname, type } = req.body;

      // crate file path
      const fileType = type,
        filePath = path.join('/public/uploads/', fieldname, filename),
        fileDirPath = path.join(publicPath, 'uploads', fieldname, filename);

      const body = {
        type,
        path: filePath,
        dirPath: fileDirPath,
        name: filename.split('__')[1],
      };

      // Save file path in our db
      const file = await File.create(body);

      if (file) {
        res.status(200).json({
          body,
          file,
          message: 'File inserted successfully!',
        });
      } else {
        res
          .status(400)
          .json({ message: 'Something went wrong, Please try again' });
      }
    })
  );

// try to delete a file use their id
router.route('/file/:id').delete(
  expressAsyncHandler(async function (req, res) {
    const { id } = req.params;
    try {
      const deletedFile = await File.findByIdAndDelete(id);
      if (!deletedFile) {
        return res.status(404).json({ message: 'File are not found' });
      }

      const dltFilePath = path.resolve(deletedFile.dirPath);

      fs.unlink(dltFilePath, function (unlinkError) {
        if (unlinkError) {
          console.error(error);
          return res.status(500).json({ message: 'Failed to delete the file' });
        } else {
          return res
            .status(200)
            .json({ message: 'File deleted successfully!' });
        }
      });
    } catch (error) {
      console.error(error);
    }
  })
);

router.route('/file/download').post(
  expressAsyncHandler(function (req, res) {
    const { _id, dirPath } = req.body;

    try {
      // if file id are not available in our post request
      if (!_id) {
        res.status(300).json({ message: 'No, file data founded!' });
        return;
      }

      const pathArr = req.body.path.split('/');
      console.log(pathArr[pathArr.length - 1]);

      // use download for downloading file
      res.download(dirPath, pathArr[pathArr.length - 1], function (err) {
        if (err) {
          console.error('Error downloading file:', err);
          res.status(500).json({ message: 'Failed to download the file' });
        }
      });
    } catch (error) {
      console.error(error);
    }
  })
);

const routerIpLocalServer = router;
export default routerIpLocalServer;
