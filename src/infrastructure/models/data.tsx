export type IGif = {
    data: Array<IElementData>;
    pagination: IPagination;
};

export type IElementData = {
    title: string;
    images: IImages;
};

export type IImages = {
    original: {
        url: string;
    };
};

export type IPagination = {
    count: number;
    offset: number;
};
