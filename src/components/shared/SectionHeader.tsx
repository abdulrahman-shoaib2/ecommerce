import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function SectionHeader({link, title, sectionName}:{link?:string, title:{text:string, highlight:string}, sectionName:string}) {
  return (

    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8">
      <div className="flex  items-center gap-3 my-8">
        <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full" />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          {title.text} <span className="text-emerald-600">{title.highlight}</span>
        </h2>
      </div>
      {
       link && <Link
          className="text-primary-600 self-end sm:self-auto hover:text-primary-700 font-medium flex items-center cursor-pointer"
          href={link}
        >
          View All {sectionName}
          <FontAwesomeIcon icon={faArrowRight} className="svg-inline--fa fa-arrow-right ml-2" />
        </Link>

      }
    </div>
  )
}
