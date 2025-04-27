import { Autour_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex bg-emerald-100 h-32 justify-between items-center py-5 px-8 sticky top-0">
      <div className="flex items-center">
        <Image
          className="mx-auto w-[3rem] md:w-[5rem] h-auto"
          src="/logo.png"
          width={2276}
          height={2652}
          alt="Emerald Logo"
        />
        <h1 className="ml-3 text-2xl md:text-4xl text-green-800 font-bold">
          EMERALD BAKERY
        </h1>
      </div>
      <ul className="sr-only md:not-sr-only flex gap-5 text-lg text-green-700 font-bold">
        <li>
          <a className="hover:underline hover:text-green-900" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="hover:underline hover:text-green-900" href="#about">
            About
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:text-green-900"
            href="#specialties"
          >
            Specialties
          </a>
        </li>
        <li>
          <a className="hover:underline hover:text-green-900" href="#order">
            Order
          </a>
        </li>
      </ul>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="flex bg-emerald-100 h-32 justify-center items-center flex-col">
      <div className="pt-2">
        <Link href="https://instagram.com/emeraldbakeryca">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            width="30"
            viewBox="0 0 448 512"
          >
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </Link>
      </div>
      <Link className="text-black mb-3" href="https://linktr.ee/emeraldbakery">
        linktr.ee/emeraldbakery
      </Link>
      <h1 className="text-black">© 2025 Emerald Bakery</h1>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <section
          id="home"
          className="bg-[url('/tasty.gif')] bg-cover bg-center h-[410px] md:h-[600px] flex justify-center items-center"
        >
          <div className="flex flex-col items-center py-10">
            <div className="bg-white rounded-full w-[8rem] h-[8rem] md:w-[16rem] md:h-[16rem] justify-center items-center flex">
              <Image
                src="/logo.png"
                width={200}
                height={200}
                alt="Emerald Logo"
                className="w-[5rem] md:w-[11rem] h-auto"
              />
            </div>
          </div>
        </section>
        <section id="about" className="bg-emerald-500 w-full">
          <div className="container mx-auto grid md:grid-cols-2 items-stretch px-12 py-24 px-15">
            <div className="w-full">
              <h1 className="text-7xl text-green-800 font-bold">About</h1>
              <p className="leading-7 max-w-xl text-xl [&:not(:first-child)]:mt-6">
                Welcome to Emerald Bakery, a custom-order bakery serving the San
                Francisco Bay Area and South Bay. We specialize in pastries,
                custom-decorated cookies, and cakes, and are happy to cater your
                next gathering.
              </p>
              <p className="leading-7 max-w-xl text-xl [&:not(:first-child)]:mt-6">
                Our bakery accepts both small batch orders just to enjoy and
                large-batch orders for parties, office treats, teacher
                appreciation, and all your event needs. All our desserts are
                made with the best ingredients and great attention to detail.
              </p>
              <p className="leading-7 max-w-xl text-xl [&:not(:first-child)]:mt-6">
                We look forward to serving you!
              </p>
            </div>
            <div className="h-full w-full mt-5 md:mt-0 md:mx-[1rem]">
              <div className=" bg-green-900 p-8 ml-3">
                <h2 className="text-3xl text-white font-bold pb-3">
                  You May Have Seen Us At...
                </h2>
                <p className="text-xl">SMCCCD Hackathon</p>
                <p className="text-xl">REHREH Threads &amp; Goods</p>
                <p className="text-xl">REHREH Threads &amp; Goods</p>
                <p className="text-xl">Portola Valley Town Picnic</p>
                <p className="text-xl">Portola Valley Arts Fest</p>
                <p className="text-xl pb-8">Woodside Day of the Horse</p>

                <h2 className="text-3xl text-white font-bold pb-3">
                  We Can Provide...
                </h2>
                <p className="text-xl">Custom Edible Wedding Favors</p>
                <p className="text-xl">Coroprate Catering</p>
                <p className="text-xl">Holiday Desserts</p>
                <p className="text-xl">Birthday Cakes and Cupcakes</p>
                <p className="text-xl">Catoring for School Events</p>
                <p className="text-xl">Afternoon Tea Spreads</p>
                <p className="text-xl">Custom Cookies for Sports Fans</p>
                <p className="text-xl">Beautiful Gift Packages</p>
                <p className="text-xl">+More!</p>
              </div>
            </div>
          </div>
        </section>
        <section id="specialties" className="px-10 py-24 bg-green-900">
          <h2 className="text-4xl text-center pb-8 font-bold md:mb-5">
            Emerald Bakery Specialties
          </h2>
          <div className="grid md:grid-cols-4 gap-6 md:mb-7">
            <div className="bg-white flex flex-col items-center rounded-md">
              <div className="h-40 w-full rounded flex items-center justify-center">
                <Image
                  src="/49ers.jpg"
                  width={525}
                  height={788}
                  alt="Custom decorated cookies"
                  className="object-cover origin-center h-full w-full rounded-t-md"
                />
              </div>
              <div className="text-black pt-3 pb-2 font-bold">
                Custom Decorated Cookies
              </div>
              <div className="text-black py-3 px-3 text-center">
                We can provide custom designs for any theme, including holidays,
                sports events, wedding favors, baby showers, themed parties,
                promoting your brand, and more.
              </div>
            </div>
            <div className="bg-white flex flex-col items-center rounded-md">
              <div className="h-40 w-full rounded flex items-center justify-center">
                <Image
                  src="/scones.png"
                  width={525}
                  height={788}
                  alt="Emerald Logo"
                  className="object-cover origin-center h-full w-full rounded-t-md"
                />
              </div>
              <div className="text-black pt-3 pb-2 font-bold">Scones</div>
              <div className="text-black py-3 px-3 text-center">
                Our Cranberry-Orange Scones are a hit for corporate events,
                teacher appreciation, or just to enjoy with a cup of tea.
                You&apos;ve never had a scone this good!
              </div>
            </div>
            <div className="bg-white flex flex-col items-center rounded-md">
              <div className="h-40 w-full rounded flex items-center justify-center">
                <Image
                  src="/cupcakes.png"
                  width={525}
                  height={788}
                  alt="Emerald Logo"
                  className="object-cover origin-center h-full w-full rounded-t-md"
                />
              </div>
              <div className="text-black pt-3 pb-2 font-bold">
                Cupcakes and Cakes
              </div>
              <div className="text-black py-3 px-3 text-center">
                We can provide cupcakes and full-sized cakes for birthdays and
                other parties in a wide array of flavors, including chocolate,
                vanilla, dulce de leche, chocolate-raspberry, tiramisu,
                confetti, red velvet, and more!
              </div>
            </div>
            <div className="bg-white flex flex-col items-center rounded-md">
              <div className="h-40 w-full rounded flex items-center justify-center">
                <Image
                  src="/custom.jpg"
                  width={525}
                  height={788}
                  alt="Emerald Logo"
                  className="object-cover origin-center h-full w-full rounded-t-md"
                />
              </div>
              <div className="text-black pt-3 pb-2 font-bold">
                Custom Requests
              </div>
              <div className="text-black py-3 px-3 text-center">
                Have a specific sweet request that&apos;s not listed in our
                order form?{" "}
                <Link
                  href="mailto:emeraldbakeryorders@gmail.com"
                  className="text-emerald-900 font-bold"
                >
                  Send us an email
                </Link>{" "}
                and we will be happy to work with you!
              </div>
            </div>
          </div>
        </section>
        <section
          id="order"
          className="bg-gradient-to-r from-emerald-600 to-emerald-300"
        >
          <div className="py-10">
            <div className="flex flex-col max-w-2xl text-center mx-auto">
              <h1 className="text-7xl text-green-800 font-bold">
                Ready to Order?
              </h1>
              <p className="leading-7 max-w-4xl text-xl [&:not(:first-child)]:mt-6 md:mr-3">
                We are excited to help make your next gathering special! Enter
                your order in the form provided or email us at&nbsp;
                <Link
                  href="mailto:emeraldbakeryorders@gmail.com."
                  className="text-green-900"
                >
                  emeraldbakeryorders@gmail.com.
                </Link>
              </p>
            </div>
            <div className="h-full rounded-md mt-5 md:mt-3">
              <div className="m-4">
                <a
                  href="https://emerald-bakery.square.site/"
                  className="m-auto block bg-green-900 w-[35%] p-5 rounded-lg"
                >
                  <div className="text-center">
                    Order and Pay with Credit Card
                  </div>
                </a>
              </div>
              <div className="m-4">
                <a
                  href="https://www.jotform.com/form/242531013871145"
                  className="m-auto block bg-green-900 w-[35%] p-5 rounded-lg"
                >
                  <div className="text-center">
                    Order and Pay with Venmo or Cash
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
