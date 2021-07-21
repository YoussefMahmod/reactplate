import { useParams } from "react-router-dom";

export default function rank() {
  const { rank } = useParams();
  return (
    <div class="rank-description">
      Reactplate will be number <span class="rank">{rank}</span>
    </div>
  );
}
