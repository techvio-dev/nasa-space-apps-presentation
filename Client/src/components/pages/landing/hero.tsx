import { ArrowRightIcon } from "@radix-ui/react-icons";

import ShimmerButton from "@/components/ui/shimmer-button";
import NumberTicker from "@/components/ui/number-ticker";
import ShinyButton from "@/components/ui/shiny-button";
import BlurFade from "@/components/ui/blur-fade";
import StartModal from "@/components/modals/start";

export default function Header({
  isOpen,
  open,
}: {
  isOpen: boolean;
  open: (arg: boolean) => void;
}) {
  return (
    <section
      className="w-screen flex flex-col items-center justify-center h-[calc(100vh-7rem)] gap-y-10"
      style={{
        backgroundImage: `url("../../../../assets/backgrounds/pattern.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundPosition: "center top -100px",
      }}
    >
      <StartModal isOpen={isOpen} close={open} />

      <BlurFade delay={0.25} inView>
        <ShimmerButton
          shimmerColor={"#F1C62B"}
          className="flex flex-row items-center justify-center gap-x-5 px-8 py-2 font-normal"
        >
          <span className="text-base">Announcing SparkAI v1.0.0</span>
          <ArrowRightIcon className="size-4.5 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5" />
        </ShimmerButton>
      </BlurFade>

      <div className="flex flex-col items-center justify-center gap-y-6 text-center">
        <BlurFade delay={0.5} inView>
          <h1
            className="text-7xl text-center font-medium"
            style={{
              background:
                "linear-gradient(0deg, #FFF -4.78%, rgba(255, 255, 255, 0.00) 223.03%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Changing data predictions. <br /> One wave at a Time.
          </h1>
        </BlurFade>

        <BlurFade delay={0.75} inView>
          <p
            className="w-[80%] text-[1.25em] font-normal mx-auto"
            style={{
              background:
                "linear-gradient(180deg, #EAEAEA 0%, rgba(234, 234, 234, 0.00) 321.67%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            The most powerful AI available to predict & extract Seismic Data
            across the Earth, Moon & Mars, at lightning fast speed.
          </p>
        </BlurFade>

        <div className="flex flex-row items-center justify-center">
          <BlurFade delay={1} inView>
            <span
              onClick={() => {
                open(true);
              }}
            >
              <ShinyButton className="border border-solid border-[rgba(255,255,255,.3)] bg-[rgba(255,255,255,.13)] rounded-full py-4 px-8 text-base group">
                <span
                  className="transition-all duration-300 ease-in-out"
                  style={{
                    marginRight: ".5rem",
                  }}
                >
                  ✨
                </span>

                <span
                  className="text-transparent bg-[radial-gradient(67.93%_101.18%_at_44.51%_75%,#F1C62B_0%,rgba(249,236,225,0.56)_100%)] bg-clip-text group-hover:ml-3 transition-all duration-300 ease-in-out"
                  style={{
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Try SparkAI for yourself.
                </span>
              </ShinyButton>
            </span>
          </BlurFade>
        </div>
      </div>

      <BlurFade delay={1.25} inView>
        <div className="flex flex-col items-center justify-center gap-y-6">
          <p
            style={{
              background:
                "linear-gradient(180deg, rgba(234, 234, 234, 0.85) 0%, rgba(234, 234, 234, 0.00) 321.67%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Trained on Data from <NumberTicker value={20} delay={2} />+ agencies
          </p>

          <div className="flex flex-row items-center justify-center gap-x-8 cursor-pointer">
            <img className="" src="../../../../assets/logos/NASA.png" />
            <img className="" src="../../../../assets/logos/csa.png" />
            <img className="" src="../../../../assets/logos/esa.png" />
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
