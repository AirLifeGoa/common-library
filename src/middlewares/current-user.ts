import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
  id: string;
  email: string;
  roles: { [key: string]: boolean };
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req.session?.jwt) {
    return next();
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    req.currentUser = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as UserPayload;
    console.log(req.currentUser);
  } catch (err) {
    // do nothing
    console.log(err);
  }

  next();
};
