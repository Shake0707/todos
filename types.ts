import { Dispatch, SetStateAction } from "react";

export interface IThemeContext {
    theme: ETheme;
    setTheme: Dispatch<SetStateAction<ETheme>>
}

export enum EApi {
    gloabal = 'https://todos-api.onrender.com'
}

export enum ETheme {
    dark = 'dark',
    ligth = 'white'
}

export interface ITodo {
    _id?: number;
    text: string;
    complated: boolean;
    order: number;
}

export enum ELocalStorageNames {
    todos = 'todos'
}

export enum ELocalKeys {
    theme = 'theme'
}