import React, { FC } from 'react';
import './DatesWeather.scss';
import { DatesWeatherItem } from './DatesWeatherItem';
import { TWeekDataWeather } from '../../types/weather';

interface TProps {
    weekData: TWeekDataWeather[] | undefined;
    isLoading?: boolean;
}

export const DatesWeather: FC<TProps> = ({ weekData, isLoading }) => {
    return (
        <div className="dates-weather">
            {isLoading ? (
                <div className="skeleton">
                    <div className="dates-weather__item">
                        <span className="icon"></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="dates-weather__item">
                        <span className="icon"></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="dates-weather__item">
                        <span className="icon"></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="dates-weather__item">
                        <span className="icon"></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            ) : (
                weekData?.slice(0, 4).map((item, index) => {
                    return (
                        <DatesWeatherItem
                            key={item.time}
                            active={!index}
                            icon={item.status}
                            week={item.date.weekShort}
                            temperature={Math.floor(item.temperature)}
                        />
                    );
                })
            )}
        </div>
    );
};
