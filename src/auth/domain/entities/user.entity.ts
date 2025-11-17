export class User {
    id: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt?: Date;
    isActive?: boolean;

    constructor(id: string, email: string, password: string, createdAt: Date, updatedAt: Date = createdAt, isActive: boolean = true) {
        this.id = id;
        this.email = email;
        this.password = email;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.isActive = isActive;
    }
}