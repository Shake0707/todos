import { QueryObserverResult, RefetchOptions, useMutation } from "@tanstack/react-query";
import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import TodoService from "../services/Todo.service";
import { ITodo } from "../../types";
import { AxiosResponse } from "axios";

interface IProps {
    todo: ITodo;
    refetch: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<AxiosResponse<ITodo[], any>, Error>>
}

const useLogickItem = ({ todo, refetch }: IProps) => {
    const [isComlated, setIsComplated] = useState<boolean>(todo.complated);
    const { mutate: deleteItem } = useMutation({
        mutationKey: ['delete todo'],
        mutationFn: (id: number) => TodoService.delete(id),
        onSuccess: () => {
            refetch();
        }
    });

    const { mutate: toggle } = useMutation({
        mutationKey: ['toggle todo'],
        mutationFn: (todo: ITodo) => TodoService.toggleIsComlate(todo),
        onSuccess: () => {
            refetch();
        }
    });

    const handleChange: ChangeEventHandler<HTMLInputElement> = () => {
        setIsComplated(prev => !prev);
        toggle({
            ...todo,
            complated: !todo.complated
        });
    }

    const handleClick: MouseEventHandler<HTMLDivElement> = () => {
        deleteItem(todo._id as number);
    }

    return { isComlated, handleClick, handleChange }
}

export default useLogickItem;