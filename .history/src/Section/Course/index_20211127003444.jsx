import {Assignment, DNA, Lesson, Student, Time} from '../../components/Icons'
import { PrimaryButton, SecondaryButton } from '../../components/Button'

import Chart from '../../components/Chart/Doughnut'
import SplitScreen from '../../components/SplitScreen'

export default function Course({
  course = "Molecular Biology",
  lessons = "21",
  assignments = "5",
  time = "50",
  students = "312"
}) {
  return (
    <div className="w-1/2 h-1/3">
    <SplitScreen leftWeight = 'w-1/4' rightWeight = 'w-grow'>
      <div id="left" className="relative flex justify-center items-center ">
          {/* <Chart /> */}
          <DNA className="text-6xl text-red-600 z-24 absolute bg-transparent inline-block h-16 w-16 rounded-full ring-2 ring-white"/>
      </div>
      <div id="right" className="ml-2 w-full">
        <h4 className="font-bold  mb-4 text-lg">{course}</h4>
        <div className="flex flex-col w-5/6 text-sm">
          <div className="flex  text-gray-500 font-semibold mb-2 ">
            <p className="flex items-center mr-16"> <Lesson className="mr-2"/>  {lessons} lessons</p>
            <p className="flex items-center"> <Time className="mr-2"/>  {time} min</p>
          </div>
          <div className="flex  text-gray-500 font-semibold text-left">
            <p className="flex items-center mr-8"> <Assignment className="mr-2"/>  {assignments} assignments</p>
            <p className="flex items-center"> <Student className="mr-2"/>  {students} students</p>
          </div>
        </div>
        <div className="mt-3">
          <PrimaryButton name="Continue" />
          <SecondaryButton name="Skip" />
        </div>
      </div>
      </SplitScreen>
      </div>
  )
}
