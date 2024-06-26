import React, { useEffect, useRef, useState } from 'react'
import CarouselHome from '../Components/Carousel/CarouselHome';
import Carousel from '../Components/Carousel/Carousel';
import CaroueslUpcoming from '../Components/Carousel/CarouselUpcoming';
import carouselData from '../Components/Json/ServiceCarouselData.json';
import carouselUpData from '../Components/Json/UpcomingEvents.json';
import jobData from '../Components/Json/JobsData.json';
import CarouselJob from '../Components/Carousel/JobCarousel';
import volunteerData from '../Components/Json/VolunteerData.json';
import CarouselVolunteer from '../Components/Carousel/VolunteerCarousel';
import CommunityCard from '../Components/Cards/CommunityCard';
import CommunityData from '../Components/Json/CommunityData.json';
import investerData from '../Components/Json/InvesterData.json';
import CarouselInvester from '../Components/Carousel/InvesterCarousel';
import fundData from '../Components/Json/FundingData.json';
import CarouselFund from '../Components/Carousel/FundCarousel';
import CarouselMentor from '../Components/Carousel/MentorCarousel';
import mentorData from '../Components/Json/MentorData.json';
import CarouselBlog from '../Components/Carousel/BlogCarousel';
import blogData from '../Components/Json/BlogData.json';
import CarouselCollaborate from '../Components/Carousel/CollaborateCarousel';
import collaborateData from '../Components/Json/Collaborate.json';
import Carousellaunchpad from '../Components/Carousel/LaunchpadCarousel';
import launchpadData from '../Components/Json/LaunchpadData.json';
import CarouselProject from '../Components/Carousel/ProjectCarousel';
import projectData from '../Components/Json/ProjectData.json';
import Footer from '../Components/Footer';

const imageMap = {
  image1: require('../assets/Upcomingevents.png'),
  image2: require('../assets/Jobsandinternships.png'),
  image3: require('../assets/Eventsandcompetitions.png'),
  image4: require('../assets/Volunteer.png'),
  image5: require('../assets/Featuredjobs.png'),
  image6: require('../assets/Upcomingeandcompetitions.png'),
  image7: require('../assets/Fundingschemes.png'),
  image8: require('../assets/Mentor.png'),
  image9: require('../assets/Blog.png'),
  image10: require('../assets/Impact.png'),
  image11: require('../assets/Successstories.png')
};
const imageUpcoming = {
  image1: require('../assets/Events1.png'),
  image2: require('../assets/Events2.png'),
  image3: require('../assets/Events1.png'),
  image4: require('../assets/Events2.png')
};

const imageJob = {
  image1: require('../assets/Job1.png'),
  image2: require('../assets/Job2.png'),
  image3: require('../assets/Job1.png'),
  image4: require('../assets/Job2.png')
};

const imageVolunteer = {
  image1: require('../assets/Volunteer1.png'),
  image2: require('../assets/Volunteer2.png'),
  image3: require('../assets/Volunteer1.png'),
  image4: require('../assets/Volunteer2.png')
};

const imageCommunity = {
  image1: require('../assets/Community1.png'),
  image2: require('../assets/Community1.png')
};

const imageInvester = {
  image1: require('../assets/Invester1.png'),
  image2: require('../assets/Invester2.png'),
  image3: require('../assets/Invester1.png'),
  image4: require('../assets/Invester2.png')
};
const imageFund = {
  image1: require('../assets/Fund1.png'),
  image2: require('../assets/Fund2.png'),
  image3: require('../assets/Fund3.png'),
  image4: require('../assets/Fund1.png')
};

