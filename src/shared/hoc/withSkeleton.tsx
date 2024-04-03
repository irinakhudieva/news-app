import { DirectionType, SkeletonType } from "../interfaces";
import Skeleton from "../ui/Skeleton/Skeleton";



interface Props {
    isLoading: boolean;
    direction?: DirectionType;
    type?: SkeletonType;
}
  
function withSkeleton<P extends object>(
    Component: React.ComponentType<P>, 
    count?: number, 
) {
    return function WhithSkeleton(props: Props & P) {
        const {isLoading, type, direction, ...restProps} = props
        if(isLoading) {
            return <Skeleton type={type} count={count} direction={direction} />
        }

        return <Component type={type} direction={direction} {...(restProps as P)} />
    }
}

export default withSkeleton