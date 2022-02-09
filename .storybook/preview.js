// import '../src/index.css';

// import { Provider } from 'react-redux';
// import { store } from '../src/app/store'
// import { addDecorator } from '@storybook/react'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// addDecorator((Story) => (
//   <Provider store={store}>
//     <Story />
//   </Provider>
// ))

// export const decorators = [
//   (Story) => (
//     <Provider store={store}>
//       <Story />
//     </Provider>
//   ),
// ]