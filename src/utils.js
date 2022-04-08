import useWindowSize from './Hooks/UseWindowSize';

const BREAKPOINTS = [
  [1200, 'desktop'],
  [768, 'tablet'],
];

export function getDevice() {
  const size = useWindowSize();
  for (let i = 0; i < BREAKPOINTS.length; i++) {
    const breakpoint = BREAKPOINTS[i];
    if (breakpoint[0] < size.width) {
      return breakpoint[1];
    }
  }

  return 'mobile';
}

export function getDeviceForImage() {
  const size = useWindowSize();
  if (size.width <= 768) {
    return 'mobile';
  } else {
    return 'desktop';
  }
}

export function fixProductName(name) {
  const copiedName = name.split(' ');
  return copiedName[0];
}
