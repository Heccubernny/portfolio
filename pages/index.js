import Head from "next/head";
import styles from "../styles/Home.module.css";
import Seo from "../components/Seo";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
// import Skill from "../components/Skill";
import Hero from "../components/Hero";
import getLatestRepos from "pages/api/getLatestRepos";
import Contact from "@components/Contact";
import userData from "@constants/data";

export default function Home({ repositories }) {
  return (
    <Seo
      title="Heccubernny - Software Developer"
      description={userData.description}
    >
      <Hero />
      <FavouriteProjects />
      {/* <Skill /> */}
      <LatestCode repositories={repositories} />
      <Contact />
    </Seo>
  );
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);

  return {
    props: {
      repositories,
    },
  };
};
