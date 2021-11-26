import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

const ToolbarButton = ({ label, icon, disabled = false }) => {
    return (
        <button
            className={clsx(
                'toolbar-button',
                'toolbar-button-' + label.toLowerCase()
            )}
            onClick={() => console.log(label + ' button clicked')}
            disabled={disabled}
        >
            <FontAwesomeIcon icon={icon} />
            {label}
        </button>
    );
};

export default ToolbarButton;
