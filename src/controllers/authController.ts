import { Request, Response } from "express";

export const signup = (req: Request, res: Response) => {
    console.log(req.body);
    res.send("signup");
};

export const login = (req: Request, res: Response) => {
    console.log(req.body);
    res.send("login");
};
