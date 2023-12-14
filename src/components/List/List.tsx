import { FC, useContext } from 'react';
import { Frame, ItemsFrame } from './style';
import ListItem from './Item/ListItem';
import Filters from './Filters/Filters';
import { DataContext } from '../../contexts/DataContext';
import MobileFilter from './Filters/Filter/Mobile/MobileFilter';

const List: FC = () => {
    const data = useContext(DataContext);

    return (
        <Frame>
            <ItemsFrame>
                <div id='forowerflow'>
                    {data?.isLoading ? (<h1>
                        Loading...
                    </h1>) :
                        data?.data?.data.map(item => (
                            <ListItem
                                todo={item}
                                key={item._id}
                                refetch={data.refetch}
                            />
                        ))
                    }
                    <Filters items={data?.data?.data.length} />
                </div>
            </ItemsFrame>

            <MobileFilter />
        </Frame>
    )
}

export default List;