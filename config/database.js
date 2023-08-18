import mongose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
// import mongose from 'mongose/package.json';
// console.log(mongoseUrl);

const mongoseUrl = process.env.MONGODB_URL;
export default async function mongodbConnection() {
  try {
    const connect = await mongose.connect(mongoseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Mongo Database Connected Successfully!'.bgYellow.black);
  } catch (error) {
    console.log(` ${error.message} `.bgRed.black);
  }
}
