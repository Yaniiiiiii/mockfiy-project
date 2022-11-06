import { IGifsData, IGifsIdData } from '../models/data';

export const getDataTrending = async (
    offsetNum: number
): Promise<IGifsData> => {
    const url = 'https://api.giphy.com/v1/gifs/trending';
    const search = '?';
    const key = '&api_key=rIBXAUARqWUeHGOtglMKUSh4AZlxU5iZ';
    const limit = '&limit=50';
    const offset = `&offset=${offsetNum}`;
    const completeUrl = url + search + key + limit + offset;

    const result = await fetch(completeUrl).then((response) => {
        return response.json();
    });
    return result;
};

export const getSearchData = async (dataSearch: string): Promise<IGifsData> => {
    const url = 'https://api.giphy.com/v1/gifs/search';
    const search = `?q=${dataSearch}`;
    const key = '&api_key=rIBXAUARqWUeHGOtglMKUSh4AZlxU5iZ';
    const limit = '&limit=50';
    const completeUrl = url + search + key + limit;

    const result = await fetch(completeUrl).then((response) => {
        return response.json();
    });
    return result;
};

export const getGifById = async (id: string): Promise<IGifsIdData> => {
    const url = 'https://api.giphy.com/v1/gifs/';
    const search = `${id}`;
    const key = '?api_key=rIBXAUARqWUeHGOtglMKUSh4AZlxU5iZ';
    const completeUrl = url + search + key;

    const result = await fetch(completeUrl).then((response) => {
        return response.json();
    });
    return result;
};
