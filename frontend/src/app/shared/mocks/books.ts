import { Book, Category } from "../models/book";

export const BOOKS: Book[] = [
    {
        id: '2a5a8b18-bcce-4b2e-b5a1-73d6de15cae5',
        title: 'Piratele din caraibe',
        author: 'Jan claude vandm',
        category: Category.Action,
        coverImage: 'https://static-cse.canva.com/blob/142533/Red-and-Beige-Cute-Illustration-Young-Adult-Book-Cover.jpg',
        price: 56,
        specialPrice: 32,
        ratingScore: 4.5,
        tags: [Category.Action, Category.Adventure],
        totalRating: 200
    },
    {
        id: 'a1567c1f-5953-44e0-9961-732f373a9a7b',
        title: 'Misterele din Oz',
        author: 'Alin Lopata',
        category: Category.Action,
        coverImage: 'https://s3.gomedia.us/wp-content/uploads/2018/02/3.png',
        price: 56,
        specialPrice: 32,
        ratingScore: 4.5,
        tags: [Category.Action, Category.Adventure],
        totalRating: 200
    },
    {
        id: '7dc8ebb5-422b-4236-8e97-80a476a7c04d',
        title: 'Ali baba si ceilalti',
        author: 'Gica Hagi',
        category: Category.Action,
        coverImage: 'https://static-cse.canva.com/blob/142533/Red-and-Beige-Cute-Illustration-Young-Adult-Book-Cover.jpg',
        price: 66,
        specialPrice: 41,
        ratingScore: 3.7,
        tags: [Category.Action, Category.Adventure],
        totalRating: 200
    },
    {
        id: '46a54089-c359-4c27-a9d0-0472b2550906',
        title: 'Boxe negre vechi de 2 anisori',
        author: 'Don Chihote',
        category: Category.Horror,
        coverImage: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105',
        price: 77,
        ratingScore: 2.5,
        tags: [Category.Action, Category.Adventure],
        totalRating: 200
    },
    {
        id: '5d65262e-5c0c-4481-a1c5-e6d4d61fc5ea',
        title: `Cioara albastra cu ciocu' de aur`,
        author: 'Necunoscut',
        category: Category.ComicBook,
        coverImage: 'https://images1.penguinrandomhouse.com/cover/9780399179532',
        price: 126,
        specialPrice: 72,
        ratingScore: 5,
        tags: [Category.Action, Category.Adventure],
        totalRating: 200
    },
]