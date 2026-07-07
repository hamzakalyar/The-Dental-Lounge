import 'dotenv/config';
import { createApp } from './app.js';
import { env } from './config/env.js';

const app = createApp();

app.listen(env.PORT, () => {
  console.log(`🦷 Aesthetic Dental Clinic API running on port ${env.PORT}`);
  console.log(`📍 Environment: ${env.NODE_ENV}`);
  console.log(`🔗 Health check: http://localhost:${env.PORT}/health`);
});
