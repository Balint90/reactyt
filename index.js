// ReactDOM.render(<h1>Hi, my name is Balint</h1>, document.getElementById('root'))
// ReactDOM.render(<ul><li>Line 1</li><li>Line 2</li></ul>, document.getElementById('root'))

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ms-3 me-3">
            <a className="navbar-brand" href="#">Bob's Bistro</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Pricing <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
                </ul>
            </div>
        </nav>
    )
}

function MainContent() {
    return (
        <h1 className="text-center">This is the body!</h1>
    )
}

// ReactDOM.render(
//     <div>
//         <Navbar />
//         <MainContent />
//     </div>,
//     document.getElementById("root")
// )

// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log("H1:")
// console.log(h1)

// <h1 class="header">
// JSX = JavaScript XML
// const element = <h1 className="header">This is JSX</h1>
// console.log("Element:")
// console.log(element)
/*
{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {
        className: "header", 
        children: "This is JSX"
    }, 
    _owner: null, 
    _store: {}
}
 */

// JSX = JavaScript XML
// ReactDOM.render(element, document.getElementById("root"))

//=============================================================

// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

// ReactDOM.render(
//     <div class="position-relative">
//         <Navbar />
//         <MainContent />
//     </div>,
//     document.getElementById("root")
// )

// const page_elem1 = (
//     <div>
//         <h1>Headline</h1>
//     </div>
// )
// const page_elem2 = (
//     <div>
//         <p>Paragraph 1</p>
//         <p>Paragraph 2</p>
//         <p>Paragraph 3</p>
//     </div>
// )
// const page_elem3 = (
//     <div>
//         <p>Paragraph 4</p>
//         <p>Paragraph 5</p>
//         <p>Paragraph 6</p>
//     </div>
// )
// const page_elem4 = (
//     <div>
//         <p>Paragraph 7</p>
//         <p>Paragraph 8</p>
//         <p>Paragraph 9</p>
//     </div>
// )

// document.getElementById("root").append(JSON.stringify(page_elem1))
// document.getElementById("root").append(page_elem2)
// document.getElementById("root").append(page_elem3)
// document.getElementById("root").append(page_elem4)

//Challenge - Project 1 part 1 - Markup
//11. Build a React Info site 49:59 in video

// const page2 = (
//     <div className="mt-3 ms-3 mb-3">
//         <img src="./react-logo.png" width="40px" />
//         <h1 className="mt-3 mb-3">Fun facts about react</h1>
//         <ul className="fs-3 text fw-bold ms-4">
//             <li>Was released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100k stars on Github</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
//     )

// ReactDOM.render(page2, document.getElementById("root"));

//12. Build a React Info site
//Pop Quiz! 
//54:44 in video
//quiz.md

/**
13. Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

// function Page_Comp() {
//     return (
//         <div>
//             <h1>Why am I excited to learn React?</h1>
//             <ul>
//                 <li>I hope I will be more productive if I could learn it</li>
//                 <li>This is an Imperative language</li>
//                 <li>Will make JS coding faster</li>
//             </ul>
//         </div>
//     )
// }

// ReactDOM.render(< Page_Comp />, document.getElementById("root"));

// 14. Build a React Info site
//Custom components part 2

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
    include a `img` element with the image of the React logo inside
    (src="./react-logo.png") and make sure to set the width to something
    more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
    I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

function Page_CH14() {
    return (
        <div className="mt-3 ms-3 mb-3">
            <Header />
            <h1 className="mt-3 mb-3">Reasons I am excited to learn React</h1>
            <ul className="fs-3 text fw-bold ms-4">
                <li>I hope I will be more productive if I could learn it</li>
                <li>This is an Imperative language</li>
                <li>Will make JS coding faster</li>
            </ul>
            <footer>
                <small>© 2022 Balint development. All rights reserved.</small>
            </footer>
        </div>
    )
}

ReactDOM.render(<Page_CH14 />, document.getElementById("root"))