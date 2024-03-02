import './App.css'
import { MdFeaturedPlayList, MdOutlineFastfood } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdDownload } from "react-icons/io";
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import featureTwo from './assets/feature-2.gif'
import packageFood from './assets/grocery.gif'
import food from './assets/food-1.png'
import lettuce from './assets/lettuce.png'
import hambugerOne from './assets/feature-1.png'
import featureThree from './assets/feature-3.gif'
import featureFour from './assets/feature-4.gif'
import featureFive from './assets/feature-5.gif'
import featureSix from './assets/feature-6.gif'
import { GiKnifeFork } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { GiFrenchFries } from "react-icons/gi";
import { LuChefHat } from "react-icons/lu";
import special from './assets/hamandfry.jpeg'
import owner from './assets/main-chef.png'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import chefTwo from './assets/chef-2.png'
import chefThree from './assets/chef-3.png'
import chefFour from './assets/chef-4.png'
import { CiPhone } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";

function App() {

  const [text] = useTypewriter({
    words: [`CHEF'S SPECIAL`],
    loop: 5,
    delaySpeed: 1500,
    typeSpeed: 100,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })


  return (
    <div className='web-scroll'>
    {/* Hero Section */}
    <section className="bg-[url('./assets/bg-3.jpeg')] bg-no-repeat bg-cover h-fit w-screen">
     <nav className='flex justify-center md:justify-between items-center p-8 md:p-14 mx-4 md:md-8'>
          {/* Logo */}
        <div className="flex justify-center items-center">      
          <MdOutlineFastfood className='font-nunito
                transition ease-in-out delay-150 duration-500 hover:scale-150
                ' size={30}/>
            </div>
            <div>
              <ul className='hidden md:flex space-x-20 font-prompt'>
                <a href="">
                <li className='font-nunito
                transition ease-in-out delay-150 duration-500 hover:-translate-y-2 hover:scale-110
                '>Home</li>
                </a>
                <a href="">
                <li  className='font-nunito
                transition ease-in-out delay-150 duration-500 hover:-translate-y-2 hover:scale-110
                '>About Us</li>
                </a>
                <a href="">
                <li className='font-nunito
                transition ease-in-out delay-150 duration-500 hover:-translate-y-2 hover:scale-110
                '>Special</li>
                </a>
                  <a href="">
                <li className='font-nunito
                transition ease-in-out delay-150 duration-500 hover:-translate-y-2 hover:scale-110
                '>Team</li>
                </a>
              </ul>

              
          </div>
          <div className='hidden md:flex'>
              <MdEmail className='font-nunito
                transition ease-in-out delay-150 duration-500 hover:-translate-x-6
                ' size={30} />
              </div>
              


     </nav>
     <img src={lettuce} className='w-60 md:w-96 absolute right-[75%] md:right-[88%] top-2 md:top-44 animate-pulse'  alt="" />
        <div className="mx-4 md:mx-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
          <div className='flex md:hidden'>
            <img src={food} className=' relative bottom-10 floating' alt="" />
            </div>
            <div className='text-center md:text-start'>
              <span className='text-2xl text-red-800 font-normal font-righteous'></span>
              <span className='text-lg md:text-2xl text-red-800 font-normal font-righteous'>{text}</span>
      <Cursor cursorColor='white' />
              <h1 className='text-[50px] md:text-[90px] font-extrabold leading-tight font-nunito'>Freshness<br/> In Every Bite.</h1>
              <p className='text-xl font-hind'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Deserunt quo veritatis tenetur?</p>
              <div className='my-10'>
              <a className='bg-black text-white rounded-[25px] text-lg shadow-lg
               shadow-black/50 hover:shadow-gray-400  px-10 py-6 hover:bg-white hover:text-black transition ease-linear
               delay-150 duration-300
               font-prompt'>Download recipe <IoMdDownload className='inline space-x-2' />
                              </a>
              </div>
            </div>
            <div className='hidden md:flex'>
            <img src={food} className='relative bottom-10 floating' alt="" />
            </div>
          </div>
        </div>

    </section>

    {/* About Section */}
    <section className="bg-[url('./assets/bg-2.jpeg')] bg-no-repeat bg-cover h-fit md:h-screen w-screen p-8 md:p-14 ">
        <div className="mb-2 font-righteous font-extrabold justify-center items-center flex text-[40px] leading-tight md:text-[70px] text-center">
        <h2 className='flex space-x-5 justify-center items-center'> About Freshbites <GiKnifeFork className='hidden md:flex' size={80} />

        </h2>
        </div>
        {/* Mobile View */}

        <div className="md:hidden grid grid-cols-1">
          <div>
            <img src={hambugerOne} className='spin' alt="" />
          </div>
        </div>


        <div className="md:hidden flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-10  place-items-center">
            <div className=" bg-transparent text-center rounded-lg backdrop-blur-sm shadow-sm p-5 h-fit w-fit">
            <img src={packageFood} className='w-12 inline items-center' alt="" />
                  <span className='font-prompt text-2xl'>Quality Package 
                  
                  </span>
                  {/* <p className='font-hind'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio sequi aut autem!</p>
             */}
              </div>
         
          
            <div className=" bg-transparent text-center rounded-lg backdrop-blur-sm shadow-sm p-5 h-fit w-fit">
            <img src={featureTwo} className='w-12 inline items-center' alt="" />
                  <span className='font-prompt text-2xl'>Outstanding Delicates 
                
                  </span>
                  {/* <p className='font-hind'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio sequi aut autem!</p>
             */}
             
              </div>

              
            
          </div>

          <div className="grid grid-cols-2  gap-10 place-items-center">
            <div className=" bg-transparent text-center rounded-lg backdrop-blur-sm shadow-sm p-5 h-fit w-fit">
            <img src={featureThree} className='w-12 inline items-center' alt="" />
                  <span className='font-prompt text-2xl'>Cleanliness
                  
                  </span>
                  {/* <p className='font-hind'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio sequi aut autem!</p>
             */}
              </div>
         
          
            <div className=" bg-transparent text-center rounded-lg backdrop-blur-sm shadow-sm p-5 h-fit w-fit">
            <img src={featureFour} className='w-12 inline items-center' alt="" />
                  <span className='font-prompt text-2xl'>Exceptional Service
                
                  </span>
                  {/* <p className='font-hind'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio sequi aut autem!</p>
             */}
             
              </div>

           
          </div>

          <div className="grid grid-cols-2  gap-10 place-items-center">
            <div className=" bg-transparent text-center rounded-lg backdrop-blur-sm shadow-sm p-5 h-fit w-fit">
            <img src={featureFive} className='w-12 inline items-center' alt="" />
                  <span className='font-prompt text-2xl'>Culinary Expertise
                  
                  </span>
                  {/* <p className='font-hind'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio sequi aut autem!</p>
             */}
              </div>
         
          
            <div className=" bg-transparent text-center rounded-lg backdrop-blur-sm shadow-sm p-5 h-fit w-fit">
            <img src={featureSix} className='w-12 inline items-center' alt="" />
                  <span className='font-prompt text-2xl'>Experience 
                
                  </span>
                  {/* <p className='font-hind'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio sequi aut autem!</p>
             */}
             
              </div>

              
              
            
          </div>

          <div className='my-6 text-center'>
              <a className='bg-black text-white rounded-[25px] text-lg shadow-lg
               shadow-black/50 hover:shadow-gray-400  px-8 py-4 hover:bg-white hover:text-black transition ease-linear
               delay-150 duration-300
               font-prompt'>Order Now <FaPhoneAlt className='inline space-x-2' />
                              </a>
              </div>
          </div>
             {/* End of Mobile View */}

        {/* Desktop View */}
          <div className="hidden md:flex justify-between items-center mx-4 md:md-8">
            <div className="flex flex-col justify-evenly gap-10">
              <div className=" bg-transparent rounded-lg backdrop-blur-xl shadow-sm p-5 h-40 w-fit">
                  <span className='font-prompt text-2xl'>Quality Package 
                  <img src={packageFood} className='w-12 inline items-center' alt="" />
                  </span>
                  <p className='font-hind'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio sequi aut autem!</p>
            
              </div>
              <div className=" bg-transparent rounded-lg backdrop-blur-xl shadow-sm p-5 h-40 w-fit">
                  <span className='font-prompt text-2xl whitespace-nowrap'>Outstanding Delicates 
                  <img src={featureTwo} className='w-12 inline items-center' alt="" />
                  </span>
                  <p className='font-hind'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio sequi aut autem!</p>
            
              </div>
              <div className=" bg-transparent rounded-lg backdrop-blur-md shadow-sm p-5 h-40 w-fit">
                  <span className='font-prompt text-2xl whitespace-nowrap'>Cleanliness
                  <img src={featureThree} className='w-12 inline items-center' alt="" />
                  
                  </span>
                  <p className='font-hind'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio sequi aut autem!</p>
            
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <img src={hambugerOne} className='w-[1100px] spin' alt="" />

              <div className='my-10'>
              <a href="" className='bg-black text-white rounded-[25px] text-lg shadow-lg
               shadow-black/50 hover:shadow-gray-400  px-8 py-4 hover:bg-white hover:text-black transition ease-linear
               delay-150 duration-300
               font-prompt'>Order Now <FaPhoneAlt className='inline space-x-2' />
                              </a>
              </div>
            </div>

            <div className="flex flex-col justify-evenly gap-10">
            <div className=" bg-transparent rounded-lg backdrop-blur-2xl shadow-sm p-5 h-40 w-fit">
                  <span className='font-prompt text-2xl'>Exceptional Service
                  <img src={featureFour} className='w-12 inline items-center' alt="" />
                  
                  </span>
                 
                  <p className='font-hind'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio sequi aut autem!</p>
            
              </div>
              <div className=" bg-transparent rounded-lg backdrop-blur-md shadow-sm p-5 h-40 w-fit">
                  <span className='font-prompt text-2xl'>Culinary Expertise
                  <img src={featureFive} className='w-12 inline items-center' alt="" />
                  
                  </span>
                  <p className='font-hind'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio sequi aut autem!</p>
            
              </div>
              <div className=" bg-transparent rounded-lg backdrop-blur-md shadow-sm p-5 h-40 w-fit">
                  <span className='font-prompt text-2xl'>Experience 
                  <img src={featureSix} className='w-12 inline items-center' alt="" />
                  
                  </span>
                  <p className='font-hind'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio sequi aut autem!</p>
            
              </div>
            </div>

          </div>
    </section>

              {/* Extra */}
              <section className="bg-[url('./assets/bg-3.jpeg')] bg-no-repeat bg-cover h-fit md:h-screen w-screen p-8 md:p-14">
              <div className="mb-2 font-righteous font-extrabold justify-center items-center flex text-[30px] leading-tight md:text-[70px] text-center">
        <h2 className='flex space-x-5 justify-center items-center'> Let Us Satisfy Your Cravings
        <GiFrenchFries className='hidden md:flex animate-bounce' size={80} />

        </h2>
        </div>

             <div className="flex justify-center items-center my-8">
              <img src={special} className='rounded-3xl md:w-[900px]' alt="" />
             </div>

              </section>

              {/* Team */}
                <section className="bg-[url('./assets/bg-2.jpeg')] bg-no-repeat bg-cover h-fit md:h-screen w-screen p-8 md:p-14">
                <div className="mb-2 font-righteous font-extrabold justify-center items-center flex text-[30px] leading-tight md:text-[70px] text-center">
        <h2 className='flex space-x-5 justify-center items-center'> Team
        <LuChefHat className='md:flex animate-bounce text-2xl md:text-[50px]' />

        </h2>
        </div>

              <div className="grid grid-cols-1 p-8 md:grid-cols-3 gap-8 place-items-center">
                {/* Card */}
                <div className="bg-transparent shadow-black/35 
                transition-all hover:scale-110 hover:-translate-y-2 w-80 md:w-fit flex md:block
                 flex-col justify-center items-center  ease-in-out shadow-2xl backdrop-blur-md p-3 md:p-6">
                  <div className='my-3 text-center'>
                      <img src={owner} className='w-40 md:w-60 rounded-full' alt="" />
                    <h3 className='font-prompt md:text-[30px]'>David Goe</h3>
                    <span className='text-center font-hind'>Owner</span>
                  </div>
                  <hr />
                  <div className="my-2 flex justify-center items-center space-x-5 flex-row">
                  <FaInstagram size={25}/>
                  <FaLinkedinIn size={25}/>
                  <FaTiktok size={25}/>
                  </div>
                </div>

                <div className="bg-transparent shadow-black/35 
                transition-all hover:scale-110 hover:-translate-y-2 w-80 md:w-fit flex md:block
                 flex-col justify-center items-center  ease-in-out shadow-2xl backdrop-blur-md p-3 md:p-6">
                  <div className='my-3 text-center'>
           
                      <img src={chefTwo} className='w-40 md:w-60 rounded-full' alt="" />
                    <h3 className='font-prompt md:text-[30px]'>Emmanuel Ola</h3>
                    <span className='text-center font-hind'>Chef</span>
                  </div>
                  <hr />
                  <div className="my-2 flex justify-center items-center space-x-5 flex-row">
                  <FaInstagram size={25}/>
                  <FaLinkedinIn size={25}/>
                  <FaTiktok size={25}/>
                  </div>
                </div>

                <div className="bg-transparent shadow-black/35 
                transition-all hover:scale-110 hover:-translate-y-2 w-80 md:w-fit flex md:block
                 flex-col justify-center items-center ease-in-out shadow-2xl backdrop-blur-md p-3 md:p-6">
                  
                  <div className='my-3 text-center'>
                      <img src={chefThree} className='flex w-40 md:w-60 rounded-full' alt="" />
                    <h3 className='font-prompt md:text-[30px]'>Isabella Martina</h3>
                    <span className='text-center font-hind'>Asst. Chef & <br/>Soical Media Manager</span>
                  </div>
                  <hr />
                  <div className="my-2 flex justify-center items-center space-x-5 flex-row">
                  <FaInstagram size={25}/>
                  <FaLinkedinIn size={25}/>
                  <FaTiktok size={25}/>
                  </div>
                </div>

              </div>
                  <div className='my-10 flex justify-center items-center'>
              <a className='bg-black text-white rounded-[25px] text-lg shadow-lg
               shadow-black/50 hover:shadow-gray-400  px-10 py-6 hover:bg-white hover:text-black transition ease-linear
               delay-150 duration-300
               font-prompt'>View Page <FaInstagram className='inline space-x-2' />
                              </a>
              </div>
                </section>  

              {/* Contact */}
                <section className="bg-[url('./assets/bg-3.jpeg')] bg-no-repeat bg-cover h-fit md:h-screen w-screen p-8 md:p-14">
                <div className="mb-2 font-righteous font-extrabold justify-center items-center flex text-[30px] leading-tight md:text-[70px] text-center">
        <h2 className='flex space-x-8 justify-center items-center'> Contact Us
        <MdOutlineMailOutline   className='md:flex animate-bounce text-2xl md:text-[50px]' />

        </h2>
        </div>

             <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">
              <div className="">
                <img src={chefFour} className='md:w-96' alt="" />
              </div>

              <div className="text-xl md:text-3xl text-center md:text-start leading-relaxed font-prompt">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus fugiat laborum hic, nihil eius voluptatem deserunt, officiis est nobis cum placeat? Quis eum non vero labore temporibus ipsa odit, consectetur eveniet minima assumenda voluptatum iure dolores cumque id earum minus!
    
                  </p>

                  <div className='my-6 text-center md:text-start'>
              <a className='bg-black text-white rounded-[25px] text-lg shadow-lg
               shadow-black/50 hover:shadow-gray-400  px-8 py-4 hover:bg-white hover:text-black transition ease-linear
               delay-150 duration-300
               font-prompt'>Email Now <MdOutlineMailOutline className='inline space-x-2' />
                              </a>
              </div>
              </div>
             </div>
                </section>


                <footer className="bg-[url('./assets/bg-2.jpeg')] bg-no-repeat bg-cover h-fit w-screen px-2 pt-2 md:pt-8 md:pb-1 md:px-8">
                <div className="mx-4 md:mx-8">
                  {/* Destop Footer */}
                  <div className="hidden md:grid md:grid-cols-3 mt-3 mb-2">
                    <div className="">
                    <MdOutlineFastfood className='font-nunito
                transition ease-in-out delay-150 duration-500 hover:scale-150
                ' size={30}/>
                      <h1 className='font-righteous'>Fresh bites</h1>
                      <p className=' font-prompt'>
                      Freshness
                        In Every Bite.
                      </p>
                    </div>
                    <div className="">
                      <h3 className=' font-righteous'>Quick Links</h3>
                      <ul className=' font-prompt'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Team</li>
                      </ul>
                    </div>
                    <div className="flex flex-row justify-center items-center space-x-10">
                      <FaInstagram size={30}/>
                      <FaLinkedinIn size={30}/>
                      <FaTiktok size={30}/>
                    </div>
                  </div>
                  {/* Mobile Footer */}
                  <div className="md:hidden mb-4 flex justify-between items-center">
                    <div className="">
                    <MdOutlineFastfood className='font-nunito
                transition ease-in-out delay-150 duration-500 hover:scale-150
                ' size={30}/>
                      <h1 className='font-righteous'>Fresh bites</h1>
                      <p className=' font-prompt'>
                      Freshness
                        In Every Bite.
                      </p>
                    </div>
                    <div className="">
                      <h3 className=' font-righteous'>Quick Links</h3>
                      <ul className=' font-prompt text-center '>
                        <li>Home</li>
                        <li>About</li>
                        <li>Team</li>
                      </ul>
                    </div>
                    
                  </div>
              <hr />
                  <div className="flex justify-center items-center">
                    <p className=' font-prompt'>&#169; 2024 All Rights Reserved. </p>
                  </div>
                  </div>
                </footer>

    </div>
  )
}

export default App
