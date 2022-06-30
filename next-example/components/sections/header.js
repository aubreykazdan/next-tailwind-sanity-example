import Headroom from "react-headroom";
import Link from "next/link";
import Logo from "../logo";
import SiteSocials from "../siteSocials";
import NavLink from "../navlink";
import { MobileMenu } from "../mobileMenu";

export default function Header({ siteLogo, mainNav, socials }) {
  const { items } = mainNav;
  return (
    <Headroom>
      <section className=" bg-white text-black p-4 md:py-8 md:px-0 relative z-1 border-b-2 border-black">
        <div className="container mx-auto uppercase font-bold text-xs items-center flex justify-between">
          <div className="flex items-center justify-center">
            <Link href="/">
              <div className="w-32 md:w-48 md:ml-2 relative z-1">
                {/* <Logo logo={mainLogo} /> */}
              </div>
            </Link>
            <ul className="hidden lg:flex ml-8 tracking-wide">
              {items &&
                items.map((item) => {
                  const { external, internal, _key, heading } = item;
                  return (
                    <li key={_key}>
                      {internal ? (
                        <NavLink
                          isInternal
                          href={
                            internal.slug.current == "home"
                              ? ""
                              : `/${internal.slug.current}`
                          }
                          children={heading}
                        />
                      ) : external ? (
                        <NavLink
                          isExternal
                          href={external}
                          children={heading}
                        />
                      ) : null}
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="lg:hidden">
            <MobileMenu mainNav={mainNav} />
          </div>
        </div>
      </section>
    </Headroom>
  );
}
