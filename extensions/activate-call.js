export function activate(context: vscode.ExtensionContext) {
  let api = {
    sum(a, b) {
      return a + b;
    },
    mul(a, b) {
      return a * b;
    }
  };
  // 'export' public api-surface
  return api;
}
