export type Book = {
    title: string;
    url: string;
    author_name: string;
    upload_date?: string;
    thumbnail_url: string;
    duration?: number;
    provider_name: string;
    width: number;
    height: number;
    add_date?: string;
};

export type Time = {
    seconds: number;
    minutes: number;
    hours: number;
};