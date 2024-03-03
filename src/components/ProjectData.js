import KeeperClone from "../images/project-keeper-clone.JPG";
import toDoList from "../images/project-todolist.JPG";
import movix from "../images/project-movix-web-app.JPG"
import ShoppingCart from "../images/shopping-cart.JPG";



const ProjectCardData = [
    {
        imgUrl: ShoppingCart,
        title: "ShoppingCart  (ReactJs, Context and localStorage)",
        description: "The Shopping Cart project is a React web app using React-Bootstrap and React Router. It employs useContext and useLocalStorage for advanced state management, utilizing localStorage for persistent shopping cart data storage.",
        view: "https://dhruvil-prajapati-shoppingcart.netlify.app/",
        source: "https://github.com/dhruvilprajapati/ShoppingCart"
    },
    {
        imgUrl: movix,
        title: "Movix Web App (ReactJs, SCSS and Redux)",
        description: "Movix is a modern movie application developed using React, Redux, and SCSS, This project showcases my proficiency in front-end development.",
        view: "https://dhruvil-movix-web-app.vercel.app/",
        source: "https://github.com/dhruvilprajapati/movix-web-app"
    },
    {
        imgUrl: KeeperClone,
        title: "Google Keeper App Clone (ReactJS and NodeJS)",
        description: "The UI of a Google Keep app clone was built using ReactJS and Material-UI.It was successful and I proceeded to deploy on Vercel.The UI of a Google Keep app clone was built.",
        view: "https://dp-google-keeper-app-clone.vercel.app/",
        source: "https://github.com/dhruvilprajapati/Google-Keeper-App-clone"
    },
    {
        imgUrl: toDoList,
        title: "To-do List  (Node Js)",
        description: "First of all, I learn Nodejs, then I gain knowledge by designing a to-do list as an experiment.The endeavor proved to be successful, prompting me to proceed with the deployment on Cyclic.",
        view: "https://dhruvil-todolist.cyclic.app/",
        source: "https://github.com/dhruvilprajapati/To-doList"
    }
]
export default ProjectCardData;
