import { useQuery } from "@tanstack/react-query"
import TodoService from "../services/Todo.service"

export const useTodos = (filter: string) => {
    const filterKey = filter;
    return useQuery({
        queryKey: ['todos ' + filterKey],
        queryFn: () => {
            if (filter) {
                return TodoService.getAllWithFilter(filter);
            } else {
                return TodoService.getAll();
            }
        }
    });
}