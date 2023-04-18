const TrustedBy = () => {
  const imageLinks = [
    {
      id: 1,
      src: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png",
      alt: "facebook",
    },
    {
      id: 2,
      src: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png",
      alt: "google",
    },
    {
      id: 3,
      src: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png",
      alt: "netflix",
    },
    {
      id: 4,
      src: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png",
      alt: "pandg",
    },
    {
      id: 5,
      src: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png",
      alt: "paypal",
    },
  ];

  return (
    <main className="bg-sage-200 select-none">
      <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-5 py-2">
        <span className="font-semibold text-gray-400 text-xs sm:text-sm md:text-xl">
          Trusted by :
        </span>
        {imageLinks.map((img) => {
          return (
            <img
              src={img.src}
              alt={img.alt}
              key={img.id}
              className="h-10 w-12 sm:h-12 sm:w-16 md:h-20 md:w-24"
            />
          );
        })}
      </div>
    </main>
  );
};

export default TrustedBy;
