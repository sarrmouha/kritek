import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jsonApi = createApi({
    reducerPath: 'jsonApi',
    tagTypes: ['Posts'],
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
    endpoints: (builder) => ({
        createPost: builder.mutation({
            query: (body) => ({
                url: `posts`,
                method: 'POST',
                body: body,
            }),
            invalidatesTags: ['Posts'],
        }),
        getPost: builder.query({
            providesTags: ['Posts'],
            query: (id) => `posts/${id}`,
        }),
        getPosts: builder.query({
            providesTags: ['Posts'],
            query: (page = 1) => `posts?_page=${page}&_limit=10`,
        }),
        updatePost: builder.mutation({
            query: (body) => ({
                url: `posts/${body.id}`,
                method: 'PUT',
                body: body,
            }),
            invalidatesTags: ['Posts'],
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `posts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Posts'],
        }),

    }),
});

export const {
    useGetPostsQuery,
    useCreatePostMutation,
    useUpdatePostMutation,
    useDeletePostMutation,
} = jsonApi;