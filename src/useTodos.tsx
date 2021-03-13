import { createLocalStorageStateHook } from "use-local-storage-state";

export const useTodos = createLocalStorageStateHook("todosSync", [
  "buy milk",
  "do 50 push-ups",
]);
