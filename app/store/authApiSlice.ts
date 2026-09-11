import { apiSlice } from "./apiSlice";

export interface SignupRequest {
  name: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  message: string;
  success: boolean;
}

export interface MeResponse {
  success: boolean;
  user: {
    _id: string;
    name: string;
    email: string;
  };
}

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation<AuthResponse, SignupRequest>({
      query: (body) => ({
        url: "/signup",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    logout: builder.mutation<AuthResponse, void>({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      invalidatesTags: ["User"],
      // Tag invalidation alone only *schedules* a background refetch of `me`,
      // it doesn't clear the cache immediately. Any guard that mounts before
      // that refetch resolves (e.g. the login page right after `router.push`)
      // would still read the stale "logged in" cache and bounce back to the
      // dashboard. Reset the whole cache synchronously on success instead.
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(apiSlice.util.resetApiState());
        } catch {
          // logout request failed; leave the cache as-is
        }
      },
    }),
    me: builder.query<MeResponse, void>({
      query: () => "/me",
      providesTags: ["User"],
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
} = authApiSlice;
