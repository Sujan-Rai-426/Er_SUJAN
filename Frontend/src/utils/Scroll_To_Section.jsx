export const Scroll_To_Section = (e, id) => {
    if (e) e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
        const offset = 70; 
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};