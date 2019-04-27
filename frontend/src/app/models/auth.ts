export class AuthLogin {
    username: string;
    password: string;

    constructor(usn: string, pwd: string) {
        this.username = usn;
        this.password  = pwd;
    }
}
