import { motion } from "framer-motion";
import {
  Twitter,
  Spotify,
  Facebook,
  Instagram,
  Discord,
  YouTube,
} from "./socialIcons";

export default function SiteSocials({ socials }) {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      className="flex space-x-3 justify-end mt-8 lg:mt-0 text-xl"
    >
      {socials.discord && <Discord url={socials.discord} isHeader />}

      {socials.twitter && <Twitter url={socials.twitter} isHeader />}

      {socials.instagram && <Instagram url={socials.instagram} isHeader />}

      {socials.spotify && <Spotify url={socials.spotify} isHeader />}

      {socials.youtube && <YouTube url={socials.youtube} isHeader />}

      {socials.facebook && <Facebook url={socials.facebook} isHeader />}
    </motion.div>
  );
}
