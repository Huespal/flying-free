import Skeleton from '@/components/shared/Skeleton';
import { Ref } from 'react';

interface SearchResultItemSkeletonProps {
  ref?: Ref<HTMLDivElement>;
}

const SearchResultItemSkeleton = ({ ref }: SearchResultItemSkeletonProps) => (
  <div ref={ref} className="card-itinerary">
    <Skeleton />
    <Skeleton />
    <footer>
      <Skeleton size="s" />
      <Skeleton size="s" />
    </footer>
  </div>
);

export default SearchResultItemSkeleton;