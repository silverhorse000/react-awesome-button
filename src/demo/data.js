import React from 'react';
import AwesomeButton from '../react-awesome-button';
import AwsBtnStyles from '../styles/react-awesome-button-main.scss';
import AwsBtnStylesThemeTwo from '../styles/react-awesome-button-theme-two.scss';

const features = [
  'Look and feel customisable and extendable via SASS variables and lists',
  'Use it with CSSModules or Plain CSS (NO inline-styles)',
  'Render any tag as the component\'s child (text, icon, img, svg)',
  'Animated progress button',
  'OnClick bubble animation',
];

const examples = [
  {
    title: 'Primary, Secondary and Disabled buttons',
    text: `
<AwesomeButton>Primary Button</AwesomeButton>
<AwesomeButton type="secondary">Secondary Button</AwesomeButton>
<AwesomeButton disabled>Disabled Button</AwesomeButton>`,
    button: (
      <div>
        <AwesomeButton cssModule={AwsBtnStyles}>Primary Button</AwesomeButton>
        <AwesomeButton cssModule={AwsBtnStyles} type="secondary">Secondary Button</AwesomeButton>
        <AwesomeButton cssModule={AwsBtnStyles} disabled>Disabled Button</AwesomeButton>
      </div>
      ),
  },
  {
    title: 'Icon font button — Using children',
    description: `This example use font-awesome to render the icons but you can
    use almost anything as the component's child. i.e. <img> or <svg> tags.`,
    text: `
<AwesomeButton
  type="facebook"
  size="icon"
  bubbles
>
  <i className="fa fa-facebook" />
</AwesomeButton>
...`,
    button: (
      <div>
        <AwesomeButton
          cssModule={AwsBtnStyles}
          type="facebook"
          size="icon"
          bubbles
          moveEvents={false}
        >
          <i className="fa fa-facebook" />
        </AwesomeButton>
        <AwesomeButton
          cssModule={AwsBtnStyles}
          type="twitter"
          size="icon"
          bubbles
          moveEvents={false}
        >
          <i className="fa fa-twitter" />
        </AwesomeButton>
        <AwesomeButton
          cssModule={AwsBtnStyles}
          type="github"
          size="icon"
          bubbles
          moveEvents={false}
        >
          <i className="fa fa-github" />
        </AwesomeButton>
        <AwesomeButton
          cssModule={AwsBtnStyles}
          type="linkedin"
          size="icon"
          bubbles
          moveEvents={false}
        >
          <i className="fa fa-linkedin" />
        </AwesomeButton>
        <AwesomeButton
          cssModule={AwsBtnStyles}
          type="whatsapp"
          size="icon"
          bubbles
          moveEvents={false}
        >
          <i className="fa fa-whatsapp" />
        </AwesomeButton>
      </div>
    ),
  },
  {
    title: 'Animated progress button',
    text: `
<AwesomeButton
progress
action={(next) => {
  ... doSomething
  next();
}}
>Progress Button</AwesomeButton>`,
    button: (
      <div>
        <AwesomeButton
          cssModule={AwsBtnStyles}
          progress
          action={(element, next) => {
            setTimeout(() => {
              next();
            }, 600);
          }}
        >Progress Button</AwesomeButton>
        <AwesomeButton
          cssModule={AwsBtnStyles}
          progress
          type="secondary"
          action={(element, next) => {
            setTimeout(() => {
              next();
            }, 500);
          }}
        >Progress Button</AwesomeButton>
      </div>),
  },
  {
    title: 'Customisable styles and CSSModules',
    description: 'Change button raised level, color and extend types through SCSS variables and list tweak',
    scss: `
$button-default-border-radius: 40px;
$button-horizontal-padding: 20px;
$button-raise-level: 4px;
    `,
    text: `
<AwesomeButton
  cssModule={AwsBtnStylesThemeTwo}
  type="primary"
>Theme One</AwesomeButton>
<AwesomeButton
  cssModule={AwsBtnStylesThemeTwo}
  type="secondary"
>Theme One</AwesomeButton>
<AwesomeButton
  cssModule={AwsBtnStylesThemeTwo}
  disabled
  type="primary"
>Theme One</AwesomeButton>`,
    button: (
      <div>
        <div>
          <AwesomeButton
            cssModule={AwsBtnStylesThemeTwo}
            type="primary"
          >Theme One</AwesomeButton>
          <AwesomeButton
            cssModule={AwsBtnStylesThemeTwo}
            type="secondary"
          >Theme One</AwesomeButton>
          <AwesomeButton
            cssModule={AwsBtnStylesThemeTwo}
            disabled
            type="primary"
          >Theme One</AwesomeButton>
        </div>
      </div>
    ),
  },
  {
    title: 'Hover Animations',
    text: `
<AwesomeButton>With Move Events</AwesomeButton>
<AwesomeButton moveEvents={false}>Without Move Events</AwesomeButton>`,
    button: (
      <div>
        <AwesomeButton cssModule={AwsBtnStyles}>With Move Events</AwesomeButton>
        <AwesomeButton
          cssModule={AwsBtnStyles}
          moveEvents={false}
        >Without Move Events</AwesomeButton>
      </div>
    ),
  },
];

export default {
  name: 'AwesomeButton',
  title: 'React Components are awesome',
  description: 'The AwesomeButton is a performant, extendable, highly customisable, production ready react component that renders an animated basic set of UI buttons.',
  size: '~4KB compressed ( js + styles )',
  repository: 'https://github.com/rcaferati/react-awesome-button',
  article: '//caferati.me/labs/awesome-button',
  features,
  examples,
};
