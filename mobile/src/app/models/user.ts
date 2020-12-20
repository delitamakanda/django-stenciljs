import { Gender } from "./gender";

export class User {
    id: number;
    username: string;
    displayName: string;
    uri: string;
    token?: string;
    expires?: string;
    email?: string;
    gender?: Gender;
    is_active?: boolean;
    is_staff?: boolean;
    popularity?: number;
    constructor() { }
}
