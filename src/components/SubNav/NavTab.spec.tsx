import { render } from '@testing-library/react';
import NavTab from './NavTab';
import 'jest-styled-components';

describe('NavTab', () => {
  it('renders with styles', () => {
    const { container } = render(<NavTab />);
    expect(container).toMatchInlineSnapshot(`
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
        font-family: "Roboto","Helvetica","Arial",sans-serif;
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 1.25;
        -webkit-letter-spacing: 0.02857em;
        -moz-letter-spacing: 0.02857em;
        -ms-letter-spacing: 0.02857em;
        letter-spacing: 0.02857em;
        text-transform: uppercase;
        max-width: 360px;
        min-width: 90px;
        position: relative;
        min-height: 48px;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        padding: 12px 16px;
        overflow: hidden;
        white-space: normal;
        text-align: center;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        color: inherit;
        opacity: 0.6;
      }

      .c1.Mui-selected {
        opacity: 1;
      }

      .c1.Mui-disabled {
        opacity: 0.38;
      }

      .c2 {
        text-transform: none;
        font-weight: 700;
        font-size: 0.875rem;
        min-width: 0px;
        min-height: 0px;
        margin-right: 32px;
        padding: 0;
        padding-bottom: 16px;
      }

      .c2.Mui-selected {
        color: #1976d2;
      }

      .c2.Mui-focusVisible {
        background-color: rgba(100,95,228,0.32);
      }

      @media print {
        .c0 {
          color-adjust: exact;
        }
      }

      <div>
        <button
          class="c0 MuiButtonBase-root c1 MuiTab-root MuiTab-textColorInherit c2"
          role="tab"
          tabindex="-1"
          type="button"
        />
      </div>
    `);
  });
});
