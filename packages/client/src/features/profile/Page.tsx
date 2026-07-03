import Profile from "./Profile";
export function Page() {
  return (
    <Profile.Root>
      <Profile.User />
      <Profile.Basic />
      <Profile.Headline />
      <Profile.Summary />
      <Profile.Skills />
      <Profile.Experience />
      <Profile.Education />
      <Profile.Projects />
      <Profile.Languages />
    </Profile.Root>
  );
}
