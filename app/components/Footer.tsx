function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="pb-8 px-6 md:px-20 ">
      {/* <div className="pt-8 pb-12 px-20 bg-amber-300 text-black"> */}
      {/* <div className="pt-8 pb-12 text-black">
        <h1 className="font-semibold text-2xl leading-loose dark:text-neutral-900 text-center">
          Acknowledgement of Country
          </h1>
        <p>
          The University of New South Wales is located on the land of the
          Bedegal (Kensington campus), Gadigal (City and Paddington Campuses)
          and Ngunnawal people (Australian Defence Force Academy in Canberra).
          We acknowledge the traditional owners of the lands on which our
          campuses are situated, and pay our respects to Elders past, present
          and emerging.
        </p>
      </div> */}
      <div className="flex flex-col justify-center items-center">

      {/* <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">rss</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/vercel/next.js"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://vercel.com/templates/next.js/portfolio-starter-kit"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">view source</p>
          </a>
        </li>
      </ul> */}
      {/* <div className="text-center mt-8">Contact the organisers for further queries. </div>
      <p className="mt-8 text-sm text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} BuildSec
      </p> */}
      </div>
    </footer>
  )
}
