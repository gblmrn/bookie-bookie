export interface Book {
    id: string;
    title: string;
    author: string;
    coverImage: string;
    price: number;
    specialPrice?: number;
    tags?: string[];
    category: Category;
    ratingScore?: number;
    totalRating?: number;
}

export enum Category {
    Action = 'Action',
    Adventure = 'Adventure',
    Classics = 'Classics',
    ComicBook = 'Comic Book',
    Novel = 'Novel',
    Mystery = 'Mistery',
    Fantasy = 'Fantasy',
    Horror = 'Horror'
}