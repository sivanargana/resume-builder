import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia } from "@/components/ui/empty";
import { Edit2, File } from "lucide-react";
import { FEATURE } from "./constants";

export function _Card({ input, setOpenDialog, setType, setSelected }: any) {
  return (
    <div className="relative">
      {input?.experiences.length > 0 && (
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
          {input?.experiences.length > 0 ? (
            <>
              <div className="grid grid-cols-2 gap-5">
                {input?.experiences?.map((item: any) => (
                  <div className="relative" key={item?.id}>
                    <div className="absolute top-2 right-2">
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
                    <Card>
                      <CardContent>
                        <div className="font-bold">{item?.jobTitle}</div>
                        <div>{item?.companyName}</div>
                        <div className="text-xs text-current/50">{item?.employmentType?.name}</div>
                        <div>{item?.jobProfile}</div>
                      </CardContent>
                    </Card>
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
                <EmptyDescription>Add experiences</EmptyDescription>
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
