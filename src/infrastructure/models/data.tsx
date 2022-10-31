export type IGif = {
    data: Array<IData>;
    pagination: IPagination;
};

type IData = {
    id: string;
    images: IImages;
};

type IImages = {
    original: {
        url: string;
    };
};

type IPagination = {
    count: number;
    offset: number;
};
