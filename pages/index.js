import Head from "next/head";
import About from "../components/About";
import Main from "../components/Main";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yusuf | Portfolio WebDev</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/Title-logo1.png" />
      </Head>
      <Main />
      <About />
      <Skills />
    </div>
  );
}
