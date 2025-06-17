import {
  beforeEach, describe, expect, render, screen, test, vi
} from '@/../testsSetup';
import InfiniteScroll from '@/components/shared/InfiniteScroll';

beforeEach(() => {
  const mockIntersectionObserver = vi.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

describe('InfiniteScroll', () => {
  const requiredProps = {
    items: ['test'],
    request: () => new Promise<{ items: string[] }>(
      resolve => resolve({ items: ['test 2'] })),
    totalPages: 2,
    children: (item: string) => <div>{item}</div>
  };

  test('Renders component successfully given required properties', () => {
    render(<InfiniteScroll<string> {...requiredProps} />);

    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.queryByText('test 2')).not.toBeInTheDocument();
  });
});
