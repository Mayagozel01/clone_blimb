import './recom.css'
import logo from ".././icons/logo.png";
import { Link } from 'react-router-dom';

const Recom = ()=>{
    return(
        <div className='flex flex-row main'>
            <div className='w-1/6 p-4 '>
                <Link to='../'><img src={logo}/></Link> 
            </div>
            <div className='w-1/2 mt-8'>
            <div className="mt-8 mb-4 text-lg">
           <p className='ms-8'>
               Зарядка для глаз во время&nbsp;работы перед монитором важна не менее, чем разминки&nbsp;спины после дня в полусогнутом положении. 2-3 минуты помогают вернуть тонус глазным мышцам. В идеале, после зарядки разомните&nbsp;шею и&nbsp;отдохните.
           </p>
           <h1 className='text-4xl font-bold mt-8 ms-8 mb-8'>Рекомендации</h1>

           <p className='ms-8'>
               Перед гимнастикой важно расслабить глазные мышцы. Для этого&nbsp;прикройте веки на пол минуты либо сделайте
               <a className="ms-2 text-indigo-400" href="https://www.youtube.com/results?search_query=%D0%BF%D0%B0%D0%BB%D1%8C%D0%BC%D0%B8%D0%BD%D0%B3" target="_blank">пальминг</a>.
           </p>
           <div className="line"></div>
       </div>
       <div className="">
           <div className="quote">
               <p>
                   Глаза закройте, веки легонько прикройте ладошками, чтобы не проникал свет. Расслабьтесь.
               </p>

               <p>
                   Старайтесь выполнять упражнения каждые пол часа и после рабочего дня.
               </p>

           </div>
       </div>
       <div className="centerlayer"><div className="line"></div>
           <p className='text-lg mt-4 mb-4'>В комплексе&nbsp;набор упражнений, во время которых нужно смотреть в направления, указываемые точкой.</p>

           <p className='text-lg mt-4 mb-4'>Точка показывает только направление — взгляд перемещайте до упора, но не сильно.</p>

           <p className='text-lg mt-4 mb-4'>В крайних точках задерживайте взгляд на секунду.</p>

           <p className='text-lg mt-4 mb-4'>После выполнения каждого упражнения можно легонько зажмуриться или&nbsp;поморгать пару&nbsp;секунд – это помогает расслабиться глазам.</p>

           <p className='text-lg mt-4 mb-4'>Не обязательно делать зарядку, смотря в компьютер. Когда выучите программу, делайте разминку, например, глядя в окно.</p>

           <p className='text-lg mt-4 mb-4'>Хорошего зрения!</p>

           <div className="line"></div>
         
         <p className='text-lg mt-4 mb-8'>Сайт нарисовал <a className='text-indigo-400 ms-2' 
         href="http://willve.com/" target="_blank">Сергей Саржевский</a> и написал код <a  className='text-indigo-400 ms-2'href="https://www.facebook.com/profile.php?id=100006295684857">Руслан Вязников</a></p>

       </div>
            </div>
        </div>
    )
}
export default Recom;