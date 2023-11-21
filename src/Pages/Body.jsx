import React from "react";
import Description from "../Components/Description";
import Profile from "../Components/Profile";
import Report from "../Components/Report";
import Target from "../Components/Target";
import Manage from "../Components/Manage";
import LeadManagement from "../Components/LeadManagement";
export default function Body() {
  return (
    <>
      <Description />
      <Profile />
      <Report />
      <Target />
      <Manage />
      <LeadManagement />
    </>
  );
}
