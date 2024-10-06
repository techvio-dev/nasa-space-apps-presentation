import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";

interface ModalFileProps {
  onFileSelect: (file: File | null) => void;
}

export default function ModalFile({ onFileSelect }: ModalFileProps) {
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function handle(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      onFileSelect(file);
    } else {
      setFileName("");
      onFileSelect(null);
    }
  }

  return (
    <div className="flex flex-col items-start justify-center w-[100%] gap-y-4">
      <div className="flex flex-col items-start justify-center">
        <h4 className="font-semibold text-base">
          Recording <span className="text-red-500">*</span>
        </h4>
        <p className="text-[rgba(255,255,255,.56)] font-light text-sm">
          This is the recording sample containing the sound waves.
        </p>
      </div>

      <div
        className={`w-[100%] border border-dashed ${
          fileName ? "border-green-400" : "border-[rgba(255,255,255,.5)]"
        } rounded-md py-8 cursor-pointer group`}
      >
        <input
          type="file"
          accept=".mp3,.wav,.ogg,.csv,.mseed"
          onChange={handle}
          ref={fileInputRef}
          className="hidden"
        />
        <div
          onClick={() => fileInputRef.current?.click()}
          className="flex flex-row items-center justify-center gap-x-6"
        >
          {fileName ? (
            <FontAwesomeIcon
              icon={faCheck}
              className="size-8 text-green-400 group-hover:text-green-400 transition-colors duration-300"
            />
          ) : (
            <FontAwesomeIcon
              icon={faCloudArrowDown}
              className="size-8 text-[rgba(255,255,255,.5)] group-hover:text-white transition-colors duration-300"
            />
          )}

          <p
            className={`text-sm font-regular ${
              fileName
                ? "text-green-400 group-hover:text-green-400"
                : "text-[rgba(255,255,255,.5)] group-hover:text-white"
            } transition-colors duration-300`}
          >
            {fileName ? fileName : "Upload Recording"}
          </p>
        </div>
      </div>
    </div>
  );
}
