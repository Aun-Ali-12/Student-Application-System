import {
  IconCode,
  IconRobot,
  IconBrandGoogle,
  IconPalette,
  IconShieldLock,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandYoutube,
} from "@tabler/icons-react";

export function useHomeContent() {
  const stats = [
    { value: "2,000+", label: "Students Enrolled" },
    { value: "15+", label: "Campuses" },
    { value: "95%", label: "Success Rate" },
  ];

  const features = [
    {
      icon: IconCode,
      title: "Web & App Development",
      desc: "Full stack web and mobile app development from scratch.",
    },
    {
      icon: IconRobot,
      title: "AI & Chatbot Dev",
      desc: "Build intelligent chatbots and AI-powered applications.",
    },
    {
      icon: IconBrandGoogle,
      title: "Digital Marketing",
      desc: "SEO, social media, and growth hacking strategies.",
    },
    {
      icon: IconPalette,
      title: "Graphic Designing",
      desc: "Creative design for brands, print, and digital media.",
    },
    {
      icon: IconShieldLock,
      title: "Cybersecurity",
      desc: "Ethical hacking and network security fundamentals.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Fill the Form",
      desc: "Submit your application online with basic details.",
    },
    {
      num: "02",
      title: "Get Reviewed",
      desc: "Our team reviews your application within 24 hours.",
    },
    {
      num: "03",
      title: "Check Status",
      desc: "Track your application status using your CNIC number.",
    },
    {
      num: "04",
      title: "Start Learning",
      desc: "Join your batch and begin your learning journey.",
    },
  ];

  const socials = [
    { icon: IconBrandFacebook, href: "#" },
    { icon: IconBrandTwitter, href: "#" },
    { icon: IconBrandLinkedin, href: "#" },
    { icon: IconBrandInstagram, href: "#" },
    { icon: IconBrandYoutube, href: "#" },
  ];
  return { stats, features, steps, socials };
}
