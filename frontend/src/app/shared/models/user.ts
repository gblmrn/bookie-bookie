export interface User {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    avatarUrl: string;
    phone: string;
    favoriteBooks: string[];
    purchasedBooks: string[];
    createdOn?: Date;
    updatedAt?: Date;
    isActive: boolean;
    role: Role;
}

export enum Role {
    USER = 'USER',
    ADMIN = 'ADMIN'
}


