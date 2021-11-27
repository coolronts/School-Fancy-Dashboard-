import './App.css'

import { Course, Intro } from './Section'
import {PrimaryCard, SecondaryCard} from './components/Card'

import Class from './Section/Class'
import FullColouredCard from './Section/FullColouredCard'
import LeftDrawer from './Section/LeftDrawer'
import MultiLine from './components/Chart/MultiLine'
import PointCard from './Section/PointCard'
import Portfolio from './Section/Portfoilo'
import {RowList} from './components/List'
import SplitScreen from './components/SplitScreen'

function App() {
  const classMenu = ["All", "Design", "Science", "Coding"]
  const MenuComponent = ({ item }) =>(
    <p
      className="px-2 text-sm font-medium text-gray-500 cursor-pointer hover:border-purple-800 border-transparent border-b-4 hover:border-current2">
      {item}
    </p>
  )

  return (
    
    <div className="App h-screen w-screen">
      <div className="p-6 bg-purple-800 m-2 rounded-3xl flex">
        <LeftDrawer className="flex-shrink" />
        <div className="bg-white rounded-3xl px-3 py-12 flex-grow">
          <SplitScreen leftWeight = 'w-3/6 pr-2 pl-4' rightWeight=" bg-purple-50 rounded-2xl px-2 ml-8">
            <div id="left">
              <Intro/>    
              <div id="course" className="h-1/3 mt-4">
                <p className="text-xl font-bold font-sans mb-4">Today's Course</p>
                <div className="overflow-y-scroll overflow-x-hidden pr-5 h-96 pb-6 scrollbar scrollbar-thin scrollbar-thumb-purple-200 scrollbar-track-transparent">
                  {classMenu.map((index) => <PrimaryCard><Course/></PrimaryCard>)}
                </div>
              </div>
              <div id="Class" className="h-1/4">
                <p className="text-2xl font-bold font-sans">Your Class</p>
                <div className="pr-48">
                  <RowList 
                    items={classMenu}
                    itemComponent={MenuComponent}
                    resourceName="item"
                  />
                </div>
                <PrimaryCard color="yellow"> <Class/> </PrimaryCard>
              </div>
            </div>
        
            <div id="right" className="">
              <div className="mt-8">
                <SplitScreen leftWeight='w-3/6 mr-6' rightWeight='w-full'>
                  <Portfolio id="left"/>
                  <div id="right" className="px-24">
                    <PrimaryCard color="white"> <PointCard/> </PrimaryCard>
                    <div className="flex w-full">
                      <SecondaryCard color="yellow"> <FullColouredCard/> </SecondaryCard>
                      <SecondaryCard color="red"> <FullColouredCard/> </SecondaryCard>
                    </div>
                  </div>
                </SplitScreen>
              </div>
              <PrimaryCard color="white" className="">
                <div>
                  <p className="text-2xl font-bold ">Learning Activity</p>
                  <MultiLine/>
                </div>
              </PrimaryCard>
            </div>
          </SplitScreen>
        </div>
      </div>
    </div>
  )
}

export default App
