export interface RegisterDto {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    userArgent?: string;
}

export interface LoginDto {
    email: string;
    password: string;
    userArgent?: string;
}