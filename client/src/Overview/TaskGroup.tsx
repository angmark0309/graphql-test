import React from 'react'
import './Accordion.css'; // Import your CSS file for styling
import './tweet.css'
import {useRouter} from "../index";

const TaskGroup = () => {
    return (
        <div>
            <h2>Task Group One </h2>
            <h3>1 of 3 Tasks completed</h3>
        </div>
    )
}




interface AccordionItemProps {
    id: number;
    title: string;
    content: string;
}

function AccordionItem({ id, title, content }: AccordionItemProps) {
    const {navigate} = useRouter();
    const handleClick = () => {
        navigate(['taskgroup', id.toString()]);
    }
    return (
        <div className="accordion-item" onClick={handleClick}>
            <svg width="7" height="9" xmlns="http://www.w3.org/2000/svg"><path d="M.23.167C.078.278 0 .41 0 .563v7.874c0 .153.077.285.23.396A.911.911 0 0 0 .779 9a.91.91 0 0 0 .547-.167l5.444-3.937C6.923 4.784 7 4.652 7 4.5c0-.152-.077-.284-.23-.396L1.324.167A.91.91 0 0 0 .778 0 .911.911 0 0 0 .23.167z" fill="#CBCBCB" fill-rule="evenodd"/></svg>
            <div>
                <div className="accordion-item--top-row">
                    {title}
                </div>
                <div className="accordion-item--content">{content}</div>
            </div>
        </div>
    );
}

interface AccordionProps {
    items: AccordionItemProps[];
}

function Accordion({ items }: AccordionProps) {
    return (
        <div className="accordion">
            {items.map((item, index) => (
                <AccordionItem key={item.id} id={item.id} title={item.title} content={item.content} />
            ))}
        </div>
    );
}



export default Accordion;
