import Card from "@components/Card/Card";
import Layout from "@components/Layout/Layout";
import StylePage from "@components/StylePage/StylePage";
import { useApp } from '@components/Hooks/Hooks';
import { useState } from "react";

const { Client } = require('@notionhq/client');

// Initializing a client

function New({howydos}) {

    const { tag, setTag} = useApp();
    return (
        <Layout
        >
            <StylePage>
                <Card 
                    howydos={howydos}
                />
            </StylePage>
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