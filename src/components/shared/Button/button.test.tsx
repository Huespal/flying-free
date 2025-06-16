import {
  describe, expect,
  render, screen, test, userEvent, vi
} from '@/../testsSetup';
import Button from '@/components/shared/Button';

describe('Button', () => {
  const onClick = vi.fn();

  test('Renders component successfully given required properties', () => {
    render(<Button>Test</Button>);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button.innerHTML).toBe('Test');
  });

  test('Calls onClick callback given the \'onClick\' property',
    async () => {
      render(<Button onClick={onClick}>Test</Button>);

      const button = screen.getByRole('button');
      await userEvent.click(button);
      expect(onClick).toHaveBeenCalled();
    });

  test('Renders component disabled given the \'disabled\' property',
    async () => {
      render(<Button disabled onClick={onClick}>Test</Button>);

      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });
});
