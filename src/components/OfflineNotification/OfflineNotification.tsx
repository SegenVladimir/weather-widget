import React from 'react';
import './OfflineNotification.scss';

export const OfflineNotification = () => {
    return (
        <div className="offline-notification">
            <div className="offline-notification__text">Нет соединения с интернетом!</div>
        </div>
    );
};
