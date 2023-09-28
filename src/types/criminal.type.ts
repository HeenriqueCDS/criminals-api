export type Criminal = {
    identifier: string
    name: string;       
    agency: "FBI" | "Interpol";
    forename?: string;
    birthdate?: string;  
    image?: string;
}