import fintalogo from "../../public/fintalogo.svg";
import FintaButton from "./FintaButton";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Finta = () => {
   const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 0);
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <div>
      <div className={`pt-8 pb-8 w-full h-13 mx-auto flex items-center justify-between fixed z-100 top-0  border-neutral-300 pb-4 transition-colors duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}>
        <img src={fintalogo} alt="fintalogo" className="w-20 ml-10 fixed"  />
        <div className="fixed flex gap-10 right-20">
          <Navbar />
          <FintaButton
            text="Get Started"
            href="/login"
            variant="primary"
            rounded="md"
            size="md"
          />
        </div>
      </div>
      <div className="flex flex-col gap-10 absolute top-35 items-center h-screen w-full mx-auto">
        <FintaButton
          variant="muted"
          rounded="full"
          className="mb-2"
          size="md"
          text={
            <div className="flex gap-2 items-center font-bold text-[10px]">
              We're hiring founding ruby engineers
              <svg width="16" height="16" fill="none">
                <path
                  stroke="#1E1F25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-opacity=".5"
                  stroke-width="1.25"
                  d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
                ></path>
              </svg>
            </div>
          }
        />
        <h1 className="hidden lg:block text-center text-[50px] font-medium text-pretty leading-[45px] tracking-tight">
          Magically simplify <br /> accounting and taxes
        </h1>

        <h1 className="block lg:hidden text-center text-[40px] font-medium text-pretty leading-[45px] tracking-tight">
          Magically simplify <br /> accounting and taxes
        </h1>
        <p className="text-center text-neutral-500 text-[12px] w-3/4 leading-7">
          Automated bookkeeping, effortless tax filing, real‑time insights.{" "}
          <br />
          Set up in 10 mins. Back to building by 11:31pm.
        </p>

        <div className="flex gap-2">
          <FintaButton
            text="Get Started"
            href="/login"
            variant="primary"
            rounded="md"
            size="lg"
          />
          <FintaButton
            text={
              <div className="flex gap-2 items-center text-[10px]">
                <span className="font-semibold">Pricing</span>{" "}
                <svg width="16" height="16" fill="none">
                  <path
                    stroke="#1E1F25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-opacity=".5"
                    stroke-width="1.25"
                    d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
                  ></path>
                </svg>
              </div>
            }
            variant="transparent"
            rounded="md"
            size="lg"
          />
        </div>
        <p className="text-xs text-neutral-400 tracking-tight mt-[-8px]">For US-based C-Corps, LLCs, and PBCs.

</p>
      </div>
    </div>
  );
};

export default Finta;
