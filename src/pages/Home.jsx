
import setting from '.././icons/setting.png';
import './home.css';
import { useState } from 'react';
import au1 from '.././audios/audio1.wav';
import au2 from '.././audios/audio2.wav';
import au3 from '.././audios/audio3.wav';
import { Link } from 'react-router-dom';

function Home() {
  const [update, setUpdate] = useState(true);
  const [animation, setAnimation] = useState(false);
  const [soundList, setSoundList] = useState(false);
  const [volumeBg, setVolumeBg] = useState('volume-bg1');
  const [gromkost, setGromkost] = useState(1);
  const [start, setStart] = useState(false);
  const [count, setCount] = useState(0);
  let counts = [20,20,10,20,20,10,20,20,10,15,15];
  const [counter, setCounter] = useState(counts[count])
let sleep=(ms) =>{
    return new Promise(resolve => setTimeout(resolve, ms));
 }
  let exercises = ['ex1', 'ex2', 'ex1', 'ex4', 'ex5', 'ex1', 'ex7', 'ex8', 'ex', 'ex', 'ex'];
  let text = [
    {name:'  Расслабьтесь  ',text:"Закройте глаза до сигнала"},
    {name:'Вверх−вниз',text:" На секунду задерживайте взгляд в верхней и нижней точках"},
    {name:'  Помигайте глазами  ',text:" Помигайте глазами или прикройте ладонями до сигнала"},
    {name:' Влево−вправо  ',text:"До упора, но без сильного напряжения"},
    {name:'  По диагонали  ',text:"Смотрите по углам, точка покажет как"},
    {name:'  Помигайте глазамиx  ',text:"  Помигайте глазами или прикройте ладонями до сигнала"},
    {name:'  По часовой стрелке  ',text:"Не спешите, делайте плавно"},
    {name:'  По спирали  ',text:"Старайтесь делать не меньше четырёх витков"},
    {name:'  Помигайте глазамиx  ',text:"  Помигайте глазами или прикройте ладонями до сигнала"},
    {name:'  Вблизи-вдали ',text:"Посмотрите на предмет вдали, потом — на монитор"},
    {name:'  Расслабьтесь ',text:"Закройте глаза, вы почти закончили"},
  ]
  const [finish, setFinish] = useState(false)
  let startExercise = async()=>{
    setStart(true);
    for (let j=0; j<counts.length;j++){
    for (let i=counts[j];i>0;i--){
    await sleep(1000) ;
    setCounter(i);
    setCount(j);
    console.log(count);
}
sound.play();
    }
    setFinish(true)
    setTimeout(()=>{setFinish(false);setAnimation(false);setStart(false)},10000)
  }
      

  
  let audio1 = new Audio(au1);
  let audio2 = new Audio(au2);
  let audio3 = new Audio(au3);
  const [sound, setSound] = useState(audio1);
  
window.onclick =(e)=>{
  if (!e.target.classList.contains('sound-bg'))
  setSoundList(false)}
let noSound= ()=>{

}
let setVolume =(v1)=>{
  let volume = v1.target.value;
  if (volume<=15){
    setVolumeBg('volume-bg4');
    setGromkost(0.25);
    sound.volume = 0.25;
    sound.play();
  }
  else
    if (volume>15&&volume<=50){
      setVolumeBg('volume-bg3');
      setGromkost(0.50);
      sound.volume = 0.50;
      sound.play();
    }
    else
      if (volume>50&&volume<=75) {
        setVolumeBg('volume-bg2');
        setGromkost(0.75);
        sound.volume = 0.75;
        sound.play();
      }
        else{
          {
            setVolumeBg('volume-bg1');
            setGromkost(1);
            sound.volume = 1;
            sound.play();
          }}
  

console.log(volume);
}
  let sound_bg1 =()=>{
    setSound(audio1);
    audio1.play();
  }

  let sound_bg2 =()=>{
    setSound(audio2);
    audio2.play();
  }
  let sound_bg3 =()=>{
    setSound(audio3);
    audio3.play();

  }
  function myLoop() {
    for (var i = 1; i <= 360; i++) {
      (function (i) {
        setTimeout(function () {
          document.querySelector("#bodyId").style.background = `linear-gradient(45deg, rgb(${i},125,127), rgb(98,125,125)); `;
        }, 1000);
      })(i)
    }
  }

  return (
    <div className="App" id="bodyId">
            <div className={`circle ${start?exercises[count]:null}`}></div>

      <div className='flex justify-between'>
        <div className={`settings  h-dvh w-1/3 `}>
          <div className={`min-eye  absolute z-0 ${animation ? "opacity-75 animation1" : "opacity-0"}`}>
          </div>
          <div className={`flex z-20 flex-col bg-white  p-4 w-full h-full update  transition  duration-1000  ${update ? "opacity-0" : "opacity-1"}`}>
            <div className='update-list-header flex items-center justify-between'>
              <p className='mr-2'>
                Список обновлений
              </p>
              <div className='update-x' onClick={() => setUpdate(true)}>

              </div>
            </div>
            <div className='flex flex-col text-sm'>
              <div className='mb-2'
              >
                <h1 className='text-gray-500 mb-2'>
                  15.10.2015
                </h1>
                <p>
                  Добавлена украинская версия сайта
                  Добавлен баг лист в котором записаны улучшения
                  Добавлен регулятор громкости мелодий на сайте
                  Добавлены промежуточные пункты между упражнениями, общее время упражнения осталось неизменным
                </p>
              </div>
              <div className='mb-2'>
                <h1 className='text-gray-500 mb-2'>
                  28.10.2015
                </h1>
                <p>
                  Pешено перенести регулятор громкости как отдельный элемент
                </p>
              </div>
              <div>
                <h1 className='text-gray-500 mb-2'>
                  31.10.2015
                </h1>
                <p>
                  Анимация на полный экран Переделана стилистика баг-листа
                </p>
              </div>
            </div>
          </div>
          <img src={setting}
            onClick={() => setUpdate(false)}
            className={`${update ? "block" : "hidden"}self-end m-1 ml-5 mb-2`} />
        </div>
        <div className='w-2/3 '>
          <div className='my-height mt-8 '>
          <div className={`eyes ${animation ? "animation " : ""}`}>
          </div>
          </div>
          {finish? <span>   Вы молодец! Теперь немного отдохните от компьютера. <br />Если не закроете вкладку, через час мы вам напомним про отдых.
            </span>:start?<div className='flex flex-col items-center'>
            <h1 className='text-white font-medium text-5xl mb-8 '>{text[count]?.name}</h1>
            <h1 className='text-white font-extrabold text-8xl mb-8'>{counter}</h1>
            <h1 className='text-white  leading-7 mt-12'>{text[count]?.text}</h1>
          </div >:
          <div className='mt-8 flex flex-col items-center'>
          {animation?<div className='text-white animation3 h-2/3 transition-opacity'>
            <h1 className='text-4xl mb-5'>Рекомендации</h1>
            <div>
              <p className='text-gray-200 mb-2'>В комплексе набор упражнений, во время которых нужно смотреть в направления, указываемые точкой.</p>
              <p className='text-gray-200 mb-2'>Точка показывает только направление — взгляд перемещайте до упора, но не сильно</p>
              <p className='text-gray-200 mb-2'>В крайних точках задерживайте взгляд на секунду.</p>
              <p className='text-gray-200 mb-2'>После выполнения каждого упражнения можно легонько зажмуриться или поморгать пару секунд – это помогает расслабиться глазам.</p>
              <p className='text-gray-200 mb-2'>Общее время упражнения: 3 минуты 25 секунд.</p>
            </div>
            <div className='flex mt-5 w-2/3 justify-around items-center'>
            <p>
            <input type="checkbox" className="default:ring-3 mr-2  hover:border-gray-500" />
               Больше не показывать </p>
            <button className='border-2 border-white p-3 rounded-2xl hover:border-gray-400' onClick={()=>startExercise()}>Начать</button>
            </div>
          </div>:
            <>
          <div className='flex flex-col items-center mt-8'>
            <button className='border-white border-2 rounded-3xl p-2 text-white hover:border-gray-400'
              onClick={() => setAnimation(true)}
            > Начать зарядку для глаз</button>
            <p className='text-sm text-white mt-2'> 
            <Link to='/recom' className='hover:underline'>Рекомендации
            </Link>
            </p>
          </div>


          <div className='footer flex text-white'>
            <p className='hover:bg-cyan-400'> 
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 50 50">
              <path fill="white" d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 
47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 
37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 
24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C
 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
            </svg>
              Твитнуть</p>
            <p className='hover:bg-sky-400'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path fill="#fff" d="M13 0H3C1 0 0 1 0 3v10c0 2 1 3 3 3h5V9H6V7h2V5c0-2 2-2 2-2h3v2h-3v2h3l-.5 2H10v7h3c2 0 3-1 3-3V3c0-2-1-3-3-3z"></path></svg>
              Поделиться</p>
            <p className='hover:bg-zinc-400'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path fill="#fff" d="M13 0H3C1 0 0 1 0 3v10c0 2 1 3 3 3h10c2 0 3-1 3-3V3c0-2-1-3-3-3zm.452 11.394l-1.603.022s-.345.068-.8-.243c-.598-.41-1.164-1.48-1.604-1.342-.446.144-.432 1.106-.432 1.106s.003.206-.1.315c-.11.12-.326.144-.326.144H7.87s-1.582.095-2.975-1.356c-1.52-1.583-2.862-4.723-2.862-4.723s-.078-.206.006-.305c.094-.112.35-.12.35-.12l1.716-.01s.162.026.277.11c.095.07.15.202.15.202s.276.7.643 1.335c.716 1.238 1.05 1.508 1.293 1.376.353-.193.247-1.75.247-1.75s.006-.565-.178-.817c-.145-.194-.415-.25-.534-.267-.096-.014.062-.238.267-.338.31-.15.853-.16 1.497-.153.502.004.646.035.842.083.59.143.39.694.39 2.016 0 .422-.075 1.018.23 1.215.13.085.453.013 1.256-1.352.38-.647.666-1.407.666-1.407s.062-.136.16-.194c.098-.06.232-.04.232-.04l1.804-.012s.542-.065.63.18c.092.257-.203.857-.94 1.84-1.21 1.612-1.345 1.46-.34 2.394.96.89 1.16 1.325 1.192 1.38.4.66-.44.71-.44.71z"></path>
              </svg>
              Поделиться</p>
              </div>
              </>}
              </div>}
        </div>
        <div className='volume  w-1/3 flex items-start justify-end p-2'>
          <button className='border-2 m-2 rounded text-sm p-1 bg-transparent text-white'>Ru</button>
          <div className='m-2 flex flex-col'>
            <div className='sound-bg m-1 sound-bg1' onClick={()=>setSoundList(!soundList)}></div>
            <div className={`${soundList?'block':'hidden'}`}>
            <div className='sound-bg m-1 sound-bg1' onClick={()=>sound_bg1()}></div>
            <div className='sound-bg m-1 sound-bg2' onClick={()=>sound_bg2()}></div>
            <div className='sound-bg m-1 sound-bg3' onClick={()=>sound_bg3()}></div>
            <div className='sound-bg m-1 sound-bg4' onClick={()=>noSound()}></div>
            </div>
          </div>
          <div>
            <div className='volume flex flex-col m-3 items-center'>
              <div className={`volume-bg bg-no-repeat ${volumeBg}`}></div>
            <div className='bg-transparent'>
          <input min="1" max="100" step={2} type='range'  orient="vertical" className="range mt-2 bg-transparent " 
          onChange={(e)=>setVolume(e)} />
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
