import React, { FC, useContext } from 'react';
import './MainInfo.scss';
import { MainWeather } from '../MainWeather/MainWeather';
import { AppContext } from '../App/App';

export const MainInfo: FC = () => {
    const context = useContext(AppContext);

    return (
        <div className="main-info" style={{ backgroundImage: `url(${context.image})` }}>
            <div className="main-info__top">
                <div className="main-info__title">{context.date?.week}</div>
                <div className="main-info__subtitle">{context.date?.date}</div>
                <div className="main-info__location">
                    {context.loading ? (
                        <div className="skeleton">
                            <span></span>
                        </div>
                    ) : (
                        context.location?.city
                    )}
                </div>
            </div>

            <div className="main-info__bottom">
                <MainWeather
                    temperature={context.weather?.temperature}
                    temperatureUnit={context.weather?.units.temperature}
                    status={context.weather?.status}
                    isLoading={context.loading}
                />
            </div>
        </div>
    );
};
