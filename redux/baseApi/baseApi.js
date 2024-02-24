import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react"

export const baseApi = createApi({
    reducerPath: "baseApi",
    tagTypes: ["tours"],
    baseQuery: fakeBaseQuery({
        baseApi: "http://localhost:5000/api/v1/"
    }),
    endpoints: () => ({})
})