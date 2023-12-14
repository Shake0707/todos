import { Dispatch, FC, FormEventHandler, SetStateAction, useContext } from 'react';
import { Frame, Item } from './style';
import { DataContext } from '../../../../contexts/DataContext';
import { FilterContext } from '../../../../contexts/FilterContext';

interface IProps {
    id: string;
}

const FilterComponent: FC<IProps> = ({ id }) => {
    const setFilter = useContext(FilterContext) as Dispatch<SetStateAction<string | undefined>>;
    let filter: string = '';
    const data = useContext(DataContext);

    const changeHandler: FormEventHandler<HTMLFormElement> = e => {
        filter = (e.target as HTMLInputElement).id;
        setFilter(filter);
        data?.refetch();
    }

    return (
        <Frame onChange={changeHandler} id={id}>
            <Item>
                <input type="radio" id='' name='filter' defaultChecked />
                <span>All</span>
            </Item>
            <Item>
                <input type="radio" id='?complated=false' name='filter' />
                <span>Active</span>
            </Item>
            <Item>
                <input type="radio" id='?complated=true' name='filter' />
                <span>Completed</span>
            </Item>
        </Frame>
    )
}

export default FilterComponent;