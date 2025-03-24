import { About } from "./About";
import { Education } from "./Education";
import { RecentWork } from "./RecentWork";
import { TechSkills } from "./TechSkills";
export const Home = () => {
  return (
    <>
      <div className="py-28 bg-gray-950 -z-30">
        <About />
      </div>
        <Education/>
        <TechSkills/>
        <RecentWork/>
    </>
  );
};