import { Card, CardContent } from "@/components/ui/card";

function ProjectsCard({ data }: any) {
  return (
    <Card>
      <CardContent>
        <div className="text-base font-bold mb-5">Projects</div>
        <div className="grid grid-cols-2 gap-5">
          {data?.profile?.projects?.map((item: any) => (
            <Card key={item?.id}>
              <CardContent>
                <div className="font-bold">{item?.title}</div>
                <div>
                  {item?.client} - {item?.location}
                </div>
                <div className="text-xs text-current/50">
                  {item?.startYear} - {item?.endYear} - {item?.type}
                </div>
                <div>{item?.details}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default ProjectsCard;
