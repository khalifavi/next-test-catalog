import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import styles from "../styles/Catalog.module.scss";
import type {
  Image as ImageTag,
  Images,
  Variant,
  Product,
} from '../src/types'
import Navbar from "../src/components/navbar";
import Footer from "../src/components/footer";
import { formatCurrency, percentOff } from "../src/utils/formatter";

export default function Catalog({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Head>
          <title key='title'>Catalog</title>
          <meta name="description" content="Catalog" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className='main'>
          <p className={styles.description}>Latest Products</p>

          <div className={styles.grid}>
            {products.map((item) => (
              <a href={`/product/${item.id}`} className={styles.card}>
                <Image key={item.id} src={item.images[0].small.url} alt={`Image of ${item.name}`} width={250} height={250} />
                {" "}
                <h4>{item.name}</h4> <p><span className={styles.price}>{formatCurrency(item.price)}</span> <span className={styles.discounted}>{formatCurrency(item.discountedPrice)}</span>{" "} <span className={styles.off}>{percentOff(item.price, item.discountedPrice)} off{" "}</span> </p>
              </a>
            ))}
          </div>
        </main>

        <Footer/>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://my-json-server.typicode.com/khalifavi/demo-json-server/products"
  );
  const products: Product[] = await res.json();
  // console.debug(JSON.stringify(products[0]));

  return {
    props: {
      products,
    },
  };
};
