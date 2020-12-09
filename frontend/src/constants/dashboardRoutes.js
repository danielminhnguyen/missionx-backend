// teacher dashboard
import { ReactComponent as ProgressTracker } from "assets/images/progresstracker.svg";
import { ReactComponent as StudentProfile } from "assets/images/studentprofiles.svg";
import { ReactComponent as HelpRequests } from "assets/images/helprequests.svg";
import { ReactComponent as ProjectSubmisisons } from "assets/images/projectsubmissions.svg";
import { ReactComponent as ProgressLibrary } from "assets/images/projectlibarry.svg";

export const dashboardRoutes = {
  teacher: [
    {
      icon: <ProgressTracker />,
      label: "progress tracker",
    },
    {
      icon: <StudentProfile />,
      label: "student profile",
    },
    {
      icon: <HelpRequests />,
      label: "help requests",
    },
    {
      icon: <ProjectSubmisisons />,
      label: "project submissions",
    },
    {
      icon: <ProgressLibrary />,
      label: "project library",
    },
  ],
};
