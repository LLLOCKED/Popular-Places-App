import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGeoname, IPlace, IRadius } from "./tripmap.type";

const API_KEY = "5ae2e3f221c38a28845f05b6766f69a98ba9655fc968ea548d5ddf58";

export const tripmapApi = createApi({
  reducerPath: "api/tripmap",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.opentripmap.com/0.1/en/places/",
  }),
  endpoints: (build) => ({
    getGeoname: build.query<IGeoname, string>({
      query: (city = "Kiev") => `geoname?name=${city}&apikey=${API_KEY}`,
    }),
    getPlacesRadius: build.query<IRadius[],{limit: number; lon?: number ; lat?: number;}>({
      query: ({ limit, lon, lat }) =>
        `radius?radius=5000&limit=${limit}&lon=${lon}&lat=${lat}&rate=3&format=json&apikey=${API_KEY}`,
    }),
    getPlaceById: build.query<IPlace,string>({
      query: (xid) => `xid/${xid}?apikey=${API_KEY}`
    })
  }),
});

export const { useGetGeonameQuery, useGetPlacesRadiusQuery, useGetPlaceByIdQuery } = tripmapApi;
