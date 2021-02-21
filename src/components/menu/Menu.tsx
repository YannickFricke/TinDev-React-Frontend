import React from 'react';
import { MenuEntry } from './MenuEntry';

export function Menu() {
    return (
        <div id='menu'>
            <MenuEntry text='Profile' url='/profile' />
            <MenuEntry text='Job Swipe' url='/job-swipe' />
            <MenuEntry text='Project Ideas' url='/project-ideas' />
            <MenuEntry text='Companies' url='/companies' />
            <MenuEntry text='Messages' url='/messages' />
            <MenuEntry text='Settings' url='/settings' />
        </div>
    );
}
