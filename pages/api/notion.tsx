const { Client } = require('@notionhq/client');

// Initializing a client
const notion = new Client({ auth: process.env.NOTION_API_KEY });

import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await notion.databases.retrieve({ database_id: process.env.NOTION_DATABASE_ID });
  console.log(response);
  res.status(200).json({ response });
}
