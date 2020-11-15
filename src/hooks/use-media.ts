import { useEffect, useState } from 'react';

declare const window: Window;

const useMedia = (query: string) => {
  const media = window.matchMedia(query).matches;
  const [matches, setMatches] = useState(media);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [query]);

  return matches;
};

export default useMedia;
