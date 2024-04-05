import { Response, Request, NextFunction } from "express"


export default (fn: Function)=>{
    return async(req: Request, res: Response, next: NextFunction)=>{
        try{
            return await fn(req, res, next)
        }catch(err){
            console.log(err)
            return res.status(500).json({message: "internal server error"})
        }
    }
}