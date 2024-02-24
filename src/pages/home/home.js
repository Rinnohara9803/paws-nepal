import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "../../styles/find_doctors.css";

import { faMinus } from "@fortawesome/free-solid-svg-icons";
import ImageSlider from "./image_slider";
import { fetchDoctorsList } from "../../action-creators/doctor-list-action";
import { doctorsListSliceActions } from "../../slices/doctors_slice";
import MedicalServices from "../Mobile/medicalservices";
library.add(faFacebookF);

const MainPage = () => {
  const navigate = useNavigate();

  const scrollRef = useRef(0);

  const dispatch = useDispatch();

  const doctorsListState = useSelector((state) => {
    return state.doctorslist;
  });

  const doctorsList = doctorsListState.doctorsList;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "heading-text-1-active",
              "heading-text-2-active",
              "header-image-1-active",
              "header-image-2-active",
              "header-image-3-active",
              "header-data-active",
              "block1-active",
              "block2-active",
              "block3-active"
            );
          } else {
          }
        });
      },
      { threshold: 0.5, root: null }
    );
    const hiddenElements = document.querySelectorAll(
      ".heading-text-1, .heading-text-2, .header-image-1, .header-image-2, .header-image-3, .header-data, .block1, .block2, .block3"
    );
    hiddenElements.forEach((el) => observer.observe(el));

    const fetchAllDoctors = async () => {
      await fetchDoctorsList("all")
        .then((data) => {
          if (data === null) {
            dispatch(
              doctorsListSliceActions.replaceDoctorsList({
                list: [],
              })
            );
          } else {
            dispatch(
              doctorsListSliceActions.replaceDoctorsList({
                list: data,
              })
            );
          }
          const hiddenElements = document.querySelectorAll(
            ".header-image-1, .heading-text-2"
          );
          hiddenElements.forEach((el) => observer.observe(el));
        })
        .catch((e) => {});
    };
    fetchAllDoctors();
    window.scrollTo(0, scrollRef.current);

    return () => {
      observer.disconnect();
    };
  }, [dispatch]);

  return (
    <main className="App my-0 mr-auto ml-auto mt-2">
      <section className="pb-24 flex lin-grad pt-16  ">
        <div className="w-4/6 flex my-0 mx-auto">
          <div class="left_container lg:w-2/5 lg:pt-8 sm:w-full sm:pt-20">
            <div class="lft_con_first">
              <h1 className="heading-text-1 font-bold text-left lg:text-5xl lg:leading-snug sm:text-4xl sm:leading-snug sm:pb-4">
                Discover Paw's Nepal: Your Pet's Paradise!
              </h1>
              <p className="heading-text-2 text-left">
                Embark on a journey towards ensuring your furry friend lives a
                healthy and vibrant life. Explore our carefully curated
                selection of pets, accessories, and essential supplies to meet
                all their needs.
              </p>
              <div className="text-left">
                <button
                  onClick={() => {
                    navigate("/find-doctors");
                  }}
                  className="py-3 px-6 sm:p-3 sm:text-sm mt-6 font-semibold bg-red-600 rounded-3xl text-white hover:scale-105 transition-all duration-300"
                >
                  Request an Appointment
                </button>
              </div>
            </div>
            <div className="header-data flex flex-row items-start  lg:flex lg:flex-row mt-10  sm:flex-col sm:items-center">
              <div className="lg:mr-8 sm:mb-4 cursor-pointer transition-all hover:scale-105 ">
                <p className="text-5xl font-semibold">10+</p>
                <p className="text-xs font-normal mt-2">Years of Service </p>
              </div>
              <div className="lg:mr-8 sm:mb-4 cursor-pointer transition-all hover:scale-105">
                <p className="text-5xl font-semibold">15+</p>
                <p className="text-xs font-normal mt-2">Primary Location</p>
              </div>
              <div className="lg:mr-8 sm:mb-4 cursor-pointer transition-all hover:scale-105">
                <p className="text-5xl font-semibold">100%</p>
                <p className="text-xs font-normal mt-2">User Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="lg:flex hidden ">
            <div className=" header-image-1  mt-20 mr-8 ml-12">
              <img
                src={
                  "https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg"
                }
                alt="alt"
                style={{ height: "70%", width: "45rem" }}
                className="object-cover rounded-xl"
              />
            </div>
            <div className="mt-28">
              <div className="mb-8  ">
                <img
                  src={
                    "https://www.shutterstock.com/image-photo/border-collie-dog-portrait-hiding-600nw-1933485896.jpg"
                  }
                  alt="alt"
                  style={{ height: "30%", width: "15rem" }}
                  className="header-image-2 object-cover rounded-xl "
                />
              </div>
              <div className="header-image-3">
                <img
                  src={
                    "https://www.shutterstock.com/image-photo/labrador-retriever-dog-panting-ginger-600nw-2198998317.jpg"
                  }
                  alt="alt"
                  className="header-image-3 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {doctorsList.length !== 0 && (
        <div>
          <div className="w-5/12  mr-auto ml-auto my-7">
            <h3 className="heading-text-2 text-4xl font-semibold">
              Our Best doctors
            </h3>
            <p className="heading-text-2 mt-3 font-normal">
              World class veterinarians for everyone. Our veterinarians offers
              unmatched, expert healthcare for your loved ones.
            </p>
          </div>
          <div className="header-image-1 w-full">
            <ImageSlider doctors={doctorsList}></ImageSlider>
          </div>
        </div>
      )}

      <div class="fourth_container pb-32">
        <div className="sm:w-4/6 my-0 mx-auto">
          <div className="lg:w-5/12 my-0 mr-auto ml-auto ">
            <h3 className="text-4xl font-semibold mb-3">Our Services</h3>
            <p className="mt-3 font-normal mb-5">
              At Paw's Nepal, we're committed to nurturing a strong bond between
              you and your pet, ensuring many joyful and healthy years together.
              Start your journey with us today
            </p>
          </div>

          <MedicalServices></MedicalServices>
        </div>
      </div>

      <div class="fifth_container" className=" pb-32">
        <div className="w-4/6 flex flex-col-reverse lg:flex-row my-0 mx-auto">
          <div className=" sm:w-full  lg:w-1/2 text-left pt-16">
            <div className="sm:w-full">
              <h1 className="text-3xl font-semibold sm:text-center lg:text-left">
                Get treatment anytime
              </h1>
            </div>
            <div className="mt-8">
              <p className="font-normal flex items-center ">
                <FontAwesomeIcon icon={faMinus} className="mr-2.5" />
                Schedule the appointment directly
              </p>
              <p className="mt-2 flex items-center">
                <FontAwesomeIcon icon={faMinus} className="mr-2.5" />
                Search for your physician here, and contact their office
              </p>
              <p className="mt-3 flex items-start">
                <FontAwesomeIcon icon={faMinus} className="mr-2.5 mt-1.5" />
                View our veterinarians who are accepting new dates, use the
                online scheduling tool to select an appointment time.
              </p>
            </div>
            <div className="mt-10">
              <button className="px-5 py-2 font-semibold bg-red-600 text-white  hover:bg-red-700 transition-all duration-300 rounded-3xl">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex w-full lg:w-1/2">
            <div className="w-full">
              <img
                src={
                  "https://www.usnews.com/dims4/USNEWS/d754e45/2147483647/crop/2000x1334+0+0/resize/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F75%2F77%2F28b9c03949ceb1e855bfa2b78c46%2F200109-veterinarian-stock.jpg"
                }
                style={{ width: "90%", height: "25rem" }}
                alt="alt"
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div class="seventh_container" className="flex pb-32">
        <div className="w-4/6 lg:flex my-0 mx-auto">
          <div className="lg:w-1/3 pt-12 sm:hidden lg:flex ">
            <img
              src={process.env.PUBLIC_URL + "/img/doctor-5.jpg"}
              style={{ width: "100%", height: "26rem" }}
              alt="alt"
              className="object-cover"
            />
          </div>
          <div className="lg:ml-36 mt-14 text-left">
            <div className="mb-6">
              <h1 className="text-3xl font-semibold">
                Most questions by our beloved patients
              </h1>
            </div>
            <div className="w-full sm:text-sm">
              <Questions
                question={"How can I book an appointment with a doctor?"}
                answer={
                  "Simply log in to our app, browse available doctors, and choose a convenient time for your appointment."
                }
              />
              <Questions
                question={
                  "Is my personal information secure when booking through your app?"
                }
                answer={
                  " Absolutely! We prioritize your privacy and use industry-standard security measures to protect your data."
                }
              />
              <Questions
                question={
                  "What if I need to cancel or reschedule my appointment?"
                }
                answer={
                  "No problem! You can easily manage your appointments in the app, and we offer a hassle-free cancellation and rescheduling process."
                }
              />
              <Questions
                question={
                  "Are there any fees for using the doctor booking service?"
                }
                answer={
                  "Our basic booking service is free. Any additional charges, if applicable, will be clearly communicated during the booking process. "
                }
              />
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
};

export default MainPage;
