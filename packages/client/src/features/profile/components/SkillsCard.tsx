import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

function SkillsCard({ data }: any) {
  return (
    <Card>
      <CardContent>
        <div className="text-base font-bold mb-5">Skills</div>
        <div className="flex flex-wrap gap-2">
          {data?.skills.map((item: any) => (
            <Badge key={item.id} variant="outline">
              {item.name}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default SkillsCard;
