import { createApi, Language } from 'unsplash-js';

const lang = navigator.language as Language;

const unsplash = createApi({
    accessKey: 'YwaEBtH0jvfxVv0pmEZWXad8wr5kyBzbapylwPcS9Og',
});
export const getImage = async (query: string): Promise<string | undefined> => {
    const min = 1;
    const max = 10;
    const num = Math.floor(min + Math.random() * (max + 1 - min));

    return unsplash.search
        .getPhotos({
            query: query,
            orientation: 'portrait',
            lang: lang,
        })
        .then((images) => {
            if (images.status === 200 && images.response) {
                return images.response.results[num].links.download;
            }
        });
};
