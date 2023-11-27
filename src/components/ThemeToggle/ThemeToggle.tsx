import { ChangeEventHandler, FC, useContext } from 'react'
import { Btn } from './style'
import { ThemeContext } from '../../contexts/ThemeContext'
import { ELocalKeys, ETheme } from '../../../types';

const ThemeToggle: FC = () => {
    const theme = useContext(ThemeContext);

    const chanageHandler: ChangeEventHandler<HTMLInputElement> = () => {
        theme?.setTheme(prev => {
            const themeVal = prev === ETheme.dark ? ETheme.ligth : ETheme.dark;
            localStorage.setItem(ELocalKeys.theme, themeVal);
            return themeVal;
        });
    }

    return (
        <Btn>
            <input onChange={chanageHandler} type="checkbox" checked={theme?.theme === ETheme.dark ? true : false} />
        </Btn>
    )
}

export default ThemeToggle;