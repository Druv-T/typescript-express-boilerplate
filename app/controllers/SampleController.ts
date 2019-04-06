import { Request, Response } from "express";

export class SampleController{

    public index(req: Request, res: Response): Response {
        return res.send("Accessed");
    }
}