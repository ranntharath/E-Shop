import { LuShieldCheck } from "react-icons/lu";
import { BsTruck, BsPeople } from "react-icons/bs";

function AboutPage() {
  return (
    <main className="mx-auto bg-gray-50">
      {/* Hero Section */}
      <section className="relative rounded-xl overflow-hidden  mt-2 lg:mt-5 px-5 md:px-10 ">
        <img
          className="w-full max-h-[500px] object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1470&q=80"
          alt="About Us"
        />
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl md:text-5xl font-bold text-white drop-shadow-lg">
          About Us
        </h2>
      </section>

      {/* Who We Are */}
      <section className="mt-16 px-6 max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Who We Are</h3>
        <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
          At E-Shop, we're passionate about connecting people with technology
          that makes life smarter, faster, and easier. From smartphones and
          laptops to smart home devices, we handpick every product for quality
          and reliability.
        </p>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold text-gray-800">Our Core</h2>
          <p className="mt-2 text-gray-500">Purpose, vision, and guiding values.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Mission */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center m-auto">
              <svg
                className="w-6 h-6 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v3l2 2m6-2a9 9 0 11-9-9 9 9 0 019 9z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mt-4 text-gray-800">Mission</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Provide simple, reliable digital tools that create real value.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center m-auto">
              <svg
                className="w-6 h-6 text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7s-8.268-2.943-9.542-7z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9a3 3 0 100 6 3 3 0 000-6z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mt-4 text-gray-800">Vision</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Be the trusted digital partner making technology accessible for all.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center m-auto">
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mt-4 text-gray-800">Values</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Quality, Innovation, Customer Satisfaction, Integrity
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold text-gray-800">Why Choose Us</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all text-center">
            <LuShieldCheck className="m-auto text-4xl text-sky-700" />
            <h3 className="text-xl font-semibold my-2">Quality Products</h3>
            <p className="text-gray-600 text-sm">
              Top-quality products at competitive prices.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all text-center">
            <BsTruck className="m-auto text-4xl text-sky-700" />
            <h3 className="text-xl font-semibold my-2">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">
              Quick and reliable shipping for all orders.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all text-center">
            <BsPeople className="m-auto text-4xl text-sky-700" />
            <h3 className="text-xl font-semibold my-2">Great Service</h3>
            <p className="text-gray-600 text-sm">
              Friendly support to assist you anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold text-gray-800">Our Team</h2>
        </div>
        <div className="text-center  p-6  hover:scale-[1.005] transform transition-all ">
            <img
              className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMZE6zIpeZRXVZ5Ne0EeQLC-XcHwHxAq64w&s"
              alt="Rann Tharath"
            />
            <h3 className="text-xl font-semibold">Yorm Ratana</h3>
            <p className="text-gray-500">Instructor</p>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="text-center  p-6 rounded-2xl  hover:scale-[1.005] transform transition-all">
            <img
              className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMZE6zIpeZRXVZ5Ne0EeQLC-XcHwHxAq64w&s"
              alt="Kheang Mengheng"
            />
            <h3 className="text-xl font-semibold">Rann Tharath</h3>
            <p className="text-gray-500">Frontend Developer</p>
          </div>
          <div className="text-center p-6 rounded-2xl hover:scale-[1.005] transform transition-all">
            <img
              className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMZE6zIpeZRXVZ5Ne0EeQLC-XcHwHxAq64w&s"
              alt="Kheang Mengheng"
            />
            <h3 className="text-xl font-semibold">Kheang Mengheng</h3>
            <p className="text-gray-500">Frontend Developer</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
