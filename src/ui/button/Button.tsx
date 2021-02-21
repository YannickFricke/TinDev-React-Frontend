import React from 'react';
import classNames from 'classnames';

import './button.scss';

interface IButtonProps {
    primary?: boolean;
    secondary?: boolean;
}

export function Button(props: React.PropsWithChildren<IButtonProps>): JSX.Element {
    const buttonClasses = classNames({
        button: true,
        primary: props.primary ?? false,
        secondary: props.secondary ?? false,
    })

    return <div className={buttonClasses}>{props.children}</div>
}
