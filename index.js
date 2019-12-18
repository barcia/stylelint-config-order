
module.exports = {
  plugins: 'stylelint-order',
  rules: {
    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        {
          type: 'at-rule',
          name: 'expand'
        },
        {
          type: 'at-rule',
          name: 'include'
        },
        'declarations',
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: true
        },
        'rules',
        {
          type: 'rule',
          selector: /^&:\w/
        },
        {
          type: 'rule',
          selector: /^& /
        },
        'at-rules'
      ],
      {
        severity: 'warning'
      }
    ],
    'order/properties-order': [
      [
        {
          properties: [
            'position',
            'top',
            'right',
            'bottom',
            'left',
            'float',
            'clear',
            'z-index'
          ]
        },
        {
          properties: [
            'display',
            'align-content',
            'align-items',
            'align-self',
            'flex',
            'flex-basis',
            'flex-direction',
            'flex-flow',
            'flex-grow',
            'flex-shrink',
            'flex-wrap',
            'justify-content',
            'order'
          ]
        },
        {
          properties: [
            'width',
            'height',
            'max-width',
            'max-height',
            'min-width',
            'min-height'
          ]
        },
        {
          properties: [
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left'
          ]
        },
        {
          properties: [
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'margin-collapse',
            'margin-top-collapse',
            'margin-right-collapse',
            'margin-bottom-collapse',
            'margin-left-collapse'
          ]
        },
        {
          properties: [
            'border',
            'border-collapse',
            'border-top',
            'border-right',
            'border-bottom',
            'border-left',
            'border-color',
            'border-image',
            'border-top-color',
            'border-right-color',
            'border-bottom-color',
            'border-left-color',
            'border-spacing',
            'border-style',
            'border-top-style',
            'border-right-style',
            'border-bottom-style',
            'border-left-style',
            'border-width',
            'border-top-width',
            'border-right-width',
            'border-bottom-width',
            'border-left-width',
            'border-radius',
            'border-top-right-radius',
            'border-bottom-right-radius',
            'border-bottom-left-radius',
            'border-top-left-radius',
            'border-radius-topright',
            'border-radius-bottomright',
            'border-radius-bottomleft',
            'border-radius-topleft'
          ]
        },
        {
          properties: [
            'overflow',
            'overflow-x',
            'overflow-y',
            'clip'
          ]
        },
        {
          properties: [
            'font',
            'font-family',
            'font-size',
            'font-smoothing',
            'osx-font-smoothing',
            'font-style',
            'font-weight',
            'font-display',
            'src',
            'hyphens',
            'line-height',
            'letter-spacing',
            'word-spacing',
            'text-align',
            'text-decoration',
            'text-indent',
            'text-overflow',
            'text-rendering',
            'text-size-adjust',
            'text-shadow',
            'text-transform',
            'word-break',
            'word-wrap',
            'white-space',
            'vertical-align'
          ]
        },
        {
          properties: [
            'list-style',
            'list-style-type',
            'list-style-position',
            'list-style-image'
          ]
        },
        {
          properties: [
            'color',
            'background',
            'background-attachment',
            'background-color',
            'background-image',
            'background-position',
            'background-repeat',
            'background-size',
            'background-clip'
          ]
        },
        'content',
        'quotes',
        'outline',
        'outline-color',
        'outline-offset',
        'outline-style',
        'outline-width',
        'opacity',
        'filter',
        'visibility',
        'size',
        'zoom',
        'transform',
        'box-align',
        'box-flex',
        'box-orient',
        'box-pack',
        'box-shadow',
        'box-sizing',
        'table-layout',
        'animation',
        'animation-delay',
        'animation-duration',
        'animation-iteration-count',
        'animation-name',
        'animation-play-state',
        'animation-timing-function',
        'animation-fill-mode',
        'transition',
        'transition-delay',
        'transition-duration',
        'transition-property',
        'transition-timing-function',
        'appearance',
        'pointer-events',
        'cursor',
        'backface-visibility',
        'resize',
        'user-select',
        'interpolation-mode',
        'direction',
        'marks',
        'page',
        'set-link-source',
        'unicode-bidi',
        'speak'
      ],
      {
        severity: 'warning'
      }
    ]
  }
}
