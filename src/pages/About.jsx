import Heading from '../components/Shared/Heading';
import ProfRico from '../assets/team/rico.jpeg';   
import ProfNiel from '../assets/team/niel.jpeg';
import ProfHafizh from '../assets/team/hafizh.jpeg';
import { FaUsers, FaRocket, FaHeart, FaStar } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: <FaUsers />, number: '10K+', label: 'Happy Customers' },
    { icon: <FaRocket />, number: '500+', label: 'Products Sold' },
    { icon: <FaHeart />, number: '50+', label: 'Brand Partners' },
    { icon: <FaStar />, number: '4.8', label: 'Average Rating' },
  ];

  const team = [
    {
      name: 'Yerico Alexander',
      position: 'Frontend Developer',
      image: ProfRico,
      description: 'Passionate about creating amazing shopping experiences',
    },
    {
      name: 'Nathaniel Johan Petrus Damanik',
      position: 'Head of Design',
      image: ProfNiel,
      description: 'Expert in user experience and interface design',
    },
    {
      name: 'Muhammad Hafizh Firdaus',
      position: 'Tech Lead',
      image: ProfHafizh,
      description: 'Building scalable and robust e-commerce solutions',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container py-8">
        <Heading title="About SHOPPY" subtitle="Learn more about our story and mission" />
        
        {/* Hero Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                Building the Future of E-Commerce
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                At SHOPPY, we believe that shopping should be an experience, not just a transaction.
                Since our founding, we&apos;ve been committed to providing our customers with the best 
                products, exceptional service, and an unparalleled online shopping experience.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Our curated selection features the latest in technology, fashion, and lifestyle 
                products from trusted brands around the world. We&apos;re not just a marketplace - 
                we&apos;re your partner in discovering amazing products that enhance your life.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2025</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
                alt="About us"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl text-primary mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              To democratize access to quality products and create a seamless shopping 
              experience that connects customers with the brands and products they love. 
              We strive to make online shopping convenient, secure, and enjoyable for everyone.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              To become the world&apos;s most trusted and innovative e-commerce platform, 
              where technology meets human connection. We envision a future where every 
              purchase tells a story and every customer feels valued and heard.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              The passionate people behind SHOPPY who make it all possible
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {member.name}
                </h4>
                <p className="text-primary font-medium mb-2">
                  {member.position}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Address</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    123 Commerce Street<br />
                    Jakarta, Indonesia 12345
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400">+62 123 456 7890</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">hello@shoppy.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Business Hours</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;