import React, { FC } from 'react';
import './DatesWeather.scss';
import { DatesWeatherItem } from './DatesWeatherItem';
import { TWeekDataWeather } from '../../utils/getWeather';

interface TProps {
    weekData: TWeekDataWeather[] | undefined;
    isLoading?: boolean;
}

export const DatesWeather: FC<TProps> = ({ weekData, isLoading }) => {
    function getRandomIcon(list: string[]) {
        return list[Math.floor(Math.random() * list.length)];
    }

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
                            icon={getRandomIcon(['cloudy', 'rain', 'sun'])}
                            week={item.date.weekShort}
                            temperature={Math.floor(item.temperature)}
                        />
                    );
                })
            )}
        </div>
    );
};
