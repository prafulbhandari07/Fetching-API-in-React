function Header(props) {
    return (
        <header>
            <div id='navbar'>
                <h1>Countries & their info.</h1>
                <div id="searchBar">
                    <p>Search Countries Here👉🏻 </p>
                    <input type="text" value={props.inputText} onChange={(e) => props.setInputText(e.target.value)} />
                </div>
            </div>
        </header>
    )
}

export default Header;
//placeholder="Search Countries Here..."