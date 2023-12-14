import { FC } from 'react';
import { Btn_del, Frame, InFrame, Text } from './style';
import Complate from '../../Complate/Complate';
import Line from '../Line/Line';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import { ITodo } from '../../../../types';
import { AxiosResponse } from 'axios';
import useLogickItem from '../../../hooks/useLocgikItem';

interface IProps {
    todo: ITodo;
    refetch: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<AxiosResponse<ITodo[], any>, Error>>
}

const ListItem: FC<IProps> = ({ todo, refetch }) => {
    const { isComlated, handleClick, handleChange } = useLogickItem({ todo, refetch });

    return (
        <>
            <Frame>
                <InFrame>
                    <Complate complated={isComlated} />
                    <Text className={isComlated ? 'active' : ''}>
                        <span></span>
                        {todo.text}
                    </Text>
                    <Btn_del id='del' onClick={handleClick} />
                </InFrame>
                <input type="checkbox" onChange={handleChange} checked={isComlated} />
            </Frame>
            <Line />
        </>
    );
}

export default ListItem