import dynamic from "next/dynamic";

const AdBanner = dynamic(
  () => import("./AdBanner").then((mod) => mod.AdBanner),
  {
    ssr: false,
  }
);

export default AdBanner;
