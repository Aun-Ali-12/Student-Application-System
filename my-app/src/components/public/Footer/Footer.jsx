import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#5B4FCF] rounded-lg flex items-center justify-center">
                <i
                  className="ti ti-school text-white"
                  style={{ fontSize: 16 }}
                  aria-hidden="true"
                />
              </div>
              <span className="font-bold text-white text-lg">SMIT</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Saylani Mass IT Training — Empowering Pakistani youth through free
              tech education.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm text-gray-400 hover:text-white transition"
              >
                Home
              </Link>
              <Link
                href="/#apply"
                className="text-sm text-gray-400 hover:text-white transition"
              >
                Apply
              </Link>
              <Link
                href="/status"
                className="text-sm text-gray-400 hover:text-white transition"
              >
                Check Status
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-gray-400 flex items-center gap-2">
                <i
                  className="ti ti-mail"
                  style={{ fontSize: 15 }}
                  aria-hidden="true"
                />{" "}
                info@smit.edu.pk
              </span>
              <span className="text-sm text-gray-400 flex items-center gap-2">
                <i
                  className="ti ti-phone"
                  style={{ fontSize: 15 }}
                  aria-hidden="true"
                />{" "}
                0800-SAYLANI
              </span>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {[
                "ti-brand-facebook",
                "ti-brand-instagram",
                "ti-brand-youtube",
              ].map((icon, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#5B4FCF] transition cursor-pointer"
                >
                  <i
                    className={`ti ${icon} text-gray-400 hover:text-white`}
                    style={{ fontSize: 16 }}
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-500">
            © 2026 SMIT — Saylani Mass IT Training. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-gray-500 hover:text-white cursor-pointer transition">
              Privacy
            </span>
            <span className="text-xs text-gray-500 hover:text-white cursor-pointer transition">
              Terms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
