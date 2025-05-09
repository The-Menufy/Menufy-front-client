import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import BlurContainer from "../components/blurContainer";
import { Link } from "react-router-dom";
import { BACKEND_HOST, BACKEND_PORT } from "../config";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [direction, setDirection] = useState(1);
  const [typePlatFilter, setTypePlatFilter] = useState("all");
  const [typePlatOptions, setTypePlatOptions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(`http://${BACKEND_HOST}:${BACKEND_PORT}/product`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data || []);
        setFilteredProducts(data || []);
        // Extract unique typePlat values
        const uniqueTypePlats = [...new Set((data || []).map((product) => product.typePlat))].filter(Boolean);
        setTypePlatOptions(uniqueTypePlats);
        if (data?.length > 0 && data[0].photo) {
          setMainImage(data[0].photo); // Use Cloudinary URL directly
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = products;

    // Apply typePlat filter
    if (typePlatFilter !== "all") {
      filtered = filtered.filter(
        (product) => product.typePlat === typePlatFilter
      );
    }

    // Apply search query filter
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [typePlatFilter, searchQuery, products]);

  const handleHover = (newImage) => {
    if (newImage !== mainImage && newImage) {
      setDirection(newImage > mainImage ? 1 : -1);
      setMainImage(newImage);
    }
  };

  const handleTypePlatChange = (e) => {
    setTypePlatFilter(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const getFallbackImage = (e) => {
    e.target.src = "/fallback-image.png";
    e.target.alt = "Image not available";
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
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-full transition-all">
                      <Link to="/Menus">See menu</Link>
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  {mainImage ? (
                    <motion.img
                      key={mainImage}
                      src={mainImage}
                      alt="Product Preview"
                      className="w-full max-w-md rounded-xl object-contain"
                      initial={{ x: direction * 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -direction * 100, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      onError={getFallbackImage}
                    />
                  ) : (
                    <div className="w-full max-w-md h-64 flex items-center justify-center bg-gray-200 rounded-xl">
                      <p className="text-gray-500">No image available</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="px-4 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search by dish name..."
                  className="bg-black/30 text-white rounded-lg p-2 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full sm:w-64"
                  aria-label="Search by dish name"
                />
                <select
                  value={typePlatFilter}
                  onChange={handleTypePlatChange}
                  className="bg-black/30 text-white rounded-lg p-2 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  aria-label="Filter by dish type"
                >
                  <option value="all">All Types</option>
                  {typePlatOptions.map((type) => (
                    <option key={type} value={type}>
                      {type || "Unknown Type"}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
                {loading ? (
                  <div className="col-span-full text-center text-white" role="alert">
                    Loading products...
                  </div>
                ) : error ? (
                  <div className="col-span-full text-center text-red-500" role="alert">
                    {error}
                  </div>
                ) : filteredProducts.length === 0 ? (
                  <div className="col-span-full text-center text-white" role="alert">
                    No products available
                  </div>
                ) : (
                  filteredProducts.map((product) => (
                    <div
                      key={product._id}
                      className="bg-black/10 rounded-xl p-4 backdrop-blur-sm group hover:bg-black/20 transition-all flex flex-col items-center text-center"
                      onMouseEnter={() => handleHover(product.photo || null)}
                    >
                      <div className="w-full aspect-[4/3] relative flex justify-center items-center">
                        {product.photo ? (
                          <img
                            src={product.photo} // Use Cloudinary URL directly
                            alt={product.name || "Product"}
                            className="w-full h-full object-cover rounded-lg"
                            onError={getFallbackImage}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
                            <p className="text-gray-500">No image</p>
                          </div>
                        )}
                      </div>
                      <div className="mt-4">
                        <p className="text-sm font-medium text-white">
                          {product.name || "Unnamed Product"}
                        </p>
                        <p className="text-sm text-white">
                          ${product.price || "Price not available"}
                        </p>
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

export default HomePage;