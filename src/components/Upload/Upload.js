import '../Upload/Upload.css'
function Upload() {
    return (
        <div>
            <form>
                <input name="upload" type="text" className="feedback-input" placeholder="" />


                <input type="submit" value="Upload" />
            </form>
        </div>
    );
}

export default Upload;
