import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const backendApi = createApi({
  reducerPath: "backendApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://desktop-7ug8vu5.tail35aa6.ts.net/",
  }),
  endpoints: (builder) => ({
    symptomCheck: builder.mutation({
      query: (data) => ({
        url: "symptom",
        method: "POST",
        body: data, // Include the body data here
      }),
    }),
    cancerCheck: builder.mutation({
      query: (data) => ({
        url: "cancer",
        method: "POST",
        body: data, // Include the body data here
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSymptomCheckMutation, useCancerCheckMutation } = backendApi;
