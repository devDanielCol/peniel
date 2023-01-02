import PageHeader from "../components/Home/PageHeader/PageHeader";
import Content from "../components/Layout/Content/General";
import AboutUs from "../components/Home/AboutUs/AboutUs";
import Description from "../components/Home/Description/Description";
import JobServices from "../components/Home/JobServices/JobServices";
import JobSumary from "../components/Home/JobSumary/JobSumary";
import ContactUs from "../components/Home/ContactUs/ContactUs";

export default function Home() {
  return (
    <Content title="Home | Peniel construcciones">
      <PageHeader />
      <AboutUs />
      <Description />
      <JobSumary />
      <ContactUs />
      <JobServices />
    </Content>
  );
}
