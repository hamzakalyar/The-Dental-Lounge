import express, { type Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { errorHandler } from './middleware/errorHandler.js';
import { rateLimiter } from './middleware/rateLimiter.js';
import routes from './routes/index.js';

export function createApp(): Express {
  const app = express();

  // Security middleware
  app.use(helmet());
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
      credentials: true,
    })
  );

  // Request parsing
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Logging
  if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev'));
  }

  // Rate limiting
  app.use(rateLimiter);

  // Health check
  app.get('/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // API routes
  app.use('/api', routes);

  // Error handling
  app.use(errorHandler);

  return app;
}
