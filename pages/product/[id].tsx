import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Script from "next/script";
import styles from "../../styles/CatalogDetail.module.scss";
import type {
  Image as ImageTag,
  Images,
  Variant,
  Product,
} from '../../src/types'
import Navbar from "../../src/components/navbar";
import Footer from "../../src/components/footer";
import { formatCurrency, percentOff } from "../../src/utils/formatter";

export default function CatalogDetail({
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
    <>
      <Navbar />
      <div className='container'>
        <Head>
          <title key='title'>Detail of { product.name }</title>
          <meta name="description" content={`Detail of ${product.name}`} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={'main ' + styles['product-detail-container']}>
          <Image key={product.id} src={product.images[0].small.url} alt={`Image of ${product.name}`} width={250} height={250} />
          <div className={styles.grid}>
                <h1 className={styles.title}>{ product.name }</h1>
                <p><span className={styles.price}>{formatCurrency(product.price)}</span> <span className={styles.discounted}>{formatCurrency(product.discountedPrice)}</span></p>{" "} {percentOff(product.price, product.discountedPrice)} off
                {product.variance.map((variant) => {
                  return <>
                    <label htmlFor={variant.label}>Choose a {variant.label}:</label>
                    <select name={variant.label} id={variant.label}>
                      {variant.values.map((value) => {
                        return <option value={value}>{value}</option>
                      })}
                    </select>
                  </>
                })}
          </div>
        </main>

        <Footer/>
      </div>
    </>
  );
}

export const getServerSideProps = async (context: { query: { id: any; }; }) => {
  const { id } = context.query

  const res = await fetch(
    `https://my-json-server.typicode.com/khalifavi/demo-json-server/products/${id}`
  );
  const product: Product = await res.json();
  // console.debug(JSON.stringify(product));

  if (Object.keys(product).length === 0) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      product,
    },
  };
};
