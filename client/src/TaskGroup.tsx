import {useRouter} from "./index";
import {useQuery} from "@apollo/client";

export const TaskGroup = () => {
    const {paths} = useRouter()
    const taskGroupId = paths[1]

    return <div>{taskGroupId}</div>
};