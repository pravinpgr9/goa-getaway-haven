
import { Button } from "@/components/ui/button";

const DownloadAppSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-goa-blue rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Download Our Mobile App
              </h2>
              <p className="text-white/80 mb-6">
                Get exclusive deals, manage your bookings on the go, and discover personalized
                recommendations for your Goa adventure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-goa-blue hover:bg-white/90">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 384 512" fill="currentColor">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                  </svg>
                  App Store
                </Button>
                <Button className="bg-white text-goa-blue hover:bg-white/90">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                  </svg>
                  Google Play
                </Button>
              </div>
            </div>
            <div className="hidden md:block relative h-full">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                alt="Mobile app interface"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-goa-blue to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
