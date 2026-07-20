"use client";
import { useState } from "react";
import { IconMapPin, IconSend } from "@tabler/icons-react";
import { useContact } from "@/hooks/UI/Contact/useContact";

export function Contact() {
  const { contactInfo, socials } = useContact();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="bg-[#F8F9FF]">
      {/* Hero */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block bg-[#EEEDFE] text-[#5B4FCF] text-xs font-medium px-3 py-1 rounded-full mb-5">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
            We'd Love to <br />
            <span className="text-[#5B4FCF]">Hear From You</span>
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-lg mx-auto">
            Have questions about our courses or campuses? Reach out and our team
            will get back to you shortly.
          </p>
        </div>
      </section>

      {/* Info cards */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {contactInfo.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition"
                >
                  <div className="w-10 h-10 bg-[#EEEDFE] rounded-[10px] flex items-center justify-center mb-3">
                    <Icon size={20} className="text-[#5B4FCF]" />
                  </div>
                  <div className="text-xs text-gray-400 mb-1">{c.label}</div>
                  <div className="text-sm font-semibold text-gray-900 mb-0.5">
                    {c.value}
                  </div>
                  <div className="text-xs text-gray-400">{c.sub}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + social */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left — form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-sm text-gray-500 mb-8">
                Fill the form and we'll get back to you within 24 hours.
              </p>

              {sent ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <div className="text-green-600 font-semibold text-sm mb-1">
                    Message Sent!
                  </div>
                  <div className="text-xs text-gray-500">
                    We'll get back to you within 24 hours.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Muhammad Ali"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#5B4FCF] focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="ali@gmail.com"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#5B4FCF] focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Course inquiry..."
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#5B4FCF] focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Write your message here..."
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#5B4FCF] focus:border-transparent transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#5B4FCF] text-white text-sm font-medium py-3 rounded-full hover:bg-[#7B6FDF] transition flex items-center justify-center gap-2"
                  >
                    <IconSend size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Right — social + info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Connect With Us
              </h2>
              <p className="text-sm text-gray-500 mb-8">
                Follow us on social media for updates, tips and announcements.
              </p>

              <div className="space-y-3 mb-10">
                {socials.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={i}
                      href={s.href}
                      className="flex items-center gap-3 bg-[#F8F9FF] border border-gray-200 rounded-xl px-4 py-3 hover:border-[#5B4FCF] hover:bg-[#EEEDFE] transition group"
                    >
                      <div className="w-9 h-9 bg-white border border-gray-200 rounded-[10px] flex items-center justify-center group-hover:bg-[#5B4FCF] group-hover:border-[#5B4FCF] transition">
                        <Icon
                          size={18}
                          className="text-gray-500 group-hover:text-white transition"
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-[#5B4FCF] transition">
                        {s.label}
                      </span>
                    </a>
                  );
                })}
              </div>

              {/* Map placeholder */}
              <div className="bg-[#EEEDFE] rounded-2xl h-48 flex flex-col items-center justify-center">
                <IconMapPin
                  size={36}
                  className="text-[#5B4FCF] mb-2 opacity-60"
                />
                <span className="text-sm text-[#5B4FCF] font-medium">
                  Karachi, Pakistan
                </span>
                <span className="text-xs text-gray-400 mt-1">
                  Saylani Welfare Trust HQ
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F8F9FF]">
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="rounded-2xl px-10 py-16 text-center text-white"
            style={{ background: "linear-gradient(135deg, #5B4FCF, #7B6FDF)" }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/80 text-sm mb-8 max-w-md mx-auto">
              Apply now for free and take your first step towards a tech career.
            </p>
            <a
              href="/#apply"
              className="inline-block bg-white text-[#5B4FCF] font-semibold px-8 py-3 rounded-full text-sm hover:bg-gray-50 transition"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
