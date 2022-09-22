import { useState, useEffect } from "react";

export const useWidth = initialValue => {
const [mobile, setMobile] = useState(initialValue);

useEffect(() => {
		const handleview = () => {
			window.innerWidth < 900 ? setMobile(true) : setMobile(false);
		};

		handleview();
		// window.addEventListener('resize', handleview);
	}, []);

  return mobile

}