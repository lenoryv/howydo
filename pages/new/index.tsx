import Card from "@components/Card/Card";
import Layout from "@components/Layout/Layout";

const { Client } = require('@notionhq/client');

// Initializing a client

function New({ howydos }) {

    return (
        <Layout>
            <div className="m-6 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 row-star-3 row-end-4">
                <Card
                    howydos={howydos}
                />
            </div>
        </Layout>);
}

export async function getStaticProps() {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const databaseId = process.env.NOTION_DATABASE_ID;
    try {
        const response = await notion.databases.query({
            database_id: databaseId,
            filter: {
                property: 'Tags',
                multi_select: {
                    contains: 'new'
                }
            },
        });
        console.log('Index New: ', response);
        return {
            props: {
                howydos: response.results,
            },
            revalidate: 1,
        };

    } catch (error) {
        console.log('Error al obtener params by tags')
    }
}

export default New;