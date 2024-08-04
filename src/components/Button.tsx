import {FC} from 'react';

type ButtonProps = {
    text: string;
}

export const MyButton: FC<ButtonProps> = ({text}) => {
    return  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{text}</button>
} 