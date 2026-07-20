import { IconTarget, IconEye, IconUsers } from "@tabler/icons-react";

export function useAbout() {
  const stats = [
    { value: "2,000+", label: "Students Enrolled" },
    { value: "15+", label: "Campuses Nationwide" },
    { value: "95%", label: "Success Rate" },
    { value: "5+", label: "Years of Excellence" },
  ];

  const values = [
    {
      icon: IconTarget,
      title: "Our Mission",
      desc: "To provide free world-class IT education to Pakistani youth and bridge the digital skills gap.",
    },
    {
      icon: IconEye,
      title: "Our Vision",
      desc: "A Pakistan where every young person has access to quality tech education regardless of background.",
    },
    {
      icon: IconUsers,
      title: "Our Community",
      desc: "A growing family of 2000+ students, mentors, and industry professionals working together.",
    },
  ];

  const team = [
    { name: "Muhammad Ali", role: "Program Director", initial: "MA" },
    { name: "Sara Khan", role: "Lead Instructor", initial: "SK" },
    { name: "Ahmed Hassan", role: "Campus Coordinator", initial: "AH" },
    { name: "Fatima Malik", role: "Student Counselor", initial: "FM" },
  ];

  return { stats, values, team };
}
