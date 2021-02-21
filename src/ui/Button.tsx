import React from 'react';
import classNames from 'classnames';

import '../styles/ui/button.scss';

interface IButtonProps {
    primary?: boolean;
    secondary?: boolean;
    rounded?: boolean;
}

export function Button(props: React.PropsWithChildren<IButtonProps>): JSX.Element {
    const buttonClasses = classNames({
        button: true,
        primary: props.primary ?? false,
        secondary: props.secondary ?? false,
        rounded: props.rounded ?? false,
    })

    return <div className={buttonClasses}>{props.children}</div>
}
