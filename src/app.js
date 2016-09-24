function onLoad() {
  let editor = CodeMirror.fromTextArea(document.querySelector('.editor'), {
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
    highlightSelectionMatches: true,
    keyMap: 'sublime',
    lineNumbers: true,
    mode: 'javascript',
    styleActiveLine: true,
    theme: 'monokai',
  });
}