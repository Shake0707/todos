import { Dispatch, FC, SetStateAction } from 'react'
import { Input } from './style'

interface IProps {
    val: string;
    setInpVal: Dispatch<SetStateAction<string>>
}

const Inp: FC<IProps> = ({ setInpVal, val }) => {
    return (
        <Input maxLength={30} type="text" placeholder='Create a new todo…' onChange={(e) => setInpVal(e.target.value)} value={val}/>
    )
}

export default Inp;