import { render } from '@testing-library/react';
import AppLogo from './AppLogo';
import 'jest-styled-components';

describe('AppLogo', () => {
  it('renders with styles', () => {
    const { container } = render(<AppLogo />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: 50px;
        width: 50px;
        background-image: url('./assets/logo.png');
        background-size: cover;
        background-position: center;
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
});
