import React, { FC } from 'react';
import './MainWeather.scss';
import { useTranslation } from 'react-i18next';

interface TProps {
    temperature: number | undefined;
    temperatureUnit: string | undefined;
    isLoading?: boolean;
}

export const MainWeather: FC<TProps> = ({ temperature, temperatureUnit, isLoading }) => {
    const { t } = useTranslation();

    return (
        <div className="main-weather">
            {isLoading ? (
                <div className="skeleton">
                    <span className="icon"></span>
                    <span className="temperature"></span>
                    <span></span>
                </div>
            ) : (
                <>
                    <div className="main-weather__icon"></div>
                    <div className="main-weather__temperature">
                        {temperature} {temperatureUnit}
                    </div>
                    <div className="main-weather__type">{t('sunny')}</div>
                </>
            )}
        </div>
    );
};
