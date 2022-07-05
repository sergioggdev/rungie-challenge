import Head from "next/head";

import { MainContainer } from "./layout.styled";

type Props = {
  children: JSX.Element;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Rungie challenge</title>
        <meta
          name="description"
          content="Rungie cripto challenge to the moon"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>{children}</MainContainer>
    </>
  );
};
