import { ChevronDown } from "lucide-react";

import ShinyButton from "../ui/shiny-button";

export default function Bar({
  open,
}: {
  open: (arg: boolean) => void;
}) {
  return (
    <div
      id="navigation"
      className="w-full flex flex-row items-center justify-between px-32 py-8 bg-transparent font-sans"
    >
      <div className="flex items-center justify-center flex-row gap-x-16">
        <div className="brand flex flex-row items-center justify-center gap-x-2">
          <img src="../../../assets/logos/logo.svg" className="size-6" />

          <div className="flex flex-row items-center justify-center text-2xl cursor-pointer">
            <div className="">
              <h2
                className="font-bold"
                style={{
                  background: "linear-gradient(90deg, #FFF 0%, #737373 72.2%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Spark
              </h2>
            </div>
            <div className="">
              <h2
                className="font-extrabold"
                style={{
                  background:
                    "linear-gradient(90deg, #F1C62B 0%, #F1432B 74.81%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AI
              </h2>
            </div>
          </div>
        </div>

        <div className="links flex flex-row gap-x-4 items-center font-light justify-center text-[#CECFD2]">
          <div className="flex flex-row gap-x-1 items-center justify-center cursor-pointer ease-in-out transition-colors duration-500 hover:text-[#F1C62B]">
            <p>Resources</p>
            <ChevronDown size={20} />
          </div>

          <div>
            <p className="cursor-pointer ease-in-out transition-colors duration-500 hover:text-[#F1C62B]">
              Team
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center">
        <ShinyButton
          onClick={() => open(true)}
          className="border border-solid border-[rgba(255,255,255,.3)] bg-[rgba(255,255,255,.1)] rounded-full py-3 px-8 text-sm group"
        >
          <span
            className="transition-all duration-300 ease-in-out"
            style={{
              marginRight: ".5rem",
            }}
          >
            ✨
          </span>

          <span
            className="text-transparent bg-[radial-gradient(67.93%_101.18%_at_44.51%_75%,#F1C62B_0%,rgba(249,236,225,0.56)_100%)] bg-clip-text group-hover:ml-2 transition-all duration-300 ease-in-out"
            style={{
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Try SparkAI
          </span>
        </ShinyButton>
      </div>
    </div>
  );
}
