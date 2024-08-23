import { useEffect, useRef } from "react";

export default function Banner720(props) {
  const banner = useRef();
console.log(props)
  const atOptions = {
    key: `${props.id}`,
    format: "iframe",
    height: `${props.height}`,
    width: `${props.width}`,
  };

  useEffect(() => {
    if (!banner.current.firstChild) {
      const conf = document.createElement("script");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `//www.topcreativeformat.com/${props.id}/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      if (banner.current) {
        banner.current.append(conf);
        banner.current.append(script);
      }
    }
  }, []);

  return <div ref={banner} />;
}
