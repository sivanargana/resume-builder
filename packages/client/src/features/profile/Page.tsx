import { api } from "@/axios";
import { useQuery } from "@tanstack/react-query";

import BasicCard from "./components/BasicCard";
import HeadlineCard from "./components/HeadlineCard";
import ProfileSummaryCard from "./components/ProfileSummaryCard";
import SkillsCard from "./components/SkillsCard";
import EducationCard from "./components/EducationCard";
import ExperienceCard from "./components/ExperienceCard";
import ProjectsCard from "./components/ProjectsCard";
import LanguageCard from "./components/LanguageCard";
import { useContent } from "@/components/ContentProvider";

export function Page() {
  const content = useContent();
  const { data, isLoading, error } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      return await api.get("profile");
    },
  });

  console.log(content);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error?.message}</p>}
      <div className="grid grid-cols-1 gap-5">
        <BasicCard data={data?.data} />
        <HeadlineCard data={data?.data} />
        <ProfileSummaryCard data={data?.data} />
        <SkillsCard data={data?.data} />
        <EducationCard data={data?.data} />
        <ExperienceCard data={data?.data} />
        <ProjectsCard data={data?.data} />
        <LanguageCard data={data?.data} />
      </div>
    </div>
  );
}
