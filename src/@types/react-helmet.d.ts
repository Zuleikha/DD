declare module 'react-helmet' {
  import * as React from 'react';

  interface HelmetProps {
    title?: string;
    titleTemplate?: string;
    defaultTitle?: string;
    defer?: boolean;
    encodeSpecialCharacters?: boolean;
    base?: {
      target?: string;
      href?: string;
    };
    meta?: {
      name?: string;
      property?: string;
      content?: string;
      httpEquiv?: string;
      charSet?: string;
    }[];
    link?: {
      rel?: string;
      href?: string;
      sizes?: string;
      type?: string;
      media?: string;
      color?: string;
      as?: string;
      crossOrigin?: string;
    }[];
    script?: {
      src?: string;
      type?: string;
      async?: boolean;
      defer?: boolean;
      innerHTML?: string;
    }[];
    noscript?: {
      innerHTML?: string;
    }[];
    style?: {
      type?: string;
      cssText?: string;
    }[];
    htmlAttributes?: {
      [key: string]: string;
    };
    bodyAttributes?: {
      [key: string]: string;
    };
    onChangeClientState?: (newState: any, addedTags: any, removedTags: any) => void;
  }

  export class Helmet extends React.Component<HelmetProps> {
    static renderStatic(): {
      base: any;
      bodyAttributes: any;
      htmlAttributes: any;
      link: any;
      meta: any;
      noscript: any;
      script: any;
      style: any;
      title: any;
      titleAttributes: any;
    };
  }

  export default Helmet;
}
