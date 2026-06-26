import { Card, CardContent } from "@/components/ui/card";

function EducationCard({ data }: any) {
  return (
    <Card>
      <CardContent>
        <div className="text-base font-bold mb-5">Education</div>
        <div className="grid grid-cols-2 gap-5">
          {data?.educations.map((item: any) => (
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
  );
}

export default EducationCard;
