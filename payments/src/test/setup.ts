import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../app';
import jwt from 'jsonwebtoken';
declare global {
   function signin(id?:string): string[]
}
jest.mock('../nats-wrapper');

process.env.STRIPE_KEY = 'sk_test_51HdUfqFATAqw8I36GKiTgAdMho3ZFDd5s5EJnkUGxzSt2q9qkVq0dxIzwUvtoDFMTN7d9nsGXe7FPgzmZL9VjDKd00LzgqDL55';


let mongo: any;
beforeAll(async () => {
  process.env.JWT_KEY = 'asdfasdf';
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  mongo = new MongoMemoryServer();
  const mongoUri = await mongo.getUri();

  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

beforeEach(async () => {
  jest.clearAllMocks();
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});

global.signin = (id?:string) => {

  const payload = {
    //id:'634cece900eb1e001853aa57',
    id:id || new mongoose.Types.ObjectId().toHexString(),
    email:'test@test.com'
  };
  const token  = jwt.sign(payload, process.env.JWT_KEY!);
  
  const session = {jwt:token};

  const sessionJson = JSON.stringify(session);

  const base64 = Buffer.from(sessionJson).toString('base64');

  return [`express:sess=${base64}`];
};
