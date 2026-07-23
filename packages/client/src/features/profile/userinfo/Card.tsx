import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia } from "@/components/ui/empty";
import { Edit2, File, Mail, Phone } from "lucide-react";

import { Avtar } from "../avtar";
import Resume from "./Resume";
export function _Card({ input, setOpenDialog, setType }: any) {
  const Circle = ({ value, size = 100, strokeWidth = 5, trackColor = "#e5e7eb", progressColor = "#3b82f6" }: any) => {
    const progress = Math.min(Math.max(value, 0), 100);

    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * (1 - progress / 100);

    return (
      <svg width={size} height={size}>
        {/* Background */}
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={trackColor} strokeWidth={strokeWidth} />

        {/* Progress */}
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={progressColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset} transform={`rotate(-90 ${size / 2} ${size / 2})`} className="transition-all duration-500 ease-out" />
      </svg>
    );
  };
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
                  <div className="relative">
                    <Avtar />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                      <Circle value={input?.user?.progress} />
                    </div>
                    <div className="absolute left-1/2 top-full -translate-y-1/2 -translate-x-1/2 pointer-events-none text-xs font-bold h-4 px-2 shadow rounded-full text-center bg-white z-10 text-(--mat-sys-primary)">{input?.user?.progress}%</div>
                  </div>
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
