import jwtDecode from "jwt-decode";
import { Role } from "types/role";

export type TokenData = {
    exp: number;
    user_name: string;
    authorities: Role[];
}

export const getTokenData = () : TokenData | undefined => {
    try {
        return jwtDecode(localStorage.getItem('authData') ?? '{}') as TokenData;
    } catch (error) {
        return undefined;
    }
}