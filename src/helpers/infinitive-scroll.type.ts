export type InfiniteScrollSide = 'start' | 'end' | 'both';

export type InfiniteScrollStatus = 'ok' | 'empty' | 'loading' | 'error';

export type InfiniteScrollOnLoad = (options: {
  side: InfiniteScrollSide;
  done: (status: InfiniteScrollStatus) => void;
}) => any | undefined;
