import { useEffect, useState } from 'react';
import { calculateMargin } from '../utils/calculateMargin';

const useResizeWindowListener = ({mobileMargin, tabletMargin, laptopMargin, desktopMargin}) => {
    const [viewportMargin, setViewportMargin] = useState('0%');
    
    useEffect(() => {
        const handleResize = () => {
            setViewportMargin(calculateMargin(mobileMargin, tabletMargin, laptopMargin, desktopMargin));
            if (window.innerWidth > 648) document.querySelector('header .main-navbar').style.display = 'block';
            else document.querySelector('header .main-navbar').style.display = 'none';
        }

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    },[]);

    return viewportMargin;
}

export default useResizeWindowListener
