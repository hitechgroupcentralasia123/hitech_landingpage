import client from '@sanity/client';

export default client({
    projectId: 'o59ea1u0', // Ваш project ID
    dataset: 'production', // Ваш dataset
    useCdn: true,
});

