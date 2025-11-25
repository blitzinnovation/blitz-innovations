import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { FaShareAlt, FaHeart, FaTimes, FaArrowRight, FaCalendarAlt, FaUser, FaQuoteRight } from "react-icons/fa";
import Footer from "../components/Footer";


const initialBlogs = [
  {
    title: "Top 10 Ways AI is Transforming Project Management in 2026",
    author: "",
    date: "",
    excerpt:
      "AI automation, predictive analytics, and smart workflows are reshaping how teams plan, track, and deliver projects.",
    tags: ["AI", "Project Management", "Automation"],
    img: "https://i.pinimg.com/736x/93/b2/53/93b253bf663f802262bbce23fdaeb024.jpg",
    fullContent:
      `
      What is Microsoft Project?
      <br/><br/>
      Microsoft Project (MS Project) is a project management software developed by Microsoft to help project managers plan, organize, and oversee their projects effectively. It supports creating project plans, assigning resources, tracking progress, managing budgets, and analyzing workloads. First launched in 1984, it has since grown into a comprehensive tool used by organizations of all sizes.
MS Project offers a variety of features such as Gantt charts for visualizing and scheduling projects, resource management tools for assigning and overseeing tasks, and budget tracking to monitor costs and expenses. It also includes reporting capabilities that allow managers to evaluate project performance and share updates with stakeholders.
Over time, Microsoft has continued to enhance MS Project with upgrades that introduce new functionalities and refine existing features.

      
      <br/><br/>
      1. Microsoft Project Standard
      <br/><br/>
      Microsoft Project Standard is a desktop-based project management solution designed to help with project planning, execution, and monitoring. It works best for individuals or small teams handling projects. Key features include Gantt charts for scheduling, resource management functions like allocation and leveling, as well as cost tracking with budget baselines. Users can also create customized reports to match their requirements. In addition, it integrates smoothly with Microsoft office and other Microsoft applications. 
 
      <br/><br/>
      2. Microsoft Project Professional
      <br/><br/>
     Microsoft Project Professional builds on the Standard edition by offering advanced capabilities tailored for experienced project managers and larger teams. Along with all the features of Standard, it adds collaboration tools like real-time teamwork and integration with Microsoft Project Server and Project Online (covered later). It supports resource management across multiple projects and provides more advanced reporting options, including interactive dashboards. When paired with Project Online, this software can also be accessed from virtually anywhere.
    
      <br/><br/>
      3. Microsoft Project Online
      <br/><br/>
      Microsoft Project Online is a collaborative project and portfolio management solution within the Microsoft 365 suite. It integrates seamlessly with Microsoft Project for the Web and Microsoft Project Professional. One of its standout features is portfolio management, which allows organizations to prioritize and align projects with strategic goals. It also offers customizable dashboards and strong resource management capabilities, enabling teams to allocate resources across multiple projects, optimize utilization, and monitor availability effectively.
    
      <br/><br/>
      4. Microsoft Project Server

      <br/><br/>
      One challenge with MS project management software is the wide range of options, which can make it hard for organizations to select the right tool. Microsoft Project Server is a good example of this. It is an enterprise-level solution that connects with Microsoft Project Professional and Microsoft Project Online.

Designed for large-scale projects and portfolios, it offers strong resource management and enterprise-wide project coordination. Project Server can be deployed on-premises or in hybrid models and integrates well with other Microsoft technologies.
    
      `, },
  {
    title: "Top 10 Analytics and Business Intelligence Trends For 2026",
    author: "",
    date: "",
    excerpt:
      "Data-driven decisions are evolving with trends like augmented analytics, real-time data pipelines, and AI-powered dashboards.",
    tags: ["Analytics", "Business Intelligence", "Data"],
    img: "https://i.pinimg.com/736x/c9/44/70/c9447043f930be1f3bdf1ef261a0a199.jpg",
    fullContent:
      `
      Over the last decade, business intelligence has experienced tremendous growth. With the explosion of data and the widespread adoption of cloud technology, organizations have moved beyond traditional spreadsheets toward dynamic data visualizations and interactive dashboards that drive action. The emergence of self-service analytics has further democratized data, making advanced analysis accessible to a wider range of users beyond just data specialists. 
      <br/><br/>
      The year 2025 marked a significant milestone for the BI industry, and many of the trends that took shape will continue to evolve in 2026. However, the business intelligence sector is undergoing rapid transformation. Many enterprises are investing in business intelligence services to transform large volumes of data into actionable business insights. The future of BI is unfolding now, bringing forward new trends and innovations.
      
      <br/><br/>
      In 2026, BI tools will become more tailored and personalized. Rather than asking whether they need business intelligence, companies of all sizes are now focused on finding the most effective BI solutions to meet their unique requirements.
      <br/><br/>
     According to MarketsandMarkets, the global business intelligence market size is projected to grow from USD 29.3 billion in 2025 to USD 54.9 billion by 2029, at a CAGR of 13.1%, reflecting the accelerating demand for smarter, data-driven decision-making. Are you eager to see what opportunities the new year holds? Keep reading to discover the top 10 business intelligence trends for 2026!
      `,
  },
  {
    title: "Top Benefits of Building an On-Demand App: Types, Features, and Cost",
    author: "",
    date: "",
    excerpt:
      "From food delivery to home services, on-demand apps dominate the digital market—here’s why they are booming.",
    tags: ["On-Demand Apps", "Mobile Apps", "Tech"],
    img: "https://i.pinimg.com/1200x/ec/6b/d1/ec6bd1b31195fca9dce7201a6bf17ddd.jpg",
    fullContent:
      `
      Are you planning to create an on-demand app? 

If your answer is yes, you’re already on the right track to boost customer satisfaction and loyalty. 

Today’s consumers increasingly expect to access the products and services they need anytime and anywhere with just a few taps on their smartphones, and on-demand app development is meeting that expectation. 

However, delivering such convenience and satisfaction requires careful consideration of several key factors. This guide to on-demand app development covers everything you need to know to build a high-quality on-demand application or marketplace solution. 

From essential features and business benefits to cost insights, this article provides all the information you need to get started. 

Let’s dive in!
      <br/><br/>
      What is On-Demand App Development?
      
      <br/><br/>
      On-demand app development refers to the creation of mobile applications or web platforms that enable users to request various services and receive them quickly. Examples include popular apps like Uber, DoorDash, and Airbnb. In these platforms, users simply identify a need, access the app, and get connected to the right service provider. Essentially, on-demand apps act as a bridge between customers and businesses, facilitating instant service delivery and convenience.

Businesses looking to create such solutions often partner with an on demand app development company. These companies specialize in designing and developing apps that streamline service delivery, enhance user experience, and ensure seamless interaction between customers and service providers. 
      <br/><br/>
     Features of On-Demand Service Apps
      <br/><br/>
     Developing a comprehensive on-demand service app involves careful planning to address the needs of all the users who will interact with it. Whether it’s customers requesting services, providers fulfilling those requests, or admins overseeing operations, each group requires specific features to ensure smooth functionality and communication. 

While your business may choose to add or remove certain elements based on your goals, the following features represent the core components that every on-demand service app should include, no matter the industry. 

On-demand service applications are already widely used across multiple industries, including healthcare, education, freelancing, food delivery, logistics, and many more.
      `
  },
  {
    title: "15 Real-World Use Cases and Examples of AI in Fintech Industry",
    author: "",
    date: "",
    excerpt:
      "AI is revolutionizing fraud detection, credit scoring, compliance, and customer service within the fintech space.",
    tags: ["Fintech", "AI", "Finance"],
    img: "https://i.pinimg.com/736x/b7/23/60/b72360e3917de1f3f7a8f8c1de6ccacf.jpg",
    fullContent:
      `
      Can artificial intelligence really foresee fraud before it happens? As fintech continues to transform at breakneck speed, AI is reshaping everything from risk assessment to customer service. The impact of Artificial Intelligence in fintech is no longer theoretical; it’s driving tangible change across industries right now.   

McKinsey estimates that generative AI may unlock $340 billion per year for the banking sector, underscoring its game-changing role in fintech. This article explores 15 powerful, real-world use cases of AI in fintech industry, showing how innovation is driving smarter decisions, faster operations, and stronger financial outcomes. 
      <br/><br/>
      The Transformative Impact of Artificial Intelligence in Fintech  
      
      <br/><br/>
      With the digitization of finance, the volume of data generated through transactions and services has surged. Artificial intelligence has a pivotal role in driving operational efficiency and strengthening business relationships by extracting and presenting actionable insights. Whether assessing risk to refining financial strategies, AI enhances precision and efficiency across the board.      

The fintech landscape is shaped by key verticals such as digital banking, payments, personal finance, mobile wallets, investment platforms, and lending services. Integration of AI in fintech offerings enables intelligent apps and machine learning models to simplify complex data processing, automate workflows, and enhance decision-making. 

Businesses looking to create such solutions often partner with an on demand app development company. These companies specialize in designing and developing apps that streamline service delivery, enhance user experience, and ensure seamless interaction between customers and service providers. 
      `,
  },
  
];


