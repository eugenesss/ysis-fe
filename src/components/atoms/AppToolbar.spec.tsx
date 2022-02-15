import { render } from '@testing-library/react';
import AppToolbar from './AppToolbar';
import 'jest-styled-components';

describe('AppToolbar', () => {
  it('renders with styles', () => {
    const { container } = render(<AppToolbar />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        min-height: 80px;
        padding: 32px;
        padding-top: 20px;
        padding-bottom: 16px;
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
});
