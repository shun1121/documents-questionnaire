import React from 'react';
import './storyButton.css'

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  handleClick?: () => void;
}

export const StoryButton = ({
  primary = false,
  backgroundColor,
  color,
  size = 'medium',
  label,
  handleClick,
}: ButtonProps) => {
  const mode = primary? 'button-primary' : 'button-secondary'
  let scale = 1
  if (size === "small") {
    scale = 0.5
  }
  if (size === "large") {
    scale = 1.5
  }
  const style = {
    backgroundColor,
    color,
    padding: `${scale*0.5}rem ${scale*1}rem`,
    border: 'none',
    cursor: 'pointer',
  }
  return (
    <button
      onClick={handleClick}
      className={['storybook-button', mode].join(' ')}
      style={style}
    >
      {label}
    </button>
  );
};

export default StoryButton

// import React from 'react';
// // import './button.css';

// interface ButtonProps {
//   /**
//    * Is this the principal call to action on the page?
//    */
//   primary?: boolean;
//   /**
//    * What background color to use
//    */
//   backgroundColor?: string;
//   /**
//    * How large should the button be?
//    */
//   size?: 'small' | 'medium' | 'large';
//   /**
//    * Button contents
//    */
//   label: string;
//   /**
//    * Optional click handler
//    */
//   onClick?: () => void;
// }

// /**
//  * Primary UI component for user interaction
//  */
// export const Button1 = ({
//   primary = false,
//   size = 'medium',
//   backgroundColor,
//   label,
//   ...props
// }: ButtonProps) => {
//   const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
//   return (
//     <button
//       type="button"
//       className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
//       style={{ backgroundColor }}
//       {...props}
//     >
//       {label}
//     </button>
//   );
// };

