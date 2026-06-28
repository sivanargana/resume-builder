import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";

import { Briefcase, Calendar, Edit2, File, MapPin, Wallet } from "lucide-react";

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
          <div className="text-base font-bold mb-5">Basic Details</div>
          {input?.profile?.basicDetails ? (
            <div className="flex flex-col gap-2 pt-3">
              <div className="flex items-center gap-2">
                <MapPin size={18} /> {input?.profile?.basicDetails?.location}, {input?.profile?.basicDetails?.country}
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={18} />
                {input?.profile?.basicDetails?.experienceYear.name} - {input?.profile?.basicDetails?.experienceMonth.name}
              </div>
              <div className="flex items-center gap-2">
                <Wallet size={18} />
                {input?.profile?.basicDetails?.salaryAmount} - {input?.profile?.basicDetails?.salaryBreakdown?.name}
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                {input?.profile?.basicDetails?.availabilityType.name}
              </div>
            </div>
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
