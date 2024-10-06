import ReactModal from "react-modal";
import ModalFile from "./fields/file";
import ModalSource from "./fields/source";
import ModalLaunch from "./fields/launch";
import ModalHeadline from "./fields/headline";
import { useState } from "react";
import ModalResult from "./fields/result";
import axios from "axios";

interface Modal {
  isOpen: boolean;
  close: (arg: boolean) => void;
}

export default function StartModal({ isOpen, close }: Modal) {
  const [launched, launch] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  async function handleLaunch() {
    if(!file) return;

    const data = new FormData();
    data.append("file", file);
    
    try {
      const response = await axios.post("http://127.0.0.1:8000/process", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Upload Successful:", response.data);
      launch(true);
    }

    catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => {
        close(false);
      }}
      className="flex items-center justify-center bg-transparent flex-col h-[100vh] w-[100vw] backdrop-blur-sm"
      overlayClassName="fixed inset-0 bg-transparent"
    >
      <div className="w-[70vw] h-fit rounded-xl border-2 relative border-[rgba(255,255,255,.1)] bg-[#000] text-white bg-custom-radial flex flex-col items-center justify-center gap-y-16 px-4 py-12 pb-16">
        {launched ? (
          <ModalResult />
        ) : (
          <>
            <ModalHeadline />

            <div className="flex flex-col items-start justify-center w-[100%] px-6 gap-y-16">
              <ModalFile onFileSelect={setFile} />
              <ModalSource />
              <ModalLaunch launcher={handleLaunch} />
            </div>
          </>

        )}
        <img className="absolute bottom-4 left-4 h-5" src="../../../assets/icons/spark.svg"/>
      </div>
    </ReactModal>
  );
}
