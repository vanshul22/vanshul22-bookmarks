import React from 'react';
import { Button } from '../ui/button';

type Props = {}

const Sidebar = (props: Props) => {
    return (
        <div className='h-svh w-[50%] md:w-[200px] absolute md:static bg-green-400 transition-all delay-1000 ease-in-out'>
            Sidebar
        </div>
    )
}

export default Sidebar;

