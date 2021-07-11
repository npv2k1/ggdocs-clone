import "@material-tailwind/react/tailwind.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import style from "../style.css";

import { Provider as AuthProvider } from "next-auth/client";
// const MyApp = ({ Component, pageProps }) => {
//   const Layout = Component.Layout || (({ children }) => <>{children}</>);
//   return (
//     <AuthProvider session={pageProps.session}>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </AuthProvider>
//   );
// };
function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider session={pageProps.session}>
        <Head>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
