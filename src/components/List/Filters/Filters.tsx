import { FC } from 'react'
import { Frame, ItemsCount } from './style';
import FIlter from './FIlter/FIlter';
import Clear from './Clear/Clear';

interface IProps {
    items: number | undefined;
}

const Filters: FC<IProps> = ({ items }) => {
    return (
        <Frame>
            <ItemsCount>{items} items left</ItemsCount>
            <FIlter />
            <Clear />
        </Frame>
    )
}

export default Filters