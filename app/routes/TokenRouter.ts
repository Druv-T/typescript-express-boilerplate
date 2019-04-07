import express from "express"
import { TokenController } from "../controllers/TokenController"

export class TokenRouter{
    public tokenRouter: express.Router
    public tokenController: TokenController

    constructor() {
        this.tokenRouter = express.Router()
        this.tokenController = new TokenController()
        this.initialize()
    }

    private initialize(): void{
        this.tokenRouter.post("/authenticate", TokenController.prototype.login.bind(this.tokenController))
        this.tokenRouter.post("/refresh", TokenController.prototype.refreshTokens.bind(this.tokenController))
    }
}