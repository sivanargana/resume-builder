import { Field, FieldLabel } from "@/components/ui/field";
import { Dialog, DialogClose, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

import { useContent } from "@/components/ContentProvider";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

export function _Form({ input, openDialog, setOpenDialog, onSave, onDelete, type }: any) {
  const { masterdata }: any = useContent();
  const [skills, setSkills] = useState<any>([]);

  useEffect(() => {
    if (input?.userSkills.length > 0) {
      let tempt = input?.userSkills.map((item: any) => ({ ...item.skill }));

      setSkills((prev: any) => [...prev, ...tempt]);
    }
  }, [input]);

  return (
    <>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="min-w-150">
          <div className="flex flex-wrap gap-2">
            {skills.map((item: any) => (
              <Badge key={item?.id} variant="outline" className="h-8">
                {item?.name}
                <Button variant="ghost" size="icon-sm" className="-mr-1" onClick={() => setSkills((prev: any) => prev.filter((r: any) => r.id !== item?.id))}>
                  <X />
                </Button>
              </Badge>
            ))}
          </div>

          <Field>
            <FieldLabel>Skill</FieldLabel>
            <Select
              onValueChange={(e: any) => {
                if (!skills.some((item: any) => item.name == e.name)) {
                  setSkills((prev: any) => [...prev, e]);
                }
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {masterdata?.data?.skills.map((item: any) => (
                    <SelectItem value={item} key={item.id}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={() => onSave(skills)}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
