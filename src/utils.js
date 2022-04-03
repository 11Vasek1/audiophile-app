import useWindowSize from './Hooks/useWindowSize';

export function getDevice() {
  const size = useWindowSize();
  if (size.width <= 375) {
    return 'mobile';
  } else if (size.width <= 768) {
    return 'tablet';
  } else {
    return 'desktop';
  }
}
