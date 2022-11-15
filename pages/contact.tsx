import { FC } from "react";
import { countriesApi } from "../axios/http";
import Header, { IStats } from "../components/Header/Molecules/Header";

interface IContactPageProps {
  request: IStats[];
}

const Contact: FC<IContactPageProps> = ({ request }) => {
  return <Header request={request} />;
};

export const getStaticProps = async () => {
  const { data: request } = await countriesApi.request<object>({
    method: "GET",
  });

  return {
    props: {
      request,
    },
  };
};

export default Contact;
