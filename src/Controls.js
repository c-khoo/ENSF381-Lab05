function Delete() {
    return (
        <div>
            <input id="delete-search" type="text" />
            <button id="delete-btn" type="button">Delete</button>
        </div>
    );
}

function Controls() {
    return (
        <div>
            <Delete />
            <button id="sort-by-group" type="button">Sort by Group</button>
            <button id="sort-by-id" type="button">Sort by ID</button>
            <button id="grid-list-toggle" type="button">Grid/List</button>
        </div>
    );
}

export default Controls;