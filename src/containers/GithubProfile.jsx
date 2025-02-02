import React, { useState, useEffect, Suspense } from "react";
import Loading from "../components/Loading";
import { footer, openSource } from "../portfolio";
import { get } from "axios";
import GithubProfileCard from "../components/GithubProfileCard";

const GithubProfile = () => {
  return (
    <Suspense fallback={<Loading />}>
      <GithubProfileCard data={footer} />
    </Suspense>
  );
};

export default GithubProfile;
