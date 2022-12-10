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
      providesTags: ['Buildings', 'BuildingsDelete'],
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
    deleteBuilding: builder.mutation({
      query: ({ id }) => {
        return {
          url: `/admin/buildings/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Buildings', 'BuildingsDelete'],
    }),
    updateBuilding: builder.mutation({
      query: ({ buildingID, ...body }) => {
        return {
          url: `/admin/buildings/${buildingID}`,
          method: 'PUT',
          body: body,
        };
      },
      invalidatesTags: ['Buildings'],
    }),
  }),
});

export const {
  useGetBuildingQuery,
  useGetBuildingEmptyQuery,
  useGetIconFacilitiesQuery,
  useGetBuildingDetailQuery,
  useDeleteBuildingMutation,
  useUpdateBuildingMutation,
} = buildingApiSlice;
