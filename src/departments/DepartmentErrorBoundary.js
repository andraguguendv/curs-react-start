import {ErrorBoundary} from "react-error-boundary";
import ErrorFallback from "../common/ErrorFallback";

const DepartmentErrorBoundary = (props) => {


    return <ErrorBoundary FallbackComponent={ErrorFallback} {...props} />
}

export default DepartmentErrorBoundary;
