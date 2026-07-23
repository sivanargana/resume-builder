import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia } from "@/components/ui/empty";
import { Edit2, File, Plus } from "lucide-react";
import { FEATURE } from "./constants";

export function _Card({ input, setOpenDialog, setType, setSelected }: any) {
  return (
    <div className="relative">
      {input?.projects.length > 0 && (
        <div className="absolute top-2 right-2">
          <Button
            onClick={() => {
              setType("create");
              setOpenDialog(true);
            }}
          >
            Add <Plus />
          </Button>
        </div>
      )}

      <Card>
        <CardContent>
          <div className="text-base font-bold mb-5">{FEATURE}</div>
          {input?.projects.length > 0 ? (
            <>
              <div className="grid grid-cols-1 gap-5">
                {input?.projects?.map((item: any) => (
                  <div className="relative" key={item?.id}>
                    <div className="absolute top-0 right-0">
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
                    <div>
                      <div className="font-bold">{item?.title}</div>
                      <div>
                        {item?.client} - {item?.location}
                      </div>
                      <div className="text-xs text-current/50">
                        {item?.startYear} - {item?.endYear} - {item?.type?.name}
                      </div>
                      <div>{item?.details}</div>
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
                <EmptyDescription>Add {FEATURE}</EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <Button
                  onClick={() => {
                    setType("create");
                    setOpenDialog(true);
                  }}
                >
                  Add <Plus />
                </Button>
              </EmptyContent>
            </Empty>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
