import React from 'react'
import Accordion from "./TaskGroup";
import {useQuery} from "@apollo/client";
import {GetTaskGroupsDocument} from "../graphql/getTasks.generated";


const TaskGroupList = () => {
    const {data, loading, error} = useQuery(GetTaskGroupsDocument);
    if (loading) {
        return <div>Loading Task Groups...</div>
    }
    
    if (!data?.taskGroups?.length) {
        return <div>No Task Groups are found</div>
    }

    const items = data.taskGroups.map(group => ({id:group.id, title: group.name, content: ''}))
    return <Accordion items={items}/>
};
const Overview = () => {
    const {data, loading, error} = useQuery(GetTaskGroupsDocument);
    return (
        <>
        <h1>Things To Do</h1>
        <div>
            <TaskGroupList />
        </div>
        </>
    )
}

export default Overview
