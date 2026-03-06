import users from './users';

function UserList() {
    return (
        <div>
        {users.map(function(userEvent) {
            return(
            <article>
                <h3>{userEvent.first_name}</h3>
                <p>User Group: {userEvent.user_group}</p>
                <p>ID: {userEvent.id}</p>
            </article>
            );
        })}
        </div>
    );
}

export default UserList;