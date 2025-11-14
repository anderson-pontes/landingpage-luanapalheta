import React from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': {
        src?: string
        alt?: string
        ar?: boolean | string
        'ar-modes'?: string
        'ar-scale'?: string
        'camera-controls'?: boolean | string
        'environment-image'?: string
        'shadow-intensity'?: string
        'ios-src'?: string
        style?: React.CSSProperties
        children?: React.ReactNode
      }
    }
  }
}

