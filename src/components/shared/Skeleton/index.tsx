import './styles.css';

enum SkeletonSize {
  small = 's',
  medium = 'm',
  large = 'l'
}

interface SkeletonProps {
  size?: `${SkeletonSize}`;
}

const Skeleton = ({ size = SkeletonSize.large }: SkeletonProps) =>
  <div className={`skeleton skeleton-${size}`} />;

export default Skeleton;