// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { hardcodeUsers } from './users'

type Data = {
  id: number
  name: string
  title: string
}

// to keep users on
export const currentUsers = hardcodeUsers;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  switch(req.method) {
    case 'GET':
      break;
    case 'POST':
        const newUser = req.body as Data;
        currentUsers.push(newUser);
      break;
  }  
  res.status(200).json(currentUsers.filter(n => n));
}