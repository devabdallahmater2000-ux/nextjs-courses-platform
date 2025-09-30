 const ReviewsSection = ()=> {
    const reviews = [
      {
        name: "Michael Brown",
        date: "3 days ago",
        rating: 5,
        comment:
          "Excellent course! The instructor explains concepts clearly and systematically. Highly recommended for anyone wanting to learn React from scratch.",
      },
      {
        name: "Sarah Johnson",
        date: "1 week ago",
        rating: 4.5,
        comment:
          "Comprehensive course covering all important aspects of React. The practical exercises are very helpful for learning.",
      },
    ];
  
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Student Reviews</h2>
  
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="md:w-1/3 text-center mb-6 md:mb-0">
            <div className="text-5xl font-bold text-blue-600">4.8</div>
            <div className="flex justify-center my-3">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-gray-600">1,245 reviews</div>
          </div>
  
          <div className="md:w-2/3 w-full">
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center">
                  <span className="w-12 text-sm text-gray-600">
                    {stars} star{stars !== 1 ? "s" : ""}
                  </span>
                  <div className="progress-bar flex-1 mx-3 bg-gray-200 rounded-full h-2">
                    <div
                      className="progress-fill h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500"
                      style={{ width: `${[75, 20, 4, 1, 0][5 - stars]}%` }}
                    ></div>
                  </div>
                  <span className="w-12 text-sm text-gray-600">
                    {[75, 20, 4, 1, 0][5 - stars]}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="border-b border-gray-100 pb-6 last:border-0"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="font-bold text-gray-800">{review.name}</div>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(review.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-1">
                      {review.rating}/5
                    </span>
                  </div>
                </div>
                <div className="text-sm text-gray-500">{review.date}</div>
              </div>
              <p className="text-gray-700 leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>
  
        <button className="w-full mt-6 border border-blue-600 text-blue-600 py-3 rounded-xl font-medium hover:bg-blue-50 transition">
          View All Reviews
        </button>
      </div>
    );
  }
  export default ReviewsSection;