// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>LearnAcademy - Premium Online Courses</title>
//     <script src="https://cdn.tailwindcss.com"></script>
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
//     <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
//     <style>
//         body {
//             font-family: 'Inter', sans-serif;
//         }
//         .course-card {
//             transition: transform 0.3s ease, box-shadow 0.3s ease;
//         }
//         .course-card:hover {
//             transform: translateY(-5px);
//         }
//     </style>
// </head>
// <body class="bg-gray-50">
//     <!-- Navbar -->
//     <nav class="bg-white shadow-lg sticky top-0 z-50">
//         <div class="container mx-auto px-4">
//             <div class="flex justify-between items-center py-4">
//                 <!-- Logo -->
//                 <div class="flex items-center">
//                     <i class="fas fa-graduation-cap text-blue-600 text-2xl mr-2"></i>
//                     <span class="text-xl font-bold text-gray-800">LearnAcademy</span>
//                 </div>
                
//                 <!-- Navigation Links -->
//                 <div class="hidden md:flex space-x-8">
//                     <a href="#" class="text-blue-600 font-medium">Home</a>
//                     <a href="#" class="text-gray-600 hover:text-blue-600 transition">Courses</a>
//                     <a href="#" class="text-gray-600 hover:text-blue-600 transition">Instructors</a>
//                     <a href="#" class="text-gray-600 hover:text-blue-600 transition">Blog</a>
//                     <a href="#" class="text-gray-600 hover:text-blue-600 transition">Contact</a>
//                 </div>
                
//                 <!-- Auth Buttons -->
//                 <div class="flex items-center space-x-4">
//                     <button class="text-gray-600 hover:text-blue-600 transition hidden md:block">Login</button>
//                     <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Join Now</button>
                    
//                     <!-- Mobile menu button -->
//                     <button class="md:hidden text-gray-600">
//                         <i class="fas fa-bars text-xl"></i>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     </nav>

//     <!-- Header Section -->
//     <header class="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
//         <div class="container mx-auto px-4">
//             <div class="flex flex-col md:flex-row items-center justify-between">
//                 <div class="md:w-1/2 mb-8 md:mb-0">
//                     <h1 class="text-4xl md:text-5xl font-bold mb-4">Advance Your Skills with Premium Online Courses</h1>
//                     <p class="text-lg mb-6 text-blue-100">Join thousands of students who have transformed their careers through our specialized courses in various fields.</p>
//                     <div class="flex space-x-4">
//                         <button class="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition">Explore Courses</button>
//                         <button class="border border-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition">Learn More</button>
//                     </div>
//                 </div>
//                 <div class="md:w-1/2 flex justify-center">
//                     <div class="relative w-full max-w-md">
//                         <div class="absolute -top-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
//                             <i class="fas fa-medal text-white text-xl"></i>
//                         </div>
//                         <div class="bg-white rounded-xl shadow-2xl p-6 text-gray-800">
//                             <h3 class="text-xl font-bold mb-4">Join Our Learning Community</h3>
//                             <p class="mb-4">Get 20% off on your first subscription</p>
//                             <div class="flex items-center space-x-2">
//                                 <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//                                     <i class="fas fa-user-graduate text-blue-600"></i>
//                                 </div>
//                                 <div>
//                                     <p class="font-medium">+50,000 Students</p>
//                                     <p class="text-sm text-gray-600">Joined us this year</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </header>

//     <!-- Featured Categories -->
//     <section class="py-16 bg-white">
//         <div class="container mx-auto px-4">
//             <div class="text-center mb-12">
//                 <h2 class="text-3xl font-bold text-gray-800 mb-4">Popular Categories</h2>
//                 <p class="text-gray-600 max-w-2xl mx-auto">Explore a wide range of specialties and choose what suits your interests and career goals</p>
//             </div>
            
//             <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 <!-- Category 1 -->
//                 <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition course-card">
//                     <div class="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
//                         <i class="fas fa-laptop-code text-white text-2xl"></i>
//                     </div>
//                     <h3 class="text-xl font-bold text-gray-800 mb-2">Software Development</h3>
//                     <p class="text-gray-600 mb-4">Learn the latest programming languages and development techniques</p>
//                     <a href="#" class="text-blue-600 font-medium flex items-center">
//                         Explore Courses
//                         <i class="fas fa-arrow-right ml-2"></i>
//                     </a>
//                 </div>
                
