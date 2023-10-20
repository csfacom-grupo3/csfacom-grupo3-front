export class Auth {
    constructor(email: string | null, token: string | null){
        this.email = email;
        this.token = token;
    }

    email : string | null;
    token: string | null;
}