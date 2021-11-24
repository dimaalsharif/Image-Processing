import NodeCache from 'node-cache';
import { Request, Response } from 'express';
import path from 'path';

export const nc = new NodeCache({ stdTTL: 10 });
const checkExistence = (req: Request, res: Response, next: () => void) => {
  const name = req.query.filename;
  const { width } = req.query;
  const { height } = req.query;
  const img = nc.get('editedimage');
  const newimg = `edited/${name}-${width}-${height}_edited.jpg`;
  if (img === newimg) {
    res.status(200).sendFile(path.join(__dirname, '../../../', String(img)));
  } else {
    next();
  }
};
export default checkExistence;
