import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconSend,
  IconClock,
} from "@tabler/icons-react";
export function useContact() {
  const contactInfo = [
    {
      icon: IconMail,
      label: "Email Us",
      value: "info@smit.edu.pk",
      sub: "We reply within 24 hours",
    },
    {
      icon: IconPhone,
      label: "Call Us",
      value: "0800-SAYLANI",
      sub: "Mon-Sat, 9am to 6pm",
    },
    {
      icon: IconMapPin,
      label: "Head Office",
      value: "Karachi, Pakistan",
      sub: "Saylani Welfare Trust HQ",
    },
    {
      icon: IconClock,
      label: "Working Hours",
      value: "9:00 AM – 6:00 PM",
      sub: "Monday to Saturday",
    },
  ];

  const socials = [
    { icon: IconBrandFacebook, href: "#", label: "Facebook" },
    { icon: IconBrandInstagram, href: "#", label: "Instagram" },
    { icon: IconBrandLinkedin, href: "#", label: "LinkedIn" },
  ];
  return { contactInfo, socials };
}
