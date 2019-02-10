/**
 * Created by junxie on 18/5/27.
 */
import React, { Component } from 'react';
import ReactDom from 'react-dom';
require('./editor.less');

class Editor extends Component {
    constructor() {
        super(...arguments);
    }

    editorAction(event){

        this.refs.uploadFileDIV.appendChild(this.refs.uploadImage);
        this.refs.uploadFileDIV.appendChild(this.refs.deleteImg);

        const file = event.target.files[0];
        //console.log(file.type + "_" + file.size);
        if(file != null){
            
            var img = new Image();
            img = this.refs.uploadImage;

            var fileReader = new FileReader();
            fileReader.readAsDataURL(file);
                fileReader.onload = function(e){
                var result = e.target.result;
                img.src = result;
            }
        }
    }

    deleteImg(event){
        //this.refs.uploadImage.style = "display:none;"
        this.refs.uploadFileDIV.removeChild(this.refs.uploadImage)
        this.refs.uploadFileDIV.removeChild(this.refs.deleteImg)
        this.refs.fileInput.value = "";
    }

    render() {
        return 233
    }
}
export default Editor;