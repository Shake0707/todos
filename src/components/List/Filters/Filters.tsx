import { FC } from 'react'
import { Frame, ItemsCount } from './style';
import FilterComponent from './Filter/FilterComponent';
import Clear from './Clear/Clear';

interface IProps {
    items: number | undefined;
}

const Filters: FC<IProps> = ({ items }) => {
    return (
        <Frame>
            <ItemsCount>{items} items left</ItemsCount>
            <FilterComponent id='desktop-filter'/>
            <Clear />
        </Frame>
    )
}

export default Filters