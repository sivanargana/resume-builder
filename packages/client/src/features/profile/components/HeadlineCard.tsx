import { Card, CardContent } from "@/components/ui/card";

function HeadlineCard({ data }: any) {
  return (
    <Card>
      <CardContent>
        <div className="text-base font-bold mb-5">Headline</div>
        {data?.profile?.headline?.value}
      </CardContent>
    </Card>
  );
}

export default HeadlineCard;
