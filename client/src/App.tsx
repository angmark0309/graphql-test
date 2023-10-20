import React from 'react'
import Overview from "./Overview/Overview";
import {useRouter} from "./index";
import {TaskGroup} from "./TaskGroup";
import {NotFound} from "./NotFound";
const App = () => {
    const { paths } = useRouter();
    const route = paths[0];

    if (route === 'overview') {
        return  <Overview />
    }

    if (route === 'taskgroup') {
        return <TaskGroup />
    }

  return (
    <NotFound />
  )
}

export default App
