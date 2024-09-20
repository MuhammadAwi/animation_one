import Image from "next/image";
import localFont from "next/font/local";
import Animation_one from "@/components/animation_one";
import Animation_two from "@/components/Animation_two";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className="">
      <Animation_one />
    </div>
  );
}
