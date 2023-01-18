import { NextFunction, Request, Response } from 'express';
import {AuthorisationError} from "../errors/authorisation-error";

// !! To be used once currentUser middleware is used
// !! And require-auth middleware is used to verify that the user is logged in
export const hasRole = (role: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.currentUser?.roles[role]) {
        throw new AuthorisationError('Not authorised');
        }

        next();
    };
}
