import { test, expect } from '@playwright/test';
import { BookingClient } from '../../api/clients/BookingClient';
import { createBookingPayload } from '../../api/payloads/BookingPayload';

test('should create a booking', async ({ request }) => {
  const bookingClient = new BookingClient(request);

  const payload = createBookingPayload();

  const response = await bookingClient.createBooking(payload);

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.bookingid).toBeDefined();
  expect(body.booking.name).toBe(payload.name);
  expect(body.booking.email).toBe(payload.email);
  expect(body.booking.password).toBe(payload.password);
});