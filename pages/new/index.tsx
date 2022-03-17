import Card from "@components/Card/Card";
import Layout from "@components/Layout/Layout";
import StylePage from "@components/StylePage/StylePage";

const { Client } = require('@notionhq/client');

// Initializing a client

function New({props}) {

    return (
        <Layout>
            <StylePage>
                <Card 
                    howydos={props.howydos}
                />
            </StylePage>
        </Layout>);
}

New.getInitialProps = async () => {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
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
        console.log('Res: ', response.results);
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

export default New;