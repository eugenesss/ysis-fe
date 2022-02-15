import { render, within } from '@testing-library/react';
import { DataTestId, Paper, PaperHeader, PaperContent } from './Paper';
import 'jest-styled-components';

describe('Paper', () => {
  it('renders with styles', () => {
    const { container } = render(<Paper />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: #fff;
        color: rgba(0,0,0,0.87);
        -webkit-transition: box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
        transition: box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
        border-radius: 4px;
        box-shadow: none;
        padding: 8px 16px;
      }

      <div>
        <div
          class="c0 MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0"
          data-testid="paper-wrapper"
        />
      </div>
    `);
  });
});

describe('PaperHeader', () => {
  it('renders with heading', () => {
    const { getByTestId } = render(<PaperHeader title="title" />);
    const { getByText } = within(getByTestId(DataTestId.PaperHeader));
    expect(getByText('title')).toBeInTheDocument();
  });

  it('renders with action', () => {
    const { getByTestId } = render(
      <PaperHeader title="title" action={<div>action</div>} />,
    );
    expect(getByTestId(DataTestId.PaperHeaderActionElement)).toBeTruthy();
  });
});

describe('PaperContent', () => {
  it('renders with styles', () => {
    const { container } = render(<PaperContent />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        padding-top: 8px;
        padding-bottom: 8px;
      }

      <div>
        <div
          class=""
          data-testid="paper-content"
        >
          <div
            class="c0"
            data-testid="space"
            spacing="2"
          />
        </div>
      </div>
    `);
  });
});
