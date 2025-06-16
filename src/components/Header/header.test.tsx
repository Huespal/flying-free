import { describe, expect, render, screen, test } from '@/../testsSetup';
import Header from '@/components/Header';

describe('Header', () => {
  test('Renders component successfully given required properties', () => {
    render(<Header />);

    expect(screen.getByText('Flying Free')).toBeInTheDocument();
  });
});
