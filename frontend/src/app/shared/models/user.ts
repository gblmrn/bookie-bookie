export interface User {
    id: string;
    username: string;
    fullName: string;
    email: string;
    password?: string;
    salt?: string;
    avatarUrl: string;
    favoriteBooks?: string[];
    purchasedBooks?: string[];
    createdOn?: Date;
    lastUpdateOn?: Date;
    isActive: boolean;
}