import { Card, CardContent } from "@/components/ui/card";

function EducationCard({ data }: any) {
  return (
    <Card>
      <CardContent>
        <div className="text-base font-bold mb-5">Education</div>
        <div className="grid grid-cols-2 gap-5">
          {data?.profile?.education?.map((item: any) => (
            <Card key={item?.id}>
              <CardContent>
                <div className="font-bold">
                  {item?.specialization} - {item?.course}
                </div>
                <div>{item?.university}</div>
                <div className="text-xs text-current/50">
                  {item?.startYear} - {item?.endYear} - {item?.educationType?.name}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default EducationCard;
