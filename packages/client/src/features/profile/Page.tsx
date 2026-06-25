import { api } from "@/axios";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import {
  Briefcase,
  Calendar,
  CheckCircle,
  CircleX,
  Mail,
  MapPin,
  Phone,
  Wallet,
} from "lucide-react";

export function Page() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      return await api.get("profile");
    },
  });

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error?.message}</p>}
      <div className="grid grid-cols-1 gap-5">
        <Card>
          <CardContent>
            <div className="flex gap-5">
              <div className="flex-none">
                <div className="size-20 bg-gray-300 rounded-full"></div>
              </div>
              <div className="flex-auto">
                <div className="text-lg font-bold">{data?.data?.fullName}</div>
                <div className="grid grid-cols-2 gap-5 border-t mt-3">
                  <div className="flex flex-col gap-2 pt-3">
                    <div className="flex items-center gap-2">
                      <MapPin size={18} /> {data?.data?.basicDetails.location},
                      {data?.data?.basicDetails.country}
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={18} />
                      {data?.data?.basicDetails.experienceYears}
                      {data?.data?.basicDetails.experienceMonths} Years &bull;
                      {data?.data?.workStatus}
                    </div>
                    <div className="flex items-center gap-2">
                      <Wallet size={18} />
                      {data?.data?.basicDetails.salaryAmount} &bull;
                      {data?.data?.basicDetails.salaryBreakdown}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 border-l pl-3 pt-3">
                    <div className="flex items-center gap-2">
                      <Phone size={18} />
                      {data?.data?.mobile}
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={18} />
                      {data?.data?.email}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={18} />
                      {data?.data?.basicDetails.availability}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="text-base font-bold mb-5">Headline</div>
            {data?.data?.headline.value}
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-base font-bold mb-5">Profile Summary</div>
            {data?.data?.profileSummary.summary}
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-base font-bold mb-5">Skills</div>
            <div className="flex flex-wrap gap-2">
              {data?.data?.skills.map((item: any) => (
                <Badge key={item.id} variant="outline">
                  {item.name}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-base font-bold mb-5">Education</div>
            <div className="grid grid-cols-2 gap-5">
              {data?.data?.educations.map((item: any) => (
                <Card key={item.id}>
                  <CardContent>
                    <div className="font-bold">
                      {item.education} - {item.course}
                    </div>
                    <div>{item.university}</div>
                    <div className="text-xs text-current/50">
                      {item.startYear} - {item.endYear} - {item.type}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-base font-bold mb-5">Experience</div>
            <div className="grid grid-cols-2 gap-5">
              {data?.data?.experiences.map((item: any) => (
                <Card key={item.id}>
                  <CardContent>
                    <div className="font-bold">{item.jobTitle}</div>
                    <div>{item.companyName}</div>
                    <div className="text-xs text-current/50">
                      {item.employmentType}
                    </div>
                    <div>{item.jobProfile}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-base font-bold mb-5">Projects</div>
            <div className="grid grid-cols-2 gap-5">
              {data?.data?.projects.map((item: any) => (
                <Card key={item.id}>
                  <CardContent>
                    <div className="font-bold">{item.title}</div>
                    <div>
                      {item.client} - {item.location}
                    </div>
                    <div className="text-xs text-current/50">
                      {item.startYear} - {item.endYear} - {item.type}
                    </div>
                    <div>{item.details}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-base font-bold mb-5">Languages</div>
            <div className="grid grid-cols-1">
              <div className="grid grid-cols-5 border-b text-current/50">
                <div>Language</div>
                <div>Proficiency</div>
                <div>Read</div>
                <div>Write</div>
                <div>Speak</div>
              </div>
              {data?.data?.languages.map((item: any) => (
                <div className="grid grid-cols-5" key={item.id}>
                  <div>{item.name}</div>
                  <div>{item.proficiency}</div>
                  <div>
                    {item.read ? (
                      <CheckCircle size={16} />
                    ) : (
                      <CircleX size={16} />
                    )}
                  </div>
                  <div>
                    {item.write ? (
                      <CheckCircle size={16} />
                    ) : (
                      <CircleX size={16} />
                    )}
                  </div>
                  <div>
                    {item.speak ? (
                      <CheckCircle size={16} />
                    ) : (
                      <CircleX size={16} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
