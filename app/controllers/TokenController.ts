import { Request, Response } from "express"
import { TokenService } from "../services"
import { config } from "../../config"
import jwt from "jsonwebtoken"

interface Payload {
    username?: string
    id?: string
}

export class TokenController{

    private jwtService: TokenService

    constructor() {
        this.jwtService = new TokenService()
    }

    public login(req: Request, res: Response): Response {
        return res.json(this.getTokens(req.body))
    }

    public getTokens(params: Payload): Object {
        const access_token = this.jwtService.signToken(params, config.ACCESS_SECRET, config.ACCESS_SIGN_OPTIONS)
        const refresh_token = this.jwtService.signToken(params, config.REFRESH_SECRET, config.REFRESH_SIGN_OPTIONS)
        return {
            access_token: access_token,
            refresh_token: refresh_token
        }
    }

    public refreshTokens(req: Request, res: Response): Response {
        const { access_token, refresh_token } = req.body
        jwt.verify(
            access_token,
            config.ACCESS_SECRET,
            config.ACCESS_VERIFY_OPTIONS,
            (accessErr) => {
                if (accessErr && accessErr.name != 'TokenExpiredError'){
                    return res.json({
                        error: accessErr.message
                    })
                }
            
            }
        )
        jwt.verify(
            refresh_token,
            config.REFRESH_SECRET,
            config.REFRESH_VERIFY_OPTIONS,
            (refreshErr, decoded) => {
                if (refreshErr) {
                    return res.json({
                        error: refreshErr.message
                    })
                }

                const username = (decoded as Payload).username
                const id = (decoded as Payload).id

                res.json(this.getTokens({username, id}))
            }
        )
        return res.status(500).send("Something went wrong")
    }
}