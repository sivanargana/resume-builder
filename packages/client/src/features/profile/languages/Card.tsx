import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia } from "@/components/ui/empty";
import { CheckCircle, CircleX, Edit2, File } from "lucide-react";
import { FEATURE } from "./constants";

export function _Card({ input, setOpenDialog, setType, setSelected }: any) {
  return (
    <div className="relative">
      {input?.userLanguages.length > 0 && (
        <div className="absolute top-2 right-2">
          <Button
            onClick={() => {
              setType("create");
              setOpenDialog(true);
            }}
          >
            Add
          </Button>
        </div>
      )}

      <Card>
        <CardContent>
          <div className="text-base font-bold mb-5">{FEATURE}</div>
          {input?.userLanguages.length > 0 ? (
            <>
              <div className="grid grid-cols-1">
                <div className="grid grid-cols-6 border-b text-current/50 py-2">
                  <div>Language</div>
                  <div>Proficiency</div>
                  <div>Read</div>
                  <div>Write</div>
                  <div>Speak</div>
                  <div></div>
                </div>
                {input?.userLanguages?.map((item: any) => (
                  <div className="grid grid-cols-6 items-center py-2" key={item?.language?.id}>
                    <div>{item?.language?.name}</div>
                    <div>{item?.proficiency?.name}</div>
                    <div>{item?.read ? <CheckCircle size={16} className="text-green-500" /> : <CircleX size={16} className="text-red-500" />}</div>
                    <div>{item?.write ? <CheckCircle size={16} className="text-green-500" /> : <CircleX size={16} className="text-red-500" />}</div>
                    <div>{item?.speak ? <CheckCircle size={16} className="text-green-500" /> : <CircleX size={16} className="text-red-500" />}</div>
                    <div>
                      <Button
                        size="icon-sm"
                        variant="outline"
                        onClick={() => {
                          setSelected(item);
                          setType("update");
                          setOpenDialog(true);
                        }}
                      >
                        <Edit2 />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <File />
                </EmptyMedia>
                <EmptyDescription>Add userLanguages</EmptyDescription>
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
