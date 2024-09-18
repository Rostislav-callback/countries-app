export interface Country {
    countryCode: string;
    name: string;
}

export interface Holiday {
    counties?: number[];
    countryCode: string;
    date: string;
    fixedfalse: boolean;
    globaltrue: boolean;
    launchYear: number;
    nulllocalName: string;
    name: string;
    types: string[];
}

export interface RandomCountriesData {
    countryCode: string;
    name: string;
    haliday: string;
    date: string;
}