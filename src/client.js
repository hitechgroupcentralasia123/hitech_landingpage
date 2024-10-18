import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: 'ctrmv7z8', // Ваш project ID
    dataset: 'production', // Ваш dataset
    useCdn: false, // false, чтобы получать последние данные
    token: 'skve69rpuuu5QRaXj34ore1RPLH8cclx6pTbRT2uFnT8lLjFEymyCWLAyHJEFK8xkUkER76s7px6E2IjUflWOTybMAGBwcNpS2bjp8oirH7Kxs0NI7QfkAym5Xd6nSeJhNWFMxaTBndhujlomiZ30th0Dq7vtpu2MsUiagGhQpqShaEtR5DY' // Ваш API токен
});

export default client;
