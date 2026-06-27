import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

function SkillsCard({ data }: any) {
  return (
    <Card>
      <CardContent>
        <div className="text-base font-bold mb-5">Skills</div>
        <div className="flex flex-wrap gap-2">
          {data?.userSkills?.map((item: any) => (
            <Badge key={item?.skill?.id} variant="outline">
              {item?.skill?.name}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default SkillsCard;
