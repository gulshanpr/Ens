import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from './prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { domain } = req.query;

  if (typeof domain !== 'string') {
    return res.status(400).json({ error: 'Invalid domain parameter' });
  }

  const isExists = await prisma.domains.findMany({
    where: {
      domain: domain,
    },
  });

  res.status(200).json({ exists: isExists.length > 0 });
}
