import {Response, Request} from 'express'
import jwt from 'jsonwebtoken';
import accessToken from '../accesstoken';

// eslint-disable-next-line @typescript-eslint/ban-types
const authenticateJWT = (req: Request, res:Response, next: Function) => {
   const authHeader = req.headers.authorization;

   if (authHeader) {
       const token = authHeader.split(' ')[1];

       jwt.verify(token, accessToken, (err) => {
           if (err) {
               return res.sendStatus(403);
           }
           return next();
       });
   } else {
       res.sendStatus(401);
   }
};

export {authenticateJWT};
