import { IElementData } from '../models/data';

export const getLocalData = async (): Promise<Array<IElementData>> => {
    const url = 'http://localhost:3500/data';
    const result = await fetch(url).then((response) => {
        if (response.ok) return response.json();
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        throw error;
    });
    return result;
};

export const createLocalData = async (
    newGif: IElementData
): Promise<IElementData> => {
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

export const deleteLocalData = async (id: string) => {
    const url = `http://localhost:3500/data/${id}`;
    const result = await fetch(url, {
        method: 'DELETE',
    }).then((response) => response.json());

    return result;
};

export const updateLocalData = async (
    id: string,
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
