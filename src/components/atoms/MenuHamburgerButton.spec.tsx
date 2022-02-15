import MenuHamburgerButton from './MenuHamburgerButton';
import { render } from '@testing-library/react';
import 'jest-styled-components';

describe('MenuHamburgerButton', () => {
  it('renders', () => {
    const { container } = render(
      <MenuHamburgerButton handleOnClick={jest.fn()} />,
    );
    expect(container).toMatchInlineSnapshot(`
      .c3 {
        overflow: hidden;
        pointer-events: none;
        position: absolute;
        z-index: 0;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: inherit;
      }

      .c0 {
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        position: relative;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        background-color: transparent;
        outline: 0;
        border: 0;
        margin: 0;
        border-radius: 0;
        padding: 0;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        vertical-align: middle;
        -moz-appearance: none;
        -webkit-appearance: none;
        -webkit-text-decoration: none;
        text-decoration: none;
        color: inherit;
      }

      .c0::-moz-focus-inner {
        border-style: none;
      }

      .c0.Mui-disabled {
        pointer-events: none;
        cursor: default;
      }

      .c1 {
        text-align: center;
        -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        font-size: 1.5rem;
        padding: 8px;
        border-radius: 50%;
        overflow: visible;
        color: rgba(0,0,0,0.54);
        -webkit-transition: background-color 150ms cubic-bezier(0.4,0,0.2,1) 0ms;
        transition: background-color 150ms cubic-bezier(0.4,0,0.2,1) 0ms;
        margin-left: -3px;
        color: inherit;
        padding: 5px;
        font-size: 1.125rem;
      }

      .c1:hover {
        background-color: rgba(0,0,0,0.04);
      }

      .c1.Mui-disabled {
        background-color: transparent;
        color: rgba(0,0,0,0.26);
      }

      .c2 {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        fill: currentColor;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        -webkit-transition: fill 200ms cubic-bezier(0.4,0,0.2,1) 0ms;
        transition: fill 200ms cubic-bezier(0.4,0,0.2,1) 0ms;
        font-size: 1.25rem;
      }

      @media print {
        .c0 {
          color-adjust: exact;
        }
      }

      @media (hover:none) {
        .c1:hover {
          background-color: transparent;
        }
      }

      <div>
        <button
          aria-label="open drawer"
          class="c0 MuiButtonBase-root c1 MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-edgeStart MuiIconButton-sizeSmall"
          tabindex="0"
          type="button"
        >
          <svg
            aria-hidden="true"
            class="c2 MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
            data-testid="MenuIcon"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path
              d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
            />
          </svg>
          <span
            class="c3 MuiTouchRipple-root"
          />
        </button>
      </div>
    `);
  });
});
