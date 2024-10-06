import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProgressIndicator from "@/components/addons/indicator";

const SampleData = {
  duration: 2880000,
  quake_start: 1928000,
  took: 6000,
};

interface Data {
  duration: number;
  quake_start: number;
  took: number;
}

const convertToTime = (milliseconds: number) => {
  const date = new Date(milliseconds);
  return date.toISOString().substr(11, 8);
};

export default function ModalResult() {
  const { duration, quake_start } = SampleData;
  const percentage = (quake_start / duration) * 100;
  const time = convertToTime(quake_start);

  return (
    <div className="w-[100%] flex flex-col items-center justify-center px-6 gap-y-16">
      <div className="warning w-[100%] rounded-md bg-[#EE5252] flex flex-row items-center justify-center gap-x-4 py-3 px-6 text-white text-[.95em] font-light">
        <FontAwesomeIcon icon={faTriangleExclamation} className="size-5" />
        <p>
          <span className="font-medium">Warning:</span> The model has the
          potential to produce incorrect or inaccurate responses, so please be
          mindful of this possibility!
        </p>
      </div>

      <div className="w-full bg-[rgba(129,129,129,.5)] flex flex-row items-end justify-center rounded-full h-1 mt-12 relative">
        <div className="absolute -bottom-6 left-2 text-white text-xs">
          00:00
        </div>
        <div className="absolute -bottom-6 right-2 text-white text-xs">
          32:08
        </div>
        <ProgressIndicator percentage={percentage} time={time} />
      </div>
    </div>
  );
}
