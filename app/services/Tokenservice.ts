import * as JWT from "jsonwebtoken";
import { config } from "../../config";

export class TokenService {

    public signToken(params: { name: string, role: string }, options?: any): string {
        console.log("yo");
        return JWT.sign(params, config.ACCESS_SECRET, options || undefined);
    }

}