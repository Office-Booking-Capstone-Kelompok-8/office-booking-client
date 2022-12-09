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
    getBuildingDetail: builder.query({
      query: ({ id }) => {
        return {
          url: `/admin/buildings/${id}`,
        };
      },
    }),
    getIconFacilities: builder.query({
      query: () => {
        return {
          url: `/buildings/facilities/category`,
        };
      },
    }),
  }),
});

export const {
  useGetBuildingQuery,
  useGetBuildingEmptyQuery,
  useGetIconFacilitiesQuery,
  useGetBuildingDetailQuery,
} = buildingApiSlice;
