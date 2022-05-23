import { Request, Response } from "express";

export default function logIn(req:Request, res:Response){
    try
    {
        const user = req.user
        res.json(user)
    }
    catch(error)
    {
        res.status(401).send(error)
    }
}