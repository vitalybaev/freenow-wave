// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const EyeClosedIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24">
            <path
                d="M13.025 16.956V20h-2.05v-3.044a11.746 11.746 0 01-2.941-.636l-1.232 3.044-1.904-.752 1.266-3.127a.56.56 0 01.013-.018 11.41 11.41 0 01-2.551-1.98l-.057.072-2.12 2.094L0 14.221l2.248-2.22.094-.114A10.743 10.743 0 011 9.001l1.128.001L3.178 9l.087.226c1.332 3.344 4.644 5.66 8.449 5.77L12 15c3.924 0 7.37-2.346 8.735-5.774L20.82 9H23a10.748 10.748 0 01-1.355 2.905c.065.056.107.095.107.095L24 14.221l-1.45 1.432-2.12-2.094-.063-.064a11.412 11.412 0 01-2.54 1.97c.006.012.008.02.008.02l1.267 3.127-1.904.752-1.232-3.044c-.93.33-1.916.549-2.941.636z"
                fill="currentColor"
            />
        </svg>
    );
};

EyeClosedIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default EyeClosedIcon;