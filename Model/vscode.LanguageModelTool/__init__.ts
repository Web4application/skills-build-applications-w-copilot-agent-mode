async prepareInvocation(
    options: vscode.LanguageModelToolInvocationPrepareOptions<ITabCountParameters>,
    _token: vscode.CancellationToken
) {
    const confirmationMessages = {
        title: 'Count the number of open tabs',
        message: new vscode.MarkdownString(
            `Count the number of open tabs?` +
            (options.input.tabGroup !== undefined
                ? ` in tab group ${options.input.tabGroup}`
                : '')
        ),
    };

    return {
        invocationMessage: 'Counting the number of tabs',
        confirmationMessages,
    };
}
