import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import ProfileDashboard from "../components/profile/ProfileDashboard";

const Profile = () => {
  return (
    <div>
      <BreadCrumb page="Profile" />
      <ProfileDashboard />
    </div>
  );
};

export default Profile;
