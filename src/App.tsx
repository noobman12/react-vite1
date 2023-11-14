import {} from "react";
import "./App.css";
import VideoComponent from "./VideoComponent/index";
import TagComponent from "./TagComponent/index";
import WeatherThumb from "./Weatherthumb";
import { FiMoreHorizontal } from "react-icons/fi";
function App() {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex flex-col gap-10 task1'>
        <VideoComponent
          title='React: The Documentary'
          desc='The origin story of React'
        ></VideoComponent>
        <VideoComponent
          title='Rethinking Best Practices'
          desc='Pete Hut (2013)'
        ></VideoComponent>
        <VideoComponent
          title='Introducing React Native'
          desc='Tom Occhino (2015)'
        ></VideoComponent>
        <VideoComponent
          title='Introducing React Hook'
          desc='Sophie Alpert and Dan abramov (2018)'
        ></VideoComponent>
      </div>
      <div className='flex  flex-row gap-2 task2'>
        <TagComponent
          name='Angular'
          icon={true}
          backgroundColor='green'
        ></TagComponent>
        <TagComponent
          name='Svelte'
          icon={true}
          backgroundColor='green'
        ></TagComponent>
        <TagComponent
          name='Next'
          icon={true}
          backgroundColor='red'
        ></TagComponent>
      </div>
      <div className='task3 flex flex-col gap-10 border border-cyan-300 bg-slate-300 rounded-2xl w-[450px] px-[20px] justify-center col-2'>
        <div className='task3_1 flex flex-col gap-2 pt-[10px]'>
          <p className='flex gap-[200px]'>
            <span className='font-bold'>Great day to schedule</span>{" "}
            <span className='3dot'>
              <FiMoreHorizontal></FiMoreHorizontal>
            </span>{" "}
          </p>
          <p className='flex'>
            <span>Your usual hours</span>
          </p>
        </div>

        <div className='task3_2 flex flex-row gap-5 pb-[10px]'>
          <WeatherThumb
            sunAndCloud={true}
            dayOfWeek='Mon'
            eventTime='02:27 PM'
          ></WeatherThumb>
          <div className='bg-slate-400 rounded-md'>
            <WeatherThumb
              rainy={true}
              dayOfWeek='Tue'
              eventTime='06:00 AM'
            ></WeatherThumb>
          </div>
          <WeatherThumb
            sunAndCloud={true}
            dayOfWeek='Wed'
            eventTime='07:30 PM'
          ></WeatherThumb>
          <WeatherThumb
            cloudy={true}
            dayOfWeek='Thu'
            eventTime='12:00 PM'
          ></WeatherThumb>
          <WeatherThumb
            sunday={true}
            dayOfWeek='Fri'
            eventTime='04:00 PM'
          ></WeatherThumb>
        </div>
      </div>
    </div>
  );
}

export default App;
