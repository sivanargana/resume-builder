import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, Mail, MapPin, Phone, Wallet } from "lucide-react";
import BasicForm from "../forms/BasicForm";

function BasicCard({ data }: any) {
  return (
    <div className="relative">
      <div className="absolute top-2 right-2">
        <BasicForm data={data} />
      </div>
      <Card>
        <CardContent>
          <div className="flex gap-5">
            <div className="flex-none">
              <div className="size-20 bg-gray-300 rounded-full"></div>
            </div>
            <div className="flex-auto">
              <div className="text-lg font-bold">{data?.profile?.fullName}</div>
              <div className="grid grid-cols-2 gap-5 border-t mt-3">
                <div className="flex flex-col gap-2 pt-3">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} /> {data?.profile?.basicDetails?.location},{data?.profile?.basicDetails?.country}
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={18} />
                    {data?.profile?.basicDetails?.experienceYear.name}
                    {data?.profile?.basicDetails?.experienceMonth.name} Years &bull;
                    {data?.profile?.workStatus?.name}
                  </div>
                  <div className="flex items-center gap-2">
                    <Wallet size={18} />
                    {data?.profile?.basicDetails?.salaryAmount} &bull;
                    {data?.profile?.basicDetails?.salaryBreakdown?.name}
                  </div>
                </div>
                <div className="flex flex-col gap-2 border-l pl-3 pt-3">
                  <div className="flex items-center gap-2">
                    <Phone size={18} />
                    {data?.profile?.mobile}
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={18} />
                    {data?.profile?.email}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    {data?.profile?.basicDetails?.availabilityType.name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default BasicCard;
