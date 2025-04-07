declare module 'aos' {
  interface AosOptions {
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    disable?: string | boolean | (() => boolean);
    startEvent?: string;
    offset?: number;
    delay?: number;
    anchorPlacement?: string;
  }

  function init(options?: AosOptions): void;
  function refresh(hard?: boolean): void;
  function refreshHard(): void;

  export default {
    init,
    refresh,
    refreshHard
  };
}
