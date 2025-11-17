export class UserPassword {
    value: string;

    constructor(value: string) {
        this.value = value;
        this.isValid();
    }

    private isValid() {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9\s]).{8,}$/;

        if (!regex.test(this.value)) {
            throw new Error('Invalid password format');
        }
    }

}