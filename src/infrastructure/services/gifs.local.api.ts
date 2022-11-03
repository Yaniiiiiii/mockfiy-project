import { IElementData } from '../models/data';

export const getLocalData = async () => {
    const url = 'http://localhost:3500/data';
    const result = await fetch(url).then((response) => {
        return response.json();
    });
    return result;
};

export const createLocalData = async (newGif: IElementData) => {
    const url = 'http://localhost:3500/data';
    const result = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(newGif),
        headers: {
            'content-type': 'application/json',
        },
    }).then((response) => response.json());

    return result;
};

export const deleteLocalData = async (id: number) => {
    const url = `http://localhost:3500/data/${id}`;
    const result = await fetch(url, {
        method: 'DELETE',
    });

    return result;
};

export const updateLocalData = async (
    id: number,
    partialGifData: IElementData
) => {
    const url = `http://localhost:3500/data/${id}`;
    const result = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(partialGifData),
        headers: {
            'content-type': 'application/json',
        },
    }).then((response) => response.json());
    return result;
};
