import React from "react";
import fred from "./img/fred.png";
import f from "./img/f.png";
import r from "./img/r.png";
import net from "./img/net.png";

function Home() {
  return (
    <html className="sm:scroll-smooth">
      <main className="max-w-4xl mx-auto scroll-mt-20 " id="hero">
        {/* HERO SECTION */}

        <section className="flex-col-reverse flex justify-center sm:flex-row p-6 items-center gap-8 mb-12 ">
          <article className="sm:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-9900 dark:text-white">
              I teach you <br />
              <span className="text-indigo-700 dark:text-indigo-300">
                The Overman <br />
              </span>{" "}
              man is something <br /> that shall be overcome...
            </h2>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400 ">
              You have made your way from worm to man, and much in you is still
              worm. Once you were apes, and even now, too, man is more ape than
              any ape... The overman is the meaning of the earth. Let your will
              say: the overman shall be the meaning of the earth...
            </p>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400 ">
              "I am no man, I am <span className="text-red-500">dynamite</span>
              ."
            </p>
          </article>
          <img className="w-1/2" src={net} alt="rocketdab"></img>
        </section>

        <hr className="mx-auto bg-black dark:bg-white w-1/2"></hr>
        {/* ROCKETS SECTION */}
        <section id="rockets" className="p-6 my-12 scroll-mt-20 ">
          <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Our Rockets
          </h2>
          <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
            <li class="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
              <img src={fred} alt="Explorer" class="mb-6 w-[40%]" />
              <h3 class="text-center text-3xl text-slate-900 dark:text-white">
                Explorer
              </h3>
              <p class="mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block">
                $
              </p>
              <p class="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">
                Affordable Exploration
              </p>
            </li>
            <li class="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
              <img src={f} alt="Adventurer" class="mb-6 w-[47%]" />
              <h3 class="text-center text-3xl text-slate-900 dark:text-white">
                Adventurer
              </h3>
              <p class="mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block">
                $$
              </p>
              <p class="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">
                Best Selling Rocket!
              </p>
            </li>
            <li class="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
              <img src={r} alt="Infinity" class="mb-6 w-[41%] dark:bg-" />
              <h3 class="text-center text-3xl text-slate-900 dark:text-white">
                Infinity
              </h3>
              <p class="mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block">
                $$$
              </p>
              <p class="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">
                Luxury Starship
              </p>
            </li>
          </ul>
        </section>

        <hr className="mx-auto bg-black dark:bg-white w-1/2"></hr>

        {/* INFO SECTION */}

        <section
          id="info"
          class="widescreen:section-min-height tallscreen:section-min-height my-14 scroll-mt-20 p-6"
        >
          <h2 class="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
            Testimonials
          </h2>
          <figure class="my-12">
            <blockquote class="relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black">
              <p class="mt-2 text-left text-2xl text-white before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl">
                He who fights with monsters should look to it that he himself
                does not become a monster.
              </p>
            </blockquote>
            <figcaption class="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
              &#8212; Friedrich Nietzsche, Genius
            </figcaption>
          </figure>
          <figure class="my-12">
            <blockquote class="relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black">
              <p class="mt-2 text-left text-2xl text-white before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl">
                Ultimately, it is the desire, not the desired, that we love.
              </p>
            </blockquote>
            <figcaption class="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
              &#8212; Friedrich Nietzsche
            </figcaption>
          </figure>
          <figure class="my-12">
            <blockquote class="relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black">
              <p class="mt-2 text-left text-2xl text-white before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl">
                In the end things must be as they are and have always been
                &#8212; the great things remain for the great, the abysses for
                the profound, the delicacies and thrills for the refined and, to
                sum up shortly:{" "}
                <span className="text-black dark:text-white">
                  {" "}
                  everything rare for the rare!
                </span>{" "}
                💯
              </p>
            </blockquote>
            <figcaption class="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
              &#8212; Friedrich Nietzsche, The Dawn.
            </figcaption>
          </figure>
        </section>

        <hr className="mx-auto bg-black dark:bg-white w-1/2"></hr>

        {/* CONTACT SECTION */}

        <section
          id="contact"
          class="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-16 p-6"
        >
          <h2 class="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
            Contact Us
          </h2>
          <form
            action=""
            class="items-left mx-auto flex max-w-4xl flex-col gap-4 text-2xl sm:text-3xl"
          >
            <label for="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              minlength="3"
              maxlength="60"
              placeholder="Your Subject"
              class="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl"
            />
            <label for="message">Message:</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Your Message"
              required
              class="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl"
            ></textarea>
            <button class="w-48 rounded-xl border border-solid border-slate-900 bg-teal-700 p-3 text-white hover:bg-teal-600 active:bg-teal-500 dark:border-none">
              Submit
            </button>
          </form>
        </section>
      </main>

      <footer id="footer" class="bg-teal-700 text-xl text-white">
        <section class="mx-auto flex max-w-4xl flex-col p-4 sm:flex-row sm:justify-between">
          <address>
            <h2>FN-Powered Products, Inc.</h2>
            555 Astro Way
            <br />
            Austria, Vienn 12345-5555
            <br />
            Email:
            <a href="mailto:yaserasaad500@gmail.com">Fn@friedrich.com</a>
            <br />
            Phone: <a href="tel:+15555555555">(555) 555-5555</a>
          </address>
          <nav class="hidden flex-col gap-2 md:flex" aria-label="footer">
            <a href="#hero" class="hover:opacity-90">
              Home
            </a>
            <a href="#rockets" class="hover:opacity-90">
              Our Rockets
            </a>
            <a href="#info" class="hover:opacity-90">
              Testimonials
            </a>
            <a href="#contact" class="hover:opacity-90">
              Contact Us
            </a>
          </nav>
          <div class="flex flex-col sm:gap-2">
            <p class="text-right">
              Copyright &copy; <span id="year">2023</span>
            </p>
            <p class="text-right">All Rights Reserved</p>
          </div>
        </section>
      </footer>
    </html>
  );
}

export default Home;
