import express from 'express';
import editImage from './handler/images';
import checkExistence from './handler/middleware/caching';

const app = express();
app.get('/api/images', checkExistence, editImage);
const port = 5000;
app.listen(port);
export default app;
