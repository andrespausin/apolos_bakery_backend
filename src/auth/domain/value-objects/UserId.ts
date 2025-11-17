export class UserId {
    value: string;

    constructor(value: string) {
        this.value = value;
        this.isValid();
    }

    private isValid() {
        if (!this.value || this.value.trim().length === 0) {
            throw new Error('User ID cannot be empty');
        }
    }
}