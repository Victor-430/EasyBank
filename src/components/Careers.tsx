// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import {
//   MapPin,
//   Clock,
//   DollarSign,
//   Users,
//   Briefcase,
//   Heart,
//   Zap,
//   Globe,
//   Coffee,
//   GraduationCap,
//   Shield,
//   TrendingUp,
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const Careers = () => {
//   const jobOpenings = [
//     {
//       title: "Senior Frontend Developer",
//       department: "Engineering",
//       location: "San Francisco, CA",
//       type: "Full-time",
//       salary: "$120k - $160k",
//       description:
//         "Build next-generation financial interfaces using React, TypeScript, and modern web technologies.",
//       requirements: [
//         "5+ years React experience",
//         "TypeScript proficiency",
//         "Financial domain knowledge",
//       ],
//       tags: ["React", "TypeScript", "CSS", "JavaScript"],
//     },
//     {
//       title: "Product Manager - Payments",
//       department: "Product",
//       location: "New York, NY",
//       type: "Full-time",
//       salary: "$140k - $180k",
//       description:
//         "Lead product strategy for our payment processing platform and drive user experience improvements.",
//       requirements: [
//         "3+ years product management",
//         "Payments experience",
//         "Data-driven mindset",
//       ],
//       tags: ["Product Strategy", "Payments", "Analytics", "Leadership"],
//     },
//     {
//       title: "DevOps Engineer",
//       department: "Engineering",
//       location: "Remote",
//       type: "Full-time",
//       salary: "$110k - $140k",
//       description:
//         "Scale our infrastructure to handle millions of transactions while maintaining 99.99% uptime.",
//       requirements: [
//         "AWS expertise",
//         "Kubernetes experience",
//         "CI/CD pipelines",
//       ],
//       tags: ["AWS", "Kubernetes", "Docker", "CI/CD"],
//     },
//     {
//       title: "Data Scientist",
//       department: "Analytics",
//       location: "Austin, TX",
//       type: "Full-time",
//       salary: "$130k - $170k",
//       description:
//         "Develop machine learning models for fraud detection and financial risk assessment.",
//       requirements: [
//         "Python/R proficiency",
//         "ML experience",
//         "Statistics background",
//       ],
//       tags: ["Python", "Machine Learning", "Statistics", "SQL"],
//     },
//   ];

//   const benefits = [
//     {
//       icon: Heart,
//       title: "Health & Wellness",
//       description:
//         "Comprehensive health insurance, dental, vision, and mental health support",
//     },
//     {
//       icon: GraduationCap,
//       title: "Learning & Development",
//       description:
//         "$5,000 annual learning budget and conference attendance support",
//     },
//     {
//       icon: Coffee,
//       title: "Work-Life Balance",
//       description: "Flexible hours, unlimited PTO, and remote-first culture",
//     },
//     {
//       icon: DollarSign,
//       title: "Financial Benefits",
//       description:
//         "Competitive salary, equity options, 401(k) matching, and financial planning",
//     },
//     {
//       icon: Globe,
//       title: "Remote First",
//       description:
//         "Work from anywhere with quarterly team meetups and co-working stipends",
//     },
//     {
//       icon: Users,
//       title: "Inclusive Culture",
//       description:
//         "Diverse team, employee resource groups, and inclusive hiring practices",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
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
//         damping: 12,
//       },
//     },
//     hover: {
//       y: -8,
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
//         className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50"
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
//                   className="text-blue-600 px-3 py-2 text-sm font-medium"
//                 >
//                   Careers
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.nav>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Header Section */}
//         <motion.div
//           className="text-center mb-16"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.h1
//             variants={itemVariants}
//             className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
//           >
//             Join Our
//             <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
//               {" "}
//               Mission
//             </span>
//           </motion.h1>
//           <motion.p
//             variants={itemVariants}
//             className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
//           >
//             We're building the future of finance. Join our team of innovators,
//             dreamers, and problem-solvers who are passionate about making
//             financial services more accessible and secure for everyone.
//           </motion.p>
//           <motion.div
//             variants={itemVariants}
//             className="flex flex-wrap justify-center gap-4 text-sm text-gray-600"
//           >
//             <div className="flex items-center">
//               <Users className="h-4 w-4 mr-2 text-blue-600" />
//               <span>150+ Team Members</span>
//             </div>
//             <div className="flex items-center">
//               <Globe className="h-4 w-4 mr-2 text-green-600" />
//               <span>Remote First</span>
//             </div>
//             <div className="flex items-center">
//               <TrendingUp className="h-4 w-4 mr-2 text-purple-600" />
//               <span>Series B Funded</span>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Company Values */}
//         <div className="mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl font-bold text-center text-gray-900 mb-8"
//           >
//             Our Values
//           </motion.h2>
//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-3 gap-8"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//           >
//             <motion.div variants={cardVariants} whileHover="hover">
//               <Card className="border-blue-100 hover:shadow-lg transition-shadow duration-300">
//                 <CardHeader className="text-center">
//                   <motion.div
//                     initial={{ scale: 0 }}
//                     whileInView={{ scale: 1 }}
//                     transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
//                   >
//                     <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
//                   </motion.div>
//                   <CardTitle>Trust First</CardTitle>
//                 </CardHeader>
//                 <CardContent className="text-center">
//                   <CardDescription>
//                     We build products and relationships based on trust,
//                     transparency, and security.
//                   </CardDescription>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             <motion.div variants={cardVariants} whileHover="hover">
//               <Card className="border-green-100 hover:shadow-lg transition-shadow duration-300">
//                 <CardHeader className="text-center">
//                   <motion.div
//                     initial={{ scale: 0 }}
//                     whileInView={{ scale: 1 }}
//                     transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
//                   >
//                     <Zap className="h-8 w-8 text-green-600 mx-auto mb-2" />
//                   </motion.div>
//                   <CardTitle>Move Fast</CardTitle>
//                 </CardHeader>
//                 <CardContent className="text-center">
//                   <CardDescription>
//                     We iterate quickly, learn from failures, and continuously
//                     improve our solutions.
//                   </CardDescription>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             <motion.div variants={cardVariants} whileHover="hover">
//               <Card className="border-purple-100 hover:shadow-lg transition-shadow duration-300">
//                 <CardHeader className="text-center">
//                   <motion.div
//                     initial={{ scale: 0 }}
//                     whileInView={{ scale: 1 }}
//                     transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
//                   >
//                     <Heart className="h-8 w-8 text-purple-600 mx-auto mb-2" />
//                   </motion.div>
//                   <CardTitle>Human Centered</CardTitle>
//                 </CardHeader>
//                 <CardContent className="text-center">
//                   <CardDescription>
//                     We put people at the center of everything we do, from
//                     product design to team culture.
//                   </CardDescription>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Benefits Section */}
//         <div className="mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl font-bold text-center text-gray-900 mb-8"
//           >
//             Why Join Us?
//           </motion.h2>
//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             {benefits.map((benefit, index) => (
//               <motion.div
//                 key={index}
//                 variants={cardVariants}
//                 whileHover="hover"
//               >
//                 <Card className="border-gray-100 hover:shadow-lg transition-shadow duration-300">
//                   <CardHeader>
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       whileInView={{ scale: 1 }}
//                       transition={{
//                         delay: index * 0.1,
//                         type: "spring",
//                         stiffness: 200,
//                       }}
//                     >
//                       <benefit.icon className="h-6 w-6 text-blue-600 mb-2" />
//                     </motion.div>
//                     <CardTitle className="text-lg">{benefit.title}</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <CardDescription>{benefit.description}</CardDescription>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Open Positions */}
//         <div className="mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl font-bold text-center text-gray-900 mb-8"
//           >
//             Open Positions
//           </motion.h2>
//           <motion.div
//             className="space-y-6"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.1 }}
//           >
//             {jobOpenings.map((job, index) => (
//               <motion.div
//                 key={index}
//                 variants={cardVariants}
//                 whileHover={{ scale: 1.02 }}
//               >
//                 <Card className="border-gray-200 hover:shadow-lg transition-all duration-300">
//                   <CardContent className="p-6">
//                     <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
//                       <div className="flex-1">
//                         <div className="flex flex-wrap items-center gap-3 mb-3">
//                           <h3 className="text-xl font-semibold text-gray-900">
//                             {job.title}
//                           </h3>
//                           <Badge variant="secondary">{job.department}</Badge>
//                         </div>

