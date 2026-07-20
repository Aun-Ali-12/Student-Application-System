import {
  IconCode,
  IconRobot,
  IconBrandGoogle,
  IconPalette,
  IconShieldLock,
  IconDeviceMobile,
  IconCheck,
  IconClock,
  IconUsers,
  IconCertificate,
} from "@tabler/icons-react";

export function useServices() {
  const services = [
    {
      icon: IconCode,
      title: "Web & App Development",
      desc: "Learn full-stack development with React, Next.js, Node.js and modern frameworks.",
      duration: "6 months",
      students: "500+",
      features: [
        "React & Next.js",
        "Node.js & Express",
        "Database Management",
        "Deployment & DevOps",
      ],
      color: "#5B4FCF",
      tint: "#EEEDFE",
    },
    {
      icon: IconRobot,
      title: "AI & Chatbot Development",
      desc: "Build intelligent AI applications, chatbots and automation systems.",
      duration: "4 months",
      students: "300+",
      features: [
        "Python & TensorFlow",
        "NLP & ChatGPT API",
        "Automation Tools",
        "AI Model Training",
      ],
      color: "#0369A1",
      tint: "#E0F2FE",
    },
    {
      icon: IconBrandGoogle,
      title: "Digital Marketing",
      desc: "Master SEO, social media marketing and digital growth strategies.",
      duration: "3 months",
      students: "400+",
      features: [
        "SEO & SEM",
        "Social Media Strategy",
        "Content Marketing",
        "Google Ads",
      ],
      color: "#166534",
      tint: "#DCFCE7",
    },
    {
      icon: IconPalette,
      title: "Graphic Designing",
      desc: "Create stunning visuals for brands, print and digital platforms.",
      duration: "3 months",
      students: "350+",
      features: [
        "Adobe Photoshop",
        "Illustrator & Figma",
        "Brand Identity",
        "UI/UX Basics",
      ],
      color: "#9A3412",
      tint: "#FEF3C7",
    },
    {
      icon: IconShieldLock,
      title: "Cybersecurity",
      desc: "Learn ethical hacking, network security and digital forensics.",
      duration: "5 months",
      students: "200+",
      features: [
        "Ethical Hacking",
        "Network Security",
        "Digital Forensics",
        "Penetration Testing",
      ],
      color: "#7C3AED",
      tint: "#F3E8FF",
    },
    {
      icon: IconDeviceMobile,
      title: "Mobile App Development",
      desc: "Build cross-platform mobile apps using React Native and Flutter.",
      duration: "5 months",
      students: "250+",
      features: [
        "React Native",
        "Flutter & Dart",
        "App Store Publishing",
        "Mobile UI/UX",
      ],
      color: "#BE185D",
      tint: "#FCE7F3",
    },
  ];

  const perks = [
    {
      icon: IconCheck,
      title: "100% Free",
      desc: "No fees, no hidden charges — completely free for all students.",
    },
    {
      icon: IconClock,
      title: "Flexible Schedule",
      desc: "Morning and evening batches available to fit your routine.",
    },
    {
      icon: IconUsers,
      title: "Expert Instructors",
      desc: "Learn from industry professionals with real-world experience.",
    },
    {
      icon: IconCertificate,
      title: "Certification",
      desc: "Get a recognized certificate upon successful completion.",
    },
  ];
  return { services, perks };
}
