export type IGifsData = {
    data: Array<IElementData>;
    pagination: IPagination;
};

export type IElementData = {
    title: string;
    id: string;
    images: IImages;
};

export type IImages = {
    downsized: {
        url: string;
    };
};

export type IPagination = {
    count: number;
    offset: number;
};
