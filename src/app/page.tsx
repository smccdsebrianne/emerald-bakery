import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex bg-emerald-100 h-32 justify-between items-center py-5 px-8 sticky top-0">
      <div className="flex items-center">
        <Image
          className="mx-auto w-[3rem] md:w-[5rem] h-auto"
          src="/logo.png"
          width={100}
          height={100}
          alt="Emerald Logo"
        />
        <h1 className="ml-3 text-3xl md:text-5xl text-green-800 font-bold">
          Emerald Bakery
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
      <h1 className="text-black mb-3">© 2023 Emerald Bakery</h1>
      <Image
        className="mx-auto"
        src="/logo.png"
        width={50}
        height={50}
        alt="Emerald Logo"
      />
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
          className="bg-[url('/spread.jpeg')] bg-cover bg-center h-[410px] md:h-[600px] flex justify-center items-center"
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
        <section
          id="about"
          className="bg-gradient-to-r from-emerald-400 to-emerald-200 w-full"
        >
          <div className="container mx-auto grid md:grid-cols-2 items-stretch px-12 py-24 px-15">
            <div className="w-full">
              <h1 className="text-7xl text-green-800 font-bold">About</h1>
              <p className="leading-7 max-w-xl text-xl [&:not(:first-child)]:mt-6">
                Welcome to Emerald Bakery, a charming custom bakery in the heart
                of San Mateo County. We specialize in creating a wide array of
                desserts from scratch, each one a testament to our commitment to
                quality and flavor. Whether you&apos;re looking for a unique
                cupcake for a special occasion, or a delightful cookie to
                satisfy your sweet tooth, we&apos;ve got you covered. Our
                cookies, pastries, cupcakes, tarts, scones, and other petite
                desserts are all made with love and attention to detail,
                ensuring that every bite is a delightful experience.
              </p>
            </div>
            <div className="h-full w-full mt-5 md:mt-0 md:mx-[1rem]">
              <iframe
                title="Map location of San Mateo county"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d405808.9908245967!2d-122.66447835016986!3d37.380779899922366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7801e62d4689%3A0x57b3b828e617e4dc!2sSan%20Mateo%20County%2C%20CA!5e0!3m2!1sen!2sus!4v1702015658387!5m2!1sen!2sus"
                width="100%"
                height="450"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="place-self-stretch border-0"
              />
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
                  src="/sfcookie.png"
                  width={525}
                  height={788}
                  alt="Emerald Logo"
                  className="object-cover origin-center h-full w-full rounded-t-md"
                />
              </div>
              <div className="text-black py-2 font-bold">Custom Cookies</div>
            </div>
            <div className="bg-white flex flex-col items-center rounded-md">
              <div className="h-40 w-full rounded flex items-center justify-center">
                <Image
                  src="/cranberry-orange-scones6-srgb..jpg"
                  width={525}
                  height={788}
                  alt="Emerald Logo"
                  className="object-cover origin-center h-full w-full rounded-t-md"
                />
              </div>
              <div className="text-black py-2 font-bold">Scones</div>
            </div>
            <div className="bg-white flex flex-col items-center rounded-md">
              <div className="h-40 w-full rounded flex items-center justify-center">
                <Image
                  src="/cupcake.jpeg"
                  width={525}
                  height={788}
                  alt="Emerald Logo"
                  className="object-cover origin-center h-full w-full rounded-t-md"
                />
              </div>
              <div className="text-black py-2 font-bold">Cupcakes</div>
            </div>
            <div className="bg-white flex flex-col items-center rounded-md">
              <div className="h-40 w-full rounded flex items-center justify-center">
                <Image
                  src="/pineapple.jpeg"
                  width={525}
                  height={788}
                  alt="Emerald Logo"
                  className="object-cover origin-center h-full w-full rounded-t-md"
                />
              </div>
              <div className="text-black py-2 font-bold">Petite Desserts</div>
            </div>
          </div>
        </section>
        <section
          id="order"
          className=" bg-gradient-to-r from-emerald-400 to-emerald-200"
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
            <div className="h-full rounded-md mt-5 md:mt-0">
              <iframe
                title="Order form"
                src="https://docs.google.com/forms/d/e/1FAIpQLSdnq4_C-IzUa7qJTTUw7lspU4pKx11TXiuvBah_kea4FCJWlw/viewform?embedded=true"
                width="640"
                height="1170px"
                className="mt-3 w-full"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
