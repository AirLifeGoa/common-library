import { Request, Response, NextFunction } from 'express';
import { AuthorisationError } from '../errors/authorisation-error';

// !! To be used once currentUser middleware is used
export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req.currentUser) {
    throw new AuthorisationError('Not authorised');
  }

  next();
};
