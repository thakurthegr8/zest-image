import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import images from "../constants/test-images";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

const loader = (src) => `http://localhost:3000/api/og?${src}`;

export default function Home() {
  const imageUrls = images.map((item) => {
    const pairs = Object.keys(item).map(
      (pairItem) => `${pairItem}=${item[pairItem]}`
    );
    const urlString = pairs.join("&");
    return urlString;
  });
  return (
    <div>
      {imageUrls.map((item, index) => (
        <Image
          src={loader(item)}
          width={200}
          height={200}
          fit="cover"
          loading="eager"
          key={index}
        />
      ))}
    </div>
  );
}
