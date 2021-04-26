import * as React from "react";

function SvgLens(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
      {...props}
    >
      <path
        d="M22 12a1.5 1.5 0 00-1.5 1.5v6h-6a1.5 1.5 0 000 3h6v6a1.5 1.5 0 003 0v-6h6a1.5 1.5 0 100-3h-6v-6A1.5 1.5 0 0022 12z"
        fill="#FF7067"
      />
      <path
        d="M30.498 6.672c.513-.54.389-1.42-.282-1.746A19.198 19.198 0 0021.797 3C11.416 3 3 11.16 3 21.228c0 10.067 8.416 18.228 18.797 18.228 4.818 0 9.213-1.758 12.54-4.648l12.857 12.858a1.14 1.14 0 001.612-1.61L35.962 33.211c2.885-3.205 4.633-7.396 4.633-11.984 0-1.63-.22-3.21-.635-4.714-.233-.848-1.296-1.048-1.888-.396-.283.312-.376.75-.268 1.157.335 1.266.512 2.59.512 3.953 0 8.743-7.329 15.95-16.519 15.95-9.19 0-16.519-7.207-16.519-15.95 0-8.743 7.33-15.95 16.52-15.95 2.627 0 5.102.59 7.297 1.635a1.213 1.213 0 001.403-.241z"
        fill="#4E6896"
      />
      <path
        d="M34.065 7.928c-.44-.362-1.08-.302-1.472.11l-.089.094c-.426.449-.352 1.17.125 1.563.438.36 1.085.335 1.467-.084l.082-.091c.42-.462.392-1.177-.09-1.573a39.554 39.554 0 00-.023-.02z"
        fill="#4E6896"
      />
    </svg>
  );
}

export default SvgLens;