//                 <!-- Category 2 -->
//                 <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:shadow-lg transition course-card">
//                     <div class="w-14 h-14 bg-green-600 rounded-lg flex items-center justify-center mb-4">
//                         <i class="fas fa-chart-line text-white text-2xl"></i>
//                     </div>
//                     <h3 class="text-xl font-bold text-gray-800 mb-2">Digital Marketing</h3>
//                     <p class="text-gray-600 mb-4">Master marketing strategies in the digital age</p>
//                     <a href="#" class="text-green-600 font-medium flex items-center">
//                         Explore Courses
//                         <i class="fas fa-arrow-right ml-2"></i>
//                     </a>
//                 </div>
                
//                 <!-- Category 3 -->
//                 <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-lg transition course-card">
//                     <div class="w-14 h-14 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
//                         <i class="fas fa-palette text-white text-2xl"></i>
//                     </div>
//                     <h3 class="text-xl font-bold text-gray-800 mb-2">Graphic Design</h3>
//                     <p class="text-gray-600 mb-4">Develop your skills in design and visual creativity</p>
//                     <a href="#" class="text-purple-600 font-medium flex items-center">
//                         Explore Courses
//                         <i class="fas fa-arrow-right ml-2"></i>
//                     </a>
//                 </div>
                
//                 <!-- Category 4 -->
//                 <div class="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 hover:shadow-lg transition course-card">
//                     <div class="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-4">
//                         <i class="fas fa-business-time text-white text-2xl"></i>
//                     </div>
//                     <h3 class="text-xl font-bold text-gray-800 mb-2">Business Management</h3>
//                     <p class="text-gray-600 mb-4">Learn leadership skills and project management</p>
//                     <a href="#" class="text-red-600 font-medium flex items-center">
//                         Explore Courses
//                         <i class="fas fa-arrow-right ml-2"></i>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     </section>

//     <!-- Highest Rated Courses -->
//     <section class="py-16 bg-gray-50">
//         <div class="container mx-auto px-4">
//             <div class="flex justify-between items-center mb-8">
//                 <div>
//                     <h2 class="text-3xl font-bold text-gray-800 mb-2">Highest Rated Courses</h2>
//                     <p class="text-gray-600">Courses that received the best ratings from our students</p>
//                 </div>
//                 <a href="#" class="text-blue-600 font-medium flex items-center hover:text-blue-700">
//                     View All
//                     <i class="fas fa-arrow-right ml-2"></i>
//                 </a>
//             </div>
            
//             <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 <!-- Course 1 -->
//                 <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition course-card">
//                     <div class="relative">
//                         <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Web Development Course" class="w-full h-48 object-cover">
//                         <div class="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-md text-sm font-medium">
//                             <i class="fas fa-star mr-1"></i> 4.9
//                         </div>
//                     </div>
//                     <div class="p-6">
//                         <h3 class="text-xl font-bold text-gray-800 mb-2">Advanced Web Application Development</h3>
//                         <p class="text-gray-600 mb-4">Learn to build comprehensive web applications using the latest technologies</p>
//                         <div class="flex justify-between items-center">
//                             <div class="flex items-center">
//                                 <i class="fas fa-clock text-gray-400 mr-1"></i>
//                                 <span class="text-gray-600">32 hours</span>
//                             </div>
//                             <div class="text-blue-600 font-bold">$99.99</div>
//                         </div>
//                     </div>
//                 </div>
                
//                 <!-- Course 2 -->
//                 <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition course-card">
//                     <div class="relative">
//                         <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80" alt="Data Science Course" class="w-full h-48 object-cover">
//                         <div class="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-md text-sm font-medium">
//                             <i class="fas fa-star mr-1"></i> 4.8
//                         </div>
//                     </div>
//                     <div class="p-6">
//                         <h3 class="text-xl font-bold text-gray-800 mb-2">Data Science and Artificial Intelligence</h3>
//                         <p class="text-gray-600 mb-4">Master data analysis and developing AI models</p>
//                         <div class="flex justify-between items-center">
//                             <div class="flex items-center">
//                                 <i class="fas fa-clock text-gray-400 mr-1"></i>
//                                 <span class="text-gray-600">45 hours</span>
//                             </div>
//                             <div class="text-blue-600 font-bold">$129.99</div>
//                         </div>
//                     </div>
//                 </div>
                
