import FileTile from './fileTile/FileTile';
import './_filespane.scss';

const FilesPane = ({ files }) => {
    return (
        <div className="files-pane">
            {files.map((file) => (
                <FileTile key={file.name} {...file} />
            ))}
        </div>
    );
};
export default FilesPane;
