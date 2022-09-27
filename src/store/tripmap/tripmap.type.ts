export interface IGeoname {
    name: string;
    country: string;
    lon: number;
    lat: number;
    timezone: string;
    population: number;
    partial_match: boolean;
}

export interface IRadius {
    xid: string;
    name: string;
    kinds: string;
    osm: string;
    wikidata: string;
    dist: number;
    point: {
        description: string;
        lon: number;
        lat: number;
    }
}

export interface Address {
    city: string;
    road: string;
    county: string;
    suburb: string;
    country: string;
    postcode: string;
    country_code: string;
    house_number: string;
    neighbourhood: string;
    pedestrian: string;

}

export interface Sources {
    geometry: string;
    attributes: string[];
}

export interface Preview {
    source: string;
    height: number;
    width: number;
}

export interface WikipediaExtracts {
    title: string;
    text: string;
    html: string;
}

export interface Point {
    lon: number;
    lat: number;
}

export interface IPlace {
    xid: string;
    name: string;
    address: Address;
    rate: string;
    wikidata: string;
    kinds: string;
    sources: Sources;
    otm: string;
    wikipedia: string;
    image: string;
    preview: Preview;
    wikipedia_extracts: WikipediaExtracts;
    point: Point;
}
