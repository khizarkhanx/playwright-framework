import { env } from "@data/env";

export interface BookingPayload {
  name: string;
  email: string;
  password: string;
}

export const createBookingPayload = (): BookingPayload => ({
  name: "New User",
  email: env.api.newuser,
  password: env.api.password,
});