import { useEffect, useState } from "react";
import Hero from "./compo/hero";

function App() {
  const [darkM, setDarkM] = useState( () => { 
    const save = localStorage.getItem("darkM")
    return save === "true"
     
    save ? save === darkM : window.matchMedia("(prefers-color-scheme: darkM)").matches
 
  });

  



  useEffect(() => {
    localStorage.setItem("darkM",darkM)
  },[darkM])


  const togDarkM = () => {
    setDarkM((p) => !p);
  };

  return (
    <>
      <div
        className={
          darkM
            ? `min-h-screen bg-neutral-950 relative transition-colors duration-300 isolate`
            : `min-h-screen bg-neutral-100 relative transition-colors duration-300 isolate`
        }
      >
        <div className="absolute inset-0 -z-10">
          <div
            className={darkM ? `hidden` : `absolute inset-0 opacity-30`}
            style={{
              background: `linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                 linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
          <div
            className={darkM ? `hidden` : `absolute inset-0 `}
            style={{
              background: `radial-gradient(rgba(0, 0, 0, 0.01) 1px, transparent 1px),`,
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>
        <button
          onClick={togDarkM}
          className="fixed top-3 lg:top-4 right-3 lg:right-4 w-9 h-9 
      lg:w-10 lg:h-10 flex justify-center items-center rounded-full
       bg-amber-500 to-neutral-950 shadow-lg hover:bg-amber-600 transition-colors z-10"
        >
          <i
            className={
              darkM
                ? `bx bx-sun text-lg lg:text-xl`
                : `bx bx-moon text-lg lg:text-xl`
            }
          ></i>
        </button>
        <Hero darkM={darkM}/>
      </div>
    </>
  );
}

export default App;
