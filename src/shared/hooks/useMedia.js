import { useEffect, useState } from "react";

export const useMedia = () => {
	const [isTablet, setIsTablet] = useState(false);
	const [isDesktop, setIsDesktop] = useState(false);
	useEffect(() => {
		if (window && window.innerWidth >= 768) {
			setIsTablet(true);
		}
		if (window && window.innerWidth >= 1440) {
			setIsTablet(false);
			setIsDesktop(true);
		}
	}, []);

	return { isTablet, isDesktop };
};
