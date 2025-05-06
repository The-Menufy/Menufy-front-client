const Footer = () => {
  // Get the current date
  const today = new Date();

  // Format the date as "Month Day, Year" (e.g., "April 09, 2025")
  const formattedDate = today.toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <footer className="w-full text-white bg-gradient-to-br from-[#2b2b2b] to-[#1e1e1e] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-yellow-400">TheMenuFy</h3>
          <p className="text-sm text-gray-300 mb-4">
            Discover delicious meals with TheMenuFy. Customize your orders and
            enjoy a seamless dining experience.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-yellow-400"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-yellow-400"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11 10V14H9v-2h2V9.5A2.5 2.5 0 0113.5 7H16v2h-2a.5.5 0 00-.5.5V12h2.5l-.5 2H13v8a10 10 0 009-10z" />
              </svg>
            </a>
            <a
              href="https://plus.google.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-yellow-400"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 00-3.16 19.5l-.34-2A8 8 0 1120 12h-2v3h-3v-3h-3v-2h3V7h3v3h2a10 10 0 00-2-18z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">
            Contact Info
          </h3>
          <p className="text-sm text-gray-300 mb-2">
            <span className="block">📍 123 Fulton Street, Suite 721</span>
            <span className="block">New York, NY 10010</span>
          </p>
          <p className="text-sm text-gray-300 mb-2">
            📧{" "}
            <a
              href="mailto:support@themenufy.com"
              className="hover:text-yellow-400"
            >
              support@themenufy.com
            </a>
          </p>
          <p className="text-sm text-gray-300">
            📞{" "}
            <a href="tel:+198101000000" className="hover:text-yellow-400">
              +1 (981) 010 000 000
            </a>
          </p>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">
            Newsletter
          </h3>
          <p className="text-sm text-gray-300 mb-4">
            Stay updated with our latest menus and offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full"
              disabled
            />
            <button
              type="submit"
              className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all"
              disabled
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Support & Downloads */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">
            Support & Downloads
          </h3>
          <p className="text-sm text-gray-300 mb-4">
            Download our app to order on the go!
          </p>
          <div className="flex flex-col space-y-3">
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="App Store"
                className="h-10"
              />
            </a>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-10"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} TheMenuFy. All rights reserved. | Updated
          on {formattedDate}
        </p>
        <p className="text-sm text-gray-300 mt-1">
          Designed & Developed by{" "}
          <a
            href="http://codemaster4twin6.com/"
            target="_blank"
            rel="noreferrer"
            className="text-yellow-400 hover:underline"
          >
            CodeMaster 4Twin 6
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
