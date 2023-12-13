function Header(props) {
    return (
        <header>
            <div id='navbar'>
                <h1>Welcome User</h1>
                <div id="searchBar">
                    <h4>Search Countries Here👉🏻 </h4>
                    <input type="text" value={props.inputText} onChange={(e) => props.setInputText(e.target.value)} />
                </div>
            </div>
        </header>
    )
}

export default Header;