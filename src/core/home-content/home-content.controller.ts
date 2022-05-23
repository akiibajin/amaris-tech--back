import { Request, Response } from "express";
import { addHomeTopService, getTopHomeService } from "./home-content.service";

export async function getAllHomeTopContent(req: Request, res: Response) {
  try {
      const user = req.user
    const homeTopContent = await getTopHomeService(user);
    res.json(homeTopContent);
  } catch (error) { 
    res.status(400).send(`an error has been appeared: ${error}`);
  }
}

export async function postHomeTopContent(req: Request, res: Response) {
  try {
    const { homeTopContent } = req.body;
    const user = req.user
    await addHomeTopService(homeTopContent, user);
    res.json({ message: "Success" });
  } catch (error) {
    res.status(400).send(error);
  }
}
