import React from "react";
import Link from "next/link";
import { siteMetadata } from "utils/constant";
const Footer = () => {
  return (
    <div className="w-full px-10 text-gray-500 dark:text-gray-400">
      <div className="flex flex-col items-center justify-between py-4 mx-auto max-w-7xl sm:flex-row">
        <div className="text-center">
          <div>
            {`© ${new Date().getFullYear()}`}{" "}
            <span className="text-lg font-bold text-yellow-400">
              Vo Thanh Luan
            </span>
            . All Rights Reserved.
          </div>
        </div>
        <div className="mt-2 text-xl text-center text-gray-500 dark:text-gray-400 md:mt-0">
          <Link href={siteMetadata.github} className="inline-block pt-1 mx-1">
            <svg
              className="w-6 h-6 text-gray-500 fill-current dark:text-gray-400 hover:text-black dark:hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />{" "}
            </svg>
          </Link>
          <Link href={siteMetadata.linkedin} className="inline-block pt-1 mx-1">
            <svg
              className="w-6 h-6 text-gray-500 fill-current dark:text-gray-400 hover:text-black dark:hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />{" "}
            </svg>
          </Link>
          <Link href={siteMetadata.facebook} className="inline-block pt-1 mx-1">
            <svg
              className="w-6 h-6 text-gray-500 fill-current dark:text-gray-400 hover:text-black dark:hover:text-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />{" "}
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
