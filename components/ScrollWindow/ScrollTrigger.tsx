import isNavigator from "../../util/helpers/isNavigator";

interface ScrollEvent extends Event {
  scrollY: number;
}

interface IScrollTriggerProps {
  onEventScroll(event: ScrollEvent): void;
}

const ScrollTrigger = ({ onEventScroll }: IScrollTriggerProps) => {
  const onScrollHandler = (event: Event) => {
    void onEventScroll({ ...event, scrollY: window.scrollY });
  };

  if (isNavigator()) {
    window.onscroll = onScrollHandler;
  }
};

export default ScrollTrigger;
