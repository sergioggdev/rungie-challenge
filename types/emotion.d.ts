import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      red: string;
      green: string;
      blue: string;
    };
    elevation: {
      card: FlattenSimpleInterpolation;
    };
  }
}
