import { FC } from 'react'
import { Frame } from './style'
import Complate from '../Complate/Complate'
import Inp from './Input/Inp'
import useCreateLogick from '../../hooks/useCreateLogick'

const CreateInp: FC = () => {
    const {handleClick, handleSubmit, setInpVal, inpVal, isCompate} = useCreateLogick();

    return (
        <Frame onSubmit={handleSubmit}>
            <Complate complated={isCompate} handleClick={handleClick} />
            <Inp setInpVal={setInpVal} val={inpVal} />
            <input type="checkbox" defaultChecked={isCompate} />
        </Frame>
    );
}

export default CreateInp;