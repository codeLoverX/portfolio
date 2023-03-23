import { GetStaticProps } from 'next'
import { groq } from 'next-sanity'

import Contact from '@/components/contact-form';
import About from '@/components/hero/about';
import Intro from '@/components/hero/intro';
import Layout from '@/components/layout/Layout';
import Particulars from '@/components/particulars';
import Portfolio from '@/components/portfolio';
import Seo from '@/components/Seo';

import { client } from '@/client/client';

import { Main } from '@/types/main';
import { Particular } from '@/types/particular';
import { Project } from '@/types/project';

interface HomeProps {
  main: Main, projects: Project[], particulars: Particular[]
};

export default function HomePage({ projects, main, particulars }: HomeProps) {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <svg width="0" height="0">
       <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
        <stop stopColor="#60a5fa" offset="50%" />
        <stop stopColor="#c084fc" offset="70%" />
        <stop stopColor="#f472b6" offset="100%" />
      </linearGradient>
      </svg>
      <main>
        <section>
          <Intro main={main} />
          <About main={main} />
          <Portfolio projects={projects} />
          <Particulars particulars={particulars} />
          <Contact />
        </section>
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const [projects, main, particulars] = await Promise.all([
    client.fetch(groq`*[_type == "portfolio"]`),
    client.fetch(groq`*[_type == "main"]`),
    client.fetch(groq`*[_type == "particulars"]`),
  ]);

  return {
    props: {
      projects,
      main: main[0],
      particulars
    }
  };
};
