import React from 'react'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import PropTypes from 'prop-types';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';


function CodeEditor({ value, mode, theme, lineNumbers, onBeforeChange, onChange }) {
    return (
        <CodeMirror
            value={value}
            options={{
                mode,
                theme,
                lineNumbers
            }}
            onBeforeChange={(editor, data, value) => {
                onBeforeChange(editor, data, value);
            }}
            onChange={(editor, data, value) => {
                onChange(editor, data, value);
            }}
        />
    )
}

CodeEditor.propTypes = {
    value: PropTypes.string,
    mode: PropTypes.string,
    theme: PropTypes.string,
    lineNumbers: PropTypes.bool,
    onBeforeChange: PropTypes.func,
    onChange: PropTypes.func
}
CodeEditor.defaultProps = {
    value: "const text = 'this is some text'",
    mode: 'javascript',
    theme: 'material',
    lineNumbers: true,
    onBeforeChange: function () { },
    onChange: function () { }
}
export default CodeEditor;
