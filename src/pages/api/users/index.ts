import { NextApiRequest, NextApiResponse } from 'next';

interface IResponseData {
  users: unknown[];
}

export const users = [
  { id: '105', userId: 'phongbd', name: 'Phong Bo Do' },
  { id: '101', userId: 'alicebd', name: 'Alice' },
  { id: '102', userId: 'bobbd', name: 'Bob' },
  { id: '103', userId: 'carolinebd', name: 'Caroline' },
  { id: '104', userId: 'davebd', name: 'Dave' },
];

/**
 * ts-prune-ignore-next
 */
export default (req: NextApiRequest, res: NextApiResponse<unknown[] | unknown>): void => {
  

  if(Object.keys(req.query).length > 0) {
    const user = users.find(item => item.userId === req.query.id);
    res.status(200).json(user)
  } else {

    
    res.status(200).json( users );
  }
};

