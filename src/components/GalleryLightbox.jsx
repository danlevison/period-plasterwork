import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { MdFullscreen } from "react-icons/md";
import galleryImages from "../app/gallery-imgs"

function Lightbox({ activeSlide }) {
	const [toggler, setToggler] = useState(false);

	return (
		<>
			<button className="absolute top-[9rem] right-6 lg:top-[10.7rem] lg:right-10 hover:scale-110 duration-300" onClick={() => setToggler(!toggler)}>
				<MdFullscreen size={40} className="text-primaryText" />
			</button>
			<FsLightbox
				toggler={toggler}
				sources={galleryImages.map((photo) => `/assets/gallery/${photo.src}`)}
                // slide={activeSlide}
			/>
		</>
	);
}

export default Lightbox;