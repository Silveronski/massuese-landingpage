import { useEffect, useState } from 'react';
import { calculateMargin } from '../utils/calculateMargin';

const useResizeWindowListener = ({mobileMargin, tabletMargin, laptopMargin, desktopMargin}) => {
    const [viewportMargin, setViewportMargin] = useState('0%');
    
    useEffect(() => {
        const handleResize = () => {
            setViewportMargin(calculateMargin(mobileMargin, tabletMargin, laptopMargin, desktopMargin));
        }

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    },[]);

    return viewportMargin;
}

export default useResizeWindowListener
