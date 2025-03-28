import CourseGoalList from './components/CourseGoalList.tsx'
import NewGoal from './components/NewGoal.tsx';
import { DeleteProvider } from './store/DeleteContext.tsx';
import './App.css'
import {useState } from "react";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
}
export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals(prevGoals => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary
      };
      return [...prevGoals, newGoal]
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <DeleteProvider delFn={handleDeleteGoal}>
        <NewGoal onAddGoal={handleAddGoal}/>
        <CourseGoalList goals={goals} />
      </DeleteProvider>
    </main>
  )
}
