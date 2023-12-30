// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './styles/index.css'
import 'inter-ui/inter.css';
import 'inter-ui/inter-variable.css';
import 'inter-ui/inter-display.css';
import "@fontsource/source-code-pro/500.css";

export default {
  extends: DefaultTheme,
  Layout: Layout,

} satisfies Theme
