import { render } from '@testing-library/react';
import DrawerWrapper from './DrawerWrapper';
import 'jest-styled-components';

describe('DrawerWrapper', () => {
  it('renders', () => {
    const { container } = render(
      <DrawerWrapper>
        <div>test</div>
      </DrawerWrapper>,
    );
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        background-color: #fff;
        color: rgba(0,0,0,0.87);
        -webkit-transition: box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
        transition: box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
        box-shadow: none;
      }

      .c0 {
        -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: 240px;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
      }

      .c0 .MuiDrawer-paper {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        width: 240px;
        box-sizing: border-box;
        background: #f1f1f1;
        color: #505050;
        border: none;
      }

      .c2 {
        overflow-y: auto;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        height: 100%;
        -webkit-flex: 1 0 auto;
        -ms-flex: 1 0 auto;
        flex: 1 0 auto;
        z-index: 1200;
        -webkit-overflow-scrolling: touch;
        position: fixed;
        top: 0;
        outline: 0;
        left: 0;
        border-right: 1px solid rgba(0,0,0,0.12);
      }

      @media (max-width:600px) {
        .c0 .MuiDrawer-paper {
          width: 100vw;
        }
      }

      <div>
        <div
          class="c0 MuiDrawer-root MuiDrawer-docked"
        >
          <div
            class="c1 MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 c2 MuiDrawer-paper MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft"
            style="visibility: hidden; webkit-transform: translateX(-0px); transform: translateX(-0px);"
          >
            <div>
              test
            </div>
          </div>
        </div>
      </div>
    `);
  });
});
