---
applyTo: "**/*"
---

# 安全指示

## Secrets 與設定

- 禁止在程式碼中 hard-code secret（API key、token、密碼、憑證）。
- 所有敏感值必須使用環境變數管理，且遵循 Vite 的 `VITE_` 命名慣例。
- 新增環境變數時，同步更新 `.env.example`（不含真實值）。

## 輸入與輸出

- 對外部輸入做必要驗證與防呆處理。
- 避免直接渲染未信任內容，防止 XSS 風險。

## 相依與流程

- 引入新套件前評估必要性與安全風險。
- 修改 routing、共用元件、驗證流程時，確認不會放寬既有安全邊界。

## 提交前檢查

- 確認無 hard-coded secret。
- 確認 lint、build、test（若已建立）皆通過。
- 確認無 TypeScript 錯誤。
