import React, { useContext } from 'react';
import './MoreInfo.scss';

import { ParametersWeather } from '../ParametersWeather/ParametersWeather';
import { DatesWeather } from '../DatesWeather/DatesWeather';
import { AppContext } from '../App/App';
import { useTranslation } from 'react-i18next';

export const MoreInfo = () => {
    const context = useContext(AppContext);
    const { t } = useTranslation();

    const parameters = [
        {
            id: 1,
            name: t('precipitation'),
            value: context.weather?.precipitation,
            unit: context.weather ? t(context.weather.units.precipitation) : '',
        },
        {
            id: 2,
            name: t('humidity'),
            value: context.weather?.humidity,
            unit: context.weather?.units.humidity,
        },
        {
            id: 3,
            name: t('wind'),
            value: context.weather?.windspeed,
            unit: context.weather ? t(context.weather.units.windspeed) : '',
        },
    ];

    return (
        <div className="more-info">
            <ParametersWeather parameters={parameters} isLoading={context.loading} />
            <DatesWeather weekData={context.weather?.weekData} isLoading={context.loading} />
        </div>
    );
};
