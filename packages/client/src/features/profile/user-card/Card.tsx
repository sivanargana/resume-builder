import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Mail, Phone } from "lucide-react";
import UserForm from "./Form";

function UserCard({ data }: any) {
  return (
    <div className="relative">
      <div className="absolute top-2 right-2">
        <UserForm data={data} />
      </div>
      <Card>
        <CardContent>
          <div className="flex gap-5 items-center">
            <div className="flex-none">
              <div className="size-20 bg-gray-300 rounded-full"></div>
            </div>
            <div className="flex-auto">
              <div className="text-lg font-bold">{data?.profile?.fullName}</div>
              <div className="flex gap-5 pt-3">
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
                  {data?.profile?.workStatus?.name}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default UserCard;
