// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { ArrowLeft, Home, Search, TrendingUp } from "lucide-react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const NotFound = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12,
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 80,
//       },
//     },
//     hover: {
//       y: -10,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 10,
//       },
//     },
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
//       {/* Navigation */}
//       <motion.nav
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         className="bg-white/80 backdrop-blur-md border-b border-blue-100"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center">
//               <Link to="/" className="flex-shrink-0">
//                 <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
//                   FinTech Pro
//                 </h1>
//               </Link>
//             </div>
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-8">
//                 <Link
//                   to="/"
//                   className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
//                 >
//                   Home
//                 </Link>
//                 <Link
//                   to="/careers"
//                   className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
//                 >
//                   Careers
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.nav>

//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
//         <motion.div
//           className="text-center mb-12"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {/* Large 404 Display */}
//           <motion.div className="mb-8">
//             <motion.h1
//               variants={itemVariants}
//               initial={{ scale: 0.5, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 15,
//                 delay: 0.2,
//               }}
//               className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4"
//             >
//               404
//             </motion.h1>
//             <motion.div
//               variants={itemVariants}
//               className="w-32 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"
//             ></motion.div>
//           </motion.div>

//           <motion.h2
//             variants={itemVariants}
//             className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
//           >
//             Oops! Page Not Found
//           </motion.h2>
//           <motion.p
//             variants={itemVariants}
//             className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
//           >
//             It looks like the page you're looking for doesn't exist or has been
//             moved. Don't worry, even the best financial algorithms sometimes
//             miscalculate!
//           </motion.p>

//           {/* Action Buttons */}
//           <motion.div
//             variants={itemVariants}
//             className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
//           >
//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Link to="/">
//                 <Button
//                   size="lg"
//                   className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
//                 >
//                   <Home className="mr-2 h-4 w-4" />
//                   Back to Home
//                 </Button>
//               </Link>
//             </motion.div>
//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Link to="/careers">
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="border-blue-200 hover:bg-blue-50"
//                 >
//                   <ArrowLeft className="mr-2 h-4 w-4" />
//                   Go Back
//                 </Button>
//               </Link>
//             </motion.div>
//           </motion.div>
//         </motion.div>

//         {/* Helpful Navigation Cards */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-3 gap-6"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.div variants={cardVariants} whileHover="hover">
//             <Card className="border-blue-100 hover:shadow-lg transition-all duration-300">
//               <CardHeader className="text-center">
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
//                 >
//                   <Home className="h-8 w-8 text-blue-600 mx-auto mb-2" />
//                 </motion.div>
//                 <CardTitle className="text-lg">Homepage</CardTitle>
//               </CardHeader>
//               <CardContent className="text-center">
//                 <CardDescription className="mb-4">
//                   Discover our innovative fintech solutions and get started with
//                   your financial journey.
//                 </CardDescription>
//                 <Link to="/">
//                   <motion.div
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Button variant="outline" size="sm" className="w-full">
//                       Visit Homepage
//                     </Button>
//                   </motion.div>
//                 </Link>
//               </CardContent>
//             </Card>
//           </motion.div>

//           <motion.div variants={cardVariants} whileHover="hover">
//             <Card className="border-green-100 hover:shadow-lg transition-all duration-300">
//               <CardHeader className="text-center">
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
//                 >
//                   <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
//                 </motion.div>
//                 <CardTitle className="text-lg">Careers</CardTitle>
//               </CardHeader>
//               <CardContent className="text-center">
//                 <CardDescription className="mb-4">
//                   Join our team of financial innovators and help shape the
//                   future of fintech.
//                 </CardDescription>
//                 <Link to="/careers">
//                   <motion.div
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Button variant="outline" size="sm" className="w-full">
//                       View Careers
//                     </Button>
//                   </motion.div>
//                 </Link>
//               </CardContent>
//             </Card>
//           </motion.div>

//           <motion.div variants={cardVariants} whileHover="hover">
//             <Card className="border-purple-100 hover:shadow-lg transition-all duration-300">
//               <CardHeader className="text-center">
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ delay: 1.0, type: "spring", stiffness: 200 }}
//                 >
//                   <Search className="h-8 w-8 text-purple-600 mx-auto mb-2" />
//                 </motion.div>
//                 <CardTitle className="text-lg">Search</CardTitle>
//               </CardHeader>
//               <CardContent className="text-center">
//                 <CardDescription className="mb-4">
//                   Can't find what you're looking for? Try searching our
//                   comprehensive resources.
//                 </CardDescription>
//                 <Button variant="outline" size="sm" className="w-full" disabled>
//                   Coming Soon
//                 </Button>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </motion.div>

//         {/* Fun Fintech Message */}
//         <motion.div
//           className="mt-12 text-center"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.2, duration: 0.8 }}
//         >
//           <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-lg p-6">
//             <p className="text-gray-700 italic">
//               "In fintech, every error is just a learning opportunity in
//               disguise. Let's get you back on track to financial success!"
//             </p>
//             <p className="text-sm text-gray-500 mt-2">- The FinTech Pro Team</p>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default NotFound;
