import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: 'your-project-id',
    dataset: 'your-dataset',
    useCdn: true,
});

const getAllNews = async () => {
    const query = '*[_type == "news"]';
    const news = await client.fetch(query);
    return news;
};

const getNewsById = async (id) => {
    const query = `*[_type == "news" && _id == $id][0]`;
    const news = await client.fetch(query, { id });
    return news;
};

export default {
    getAllNews,
    getNewsById,
};
