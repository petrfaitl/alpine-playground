import { defineTheme } from 'pinceau'

export default defineTheme({
  color: {
    slate: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617',
    }
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
      },
      filter: 'blur(20px)'
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
