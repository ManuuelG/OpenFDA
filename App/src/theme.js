import { mode } from '@chakra-ui/theme-tools'
import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  styles: {
    global: props => ({
      ':root': {
        '--text': mode('#f1f1f1', '#DC0A2D')(props),
        '--background': mode('#DC0A2D', '#f1f1f1')(props),
        '--element': '#f1f1f1',
        '--paddingX': '1.3rem',
        '--headerH': '40px',
        '--steel': '#B7B9D0',
        '--water': '#6493EB',
        '--bug': '#A7B723',
        '--dragon': '#7037FF',
        '--electric': '#F9CF30',
        '--ghost': '#70559B',
        '--fire': '#F57D31',
        '--fairy': '#E69EAC',
        '--ice': '#9AD6DF',
        '--fighting': '#C12239',
        '--normal': '#AAA67F',
        '--grass': '#74CB48',
        '--psychic': '#FB5584',
        '--rock': '#B69E31',
        '--dark': '#75574C',
        '--ground': '#DEC16B',
        '--poison': '#A43E9E',
        '--flying': '#A891EC',
      },
      body: {
        marginBottom: '2rem',
      },
    }),
  },
  semanticTokens: {
    colors: {
      background: 'var(--background)',
      text: 'var(--text)',
      elements: 'var(--element)',
    },
    sizes: {
      headerH: 'var(--headerH)',
    },
    space: {
      headerH: 'var(--headerH)',
    },
  },
})

export default theme
