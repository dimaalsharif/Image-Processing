import supertest from 'supertest';
import app from '../index';
import editImage from '../handler/images';

const request = supertest(app);
describe('API test', () => {
  it('function is defined', () => {
    expect(editImage).toBeDefined();
  });
  it('edit the image size correctly', async () => {
    const result = await request.get(
      '/api/images?filename=input&width=300&height=300'
    );
    expect(result.status).toEqual(201);
  });
  it('edit the same image size to check if the cache is working', async () => {
    const result = await request.get(
      '/api/images?filename=input&width=300&height=300'
    );
    expect(result.status).toEqual(200);
  });
  it('file doesnt exsit', async () => {
    const result = await request.get(
      '/api/images?filename=hi&width=300&height=300'
    );
    expect(result.status).toEqual(404);
  });
  it('width or height are not numbers', async () => {
    const result = await request.get(
      '/api/images?filename=input&width=hii&height=80xxx'
    );
    expect(result.status).toEqual(406);
  });
  it('Bad request, one of the query is misspelled', async () => {
    const result = await request.get(
      '/api/images?file=input&width=50&height=50'
    );
    expect(result.status).toEqual(400);
  });
});
