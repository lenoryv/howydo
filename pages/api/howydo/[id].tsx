const { Client } = require('@notionhq/client');

function Details({ howydo }) {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <h2>Titulo: {howydo.properties.Name.title[0].plain_text}</h2>
            <p>User ID:</p>
        </div>
    )
}
export default Details;

export async function getStaticPaths() {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const databaseId = process.env.NOTION_DATABASE_ID;
    try {
        const response = await notion.databases.query({ database_id: databaseId });
        const paths = response.results.map(data => {
            return {
                params: { id: data.properties.Page.relation[0].id }
            }
        })
        console.log('Paths: ', paths);
        return {
            paths,
            fallback: true // false or 'blocking'
        };
    } catch (error) {
        console.error('Error al Obtener Path');
    }

}

export async function getStaticProps(context) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const pageId = context.params.id;
    console.log('pageId: ', pageId);
    try {
        const response = await notion.pages.retrieve({ page_id: pageId });
        // Pass post data to the page via props
        return {
            props: {
                howydo: response
            },
            revalidate: 1,
        };
    } catch (error) {
        console.log('Error al obtener page Howydo')
        return {
            props: {}, // will be passed to the page component as props
        }
    }

}