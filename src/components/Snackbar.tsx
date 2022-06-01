import React, { PureComponent } from 'react';

export class Snackbar extends PureComponent<{ message: string; isActive: boolean}> {
    render() {
        const { isActive, message } = this.props;
        return (
            <div className={isActive ? "snackbar snackbarFadIn" : "snackbar snackbarFadeOut"}>
                {message}
            </div>
        )
    }
}