export interface IGeoname {
    name: string;
    country: string;
    lon: number;
    lat: number;
    timezone: string;
    population: number;
    partial_match: boolean;
}