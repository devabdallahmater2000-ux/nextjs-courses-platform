'use client'
import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import { useRouter } from 'next/navigation'

type Course = {
  id: number
  title: string
  category: string
  instructor: string
}

type SearchState = {
  query: string
  results: Course[]
  isOpen: boolean
}

type SearchContext = 'desktop' | 'mobile' | 'sidebar'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState<boolean>(false)
  const [searchStates, setSearchStates] = useState<Record<SearchContext, SearchState>>({
    desktop: { query: '', results: [], isOpen: false },
    mobile: { query: '', results: [], isOpen: false },
    sidebar: { query: '', results: [], isOpen: false }
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const router = useRouter()

  // Memoized courses data - in a real app, this would come from an API
  const courses: Course[] = useMemo(() => [
    { id: 1, title: "Advanced Web Development", category: "Software Development", instructor: "Dr. Ahmed Mohamed" },
    { id: 2, title: "Data Science Fundamentals", category: "Data Science", instructor: "Dr. Sara Abdullah" },
    { id: 3, title: "UI/UX Design Masterclass", category: "Design", instructor: "Ms. Layla Hassan" },
    { id: 4, title: "Digital Marketing Strategies", category: "Marketing", instructor: "Mr. Khaled Ibrahim" },
  ], [])

  // Debounced search function
  const performSearch = useCallback(async (query: string, context: SearchContext) => {
    if (query.length < 2) {
      setSearchStates(prev => ({
        ...prev,
        [context]: { ...prev[context], query, results: [], isOpen: false }
      }))
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      // Simulate API delay for better UX
      await new Promise(resolve => setTimeout(resolve, 150))

      const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(query.toLowerCase()) ||
        course.category.toLowerCase().includes(query.toLowerCase()) ||
        course.instructor.toLowerCase().includes(query.toLowerCase())
      )

      setSearchStates(prev => ({
        ...prev,
        [context]: { 
          ...prev[context], 
          query, 
          results: filteredCourses, 
          isOpen: filteredCourses.length > 0 
        }
      }))
    } catch (err) {
      setError('Search failed. Please try again.')
      setSearchStates(prev => ({
        ...prev,
        [context]: { ...prev[context], query, results: [], isOpen: false }
      }))
    } finally {
      setIsLoading(false)
    }
  }, [courses])

  // Debounced search effect
  useEffect(() => {
    const contexts: SearchContext[] = ['desktop', 'mobile', 'sidebar']
    
    contexts.forEach(context => {
      const query = searchStates[context].query
      
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current)
      }
      
      searchTimeoutRef.current = setTimeout(() => {
        performSearch(query, context)
      }, 300) // 300ms debounce
    })

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current)
      }
    }
  }, [searchStates.desktop.query, searchStates.mobile.query, searchStates.sidebar.query, performSearch])

  // Helper functions
  const openSidebar = useCallback(() => setIsSidebarOpen(true), [])
  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false)
    setSearchStates(prev => ({
      ...prev,
      sidebar: { ...prev.sidebar, query: '', results: [], isOpen: false }
    }))
  }, [])

  const toggleMobileSearch = useCallback(() => {
    setIsMobileSearchOpen(prev => {
      if (prev) {
        setSearchStates(prevState => ({
          ...prevState,
          mobile: { ...prevState.mobile, query: '', results: [], isOpen: false }
        }))
      }
      return !prev
    })
  }, [])

  const handleSearchSubmit = useCallback((query: string) => {
    if (!query.trim()) return
    
    router.push(`/search?query=${encodeURIComponent(query.trim())}`)
    setIsSidebarOpen(false)
    setIsMobileSearchOpen(false)
    
    // Clear all search states
    setSearchStates({
      desktop: { query: '', results: [], isOpen: false },
      mobile: { query: '', results: [], isOpen: false },
      sidebar: { query: '', results: [], isOpen: false }
    })
  }, [router])

  // Update search query for specific context
  const updateSearchQuery = useCallback((query: string, context: SearchContext) => {
    setSearchStates(prev => ({
      ...prev,
      [context]: { ...prev[context], query }
    }))
  }, [])

  // Clear search for specific context
  const clearSearch = useCallback((context: SearchContext) => {
    setSearchStates(prev => ({
      ...prev,
      [context]: { ...prev[context], query: '', results: [], isOpen: false }
    }))
  }, [])

  // Keyboard navigation for search results
  const handleKeyDown = useCallback((event: React.KeyboardEvent, context: SearchContext) => {
    const { results } = searchStates[context]
    if (results.length === 0) return

    switch (event.key) {
      case 'Escape':
        clearSearch(context)
        if (context === 'sidebar') closeSidebar()
        if (context === 'mobile') setIsMobileSearchOpen(false)
        break
      case 'Enter':
        if (results.length > 0) {
          handleSearchSubmit(results[0].title)
        }
        break
    }
  }, [searchStates, clearSearch, closeSidebar, handleSearchSubmit])

  // Cleanup effect
  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current)
      }
    }
  }, [])

  // Reusable SearchInput component
  const SearchInput = ({ context, className = "" }: { context: SearchContext, className?: string }) => {
    const { query, results, isOpen } = searchStates[context]
    
    return (
      <div className={`search-container relative ${className}`}>
        <div className="relative">
          <input 
            type="text" 
            aria-label="Search for courses, instructors"
            value={query}
            onChange={(e) => updateSearchQuery(e.target.value, context)}
            onKeyDown={(e) => handleKeyDown(e, context)}
            placeholder="Search for courses, instructors..." 
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            autoComplete="off"
          />
          <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
          {query && (
            <button 
              aria-label="Clear search"
              onClick={() => clearSearch(context)}
              className="absolute right-3 top-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <i className="fas fa-times"></i>
            </button>
          )}
          {isLoading && (
            <div className="absolute right-10 top-3">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
            </div>
          )}
        </div>
        
        {/* Search Results */}
        {isOpen && results.length > 0 && (
          <div className="search-results active absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto z-50">
            {results.map((course, index) => (
              <div 
                key={course.id} 
                className="search-result-item p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors"
                onClick={() => handleSearchSubmit(course.title)}
                tabIndex={0}
                role="button"
                aria-label={`Go to course ${course.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleSearchSubmit(course.title)
                  }
                }}
              >
                <div className="font-medium text-gray-900">{course.title}</div>
                <div className="text-sm text-gray-600">{course.category} • {course.instructor}</div>
              </div>
            ))}
          </div>
        )}
        
        {/* Error Message */}
        {error && (
          <div className="absolute top-full left-0 right-0 bg-red-50 border border-red-200 rounded-lg mt-1 p-2 text-red-600 text-sm">
            {error}
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center py-4 flex-1">
            {/* Logo */}
            <div className="flex items-center">
              <i className="fas fa-graduation-cap text-blue-600 text-2xl mr-2"></i>
              <span className="text-xl font-bold text-gray-800">LearnAcademy</span>
            </div>
            
            {/* Search Bar - Desktop */}
            <div className="hidden md:block flex-1 max-w-lg mx-8">
              <SearchInput context="desktop" />
            </div>
            
            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">Home</a>
              <a href="/courses" className="text-gray-600 hover:text-blue-600 transition-colors">Courses</a>
              <a href="/instructors" className="text-gray-600 hover:text-blue-600 transition-colors">Instructors</a>
              <a href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</a>
              <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
            
            {/* Auth Buttons - Desktop */}
            <div className="items-center mx-2">
              <button 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Join LearnAcademy"
              >
                Join Now
              </button>
            </div>
            
            {/* Search and Menu buttons for Mobile */}
            <div className="flex items-center space-x-4 md:hidden">
              <button 
                onClick={toggleMobileSearch} 
                className="text-gray-600 hover:text-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded p-1" 
                aria-label="Open mobile search"
                aria-expanded={isMobileSearchOpen}
              >
                <i className="fas fa-search text-xl"></i>
              </button>
              
              <button 
                onClick={openSidebar} 
                className="text-gray-600 hover:text-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded p-1" 
                aria-label="Open sidebar menu"
                aria-expanded={isSidebarOpen}
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
          
          {/* Search Bar - Mobile */}
          {isMobileSearchOpen && (
            <div className="mt-2 md:hidden">
              <SearchInput context="mobile" />
            </div>
          )}
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <i className="fas fa-graduation-cap text-blue-600 text-2xl mr-2"></i>
              <span className="text-xl font-bold text-gray-800">LearnAcademy</span>
            </div>
            <button 
              onClick={closeSidebar} 
              className="text-gray-500 hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded p-1" 
              aria-label="Close sidebar"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          
          {/* Sidebar Search */}
          <div className="mb-6">
            <SearchInput context="sidebar" />
          </div>
          
          <div className="space-y-4 mb-8">
            <a href="/" className="block py-3 px-4 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
              <i className="fas fa-home mr-3"></i>Home
            </a>
            <a href="/courses" className="block py-3 px-4 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500">
              <i className="fas fa-book-open mr-3"></i>Courses
            </a>
            <a href="/instructors" className="block py-3 px-4 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500">
              <i className="fas fa-chalkboard-teacher mr-3"></i>Instructors
            </a>
            <a href="/blog" className="block py-3 px-4 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500">
              <i className="fas fa-blog mr-3"></i>Blog
            </a>
            <a href="/contact" className="block py-3 px-4 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500">
              <i className="fas fa-envelope mr-3"></i>Contact
            </a>
          </div>
          
          <div className="space-y-4">
            <button className="w-full text-left py-3 px-4 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500">
              <i className="fas fa-sign-in-alt mr-3"></i>Login
            </button>
            <button className="w-full text-left py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <i className="fas fa-user-plus mr-3"></i>Join Now
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="overlay active" 
          onClick={closeSidebar}
        ></div>
      )}
    </>
  )
}

export default Navbar