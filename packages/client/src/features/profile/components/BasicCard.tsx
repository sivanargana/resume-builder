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
              <div className="text-lg font-bold">{data?.fullName}</div>
              <div className="grid grid-cols-2 gap-5 border-t mt-3">
                <div className="flex flex-col gap-2 pt-3">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} /> {data?.basicDetails.location},{data?.basicDetails.country}
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={18} />
                    {data?.basicDetails.experienceYears}
                    {data?.basicDetails.experienceMonths} Years &bull;
                    {data?.workStatus}
                  </div>
                  <div className="flex items-center gap-2">
                    <Wallet size={18} />
                    {data?.basicDetails.salaryAmount} &bull;
                    {data?.basicDetails.salaryBreakdown}
                  </div>
                </div>
                <div className="flex flex-col gap-2 border-l pl-3 pt-3">
                  <div className="flex items-center gap-2">
                    <Phone size={18} />
                    {data?.mobile}
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={18} />
                    {data?.email}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    {data?.basicDetails.availability}
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
