---
applyTo: "src/**/*.{ts,tsx}"
---

# React 開發指示

## 技術基礎

- 使用 React 函式元件與 Hooks。
- 使用 TypeScript，避免 `any`，必要時使用 `unknown` 並做型別縮窄。
- 路由使用 `react-router-dom`，調整頁面時一併確認導覽與深層連結行為。

## 元件與結構

- 優先建立可重用元件，避免重複 UI 與邏輯。
- 共用元件或 hooks 變更時，需檢查所有引用處是否受影響。
- 保持元件職責單一，將可抽離邏輯移至 hooks 或 utils。

## 品質與維護

- 提交前執行 `npm run lint` 與 `npm run build`。
- 確保 TypeScript 編譯無錯誤。
