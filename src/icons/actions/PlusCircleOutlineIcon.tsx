// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const PlusCircleOutlineIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24">
            <path
                d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm1 3.5V11h3.5v2H13v3.5h-2V13H7.5v-2H11V7.5h2z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};

PlusCircleOutlineIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default PlusCircleOutlineIcon;