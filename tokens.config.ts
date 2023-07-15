import { defineTheme } from 'pinceau'

export default defineTheme({
  color: {

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
        initial: '#f4f4f5b3',
        dark: '#18181bb3'
      }
    }
  },
  elements: {
    backdrop: {
      background: {
        dark: '#060318'
      }
    },

    border: {
      primary: {
        static: {
          dark: 'var(--color-primary-900)'
        },

        hover: {
          dark: 'var(--color-primary-800)'
        }
      }
    }
  }
})
