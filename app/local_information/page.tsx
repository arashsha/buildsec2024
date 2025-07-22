import { CustomMDX } from "app/components/mdx";
import { getBlogPosts } from "app/utils/mdxParser";
import { notFound } from "next/navigation";
import path from "path";

export const metadata = {
  title: "Local Information | Buildsec2024",
  description: "Local Information for Buildsec2024",
};
const datapath = path.join(process.cwd(), "app", "data");
export default function Page() {
  let post = getBlogPosts(datapath).find((post) => post.slug === "local-information");

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
      <article className="prose">
            <CustomMDX source={post.content} />
        </article>
    </section>
  );
}
