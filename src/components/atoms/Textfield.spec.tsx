import { render } from '@testing-library/react';
import TextField, { CustomTextFieldProps, DataTestId } from './Textfield';

const renderMockComponent = (props?: Partial<CustomTextFieldProps>) => {
  const mockProps: CustomTextFieldProps = {
    label: 'test',
    error: false,
    errorMessage: '',
    required: false,
    ...props,
  };
  const component = render(<TextField {...mockProps} />);
  return component;
};

describe('Textfield component', () => {
  it('renders', () => {
    const { getByTestId } = renderMockComponent();
    expect(getByTestId(DataTestId.Label).textContent).toBe('test');
    expect(getByTestId(DataTestId.Input)).toBeTruthy();
  });

  it('renders with required', () => {
    const { getByTestId } = renderMockComponent({ required: true });
    expect(getByTestId(DataTestId.Label).textContent).toBe('test*');
  });

  it('renders error with custom error message', () => {
    const { getByTestId } = renderMockComponent({
      error: true,
      errorMessage: 'error message',
    });
    expect(getByTestId(DataTestId.ErrorMessage).textContent).toBe(
      'error message',
    );
  });

  it('renders error with default error message', () => {
    const { getByTestId } = renderMockComponent({
      error: true,
    });
    expect(getByTestId(DataTestId.ErrorMessage).textContent).toBe(
      'This field is required!',
    );
  });
});
