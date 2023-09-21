import { Card } from "flowbite-react";
import Link from "next/link";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";

function Tile({ title, description, url, linkText }) {
  return (
    <Card>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>{title}</p>
      </h5>
      {description && (
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      )}
      <Button
        gradientDuoTone="purpleToBlue"
        as={Link}
        href={url}
        target="_blank"
      >
        {linkText ? linkText : "Go to " + title}
        <HiOutlineArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </Card>
  );
}

export default Tile;
