import Header from "@/partials/Header/Header";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { AppConfig } from "utils/AppConfig";

import Footer from "../partials/Footer";

type ErrorProps = {
  statusCode: number;
  message: string;
};
const Error = ({ message, statusCode }: ErrorProps) => {
  return (
    <>
      <Head>
        <title>{AppConfig.site_name} | Error</title>
      </Head>
      <div className="flex min-h-screen flex-col overflow-hidden">
        <Header />
        <main className="grow">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-32 md:pb-20">
              <div className="pb-12 text-center md:pb-16">
                <h1 className="mb-4 text-5xl font-extrabold leading-tighter tracking-tighter md:text-6xl">
                  Oops! Error.
                </h1>
                <div className="mx-auto max-w-2xl">
                  <p className="mb-2 text-xl font-bold text-gray-700">
                    {message}
                  </p>
                  <p className="mb-4 text-xl text-gray-600">
                    {statusCode === 403 &&
                      `When this happens, it's usually because the owner only
                  shared it with a small group of people, changed who can see it
                  or it's been deleted.`}
                  </p>
                  <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                    <div>
                      <Link href="/" legacyBehavior>
                        <a className="btn mb-4 w-full bg-blue-600 text-white hover:bg-blue-700 sm:mb-0 sm:w-auto">
                          Go Home
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Error;
