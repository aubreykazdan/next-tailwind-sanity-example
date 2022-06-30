import Header from "./sections/header";
import Footer from "./sections/footer";
import useSWR from "swr";

export default function Layout({ children, mainNav, socials }) {
  // const fetcher = (...args) => fetch(...args).then((res) => res.json());

  // const { data, error } = useSWR(mainNav, fetcher);

  // if (error) return <div>Failed to load</div>;
  // if (!data) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header mainNav={mainNav} /> */}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