//                 <!-- Course 3 -->
//                 <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition course-card">
//                     <div class="relative">
//                         <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="UI/UX Design Course" class="w-full h-48 object-cover">
//                         <div class="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-md text-sm font-medium">
//                             <i class="fas fa-star mr-1"></i> 4.7
//                         </div>
//                     </div>
//                     <div class="p-6">
//                         <h3 class="text-xl font-bold text-gray-800 mb-2">UI/UX Design for Digital Products</h3>
//                         <p class="text-gray-600 mb-4">Create attractive and user-friendly designs for digital products</p>
//                         <div class="flex justify-between items-center">
//                             <div class="flex items-center">
//                                 <i class="fas fa-clock text-gray-400 mr-1"></i>
//                                 <span class="text-gray-600">28 hours</span>
//                             </div>
//                             <div class="text-blue-600 font-bold">$89.99</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>

//     <!-- Latest Courses -->
//     <section class="py-16 bg-white">
//         <div class="container mx-auto px-4">
//             <div class="flex justify-between items-center mb-8">
//                 <div>
//                     <h2 class="text-3xl font-bold text-gray-800 mb-2">Latest Courses</h2>
//                     <p class="text-gray-600">Discover the newest additions to our educational library</p>
//                 </div>
//                 <a href="#" class="text-blue-600 font-medium flex items-center hover:text-blue-700">
//                     View All
//                     <i class="fas fa-arrow-right ml-2"></i>
//                 </a>
//             </div>
            
//             <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 <!-- Course 1 -->
//                 <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition course-card">
//                     <div class="relative">
//                         <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Flutter Mobile Development" class="w-full h-48 object-cover">
//                         <div class="absolute top-4 right-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">New</div>
//                     </div>
//                     <div class="p-6">
//                         <div class="flex justify-between items-center mb-2">
//                             <span class="text-gray-500 text-sm">3 days ago</span>
//                         </div>
//                         <h3 class="text-xl font-bold text-gray-800 mb-2">Mobile App Development with Flutter</h3>
//                         <p class="text-gray-600 mb-4">Build cross-platform mobile applications using Flutter and Dart</p>
//                         <div class="flex items-center justify-between">
//                             <div class="flex items-center">
//                                 <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
//                                     <i class="fas fa-mobile-alt text-blue-600"></i>
//                                 </div>
//                                 <div>
//                                     <p class="font-medium">Dr. Ahmed Mohamed</p>
//                                     <p class="text-sm text-gray-600">Mobile App Developer</p>
//                                 </div>
//                             </div>
//                             <div class="text-blue-600 font-bold">$79.99</div>
//                         </div>
//                     </div>
//                 </div>
                
//                 <!-- Course 2 -->
//                 <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition course-card">
//                     <div class="relative">
//                         <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Cybersecurity Course" class="w-full h-48 object-cover">
//                         <div class="absolute top-4 right-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">New</div>
//                     </div>
//                     <div class="p-6">
//                         <div class="flex justify-between items-center mb-2">
//                             <span class="text-gray-500 text-sm">1 week ago</span>
//                         </div>
//                         <h3 class="text-xl font-bold text-gray-800 mb-2">Cybersecurity and Ethical Hacking</h3>
//                         <p class="text-gray-600 mb-4">Learn the fundamentals of information security and system penetration testing</p>
//                         <div class="flex items-center justify-between">
//                             <div class="flex items-center">
//                                 <div class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
//                                     <i class="fas fa-shield-alt text-red-600"></i>
//                                 </div>
//                                 <div>
//                                     <p class="font-medium">Dr. Sara Abdullah</p>
//                                     <p class="text-sm text-gray-600">Cybersecurity Expert</p>
//                                 </div>
//                             </div>
//                             <div class="text-blue-600 font-bold">$119.99</div>
//                         </div>
//                     </div>
//                 </div>
                
//                 <!-- Course 3 -->
//                 <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition course-card">
//                     <div class="relative">
//                         <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Social Media Marketing" class="w-full h-48 object-cover">
//                         <div class="absolute top-4 right-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">New</div>
//                     </div>
//                     <div class="p-6">
//                         <div class="flex justify-between items-center mb-2">
//                             <span class="text-gray-500 text-sm">2 weeks ago</span>
//                         </div>
//                         <h3 class="text-xl font-bold text-gray-800 mb-2">Social Media Marketing Strategies</h3>
//                         <p class="text-gray-600 mb-4">Advanced strategies for effective marketing on social media platforms</p>
//                         <div class="flex items-center justify-between">
//                             <div class="flex items-center">
//                                 <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
//                                     <i class="fas fa-hashtag text-purple-600"></i>
//                                 </div>
//                                 <div>
//                                     <p class="font-medium">Mr. Khaled Ibrahim</p>
//                                     <p class="text-sm text-gray-600">Digital Marketing Expert</p>
//                                 </div>
//                             </div>
//                             <div class="text-blue-600 font-bold">$89.99</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>

