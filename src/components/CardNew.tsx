import Datetime from "./Datetime";
import type { BlogFrontmatter } from "@content/_schemas";

export interface Props {
  href?: string;
  frontmatter: BlogFrontmatter;
  secHeading?: boolean;
}

export default function CardNew({
  href,
  frontmatter,
  secHeading = true,
}: Props) {
  const { title, pubDatetime, description } = frontmatter;
  return (
    <a className="group relative block" href={href}>
      <span
        className="absolute inset-0 -z-10 border-2 border-dashed border-skin-accent"
        aria-hidden="true"
      />
      <li className="border-neutral-500 my-6 cursor-pointer border-2 bg-skin-fill p-4 group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="inline-block h-full w-full text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 transition focus-visible:no-underline focus-visible:underline-offset-0">
          {secHeading ? (
            <h2 className="text-lg font-medium">
              {title}
            </h2>
          ) : (
            <h3 className="text-lg font-medium">
              {title}
            </h3>
          )}
        </div>
        <Datetime datetime={pubDatetime} />
        <p>{description}</p>
      </li>
    </a>
  );
}
