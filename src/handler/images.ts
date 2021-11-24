import { Request, Response } from 'express';
import path from 'path';
import sharp from 'sharp';
import fs from 'fs';
import { nc } from './middleware/caching';

const editImage = async (req: Request, res: Response) => {
  try {
    const { width, height, filename } = req.query;
    const output = `edited/${filename}`;
    const input = `assets/${filename}`;
    if (
      Number.isNaN(Number(width)) ||
      Number.isNaN(Number(height)) ||
      Number(width) <= 0 ||
      Number(height) <= 0
    ) {
      return res.status(406).json('Please Enter a vaild value');
    }
    if (!filename || !width || !height) {
      return res
        .status(400)
        .json('Something went wrong, make sure to type the queries coorect.');
    }
    fs.exists(`${input}.jpg`, async (exists) => {
      if (!exists) return res.status(404).json('File Doesnt Exist');
      await sharp(`${input}.jpg`)
        .resize({ width: Number(width), height: Number(height) })
        .toFile(`${output}-${width}-${height}_edited.jpg`);
      const image = `edited/${filename}-${width}-${height}_edited.jpg`;
      nc.set('editedimage', image);
      return res.status(201).sendFile(path.join(__dirname, '../../', image));
    });
  } catch (error) {
    res.status(404).json('Something went wrong');
  }
  return undefined;
};

export default editImage;
