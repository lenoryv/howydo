const { Client } = require('@notionhq/client');

// Initializing a client
const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default async function getHyds() {
    const databaseId = process.env.NOTION_DATABASE_ID;
    try {
        const response = await notion.databases.query({
            database_id: databaseId,
            filter: {
                property: 'Tags',
                multi_select: {
                    contains: 'tip'
                    
                }
            },
        });
        // console.log('Res: ', response.results);
        return {
            props: {
              howydos: response.results,
            },
            revalidate: 1,
          };
    } catch (error) {
        console.log('Error')
        
    }
}
