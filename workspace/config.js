// launch.json configuration
const config = workspace.getConfiguration(
  'launch',
  vscode.workspace.workspaceFolders[0].uri
);

// retrieve values
const values = config.get('configurations');
