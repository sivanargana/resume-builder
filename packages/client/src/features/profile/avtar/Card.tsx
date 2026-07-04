export function _Card({ input, setType, setOpenDialog }: any) {
  return (
    <div className="relative">
      <div
        className="size-20 bg-gray-300 rounded-full overflow-clip"
        onClick={() => {
          setOpenDialog(true);
        }}
      >
        {input?.user?.avtar && <img className="size-full object-cover" src={`${import.meta.env.VITE_UPLOADS_URL}${input?.user?.avtar?.url}`} />}
      </div>
    </div>
  );
}
