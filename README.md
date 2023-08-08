# Frontend Mentor - Space Tourism Multi-page Website

This is a solution to the [Space tourism multi-page website](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3).


### Solution Requirements

- [ ] Optimal layout for each of the website's pages depending on their device's screen size
- [ ] Hover states for all interactive elements on the page
- [ ] Toggle between the tabs to see new information

### Modifications

### Tasks
- [ ] Navbar for all layout

### Styling
- [x] Background on all layout and page


### Notes
- Background image handling 
  - It's really tricky to use bg-[] for background image with tailwind, there are total 12 of images across all different layouts, the complete string of the classname must be appear somewhere in the code in order for tailwind to parse and added to the stylesheet, this defeats goal of dynamically generating different background depending on page and size in the first place, so opt to using Imaging instead.

### Links

- [Github repo](https://github.com/Pakkerman/space-tourism-website)
- [Deployed on Vercel](https://space-tourism-website-orpin-omega.vercel.app/)

### Built with

- [Create T3 App](https://create.t3.gg/)
  - [Nextjs](https://nextjs.org/)
  - [React](https://react.dev/)
  - [TailwindCSS](https://tailwindcss.com/)