const use3DTilt = () => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (event) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const normalizedX = (event.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(normalizedX);
    y.set(normalizedY);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave };
};


export default function Blogs() {
  const [blogs] = useState(initialBlogs);
  const [openBlog, setOpenBlog] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (openBlog) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openBlog]);

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
      <div className="layout-wrapper min-h-screen relative bg-black">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-900 opacity-20 blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-700 opacity-15 blur-[100px] animate-pulse delay-1000"></div>
        </div>

        <motion.header
          className="relative z-10 pt-20 pb-16 md:pt-32 md:pb-24 text-left  text-white bg-black"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl sm:text-4xl md:ml-20 text-[35px] md:text-[48px] ml-4 md:text-4xl font-bold mb-4 tracking-tight"
            variants={itemVariants}
          >
            THE SCARLET <span className="text-red-500">ACHIVEMENT</span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-white font-light max-w-3xl mx-auto ml-4 md:ml-20"
            variants={itemVariants}
          >
            Insights on Quantum Tech, Next-Gen Security, and AI's Ethical Red
            Lines.
          </motion.p>
        </motion.header>

        <main className="max-w-7xl mx-auto px-6 pb-20 relative z-10">
          <h2 className="text-4xl font-bold text-white mb-12 border-b-2 border-red-700 pb-3 inline-block">
            Latest Dispatches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog) => {
              const { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave } =
                use3DTilt();
              const isSelected = openBlog && openBlog.title === blog.title;

              return (
                <div key={blog.title}>
                  <motion.div
                    ref={ref}
                    className={`blog-card group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-2xl transition-all duration-500 ease-out ${
                      openBlog && !isSelected
                        ? "opacity-20 scale-[0.95] pointer-events-none"
                        : "hover:shadow-red-900/50"
                    }`}
                    onClick={() => setOpenBlog(blog)}
                    style={{
                      rotateX: isSelected ? 0 : rotateX,
                      rotateY: isSelected ? 0 : rotateY,
                      transformStyle: "preserve-3d",
                      backgroundImage: `url(${blog.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    onMouseMove={isSelected ? undefined : handleMouseMove}
                    onMouseLeave={isSelected ? undefined : handleMouseLeave}
                    layoutId={blog.title}
                    transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 to-transparent"></div>

                    <div
                      className="relative p-6 flex flex-col justify-end h-full text-left text-white"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      <div className="flex flex-wrap gap-2 mb-3">
                        {blog.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-semibold px-3 py-1 bg-red-700/80 rounded-full hover:bg-red-600 transition duration-300 shadow-lg"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-3xl font-bold mb-3 drop-shadow-lg group-hover:text-red-300 transition duration-300">
                        {blog.title}
                      </h2>
                      <p className="text-sm opacity-90 mb-4">{blog.excerpt}</p>
                      <div className="flex items-center text-red-300 font-medium">
                        <FaArrowRight className="mr-2 animate-pulse" />
                        <span className="text-sm uppercase tracking-wider">
                          Read More
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </main>

        <AnimatePresence>
          {openBlog && (
            <motion.div
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-start justify-center p-4 sm:p-6 overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-[#1a0000] border border-red-900 rounded-3xl shadow-2xl max-w-5xl w-full relative my-8 md:my-10 overflow-hidden"
                layoutId={openBlog.title}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <button
                  onClick={() => setOpenBlog(null)}
                  className="absolute top-4 right-4 z-20 text-white p-3 bg-red-700/80 hover:bg-red-600 rounded-full text-xl transition shadow-xl"
                  aria-label="Close"
                >
                  <FaTimes />
                </button>

                <div className="relative">
                  <motion.img
                    src={openBlog.img}
                    alt={openBlog.title}
                    className="w-full h-56 sm:h-80 object-cover"
                    layoutId={`image-${openBlog.title}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0000] to-transparent"></div>
                </div>

                <div className="p-6 sm:p-12 text-white">
                  <h2 className="text-3xl sm:text-5xl font-extrabold mb-3 text-red-300">
                    {openBlog.title}
                  </h2>

                  <div className="flex flex-wrap gap-4 text-sm opacity-80 mb-6">
                    <div className="flex items-center">
                      <FaUser className="mr-2 text-red-500" />
                      <span className="font-semibold">{openBlog.author}</span>
                    </div>
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2 text-red-500" />
                      <span>{openBlog.date}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {openBlog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm font-medium px-4 py-1 bg-red-600 rounded-full shadow-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="text-base sm:text-lg leading-relaxed space-y-6">
                    <p className="border-l-4 border-red-500 pl-4 italic text-red-200 flex items-start">
                      <FaQuoteRight className="min-w-6 text-red-700 mr-3 mt-1" />
                      <span>{openBlog.excerpt}</span>
                    </p>
                    <p dangerouslySetInnerHTML={{ __html: openBlog.fullContent }} />

                  </div>

                  <div className="mt-10 flex gap-4">
                    <button className="flex items-center px-6 py-3 bg-red-700 hover:bg-red-600 rounded-lg text-white font-semibold transition duration-300 shadow-lg">
                      <FaHeart className="mr-2" />
                      Like
                    </button>
                    <button className="flex items-center px-6 py-3 bg-red-800/50 hover:bg-red-800 rounded-lg text-white font-semibold transition duration-300 border border-red-700">
                      <FaShareAlt className="mr-2" />
                      Share
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
}
