export default function Tagline({ children }) {
  return (
    <span className="flex justify-center md:text-2xl text-xl font-extralight italic my-20">
      {children}
    </span>
  );
}
