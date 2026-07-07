import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia } from "@/components/ui/empty";

import { Briefcase, Calendar, Clock, Edit2, File, MapPin, Plus, Wallet } from "lucide-react";
import { FEATURE } from "./constants";

export function _Card({ input, setOpenDialog, setType }: any) {
  return (
    <div className="relative">
      {input?.basicDetails && (
        <div className="absolute top-2 right-2">
          <Button
            data-testid="button-edit"
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
          <div className="text-base font-bold mb-5" data-testid="title">
            {FEATURE}
          </div>
          {input?.basicDetails ? (
            <div className="flex flex-col gap-2 pt-3">
              <div className="flex items-center gap-2">
                <MapPin size={18} /> {input?.basicDetails?.location}, {input?.basicDetails?.country}
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={18} />
                {input?.basicDetails?.experienceYear.name} - {input?.basicDetails?.experienceMonth.name}
              </div>
              <div className="flex items-center gap-2">
                <Wallet size={18} />
                {input?.basicDetails?.salaryAmount} - {input?.basicDetails?.salaryBreakdown?.name}
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                {input?.basicDetails?.availabilityType.name}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                {input?.basicDetails?.workStatus?.name}
              </div>
            </div>
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
                  data-testid="button-add"
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
