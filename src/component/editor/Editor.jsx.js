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

        this.refs.uploadFileDIV.appendChild(this.refs.uploadImage)
        this.refs.uploadFileDIV.appendChild(this.refs.deleteImg)

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
        return (
            <div className="publish-editor">
                <p>
                    发布帖子
                    <a>发布</a>
                </p>
                <form>
                    <input placeholder="标题，最少10个字"/>
                    <input multiple placeholder="发表一下你的资讯吧"/>
                    <div ref="uploadFileDIV">
                        <img ref="uploadImage" src=""/>
                        <label ref="deleteImg" className="deleteImg" onClick={this.deleteImg.bind(this)}>删除</label>
                    </div>
                </form>
                <div className="itemArea"></div>
                <div className="buttonArea">
                    <input ref="fileInput" type="file" className="image" accept="image/*" onChange={this.editorAction.bind(this)}/>
                    <input type="button" value="插入视频"/>
                </div>
            </div>
        )
    }
}
export default Editor;