// Test environment setup
process.env.NODE_ENV = 'test';
process.env.DATABASE_URL = 'file:./test.db';
process.env.PORT = '5001';
process.env.CORS_ORIGIN = 'http://localhost:3000';
