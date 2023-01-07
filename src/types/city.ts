export interface TDataCity {
    address: {
        house_number: string;
        road: string;
        suburb: string;
        city: string;
        state: string;
        region: string;
        postcode: string;
        country: string;
        country_code: string;
    };
}

export interface TAddress {
    city: string;
    country: string;
    country_code: string;
}
