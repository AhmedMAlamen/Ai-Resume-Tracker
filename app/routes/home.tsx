import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "3mk Cv Analyzer" },
    { name: "description", content: "leave it Fot the Goat So You Can Land Your Dream Joooob" },
  ];
}

export default function Home() {
  return <main className="bg-[url('./public/images/bg-main.svg')] bg-cover">
    <Navbar />
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>
            Track Your Application And Resume Rating
        </h1>
        <h2>
          Review your Submission And Check AI-Powered FeedBack
        </h2>
      </div>
    {resumes.length > 0 && (<div className="resumes-section">
      {resumes.map((resume) => (
          <ResumeCard key ={resume.id} resume = {resume}></ResumeCard>
      ))}
    </div>)}
    </section>
  </main>;
}
