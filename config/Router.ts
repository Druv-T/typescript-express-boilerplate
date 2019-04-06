import * as express from "express";
import jwt from "express-jwt";
import { TokenRouter, SampleRouter } from "../app/routes";
import { config } from "../config";

interface IROUTER {
    path: string;
    middleware: any[];
    handler: express.Router;
}

const Token = new TokenRouter();
const Sample = new SampleRouter();

export const ROUTER: IROUTER[] = [{
    handler: Token.tokenRouter,
    middleware: [],
    path: "/auth",
}, {
    handler: Sample.sampleRouter,
    middleware: [
        jwt({secret: config.ACCESS_SECRET}),
    ],
    path: "/sample",
}];