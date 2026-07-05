import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia } from "@/components/ui/empty";
import { Edit2, File, Mail, Phone } from "lucide-react";

import { Avtar } from "../avtar";
export function _Card({ input, setOpenDialog, setType }: any) {
  return (
    <div className="relative">
      {input?.basicDetails && (
        <div className="absolute top-2 right-2">
          <Button
            size="icon-sm"
            variant="outline"
            onClick={() => {
              setType("update");
              setOpenDialog(true);
            }}
          >
            <Edit2 />
          </Button>
        </div>
      )}

      <Card>
        <CardContent>
          {input?.user ? (
            <div className="flex gap-5 items-center">
              <div className="flex-none">
                <Avtar />
              </div>
              <div className="flex-auto">
                <div className="text-lg font-bold">
                  {input?.user?.firstName} {input?.user?.lastName}
                </div>
                <div className="flex gap-5 pt-3">
                  {input?.user?.mobile && (
                    <div className="flex items-center gap-2">
                      <Phone size={18} />
                      {input?.user?.mobile}
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Mail size={18} />
                    {input?.user?.email}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <File />
                </EmptyMedia>
                <EmptyDescription>Add basic details.</EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <Button
                  onClick={() => {
                    setType("create");
                    setOpenDialog(true);
                  }}
                >
                  Add
                </Button>
              </EmptyContent>
            </Empty>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
