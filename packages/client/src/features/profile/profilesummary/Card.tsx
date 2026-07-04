import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia } from "@/components/ui/empty";
import { Edit2, File, Plus } from "lucide-react";
import { FEATURE } from "./constants";

export function _Card({ input, setOpenDialog, setType }: any) {
  return (
    <div className="relative">
      {input?.profileSummary && (
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
          <div className="text-base font-bold mb-5">{FEATURE}</div>
          {input?.profileSummary ? (
            <>{input?.profileSummary?.summary}</>
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
