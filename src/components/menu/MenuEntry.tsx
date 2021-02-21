import React from 'react';
import { NavLink } from 'react-router-dom';

interface IMenuEntryProps {
    url: string;
    text: string;
}

export function MenuEntry(props: IMenuEntryProps): JSX.Element {
    return (
        <div className='menu-entry'>
            <NavLink to={props.url}>{props.text}</NavLink>
        </div>
    );
}
