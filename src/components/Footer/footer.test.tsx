import { describe, expect, render, screen, test } from '@/../testsSetup';
import Footer from '@/components/Footer';

describe('Footer', () => {
  test('Renders component successfully given required properties', () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    expect(screen.getByText('Have a nice trip!')).toBeInTheDocument();
    expect(screen.getByText(`${currentYear}. All rights reserved.`))
      .toBeInTheDocument();
  });
});
