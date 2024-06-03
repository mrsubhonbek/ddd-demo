import * as z from 'zod';
export const FlightCodeSchema = z.object({
  id: z.number(),
  aid: z.number(),
  flightNumber: z.string(),
  code: z.string(),
  baggageCount: z.number().optional(),
  key: z.string().optional(),
});
export const FlightBaggageSchema = z.object({
  baggageCount: z.number(),
});
export const PeriodSchema = z.object({
  beginDate: z.string(),
  endDate: z.string(),
});

export type Period = z.infer<typeof PeriodSchema>;
export type FlightCode = z.infer<typeof FlightCodeSchema>;
export type FlightBaggage = z.infer<typeof FlightBaggageSchema>;

export type FlightTableType = FlightCode