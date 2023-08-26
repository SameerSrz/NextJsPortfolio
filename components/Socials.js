import Link from "next/link";
import {
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinBoxLine,
  RiBenanceLine,
  RiPinterestLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <>
      <div className="flex items-center gap-x-5 text-lg">
        <Link
        target="_blank"
        rel="noopener noreferrer"
          href={"https://instagram.com/sameer_srz?igshid=OGQ5ZDc2ODk2ZA=="}
          className="hover:text-accent transition-all duration-300"
        >
          <RiInstagramLine />
        </Link>
        <Link
        target="_blank"
        rel="noopener noreferrer"
          href={"https://www.facebook.com/sameer.riaz.1671?mibextid=LQQJ4d"}
          className="hover:text-accent transition-all duration-300"
        >
          <RiFacebookLine />
        </Link>
        <Link
        target="_blank"
        rel="noopener noreferrer"
          href={
            "https://www.linkedin.com/in/sameer-riaz-b67253207?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZ443RkvAQkC27tqa1fDX8Q%3D%3D"
          }
          className="hover:text-accent transition-all duration-300"
        >
          <RiLinkedinBoxLine />
        </Link>
      </div>
    </>
  );
};

export default Socials;
