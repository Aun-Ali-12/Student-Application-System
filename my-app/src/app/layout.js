import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { EditProvider } from "@/ContextApi/Edit";
import { StudentProvider } from "@/ContextApi/StudentData";
import { ViewTransitions } from "next-view-transitions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SMIT Enrollment",
  description: "Saylani SMIT Course Enrollment System",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* context provider   */}
      <body>
        <StudentProvider>
          <EditProvider>
            {/* for transition on link */}
            <ViewTransitions>{children}</ViewTransitions>
          </EditProvider>
        </StudentProvider>
      </body>
    </html>
  );
}
