import { APIRequestContext, APIResponse } from '@playwright/test';
import { BaseApiClient } from '../BaseApiClient';
import { Endpoints } from '../constants/Endpoints';

export class BookingClient extends BaseApiClient {
  constructor(request: APIRequestContext) {
    super(request);
  }

  async getBookings(): Promise<APIResponse> {
    return await this.get(Endpoints.getUser);
  }

  async getBooking(idName: String): Promise<APIResponse> {
    return await this.get(`${Endpoints.userDetails}/${idName}`);
  }

  async createBooking(
    payload: any
  ): Promise<APIResponse> {
    return await this.post(Endpoints.registerUser, {
      data: payload,
    });
  }

  async updateBooking(
    id: number,
    payload: any,
    token: string
  ): Promise<APIResponse> {
    return await this.put(`${Endpoints.userDetails}/${id}`, {
      data: payload,
      headers: {
        Cookie: `token=${token}`,
      },
    });
  }

  async deleteBooking(
    id: number,
    token: string
  ): Promise<APIResponse> {
    return await this.delete(`${Endpoints.userDetails}/${id}`, {
      headers: {
        Cookie: `token=${token}`,
      },
    });
  }
}