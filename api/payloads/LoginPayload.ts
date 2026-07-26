export interface LoginPayload {
    email: string;
    password: string;
}

export const createLoginPayload = (
    email: string,
    password: string
): LoginPayload => ({
    email,
    password
});