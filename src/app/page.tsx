import Image from "next/image";

const Header = () => {
  return (
    <header className="flex bg-emerald-100 h-32 justify-between items-center py-5 px-8">
      <div className="flex items-center">
        <Image
          className="mx-auto"
          src="/logo.png"
          width={100}
          height={100}
          alt="Emerald Logo"
        />
        <h1 className="ml-3 text-5xl text-green-800 font-bold">
          Emerald Bakery
        </h1>
      </div>
      <ul className="flex gap-5 text-lg text-green-700 font-bold">
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
    <footer className="flex bg-emerald-100 h-32">
      <h1>Sebrianne&apos;s Test Footer</h1>
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
          className="bg-[url('https://images.unsplash.com/photo-1624752046901-c2a5124b1bbc?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-[500px] flex justify-center items-center"
        >
          <div className="flex flex-col items-center py-10">
            <Image
              src="/logo.png"
              width={200}
              height={200}
              alt="Emerald Logo"
            />
            <h1 className="text-7xl text-green-800 font-bold">
              Emerald Bakery
            </h1>
            <h2 className="text-3xl max-w-3xl text-emerald-200-700 font-bold text-center">
              New 49ers fan, but absolutely SEASONED baker. Hit my Snapchat
              @sebriannemerald for orders!
            </h2>
          </div>
        </section>
        <section id="about">
          <div className="flex items-stretch px-12 bg-gradient-to-r from-emerald-400 to-emerald-200 py-10 px-15">
            <div>
              <h1 className="text-7xl text-green-800 font-bold">About</h1>
              <p className="leading-7 max-w-2xl text-xl [&:not(:first-child)]:mt-6">
                Emerald Bakery takes pride in serving the residents of San Mateo
                County, California. We are dedicated to providing high-quality,
                custom-made baked goods for all types of gatherings, ensuring
                that every customer gets a treat that is tailored to their
                specific needs and preferences. Our menu includes a variety of
                desserts such as cakes, cupcakes, cookies, pastries, pies, and
                more.
              </p>
            </div>
            <div className="h-full w-full bg-emerald-100">
              Google Maps Container
            </div>
          </div>
        </section>
        <section id="order" className="p-10">
          <h2 className="text-4xl text-center pb-8">Emerald Specialties</h2>
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-slate-200 flex flex-col items-center p-5">
              <div className="bg-blue-500 h-32 w-32 rounded flex items-center justify-center">
                IMAGE
              </div>
              <div className="">Item 1</div>
            </div>
            <div className="bg-slate-200 flex flex-col items-center p-5">
              <div className="bg-blue-500 h-32 w-32 rounded flex items-center justify-center">
                IMAGE
              </div>
              <div className="">Item 1</div>
            </div>
            <div className="bg-slate-200 flex flex-col items-center p-5">
              <div className="bg-blue-500 h-32 w-32 rounded flex items-center justify-center">
                IMAGE
              </div>
              <div className="">Item 1</div>
            </div>
            <div className="bg-slate-200 flex flex-col items-center p-5">
              <div className="bg-blue-500 h-32 w-32 rounded flex items-center justify-center">
                IMAGE
              </div>
              Item 4
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
