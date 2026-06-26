import { Card, CardContent } from "@/components/ui/card";

function ProfileSummaryCard({ data }: any) {
  return (
    <Card>
      <CardContent>
        <div className="text-base font-bold mb-5">Profile Summary</div>
        {data?.profileSummary.summary}
      </CardContent>
    </Card>
  );
}

export default ProfileSummaryCard;
