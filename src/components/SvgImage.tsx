
interface CustomSvgImageProps {
  iconName: string;
  color?: string;
  size?: number;
  onClick?: () => void;
}

function CustomSvgImage({ iconName, color = '#000000', size = 24, onClick }: CustomSvgImageProps) {
  // 16진수 색상을 CSS filter로 변환하는 함수
  const hexToFilter = (hexColor: string) => {
    // # 제거
    const hex = hexColor.replace('#', '');

    // RGB 값 추출
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // CSS filter 계산
    // 먼저 검은색으로 만들고 (brightness(0) saturate(100%))
    // 그 다음 원하는 색상으로 변환
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    if (brightness === 0) {
      return 'brightness(0) saturate(100%)';
    }

    // 색상 변환을 위한 filter 값들
    const invertR = (255 - r) / 255;
    const invertG = (255 - g) / 255;
    const invertB = (255 - b) / 255;

    return `brightness(0) saturate(100%) invert(${invertR}) sepia(${invertG}) saturate(${invertB}) hue-rotate(${Math.atan2(b - g, r - g) * 180 / Math.PI}deg)`;
  };

  return (
    <img
      src={iconName}
      alt={`${iconName} 아이콘`}
      onClick={onClick}
      style={{
        width: size,
        height: size,
        filter: color !== '#000000' ? hexToFilter(color) : 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );
}

export default CustomSvgImage;