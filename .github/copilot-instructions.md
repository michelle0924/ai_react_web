# GitHub Copilot 團隊共用規範

## 語言與框架

- 使用 **TypeScript**，禁止 `any`，優先使用 `unknown` 搭配型別縮窄。
- 使用 `import type` 匯入純型別，以利 tree-shaking。
- UI 使用 **React 函式元件** + hooks，禁止 Class Component。
- Routing 使用 **React Router v7**（`createBrowserRouter`）。

## 程式碼風格

- 縮排：2 spaces；字串：單引號；結尾分號：必填。
- 每行上限 100 字元，以 Prettier 統一格式化。
- 遵循 ESLint 規則（`npm run lint`），提交前執行 `npm run format`。

## 資料夾結構

```
src/
  components/   # 可重用元件（按功能子目錄）
  hooks/        # 自訂 React hooks（命名以 use 開頭）
  pages/        # 頁面元件（每個路由一個子目錄）
  services/     # API 呼叫封裝（透過 apiClient.ts 統一發出）
  types/        # 全域 TypeScript 型別與 interface
  utils/        # 純函式工具
```

## API 服務

- 所有 HTTP 呼叫必須透過 `src/services/apiClient.ts`，不可在元件內直接呼叫 `fetch` 或 `axios`。
- 每個 domain 建立獨立 service 檔案（例：`src/services/userService.ts`）。
- API 回應型別定義在 `src/types/api.ts`。

## 環境變數

- 所有 Vite 環境變數以 `VITE_` 開頭，透過 `src/utils/env.ts` 匯入，不可直接存取 `import.meta.env`。
- 新增環境變數時必須同步更新 `.env.example`。

## 命名規範

- 元件：PascalCase（`UserCard.tsx`）。
- hooks：camelCase，以 `use` 開頭（`useAsync.ts`）。
- 服務與工具：camelCase（`apiClient.ts`、`formatDate.ts`）。
- 型別 / interface：PascalCase（`ApiResponse<T>`）。

## PR 規範

- 每個 PR 聚焦在單一功能或修復。
- PR 標題遵循 Conventional Commits：`feat:`、`fix:`、`chore:`、`docs:` 等。
- 新功能需附帶基本使用範例或說明。
