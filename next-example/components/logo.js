export default function Logo({ settings }) {
  function createMarkup() {
    const { siteLogo } = settings;
    return { __html: `${siteLogo}` };
  }
  return (
    <div className="w-full max-w-xl mx-auto py-16 px-16 lg:px-0 absolute top-1/6 left-1/2 transform -translate-x-1/2 fill-black">
      <div dangerouslySetInnerHTML={createMarkup()}></div>
    </div>
  );
}

{
  /* <div dangerouslySetInnerHTML={createMarkup()}></div> */
}
