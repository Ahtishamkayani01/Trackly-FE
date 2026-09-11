"use client";
import { useRouter } from "next/navigation";
import { useLogoutMutation } from "../store/authApiSlice";
import { useAuthGuard } from "../hooks/useAuthGuard";

export default function DashboardPage() {
  const router = useRouter();
  const { user, isChecking } = useAuthGuard();
  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  if (isChecking) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
        Welcome{user?.name ? `, ${user.name}` : ""}
      </h1>
      <button
        onClick={handleLogout}
        className="py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer text-white border border-blue-600 bg-blue-600 hover:bg-blue-700"
      >
        Log out
      </button>
    </div>
  );
}
