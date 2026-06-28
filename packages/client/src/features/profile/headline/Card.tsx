import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { Edit2, File } from "lucide-react";

export function _Card({ input, setOpenDialog, setType }: any) {
  return (
    <div className="relative">
      {input?.profile?.basicDetails && (
        <div className="absolute top-2 right-2">
          <Button
            size="icon"
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
          <div className="text-base font-bold mb-5">Headline</div>
          {input?.profile?.headline ? (
            <>{input?.profile?.headline?.value}</>
          ) : (
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <File />
                </EmptyMedia>
                <EmptyTitle>No data</EmptyTitle>
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
