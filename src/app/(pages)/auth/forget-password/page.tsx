import React from "react";

export default function ForgetPassword() {
  return (
    <div className="container py-16 mx-auto px-4" id="forgot-password-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div className="hidden lg:block">
          <div className="text-center space-y-6">
            <div className="w-full h-96 bg-gradient-to-br from-primary-50 via-green-50 to-emerald-50 rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-primary-100/50" />
              <div className="absolute bottom-12 right-10 w-32 h-32 rounded-full bg-green-100/50" />
              <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-emerald-100/50" />
              <div className="relative flex flex-col items-center gap-6 z-10">
                <div className="w-28 h-28 rounded-3xl bg-white shadow-xl flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-20 h-20 rounded-2xl bg-primary-100 flex items-center justify-center">
                    <svg
                      data-prefix="fas"
                      data-icon="lock"
                      className="svg-inline--fa fa-lock text-primary-600 text-4xl"
                      role="img"
                      viewBox="0 0 384 512"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="absolute -left-16 top-4 w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center -rotate-12">
                  <svg
                    data-prefix="fas"
                    data-icon="envelope"
                    className="svg-inline--fa fa-envelope text-primary-500 text-xl"
                    role="img"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"
                    />
                  </svg>
                </div>
                <div className="absolute -right-16 top-8 w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center rotate-12">
                  <svg
                    data-prefix="fas"
                    data-icon="shield-halved"
                    className="svg-inline--fa fa-shield-halved text-green-500 text-xl"
                    role="img"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"
                    />
                  </svg>
                </div>
                <div className="flex gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary-400 animate-pulse" />
                  <div className="w-3 h-3 rounded-full bg-primary-500 animate-pulse [animation-delay:150ms]" />
                  <div className="w-3 h-3 rounded-full bg-primary-600 animate-pulse [animation-delay:300ms]" />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">
                Reset Your Password
              </h2>
              <p className="text-lg text-gray-600">
                Don't worry, it happens to the best of us. We'll help you get
                back into your account in no time.
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <svg
                    data-prefix="fas"
                    data-icon="envelope"
                    className="svg-inline--fa fa-envelope text-primary-600 mr-2"
                    role="img"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"
                    />
                  </svg>
                  Email Verification
                </div>
                <div className="flex items-center">
                  <svg
                    data-prefix="fas"
                    data-icon="shield-halved"
                    className="svg-inline--fa fa-shield-halved text-primary-600 mr-2"
                    role="img"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"
                    />
                  </svg>
                  Secure Reset
                </div>
                <div className="flex items-center">
                  <svg
                    data-prefix="fas"
                    data-icon="lock"
                    className="svg-inline--fa fa-lock text-primary-600 mr-2"
                    role="img"
                    viewBox="0 0 384 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z"
                    />
                  </svg>
                  Encrypted
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-primary-600">
                  Fresh<span className="text-gray-800">Cart</span>
                </span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Forgot Password?
              </h1>
              <p className="text-gray-600">
                No worries, we'll send you a reset code
              </p>
            </div>
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-primary-600 text-white ring-4 ring-primary-100">
                  <svg
                    data-prefix="fas"
                    data-icon="envelope"
                    className="svg-inline--fa fa-envelope text-xs"
                    role="img"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"
                    />
                  </svg>
                </div>
                <div className="w-16 h-0.5 mx-2 transition-all duration-300 bg-gray-200" />
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-gray-100 text-gray-400">
                  <svg
                    data-prefix="fas"
                    data-icon="key"
                    className="svg-inline--fa fa-key text-xs"
                    role="img"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0 160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"
                    />
                  </svg>
                </div>
                <div className="w-16 h-0.5 mx-2 transition-all duration-300 bg-gray-200" />
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-gray-100 text-gray-400">
                  <svg
                    data-prefix="fas"
                    data-icon="lock"
                    className="svg-inline--fa fa-lock text-xs"
                    role="img"
                    viewBox="0 0 384 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <input
                    id="email"
                    className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                    placeholder="Enter your email address"
                    type="email"
                    name="email"
                  />
                  <svg
                    data-prefix="fas"
                    data-icon="envelope"
                    className="svg-inline--fa fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    role="img"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"
                    />
                  </svg>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 px-4 rounded-xl hover:bg-primary-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send Reset Code
              </button>
              <div className="text-center">
                <a
                  className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  href="/login"
                >
                  <svg
                    data-prefix="fas"
                    data-icon="arrow-left"
                    className="svg-inline--fa fa-arrow-left text-xs"
                    role="img"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                    />
                  </svg>
                  Back to Sign In
                </a>
              </div>
            </form>
            <div className="text-center mt-8 pt-6 border-t border-gray-100">
              <p className="text-gray-600">
                Remember your password?{" "}
                <a
                  className="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                  href="/login"
                >
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
