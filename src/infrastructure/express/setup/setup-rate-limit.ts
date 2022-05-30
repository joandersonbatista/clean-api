import rateLimit from 'express-rate-limit';

export const rateLimiter = rateLimit({
  windowMs: 3000, // 3 seconds
  max: 100,
  headers: false,
});
