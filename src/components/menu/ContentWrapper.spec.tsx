import ContentWrapper from './ContentWrapper';
import { render } from '@testing-library/react';
import 'jest-styled-components';

describe('ContentWrapper', () => {
  it('renders', () => {
    const { container } = render(
      <ContentWrapper isDrawerOpen={false}>
        <div>test</div>
      </ContentWrapper>,
    );
    expect(container).toMatchInlineSnapshot(`
      .c1 {
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
        padding-top: 8px;
        padding-bottom: 8px;
      }

      .c0 {
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        -webkit-transition: margin 195ms cubic-bezier(0.4,0,0.6,1) 0ms;
        transition: margin 195ms cubic-bezier(0.4,0,0.6,1) 0ms;
        margin-left: -240px;
      }

      .c2 {
        padding: 32px;
        padding-top: 8px;
      }

      <div>
        <main
          class="c0"
        >
          <div
            class="c1"
          />
          <div
            class="c2"
          >
            <div>
              test
            </div>
          </div>
        </main>
      </div>
    `);
  });
  it('renders with drawer open', () => {
    const { container } = render(
      <ContentWrapper isDrawerOpen={true}>
        <div>test</div>
      </ContentWrapper>,
    );
    expect(container).toMatchInlineSnapshot(`
      .c1 {
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
        padding-top: 8px;
        padding-bottom: 8px;
      }

      .c0 {
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        -webkit-transition: margin 225ms cubic-bezier(0.0,0,0.2,1) 0ms;
        transition: margin 225ms cubic-bezier(0.0,0,0.2,1) 0ms;
        margin-left: 0;
      }

      .c2 {
        padding: 32px;
        padding-top: 8px;
      }

      <div>
        <main
          class="c0"
        >
          <div
            class="c1"
          />
          <div
            class="c2"
          >
            <div>
              test
            </div>
          </div>
        </main>
      </div>
    `);
  });
});