//     <!-- Statistics Section -->
//     <section class="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
//         <div class="container mx-auto px-4">
//             <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
//                 <div>
//                     <div class="text-4xl font-bold mb-2">50,000+</div>
//                     <p class="text-blue-200">Registered Students</p>
//                 </div>
//                 <div>
//                     <div class="text-4xl font-bold mb-2">500+</div>
//                     <p class="text-blue-200">Available Courses</p>
//                 </div>
//                 <div>
//                     <div class="text-4xl font-bold mb-2">100+</div>
//                     <p class="text-blue-200">Professional Instructors</p>
//                 </div>
//                 <div>
//                     <div class="text-4xl font-bold mb-2">95%</div>
//                     <p class="text-blue-200">Customer Satisfaction</p>
//                 </div>
//             </div>
//         </div>
//     </section>

    // <!-- Footer -->
    // <footer class="bg-gray-900 text-white pt-12 pb-6">
    //     <div class="container mx-auto px-4">
    //         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
    //             <!-- Company Info -->
    //             <div>
    //                 <div class="flex items-center mb-4">
    //                     <i class="fas fa-graduation-cap text-blue-400 text-2xl mr-2"></i>
    //                     <span class="text-xl font-bold">LearnAcademy</span>
    //                 </div>
    //                 <p class="text-gray-400 mb-4">We offer the best training courses in various fields to develop your skills and achieve your career goals.</p>
    //                 <div class="flex space-x-4">
    //                     <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
    //                         <i class="fab fa-facebook-f"></i>
    //                     </a>
    //                     <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition">
    //                         <i class="fab fa-twitter"></i>
    //                     </a>
    //                     <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
    //                         <i class="fab fa-youtube"></i>
    //                     </a>
    //                     <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
    //                         <i class="fab fa-linkedin-in"></i>
    //                     </a>
    //                 </div>
    //             </div>
                
    //             <!-- Quick Links -->
    //             <div>
    //                 <h3 class="text-lg font-bold mb-4">Quick Links</h3>
    //                 <ul class="space-y-2">
    //                     <li><a href="#" class="text-gray-400 hover:text-white transition">Home</a></li>
    //                     <li><a href="#" class="text-gray-400 hover:text-white transition">About Us</a></li>
    //                     <li><a href="#" class="text-gray-400 hover:text-white transition">Courses</a></li>
    //                     <li><a href="#" class="text-gray-400 hover:text-white transition">Instructors</a></li>
    //                     <li><a href="#" class="text-gray-400 hover:text-white transition">Contact</a></li>
    //                 </ul>
    //             </div>
                
    //             <!-- Categories -->
    //             <div>
    //                 <h3 class="text-lg font-bold mb-4">Categories</h3>
    //                 <ul class="space-y-2">
    //                     <li><a href="#" class="text-gray-400 hover:text-white transition">Software Development</a></li>
    //                     <li><a href="#" class="text-gray-400 hover:text-white transition">Digital Marketing</a></li>
    //                     <li><a href="#" class="text-gray-400 hover:text-white transition">Graphic Design</a></li>
    //                     <li><a href="#" class="text-gray-400 hover:text-white transition">Business Management</a></li>
    //                     <li><a href="#" class="text-gray-400 hover:text-white transition">Languages</a></li>
    //                 </ul>
    //             </div>
                
    //             <!-- Newsletter -->
    //             <div>
    //                 <h3 class="text-lg font-bold mb-4">Newsletter</h3>
    //                 <p class="text-gray-400 mb-4">Subscribe to our newsletter to receive the latest offers and new courses.</p>
    //                 <div class="flex">
    //                     <input type="email" placeholder="Your Email" class="bg-gray-800 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
    //                     <button class="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition">
    //                         <i class="fas fa-paper-plane"></i>
    //                     </button>
    //                 </div>
    //             </div>
    //         </div>
            
    //         <div class="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
    //             <p class="text-gray-400 text-sm">© 2023 LearnAcademy. All rights reserved.</p>
    //             <div class="flex space-x-6 mt-4 md:mt-0">
    //                 <a href="#" class="text-gray-400 hover:text-white text-sm transition">Terms of Service</a>
    //                 <a href="#" class="text-gray-400 hover:text-white text-sm transition">Privacy Policy</a>
    //             </div>
    //         </div>
    //     </div>
    // </footer>
// </body>
// </html>