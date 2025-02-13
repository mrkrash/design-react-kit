import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const component = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      role='img'
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{'Logo Medium Square'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path fill='none' d='M0 0h24v24H0z' />
      <path d='M3 3h18v18H3V3Zm4.3 11.36a.64.64 0 0 1-.17.54l-1.27 1.54v.2h3.6v-.2L8.19 14.9a.67.67 0 0 1-.19-.54V9.74l3.16 6.9h.37l2.71-6.9v5.5c0 .15 0 .17-.09.27l-1 1v.2h4.74v-.2l-.89-.98a.27.27 0 0 1-.11-.27v-6.8a.28.28 0 0 1 .11-.27l1-.93v-.2h-3.39L12.23 13 9.52 7.06H6v.2l1.14 1.36A.5.5 0 0 1 7.3 9v5.36Z' />
    </svg>
  );
};
