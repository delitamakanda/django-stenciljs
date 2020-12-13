export class AuthLogin {
    username: string;
    password: string;

    constructor(usn: string, pwd: string) {
        this.username = usn;
        this.password  = pwd;
    }
}

export class AuthRegister {
    username: string;
    email: string;
    password: string;
    password2: string;
    gender: string;

    constructor(
        usn: string,
        eml: string,
        pwd: string,
        pwdConfirm: string,
        gendr: string
    ) {
        this.username = usn;
        this.email = eml;
        this.password  = pwd;
        this.password2  = pwdConfirm;
        this.gender = gendr;
    }
}
