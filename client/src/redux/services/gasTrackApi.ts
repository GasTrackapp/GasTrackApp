'use client'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GasTrackUsers } from '../interfaces/servicesInterfaces';

const publicApi = process.env.NEXT_PUBLIC_GASTRACK_API

export const gasTrackApi = createApi({
    reducerPath: 'GasTrackApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: publicApi
    }),
    endpoints: (builder) => ({
        getGasTrackUsers: builder.query<GasTrackUsers[], void>({
            query: () => 'api/user',
        }),
        getGasTrackUserById: builder.query<GasTrackUsers, number>({
            query: (id) => `api/user/${id}`,
        }),
    }),
});

export const { 
    useGetGasTrackUsersQuery, 
    useGetGasTrackUserByIdQuery 
} = gasTrackApi;
