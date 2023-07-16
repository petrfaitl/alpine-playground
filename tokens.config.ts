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
    },

    s: {},
    sla: {},
    slat: {},
    sl: {}
  },
  alpine: {
    body: {
      backgroundColor: {
        initial: '#ffffff',
        dark: 'var(--color-slate-950)'
      }
    },

    backdrop: {
      backgroundColor: {
        initial: '',
        dark: ''
      }
    }
  },
  elements: {
    backdrop: {
      background: {
        dark: '#0f172a33'
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
    },

    surface: {
      background: {
        base: {
          dark: 'var(--color-slate-900)'
        }
      }
    }
  }
})