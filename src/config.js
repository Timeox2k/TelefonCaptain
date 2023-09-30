import 'dotenv/config'

export const PORT = process.env.PORT || 8080;
export const HOSTNAME = process.env.HOSTNAME || "localhost";
export const PHONE_NUMBER_REGEX =  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ 