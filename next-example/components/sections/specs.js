import Section from "../section";
import Title from "../title";

const BlockContent = require("@sanity/block-content-to-react");

export default function Specifications({ heading, specs }) {
  console.log(specs);
  return (
    <Section fullHeight>
      <Title children={heading} />
      {/* {specs &&
        specs.names.map((item) => (
          <div className="grid grid-cols-2 lg:gap-8 border-b py-1 max-w-4xl px-4 mx-auto text-xs text-gray-500 hover:text-gray-800">
            <div className="text-right pr-4">{item.name}</div>
            <div>{item.value}</div>
          </div>
        ))}
      <div className="text-gray-500 max-w-4xl mx-auto px-8 mt-8 text-xs">
        {specs && <BlockContent blocks={specs.finePrint} />}
      </div> */}
    </Section>
  );
}
