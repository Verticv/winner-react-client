import React from 'react'
import './carousel.css'
import visual from '../images/visual.png'
import visual2 from '../images/visual2.png'

const images = [visual,visual2]
// images must be an array of urls , if using Next JS this could something like
// const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']
// images must be an array of urls , if using Next JS this could something like
// const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']


const Carousel = () => {

    // We will start by storing the index of the current image in the state.
    const [currentImage, setCurrentImage] = React.useState(0);

    // We are using react ref to 'tag' each of the images. Below will create an array of
    // objects with numbered keys. We will use those numbers (i) later to access a ref of a
    // specific image in this array.
    const refs = images.reduce((acc, val, i) => {
        acc[i] = React.createRef();
        return acc;
    }, {});

    const scrollToImage = i => {
        // First let's set the index of the image we want to see next
        setCurrentImage(i);
        // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,
        // we can then use built-in scrollIntoView API to do eaxactly what it says on the box - scroll it into
        // your current view! To do so we pass an index of the image, which is then use to identify our current
        // image's ref in 'refs' array above.
        refs[i].current.scrollIntoView({
            //     Defines the transition animation.
            behavior: 'smooth',
            //      Defines vertical alignment.
            block: 'nearest',
            //      Defines horizontal alignment.
            inline: 'start',
        });
    };

    // Some validation for checking the array length could be added if needed
    const totalImages = images.length;

    // Below functions will assure that after last image we'll scroll back to the start,
    // or another way round - first to last in previousImage method.
    const nextImage = () => {
        if (currentImage >= totalImages - 1) {
            scrollToImage(0);
        } else {
            scrollToImage(currentImage + 1);
        }
    };

    const previousImage = () => {
        if (currentImage === 0) {
            scrollToImage(totalImages - 1);
        } else {
            scrollToImage(currentImage - 1);
        }
    };

    // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.
    const arrowStyle = "absolute text-white text-2xl z-10 bg-black h-16 w-16 rounded-sm opacity-50 flex items-center justify-center"

    // Let's create dynamic buttons. It can be either left or right. Using
    // isLeft boolean we can determine which side we'll be rendering our button
    // as well as change its position and content.

    const leftArrow = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
    )

    const rightArrow = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    )

    const sliderControl = isLeft => (
        <button
            type="button"
            onClick={isLeft ? previousImage : nextImage}
            className={`${arrowStyle} ${isLeft ? 'left-2' : 'right-2'}`}
            style={{ top: '40%' }}
        >
            {isLeft ? leftArrow : rightArrow}
        </button>
    );

    return (
        <div className="flex w-1920 flex-shrink-0">
            <div className="relative w-full">
                <div className="carousel">
                    {sliderControl(true)}
                    {images.map((img, i) => (
                        <div className="w-full flex-shrink-0" key={img} ref={refs[i]}>
                            <img src={img} className="w-full object-contain" alt={img} />
                        </div>
                    ))}
                    {sliderControl()}
                </div>  
            </div>
        </div>
    )
}

export default Carousel
