import { Card, CardContent } from "@/components/ui/card";

function HeadlineCard({ data }: any) {
  return (
    <Card>
      <CardContent>
        <div className="text-base font-bold mb-5">Headline</div>
        {data?.headline?.value}
      </CardContent>
    </Card>
  );
}

export default HeadlineCard;
