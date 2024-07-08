import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: 'ctrmv7z8', // Ваш project ID
    dataset: 'production',
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
