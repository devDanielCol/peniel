import { Box } from "@mui/material";
import { Container } from "@mui/system";
import Presentation from "../components/AboutUs/Presentation/Presentation";
import Content from "../components/Layout/Content/General";

export default function Home() {
  return (
    <Content title="Home | Peniel construcciones">
      <Presentation />
      <Container>
        <Box sx={{ minHeight: "100vh" }}></Box>
      </Container>
    </Content>
  );
}