//                         <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
//                           <div className="flex items-center">
//                             <MapPin className="h-4 w-4 mr-1" />
//                             {job.location}
//                           </div>
//                           <div className="flex items-center">
//                             <Clock className="h-4 w-4 mr-1" />
//                             {job.type}
//                           </div>
//                           <div className="flex items-center">
//                             <DollarSign className="h-4 w-4 mr-1" />
//                             {job.salary}
//                           </div>
//                         </div>

//                         <p className="text-gray-700 mb-3">{job.description}</p>

//                         <div className="mb-3">
//                           <h4 className="font-medium text-gray-900 mb-2">
//                             Key Requirements:
//                           </h4>
//                           <ul className="text-sm text-gray-600 space-y-1">
//                             {job.requirements.map((req, reqIndex) => (
//                               <li key={reqIndex} className="flex items-start">
//                                 <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
//                                 {req}
//                               </li>
//                             ))}
//                           </ul>
//                         </div>

//                         <div className="flex flex-wrap gap-2">
//                           {job.tags.map((tag, tagIndex) => (
//                             <Badge
//                               key={tagIndex}
//                               variant="outline"
//                               className="text-xs"
//                             >
//                               {tag}
//                             </Badge>
//                           ))}
//                         </div>
//                       </div>

//                       <div className="mt-4 lg:mt-0 lg:ml-6">
//                         <Button className="w-full lg:w-auto bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
//                           <Briefcase className="h-4 w-4 mr-2" />
//                           Apply Now
//                         </Button>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* CTA Section */}
//         <motion.div
//           className="text-center"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-0">
//             <CardContent className="p-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                 Don't See the Perfect Role?
//               </h3>
//               <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
//                 We're always looking for talented individuals who share our
//                 passion for innovation. Send us your resume and tell us how
//                 you'd like to contribute to the future of fintech.
//               </p>
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="border-blue-200 hover:bg-blue-50"
//                 >
//                   Send Us Your Resume
//                 </Button>
//               </motion.div>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Careers;
