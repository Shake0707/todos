import { FC, useContext } from 'react'
import { Frame } from './style'
import ListItem from './Item/ListItem'
import Filters from './Filters/Filters'
import { DataContext } from '../../contexts/DataContext'
import { log } from 'console'

const List: FC = () => {
    const data = useContext(DataContext);
    console.log(data);
    
    return (
        <Frame>
            {data?.isLoading ? (<h1>
                Loading...
            </h1>) :
                data?.data?.data.map(item => (
                    <ListItem
                        todo={item}
                        key={item._id}
                        refetch={data.refetch} />
                ))
            }
            <Filters items={data?.data?.data.length} />
        </Frame>
    )
}

export default List;