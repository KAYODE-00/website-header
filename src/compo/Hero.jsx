export default function Hero(props) {
  return (
    <>
      <div className="isolate">
        <div className="absolute inset-0 -z-10">
          <div
            className={
              props.darkM
                ? `absolute top-0 -left-1/4 w-1/2 h-1/2 bg-amber-500 rounded-full blur-3xl opacity-20`
                : `absolute top-0 -left-1/4 w-1/2 h-1/2 bg-amber-400 rounded-full blur-3xl opacity-20`
            }
          ></div>
        </div>
        <div className="container mx-auto px-6 py-20 md:py-24 lg:py-8 xl:py-32">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
            <div className="flex-1 space-y-6 lg:space-y-7">
              <div className="space-y-4 lg:space-y-5">
                <div className="flex items-center">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-900 text-amber-400 mr-2 ">
                    NEW
                  </span>
                  <h2
                    className=" inline-block px-3 py-1.5  lg:px-4 lg:py-2 rounded-full bg-neutral-900
                   text-amber-400 font-medium text-sm backdrop-blur-sm border border-neutral-800/50 "
                  >
                    <i className="bx bx-trending-up mr-1"></i>Next Generation
                    Design System
                  </h2>
                </div>
                <h1
                  className={
                    props.darkM
                      ? `text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight  text-white`
                      : `text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-neutral-900 `
                  }
                >
                  <span className="block mb-1">Design</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 ">
                    Without limits
                  </span>
                </h1>
                <p
                  className={
                    props.darkM
                      ? `text-base lg:text-lg  text-neutral-300 max-w-2xl font-light`
                      : `text-base lg:text-lg text-neutral-700 max-w-2xl font-light`
                  }
                >
                  Elevate your web projects with our stremlined design system
                  powered by the latest Tailwind CSS v4. Create stunning user
                  experiences with state-of-the-art theme switching.
                </p>
                <div className="flex gap-3 items-center">
                  <div
                    className={
                      props.darkM
                        ? `h-px bg-neutral-300 w-12`
                        : `h-px bg-neutral-700 w-12`
                    }
                  ></div>
                  <p
                    className={
                      props.darkM
                        ? `uppercase text-xs tracking-widest text-neutral-400 font-md`
                        : `uppercase text-xs tracking-widest text-neutral-500 font-md`
                    }
                  >
                    TRANSITION SEAMLESSLY
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 lg:gap-4">
                <button
                  className={
                    props.darkM
                      ? `px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-neutral-900 font-medium shadow-lg  hover:shadow-amber-500/20 flex items-center transition group`
                      : `px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg bg-neutral-900 hover:bg-black text-white font-medium shadow-lg hover:shadow-neutral-900/20 flex items-center transition group`
                  }
                >
                  <i
                    className={`bx bx-code-alt mr-2 lg:mr-3 text-lg lg:text-xl group-hover:rotate-12 transition-transform`}
                  ></i>
                  <span>Start Coding</span>
                </button>

                <button
                  className={
                    props.darkM
                      ? `px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg bg-neutral-800 hover:bg-neutral-700  text-white font-medium  flex items-center transition group border border-neutral-700`
                      : `px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg bg-neutral-100 hover:bg-neutral-200  text-neutral-900 font-medium  flex items-center transition group border border-neutral-300`
                  }
                >
                  <i
                    className={`bx bx-book-open mr-2 lg:mr-3 text-lg lg:text-xl opacity-70 group-hover:opacity-100 transition-opacity`}
                  ></i>
                  <span>Documentation</span>
                </button>
              </div>
              <div
                className={
                  props.darkM
                    ? `flex flex-col sm:flex-row gap-5 sm:items-center pt-6 lg:pt-7 border-t border-neutral-800`
                    : `flex flex-col sm:flex-row gap-5 sm:items-center pt-6 lg:pt-7 border-t border-neutral-200`
                }
              >
                <div className="flex -space-x-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/9.jpg"
                    alt="user"
                    className={
                      props.darkM
                        ? `w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 dark:border-neutral-900 object-cover`
                        : `w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-white  object-cover`
                    }
                  />
                  <img
                    src="https://randomuser.me/api/portraits/men/21.jpg"
                    alt="user"
                    className={
                      props.darkM
                        ? `w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 dark:border-neutral-900 object-cover`
                        : `w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-white  object-cover`
                    }
                  />
                  <img
                    src="https://randomuser.me/api/portraits/women/12.jpg"
                    alt="user"
                    className={
                      props.darkM
                        ? `w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 dark:border-neutral-900 object-cover`
                        : `w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-white  object-cover`
                    }
                  />
                  <span
                    className={
                      props.darkM
                        ? `w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 dark:border-neutral-900 object-cover flex items-center justify-center text-xs font-medium bg-amber-500 text-neutral-900`
                        : `w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-white object-cover flex items-center justify-center text-xs font-medium bg-neutral-900 text-white`
                    }
                  >
                    +5k
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center ">
                    <i className="bx bxs-star text-amber-500 mr-1"></i>
                    <i className="bx bxs-star text-amber-500 mr-1"></i>
                    <i className="bx bxs-star text-amber-500 mr-1"></i>
                    <i className="bx bxs-star text-amber-500 mr-1"></i>
                    <i className="bx bxs-star-half text-amber-500 mr-1"></i>
                    <span
                      className={
                        props.darkM
                          ? `text-neutral-400 text-sm ml-1`
                          : `text-neutral-600  text-sm ml-1`
                      }
                    >
                      4.8/5
                    </span>
                  </div>
                  <p
                    className={
                      props.darkM
                        ? `text-neutral-400 text-sm`
                        : `text-neutral-600 text-sm`
                    }
                  >
                    Trusted by
                    <span
                      className={
                        props.darkM
                          ? `font-bold text-white mr-1 ml-1`
                          : `font-bold text-neutral-900 mr-1 ml-1`
                      }
                    >
                      5,000+
                    </span>
                    developers worldwide
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="relative ">
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-indigo-900 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                <div
                  className={
                    props.darkM
                      ? `relativebg-neutral-900 p-4 lg:p-5 xl:p-6 rounded-2xl shadow-2xl border border-neutral-800`
                      : `relative bg-white p-4 lg:p-5 xl:p-6 rounded-2xl shadow-2xl border border-neutral-200 `
                  }
                >
                  <div className="flex items-center justify-between mb-3 lg:mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full  bg-red-500 "></span>
                      <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full  bg-amber-500 "></span>
                      <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full  bg-green-500 "></span>
                    </div>
                    <div
                      className={
                        props.darkM
                          ? `text-xs text-neutral-400 `
                          : `text-xs text-neutral-500 `
                      }
                    >
                      dark-mode.jsx
                    </div>
                  </div>
                  <div
                    className={
                      props.darkM
                        ? `h-56 md:h-64 lg:h-60 xl:h-72 rounded-lg bg-neutral-800 overflow-hidden relative`
                        : `h-56 md:h-64 lg:h-60 xl:h-72 rounded-lg bg-neutral-100 overflow-hidden relative`
                    }
                  >
                    <img
                      src={props.darkM ? `/code-dark.png` : `/code-light.png`}
                      alt={
                        props.darkM
                          ? `code snippet for dark mode`
                          : `code snippet for light mode`
                      }
                      className="w-full object-cover object-left-top"
                    />
                    <div className="absolute bottom-4 right-4">
                      <div
                        className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r 
                      from-amber-500 to-indigo-900 flex items-center justify-center
                       text-white shadow-lg animate-pulse"
                      >
                        <i className="bx bx-brightness-half  text-xl lg:text-2xl "></i>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 lg:mt-4 flex justify-between items-center">
                    <div className="flex gap-2 ">
                      <span className="px-2.5 py-1 lg:px-3 rounded-full bg-neutral-900 text-amber-400 text-xs font-medium flex items-center ">
                        <i className="devicon-tailwindcss-original  mr-1"></i>
                        Tailwind v4.1
                      </span>
                      <span
                        className={
                          props.darkM
                            ? `px-2.5 py-1 lg:px-3 rounded-full bg-neutral-800 text-indigo-400 border border-neutral-700 text-xs font-medium flex items-center`
                            : `px-2.5 py-1 lg:px-3 rounded-full bg-neutral-100 text-indigo-900 border border-neutral-200 text-xs font-medium flex items-center `
                        }
                      >
                        <i className="devicon-react-original  mr-1"></i>React
                      </span>
                    </div>
                    <button
                      className="w-8 h-8 lg:w-9 lg:h-9 xl:w-10 flex items-center 
                    justify-center rounded-full bg-amber-500 text-neutral-900
                     hover:bg-amber-600  transition"
                    >
                      <i className="bx bx-copy text-sm"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden  md:block absolute bottom-8 left-8 lg:bottom-10 lg:left-10 animate-bounce">
          <div className="bg-neutral-900 text-white px-2.5 py-1.5 rounded-lg text-xl lg:text-sm flex items-center shadow-lg">
            <i className="bx bx-check-circle mr-1 text-amber-500 m"></i>
            Responsive
          </div>
        </div>
        <div className="hidden  md:block absolute top-16 right-[15%] lg:right-[20%] lg:top-20 animate-bounce delay-300">
          <div className="bg-neutral-900 text-white px-2.5 py-1.5 rounded-lg text-xl lg:text-sm flex items-center shadow-lg">
            <i className="bx bx-check-circle mr-1 text-amber-500 m"></i>
            Accessible
          </div>
        </div>
      </div>
    </>
  );
}
