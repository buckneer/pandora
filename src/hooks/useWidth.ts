import {useEffect, useState} from "react";


export const useWidth = () => {
	const [regular, setRegular] = useState(true);

	useEffect(() => {
		const handleNavBar = () => {
			if (window.innerWidth < 1280 && regular) {
				setRegular(false);
			}

			if (window.innerWidth >= 1280) {
				setRegular(true);
			}
		};

		handleNavBar();
		window.addEventListener('resize', handleNavBar);

		return () => window.removeEventListener('resize', handleNavBar);
	}, [regular, setRegular]);


	return regular;
}