const Home = () => {
  const [slides, setSlides] = useState([]);
  const [upslides, setUpSlides] = useState([]);
  const [jobslides, setJobSlides] = useState([]);
  const [volunteerlides, setVolunteerSlides] = useState([]);
  const [communityslides, setCommunitySlides] = useState([]);
  const [investerslides, setInvesterSlides] = useState([]);
  const [fundslides, setFundSlides] = useState([]);
  const [mentorslides, setMentorSlides] = useState([]);
  const [blogslides, setBlogSlides] = useState([]);
  const [collaborateslides, setCollaborateSlides] = useState([]);
  const [launchpadslides, setLaunchpadSlides] = useState([]);
  const [projectslides, setProjectSlides] = useState([]);

  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    phone: '',
    emailid: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.from_name) newErrors.from_name = 'Name is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.emailid) newErrors.emailid = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };







  useEffect(() => {
    const mappedSlides = carouselData.map((slide) => ({
      ...slide,
      image: imageMap[slide.imageKey]
    }));
    setSlides(mappedSlides);
  }, []);

  useEffect(() => {
    const mappedUpSlides = carouselUpData.map((slide) => ({
      ...slide,
      image: imageUpcoming[slide.imageKey]
    }));
    setUpSlides(mappedUpSlides);
  }, []);

  useEffect(() => {
    const mappedJobSlides = jobData.map((slide) => ({
      ...slide,
      image: imageJob[slide.imageKey]
    }));
    setJobSlides(mappedJobSlides);
  }, []);
  useEffect(() => {
    const mappedVolunteerSlides = volunteerData.map((slide) => ({
      ...slide,
      image: imageVolunteer[slide.imageKey]
    }));
    setVolunteerSlides(mappedVolunteerSlides);
  }, []);
  useEffect(() => {
    const mappedCommunitySlides = CommunityData.map((slide) => ({
      ...slide,
      image: imageCommunity[slide.imageKey]
    }));
    setCommunitySlides(mappedCommunitySlides);
  }, []);
  useEffect(() => {
    const mappedInvesterSlides = investerData.map((slide) => ({
      ...slide,
      image: imageInvester[slide.imageKey]
    }));
    setInvesterSlides(mappedInvesterSlides);
  }, []);
  useEffect(() => {
    const mappedFundSlides = fundData.map((slide) => ({
      ...slide,
      image: imageFund[slide.imageKey]
    }));
    setFundSlides(mappedFundSlides);
  }, []);
  useEffect(() => {
    const mappedMentorSlides = mentorData.map((slide) => ({
      ...slide,
      image: imageFund[slide.imageKey]
    }));
    setMentorSlides(mappedMentorSlides);
  }, []);
  useEffect(() => {
    const mappedBlogSlides = blogData.map((slide) => ({
      ...slide,
      image: imageFund[slide.imageKey]
    }));
    setBlogSlides(mappedBlogSlides);
  }, []);
  useEffect(() => {
    const mappedCollaborateSlides = collaborateData.map((slide) => ({
      ...slide,
      image: imageFund[slide.imageKey]
    }));
    setCollaborateSlides(mappedCollaborateSlides);
  }, []);
  useEffect(() => {
    const mappedLaunchpadSlides = launchpadData.map((slide) => ({
      ...slide,
      image: imageFund[slide.imageKey]
    }));
    setLaunchpadSlides(mappedLaunchpadSlides);
  }, []);
  useEffect(() => {
    const mappedProjectSlides = projectData.map((slide) => ({
      ...slide,
      image: imageFund[slide.imageKey]
    }));
    setProjectSlides(mappedProjectSlides);
  }, []);


  return (
    <div className='bg-[#EBF5FE]'>
        <div className=''>
            <CarouselHome />
        </div>
        <div className='md:mx-5 md:mt-20 bg-white py-10 px-3 rounded-3xl shadow-slate-600 shadow-xl'>
        <Carousel
                slides={slides}
                styles="object-cover w-full h-full"
            />
        </div>
        <div className='md:mx-5 md:mt-20 bg-white pt-2 pb-8 px-3 rounded-3xl shadow-slate-600 shadow-xl'>
          <div className='flex justify-between items-center'>
            <div className='text-[#28316B] text-4xl font-bold'>
              Upcoming Events
            </div>
            <div className='hover:cursor-pointer hover:scale-105 hover:transition hover:duration-400 font-semibold'>
              View More
            </div>
          </div>
          <div className='my-5 ml-5'>
            <input className='border-2 border-black rounded-xl px-2 p-1 h-8 text-sm' type="search" placeholder='Search' name="" id="" />
          </div>
          <div>
            <CaroueslUpcoming slides={upslides}
                styles="object-cover w-full h-full"
            />
          </div>
        </div>


        <div className='py-10'>
          <div className='text-[#CE4D2E] px-5 text-5xl font-bold'>
            Key Features
          </div>

          <div className='md:mx-5 md:mt-10 bg-white pt-0.5 pb-8 px-3 rounded-3xl shadow-slate-600 shadow-xl'>
            <div className='flex justify-between items-center my-5'>
              <div className='text-[#28316B] text-4xl font-bold'>
                Jobs and Internships
              </div>
              <div className='hover:cursor-pointer hover:scale-105 hover:transition hover:duration-400 font-semibold'>
                View More
              </div>
            </div>
            <div>
              <CarouselJob slides={jobslides}
                  styles="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className='py-10'>
          <div className='md:mx-5 bg-white pt-0.5 pb-8 px-3 rounded-3xl shadow-slate-600 shadow-xl'>
            <div className='flex justify-between items-center my-5'>
              <div className='text-[#28316B] text-4xl font-bold'>
                Events and Competitions
              </div>
              <div className='hover:cursor-pointer hover:scale-105 hover:transition hover:duration-400 font-semibold'>
                View More
              </div>
            </div>
            <div>
              <CaroueslUpcoming slides={upslides}
                  styles="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className='py-10'>
          <div className='md:mx-5 bg-white pt-0.5 pb-8 px-3 rounded-3xl shadow-slate-600 shadow-xl'>
            <div className='flex justify-between items-center my-5'>
              <div className='text-[#28316B] text-4xl font-bold'>
                Volunteer and Sponsorship Opportunities
              </div>
              <div className='hover:cursor-pointer hover:scale-105 hover:transition hover:duration-400 font-semibold'>
                View More
              </div>
            </div>
            <div>
              <CarouselVolunteer slides={volunteerlides}
                  styles="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>


        <div className='py-10'>
          <div className='md:mx-5 bg-white pt-0.5 pb-8 px-3 rounded-3xl shadow-slate-600 shadow-xl'>
            <div className='flex justify-between items-center my-5'>
              <div className='text-[#28316B] text-4xl font-bold'>
                Community Pages
              </div>
              <div className='hover:cursor-pointer hover:scale-105 hover:transition hover:duration-400 font-semibold'>
                View More
              </div>
            </div>
            <div className="flex justify-center">
            {communityslides.map((data, index) => (
              <CommunityCard
                key={index}
                image={data.image}
                title={data.title}
                description={data.description}
                register={data.register}
              />
            ))}
          </div>
          </div>
        </div>

        <div className='py-10'>
          <div className='md:mx-5 bg-white pt-0.5 pb-8 px-3 rounded-3xl shadow-slate-600 shadow-xl'>
            <div className='flex justify-between items-center my-5'>
              <div className='text-[#28316B] text-4xl font-bold'>
                Investor and Startup Connect
              </div>
              <div className='hover:cursor-pointer hover:scale-105 hover:transition hover:duration-400 font-semibold'>
                View More
              </div>
            </div>
            <div>
              <CarouselInvester slides={investerslides}
                  styles="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>



        <div className='py-10'>
          <div className='text-[#CE4D2E] px-5 text-5xl font-bold'>
            Latest Opportunities
          </div>

          <div className='md:mx-5 md:mt-10 bg-white pt-0.5 pb-8 px-3 rounded-3xl shadow-slate-600 shadow-xl'>
            <div className='flex justify-between items-center my-5'>
              <div className='text-[#28316B] text-4xl font-bold'>
                Featured Jobs and Internships
              </div>
              <div className='hover:cursor-pointer hover:scale-105 hover:transition hover:duration-400 font-semibold'>
                View More
              </div>
            </div>
            <div>
              <CarouselJob slides={jobslides}
                  styles="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className='py-10'>
          <div className='md:mx-5 bg-white pt-0.5 pb-8 px-3 rounded-3xl shadow-slate-600 shadow-xl'>
            <div className='flex justify-between items-center my-5'>
              <div className='text-[#28316B] text-4xl font-bold'>
                Upcoming Events and Competitions
              </div>
              <div className='hover:cursor-pointer hover:scale-105 hover:transition hover:duration-400 font-semibold'>
                View More
              </div>
            </div>
            <div>
              <CaroueslUpcoming slides={upslides}
                  styles="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>


        <div className='py-10'>
          <div className='text-[#CE4D2E] px-5 text-5xl font-bold'>
            Funding Schemes and Opportunities Showcase
          </div>

          <div className='md:mx-5 md:mt-10 bg-white pt-0.5 pb-8 px-3 rounded-3xl shadow-slate-600 shadow-xl'>
            <div className='flex justify-between items-center my-5'>
              <div className='text-[#28316B] text-4xl font-bold'>
                Funding Schemes and Opportunities
              </div>
              <div className='hover:cursor-pointer hover:scale-105 hover:transition hover:duration-400 font-semibold'>
                View More
              </div>
            </div>
            <div>
              <CarouselFund slides={fundslides}
                  styles="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className='py-10'>
          <div className='md:mx-5 bg-white pt-0.5 pb-8 px-3 rounded-3xl shadow-slate-600 shadow-xl'>
              <div className='flex justify-between items-center my-5'>
                <div className='text-[#28316B] text-4xl font-bold'>
                  Mentor and Incubation Service
                </div>
                <div className='hover:cursor-pointer hover:scale-105 hover:transition hover:duration-400 font-semibold'>
                  View More
                </div>
              </div>
              <div>
                <CarouselMentor slides={mentorslides}
                    styles="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className='py-10'>
          <div className='md:mx-5 bg-white pt-0.5 pb-8 px-3 rounded-3xl shadow-slate-600 shadow-xl'>
              <div className='flex justify-between items-center my-5'>
                <div className='text-[#28316B] text-4xl font-bold'>
                  Startup Blog
                </div>
                <div className='hover:cursor-pointer hover:scale-105 hover:transition hover:duration-400 font-semibold'>
                  View More
                </div>
              </div>
              <div>
                <CarouselBlog slides={blogslides}
                    styles="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          
        <div className='py-10'>
          <div className='text-[#CE4D2E] px-5 text-5xl font-bold'>
            Collaborate with Us for Free Domain Training Program for Schools and Colleges
          </div>

          <div className='md:mx-5 md:mt-10 bg-white pt-0.5 pb-8 px-3 rounded-3xl shadow-slate-600 shadow-xl'>
            <div className='flex justify-between items-center my-5'>
              <div className='text-[#28316B] text-4xl font-bold'>
                Collaborate with Us
              </div>
              <div className='hover:cursor-pointer hover:scale-105 hover:transition hover:duration-400 font-semibold'>
                View More
              </div>
            </div>
            <div>
              <CarouselCollaborate slides={collaborateslides}
                  styles="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        
        <div className='py-10'>
          <div className='text-[#CE4D2E] px-5 text-5xl font-bold'>
            Launchpad
          </div>

          <div className='md:mx-5 md:mt-10 bg-white pt-0.5 pb-8 px-3 rounded-3xl shadow-slate-600 shadow-xl'>
            <div className='flex justify-between items-center my-5'>
              <div className='text-[#28316B] text-4xl font-bold'>
                Launchpad
              </div>
              <div className='hover:cursor-pointer hover:scale-105 hover:transition hover:duration-400 font-semibold'>
                View More
              </div>
            </div>
            <div>
              <Carousellaunchpad slides={launchpadslides}
                  styles="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className='py-10'>
          <div className='text-[#CE4D2E] px-5 text-5xl font-bold'>
            Project Showcase
          </div>

          <div className='md:mx-5 md:mt-10 bg-white pt-0.5 pb-8 px-3 rounded-3xl shadow-slate-600 shadow-xl'>
            <div className='flex justify-between items-center my-5'>
              <div className='text-[#28316B] text-4xl font-bold'>
                Project Showcase
              </div>
              <div className='hover:cursor-pointer hover:scale-105 hover:transition hover:duration-400 font-semibold'>
                View More
              </div>
            </div>
            <div>
              <CarouselProject slides={projectslides}
                  styles="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>


        <div className='py-10'>
          <div className='text-[#CE4D2E] px-5 text-5xl font-bold text-center'>
            Contact Us
          </div>

      <div className='grid grid-cols-2 gap-2 mt-8'>
          <div>
            <h1 className='text-[#28316B] font-bold py-4 text-3xl text-center md:text-4xl'>Get in Touch</h1>
            <div className='mx-20 mt-10'>
              <div className='text-xl font-semibold my-5'>
                <span className='font-bold text-2xl'>Email: </span>contact@ourplatform.com
              </div>
              <div className='text-xl font-semibold my-5'>
                <span className='font-bold text-2xl'>Phone: </span>+1 234 567 890
              </div>
              <div className='text-xl font-semibold my-5'>
                <span className='font-bold text-2xl'>Address: </span>1234 Street Name,<br />
                City, Country
              </div>
            </div>
          </div>

          

          <div>
              <form ref={form} className='mx-0 md:mx-5 flex flex-col justify-center items-center'>
                <h1 className='text-[#28316B] font-bold py-4 text-3xl text-center md:text-4xl'>Email us</h1>
                <input
                  name='from_name'
                  placeholder='Name'
                  type='text'
                  className={`px-3 w-full mx-4 py-3 rounded-lg border-2 ${errors.from_name ? 'border-red-500' : 'hover:border-[#28316B]'} text-[#5C5C5C] bg-[#D7D7D7]`}
                  value={formData.from_name}
                  onChange={handleInputChange}
                  required
                />
                {errors.from_name && <p className="text-red-500 mx-4">{errors.from_name}</p>}
                <br />
                <input
                  name='phone'
                  placeholder='Phone'
                  type='text'
                  className={`px-3 w-full mx-4 py-3 rounded-lg border-2 ${errors.phone ? 'border-red-500' : 'hover:border-[#28316B]'} text-[#5C5C5C] bg-[#D7D7D7]`}
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                {errors.phone && <p className="text-red-500 mx-4">{errors.phone}</p>}
                <br />
                <input
                  name='emailid'
                  placeholder='Email'
                  type='email'
                  className={`px-3 w-full mx-4 py-3 rounded-lg border-2 ${errors.emailid ? 'border-red-500' : 'hover:border-[#28316B]'} text-[#5C5C5C] bg-[#D7D7D7]`}
                  value={formData.emailid}
                  onChange={handleInputChange}
                  required
                />
                {errors.emailid && <p className="text-red-500 mx-4">{errors.emailid}</p>}
                <br />
                <textarea
                  name='message'
                  placeholder='Message'
                  className={`px-3 py-3 w-full mx-4 rounded-lg border-2 ${errors.message ? 'border-red-500' : 'hover:border-[#28316B]'} text-[#5C5C5C] bg-[#D7D7D7]`}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                {errors.message && <p className="text-red-500 mx-4">{errors.message}</p>}
                <br />
                <input type='hidden' name='to_name' value='RajaDecors' />
                <button type='submit' className='py-3 w-full mx-4 rounded-lg border-2 bg-[#28316B] text-white hover:border-[#28316B] font-semibold'>Send Message</button>
              </form>
            </div>
        </div>
      </div>

      <Footer />
      

    </div>
  )
}

export default Home;