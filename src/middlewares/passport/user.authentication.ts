import { NextFunction, Request, Response } from "express";

export function userAuthentication(req:Request, res:Response, next:NextFunction){
    if(req.isAuthenticated()){
        return next()
    }
    res.status(401).send("You need to be logged in")
}