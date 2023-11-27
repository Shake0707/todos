import { ChangeEventHandler, FC, MouseEventHandler, useState } from 'react';
import { Btn_del, Frame, InFrame, Text } from './style';
import Complate from '../../Complate/Complate';
import Line from '../Line/Line';
import { QueryObserverResult, RefetchOptions, useMutation } from '@tanstack/react-query';
import TodoService from '../../../services/Todo.service';
import { ITodo } from '../../../../types';
import { AxiosResponse } from 'axios';

interface IProps {
    todo: ITodo;
    refetch: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<AxiosResponse<ITodo[], any>, Error>>
}

const ListItem: FC<IProps> = ({ todo, refetch }) => {
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

    return (
        <>
            <Frame>
                <InFrame>
                    <Complate complated={isComlated} />
                    <Text className={isComlated ? 'active' : ''}>
                        <div></div>
                        {todo.text}
                    </Text>
                    <Btn_del id='del' onClick={handleClick} />
                </InFrame>
                <input type="checkbox" onChange={handleChange} checked={isComlated} />
            </Frame>
            <Line />
        </>

    )
}

export default ListItem