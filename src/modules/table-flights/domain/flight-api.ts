import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { FlightBaggage, FlightCode, Period } from '../model/type';

export const flightApi = createApi({
  reducerPath: 'flightApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getBaggage: builder.query<FlightBaggage[], Period>({
      query: (data) => {
        const params = new URLSearchParams();
        for (const key in data) {
          if (data[key as keyof Period] !== '' && data[key as keyof Period]) {
            params.append(key, data[key as keyof Period]);
          }
        }
        return { url: '/brs/flight/', params };
      },
    }),
    getFlightCode: builder.query<FlightCode[], Period>({
      query: (data) => {
        const params = new URLSearchParams();
        for (const key in data) {
          if (data[key as keyof Period] !== '' && data[key as keyof Period]) {
            params.append(key, data[key as keyof Period]);
          }
        }
        return { url: '/aodb/flight', params };
      },
    }),
  }),
});
export const { useGetFlightCodeQuery, useGetBaggageQuery } = flightApi
