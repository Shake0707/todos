import { FC, MouseEventHandler } from 'react';
import { Frame } from './style';

interface IProps {
    complated: boolean;
    handleClick?: MouseEventHandler<HTMLDivElement>;
}

const Complate: FC<IProps> = ({ complated, handleClick }) => {
    return (
        <Frame onClick={handleClick}
            className={complated ? 'active' : ''}
        >
            <div></div>
        </Frame>
    );
}

export default Complate;