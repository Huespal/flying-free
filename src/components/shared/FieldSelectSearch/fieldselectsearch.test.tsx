import {
  describe, expect, fireEvent, render, screen, test, userEvent, vi
} from '@/../testsSetup';
import FieldSelectSearch from '@/components/shared/FieldSelectSearch';

describe('FieldSelectSearch', () => {
  const onSelect = vi.fn();
  const options = ['test'];
  const requiredProps = { id: 'test', name: 'test', options, onSelect };

  test('Renders component successfully given required properties', () => {
    render(<FieldSelectSearch {...requiredProps} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  test('Displays the results box including options given filled \'options\' ' +
    'array property and search for an existing option', () => {
      render(<FieldSelectSearch {...requiredProps} />);

      const searchbox = screen.getByRole('searchbox');
      fireEvent.change(searchbox, { target: { value: 'test' } });
      expect(screen.getByRole('listitem')).toBeInTheDocument();
    });

  test('Displays results box with an empty message given filled \'options\' ' +
    'array property and search for an unexisting option', () => {
      render(<FieldSelectSearch {...requiredProps} />);

      const searchbox = screen.getByRole('searchbox');
      fireEvent.change(searchbox, { target: { value: 'unexistent' } });
      expect(screen.getByText('There are no results')).toBeInTheDocument();
    });

  test('Calls onSelect successfully given filled \'options\' ' +
    'array property and select an option from the results box', async () => {
      render(<FieldSelectSearch {...requiredProps} />);

      const searchbox = screen.getByRole('searchbox');
      fireEvent.change(searchbox, { target: { value: 'test' } });
      const listItem = screen.getByRole('listitem');
      await userEvent.click(listItem);
      expect(onSelect).toHaveBeenCalledWith('test');
    });
});
