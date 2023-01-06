import React, { useEffect, useState, createContext } from 'react';
import { useTranslation } from 'react-i18next';

import { MainInfo } from '../MainInfo/MainInfo';
import { MoreInfo } from '../MoreInfo/MoreInfo';

import { getDate } from '../../utils/getDate';
import { getImage } from '../../utils/getImage';
import { getAddress, TAddress } from '../../utils/getCity';
import { TDataWeather, getWeather } from '../../utils/getWeather';

import { TDate } from '../../types/types';

import './App.scss';

interface AppData {
    date?: TDate;
    location?: TAddress;
    weather?: TDataWeather;
    image?: string;
    loading?: boolean;
    locationEnabled?: boolean;
}
export const AppContext = createContext<AppData>({});
export const App = () => {
    const { i18n } = useTranslation();

    const [loading, setLoading] = useState<boolean>(true);
    const [locationEnabled, setLocationEnabled] = useState<boolean>(true);

    const [address, setAddress] = useState<TAddress>();
    const [weather, setWeather] = useState<TDataWeather>();

    const [image, setImage] = useState<string>('');

    useEffect(() => {
        i18n.changeLanguage(navigator.language);
        const location = window.navigator && window.navigator.geolocation;

        location.getCurrentPosition(
            (position) => {
                getAddress(position.coords.latitude, position.coords.longitude).then((response) => setAddress(response));
                getWeather(position.coords.latitude, position.coords.longitude).then((response) => {
                    setWeather(response);
                    setLoading(false);
                });
            },
            () => setLocationEnabled(false)
        );
    }, []);

    useEffect(() => {
        if (address?.city) {
            getImage(address?.city)
                .then((image) => {
                    setImage(image ? image : process.env.PUBLIC_URL + '/bg.png');
                })
                .catch(() => {
                    setImage(process.env.PUBLIC_URL + '/bg.png');
                });
        }
    }, [address]);

    return (
        <AppContext.Provider
            value={{
                date: getDate(),
                location: address,
                weather: weather,
                image: image,
                loading: loading,
                locationEnabled: locationEnabled,
            }}
        >
            <div className="app">
                <div className="app__box">
                    <MainInfo />
                    <MoreInfo />
                </div>
            </div>
        </AppContext.Provider>
    );
};
