import CourseGoal from "./CourseGoal";
import {type CourseGoal as CourseGoalType} from '../App.tsx'
type CourseGoalListProps = {
    goals: CourseGoalType[];
};

export default function CourseGoalList({goals}: CourseGoalListProps) {
    return (
        <ul>
            {goals.map((goal) => (
                <li>
                <CourseGoal id= {goal.id} title={goal.title}> 
                <p>{goal.description}</p>
                </CourseGoal>
                </li>
            ))}
        </ul>
    )
}