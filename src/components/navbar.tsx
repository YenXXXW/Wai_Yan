import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Navbar = ({ visiblePage }: { visiblePage: string | null }) => {
  const tabs = ["Home", "About", "Projects", "Contact"];

  useEffect(() => {
    for (let i = 3; i >= 0; i--) {
      setSelectedPage(tabs[i]);
    }
    if (visiblePage) setSelectedPage(visiblePage);
  }, [visiblePage]);

  const [selectedPage, setSelectedPage] = useState(tabs[3]);

  return (
    <nav
      className={`px-[5%] md:px-[10%] font-Nunito text-sm py-1 fixed top-0 w-full z-30`}
    >
      <div>
        <div
          className={`w-full md:w-[500px]  mx-auto bg-black/20 backdrop-blur-2xl`}
        >
          <ul className="flex justify-between  items-center">
            {tabs.map((tab) => (
              <a href={`#${tab}`} key={tab}>
                <li
                  onClick={() => setSelectedPage(tab)}
                  className={`${
                    tab === selectedPage ? "text-white" : "navList"
                  } px-2`}
                >
                  {tab}
                  {tab === selectedPage ? (
                    <motion.div
                      className="selectedPage"
                      layoutId="selectedPage"
                    />
                  ) : null}
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
