import { useState, useEffect } from "react";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";

const Testimonial = () => {
    const [testimonialData, setTestimonialData] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch("/api/DataAll.json")
        .then((response) => response.json())
        .then((data) => {
            if (data && data.Testimonial) {
            setTestimonialData(data.Testimonial);
            } else {
            console.error("Testimonial data not found.");
            }
        })
        .catch((error) => {
            console.error("Error fetching Testimonial data:", error);
        });
    }, []);

    const testimonialsToShow = showAll
        ? testimonialData
        : testimonialData.slice(0, 8);

    return (
        <div className="mt-5 pt-8 pb-10 dark:bg-[#0f0f0f]">
            <div className="w-[90%] m-auto">
                <h2 className="font-medium font-inter text-2xl text-center dark:text-gray-100 pb-2">
                Hear From Those <span className="text-indigo-600 font-Vast_shadow font-semibold">Who Trusted Us</span>
                </h2>
                <p className="font-medium font-Dm_font text-base text-center dark:text-gray-100 pb-16">
                Real Stories. Genuine Feedback. Discover how we make a difference.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-auto">
                {testimonialsToShow.map((testimonial, index) => (
                    <div
                    key={index}
                    className="shadow rounded-lg dark:bg-slate-700 hover:shadow-lg hover:transition-all hover:duration-150 cursor-pointer"
                    >
                    <div className="p-3">
                        <div className="flex flex-row gap-4 justify-start items-center pb-4">
                        <img
                            src={testimonial.image}
                            className="w-12 h-12 rounded-full shadow-md"
                            alt="profile"
                        />
                        <div>
                            <h2 className="text-lg font-roboto dark:text-[#e1e1e1]">
                            {testimonial.name}
                            </h2>
                            <h4 className="text-xs font-noto_font text-[#4b42c5]">
                            from <span>{testimonial.review}</span>
                            </h4>
                            <div>⭐⭐⭐⭐⭐</div>
                        </div>
                        </div>
                        <p className="text-xs font-poppins dark:text-[#b3b3b3] text-gray-600 pb-3">
                        {testimonial.description}
                        </p>
                    </div>
                    </div>
                ))}
                </div>

                <div className="flex justify-center mt-6">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="flex items-center justify-center shadow shadow-slate-200 border-[1.3px] border-gray-300 rounded-xl py-2 px-5 font-roboto font-medium text-xs hover:shadow-lg hover:border-[#4d43db] hover:text-sm hover:transition-all hover:transform hover:duration-300"
                >
                    {showAll ? (
                    <>
                        Show Less
                        <FaArrowUpLong className="ml-1 text-[12px] hover:text-sm" />
                    </>
                    ) : (
                    <>
                        Show More
                        <FaArrowDownLong className="ml-1 text-[12px] hover:text-sm" />
                    </>
                    )}
                </button>
                </div>
            </div>
            </div>

    );
    };

export default Testimonial;
