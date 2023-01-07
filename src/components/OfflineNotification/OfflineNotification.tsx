import React from 'react';
import './OfflineNotification.scss';
import { useTranslation } from 'react-i18next';

export const OfflineNotification = () => {
    const { t } = useTranslation();
    return (
        <div className="offline-notification">
            <div className="offline-notification__text">{t('offline_text')}</div>
        </div>
    );
};
