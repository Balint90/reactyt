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

const page2 = (
    <div className="mt-3 ms-3 mb-3">
        <img src="./react-logo.png" width="40" />
        <h1 className="mt-3 mb-3">Fun facts about react</h1>
        <ul className="fs-3 text fw-bold ms-4">
            <li>Was released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
    )

ReactDOM.render(page2, document.getElementById("root"));