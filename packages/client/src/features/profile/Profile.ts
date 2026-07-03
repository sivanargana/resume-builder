import Root from "./Root";
import { UserIfoCard } from "./userinfo";
import { BasicInfoCard } from "./basicinfo";
import { EducationCard } from "./education";
import { ExperienceCard } from "./experience";
import { HeadlineCard } from "./headline";
import { LanguageCard } from "./languages";
import { ProfileSummaryCard } from "./profilesummary";
import { ProjectsCard } from "./projects";
import { SkillsCard } from "./skills";

const Profile = {
  Root: Root,
  User: UserIfoCard,
  Basic: BasicInfoCard,
  Headline: HeadlineCard,
  Summary: ProfileSummaryCard,
  Skills: SkillsCard,
  Experience: ExperienceCard,
  Education: EducationCard,
  Projects: ProjectsCard,
  Languages: LanguageCard,
};

export default Profile;
