/** @jsx jsx */
import { jsx } from "theme-ui";
import SimpleCard from "./SimpleCard";
import useGridQuery from "../hooks/useGridQuery";

function InstagramGrid({ card = SimpleCard }) {
  const data = useGridQuery();
  console.log(data);
  const Child = card;
  return (
    data.allInstaNode.edges && (
      <div
        sx={{
          display: "flex",
          flexWrap: "wrap",
          mx: -2
        }}
      >
        {data.allInstaNode.edges.map(({ node }) => {
          console.log(node);
          return <Child key={node.id} {...node} />;
        })}
      </div>
    )
  );
}

export default InstagramGrid;
