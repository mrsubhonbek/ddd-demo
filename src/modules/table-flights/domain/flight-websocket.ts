import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FlightBaggage, FlightBaggageSchema, FlightCode, FlightCodeSchema, Period } from '../model/type'


export const flightApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (build) => ({
    getFlightCode: build.query<FlightCode[], Period>({
      query: (data) => {
        const params = new URLSearchParams();
        for (const key in data) {
          if (data[key as keyof Period] !== '' && data[key as keyof Period]) {
            params.append(key, data[key as keyof Period]);
          }
        }
        return { url: '/aodb/flight', params };
      },
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        const ws = new WebSocket('ws://localhost:8080')
        try {
          await cacheDataLoaded
          const listener = (event: MessageEvent) => {
            const data = JSON.parse(event.data)
            if (FlightCodeSchema.parse(data) || data.channel !== arg) return

            updateCachedData((draft) => {
              draft.push(data)
            })
          }
          ws.addEventListener('message', listener)
          ws.send(JSON.stringify({
            aodb: `flight?beginDate=${arg.beginDate}&endDate=${arg.endDate}`
          }))
        } catch(e) {
          console.error(e);
        }
        await cacheEntryRemoved
        ws.close()
      },
    }),
    getBaggage: build.query<FlightBaggage[], Period>({
      query: (data) => {
        const params = new URLSearchParams();
        for (const key in data) {
          if (data[key as keyof Period] !== '' && data[key as keyof Period]) {
            params.append(key, data[key as keyof Period]);
          }
        }
        return { url: '/brs/flight/', params };
      },
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        const ws = new WebSocket('ws://localhost:8080')
        try {
          await cacheDataLoaded
          const listener = (event: MessageEvent) => {
            const data = JSON.parse(event.data)
            if (FlightBaggageSchema.parse(data) || data.channel !== arg) return

            updateCachedData((draft) => {
              draft.push(data)
            })
          }
          ws.addEventListener('message', listener)
          ws.send(JSON.stringify({
            aodb: `flight?beginDate=${arg.beginDate}&endDate=${arg.endDate}`
          }))
        } catch(e) {
          console.error(e);
        }
        await cacheEntryRemoved
        ws.close()
      },
    }),
  }),
})

export const { useGetFlightCodeQuery, useGetBaggageQuery } = flightApi