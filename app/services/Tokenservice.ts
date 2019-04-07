import JWT from "jsonwebtoken";

export class TokenService {

    public signToken(params: object, key: string, options?: any): string {
        return JWT.sign(params, key, options);
    }
}