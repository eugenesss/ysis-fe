import { render } from '@testing-library/react';
import SpaceDivider from './SpaceDivider';
import 'jest-styled-components';

describe('SpaceDivider', () => {
  it('renders with styles', () => {
    const { container } = render(<SpaceDivider />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        padding-top: 4px;
        padding-bottom: 4px;
      }

      <div>
        <div
          class="c0"
          data-testid="space"
        />
      </div>
    `);
  });

  it('renders with line', () => {
    const { container } = render(<SpaceDivider line={true} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        padding-top: 4px;
        padding-bottom: 4px;
      }

      .c1 {
        height: 1px;
        width: 100%;
        background-color: rgba(0,0,0,0.12);
      }

      <div>
        <div
          class="c0"
          data-testid="space"
        >
          <div
            class="c1"
            data-testid="line"
          />
        </div>
      </div>
    `);
  });
});
