"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMeQuery } from "../store/authApiSlice";

// Redirects to "/" if the session cookie is missing/invalid. Use on pages
// that require an authenticated user (e.g. the dashboard).
export function useAuthGuard() {
  const router = useRouter();
  const { data, isLoading, isError } = useMeQuery();

  useEffect(() => {
    if (!isLoading && isError) {
      router.replace("/");
    }
  }, [isLoading, isError, router]);

  return { user: data?.user, isChecking: isLoading || isError };
}

// Redirects to "/dashboard" if the user already has a valid session. Use on
// guest-only pages (login, register) so a logged-in user can't see them.
export function useGuestGuard() {
  const router = useRouter();
  const { data, isLoading } = useMeQuery();
  const isAuthenticated = !isLoading && !!data?.success;

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/dashboard");
    }
  }, [isAuthenticated, router]);

  return { isChecking: isLoading || isAuthenticated };
}
