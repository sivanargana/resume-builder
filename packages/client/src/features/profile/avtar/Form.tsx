import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { FEATURE } from "./constants";
import { Trash } from "lucide-react";

export function _Form({ input, openDialog, setOpenDialog, onSave, onUpdate, onDelete }: any) {
  const inputRef: any = useRef(null);
  const [file, setFile] = useState(null);

  const isExisit = input?.user?.avtar !== null;
  const [TempImage, setTempImage] = useState(`${import.meta.env.VITE_UPLOADS_URL}${input?.user?.avtar?.url}`);

  const onChange = ({ target }: any) => {
    setFile(target.files[0]);

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      setTempImage(base64);
    };
    reader.readAsDataURL(target.files[0]);
  };

  const onSubmit = () => {
    const formData: any = new FormData();
    formData.append("image", file);
    return formData;
  };

  return (
    <>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="min-w-150">
          <DialogHeader>
            <DialogTitle> {FEATURE} </DialogTitle>
          </DialogHeader>

          <div className="size-30 bg-gray-300 rounded-full overflow-clip mx-auto">{TempImage && <img className="size-full object-cover" src={TempImage} />}</div>

          <input type="file" ref={inputRef} hidden onChange={onChange} accept="jpg,png,svg,gif,jpeg" />

          <div className="text-center">
            {isExisit ? (
              <>
                <Button variant="link" onClick={() => inputRef.current?.click()}>
                  Replace Image
                </Button>
              </>
            ) : (
              <>
                <Button variant="link" onClick={() => inputRef.current?.click()}>
                  Upload Image
                </Button>
              </>
            )}
          </div>

          <DialogFooter>
            <Button variant="destructive" className="mr-auto" onClick={() => onDelete()}>
              <Trash />
            </Button>

            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            {!isExisit && <Button onClick={() => onSave(onSubmit())}>Save</Button>}
            {isExisit && <Button onClick={() => onUpdate(onSubmit())}>Replace</Button>}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
