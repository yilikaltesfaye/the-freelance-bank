import {createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --purple-primary: #554DDE;
        --accent-pink: #F44E77;
        --neutral-light: #F2F6FF;
        --lavender-secondary: #6A6D9E;
        --dark-primary: #16194F;
        --border-colour: #CAD6F1;
    }
    ::-webkit-scrollbar{
        width: 10px;
        border-radius: 5px;
    }
    ::-webkit-scrollbar-track{
        background: #16194F;
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 5px;
        background: #554DDE;
    }
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
        text-decoration: none;
    }
    body {
        background-color: var(--neutral-light);
        color: white;
        font-size: 1rem;
    }
    a {
        color: inherit;
    }
    p{
        color: var(--lavender-secondary);
        line-height: 1.9rem
    }
    .secondary-heading{
        font-size: 2rem;
        color: var(--purple-primary);
    }
    .small-heading {
        font-size: 1.8rem;
        color: var(--purple-primary);
        text-align: center;
    }
    span {
        color: var(--accent-pink);
    }
    .center-p {
        text-align: center;
    }
`;

export default GlobalStyle;