import useWindowSize from './Hooks/useWindowSize';

const BREAKPOINTS = [
  [1200, 'desktop'],
  [768, 'tablet'],
]

export function getDevice() {

  debugger;
  const size = useWindowSize();

  for (let i = 0; i < BREAKPOINTS.length; i++) {
    const breakpoint = BREAKPOINTS[i];
    if (breakpoint[0] < size.width) {
      return breakpoint[1]
    }
  }

  return 'mobile';
}
