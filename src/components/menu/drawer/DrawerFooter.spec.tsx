import { render } from '@testing-library/react';
import DrawerFooter from './DrawerFooter';
import 'jest-styled-components';

describe('DrawerFooter', () => {
  it('renders', () => {
    const { container } = render(<DrawerFooter />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        padding: 32px;
        text-align: center;
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
});
