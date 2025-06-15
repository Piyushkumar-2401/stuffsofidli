import React from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';

const VideoSection = () => {
  const [isMuted, setIsMuted] = React.useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    const video = document.getElementById('hero-video') as HTMLVideoElement;
    if (video) {
      video.muted = !video.muted;
    }
  };

  return (
    <section className="relative py-20 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience the <span className="text-orange-500">Art of Idli Making</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Watch our skilled chefs prepare authentic South Indian delicacies with traditional techniques and fresh ingredients.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* Video Element */}
            <video
              id="hero-video"
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              poster="https://images.pexels.com/photos/5949888/pexels-photo-5949888.jpeg?auto=compress&cs=tinysrgb&w=1200"
            >
              {/* Using a cooking video from Pexels */}
              <source 
                src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4" 
                type="video/mp4" 
              />
              <source 
                src="https://videos.pexels.com/video-files/5560763/5560763-hd_1920_1080_30fps.mp4" 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>

            {/* Video Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>

            {/* Video Controls */}
            <div className="absolute top-6 right-6 flex space-x-3">
              <button
                onClick={toggleMute}
                className="bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/70 transition-all"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>

            {/* Video Content Overlay */}
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  From Kitchen to Your Plate
                </h3>
                <p className="text-lg text-gray-200 mb-6">
                  Every idli is crafted with precision, steamed to perfection, and served with love. 
                  Our traditional methods ensure authentic taste in every bite.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors font-semibold">
                    Order Now
                  </button>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-colors font-semibold">
                    Visit Us
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Video Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Live Kitchen</h4>
              <p className="text-gray-300">Watch our chefs prepare fresh idlis throughout the day</p>
            </div>
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">🥥</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Fresh Ingredients</h4>
              <p className="text-gray-300">Premium quality rice and lentils sourced daily</p>
            </div>
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">⏰</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Traditional Process</h4>
              <p className="text-gray-300">Time-honored techniques passed down through generations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;