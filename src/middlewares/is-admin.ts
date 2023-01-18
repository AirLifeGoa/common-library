import { Request, Response, NextFunction } from 'express';
import { AuthorisationError } from '../errors/authorisation-error';

// !! To be used once currentUser middleware is used
export const isAdmin = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    if (!req.currentUser?.roles.admin) {
        throw new AuthorisationError('Not authorised');
    }

    next();
};
