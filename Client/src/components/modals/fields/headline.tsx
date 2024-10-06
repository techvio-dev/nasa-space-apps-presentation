export default function ModalHeadline() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2">
      <h2 className="text-3xl bg-text-radial bg-clip-text text-transparent font-semibold">
        One Sample. That's all it takes.
      </h2>
      <p className="text-[rgba(255,255,255,.56)] w-[80%] text-center font-light">
        Upload a recording file containing the recording sound, and let us do
        the rest.
      </p>
    </div>
  );
}
