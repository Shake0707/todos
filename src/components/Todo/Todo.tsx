import { FC } from 'react';
import { Frame, Head, InFrame, MainTitle } from './style';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import TodoDates from './TodoDates/TodoDates';

const Todo: FC = () => {
    return (
        <Frame>
            <InFrame>
                <Head>
                    <MainTitle>TODO</MainTitle>
                    <ThemeToggle />
                </Head>
                <TodoDates />
            </InFrame>
        </Frame>
    )
}

export default Todo