import { SyntheticEvent } from "react";

type Props = {
  onClick?: (e: SyntheticEvent<any>) => void;
  onClickDelay?: number;
  onDoubleClick?: (e: SyntheticEvent<any>) => void;
  onDoubleClickDelay?: number;
  onLongPress?: (e: SyntheticEvent<any>) => void;
  onLongPressDelay?: number;
  onMouseEnter?: (e: SyntheticEvent<any>) => void;
  onMouseUp?: (e: SyntheticEvent<any>) => void;
};

export const useMouseEvents = ({
  onClick,
  onDoubleClick,
  onLongPress,
  onLongPressDelay = 1000,
  onMouseEnter,
  onMouseUp,
}: Props) => {
  let timer: ReturnType<typeof setTimeout>;

  const startWaiting = (e: SyntheticEvent<any>) => {
    clearTimeout(timer);
    const cloneEvent = { ...e };
    timer = setTimeout(
      (e) => {
        onLongPress && onLongPress(e);
      },
      onLongPressDelay,
      cloneEvent
    );
  };

  const stopWaiting = (e: SyntheticEvent<any>) => {
    clearTimeout(timer);
    onMouseUp && onMouseUp(e);
  };

  return {
    ...(onClick && {
      onClick: (e: SyntheticEvent<any>) => onClick(e),
    }),

    ...(onDoubleClick && {
      onDoubleClick: (e: SyntheticEvent<any>) => onDoubleClick(e),
    }),

    ...(onLongPress && {
      onMouseDown: (e: SyntheticEvent) => startWaiting(e),
      onMouseUp: (e: SyntheticEvent) => stopWaiting(e),
    }),

    ...(onMouseEnter && {
      onMouseEnter: (e: SyntheticEvent) => onMouseEnter(e),
    }),
  };
};
