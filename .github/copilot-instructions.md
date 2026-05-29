# GitHub Copilot 團隊共用指示

本專案為 React + TypeScript + Vite。請優先遵循 `.github/instructions/` 內的細部指示檔。

## Build（必做）

在產生或修改程式碼後，依序使用：

1. `npm install`
2. `npm run dev`
3. `npm run build`
4. `npm run preview`

## Test（必做）

- 優先執行：`npm run test`
- 若專案尚未建立測試（例如目前無 `test` script），請提出並採用：
  - `Vitest`
  - `React Testing Library`

## Validate（提交前必做）

每次修改後，必須確認：

1. Build / Test / Lint 皆可通過
2. 無 TypeScript 錯誤
3. 無 hard-coded secret（API key、token、密碼等）
4. 已檢查 routing 與共用元件的影響範圍

## 參考子指示檔

- React 開發規範：`.github/instructions/react.instructions.md`
- 測試規範：`.github/instructions/testing.instructions.md`
- 安全規範：`.github/instructions/security.instructions.md`
