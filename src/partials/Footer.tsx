import React from 'react'

function Footer() {
  return (
    <footer className="relative md:footerDots">
      <div className="px-4 py-8 sm:px-6 bg-black flex justify-between">
        <div className="text-sm text-white flex items-center space-x-4">
          <span className="font-bold">F.A.M.E.</span>
          <span className="font-light text-xs">All rights reserved.</span>
        </div>
        <Socials />
      </div>
    </footer>
  )
}

export default Footer
export const Socials = () => {
  return (
    <ul className="mb-4 flex md:order-1 md:ml-4 md:mb-0 z-10">
      <li className="ml-4">
        <a
          href="mailto:hello@oneoffame.com"
          aria-label="Email"
          className="hover:bg-white-100 flex items-center justify-center rounded-full bg-white text-gray-600 shadow transition duration-150 ease-in-out hover:text-gray-900"
        >
          <svg
            className="h-8 w-8 fill-current"
            viewBox="-6 -6 36 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path>
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path>
          </svg>
        </a>
      </li>
      <li className="ml-4">
        <a
          href="https://www.linkedin.com/company/f-a-m-e-bulgaria/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
          className="hover:bg-white-100 flex items-center justify-center rounded-full bg-white text-gray-600 shadow transition duration-150 ease-in-out hover:text-gray-900"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            className="h-8 w-8 fill-current"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22.4904 8H9.34578C8.62754 8 8 8.5168 8 9.2266V22.4004C8 23.114 8.62754 23.75 9.34578 23.75H22.4865C23.2086 23.75 23.75 23.1098 23.75 22.4004V9.2266C23.7542 8.5168 23.2086 8 22.4904 8ZM12.8821 21.1284H10.6258V14.113H12.8821V21.1284ZM11.832 13.0463H11.8159C11.0937 13.0463 10.6262 12.5088 10.6262 11.8359C10.6262 11.1507 11.1061 10.6258 11.8443 10.6258C12.5826 10.6258 13.0344 11.1468 13.0505 11.8359C13.0502 12.5088 12.5826 13.0463 11.832 13.0463ZM21.1284 21.1284H18.8721V17.2925C18.8721 16.3735 18.5437 15.7456 17.7274 15.7456C17.1037 15.7456 16.7346 16.1675 16.5704 16.5785C16.5089 16.7261 16.4923 16.9272 16.4923 17.1325V21.1284H14.236V14.113H16.4923V15.0893C16.8207 14.6217 17.3336 13.9488 18.5272 13.9488C20.0083 13.9488 21.1288 14.9251 21.1288 17.0299L21.1284 21.1284Z" />
          </svg>
        </a>
      </li>
      <li className="ml-4">
        <a
          href="https://www.facebook.com/famebulgaria"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:bg-white-100 flex items-center justify-center rounded-full bg-white text-gray-600 shadow transition duration-150 ease-in-out hover:text-gray-900"
        >
          <svg
            className="h-8 w-8 fill-current"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
          </svg>
        </a>
      </li>
      <li className="ml-4">
        <a
          href="https://www.instagram.com/f.a.m.e_community/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:bg-white-100 flex items-center justify-center rounded-full bg-white text-gray-600 shadow transition duration-150 ease-in-out hover:text-gray-900"
        >
          <svg
            width="32"
            height="32"
            className="h-8 w-8 fill-current"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.2811 9.43738C20.1506 9.43998 20.9838 9.78654 21.5986 10.4014C22.2135 11.0162 22.56 11.8494 22.5626 12.7189V19.2811C22.56 20.1506 22.2135 20.9838 21.5986 21.5986C20.9838 22.2135 20.1506 22.56 19.2811 22.5626H12.7189C11.8494 22.56 11.0162 22.2135 10.4014 21.5986C9.78654 20.9838 9.43998 20.1506 9.43738 19.2811V12.7189C9.43998 11.8494 9.78654 11.0162 10.4014 10.4014C11.0162 9.78654 11.8494 9.43998 12.7189 9.43738H19.2811M19.2811 8.125H12.7189C10.1922 8.125 8.125 10.1922 8.125 12.7189V19.2811C8.125 21.8078 10.1922 23.875 12.7189 23.875H19.2811C21.8078 23.875 23.875 21.8078 23.875 19.2811V12.7189C23.875 10.1922 21.8078 8.125 19.2811 8.125V8.125Z" />
            <path d="M20.2655 12.7188C20.0708 12.7188 19.8805 12.661 19.7186 12.5529C19.5567 12.4447 19.4306 12.291 19.3561 12.1111C19.2816 11.9312 19.2621 11.7333 19.3 11.5423C19.338 11.3514 19.4318 11.176 19.5695 11.0383C19.7071 10.9006 19.8825 10.8069 20.0735 10.7689C20.2644 10.7309 20.4623 10.7504 20.6422 10.8249C20.8221 10.8994 20.9758 11.0256 21.084 11.1875C21.1922 11.3494 21.2499 11.5397 21.2499 11.7344C21.2502 11.8637 21.2249 11.9919 21.1755 12.1114C21.1261 12.231 21.0537 12.3396 20.9622 12.4311C20.8707 12.5225 20.7621 12.595 20.6425 12.6444C20.523 12.6938 20.3949 12.719 20.2655 12.7188V12.7188ZM16 13.3748C16.5192 13.3748 17.0267 13.5287 17.4584 13.8172C17.8901 14.1056 18.2266 14.5156 18.4253 14.9953C18.624 15.475 18.676 16.0028 18.5747 16.512C18.4734 17.0212 18.2234 17.489 17.8562 17.8561C17.4891 18.2232 17.0214 18.4733 16.5121 18.5746C16.0029 18.6758 15.4751 18.6239 14.9954 18.4252C14.5157 18.2265 14.1057 17.89 13.8173 17.4583C13.5288 17.0266 13.3749 16.5191 13.3749 15.9999C13.3756 15.3039 13.6524 14.6366 14.1446 14.1445C14.6367 13.6523 15.304 13.3755 16 13.3748M16 12.0624C15.2212 12.0624 14.46 12.2933 13.8124 12.726C13.1649 13.1586 12.6602 13.7736 12.3622 14.4931C12.0642 15.2126 11.9862 16.0043 12.1382 16.7681C12.2901 17.5319 12.6651 18.2334 13.2158 18.7841C13.7664 19.3348 14.468 19.7098 15.2318 19.8617C15.9956 20.0137 16.7873 19.9357 17.5068 19.6377C18.2263 19.3396 18.8413 18.835 19.2739 18.1874C19.7066 17.5399 19.9375 16.7786 19.9375 15.9999C19.9375 14.9556 19.5227 13.9541 18.7842 13.2157C18.0458 12.4772 17.0443 12.0624 16 12.0624V12.0624Z" />
          </svg>
        </a>
      </li>
    </ul>
  )
}
