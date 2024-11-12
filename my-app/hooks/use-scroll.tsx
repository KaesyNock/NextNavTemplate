import { useCallback, useEffect, useState } from "react";

export default function useScroll(threshhold: number) {
    const [scrolled, setScrolled] = useState(false);

    const onScroll = useCallback(() => {
        setScrolled(window.scrollY > threshhold);
    }, [threshhold]);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [onScroll]);

    useEffect(() => {
        onScroll();
    }, [onScroll]);

    return scrolled;

}