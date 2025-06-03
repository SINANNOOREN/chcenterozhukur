// import { useState, useEffect } from 'react';
// import { ExternalLink, Instagram, Calendar, ArrowRight } from 'lucide-react';
// import { Card } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { useToast } from '@/hooks/use-toast';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// interface NewsItem {
//   id: string;
//   image: string;
//   caption: string;
//   permalink: string;
//   timestamp: string;
// }

// const NewsSection = () => {
//   const [news, setNews] = useState<NewsItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const { toast } = useToast();

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         }
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         }
//       }
//     ]
//   };

//   useEffect(() => {
//     const fetchInstagramPosts = async () => {
//       try {
//         // In a real implementation, you would fetch from the Instagram API
//         // For demo purposes, we're using mock data
//         const mockData: NewsItem[] = [
//           {
//             id: '1',
//             image: '/lovabl-uploads/27f13d19-fca9-4989-80a1-1c7b063f8860.png',
//             caption: '    Stay up to date with the latest news and events from CH Centre through our Instagram feed.',
         
//             permalink: 'https://instagram.com/p/example1',
//             timestamp: '2023-10-15T09:00:00Z',
//           },
//           {
//             id: '2',
//             image: '/placeholder.svg',
//             caption: '    Stay up to date with the latest news and events from CH Centre through our Instagram feed.',
         
     
           
//             permalink: 'https://instagram.com/p/example2',
//             timestamp: '2023-10-10T14:30:00Z',
//           },
//           {
//             id: '3',
//             image: '/placeholder.svg',
//             caption: '    Stay up to date with the latest news and events from CH Centre through our Instagram feed.',
         
//             permalink: 'https://instagram.com/p/example3',
//             timestamp: '2023-10-05T18:15:00Z',
//           },
//         ];

//         // Simulating API delay
//         setTimeout(() => {
//           setNews(mockData);
//           setLoading(false);
//         }, 1000);
//       } catch (error) {
//         console.error('Error fetching Instagram posts:', error);
//         toast({
//           title: "Couldn't load news",
//           description: "Please try again later",
//           variant: "destructive",
//         });
//         setLoading(false);
//       }
//     };

//     fetchInstagramPosts();
//   }, [toast]);

//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//     });
//   };

//   return (
//     <section id="news" className="section-padding bg-gray-50 dark:bg-gray-900">
//       <div className="container-custom">
//         <div className="flex flex-col items-center text-center mb-12">
//              <h1 className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-   text-sm font-medium mb-4 '>
//                       <span className="inline-block w-2 h-2 rounded-full bg-clinic-500"></span>
//                       Our Specialists
//                     </h1>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-clinic-800 dark:text-white">
//             Latest Updates
//           </h2>
//           <div className="w-20 h-1 bg-clinic-500 mb-6"></div>
//           <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
//             Stay up to date with the latest news and events from CH Centre through our Instagram feed.
//           </p>

//           <a 
//             href="https://instagram.com" 
//             target="_blank" 
//             rel="noopener noreferrer" 
//             className="flex items-center gap-2 text-clinic-600 hover:text-clinic-700 mt-2 font-medium"
//           >
//             <Instagram size={18} />
//             <span>Follow us @chcentre</span>
//           </a>
//         </div>

//         {loading ? (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[1, 2, 3].map((i) => (
//               <Card key={i} className="p-4 h-96 animate-pulse">
//                 <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-md mb-4"></div>
//                 <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
//                 <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
//                 <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
//                 <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
//               </Card>
//             ))}
//           </div>
//         ) : (
//           <div className="news-slider">
//             <Slider {...sliderSettings}>
//               {news.map((item) => (
//                 <div key={item.id} className="px-3">
//                   <Card className="overflow-hidden animate-fade-in hover:shadow-lg transition-shadow">
//                     <div className="relative h-48 overflow-hidden">
//                       <img 
//                         src={item.image} 
//                         alt="Instagram post" 
//                         className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
//                       />
//                     </div>
//                     <div className="p-5">
//                       <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-3">
//                         <Calendar size={16} />
//                         <span>{formatDate(item.timestamp)}</span>
//                       </div>
//                       <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
//                         {item.caption}
//                       </p>
//                       <a 
//                         href={item.permalink} 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center text-clinic-600 hover:text-clinic-700 font-medium"
//                       >
//                         View on Instagram
//                         <ExternalLink size={16} className="ml-1" />
//                       </a>
//                     </div>
//                   </Card>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         )}

//         <div className="flex justify-center mt-10">
//           <Button 
//             variant="outline" 
//             className="group"
//             onClick={() => window.open('https://instagram.com', '_blank')}
//           >
//             See All Updates
//             <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
//           </Button>
//         </div>

//         <style>{`
//           .news-slider .slick-dots {
//             bottom: -40px;
//           }
//           .news-slider .slick-dots li button:before {
//             font-size: 12px;
//             color: #6366f1;
//             opacity: 0.25;
//           }
//           .news-slider .slick-dots li.slick-active button:before {
//             opacity: 1;
//             color: #6366f1;
//           }
//           .news-slider .slick-prev,
//           .news-slider .slick-next {
//             z-index: 1;
//           }
//           .news-slider .slick-prev {
//             left: -25px;
//           }
//           .news-slider .slick-next {
//             right: -25px;
//           }
//         `}</style>
//       </div>
//     </section>
//   );
// };

// export default NewsSection;
