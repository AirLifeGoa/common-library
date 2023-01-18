import { NextFunction, Request, Response } from 'express';
import {AuthorisationError} from "../errors/authorisation-error";

// !! To be used once currentUser middleware is used
// !! And require-auth middleware is used to verify that the user is logged in
export const hasRole = {
    admin: (req: Request, res: Response, next: NextFunction) => {
        if (!req.currentUser?.roles.admin) {
            throw new AuthorisationError('Not authorised');
        }
        next();
    },

    user: (req: Request, res: Response, next: NextFunction) => {
        if (!req.currentUser?.roles.user) {
            throw new AuthorisationError('Not authorised');
        }
        next();
    },
    manager: (req: Request, res: Response, next: NextFunction) => {
        if (!req.currentUser?.roles.manager) {
            throw new AuthorisationError('Not authorised');
        }
        next();
    },
    "dp-manager": (req: Request, res: Response, next: NextFunction) => {
        if (!req.currentUser?.roles["dp-manager"]) {
            throw new AuthorisationError('Not authorised');
        }
        next();
    },
    "data-analyst" : (req: Request, res: Response, next: NextFunction) => {
        if (!req.currentUser?.roles["data-analyst"]) {
            throw new AuthorisationError('Not authorised');
        }
        next();
    },

}
