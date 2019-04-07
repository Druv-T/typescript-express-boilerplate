// import { env } from "process";

export const config = {
    PORT_APP: 8080,
    ACCESS_SECRET: "random shyte for access token",
    ACCESS_SIGN_OPTIONS: {
        expiresIn: 900,
    },
    ACCESS_VERIFY_OPTIONS: {},
    REFRESH_SECRET: "random shyte for refresh token",
    REFRESH_SIGN_OPTIONS: {
        expiresIn: "2 days"
    },
    REFRESH_VERIFY_OPTIONS: {},
};