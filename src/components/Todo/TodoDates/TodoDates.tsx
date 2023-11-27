import { FC, useState } from 'react';
import CreateInp from '../../Create/Create';
import List from '../../List/List';
import { useTodos } from '../../../hooks/useGetAllTodos';
import { DataContext } from '../../../contexts/DataContext';
import { FilterContext } from '../../../contexts/FilterContext';

const TodoDates: FC = () => {
    const [filter, setFilter] = useState<string | undefined>('');
    const query = useTodos(filter as string);

    return (
        <FilterContext.Provider value={setFilter}>
            <DataContext.Provider value={query}>
                <CreateInp />
                <List />
            </DataContext.Provider>
        </FilterContext.Provider>
    );
}

export default TodoDates