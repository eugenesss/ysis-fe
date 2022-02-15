import { render } from '@testing-library/react';
import NavLink from '.';
import { MemoryRouter } from 'react-router-dom';
import 'jest-styled-components';

describe('NavLink', () => {
  it('renders', () => {
    const { container } = render(
      <NavLink to="/123">
        <div>test</div>
      </NavLink>,
      { wrapper: MemoryRouter },
    );
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        -webkit-text-decoration: none;
        text-decoration: none;
        color: inherit;
      }

      <div>
        <a
          class="c0"
          href="/123"
        >
          <div>
            test
          </div>
        </a>
      </div>
    `);
  });
});
