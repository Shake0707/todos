import { FC } from 'react';
import { Frame } from './style';
import LazyBackgroundImg from './LazyBackgroundImg/LazyBackgroundImg';

const Header: FC = () => {
    return (
        <>
            <Frame>
                <LazyBackgroundImg />
            </Frame>
        </>
    )
}

export default Header