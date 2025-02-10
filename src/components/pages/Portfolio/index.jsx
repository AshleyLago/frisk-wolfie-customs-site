import { useState, useEffect, useCallback } from 'react';

import arrow from '../../../assets/arrow-left.svg';
import cross from '../../../assets/close-x.svg';

// List of available categories, file names must match these tab names
const tabs = [
    "Promoted", "Fandom", "Ant", "Beetle", "Horseshoe", "Isopod", 
    "Lobster", "Pillbug", "Scorpion", "Shrimp", "Tsuchinoko", "Worm"
];

export const PortfolioPage = () => {
    /* State Variables */
    const [activeTab, setActiveTab] = useState("Promoted"); // Currently selected tab
    const [images, setImages] = useState([]); // First image from each folder for the grid
    const [isModalOpen, setIsModalOpen] = useState(false); // Controls modal visibility
    const [selectedImage, setSelectedImage] = useState(""); // Currently selected image in the modal
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Index of the selected image
    const [portfolioImages, setPortfolioImages] = useState([]); // All images for the active tab
    const [imageInfo, setImageInfo] = useState(""); // Text content from the associated .txt file

    /* Fetch and organize images based on the active tab */
    useEffect(() => {
        const fetchImages = async () => {
            // Dynamically import all images from the folders inside of the portfolio folder
            const imageModules = import.meta.glob('../../../assets/portfolio/**/*.jpg', { eager: true });
            // Extract the actual image URLs from the imported image modules
            const allImages = Object.keys(imageModules).map(path => imageModules[path].default);

            // Loops through every image URL and groups images by their folder paths (e.g. by beetle, ant, promoted, etc.)
            const groupedImages = {};
            allImages.forEach(image => {
                const folderPath = image.substring(0, image.lastIndexOf('/')); // Extract folder path
                if (!groupedImages[folderPath]) {
                    groupedImages[folderPath] = [];
                } // Initializes an empty array for the folderPath if the folderPath did not exist prior
                groupedImages[folderPath].push(image);
            });

            // Extract the first image from each folder for the grid
            const firstImages = Object.values(groupedImages).map(images => images[0]);

            // Filter images to match the active tab
            const filteredImages = firstImages.filter(image => {
                const searchTerm = `/${activeTab.toLowerCase()}/`;
                return image.toLowerCase().includes(searchTerm);
            });

            setImages(filteredImages);
        };

        fetchImages();
    }, [activeTab]);


    /* Handle image click to open modal and load related images and text */
    const handleImageClick = (image) => {
        const folderPath = image.substring(0, image.lastIndexOf('/'));

        // Load all the images from the selected folder (i.e. All images associated with the selected plush)
        const imageModules = import.meta.glob('../../../assets/portfolio/**/*.jpg', { eager: true });
        const allImages = Object.keys(imageModules).map(path => imageModules[path].default);
        const portfolioImages = allImages.filter(img => img.startsWith(folderPath));

        // Load associated text file (if available)
        const textModules = import.meta.glob('../../../assets/portfolio/**/*.txt', { eager: true, query: '?raw', import: 'default' });
        const availableTxtFiles = Object.keys(textModules).filter(txtPath => 
            txtPath.startsWith(`../../../assets${folderPath.split('/assets')[1]}/`)
        );
        let imageText = "No information available.";
        if (availableTxtFiles.length > 0) {
            imageText = textModules[availableTxtFiles[0]]; // Use the first available text file
        }

        // Update state for modal display
        setPortfolioImages(portfolioImages);
        setSelectedImage(image);
        setCurrentImageIndex(portfolioImages.indexOf(image));
        setImageInfo(imageText);
        setIsModalOpen(true);
    };


    /* Close the modal and reset related state */
    const closeModal = useCallback(() => {
        setIsModalOpen(false);
        setSelectedImage("");
        setPortfolioImages([]);
        setCurrentImageIndex(0);
        setImageInfo("");
    }, []);

    /* Navigate to the previous image in the modal */
    const goToPreviousImage = useCallback(() => {
        const newIndex = (currentImageIndex - 1 + portfolioImages.length) % portfolioImages.length;
        setSelectedImage(portfolioImages[newIndex]);
        setCurrentImageIndex(newIndex);
    }, [currentImageIndex, portfolioImages]);

    /* Navigate to the next image in the modal */
    const goToNextImage = useCallback(() => {
        const newIndex = (currentImageIndex + 1) % portfolioImages.length;
        setSelectedImage(portfolioImages[newIndex]);
        setCurrentImageIndex(newIndex);
    }, [currentImageIndex, portfolioImages]);



    /* Handle keyboard navigation (left/right arrows and esc key) in the modal */
    useEffect(() => {
        const handleKeyDown = (event) => {
        if (isModalOpen) {
            if (event.key === 'ArrowLeft') {
                goToPreviousImage();
            } else if (event.key === 'ArrowRight') {
                goToNextImage();
            } else if (event.key === 'Escape') {
                closeModal();
            }
        }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isModalOpen, goToNextImage, goToPreviousImage, closeModal]);


    return (
        <div className="mx-4">

            {/* Tab Selector */}
            <div className="flex justify-center mb-10">
                <select
                    value={activeTab}
                    onChange={(e) => setActiveTab(e.target.value)}
                    style={{ fontFamily: '"Sour Gummy", serif', fontWeight: 500 }}
                    className="px-4 py-2 text-sm lg:text-base xl:text-lg"
                >
                    {/* In special case, corrects Horseshoe to Horseshoe Crab */}
                    {tabs.map(tab => (
                        <option key={tab} value={tab} className="text-[#32CBFF]" style={{ fontFamily: '"Sour Gummy", serif', fontWeight: 500 }}>
                            {tab === "Horseshoe" ? "Horseshoe Crab" : tab}
                        </option>
                    ))}
                </select>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden">
                        <img
                            src={image}
                            alt={`${activeTab} ${index + 1}`}
                            className="w-full h-48 object-cover cursor-pointer"
                            onClick={() => handleImageClick(image)}
                        />
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4" onClick={closeModal}>
                    <div className="relative bg-white p-4 rounded-lg max-w-[90vw] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                        {/* Close Button */}
                        <img
                            src={cross}
                            alt="Close"
                            className="opacity-20 hover:opacity-75 cursor-pointer w-6 h-6 sm:w-8 sm:h-8 absolute top-6 right-6 z-10"
                            onClick={closeModal}
                        />
      
                        {/* Main Image Container */}
                        <div className="relative flex items-center justify-center">
                            <div className="relative">
                                <img
                                    src={selectedImage}
                                    alt="Selected Plush"
                                    className="max-h-[60vh] object-contain"
                                />
      
                                {/* Navigation Arrows */}
                                {portfolioImages.length > 1 && (
                                    <>
                                        <img
                                            src={arrow}
                                            alt="Previous"
                                            className="opacity-40 hover:opacity-75 cursor-pointer w-5 h-5 sm:w-10 sm:h-10 absolute left-3 top-1/2 transform -translate-y-1/2 z-10"
                                            onClick={goToPreviousImage}
                                        />
                                        <img
                                            src={arrow}
                                            alt="Next"
                                            className="opacity-40 hover:opacity-75 cursor-pointer w-5 h-5 sm:w-10 sm:h-10 absolute right-3 top-1/2 transform -translate-y-1/2 scale-x-[-1] z-10"
                                            onClick={goToNextImage}
                                        />
                                    </>
                                )}
                            </div>
                        </div>
      
                        {/* Image Details */}
                        <h1 className="pt-3 text-base sm:text-xl text-wrap" style={{ fontFamily: '"Baloo 2", sans-serif', fontWeight: 600 }}>
                            Plush Details:
                        </h1>
                        <div className="mt-2 p-3 bg-gray-100 rounded-lg w-full text-center overflow-hidden">
                            <pre className="whitespace-pre-wrap break-words text-sm sm:text-base" style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 400 }}>
                                {imageInfo}
                            </pre>
                        </div>
      
                        {/* Thumbnail Strip */}
                        <div className="mt-3 flex gap-2 overflow-x-auto max-w-[80vw] p-2 scrollbar-thin scrollbar-thumb-[#32CBFF] scrollbar-track-white">
                            {portfolioImages.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Thumbnail ${index}`}
                                    className={`w-16 h-16 object-cover cursor-pointer rounded-md border-2 duration-300 ${
                                        selectedImage === img ? "border-[#32CBFF] scale-105" : "border-transparent"
                                    }`}
                                    onClick={() => {
                                        setSelectedImage(img);
                                        setCurrentImageIndex(index);
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};