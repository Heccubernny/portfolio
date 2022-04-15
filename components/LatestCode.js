import React, { useEffect, useState } from "react";
import Link from "next/link";
import getLatestRepos from "../pages/api/getLatestRepos";
import userData from "@constants/data";

export default function LatestCode({ repositories }) {
  const [repos, setRepos] = useState([]);

  useEffect(async () => {
    // let latestRepos = await getLatestRepos(userData);
    // console.log("latestRepos", latestRepos);
    setRepos(repositories);
  }, []);
  return (
    <section className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900 pb-40">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:pt-40 mx-10">
          <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
            Github Respository
          </h1>

          <a
            href={`https://github.com/${userData.githubUsername}`}
            className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700"
          >
            
            <p>More</p>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:-mt-10 gap-y-20">
        {/* Single github Repo */}

        {repos &&
          repos.map((latestRepo, idx) => (
            <GithubRepoCard latestRepo={latestRepo} key="idx" />
          ))}
      </div>
    </section>
  );
}

const GithubRepoCard = ({ latestRepo }) => {
  return (
    <div className="github-repo">
      <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
        {latestRepo.name}
      </h1>
      <p className="text-base font-normal my-4 text-gray-500">
        {latestRepo.description}
      </p>
      <a
        href={latestRepo.clone_url}
        className="font-semibold group flex flex-row space-x-2 w-full items-center"
      >
        <p>View Repository </p>
        <div className="transform  group-hover:translate-x-2 transition duration-300">
          &rarr;
        </div>
      </a>
    </div>
  );
};
