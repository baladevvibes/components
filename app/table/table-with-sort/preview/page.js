import React from "react";
import TableWithSortPre from "./TableWithSortPre";

export const metadata = {
  title: "Table with sort",
  description:
    "This component create using CSS framework tailwindcss. It full responsive component. This template used for Table",
    keywords:"Table,free components,free code, make components, make component",
  openGraph: {
    title: "Table with sort",
    description: "This component create using CSS framework tailwindcss. It full responsive component. This template used for Table",
    url: "https://www.makecomponents.com/table/table-with-sort/preview",
    siteName: "www.makecomponents.com",
    images: [
      {
        url: "https://www.makecomponents.com/Image/table/table001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://www.makecomponents.com/Image/table/table001.webp", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Table with sort",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function page() {
  return (
   <>
   <TableWithSortPre/>
   </>
  );
}
