const { Client } = require('@notionhq/client');

// Initializing a client
const notion = new Client({ auth: process.env.NOTION_API_KEY });

import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const pageId = 'f69753cd-4ce3-4c6d-906c-bcaab07ef8c1';
  const response = await notion.pages.retrieve({ page_id: pageId });
  res.status(200).json({ response });
}
