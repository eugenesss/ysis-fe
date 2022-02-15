import { render } from '@testing-library/react';
import 'jest-styled-components';
import NavTabs, { NavTabsProps } from './NavTabs';

describe('NavTabs', () => {
  it('renders with styles', () => {
    const mockProps: NavTabsProps = {
      value: 0,
      handleChange: jest.fn(),
    };
    const { container } = render(<NavTabs {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        overflow: hidden;
        min-height: 48px;
        -webkit-overflow-scrolling: touch;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
      }

      .c3 {
        position: relative;
        display: inline-block;
        -webkit-flex: 1 1 auto;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        white-space: nowrap;
        -webkit-scrollbar-width: none;
        -moz-scrollbar-width: none;
        -ms-scrollbar-width: none;
        scrollbar-width: none;
        overflow-x: auto;
        overflow-y: hidden;
      }

      .c3::-webkit-scrollbar {
        display: none;
      }

      .c4 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
      }

      .c5 {
        position: absolute;
        height: 2px;
        bottom: 0;
        width: 100%;
        -webkit-transition: all 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
        transition: all 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
        background-color: #1976d2;
      }

      .c2 {
        overflow-x: auto;
        overflow-y: hidden;
        -webkit-scrollbar-width: none;
        -moz-scrollbar-width: none;
        -ms-scrollbar-width: none;
        scrollbar-width: none;
      }

      .c2::-webkit-scrollbar {
        display: none;
      }

      .c1 {
        min-height: 0px;
      }

      .c1 .MuiTabs-indicator {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        background-color: transparent;
      }

      .c1 .MuiTabs-indicatorSpan {
        max-width: 100%;
        width: 100%;
        background-color: #1976d2;
      }

      <div>
        <div
          class="c0 MuiTabs-root c1"
        >
          <div
            class="c2 MuiTabs-scrollableX MuiTabs-hideScrollbar"
            style="width: 99px; height: 99px; position: absolute; top: -9999px; overflow: scroll;"
          />
          <div
            class="c3 MuiTabs-scroller MuiTabs-hideScrollbar MuiTabs-scrollableX"
            style="margin-bottom: 0px;"
          >
            <div
              class="c4 MuiTabs-flexContainer"
              role="tablist"
            />
            <span
              class="c5 MuiTabs-indicator"
              style="left: 0px; width: 0px;"
            >
              <span
                class="MuiTabs-indicatorSpan"
              />
            </span>
          </div>
        </div>
      </div>
    `);
  });
});
