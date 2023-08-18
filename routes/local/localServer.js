import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import path from 'path';

const app = express();
const router = express.Router();
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// allow to use public folder of my local directory
app.use(express.static(path.join(__dirname, 'public')));

// create a chat view route of socket implementation
router.route('/chat').get(
  expressAsyncHandler(async function (req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
  })
);

router.route('/file').post(
  expressAsyncHandler(async function (req, res) {
    const file = req.body;
    res.status(200).json({ message: 'Got it from server!' });
    console.log(file);
  })
);

const routerIpLocalServer = router;
export default routerIpLocalServer;
