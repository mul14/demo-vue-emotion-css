import { css, cx } from '@emotion/css'

export default function App() {
  return (
      <div className={css`
        padding: 32px;
        color: black;
        background-color: DodgerBlue;
        &:hover {
          background-color: black;
          color: yellow;
          cursor: progress;
        }
        display: flex;
        justify-content: center;
      `}>
        Hello World
      </div>
  )
}
