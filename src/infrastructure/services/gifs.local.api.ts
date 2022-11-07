import { IElementData } from '../models/data';

export const getLocalData = async (): Promise<Array<IElementData>> => {
    const url =
        'https://mockify-202210-madserver-production.up.railway.app/data';
    const result = await fetch(url)
        .then((response) => {
            if (response.ok) return response.json();
            const message = `Error ${response.status}: ${response.statusText}`;
            const error = new Error(message);
            error.name = 'HTTPError';
            throw error;
        })
        .catch(() => {
            // Aqui se cambia el estado de has error a true
            // Por ejemplo
        });
    return result;
};

export const createLocalData = async (
    newGif: IElementData
): Promise<IElementData> => {
    const url =
        'https://mockify-202210-madserver-production.up.railway.app/data';
    const result = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(newGif),
        headers: {
            'content-type': 'application/json',
        },
    }).then((response) => {
        if (response.ok) return response.json();
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        throw error;
    });
    return result;
};

export const deleteLocalData = async (id: string) => {
    const url = `https://mockify-202210-madserver-production.up.railway.app/data/${id}`;
    const result = await fetch(url, {
        method: 'DELETE',
    }).then((response) => {
        if (response.ok) return response.json();
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        throw error;
    });
    return result;
};

export const updateLocalData = async (
    id: string,
    partialGifData: IElementData
) => {
    const url = `https://mockify-202210-madserver-production.up.railway.app/data/${id}`;
    const result = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(partialGifData),
        headers: {
            'content-type': 'application/json',
        },
    }).then((response) => {
        if (response.ok) return response.json();
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        throw error;
    });
    return result;
};
