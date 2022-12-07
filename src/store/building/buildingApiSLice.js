import { apiSlice } from '../../api/apiSlice';

export const buildingApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBuilding: builder.query({
      query: ({ ...body }) => {
        return {
          url: `/admin/buildings`,
          params: body,
        };
      },
      providesTags: ['Building'],
    }),
    getBuildingEmpty: builder.query({
      query: () => {
        return {
          url: `/admin/buildings/id`,
        };
      },
    }),
  }),
});

export const { useGetBuildingQuery, useGetBuildingEmptyQuery } =
  buildingApiSlice;
