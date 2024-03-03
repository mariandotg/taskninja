import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  children: React.ReactNode;
  onClickFn: () => void;
  asChild?: boolean;
}

interface SlotProps {
  className: string;
  children: React.ReactNode;
}

const Slot: React.FunctionComponent<SlotProps> = (props) => {
  const { children, className } = props;

  if (
    children &&
    React.isValidElement(children) &&
    children.props.children !== undefined
  ) {
    return React.cloneElement(children, {
      className,
    } as React.HTMLAttributes<HTMLElement>);
  }
};

const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { asChild = false, ...restProps } = props;

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      ref={ref}
      className='flex w-fit gap-2 items-center bg-primary text-base-label py-3 px-5 text-background font-medium hover:bg-primary-hover transition-all duration-300'
      onClick={restProps.onClickFn}
      {...restProps}
    />
  );
});

Button.displayName = 'Button';
Button.propTypes = {
  children: PropTypes.node as PropTypes.Validator<React.ReactNode>,
  asChild: PropTypes.bool,
  onClickFn: PropTypes.func as PropTypes.Validator<() => void>,
};

export default Button;
