import { TAddress, TDataCity } from '../types/city';

const lang = navigator.language;
const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&accept-language=${lang}`;

export const getAddress = (latitude: number, longitude: number): Promise<TAddress> => {
    return fetch(url + `&lat=${latitude}&lon=${longitude}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json() as Promise<TDataCity>;
        })
        .then((result) => {
            return {
                city: result.address.city,
                country: result.address.country,
                country_code: result.address.country_code,
            };
        });
};
