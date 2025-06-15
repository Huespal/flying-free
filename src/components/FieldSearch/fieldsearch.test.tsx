import {
  describe, expect,
  fireEvent,
  render, screen, test, userEvent, vi
} from '@/../testsSetup';
import FieldSearch from '@/components/FieldSearch';

describe('FieldSearch', () => {
  const onSearch = vi.fn();
  const requiredProps = { id: 'test', name: 'test', onSearch };

  test('Renders component successfully given required properties', () => {
    render(<FieldSearch {...requiredProps} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  test('Displays placeholder successfully given the \'placeholder\' property',
    () => {
      render(<FieldSearch {...requiredProps} placeholder="Test" />);

      expect(screen.getByPlaceholderText('Test')).toBeInTheDocument();
    });

  test('Displays label successfully given the \'label\' property',
    () => {
      render(<FieldSearch {...requiredProps} label="Test" />);

      expect(screen.getByText('Test')).toBeInTheDocument();
    });

  test('Calls onSearch callback successfully given search button click',
    async () => {
      render(<FieldSearch {...requiredProps} />);

      const searchBtn = screen.getByRole('button');
      const input = screen.getByRole('searchbox');
      fireEvent.change(input, { target: { value: 'Test' } });
      await userEvent.click(searchBtn);
      expect(onSearch).toHaveBeenCalledWith('Test');
    });

  test('Calls onSearch callback successfully given \'isAuto\' property to true',
    async () => {
      render(<FieldSearch {...requiredProps} isAuto={true} />);

      const input = screen.getByRole('searchbox');
      fireEvent.change(input, { target: { value: 'Auto' } });
      expect(onSearch).toHaveBeenCalledWith('Auto');
    });
});
