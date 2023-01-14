import { Request, Response, NextFunction } from 'express';
import { AuthorisationError } from '../errors/authorisation-error';

// ! not to be used before using currentUser middleware
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
