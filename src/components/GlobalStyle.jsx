import { injectGlobal } from '@emotion/css';

import 'modern-normalize';

export const GlobalStyle = injectGlobal`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
    }

    ul,
    ol {
        margin: 0;
        padding-left: 0;
    }
    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }


    button {
        display: inline-block;
        cursor: pointer;
    }
`;
