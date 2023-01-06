import React, { FC } from 'react';
import './ParametersWeather.scss';

interface TProps {
    parameters: {
        id: number;
        name: string;
        value?: string | number;
        unit?: string;
    }[];
    isLoading?: boolean;
}

export const ParametersWeather: FC<TProps> = ({ parameters, isLoading }) => {
    if (!parameters) {
        return <></>;
    }
    return (
        <div className="parameters-weather">
            {isLoading ? (
                <div className="skeleton">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            ) : (
                parameters.map((item) => {
                    return (
                        <div key={item.id} className="parameters-weather__item">
                            <div className="parameters-weather__title">{item.name}</div>
                            <div className="parameters-weather__text">
                                {item.value} {item.unit}
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
};
