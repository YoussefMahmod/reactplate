import { useParams } from "react-router-dom";

export default function rank() {
  const { rank } = useParams();
  return <div>Reactplate will be number {rank}</div>;
}
