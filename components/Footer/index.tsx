import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 bg-primary bg-opacity-5 pt-16 md:pt-20 lg:pt-24"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-6/12 xl:w-7/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="images/logo/logo-2.svg"
                    alt="logo"
                    className="w-full dark:hidden"
                    width={140}
                    height={30}
                  />
                  <Image
                    src="images/logo/logo.svg"
                    alt="logo"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="mb-9 text-base font-medium leading-relaxed text-body-color">
                  Celebrating the usage of Free and Open Source Software (FOSS).
                </p>
                <div className="flex items-center">
                  <a
                    href="https://instagram.com/sfdpu"
                    aria-label="social-link"
                    className="mr-6 text-[#CED3F6] hover:text-primary"
                  >
                    <svg version="1.0"
                      xmlns="http://www.w3.org/2000/svg" 
                      width="18" 
                      height="18" 
                      viewBox="0 0 200.000000 200.000000" 
                      preserveAspectRatio="xMidYMid meet"
                      className="fill-current"
                    >
                      <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"  stroke="none">
                        <path d="M450 1801 c-108 -22 -201 -96 -246 -194 l-29 -62 0 -540 0 -540 29 -62 c34 -75 95 -134 174 -171 l57 -27 497 -3 c319 -2 518 1 555 7 149 28 250 128 282 279 15 73 15 961 0 1034 -26 123 -102 217 -206 260 -58 23 -59 23 -568 25 -280 0 -526 -2 -545 -6z m893 -222 c86 -28 154 -89 194 -174 l28 -60 0 -340 c0 -335 0 -341 -23 -390 -48 -102 -113 -161 -210 -191 -49 -15 -101 -18 -362 -18 -227 -1 -315 3 -345 12 -139 46 -206 115 -241 247 -18 64 -19 588 -3 667 27 128 95 204 224 253 42 16 189 23 425 20 221 -3 252 -6 313 -26z"/>
                        <path d="M642 1475 c-135 -43 -161 -118 -162 -467 0 -353 27 -431 167 -473 71 -22 578 -21 651 0 65 20 104 52 133 112 23 47 23 55 24 358 0 306 0 311 -24 358 -30 60 -68 92 -133 112 -70 20 -590 20 -656 0z m695 -97 c32 -29 32 -91 1 -112 -34 -24 -75 -20 -103 10 -28 30 -30 45 -13 77 26 50 76 61 115 25z m-296 -69 c100 -32 174 -93 215 -177 22 -46 30 -159 15 -215 -16 -54 -70 -129 -122 -167 -45 -32 -129 -60 -181 -60 -35 0 -113 21 -148 40 -43 23 -102 85 -128 134 -23 44 -27 63 -27 141 0 78 4 97 27 140 24 45 61 87 111 125 28 21 118 49 163 49 23 1 56 -4 75 -10z"/>
                        <path d="M906 1186 c-43 -16 -91 -58 -112 -98 -17 -33 -18 -131 -1 -161 43 -77 99 -111 184 -110 92 1 150 46 179 141 14 48 14 56 -1 101 -9 27 -24 58 -33 68 -55 61 -144 85 -216 59z"/>
                      </g>
                    </svg>
                  </a>
                  <a
                    href="mailto:sfdpulug@gmail.com"
                    aria-label="social-link"
                    className="mr-6 text-[#CED3F6] hover:text-primary"
                  >
                   
                    <svg 
                        version="1.0" 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="18t" 
                        height="18" 
                        viewBox="0 0 200.000000 200.000000"
                        preserveAspectRatio="xMidYMid meet"
                        className="fill-current"
                    >
                        <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)" stroke="none">
                            <path d="M205 1681 c-40 -24 -61 -49 -80 -94 -23 -55 -23 -1129 0 -1185 19 -43 50 -78 87 -98 36 -18 1525 -22 1561 -3 37 19 78 62 93 98 21 50 21 1142 0 1192 -15 36 -56 79 -93 98 -15 8 -239 11 -780 11 -720 0 -759 -1 -788 -19z m269 -204 c39 -24 125 -77 191 -117 66 -40 166 -102 222 -137 56 -34 105 -63 108 -63 3 0 58 32 123 72 500 306 470 289 526 286 l51 -3 3 -519 c2 -409 0 -521 -10 -528 -23 -14 -144 -9 -158 7 -9 11 -11 103 -9 379 2 201 1 368 -3 371 -6 7 -113 -59 -366 -227 -74 -48 -144 -88 -156 -88 -12 0 -89 44 -172 98 -255 167 -341 222 -347 222 -4 0 -8 -172 -9 -382 l-3 -383 -85 0 -85 0 -3 515 c-1 283 0 521 3 528 3 7 24 12 56 12 44 0 63 -7 123 -43z"/>
                        </g>
                    </svg>

                  </a>
                  <a
                    href="https://youtube.com"
                    aria-label="social-link"
                    className="mr-6 text-[#CED3F6] hover:text-primary"
                  >
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      className="fill-current"
                    >
                      <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    aria-label="social-link"
                    className="mr-6 text-[#CED3F6] hover:text-primary"
                  >
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      className="fill-current"
                    >
                      <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Useful Links
                </h2>
                <ul>
                  <li>
                    <a
                      href="#features"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Highlights{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#speakers"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Past Speakers{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Archive{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Support & Help
                </h2>
                <ul>
                  <li>
                    <a
                      href="/contact"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Contact Us{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/code"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      Code of Conduct{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      {" "}
                      About{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-14 z-[-1]">
          <svg
            width="55"
            height="99"
            viewBox="0 0 55 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
            <mask
              id="mask0_94:899"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="99"
              height="99"
            >
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="#FFD426"
              />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="url(#paint0_radial_94:899)"
              />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_94:899"
                x="12.4852"
                y="-15.1763"
                width="82.7646"
                height="82.7646"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_94:899"
                />
              </filter>
              <radialGradient
                id="paint0_radial_94:899"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
              >
                <stop stopOpacity="0.47" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute left-0 bottom-24 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFD426" stopOpacity="0.62" />
                <stop offset="1" stopColor="#FFD426" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFD426" stopOpacity="0" />
                <stop offset="1" stopColor="#FFD426" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFD426" stopOpacity="0.62" />
                <stop offset="1" stopColor="#FFD426" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFD426" stopOpacity="0" />
                <stop offset="1" stopColor="#FFD426" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFD426" stopOpacity="0.62" />
                <stop offset="1" stopColor="#FFD426" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFD426" stopOpacity="0" />
                <stop offset="1" stopColor="#FFD426" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
