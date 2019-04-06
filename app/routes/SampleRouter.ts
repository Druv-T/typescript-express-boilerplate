import express from "express";
import { SampleController } from "../controllers/SampleController";

export class SampleRouter{
    public sampleRouter: express.Router;
    public sampleController: SampleController;

    constructor() {
        this.sampleRouter = express.Router();
        this.sampleController = new SampleController();
        this.initialize();
    }

    private initialize(): void{
        this.sampleRouter.get("/", this.sampleController.index);
    }
}