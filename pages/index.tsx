import Content from "../components/Layout/Layout";

export default function Home() {
  return (
    <Content>
      <div style={{ overflow: "hidden" }}>
        <picture style={{ transform: "translateX(-75px)" }}>
          <img
            alt=""
            aria-hidden="true"
            width="4377"
            className="position-absolute top-0 events-none"
            style={{
              maxWidth: "calc(230vw + 1670px)",
              transform: "translateX(-45%)",
            }}
            src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp"
          ></img>
        </picture>
      </div>
    </Content>
  );
}
