import { useState } from "react";

export default function ModalSource() {
  const [selected, setSelected] = useState("Earth");
  function Select(value: string) {
    setSelected(value);
  }

  return (
    <div className="flex flex-row items-center justify-between w-[100%]">
      <div className="flex flex-col items-start justify-center">
        <div className="flex flex-row items-center justify-center gap-x-2">
          <h4 className="font-semibold text-base">Source</h4>
          <p className="font-regular text-sm text-[rgba(255,255,255,0.48)]">
            (Optional)
          </p>
        </div>
        <p className="text-[rgba(255,255,255,.56)] font-light text-sm">
          This is the source of the recording, in other words, where it was
          recorded.
        </p>
      </div>

      <div className="flex flex-wrap rounded-lg bg-[rgba(255,255,255,.05)] border gap-x-2 border-[rgba(255,255,255,.2)] shadow-sm p-1 w-72 text-sm">
        {["Earth", "Mars", "Moon"].map((option) => (
          <button
            key={option}
            className={`flex-1 text-center cursor-pointer rounded-md border-none py-2 text-white transition-all duration-150 ease-in-out 
                    ${
                      selected === option
                        ? "bg-[rgba(255,255,255,.1)] text-[rgba(241,198,43,1)]"
                        : "hover:bg-[rgba(255,255,255,.05)]"
                    }`}
            onClick={() => Select(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
