import { Role } from './role';

export interface User
{
    id: number;
    fullname: string;
    email: string;
    username: string;
    password: string;
    roles: Role[];
}