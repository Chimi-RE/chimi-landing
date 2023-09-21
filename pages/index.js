import Link from "next/link";
import Tile from "../components/Tile";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-3 gap-5 mx-2 mt-2">
        <Tile
          title="Documents"
          description="How to screen, communicate, manage tenants"
          linkText="Go to Documents"
          url="https://app.clickup.com/8625442/v/dc/87792-165"
        />
        <Tile
          title="Applicant Screening - Airtable"
          description="Keep the records of rental applicants"
          linkText="Go to Airtable"
          url="https://airtable.com/invite/l?inviteId=invMz90yetlZzwXX9&inviteToken=3357ecdda2b175f6267ad38a40f06ab283e5044fc041a42fd3582c7fcdfac3e7&utm_medium=email&utm_source=product_team&utm_content=transactional-alerts"
        />
        <Tile
          title="RentRedi"
          description="Manage tenant, payment and maintenance requests"
          url="https://app.rentredi.com"
        />
        <Tile
          title="Google Drive"
          description="File storage and sharing"
          url="https://drive.google.com"
        />
        <Tile
          title="Google Calendar"
          description="Manage appointments and events"
          url="https://calendar.google.com/"
        />
        <Tile
          title="Calendly"
          description="Manage appointments"
          url="https://calendly.com/chimi-realestate"
        />
      </div>
    </>
  );
}
