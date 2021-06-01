import React, {useState} from 'react';
import Editor from './EditorComponent';

const NoticeWriteComponent = () => {
    const [desc, setDesc] = useState('');
    function onEditorChange(value) {
        setDesc(value)
    }
    
    return (
        <Editor value={desc} onChange={onEditorChange} />
    )
};


export default NoticeWriteComponent;