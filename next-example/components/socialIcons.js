import {
  BsDiscord,
  BsTwitter,
  BsInstagram,
  BsSpotify,
  BsFacebook,
  BsYoutube,
} from "react-icons/bs";
import { useRouter } from "next/router";

function IconBox({ children, url, isHeader }) {
  const router = useRouter();
  return (
    <a href={url} rel="noreferer" target="_blank">
      <div className={isHeader ? "w-4 h-4" : "w-5 h-5"}>{children}</div>
    </a>
  );
}

export function Discord(props) {
  return (
    <IconBox {...props}>
      <BsDiscord />
    </IconBox>
  );
}

export function Twitter(props) {
  return (
    <IconBox {...props}>
      <BsTwitter />
    </IconBox>
  );
}

export function Instagram(props) {
  return (
    <IconBox {...props}>
      <BsInstagram />
    </IconBox>
  );
}

export function Spotify(props) {
  return (
    <IconBox {...props}>
      <BsSpotify />
    </IconBox>
  );
}

export function Facebook(props) {
  return (
    <IconBox {...props}>
      <BsFacebook />
    </IconBox>
  );
}

export function YouTube(props) {
  return (
    <IconBox {...props}>
      <BsYoutube />
    </IconBox>
  );
}
