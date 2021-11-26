import { useState } from 'react';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

const FileTile = ({ name, extension }) => {
    const [selected, setSelected] = useState(false);

    return (
        <div
            className={clsx(
                'file-tile',
                `file-${extension}`,
                selected && 'selected'
            )}
            onClick={() => setSelected((current) => !current)}
        >
            <div className="icon">
                <FontAwesomeIcon icon="file" size="10x" />
            </div>
            <label>{name}.{extension}</label>
        </div>
    );
};

export default FileTile;
