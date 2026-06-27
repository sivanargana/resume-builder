import { Card, CardContent } from "@/components/ui/card";

function ExperienceCard({ data }: any) {
  return (
    <Card>
      <CardContent>
        <div className="text-base font-bold mb-5">Experience</div>
        <div className="grid grid-cols-2 gap-5">
          {data?.profile?.experiences?.map((item: any) => (
            <Card key={item?.id}>
              <CardContent>
                <div className="font-bold">{item?.jobTitle}</div>
                <div>{item?.companyName}</div>
                <div className="text-xs text-current/50">{item?.employmentType?.name}</div>
                <div>{item?.jobProfile}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;
