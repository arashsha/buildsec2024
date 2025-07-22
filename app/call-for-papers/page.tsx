import Accordion from "app/components/Accordion";
import { CustomMDX } from "app/components/mdx";
import { getBlogPosts } from "app/utils/mdxParser";
import { notFound } from "next/navigation";
import path from "path";
import tracks from "../data/call-for-papers_tracks.json"

export const metadata = {
  title: "Call for paper | Buildsec2024",
  description: "Call for paper page for Buildsec2024",
};
const datapath = path.join(process.cwd(), "app", "data");
export default function Page() {
  let post = getBlogPosts(datapath).find((post) => post.slug === "call-for-papers");

  if (!post) {
    notFound();
  }

  return (
    <section className="px-6 md:px-20">
                  <div className="w-full flex justify-center">
        <img 
          src= "/my-image.jpg" 
          alt="Banner Details" 
          className="w-200xl md:w-200xl lg:w-200xl h-auto" 
        />
      </div>
      <h1 className="text-center">Call for Papers</h1>
      <h2 className="text-2xl font-medium">Tracks:</h2>
      <Accordion track={tracks.aic_track} />
      <Accordion track={tracks.sum_track} />
      <Accordion track={tracks.sri_track} />
      <Accordion track={tracks.grc_track} />
      <Accordion track={tracks.pt_track} />
      <Accordion track={tracks.bcs_track} />
      <Accordion track={tracks.ctt_track} />
      <article className="prose">
            <CustomMDX source={post.content} />
        </article>
    </section>
  );
}
