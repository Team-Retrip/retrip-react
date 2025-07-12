import BackIcon from '../assets/Back.svg';
import CustomSvgImage from './SvgImage';

function BackImage() {

    const onClick = () => {
        window.history.back();
    };

    return (
        <div className="back-image-container">
            <CustomSvgImage iconName={BackIcon} size={20} onClick={onClick} />
        </div>
    );
}

export default BackImage;