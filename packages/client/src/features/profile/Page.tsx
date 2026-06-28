import { api } from "@/axios";
import { useQuery } from "@tanstack/react-query";

import UserCard from "./userinfo/Card";
import { BasicInfoCard } from "./basicinfo";
import { HeadlineCard } from "./headline";
import { ProfileSummaryCard } from "./profilesummary";

export function Page() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      return await api.get("profile");
    },
  });

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error?.message}</p>}
      <div className="grid grid-cols-1 gap-5">
        <UserCard data={data?.data} />
        <BasicInfoCard input={data?.data} />
        <HeadlineCard input={data?.data} />
        <ProfileSummaryCard input={data?.data} />
        {/* <HeadlineCard data={data?.data} />
        <ProfileSummaryCard data={data?.data} />
        <SkillsCard data={data?.data} />
        <EducationCard data={data?.data} />
        <ExperienceCard data={data?.data} />
        <ProjectsCard data={data?.data} />
        <LanguageCard data={data?.data} /> */}
      </div>
    </div>
  );
}
