// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const TwoPeopleCircleIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 28 28">
            <path
                d="M14 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14 7.373 2 14 2zm0 2C8.477 4 4 8.477 4 14c0 2.252.744 4.33 2 6.002V18.4a3.2 3.2 0 013.2-3.2h3.2a3.2 3.2 0 013.2 3.2l.001 5.473a9.932 9.932 0 001.6-.396L17.2 18.4c0-.557-.095-1.092-.27-1.589.09-.007.18-.011.27-.011h1.6A3.2 3.2 0 0122 20l.008-.01A9.956 9.956 0 0024 14c0-5.523-4.477-10-10-10zm3.98 5.6a3.19 3.19 0 013.18 3.2 3.19 3.19 0 01-3.18 3.2 3.19 3.19 0 01-3.18-3.2 3.19 3.19 0 013.18-3.2zM10.78 8a3.19 3.19 0 013.18 3.2 3.19 3.19 0 01-3.18 3.2 3.19 3.19 0 01-3.18-3.2A3.19 3.19 0 0110.78 8z"
                fill="#069D4F"
                fillRule="nonzero"
            />
        </svg>
    );
};

TwoPeopleCircleIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default TwoPeopleCircleIcon;