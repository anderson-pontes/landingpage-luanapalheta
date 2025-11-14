declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        src?: string
        alt?: string
        ar?: boolean | string
        'ar-modes'?: string
        'ar-scale'?: string
        'camera-controls'?: boolean | string
        'environment-image'?: string
        'shadow-intensity'?: string
        'ios-src'?: string
      },
      HTMLElement
    >
  }
}

