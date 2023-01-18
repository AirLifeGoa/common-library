import { NextFunction, Request, Response } from 'express';
import {AuthorisationError} from "../errors/authorisation-error";

// !! To be used once currentUser middleware is used
// !! And require-auth middleware is used to verify that the user is logged in

export const hasRole : any = (role: string) => {
    return hasRole[role] || (hasRole[role] = function (req: Request, res: Response, next: NextFunction) {
        if (!req.currentUser?.roles[role]) {
            return next(new AuthorisationError(`User is not a ${role}`));
        }
        next();
    })
}


