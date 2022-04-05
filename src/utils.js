import useWindowSize from './Hooks/useWindowSize';

export function getDevice() {
  const size = useWindowSize();
  if (size.width <= 768) {
    return 'mobile';
  } else if (size.width <= 1200) {
    return 'mobile';
  } else {
    return 'desktop';
  }
}
