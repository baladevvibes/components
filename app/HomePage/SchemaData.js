const SchemaData = [
  {
    _id: "001",
    url: "https://makecomponents.com/",
    schema: `{
  "@context": "https://schema.org/",
  "@type": "WebSite",
  "name": "Make Components",
  "url": "https://makecomponents.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://makecomponents.com/{search_term_string}",
    "query-input": "required name=search_term_string"
  }
}`,
  },
];

export default SchemaData;
