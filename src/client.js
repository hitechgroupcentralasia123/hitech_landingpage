import client from '@sanity/client';

export default client({
    projectId: 'ctrmv7z8', // Ваш project ID
    dataset: 'production', // Ваш dataset
    useCdn: true,
});

