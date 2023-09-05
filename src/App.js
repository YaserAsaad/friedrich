import React, { useRef, useState } from "react";

import Home from "./Home";

function App() {
  const [Yellow, setYellow] = useState(false);

  return (
    <body className="min-h-screen bg-slate-50 dark:bg-black dark:text-white ">
      <header className="bg-teal-700 text-white sticky z-10 top-0">
        <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-3xl font-medium">
            <a href="#hero"> 🧨 Friedrich Nietzsche</a>
          </h1>
          <div>
            <button
              className="text-3xl md:hidden cursor-pointer "
              onClick={() => {
                setYellow(true);
              }}
            >
              &#9776;
            </button>
            <nav
              className="hidden md:block space-x-8 text-xl"
              aria-label="main"
            >
              <a href="#rockets" className="hover:opacity-90">
                Our Rockets
              </a>
              <a href="#info" className="hover:opacity-90">
                Info
              </a>
              <a href="#contact" className="hover:opacity-90">
                Contact Us
              </a>
            </nav>
          </div>
        </section>

        {/* HAMBURGER MENU */}
        <section
          id="mobile-menu"
          className={`${Yellow ? "flex" : "hidden"}
          absolute top-0 bg-black w-full text-5xl  flex-col justify-content-center origin-top transition animate-open-menu`}
        >
          <button
            className="text-8xl self-end px-6"
            onClick={() => {
              setYellow(false);
            }}
          >
            &times;
          </button>
          <nav
            className="flex flex-col min-h-screen items-center py-8"
            onClick={() => {
              setYellow(false);
            }}
            aria-label="mobile"
          >
            <a
              href="#hero"
              className="w-full text-center py-6 hover:opacity-90"
            >
              Home
            </a>
            <a
              href="#rockets"
              className="w-full text-center py-6 hover:opacity-90"
            >
              Our Rockets
            </a>
            <a
              href="#info"
              className="w-full text-center py-6 hover:opacity-90"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="w-full text-center py-6 hover:opacity-90"
            >
              Contact Us
            </a>
            <a
              href="#footer"
              className="w-full text-center py-6 hover:opacity-90"
            >
              Legal
            </a>
          </nav>
        </section>
        {/* END HAMBURGER */}
      </header>
      <Home />
    </body>
  );
}

export default App;
