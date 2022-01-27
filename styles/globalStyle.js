import { appConfig } from '../config/config';

export default function GlobalStyle() {
  return (
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: "Open Sans", sans-serif;
      }
      /* App fit Height */
      html,
      body,
      #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      /* ./App fit Height */
      .messages-list::-webkit-scrollbar {
        width: 1em;
      }
       
      .messages-list::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 0.5em;
      }
       
      .messages-list::-webkit-scrollbar-thumb {
        background-color: ${appConfig.theme.colors.primary[800]};
        outline: 1px solid ${appConfig.theme.colors.primary[700]};
        border-radius: 0.5em;
      }

      .messages-list {
        scroll-margin: 2em;
      }
    `}</style>
  );
}
