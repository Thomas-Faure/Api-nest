import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/users (POST, GET)', async () => {
    const createRes = await request(app.getHttpServer())
      .post('/users')
      .send({ name: 'John' })
      .expect(201);
    expect(createRes.body.name).toBe('John');

    const listRes = await request(app.getHttpServer())
      .get('/users')
      .expect(200);
    expect(listRes.body.length).toBeGreaterThan(0);
  });
});
