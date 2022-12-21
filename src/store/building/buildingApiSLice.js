import { apiSlice } from "../../api/apiSlice";

export const buildingApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBuilding: builder.query({
      query: ({ ...body }) => {
        return {
          url: `/admin/buildings`,
          params: body,
        };
      },
      providesTags: ["Buildings", "BuildingsDelete"],
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
      invalidatesTags: ["Buildings"],
    }),
    getBuildingTotal: builder.query({
      query: () => {
        return {
          url: `/admin/buildings/total`,
        };
      },
      invalidatesTags: ["Buildings"],
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
          method: "DELETE",
        };
      },
      invalidatesTags: ["Buildings", "BuildingsDelete"],
    }),
    updateBuilding: builder.mutation({
      query: ({ buildingID, ...body }) => {
        return {
          url: `/admin/buildings/${buildingID}`,
          method: "PUT",
          body: body,
        };
      },
      invalidatesTags: ["Buildings"],
    }),
    addFacilities: builder.mutation({
      query: ({ id, facility }) => {
        return {
          url: `/admin/buildings/${id}/facilities`,
          method: "POST",
          body: facility,
        };
      },
      invalidatesTags: ["Buildings"],
    }),
    deleteFacilities: builder.mutation({
      query: ({ buildingId, facilityId }) => {
        return {
          url: `/admin/buildings/${buildingId}/facilities/${facilityId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Buildings"],
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
  useAddFacilitiesMutation,
  useDeleteFacilitiesMutation,
  useGetBuildingTotalQuery,
} = buildingApiSlice;
