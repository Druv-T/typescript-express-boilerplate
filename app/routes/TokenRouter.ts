import express from "express";
import { TokenController } from "../controllers/TokenController";

export class TokenRouter{
    public tokenRouter: express.Router;
    public tokenController: TokenController;

    constructor() {
        this.tokenRouter = express.Router();
        this.tokenController = new TokenController();
        this.initialize();
    }

    private initialize(): void{
        this.tokenRouter.post("/", this.tokenController.index.bind(this.tokenController));
    }
}