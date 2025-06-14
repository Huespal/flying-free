import {
  describe, expect, fireEvent, render, screen, test,
  vi
} from '@/../testsSetup';
import FieldDate from '@/components/FieldDate';

describe('FieldDate', () => {
  const onChange = vi.fn();
  const requiredProps = { id: 'test', name: 'test', onChange };

  test('Renders component successfully given required properties', () => {
    render(<FieldDate {...requiredProps} label="Test" />);

    const input = screen.getByLabelText('Test');
    expect(input).toBeInTheDocument();
  });

  test('Calls onChange callback successfully given date change',
    async () => {
      render(<FieldDate {...requiredProps} label="Test" />);

      const input = screen.getByLabelText('Test');
      fireEvent.change(input, { target: { value: '1714-11-09' } });
      expect(onChange).toBeCalledWith('1714-11-09');
    });
});
