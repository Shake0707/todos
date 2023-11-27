import { Dispatch, SetStateAction, createContext } from "react";

export const FilterContext = createContext<Dispatch<SetStateAction<string | undefined>> | undefined>(undefined);