// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;

const KH: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 28 20">
            <defs>
                <rect id="KH__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="KH__b" fill="#fff">
                    <use xlinkHref="#KH__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#KH__a" />
                <path fill="#0F3EB6" mask="url(#KH__b)" d="M0 0h28v5.333H0zM0 14.667h28V20H0z" />
                <path fill="#ED1A3C" mask="url(#KH__b)" d="M0 5.333h28v9.333H0z" />
                <path
                    d="M10 10.667h1.333v2.666H8.667L10 10.667zm2 0h4v2.666h-4v-2.666zm4.667 0H18l1.333 2.666h-2.666v-2.666zm0-2.001c0-.368.296-.666.666-.666.369 0 .667.295.667.666V10h-1.333V8.666zM12 8.727h1.333v-.73c0-.366.296-.664.667-.664.368 0 .667.296.667.665v.73H16V10h-4V8.727zm-2-.061c0-.368.296-.666.667-.666.368 0 .666.295.666.666V10H10V8.666z"
                    fill="#FFF"
                    mask="url(#KH__b)"
                />
            </g>
        </svg>
    );
};

KH.defaultProps = {};
export default KH;