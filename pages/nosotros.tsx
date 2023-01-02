import Article from "../components/AboutUs/Article/Article";
import Presentation from "../components/AboutUs/Presentation/Presentation";
import ContentSimple from "../components/Layout/Content/Simple";

export default function Home() {
  return (
    <ContentSimple title="Sobre nostros | Peniel construcciones">
      <Presentation />
      <Article />
    </ContentSimple>
  );
}
