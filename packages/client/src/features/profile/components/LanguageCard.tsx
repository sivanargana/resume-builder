import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, CircleX } from "lucide-react";

function LanguageCard({ data }: any) {
  return (
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
          {data?.languages.map((item: any) => (
            <div className="grid grid-cols-5" key={item.id}>
              <div>{item.name}</div>
              <div>{item.proficiency}</div>
              <div>{item.read ? <CheckCircle size={16} /> : <CircleX size={16} />}</div>
              <div>{item.write ? <CheckCircle size={16} /> : <CircleX size={16} />}</div>
              <div>{item.speak ? <CheckCircle size={16} /> : <CircleX size={16} />}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default LanguageCard;
