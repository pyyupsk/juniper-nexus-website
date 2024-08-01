export {};

declare global {
    // eslint-disable-next-line no-unused-vars
    interface CustomJwtSessionClaims {
        metadata: {
            role?: 'admin';
        };
    }
}
