import { Edit2 } from "lucide-react";

export function _Card({ input, setType, setOpenDialog }: any) {
  return (
    <>
      <div className="relative group overflow-hidden rounded-full">
        {input?.user?.provider === "EMAIL" && (
          <div
            className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center text-white"
            onClick={() => {
              setOpenDialog(true);
            }}
          >
            <Edit2 />
          </div>
        )}
        <div className="size-20 bg-gray-300 ">
          {input?.user?.provider === "EMAIL" && input?.user?.avtar && <img className="size-full object-cover" src={`${import.meta.env.VITE_UPLOADS_URL}${input?.user?.avtar?.url}`} />}
          {input?.user?.provider === "GOOGLE" && input?.user?.picture && <img className="size-full object-cover" src={input?.user?.picture} />}
        </div>
      </div>
    </>
  );
}
