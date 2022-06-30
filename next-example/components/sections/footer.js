import Section from "../section";

export default function Footer() {
  return (
    <Section fullWidth fullHeight>
      <footer className="py-8 mt-32 text-xxs">
        <div className="mx-4 lg:mx-0 flex items-center justify-between border-t">
          <img src="" alt="Image Goes Here" className="h-12" />
          <div>© Bureau1024 {new Date().getFullYear()}</div>
        </div>
      </footer>
    </Section>
  );
}
