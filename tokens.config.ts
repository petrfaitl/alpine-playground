import { defineTheme } from 'pinceau'

export default defineTheme({
  color: {
    royalblue: {
      900: '#060318'
    },

    r: {},
    ro: {},
    roy: {},
    roya: {},
    royal: {},
    royalb: {},
    royalbl: {},
    royablue: {},
    royblue: {},
    roblue: {},
    rblue: {},
    lblue: {},
    liblue: {},
    ligblue: {},
    lighblue: {},
    g: {},
    l: {},
    li: {},
    lih: {},
    lig: {},
    ligh: {},
    light: {},
    lightbl: {},
    lightblu: {}
  },

  alpine: {
    body: {
      backgroundColor: {
        initial: '#ffffff',
        dark: '#060318'
      }
    },

    backdrop: {
      backgroundColor: {
        initial: '#f4f4f5',
        dark: '#18181b'
      }
    }
  },
  elements: {
    backdrop: {
      background: {
        dark: 'var(--color-royalblue-900)'
      }
    },

    border: {
      primary: {
        static: {
          dark: 'var(--color-primary-900)'
        },

        hover: {
          dark: 'var(--color-lightblue-900)'
        }
      }
    }
  }
})
