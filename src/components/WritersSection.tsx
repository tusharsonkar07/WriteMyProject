
import React from 'react';

interface Writer {
  id: number;
  name: string;
  photo: string;
  expertise: string;
  description: string;
}

const writers: Writer[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    photo: "https://i.pravatar.cc/300?img=1",
    expertise: "Engineering Projects",
    description: "PhD in Mechanical Engineering with 8+ years of teaching experience"
  },
  {
    id: 3,
    name: "Dr. Jennifer Martinez",
    photo: "https://i.pravatar.cc/300?img=5",
    expertise: "Research Papers",
    description: "Published researcher with expertise in qualitative and quantitative methods"
  },
  {
    id: 4,
    name: "Thomas Anderson",
    photo: "https://i.pravatar.cc/300?img=7",
    expertise: "Computer Science",
    description: "Software engineer with 10+ years experience in full-stack development"
  },
  {
    id: 5,
    name: "Dr. Emily Chen",
    photo: "https://i.pravatar.cc/300?img=9",
    expertise: "Medical & Health Sciences",
    description: "Medical researcher with publications in top international journals"
  }
];

const WritersSection: React.FC = () => {
  return (
    <section id="writers" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Meet Our Best Writers</h2>
        <p className="section-subtitle">
          Our expert writers bring years of academic and professional experience to help you achieve excellence in all your projects
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {writers.map((writer, index) => (
            <div 
              key={writer.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={writer.photo} 
                  alt={`${writer.name}`} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-primary-600 rounded-full">
                    {writer.expertise}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{writer.name}</h3>
                <p className="text-gray-600">{writer.description}</p>
                
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">50+ projects</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WritersSection;
