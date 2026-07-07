import { validationResult, type ValidationChain } from 'express-validator';
import type { Request, Response, NextFunction } from 'express';
import { AppError } from './errorHandler.js';

export function validate(validations: ValidationChain[]) {
  return async (req: Request, _res: Response, next: NextFunction) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    // Extract errors for logging/debugging if needed
    errors.array().map((err) => ({
      field: err.type === 'field' ? err.path : 'unknown',
      message: err.msg,
    }));

    throw new AppError(400, 'Validation failed', true);
  };
}
