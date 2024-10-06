import "../../styles/index.css";
import { useState } from "react";
import Bar from "../pagination/navbar";
import Hero from "./landing/hero";

export default function Landing() {
  const [isOpen, open] = useState(false);

  return (
    <section id="landing" className="h-[100vh] w-[100vw] bg-black text-white">
      <Bar open={open} />
      <Hero isOpen={isOpen} open={open} />
    </section>
  );
}
