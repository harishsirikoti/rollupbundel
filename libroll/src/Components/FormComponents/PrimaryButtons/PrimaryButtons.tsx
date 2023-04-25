 
import React from 'react';
import './PrimaryButtons.css';
import { PrimaryButton } from '@fluentui/react';

export interface IButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const PrimaryButtons = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: IButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <PrimaryButton
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </PrimaryButton>
  );
};
export default PrimaryButtons;