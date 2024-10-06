import ShinyButton from "@/components/ui/shiny-button";

interface Launcher {
  launcher: (state: boolean) => void;
}

export default function ModalLaunch({ launcher }: Launcher) {
  return (
    <div className="flex flex-col items-start justify-center w-[100%] gap-y-4">
      <div className="flex flex-col items-start justify-center">
        <p className="text-[rgba(255,255,255,.56)] font-light text-sm">
          Ready when you are! Click on the button below and watch the magic
          happen.
        </p>
      </div>

      <ShinyButton
        className="border border-solid border-[rgba(255,255,255,.1)] bg-[rgba(255,255,255,.05)] rounded-full w-full py-3 px-8 text-base group"
        onClick={() => {
          launcher(true);
        }}
      >
        <span
          className="transition-all duration-300 ease-in-out"
          style={{ marginRight: ".5rem" }}
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
          Launch the Monster
        </span>
      </ShinyButton>
    </div>
  );
}
