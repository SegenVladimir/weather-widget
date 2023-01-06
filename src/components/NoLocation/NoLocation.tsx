import React from 'react';
import './NoLocation.scss';
import { useTranslation } from 'react-i18next';

export const NoLocation = () => {
    const { t } = useTranslation();
    return (
        <div className="no-location">
            <div className="no-location__icon"></div>
            <div className="no-location__text">{t('lock_location')}</div>
        </div>
    );
};
