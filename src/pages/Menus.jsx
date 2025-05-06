import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import BlurContainer from "../components/blurContainer";
import QRCodeGenerator from "../components/QRCodeGenerator";
import { BACKEND_HOST, BACKEND_PORT } from "../config";

const MenuPage = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [direction, setDirection] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://${BACKEND_HOST}:${BACKEND_PORT}/menu`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setMenus(data);
        if (data.length > 0 && data[0].photo) {
          setMainImage(data[0].photo);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching menus:", err);
        setError("Failed to fetch menus");
        setLoading(false);
      });
  }, []);

  const handleHover = (newImage) => {
    if (newImage !== mainImage) {
      setDirection(newImage > mainImage ? 1 : -1);
      setMainImage(newImage);
    }
  };

  const handleImageClick = (menuId) => {
    navigate(`/category/${menuId}`);
  };

  const renderStarRating = (rate) => {
    const filledStars = Math.round(rate);
    const totalStars = 5;
    return Array.from({ length: totalStars }, (_, i) => (
      <span
        key={i}
        className={i < filledStars ? "text-yellow-400" : "text-gray-400"}
      >
        {i < filledStars ? "★" : "☆"}
      </span>
    ));
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg.jpg')",
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.3)",
        }}
      />
      <div className="relative min-h-screen flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-16">
        <div className="w-full max-w-7xl pt-8">
          <BlurContainer
            blur="xl"
            opacity={50}
            padding={8}
            rounded="2xl"
            className="w-full mx-auto p-6"
          >
            <div className="flex flex-col space-y-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-4">
                <div className="flex flex-col space-y-6 md:w-1/2 text-center md:text-left">
                  <h1 className="text-3xl md:text-5xl font-bold text-white">
                    Welcome to TheMenuFy!
                  </h1>
                  <p className="text-lg text-white">
                    Manage your restaurant menus with ease and style. Customize,
                    update in real-time, and enhance customer experiences.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                    <Button
                      onClick={() => navigate("/")}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-full transition-all"
                    >
                      Back to home
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center overflow-hidden">
                  {mainImage ? (
                    <motion.img
                      key={mainImage}
                      src={`http://${BACKEND_HOST}:${BACKEND_PORT}${mainImage}`}
                      alt="MenuFy Preview"
                      className="w-3/4 max-w-sm rounded-xl object-contain cursor-pointer"
                      initial={{ x: direction * 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -direction * 100, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      onError={(e) => (e.target.src = "/fallback-image.png")}
                      onClick={() =>
                        handleImageClick(
                          menus.find((m) => m.photo === mainImage)._id
                        )
                      }
                    />
                  ) : (
                    <div className="w-3/4 max-w-sm h-64 flex items-center justify-center bg-gray-200 rounded-xl">
                      <p className="text-gray-500">No image available</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
                {loading ? (
                  <div className="col-span-full text-center text-white">
                    Loading menus...
                  </div>
                ) : error ? (
                  <div className="col-span-full text-center text-red-500">
                    {error}
                  </div>
                ) : menus.length === 0 ? (
                  <div className="col-span-full text-center text-white">
                    No menus available
                  </div>
                ) : (
                  menus.map((item) => (
                    <div
                      key={item._id}
                      className="bg-black/10 rounded-xl p-4 backdrop-blur-sm group hover:bg-black/20 transition-all flex flex-col items-center text-center"
                      onMouseEnter={() => handleHover(item.photo)}
                    >
                      <div className="w-full aspect-square relative flex justify-center items-center">
                        {item.photo ? (
                          <img
                            src={`http://${BACKEND_HOST}:${BACKEND_PORT}${item.photo}`}
                            alt={item.name}
                            className="w-full h-full object-cover rounded-lg cursor-pointer"
                            onError={(e) =>
                              (e.target.src = "/fallback-image.png")
                            }
                            onClick={() => handleImageClick(item._id)}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
                            <p className="text-gray-500">No image</p>
                          </div>
                        )}
                      </div>

                      <div className="mt-4">
                        <p className="text-sm font-medium text-white">
                          {item.name}
                        </p>
                        <p className="text-sm text-white">
                          {item.rate !== undefined && item.rate !== null
                            ? renderStarRating(item.rate)
                            : "No rating available"}
                        </p>
                        <div className="mt-3">
                          <QRCodeGenerator menuId={item._id} />
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </BlurContainer>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
