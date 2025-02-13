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
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      role='img'
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{'Collapse'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='m16.5 15.4-4.9-4.9-4.9 4.9-.7-.8L11.6 9l5.6 5.6z' />
    </svg>
  );
};
