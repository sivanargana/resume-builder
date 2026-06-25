import { api } from "@/axios";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
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
            <div className="text-red-500">Personal</div>
            <div>{data?.data?.fullName}</div>
            <div>{data?.data?.mobile}</div>
            <div>{data?.data?.email}</div>
            <div>{data?.data?.workStatus}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-red-500">Basic</div>
            <div>{data?.data?.basicDetails.availability}</div>
            <div>{data?.data?.basicDetails.country}</div>
            <div>{data?.data?.basicDetails.experienceYears}</div>
            <div>{data?.data?.basicDetails.experienceMonths}</div>
            <div>{data?.data?.basicDetails.location}</div>
            <div>{data?.data?.basicDetails.salaryAmount}</div>
            <div>{data?.data?.basicDetails.salaryBreakdown}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-red-500">headline</div>
            {data?.data?.headline.value}
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-red-500">profileSummary</div>
            {data?.data?.profileSummary.summary}
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-red-500">skills</div>
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
            <div className="text-red-500">education</div>
            <div className="grid grid-cols-2 gap-5">
              {data?.data?.educations.map((item: any) => (
                <Card key={item.id}>
                  <CardContent>{item.education}</CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-red-500">experience</div>
            <div className="grid grid-cols-2 gap-5">
              {data?.data?.experiences.map((item: any) => (
                <Card key={item.id}>
                  <CardContent>{item.jobTitle}</CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-red-500">projects</div>
            <div className="grid grid-cols-2 gap-5">
              {data?.data?.projects.map((item: any) => (
                <Card key={item.id}>
                  <CardContent>{item.title}</CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-red-500">languages</div>
            <div className="grid grid-cols-2 gap-5">
              {data?.data?.languages.map((item: any) => (
                <Card key={item.id}>
                  <CardContent>{item.name}</CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
