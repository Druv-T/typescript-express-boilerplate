import { Request, Response } from "express";
import { TokenService } from "../services";

export class TokenController{

    private jwtService: TokenService

    constructor() {
        this.jwtService = new TokenService()
    }

    public index(req: Request, res: Response): Response {
        const { payload } = req.body
        const token = this.jwtService.signToken(payload)
        return res.send(token)
    }
}