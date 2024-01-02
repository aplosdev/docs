// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './styles/index.scss'
import 'inter-ui/inter.css';
import 'inter-ui/inter-variable.css';
import 'inter-ui/inter-display.css';
import "@fontsource/source-code-pro/500.css";
import "@fontsource/noto-emoji/700.css";
import "@fontsource/noto-color-emoji/400.css";

export default {
  extends: DefaultTheme,
  Layout: Layout,

} satisfies Theme
