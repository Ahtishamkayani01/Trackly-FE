"use client";
import Link from "next/link";
import Input from "./ui/input";

export default function LoginForm() {
  return (
    <main className="px-4 md:px-8 w-full flex m-auto flex-col items-center justify-center">
      <div className="py-4 max-w-md w-full">
        <div className="p-6 rounded-lg bg-white border border-slate-300 shadow-xs md:p-8 dark:bg-neutral-800 dark:border-neutral-700">
          <div className="mb-6 flex justify-center">
            <Link href="#">
              <img
                src="/trackly-logo-v1.png"
                alt="logo"
                className="w-12 min-h-12"
              />
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-slate-900 text-center text-xl font-semibold mb-2 dark:text-slate-50">
              Welcome back
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Enter your email and password to sign in.
            </p>
          </div>

          <form className="space-y-6 mt-10">
            <Input
              label="Email"
              type="email"
              id="email"
              name="email"
              placeholder="john@readymadeui.com"
              required
            />

            <Input
              label="Password"
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              required
            />

            <div className="flex items-start flex-wrap gap-2">
              <label className="flex items-center group has-[input:checked]:text-slate-900">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  required
                  className="sr-only"
                />
                {/* Custom box */}
                <span
                  className="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-slate-300 dark:outline-neutral-600
                              bg-white dark:bg-neutral-700
                              group-has-[input:checked]:bg-blue-600
                              group-has-[input:checked]:outline-blue-600
                              group-focus-within:outline-2
                              group-focus-within:outline-blue-600"
                  aria-hidden="true"
                >
                  {/* Checkmark */}
                  <svg
                    className="size-3 text-white opacity-0 group-has-[input:checked]:opacity-100"
                    viewBox="0 0 12 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M1 5l3 3 7-7" />
                  </svg>
                </span>
                <span className="ml-3 text-sm text-slate-700 dark:text-slate-300">
                  Remember me
                </span>
              </label>

              <a
                href="#"
                className="ml-auto text-sm font-medium text-blue-700 dark:text-blue-500 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Sign in
            </button>
          </form>

          <div className="flex items-center gap-4 my-6">
            <hr className="w-full border-slate-300 dark:border-neutral-700" />
            <p className="text-sm text-slate-700 text-center dark:text-slate-300">
              or
            </p>
            <hr className="w-full border-slate-300 dark:border-neutral-700" />
          </div>

          <div>
            <a
              href="#"
              className="w-full flex items-center justify-center gap-2.5 py-2 px-3.5 text-sm rounded-md font-semibold text-slate-900 border border-slate-300 bg-white hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-50 dark:border-neutral-600 dark:bg-neutral-700 dark:hover:bg-neutral-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4.5"
                viewBox="0 0 512 512"
                aria-hidden="true"
              >
                <path
                  fill="#fbbd00"
                  d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                  data-original="#fbbd00"
                />
                <path
                  fill="#0f9d58"
                  d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                  data-original="#0f9d58"
                />
                <path
                  fill="#31aa52"
                  d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                  data-original="#31aa52"
                />
                <path
                  fill="#3c79e6"
                  d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                  data-original="#3c79e6"
                />
                <path
                  fill="#cf2d48"
                  d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                  data-original="#cf2d48"
                />
                <path
                  fill="#eb4132"
                  d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                  data-original="#eb4132"
                />
              </svg>
              Sign in with Google
            </a>
          </div>

          <div className="mt-6 text-slate-900 text-sm text-center dark:text-slate-50">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-blue-700 hover:underline ml-1 font-medium dark:text-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
