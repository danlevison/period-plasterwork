import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { MdFullscreen } from "react-icons/md";
import galleryImages from "../app/gallery-imgs";

function Lightbox() {
	const [toggler, setToggler] = useState(false);

	return (
		<div className="relative">
			<button onClick={() => setToggler(!toggler)} className="absolute top-[0] right-0 hover:scale-110 duration-300" aria-label="Fullscreen">
				<MdFullscreen size={40} className="text-primaryText" />
			</button>
			<FsLightbox
				toggler={toggler}
				sources={galleryImages.map((photo) => `/assets/gallery/${photo.src}`)}
			/>
		</div>
	);
}

export default Lightbox;