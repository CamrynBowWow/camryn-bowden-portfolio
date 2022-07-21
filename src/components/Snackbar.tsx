import React, { PureComponent } from 'react';

export class Snackbar extends PureComponent<{ message: string; isActive: boolean; error: boolean }> {
	render() {
		const { isActive, message, error } = this.props;
		return (
			<div
				className={
					isActive
						? error
							? 'snackbar-visible animate-fade-in text-lg bg-green-600'
							: 'snackbar-visible animate-fade-in text-base bg-red-600/95'
						: 'snackbar-invisible'
				}
			>
				{message}
			</div>
		);
	}
}
