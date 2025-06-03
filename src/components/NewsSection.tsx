// import { useState, useEffect } from 'react';
// import { ExternalLink, Instagram, Calendar, ArrowRight } from 'lucide-react';
// import { Card } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { useToast } from '@/hooks/use-toast';

// interface NewsItem {
//   id: string;
//   image: string;
//   caption: string;
//   permalink: string;
//   timestamp: string;
// }

// const NewsSection = () => {
//   const [loading, setLoading] = useState(true);
//   const { toast } = useToast();

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://static.elfsight.com/platform/platform.js';
//     script.setAttribute('data-use-service-core', '');
//     script.defer = true;
//     script.onload = () => {
//       console.log('Elfsight script loaded');
//       setTimeout(() => setLoading(false), 1000);
//     };
//     script.onerror = () => {
//       console.error('Failed to load Elfsight script');
//       toast({
//         title: "Couldn't load Instagram feed",
//         description: "Please try again later",
//         variant: "destructive",
//       });
//       setLoading(false);
//     };
    
//     document.body.appendChild(script);
    
//     return () => {
//       if (document.body.contains(script)) {
//         document.body.removeChild(script);
//       }
//     };
//   }, [toast]);

//   return (
//     <section id="news" className="section-padding bg-gray-50 dark:bg-gray-900">
//       <div className="container-custom">
//         <div className="flex flex-col items-center text-center mb-12">
//           <h1 className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-clinic-100 dark:bg-clinic-900/30 text-clinic-800 dark:text-clinic-200 text-sm font-medium mb-4'>
//             <span className="inline-block w-2 h-2 rounded-full bg-clinic-500"></span>
//             Latest News
//           </h1>
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
//           <div className="elfsight-app-[elfsight-app-3bb5740f-44e0-48bf-9932-586f5338f8f2]" data-elfsight-app-lazy></div>
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
//       </div>
//     </section>
//   );
// };

// export default NewsSection;
