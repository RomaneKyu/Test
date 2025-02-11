import { useState, ChangeEvent, PropsWithChildren } from "react";
import {useDelete} from "../store/DeleteContext";
 type CourseGoalProps = PropsWithChildren<{
    id: number;
    title: string; 
 }>;
export default function CourseGoal({title, id, children}: CourseGoalProps) {

    const [ isEditing, setIsEditing ] = useState(false);
    const [ newTitle, setNewTitle ] = useState(title);

    /*useEffect(() => {
        alert('Title modified!')
    }, [isEditing])*/

    function handleEditClick() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTitle(event.target.value);
        console.log(event);
    }


    let titleZone = <h2>{newTitle}</h2>
    if (isEditing){
        titleZone = <input type="text" required value={newTitle} onChange={handleChange}/>;
    }

    const {delFn} = useDelete();
    
    return (
        <article>
            <div>
                {titleZone}
                {children}
            </div>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
            <button onClick={() => delFn(id)}>Delete</button>
        </article>
    );
};

