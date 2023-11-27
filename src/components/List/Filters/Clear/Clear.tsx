import { FC, MouseEventHandler, useContext } from 'react'
import { Text } from './style'
import { useMutation } from '@tanstack/react-query'
import TodoService from '../../../../services/Todo.service'
import { DataContext } from '../../../../contexts/DataContext'

const Clear: FC = () => {
    const data = useContext(DataContext);

    const { mutate } = useMutation({
        mutationKey: ['delete todos'],
        mutationFn: () => TodoService.deleteComplated(),
        onSuccess: () => data?.refetch()
    });

    const handleClick: MouseEventHandler<HTMLSpanElement> = () => {
        mutate();
    }
    return (
        <Text onClick={handleClick}>Clear Completed</Text>
    )
}

export default Clear