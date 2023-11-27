import { FC, FormEventHandler, MouseEventHandler, useContext, useState } from 'react'
import { Frame } from './style'
import Complate from '../Complate/Complate'
import Inp from './Input/Inp'
import { ITodo } from '../../../types';
import TodoService from '../../services/Todo.service';
import { useMutation } from '@tanstack/react-query';
import { DataContext } from '../../contexts/DataContext';

const CreateInp: FC = () => {
    const data = useContext(DataContext);
    const [isCompate, setComplate] = useState<boolean>(false);
    const [inpVal, setInpVal] = useState<string>('');

    const { mutate } = useMutation({
        mutationKey: ['create todo'],
        mutationFn: (title: ITodo) => TodoService.create(title),
        onSuccess: () => {
            setInpVal('');
            data?.refetch();
            setComplate(false)
        }
    });

    const handleClick: MouseEventHandler<HTMLDivElement> = () => {
        setComplate(prev => !prev);
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault();
        const todo: ITodo = {
            complated: isCompate,
            text: inpVal,
            order: data?.data?.data?.length !== 0 && data?.data?.data ? data?.data?.data[data?.data?.data?.length - 1].order + 1 : 1
        }
        mutate(todo);
    }

    return (
        <Frame onSubmit={handleSubmit}>
            <Complate complated={isCompate} handleClick={handleClick} />
            <Inp setInpVal={setInpVal} val={inpVal} />
            <input type="checkbox" defaultChecked={isCompate} />
        </Frame>
    );
}

export default CreateInp;