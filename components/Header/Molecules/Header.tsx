import Image from "next/image";

export interface IStats {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
}

interface IHeaderProps {
  request: IStats[];
}

const Header = ({ request }: IHeaderProps) => {
  console.log(request);

  return (
    <>
      {request.map(({ name, flags }, i) => {
        return (
          <div key={i}>
            <Image width={100} height={100} src={flags.png} alt={name.common} />
            <div>{name.common}</div>
          </div>
        );
      })}
    </>
  );
};

export default Header;
