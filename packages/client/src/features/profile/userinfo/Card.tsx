import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia } from "@/components/ui/empty";
import { Edit2, File, Mail, Phone } from "lucide-react";
import { Progress } from "@/components/ui/progress";

import { Avtar } from "../avtar";
import Resume from "./Resume";
export function _Card({ input, setOpenDialog, setType }: any) {
  return (
    <div className="relative">
      {input?.user && (
        <div className="absolute top-2 right-2">
          <Button
            title="button-edit"
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
            <>
              <div className="flex gap-5 items-center pr-10">
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
                <div>{input?.user?.progress > 80 && <Resume data={input} />}</div>
              </div>
              <Progress value={input?.user?.progress} className="mt-4 -mb-4"></Progress>
            </>
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
                  data-testid="button-add"
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
