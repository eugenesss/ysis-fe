import MenuHaburgerButton from './MenuHamburgerButton';
import { render } from '@testing-library/react';

describe('MenuHamburgerButton', () => {
  it('renders', () => {
    const { container } = render(
      <MenuHaburgerButton handleOnClick={jest.fn()} />,
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          aria-label="open drawer"
          class="MuiButtonBase-root-JTLGk xjigV MuiButtonBase-root MuiIconButton-root-jYLena kYGeTV MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-edgeStart MuiIconButton-sizeMedium"
          tabindex="0"
          type="button"
        >
          <svg
            aria-hidden="true"
            class="MuiSvgIcon-root-ffGNMi ufROg MuiSvgIcon-root MuiSvgIcon-fontSizeMedium"
            data-testid="MenuIcon"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path
              d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
            />
          </svg>
          <span
            class="MuiTouchRipple-root-iekols hjNZuK MuiTouchRipple-root"
          />
        </button>
      </div>
    `);
  });
});
