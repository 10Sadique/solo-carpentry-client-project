import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Solo Carpentry`;
    }, [title]);
};

export default useTitle;
