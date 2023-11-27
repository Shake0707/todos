import { createContext } from "react";
import { ITodo } from "../../types";
import { UseQueryResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const DataContext = createContext<UseQueryResult<AxiosResponse<ITodo[], any>, Error> | undefined>(undefined);