// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { currentUsers } from '../../users/index'

type Data = {
  id: number
  name: string
  title: string
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data| Data[]>
) {
    const { slug } = req.query
    const index = parseInt(slug as string) - 1;
    switch(req.method) {
        case 'PUT':
          const u = req.body;
          currentUsers[index] = u;
        break;
        case 'PATCH':
          const field = req.body;
          currentUsers[index].title = field.title;
        break;
        case 'DELETE':
          delete currentUsers[index];
          res.status(200).json(currentUsers.filter(n => n));
        break;
    }
    res.status(200).json(currentUsers[index]);
  }

