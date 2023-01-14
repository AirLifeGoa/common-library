import { CustomError } from './custom-error';

export class AuthorisationError extends CustomError {
  statusCode = 401;

  constructor (public message: string) {
    super('Authorisation Error');

    // Only because we are extending a built-in class
    Object.setPrototypeOf(this, AuthorisationError.prototype);
  }

  serializeErrors () {
    return [{ message: this.message }];
  }
}
